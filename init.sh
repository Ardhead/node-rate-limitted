#!/bin/bash -e
echo "Install node modules"
   cd "$(dirname "$0")"; npx install-peerdeps --save eslint-config-airbnb; npm install;

echo "Complete"