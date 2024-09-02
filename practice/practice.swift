// // sets in swift
// import UIKit

// var ages = [18, 33, 55, 17, 94, 26, 33, 17]

// // SETS
// // var agesSet = set<Int> = []   //this is the syntax if you are trying to add the "type" 
// var agesSet = Set(ages) // if you print this, there wont be duplicate of the array like the one above and it is UNOTHERED.

// . agesSet.insert(101)  //adding a new value into a set
// . agesSet.contains(101) // checking if a value is in a set which in this case, it is.

// // DICTIONARIES

// . let devices: [String: String] = [
//     "phone": "iphone x",
//     "laptop": "2016 Macbook Pro",
//     "table": "2018 ipad pro",
//     "desktop": "2017 iMac pro",
//     ]

//     devices["laptop"]  // to access items in the dictionary

// // FUNCTIONS
// . func printINstructors(name: String) {
//       print(name)
// } 
// printprintINstructorsName(name: "Okoli")



// .func add(firstNumber: Int, to secondNumber: Int) -> Int{

//      let sum = firstNumber + secondNumber

//     return sum
// }
// add(firstNumber: 18, to: 120)


// // IF/ELSE
// . var isDarkModeOn = true

//  if isDarkModeOn == true {
//      print("Thats how it should be")
//  }else{
//     print("You are a psycho")
//  }

//  .var myHighScore =  555
//  var yourHighScore = 444

//  if myHighScore > yourHighScore{
//      print("I win")
//  }else{
//       print("You win")
//  }



// // FOR LOOP
// let allStars = ["James", "Davies","Harden","Doncic", "Leonard"]

// . for player in allStars{
//     print(player)       //it wil print all these players and this is almost the same as PYTHON forloop. 
// } 


// . for player in allStars where player == "Harden"{
//     print(player)       //it will print when it gets to Harden so it will print only Harden
// }



// . var randomInt: [Int] = []
// for _ in 0..<25 {                //it will print 0-24. ALSO if you're not using "i", you should just put an underscore(_) there.
//   let randomNumber = Int.random(in: 0...100)
//    randomInt.append(randomNumber)
// }

// print(randomInt)             //it will print 25 random numbers ranging from 0 to 100


// // ENUMERATION: These are a group of values that are related.

// . enum phone{  
//      case  iphone11Pro               
//      case  iphoneSE
//      case  pixel
//      case nokia                //all these can be written in just one line and seperated by comas
//  }

//  func getSeanOpinion(on phone:phone){       //the types like int, bool,string etc werent used cus the type that will be used here 
//                                                //is the name of the enum
//       if phone == .iphone11Pro {
//            print("This will be my next phone")
//       } else if phone == .iphoneSE{
//             print("I  dislike the phone size")
//       } else if phone == .pixel{
//             print("Hardware is great. Android is ewwww")
//       }else {
//           print("Cant be broken. Classic ")
//       }
//  }
//  getSeanOpinion(on: .iphone11Pro )

// //  WE CAN REWRITE THE ABOVE CODE ESP. IF IT HAS ALOT OF IF STATEMENT BY GIVING IT A RAW VALUE which will be  a string at this point 

//   enum phone: String {
//       case iphone11Pro  = "This will be my next phone"
//       case iphoneSE     = "I  dislike the phone size"
//       case pixel        = "Hardware is great. Android is ewwww"
//       case nokia        =  "Cant be broken. Classic " 
//   }

//   func getSeanOpinion(on phone: phone){
//       print(phone.rawValue)
//   }

//   getSeanOpinion(on: pixel)



// //SWITCH 
//   enum phone {
//       case iphone11Pro 
//       case iphoneSE 
//       case pixel      
//       case nokia       
//   }


//  func getSeanOpinion(on phone:phone){       

//      switch phone {
//      case .iphone11Pro:
//            print("This will be my next phone"):            //THIS SWITCH STATEMENT HERE IS DOIF THEE SSAME WORK THAT THE IF/ELSE SATEMENT DID ABOVE, SO THE SWITCH STATEMENT WAS USED WITH THE ENUM
//      case .iphoneSE:
//             print("I  dislike the phone size")  
//      case .pixel:            
//            print("Hardware is great. Android is ewwww")
//      case .nokia:
//            print("Cant be broken. Classic ")         
//      } 
//  }
//  getSeanOpinion(on: .iphone11Pro )

