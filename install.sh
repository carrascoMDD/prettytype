#! /bin/bash

# Must have node & npm installed (npw now ships with npm included)


# installs from public repositories into node_modules used by the build process as specified in package.json
npm install


# installs from public repositories into bower_components the ones specified in bower.json 
bower install


