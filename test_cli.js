const vorpal = require('vorpal')();
const fs = require('fs');
const stringGen = require('./string_gen.js');

vorpal
  .command('make-file', 'Generates a file.')
  .action(function makeFile(args, callback) {
    fs.mkdirSync('test_files');
    fs.writeFile('test_files/new_file.js', stringGen("test"), () => this.log('Finished creating string logger.'))
    callback();
  });

vorpal
  .delimiter('test-cli$')
  .show();