// //  SWITCH ON ITS OWN

//    let matchmakingRank =5000

//    func determiePlayerLeague(from rank: Int) {
//        switch  rank {
//        case 0:
//           print("Play the game to determine your league")
//        case 1..<50:
//           print("You are in BRONZE league") 
//        case 50..<100:
//           print("You are in SILVER league")     
//        case 100..<200:
//           print("You are in GOLD league")
 
//        default:
//            print(" You are in a league of your own, We no no where you are") 
           
//        }
//    }
//    determiePlayerLeague(from: matchmakingRank)


// //   OPERATORS

//  let  valueOne = 55
//  let  valueTwo = 88

//  let sum = valueOne + valueTwo    //will give us the normal answer
//  let sum = valueOne / valueTwo  //its a fraction which is meant to be 0.625 but it will round it up to zero becus thats what Int values do.
//                                   //So you have to give it a TYPE each
// let valueOne:Double = 55
// let valueTwo: Double = 88



// // OPTIONALS
// //a variable could have a VALUE or could be NIL eg below
// var ages = [21, 45, 18, 71, 44, 23, 17] //it has a value

// var ages: [Int] = []  // its empty 
// ages.sort()
   
//     //we could try to handle a variable with VALUE and an EMPTY one which is called UNWRAPPING THE OPTIONAL below:   
// //(1)   if let
//     if let oldestAge = age.last {
//         print("The oldest age is \(oldestAge) ")
//     }else{
//         "there is no oldest age, you must have no student"
//     }

//  //(2)   nil coalescing
//       let oldestAge = age.last ?? 999
  
//   //(3)   guard statement

//    func getOldestAge() {
//        guard let oldestAge = ages.last else {
//             return  
//              }

//              print("\(oldestAge) is the oldest age.")
//    }
//      getOldestAge()

//   //(4)   force unwrap
//     let oldestAge = ages.last!


  
// // SELF

// //CLASS
//  class Developer {
//     var name: String
//     var jobTitle: String
//     var yearsExp: Int

//     init(name: String, jobTitle: String, yearsExp: Int){   // a class needs an INITIALIZER which is what we did in this line  
//         self.name       = name
//         self.jobTitle   = jobTitle
//         self.yearsExp   = yearsExp
//     } 

//     func speakName() {
//         print(name!)
//     }
//  }

//   let sean = Developer(name: "Sean", jobTitle:"IOS Engineer", yearsExp: 5)
 
//   sean.name
//   sean.jobTitle
//   sean.yearsExp
// //NB: I can rewatch this video on trying to set the INIIALIZER into an empty one later abeg


// // INHERITANCE:

//   class iosDeveloper: Developer{
//       var favouriteFramework: string?

//       func speakFavouriteFramework(){
//         if let favouriteFramework = favouriteFramework {
//              print(favouriteFramework)
//         }else {
//             print("I dont have a favourite framework")
//         }
//       }


//       override func speakName() {              //we used the "override" keyword here becus the speakname() fucntion has been used above, so calling it on line 270.
//           print("\(name!) - \(jobTitle!)")
//       }
//   }


//   let sean= iosDeveloper(name: "Sean", jobTitle: "ios Engineer", yearsExp: 5)

// //  sean.favouriteFramework = "ARKit"  //we giving it a value here so it wont give the error we specified above when we call it on line 268

// // sean.speakFavouriteFramework()
 
//  sean.speakName()




// //  STRUCT....this is a VALUE type while class is a REFERENCE type
  
//   struct Developer {
//     var name: String
//     var jobTitle: String
//     var yearsExp: Int
     




//    var sean = Developer(name: "Sean", jobTitle: "Software Engineer", yearsExp: 5)
    
//    var joe = sean
//    joe.name = "Joe"  //the name will change to Joe but wont affect the sean variable when printed out becus its not a refernce type



// // EXTENSIONS: used for adding a functionality to an extisting type
//     extension String {  
//        func removeWhitespaces() -> String {
//             return components(seperatedBy: .whitespaces).joined()
//        }
//     }

   

//     let alphabet = " A B C D E F"
//     print(alphabet.removeWhitespaces())





//  const b = Object.assign({}, a)
//  b.name = "josh"


//  const b = object.assign({}, a)