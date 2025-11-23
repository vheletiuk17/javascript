// //стрілочна функція (+: спрощенна конструкція)
// const foobar = (a,b) => {
//     let res = a+b
//     console.log(res)
//     return res;
// }
//
//
// // this - цей обєкт (звернення до елементів обєкта в локальний області видимості)
// let user = {
// username: 'kokos',
// email: 'kokos@asdd.com',
// greeting: function (msg) {
//     console.log('hello my username - ' + this.user.username)
// }
// }

// замиканння
function oblectCreator(id, name) {
    let obj = {id:id, name:name}
    return {
        getId:function(){
            return obj.id
        },
        setId : (newId) =>{
            if (newId != 0 && newId != obj.id){
                obj.id = newId
            }
        }
    }
}
let proxy = oblectCreator(1 ,'users')
proxy.setId(1100560)

console.log(proxy.getId());

// let kokos = oblectCreator(1, 'Kokos');
// console.log(kokos);
//
