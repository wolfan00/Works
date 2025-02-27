const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('|Create => 1 |Update => 2 |Read => 3 |Delete => 4 |', (answer) => {
    if(answer=='1'){
        rl.question('name', (answer1) => {
            rl.question('salary', (answer2) => {
            create(answer1,answer2)
            rl.close()
            }); 
        });
        
    }else if(answer=='2'){
        rl.question('name', (answer1) => {
            rl.question('salary', (answer2) => {
            update(answer1,answer2)
            rl.close()
            }); 
        });
    }else if(answer=='3'){
        read()
        rl.close()
    }else if(answer=='4'){
        Delete()
        rl.close()
    }else{
        rl.close();
    }
    
});
function create(name,salary){
    fs.writeFile("employees.json",'{"name": '+'"'+name+ '"'+', "salary":'+ salary+'}',(err)=>{
        if(err) console.log(err)
    })
}
function update(name,salary){
    fs.appendFile('employees.json','{"name": '+'"'+name+ '"'+', "salary":'+ salary+'}',(err)=>{
        if(err) console.log(err)
    })
}
function read(){
    fs.readFile('employees.json','utf-8',(err,data)=>{
        if(err) console.log(err)
            console.log(data)
    })
}

function Delete(){
    fs.unlink('employees.json',(err)=>{
        if(err) console.log(err)
    })
}

