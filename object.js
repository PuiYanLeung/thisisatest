// let offer = "none";
// let time = 1000;

// const cafe ={
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks:[
//        ["Cappuccino",
//        "Latte",
//        "Filter coffee"], 
//         ["Tea",
//         "Hot chocolate"]
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",
//     openCafe(){
//         if (this.hasSpecialOffers){
//             return "Time for a special offer!";
//         }       
//     },
//     closeCafe(){
//         return "We are closed, come backtomorrow!";
//     }
// };

// console.log(cafe.openCafe());

// cafe.is5star = false;

// console.log(cafe);


// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// const person ={
//     "first name": "John",
//     age:18
// };


//console.log(person."first name")
//console.log(person["first name"])

// let day = "Saturday";
// let alarm = "";

// const Alarm ={
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// };

// if (day === "Saturday" || day === "Sunday"){
//     alarm = Alarm.weekendAlarm;
// }else{
//     alarm = Alarm.weekdayAlarm;
// }

// console.log(alarm);

//Activity 1
// const person ={
//     name: "John",
//     age:18,
//     favSongs:[
//         ["ABC",
//         "EFG",
//         "XYZ"], 
//          ["Chinese Song 1",
//          "Chinese Song 2"]
//      ],
//     sayHi(){
//         return `Hello my name is ${this.name}`;
//     }
// };

// console.log(person.sayHi());


//Activity 2
// const pet ={
//     name: "Bobo",
//     typeOfPet:"dog",
//     age:2,
//     colour:"brown",
//     eat(){
//         return `${this.name} is eating`;
//     },
//     drink(){
//         return `${this.name} is drinking`;
//     }
// };

// pet.name = "Doggie"

// console.log(pet.eat());

// pet.name = "Mimi"

// console.log(pet.drink());

//Activity 3
const coffeeShop ={
    branch:"CityCentre",
    totalCost:0,
    drink:[
       ["Cappuccino",3],
       ["Latte",3],
       ["Filter coffee",2], 
       ["Tea",2],
       ["Hot chocolate",4]
    ],
    food:[
        ["Croissant",4],
        ["Toast",2],
        ["Sandwich",5], 
        ["Cake",5]
     ],
    drinkOrdered(drinkNum){
        if (drinkNum>=0 && drinkNum<5){
            this.totalCost += this.drink[drinkNum][1];
            return(`You ordered ${this.drink[drinkNum][0]}, £${this.drink[drinkNum][1]}`);
        }else{
            return(`Invalid drink number. Please choose again.`);
        }
    },
    foodOrdered(foodNum){
        if (foodNum>=0 && foodNum<4){
            this.totalCost += this.food[foodNum][1];
            return(`You ordered ${this.food[foodNum][0]}, £${this.food[foodNum][1]}`);
        }else{
            return(`Invalid food number. Please choose again.`);
        }
    },
    totalCostFn(){
        return(`Total cost is £${this.totalCost}`);
    }
};

console.log(coffeeShop.drinkOrdered(0));
console.log(coffeeShop.drinkOrdered(4));
console.log(coffeeShop.foodOrdered(2));
console.log(coffeeShop.foodOrdered(5));
console.log(coffeeShop.totalCostFn());