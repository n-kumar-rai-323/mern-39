// TypeScript
// - Js with type definition
// - loosely cooupled js but tightly coupled ts
console.log('hello world')



let fullName: string = "Nishan Kumar Rai"

enum UserRoles{
    Trainer ="trainer",
    Admin="admin",
    Student= "student"
}

const ROLE: string = UserRoles.Trainer


interface IUserObj{
    name:string,
    email:string,
    address?:string
}

let obj: IUserObj={

}







function addNumbers(a:number,b:number): Promise<number>{
    let c = a + b;
    return c;
}

let result = addNumbers('10', 20)