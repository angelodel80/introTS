class Student {
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = firstName+" "+middleName+" "+lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "hello " + person.firstName +" "+ person.lastName
}

//let user = "Angelo user";
//let u = [];
//let user = {firstName : "Angelo", lastName:"Del Grosso"}

let user = new Student("Angelo", "Mario", "Del Grosso");

document.body.textContent = greeter(user);
