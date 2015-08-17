var argv = require('yargs').argv;
var fs = require('fs');
var shuffle = require('lodash.shuffle');
var file = argv.f;

if (file) {
  process.stdout.write('\033c \n\n\n');

  console.log(
    shuffle( fs
      .readFileSync(file, 'utf8')
      .replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .trim()
      .split(' ')
    ).join(' ')
  , '\n\n\n');
}
