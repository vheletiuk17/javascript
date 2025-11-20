let arr = [
    11,22,33,'asd','zxc','qwe',true , false,{}
]
console.log(arr);

let bukvar = {
    title: 'bukvar',
    page: 232,
    genre: ' study'
}
let asd = {
    title: 'sport',
    page: 332,
    genre: ' study',
    auothers: [
        {
            age: 43,
            name: 'Ivan'
        }
    ]
}
let zxc = {
    title: 'science',
    page: 634,
    genre: ' study',
    auothers: [
        {
            age: 33,
            name: 'Charls'
        }
    ]
}
let users = [
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
    {name:'zxc', nickname: 'asd', password: '123qweasd'},
]
console.log(users)

let weather = [
    { morning: 32, day: 30, evening: 28},
    { morning: 32, day: 30, evening: 28},
    { morning: 32, day: 30, evening: 28},
    { morning: 32, day: 30, evening: 28},
    { morning: 32, day: 30, evening: 28},
    { morning: 32, day: 30, evening: 28},
    { morning: 32, day: 30, evening: 28}
]

let x = 0

if (x !== 0){
    console.log('right');
}else{
    console.log('wrong')
}

let time = 44

if(time <=15 ){
    console.log('first decade')
}if(time<=30 && time > 15){
    console.log('second decade')
}if(time<=45 && time >= 30){
    console.log('third decade')
}if(time < 60 && time >= 45){
    console.log('fourth decade')
}