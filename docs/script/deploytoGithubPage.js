/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const ghpages = require('gh-pages');
const path = require('path');

function deploytoGithubPage() {
  console.log('start github page deploy...');


  ghpages.publish(path.resolve(__dirname, '../dist'), (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('end github page deploy...');
    }
  });
}

deploytoGithubPage();
