// // my try out codes.
// let btn = document.querySelector('.btn');
// let cartAmount =document.querySelector('.cartAmount');
//         total = 0;
//         btn.addEventListener('click', (e) => {
           
//             total += 1;
//             // console.log(total);
//             cartAmount.textContent = total 
//         })


let shop = document.getElementById('shop');

// the objects were here but i copied them into a seperate Js file

let basket= JSON.parse(localStorage.getItem("data")) || []           //every time we click or add a new item, it will be added to this BASKET.
    



// console.log(shop)
let generateShop = () => {
     return shop.innerHTML= shopItemData.map((e) => {
          let {id, name , price, desc, img} = e;    //this line is called DESTRUCTURING so we dont have to be using 'e. ' the object key name always.
          
          let search = basket.find((x) => x.id === id)  || []
          
       return  ` 
          <div id=product-id-${id} class="item">
             <img width="235" src="${img}" alt="">
             <div class="details" style="">
                 <hr>
                 <h2>${name}</h2>
                 <p>${desc}</p>
                 <div class="price-quantity">
                     <h2>$ ${price}</h2>
                     <div class="buttons">
                              <i onClick='decrement(${id})' class="bi bi-dash-lg"></i>
                              <div id=${id} class="quantity">
                                ${search.item === undefined? 0 : search.item }
                              </div>
                              <i onClick='increment(${id})' class="bi bi-plus-lg"></i>
                     </div>
                 </div>
             </div> 
        </div>
        `

     }).join('')
}

generateShop(); 


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

        console.log(basket)


    localStorage.setItem("data", JSON.stringify(basket));


}
// ------------------------------------------------------
let update = (id) => {

   let search = basket.find((x) => x.id === id  ) 
   // console.log(search.item)
   document.getElementById(id).innerHTML = search.item;

   calculations(search.item)
}



let calculations = () =>  {

   let cartIcon = document.getElementById("cartAmount")
   

   let updating = basket.map((x) => x.item).reduce((x, y) => x+y, 0 )

    console.log(updating) 

   //   updating += 1 
   cartIcon.innerText = updating

}


calculations()       //this was called here so that if the page is refreshed, the number wont change








