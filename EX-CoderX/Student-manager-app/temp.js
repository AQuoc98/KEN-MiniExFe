var readlineSync = require('readline-sync');
var fs = require("fs")

var students = []

function loadData(){
    var data = fs.readFileSync("./data.json")
    students = JSON.parse(data)
}

function showMenu(){
    console.log("1. Show all students")
    console.log("2. Create a new student")
    console.log("3. Save and exit")
    var value = readlineSync.question("> ")
    switch(value){
        case "1":
            showStudents();
            showMenu()
            break;
        case "2":
            createStudent();
            showMenu()
            break;
        case "3":
            saveAndExit();
            break;
        default:
            break;
    }
}

function showStudents(){
    for (student of students){
        console.log(student.name, student.age)
    }
}

function createStudent(){
    var name = readlineSync.question("What your name?")
    var age = readlineSync.question("What your age?")
    student = {
        name: name,
        age: parseInt(age)
    }
    students.push(student)
}

function saveAndExit(){
    var data = JSON.stringify(students)
    fs.writeFileSync("./data.json", data, {encoding:"utf8"})
}

function main(){
    loadData()
    showMenu()
}

main()