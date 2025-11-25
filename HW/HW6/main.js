// let a = 'Hello world'
// let b = "lorem ipsum";
// let c = "javascript is cool"
//
//
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)
//
// console.log(a.toLocaleUpperCase())
// console.log(a.toLocaleLowerCase())
//
//
// let str = ' dirty  string '
// let cleanStr = str.trim()
// console.log(cleanStr);
//
// let str1 = "Hello my name is Kokos"
//
//
// let arr = (str1) =>{
//     return str1.split(' ')
// }
// console.log(arr(str1));
//
// let arr1 = [10,8,-7,55,987,-1011,0,1050,0]
//
// let transform = arr1.map (tran=>tran.toString());
// console.log(transform)
//
//
//
// let arr2 = [12,3231,678,4,98,5,98,324,6]
//
// const sortNums = (arr, direction) =>{
//     if(direction === 0) {
//         arr.sort((a, b) => a - b)
//     }else if (direction === 1){
//         arr.sort((a, b) => b - a)
//     }
//     return arr;
//
// }
//
// console.log(sortNums( arr2 , 0));
//
//
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let sort = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration);
// console.log(sort);
//
// let filtered = coursesAndDurationArray.filter(course =>course.monthDuration > 5);
//
// console.log(filtered);
//
//
// let map = coursesAndDurationArray.map((course , index) => {course.id = index+1; return course;});
//

// console.log(map);
//
//
const values = ['6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const suits = [
    { suit: 'spade', color: 'black' },
    { suit: 'club', color: 'black' },
    { suit: 'heart', color: 'red' },
    { suit: 'diamond', color: 'red' }
];

const createDeck = () =>{

    let deck = []
    for( suit of suits ){
        for (let value of values) {
            deck.push({value:value,
                suit:suit.suit,
                color:suit.color
            })
        }
    }
    return deck;
}

const deck = createDeck()
console.log(deck);

let pack = deck.reduce ((acc, card) => {

    acc[card.suit].push(card);
    return acc;
},{spade: [], club: [], heart: [], diamond: [] });

console.log(pack);


// const findAce = deck.filter(card => card.value === 'Ace' && card.suit === 'spade');
// console.log(findAce)
//
// const findRed = deck.filter(card => card.suit === 'diamond' || card.suit === 'heart');
// console.log(findRed)
//
// const findDiamond = deck.filter(card => card.suit === 'diamond');
// console.log(findDiamond);
//
// const findMore = deck.filter((card ) => ['9','10','Jack', 'Queen', 'King', 'Ace'].includes(card.value) && card.suit === 'club');
// console.log(findMore)
//


