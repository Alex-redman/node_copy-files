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
  } else if (!fs.existsSync(sourcePath)) {
    console.error('Source does not exist.');
  } else {
    const sourceStat = fs.statSync(sourcePath);
    const recursive = sourceStat.isDirectory();

    fs.cp(sourcePath, destinationPath, { recursive }, (error) => {
      if (error) {
        console.error('Failed to copy:', error.message);
      } else {
        console.log('Copied successfully.');
      }
    });
  }
}
