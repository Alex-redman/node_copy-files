/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const [, , sourcePath, destinationPath] = process.argv;

if (!sourcePath || !destinationPath) {
  console.error('You must provide both source and destination paths.');
} else {
  if (path.resolve(sourcePath) === path.resolve(destinationPath)) {
    console.error('Source and destination paths must be different.');
  }

  fs.cp(sourcePath, destinationPath, (error) => {
    if (error) {
      console.error('Failed to copy file:', error.message);
    } else {
      console.log('File copied successfully.');
    }
  });
}
