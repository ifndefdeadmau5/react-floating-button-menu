// @flow weak
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const fse = require('fs-extra');

function copyFile(file) {
  const buildPath = path.resolve(__dirname, '../build/', path.basename(file));
  return new Promise((resolve) => {
    fse.copy(
      file,
      buildPath,
      (err) => {
        if (err) throw err;
        resolve();
      },
    );
  })
  .then(() => console.log(`Copied ${file} to ${buildPath}`));
}


const files = [
  'README.md',
];

Promise
  .all(files.map(file => copyFile(file)));
