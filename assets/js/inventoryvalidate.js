function handleSubmit(e) {
    e.preventDefault();

    clearMsg();

    if($('#input-file').val()) {
        parse();
    }
}


var headers = [];
var errorCount = 0;
var warningCount = 0;
var recordCount = 0;
var hasValidFacilities = false;
var allRecordWarnings = {
    'underutilized servers': 'No facilities were listed having underutilized servers. Please verify this information.',
    'facility downtime': 'No facilities were listed with any downtime. Please verify this information.',
    'key mission facilities': 'No key mission facilities were listed. Please verify this information.'
}

var validValues = {
    "record validity": ['invalid facility', 'valid facility'],
    "ownership type": ['agency owned', 'colocation', 'outsourcing', 'using cloud provider'],
    "inter-agency shared services position": ['provider', 'tenant', 'none'],
    "country": ['u.s.', 'outside u.s.'],
    "data center tier": ['non-tiered', 'tier 1', 'tier 2', 'tier 3', 'tier 4', 'unknown', 'using cloud provider'],
    "key mission facility": ['yes', 'no'],
    "key mission facility type": ['mission', 'processing', 'control', 'location', 'legal', 'other'],
    "electricity is metered": ['yes', 'no'],
    "closing quarter": ['q1', 'q2', 'q3', 'q4'],
    "closing stage": ['closed', 'migration execution', 'not closing'],
};

var validTiers = ['tier 1', 'tier 2', 'tier 3', 'tier 4'];

var requiredFields = {
    valid: [
        'agency abbreviation', 'component', 'record validity', /*'data center name',*/
        'ownership type', 'gross floor area', 'data center tier', 'key mission facility', 'electricity is metered',
        'underutilized servers', 'actual hours of facility downtime', 'planned hours of facility availability',
        'rack count', 'total servers', 'total mainframes', 'total hpc cluster nodes', 'total virtual hosts', 'closing stage',
    ],
    closed: [
        'agency abbreviation', 'component', 'record validity', /*'data center name',*/
        'ownership type', 'gross floor area', 'data center tier', 'closing stage'
    ],
    invalid: ['agency abbreviation', 'component', 'record validity'],
    otherOwner: ['agency abbreviation', 'component', 'record validity', 'closing stage'],
    tenant: ['agency abbreviation', 'component', 'record validity', 'closing stage', 'ownership type'],
    kmf: ['agency abbreviation', 'component', 'record validity', 'closing stage', 'ownership type', 'key mission facility type']
};

function buildMsg(msg, classes) {
    if(msg) {
        let elm = $('<div class="message">'+msg+'</div>');
        if(classes) {
            elm.addClass(classes);
        }
        return elm;
    }
    else {
        return '';
    }
}

function showBlock(elms, classes) {
    let container = $('<div class="record"></div>');
    if(classes) {
        container.addClass(classes);
    }

    for(let i = 0; i < elms.length; i++) {
        // If there's a blank after this, just add padding instead to be more web-friendly
        if(typeof elms[i+1] !== 'undefined' && !elms[i+1]) {
            elms[i].addClass('pad-bottom');
        }

        container.append(elms[i]);
    }
    $('#results').append(container);
}

function buildDivider() {
    return $('<hr class="row-divider"/>');
}

function clearMsg() {
    $('#results').empty();
}

function isValid(field) {
    if(typeof field != 'undefined' && field.length != 0) {
        return true;
    }
    return false;
}

function processRow(row) {
    let parsed = {};
    // An error in PapaParse is preventing proper parsing of header rows. Instead
    // of header: true in the config, we must use the following workaround.
    if(!headers.length) {
        headers = row.data;
        return;
    }
    else {
        // 'greedy' option for skipEmptyLines is also broken; workaround:
        if(!row.data || row.data.join('').trim().length == 0) {
            return;
        }

        for(let i = 0; i < headers.length; i++) {
            parsed[headers[i].toLowerCase()] = row.data[i];
        }
    }

    recordCount++;
    let results = checkErrors(parsed);
    if(results.errors.length || results.warnings.length) {
        showErrors(parsed, results.errors, results.warnings);
    }
}

function isTiered(data) {
    return isValid(data['data center tier']) &&
        validTiers.indexOf(data['data center tier'].toLowerCase()) >= 0;
}

