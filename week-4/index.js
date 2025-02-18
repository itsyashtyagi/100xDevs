const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program
  .command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const lines = data.split('\n').length;
            console.log(`There are ${lines} in the ${file}`);
        }
    })
});

program
  .command('add')
  .description('Add the todo in list')
  .argument('<Todo_list>', 'add the todo')
  .action((todo) => {
    fs.readFile('todo.json', 'utf-8', (err, data) => {
      if(err){
        console.log(err);
      } else {
        let jsondata = JSON.parse(data);
        let addedData = {
          "todo" : todo
        }
        jsondata.push(addedData);
        var newData = JSON.stringify(jsondata);
        fs.writeFile('todo.json', newData, err => {
          if(err){
            console.log(err);
          } else {
            console.log("New todo added");
          }
        })
      }
    })
});

program.parse();
 