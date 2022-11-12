// var Data =[
//     {
//         key:1,
//         fruits:"Mango",
//         qty:30
//     },
//     {
//         key:2,
//         fruits:"Papaya",
//         qty:30
//     },
//     {
//         key:3,
//         fruits:"Apple",
//         qty:30
//     },
//     {
//         key:4,
//         fruits: "Banana",
//         qty: 40
//     }
// ]

// // This is to increament the qty
// // let Map = Data.map((object) =>{
// //     return object.fruits=="Apple"?{...object,fruits:'apple'}:object;           
// // });
// // console.log(Map);
// // This is to add all the qty
// // let count = 0;
// // let Map = Data.map((object) =>{
// //     count += object.qty;
// // });
// // console.log(count);

// // This is to print all the elements in the array using map
// // let Map = Data.map((object) =>{
// //     console.log(object);
// // });

// // This is to find any element in the object using find()
// // let Val = Data.find(function(object){
// //     return object.fruits === 'Apple';
// // });
// // console.log(Val);

// // let Val = Data.find(function(object){
// //     return object.key === 5;
// // });
// // console.log(Val); //Output - undefined;


// // To add a new value in blank or existing array
// // Data.push({key: 4, fruits: 'banana', qty: 40});
// // console.log(Data);


let restart = 0;
function Restart(){
    restart = 0;
    let Val = Data[restart];
    document.getElementById('text').style.marginLeft = '257px';
    document.getElementById('previous').style.cursor = 'no-drop';
    document.getElementById("previous").disabled = true;
    document.getElementById('next').style.cursor = 'pointer';
    document.getElementById("next").disabled = false;
    document.getElementById('title').innerHTML = Val.key;
    document.getElementById('text').innerHTML = Val.fruits;
}
function Previous(){
    if(restart > 0){
        restart = restart - 1;
    }
    if(restart === 0){
        document.getElementById('previous').style.cursor = 'no-drop';
        document.getElementById("previous").disabled = true;
        document.getElementById('next').style.cursor = 'pointer'
        document.getElementById("previous").disabled = false;
        let Val = Data[restart];
        document.getElementById('title').innerHTML = Val.key;
        document.getElementById('text').innerHTML = Val.fruits;
    }
    if(restart > 0 && restart < Data.length){
        document.getElementById('previous').style.cursor = 'pointer';
        document.getElementById("previous").disabled = false;
        document.getElementById('next').style.cursor = 'pointer';
        document.getElementById("next").disabled = false;
        let Val = Data[restart];
        document.getElementById('title').innerHTML = Val.key;
        document.getElementById('text').innerHTML = Val.fruits;
    }
    if(restart > 0 && restart === Data.length - 1){
        document.getElementById('previous').style.cursor = 'pointer';
        document.getElementById("previous").disabled = false;
        document.getElementById('next').style.cursor = 'no-drop';
        document.getElementById("next").disabled = true;
        let Val = Data[restart];
        document.getElementById('title').innerHTML = Val.key;
        document.getElementById('text').innerHTML = Val.fruits;
    }
}
function Next(){
    restart = restart + 1;
    if(restart > 0 && restart < Data.length){
        document.getElementById('previous').style.cursor = 'pointer';
        document.getElementById("previous").disabled = false;
        document.getElementById('next').style.cursor = 'pointer';
        document.getElementById("next").disabled = false;
        let Val = Data[restart];
        document.getElementById('title').innerHTML = Val.key;
        document.getElementById('text').innerHTML = Val.fruits;
    }
    if(restart > 0 && restart === Data.length - 1){
        document.getElementById('previous').style.cursor = 'pointer';
        document.getElementById("previous").disabled = false;
        document.getElementById('next').style.cursor = 'no-drop';
        document.getElementById("next").disabled = true;
        let Val = Data[restart];
        document.getElementById('title').innerHTML = Val.key;
        document.getElementById('text').innerHTML = Val.fruits;
    }
}
// https://newsdata.io/api/1/news?apikey=pub_13367a5d73c50aabc44d499e4e69e8af8a2c9&q=Sports 