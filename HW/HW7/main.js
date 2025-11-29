// class Users{
//     constructor(id, name, surname, email, phone){
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//     }
//
// }
//
// const arr = []
//
// let u1 = new Users(1,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u2 = new Users(2,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u3 = new Users(3,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u4 = new Users(4,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u5 = new Users(5,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u6 = new Users(6,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u7 = new Users(7,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u8 = new Users(8,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u9 = new Users(9,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// let u10 = new Users(10,'kokos', 'Pupkin', 'asd@asd', 380671234567);
// arr.push(u1,u2, u3, u4, u5, u6, u7, u8, u9,u10)
//
// console.log(arr);
//
// console.log(arr.filter(user => user.id % 2 === 0));
//
// console.log(arr.sort((a, b) => a.id - b.id));
//
//
//
// class Client {
//     constructor(id,name, surname, email, phone, order){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arr1 = []
//
// let client = new Client(1,'dya', 'Pupkin', 'asd@asd', 380671234567, ['kokos','bread','butter', 'apples']);
// let client1 = new Client(2,'dya', 'Pupkin', 'asd@asd', 380671234567, ['kokos','bread','butter']);
// let client2 = new Client(3,'dya', 'Pupkin', 'asd@asd', 380671234567, ['kokos','butter']);
// arr1.push(client,client1,client2);
// console.log(arr1);
//
// let sort = arr1.sort((a,b) => a.order.length - b.order.length);
// console.log(sort);
//
//
// function CarCreator(model,producer,year,maxSpeed,volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.driver =  null
//
//     this.drive = function (){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`)
//     }
//
//     this.info = function (){
//         console.log(`Model - ${this.model} Producer - ${this.producer} Year - ${this.year} Max Speed - ${this.maxSpeed} Engine Volume - ${this.volume}%`);
//     }
//     this.updateSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed
//         console.log(`Speed - ${this.maxSpeed} `);
//     }
//     this.updateYear = function (newYear){
//         this.year = newYear
//         console.log(`Year - ${this.year}`);
//     }
//     this.addDriver = function (driver){
//         this.driver =  driver;
//         console.log(`Driver - ${this.driver.name} ${this.driver.exp}`);
//     }
//
// }
// let car = new CarCreator('Rs Q8', 'Audi', 2022 , 322, 3.0);
// car.info()
// car.updateSpeed(20);
// car.updateYear(2025);
// car.addDriver({name:'Vasya', exp: 5});
//
// console.log(car);
//

class Popelushka{
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}class Prince{
    constructor(name, age, shoesSize){
        this.name = name;
        this.age = age;
        this.shoes = shoesSize;
    }

}

let challenger = []

let popelushka = new Popelushka('Olya', 19,25);
let popelushka1 = new Popelushka('Sara', 15,28);
let popelushka2 = new Popelushka('Olya', 16,21);
let popelushka3 = new Popelushka('Sara', 29,22);
let popelushka4 = new Popelushka('Olya', 18,23);
let popelushka5 = new Popelushka('Sara', 13,24);

challenger.push(popelushka,popelushka1,popelushka2,popelushka3,popelushka4,popelushka5);

let prince = new Prince('John' ,25, 28);

for (const challengerElement of challenger) {
    if(challengerElement.footSize === prince.shoes){
        console.log(challengerElement)
    }
}

let find = challenger.find(item => item.footSize === prince.shoes);
console.log(find);

