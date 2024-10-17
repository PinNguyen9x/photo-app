#!/bin/bash

# Build reactjs app with production mode
npm run build

# Move to build folder
cd dist

# Clone index.html into 200.html
cp index.html 200.html