const fs = require('fs');

function main(data) {
    if(process.argv[2] === 'add'){
    //    fs.readFile("todos.json", 'utf-8', (err, data) => {
    //     if(err){
    //         console.log(err);
    //     } else {
    //         fs.writeFile("todos.json", data1, (err) => {
    //             if(err){
    //                 console.log(err);
    //             } else {
    //                 data.push({
    //                     "todo" : data
    //                 });
    //             }
    //         })
    //     }
    //    })
    const newTodo = {
        "todo" : data
    };
    fs.appendFile("todos.json", newTodo.toString(), (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("updated");
        }
    })
    } 
    else if(process.argv[2] === 'delete'){

    } else if(process.argv[2] == 'update'){

    } else {
        console.log("The command is invalid");
    }
    // if(process.argv[2] === 'count_length'){
    //     fs.readFile(process.argv[3], 'utf-8', (err, data) => {
    //         if(err){
    //             console.log(err);
    //         } else {
    //             const dummyData = data.split('\n').length;
    //             console.log(`The lines in ${process.argv[3]} file are ${dummyData}`);
    //         }
    //     });
    // }
    // else {
    //     console.log("The command is invalid");
    // }
    
};

main(process.argv[3]);