/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const [, , sourcePath, destinationPath] = process.argv;

if (!sourcePath || !destinationPath) {
  console.error('You must provide both source and destination paths.');
  process.exit(1);
}

if (sourcePath === destinationPath) {
  console.log('Source and destination are the same. Nothing to do.');
  process.exit(0);
}

try {
  const stat = fs.statSync(sourcePath);

  if (!stat.isFile()) {
    console.error('Source must be a file.');
    process.exit(1);
  }

  fs.copyFileSync(sourcePath, destinationPath);
  console.log('File copied from', sourcePath, 'to', destinationPath);
} catch (err) {
  console.error('Error: ', err.message);
  process.exit(1);
}