function checkErrors(data) {
    let results = {
        warnings: [],
        errors: []
    };

    /*
     * Error checking.
     */

    let applicable = false;

    // Check that required fields are filled out.
    let required = requiredFields['valid'];
    // Override the default required fields for special categories.

    // Invalid records are generally bad data so we relax our data checks.
    if(data['record validity'].toLowerCase() == 'invalid facility') {
        required = requiredFields['invalid'];
    }
    // Facilities not owned by the agency are not required to report most metrics.
    else if(data['ownership type'].toLowerCase() != 'agency owned') {
        required = requiredFields['otherOwner'];
    }
    // Tenants also do not need to report most metrics.
    else if(data['inter-agency shared services position'].toLowerCase() == 'tenant') {
        required = requiredFields['tenant'];
    }
    // Key mission facilities have reduced requirements.
    else if(data['key mission facility'].toLowerCase() == 'yes') {
        required = requiredFields['kmf'];
        applicable = true;
        hasValidFacilities = true;
    }
    // Closed facilities may be older records and thus missing recent metrics.
    else if(data['closing stage'].toLowerCase() == 'closed') {
        required = requiredFields['closed'];
    }
    // Otherwise, this is a real, applicable data center that needs further checks.
    else {
        applicable = true;
        hasValidFacilities = true;
    }

    for(let i = 0; i < required.length; i++) {
        if( typeof data[required[i]] == 'undefined' || data[required[i]].trim().length == 0 ) {
            results['errors'].push('The field "' + required[i] + '" must be filled in.');
        }
    }

    // Closing Stage
    if(isValid(data['closing stage']) &&
        ['closed', 'migration execution'].indexOf(data['closing stage'].toLowerCase()) > -1) {

        if(!isValid(data['closing quarter']) || !isValid(data['closing fiscal year'])) {
            results['errors'].push('If a facility has a closing stage of "Closed" or "Migration Execution", both Closing Year and Closing Quarter must be filled in.');
        }
    }

    /*
     * If the record is not valid, this is assumed to be bad data and we don't do any further error checks.
     */
    if(!applicable) {
        errorCount += results['errors'].length;
        warningCount += results['warnings'].length;

        return results;
    }

    // Generic validation check
    let fields = Object.keys(validValues);
    for(let i = 0; i < fields.length; i++) {
        let field = fields[i];
        let values = validValues[field];

        if(isValid(data[field]) && values.indexOf(data[field].toLowerCase()) == -1) {
            results['errors'].push('The value for "'+ field +'" is not valid, must be one of: "' + values.join('", "') + '". The value given was "' + data[field] + '".');
        }
    }

    // Cloud Provider
    if(data['ownership type'].toLowerCase() == 'using cloud provider' && data['data center tier'].toLowerCase() != 'using cloud provider') {
        results['errors'].push('Data Center Tier must be "Using Cloud Provider" if Ownership Type is "Using Cloud Provider".');
    }

    // Shared Service
    if(data['ownership type'].toLowerCase() == 'colocation' && !isValid(data['inter-agency shared services position'])) {
        results['errors'].push('Inter-Agency Shared Services Position must be filled in if Ownership Type is "Colocation".');
    }

    // KMFs
    if(isValid(data['key mission facility']) && data['key mission facility'].toLowerCase() == 'yes') {
        if(!isValid(data['key mission facility type'])) {
            results['errors'].push('Key Mission Facilities must have a Key Mission Facility Type.');
        }
    }

    // Availability
    if(isValid(data['planned hours of facility availability']) && data['planned hours of facility availability'] == 0) {
        results['errors'].push('Planned Hours of Facility Availability must be greater than 0.');
    }

    /*
     * Data validation rules. This should catch any bad data. (warnings)
     */

    // Non-tiered
    if(!isTiered(data) && data['ownership type'].toLowerCase() == 'agency owned') {
        results['warnings'].push('Only tiered data centers need to be reported, marked as "' + data['data center tier'] + '"');
    }

    // Electricity
    if(isValid(data['electricity is metered']) && data['electricity is metered'].toLowerCase() == 'yes') {
        if(!isValid(data['avg electricity usage']) || !isValid(data['avg it electricity usage'])) {
            results['warnings'].push('If Electricity is Metered equals "Yes", both Avg Electricity Usage and Avg IT Electricity Usage should be filled in.');
        }
        else if(parseFloat(data['avg electricity usage']) <= parseFloat(data['avg it electricity usage'])) {
            results['warnings'].push('Avg Electricity Usage should be greater than Avg IT Electricity Usage');
        }
    }

    // KMFs
    if(isValid(data['key mission facility type']) && isValid(data['key mission facility']) &&
        data['key mission facility'].toLowerCase() != 'yes') {
        results['warnings'].push('Key Mission Facility Type should only be present if Key Mission Facility is "Yes".');
    }

    if(isValid(data['key mission facility']) && data['key mission facility'].toLowerCase() == 'yes') {
        if(!isTiered(data)) {
            results['warnings'].push('Non-tiered data centers should not be Key Mission Facilities. Key Mission Facilities should be Tier 1, Tier 2, Tier 3, or Tier 4 for Data Center Tier.');
        }

        if(isValid(data['ownership type']) && data['ownership type'].toLowerCase() != 'agency owned') {
            results['warnings'].push('Key Mission Facilities should be "Agency Owned" for Ownership Type.');
        }

        if(isValid(data['closing stage']) && data['closing stage'].toLowerCase() != 'not closing') {
            results['warnings'].push('Key Mission Facilities should be "Not Closing" for Closing Stage.');
        }
    }

    // Availability
    // We can't set this too high, since some agencies run their data centers only during business hours, and not all are
    // designed for 99% uptime.
    let minimumHours = (8 * 5 * 4 * 3) * 0.9; // 8 hours in a day * 5 days a week * 4 weeks a month * 3 months * 90% uptime
    if(
        isValid(data['planned hours of facility availability']) &&
        parseInt(data['planned hours of facility availability']) > 0 &&
        parseInt(data['planned hours of facility availability']) < minimumHours
    ) {
        results['warnings'].push('Planned Hours of Facility Availability for a quarter should usually be at least ' + minimumHours + '.');
    }

    // Total Servers vs Total Virtual Hosts
    if(
        isValid(data['total servers']) && isValid(data['total virtual hosts']) && isValid(data['total mainframes']) &&
        parseInt(data['total virtual hosts']) > (parseInt(data['total servers']) + parseInt(data['total mainframes']))
    ) {
        results['warnings'].push('Total Virtual Hosts should not be greater than Total Servers plus Total Mainframes. Total Virtual Hosts represents the physical servers or mainframes dedicated to providing a virtualization layer to guest operating systems. These should be also included in the Total counts. Total Virtual Hosts is not a count of the guest operating systems (Total Virtual OS in previous collections).');
    }

    /*
     * Flags for all-records. Checks to see if agencies are generally following our guidance.
     */
    if(applicable) {
        // Downtime
        if(isValid(data['actual hours of facility downtime']) && data['actual hours of facility downtime'] > 0) {
            delete allRecordWarnings['facility downtime'];
        }

        // Underutilized Servers
        if(isValid(data['underutilized servers']) && data['underutilized servers'] > 0) {
            delete allRecordWarnings['underutilized servers'];
        }

        // Key Mission Facilities
        if(isValid(data['key mission facility']) && data['key mission facility'].toLowerCase() == 'yes') {
            delete allRecordWarnings['key mission facilities'];
        }
    }

    errorCount += results['errors'].length;
    warningCount += results['warnings'].length;

    return results;
}

