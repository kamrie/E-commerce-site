let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart')

   

let basket= JSON.parse(localStorage.getItem("data")) || []           //every time we click or add a new item, it will be added to this BASKET.

let calculations = () =>  {
    let cartIcon = document.getElementById("cartAmount")
    
    let updating = basket.map((x) => x.item).reduce((x, y) => x+y, 0 )
    // let updating = 0
    //   updating += 1 
    cartIcon.innerText = updating 
 }

 calculations()       //this was called here so that if the page is refreshed, the number wont change
 
//  ---------------------------------------------------------------------

 
  
let generateCartItems = () => {
    if(basket.length !== 0){
       return (shoppingCart.innerHTML = basket.map((x) => {
          
              //   console.log(x)
              let {id, item} = x ;
              let search = shopItemData.find((u) => u.id === id )  || []   ;
              
        return  `
              <div class="cart-item">
                    <img width="270"  src="${search.img}" alt="" />
                    <div class="details"> 

                        <div class="title-price-x"> 
                              <h4 class="title-price">
                                  <p> ${search.name}</p>
                                  <p class="card-item-price">$ ${search.price}</p> 

                              </h4>
                              <i onclick="deleteItem(${id})" class="bi bi-x-lg"></i>
                        </div>

                        <div class="buttons">
                              <i onClick='decrement(${id})' class="bi bi-dash-lg"></i>
                              <div id=${id} class="quantity"> ${item} </div>
                              <i onClick='increment(${id})' class="bi bi-plus-lg"></i>
                     </div>

                     <h3> $ ${item * search.price}<h3/>
                    
                    
                    </div>

              </div>    
          `
       }).join('')); 
    }else {
        // shoppingCart.innerHTML =``

         label.innerHTML  = `
         <h2>Cart is Empty</h2>
         <a href="index.html">
            <button class="HomeBtn">
              Back to Home
            </button>
          </a>
     
         `

    }
       
}

generateCartItems()


// -----------------------------------------------
let increment = (id) => {
  let selectedItem = id
  let search = basket.find((x) => x.id === selectedItem.id) 

   if(search === undefined){         
         basket.push({
            id:  selectedItem.id,
            item: 1
         })
   }else{
         search.item += 1;
   }
   
   //  console.log(basket)        
    update(selectedItem.id)     //calling the update function
    
    generateCartItems();

     
    localStorage.setItem("data", JSON.stringify(basket));    //why the "basket" passed into the JSON.stringify means what we want to store in the local storage and  thats where we will "get item" from

}

// ----------------------------------------------------
let decrement = (id) => {
   let selectedItem = id
   let search = basket.find((x) => x.id === selectedItem.id) 
   
   
   if(search === undefined) return
    if(search.item === 0)return           //the return here kinda stops anythingelse from running after it. 
    
    else{
          search.item -= 1;
    }


   //  console.log(basket)

   update(selectedItem.id)

    basket = basket.filter((x) => x.item !== 0 );

        // console.log(basket)
     generateCartItems();


    localStorage.setItem("data", JSON.stringify(basket));


}


// ------------------------------------------------------
let update = (id) => {

  let search = basket.find((x) => x.id === id  ) 
  // console.log(search.item)
  document.getElementById(id).innerHTML = search.item;

  calculations()
  totalAmount();
}

 
// ------------------------------------------
let deleteItem = (id) => {
  let  selectedItem = id;
     console.log(selectedItem.id)
  basket = basket.filter((d) => d.id !== selectedItem.id)
  
  generateCartItems()
  totalAmount();
  calculations()

  localStorage.setItem("data", JSON.stringify(basket));
}


// -------------------------------------------------
let totalAmount = () => {
      if(basket.length !== 0){

          let amount = basket.map((x) => {

                  let {id, item} = x
                  let  search = shopItemData.find(u => u.id ===  id ) || [];  
   
             return   search.price * item;
          }).reduce((x,y ) => x + y, 0 ) 
          
      //     console.log(amount)
      label.innerHTML  =   `
           <div>
                  <h2>Total Bill: $ ${amount}</h2>
                  <button class="checkout">Checkout</button>
                  <button onclick='clearCart()' class="clearCart">Clear cart</button>           
           </div>

       `

      }else return
}

totalAmount();


// --------------------------------------------------------
let clearCart = () => {
      basket = []

      generateCartItems()
      calculations()

      localStorage.setItem("data", JSON.stringify(basket));

}







// --------------------------------------------------
// A SIMPLE JAVA CODE 
//      public class HelloWorld{
//         public static void main(String[] args) {
//             System.out.printIn("Hello world")
//         }
//   }





// -----------------------------------------------------
// console.log("%c hey wait for me ", "color:red; font-size:30px; border-bottom:5px dotted blue; ")   ADDING CSS STYLES TO CONSOLE.LOG


// // -----------------------------------------------
// // Filter() function examples;

// const filtered = number.reduce((n, m) => n+m , 0  )

// const filtered = number.filter(n => n % 2 === 0  )
// console.log(filtered);


// const peeps = [
//       {name: "Alice", age: 0},
//       {name: "Bob", age: 17},
//       {name: "Charlie", age: 0},
//       {name: "David", age: 12},
// ]
// const lessThan = peeps.filter((x) => x.age !== 0)
// console.log(lessThan)


// const words = ["apple", "banana","cherry", "date", "elderberry"];
// const filteredWords = words.filter((y) => y.includes("a"))
// console.log(filteredWords)
