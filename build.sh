mkdir -p assets/uswds
cp -R node_modules/uswds/dist/css node_modules/uswds/dist/img node_modules/uswds/dist/fonts node_modules/uswds/dist/js assets/uswds/
mkdir -p _sass/uswds
cp -R node_modules/uswds/dist/scss/* _sass/uswds/
mkdir -p assets/js
cp -R src/js/* assets/js/