function showErrors(data, errors, warnings) {
    let msgs = [];
    let classes = [];
    msgs.push(
        buildMsg(data['data center id'] + ' | ' + data['component'] + ' | ' + data['data center name'])
    );
    if(errors.length) {
        classes.push('has-errors');
        msgs = msgs.concat(showCategory('Errors', errors));
    }
    if(warnings.length) {
        classes.push('has-warnings');
        msgs = msgs.concat(showCategory('Warnings', warnings));
    }

    msgs.push(buildDivider());
    showBlock(msgs, classes.join(' '));
}

function showCategory(label, errors) {
    let msgs = [];
    if(errors.length) {
        msgs.push(buildMsg(label+':', 'indent-1 list-'+label.toLowerCase().replace(' ', '-')));
        for(let i = 0; i < errors.length; i++) {
            msgs.push(buildMsg(errors[i], 'indent-2 list-'+label.toLowerCase().replace(' ', '-')));
        }
    }
    return msgs;
}

function parseDone() {
    msgs = [];

    if(hasValidFacilities && Object.values(allRecordWarnings).length > 0) {
        msgs = msgs.concat(showCategory('General Warnings', Object.values(allRecordWarnings)));
        msgs.push(buildDivider());
    }

    msgs = msgs.concat([
        buildMsg('Inventory validation complete.'),
        buildMsg(recordCount + ' records processed.'),
        buildMsg('')
    ]);
    if(errorCount > 0) {
        msgs.push(
            buildMsg('<strong class="error">' + errorCount + ' errors were found.  You must resolved these errors before submitting your inventory data!</strong>')
        )
        msgs.push(buildMsg(''));
    }
    else {
        msgs.push(
            buildMsg('<strong class="success">No critical errors were found. You may submit your inventory data.<strong>')
        );
        msgs.push(buildMsg(''));
    }
    if(warningCount > 0) {
        msgs.push(
            buildMsg(warningCount + ' warnings were found.  You do not have to resolve these warning before submitting your inventory data, but it is strongly suggested that you investigate them.')
        );
    }
    showBlock(msgs);
}

function parse() {
    headers = [];
    errorCount = 0;
    warningCount = 0;
    recordCount = 0;

    let papaConfig = {
        step: processRow,
        complete: parseDone
    };
    $('#input-file').parse({config: papaConfig});
}

function handleWarningDisplay() {
    $('#results').toggleClass('hide-warnings', !$('#toggle-warnings').prop('checked'));
}

$( document ).ready(function (){
    $('#submit').click(handleSubmit);
    $('#validate-form').submit(handleSubmit);
    $('#toggle-warnings').click(handleWarningDisplay);
});
