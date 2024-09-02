

let graduates = [
    {buzor: 22,
    chisom: 34,
    ifeoma: 67,
    amara: 90,
    chibuike: 45
     },
    
        {buzor: 230,
        chisom: 343,
        ifeoma: 67,
        amara: 90,
        chibuike: 45
       }
    ]
      
 let result =  graduates.some((graduate) => {

    if(graduate.buzor < 23){
      return    console.log("truoooo");
     }else{
       return  console.log("falseoooo")
     }

    })
 
          
console.log(result)


//   splice()
//   slice()
//   split()
//   Math.floor
//   Math.ceil

// ----------------------------------------------------------------
// function  createInv(){
//     const inv        = "INV-"  
//     const timestamp  = Date.now()
//   const randomNum =  Math.round(Math.random() * 1000)


//     return inv + timestamp + randomNum
// }

// console.log(createInv())


// --------------------------------------------------------------
// function addArrays(number){

//    number.reduce((total, num) => total + num, 0);
//    return number
//  }

//     let sumUp =  addArrays([2, 4, 7]) 
//  console.log(sumUp)


// --------------------------------------------------------------
// // ROUND A NUMBER TO A SPECIFIC NUMBER OF DECIMAL PLACE
//    function roundUp(num, decimalPlaces){
      
//            const factor = Math.pow(10, decimalPlaces)

//         return  num * factor/factor
//    }
 

//            console.log( Math.round(roundUp(10.76,2 )))

 

// FORMATTING DATE TO A SPECIFIC FORMAT:
   // function formatDate(date){

   //    const options = {
   //       year: 'numeric',
   //       month: 'long',
   //       day:   'numeric'
   //    };

   //    return  
   //          date.toLocaleString('en-US', options)

   // }           
   //      console.log(formatDate(new Date(Date.UTC(2012, 11, 20, 3))))         //figuring out
 

   
// ---------------------------------------------------------------------------------
// JAVASCRIPT classes:

// class user{
//     constructor(username, email, password){
//          this.username = username;
//          this.email    =email;
//          this.password =password
//     }
        
 
//      static countUsers(){              //this is "Static class" and its used when you dont want to change the value so you call it like this eg  user.countUsers()

//      }
    
//     register(){
//        console.log(this.username+ ' is now registered')
//     }
// }

// let bob = new user('bob',"bob@gmail.com", "1233456")

// bob.register()         //it will print out "bob is now registered"
// user.countUsers()      




// -----------------------------------------------------------------------------
// //PYTHON OBJECTS:
// class wakanda():
//     def __init__(self):
//         self.stupid = true
//    def change(self):
//        self.stupid = false

        
//    person1 =  wakanda()  
// try:
//     person1.change()
// except:
//     print("the y made a mistake ")


// ----------------------------------------------------------------------------------------------------------------

// LIST OF JAVASCRIPT METHODS AVAILABLE
// const names = ["buzor", "ify", "ada", "chisom", "dom"];

// let listOfNames = names.some(name => {                  //(1) some()     checks if atleast one item in the array returns  TRUE or FALSE for a paticular condition and it affects the entire array.
                                                                 // every() is the opposite of some() which means that it checks for everythiing instead.
//                                                         //(2) matches()
//                                                         //(3) filter()   normally works with OBJECTS
                                                          // (4) cloneNode()  and you have to  deep clone it which is to add 'true' inside the parenthesis to get all the descendants i.e the children
                                                          // (5) map()
                                                         //  (6) shift() removs the first thing inside an array.
                                                            // (7) find() allows  you to find something with a particular detail in the array, then it displays everything in that line
                                                            // (8) reduce() has a quit different syntaxx and can be used to like addup total of arrays as seen below   
//      return name.includes('e'); 
// })

//  console.log(listOfNames)

// -------------------------------------

// const people =[
//      {name: "Dom", salary: 80000},
//      {name: "Maria", salary: 34000},
//      {name: "Shower", salary: 2500}
//   ];

//     const highIncome= people.filter( person => {
//              return person.salary >= 80000
// })
// console.log(highIncome)

//---------------------------------------------

// const numbers = [4, 9, 10 , 12];
// const numbersDoubled = numbers.map( number => {
//      return  number * 10;
// }) 

// console.log(numbersDoubled)

// ------------------------------

// const numbers = [ 9,4, 12, 16, 20 , 24];

// const four = numbers.shift();  //shift() removes the first thing inside an array 
// numbers.push()
// console.log(four)
// console.log(numbers)


// -------------------------
// const items =[
//      {name: "bike", price: 100},
//      {name: "TV", price: 200},
//      {name: "Book", price: 5},
//      {name: "Phone", price: 500},
//      {name: "Computer", price: 1000},
//      {name: "Keyboard", price: 25},
//      {name: "Album", price: 880},


// ]

//   let total = items.reduce((currentTotal, item) =>{
//       return item.name + currentTotal
//   },0)

//   console.log(total)