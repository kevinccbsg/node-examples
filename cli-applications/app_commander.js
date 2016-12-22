#!/usr/bin/node
var program = require('commander');

program
  .version('1.0.0')
  .description('A git clone');

program
  .command('commit <message>')
  .description('commit a commit to the commit server')
  .option('-f --force', 'force a commit')
  .action(function(message, options) {
    console.log(message);
    if (options.force) {
      console.log('We are using a force push!');
    }
  });

program.parse(process.argv);