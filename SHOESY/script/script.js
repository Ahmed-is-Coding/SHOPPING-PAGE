
  //sign-in function
  
var left_cover = document.getElementById("divLeft1");
var left_form = document.getElementById("divLeft2");
 
var right_cover = document.getElementById("divRight1");
var right_form = document.getElementById("diveRight2");
 
var signup_head = document.getElementById("signup-head");
var signin_head = document.getElementById("signin-head");

var checkbox = document.getElementById("checkboxx");
 

// this function with the help of this video (https://www.youtube.com/watch?v=3VepHcf1dOw)
 function changebtn() {
    right_form.classList.add("change-fade"); //to replace
    left_cover.classList.add("change-fade");

    left_form.classList.add("hide-forma");
    left_cover.classList.remove("afterhide");
    right_form.classList.remove("hide-forma");
    right_cover.classList.add("afterhide");
     
 }

    // add action to the sign in page
 function signIn(){
    const user=5;
    const pass=6;
    let signed="signed-in";
    let tryagin = "Try again";
    let usertField = document.getElementById("user");
    let passField = document.getElementById("pass");
    let changebtn = document.getElementById("log-in");

    if (usertField.value.length == user && passField.value.length == pass ){

        changebtn.value = signed;
        usertField.style.border ="2px solid green";
        passField.style.border ="2px solid green";
    
    }

   else if (usertField.value.length !== user && passField.value.length == pass ){

        changebtn.value =  tryagin;
        usertField.style.border ="2px solid red";
        passField.style.border ="2px solid green";
    }

   else if ( passField.value.length !== pass && usertField.value.length == user ){

        changebtn.value =  tryagin;
        usertField.style.border ="2px solid green";
        passField.style.border ="2px solid red";
   
    }

    else {

    changebtn.value = tryagin;
    usertField.style.border ="2px solid red";
    passField.style.border ="2px solid red";
    
    }
       
}

// add action to sign up page

function signUp(){
    
    const user=5;
    const pass=6;
    
    let signed="signed-in";
    let tryagin = "Try again";
    let userField = document.getElementById("usern");
    let emailField = document.getElementById("newemail");
    let passField = document.getElementById("newpass");
    let confpassField = document.getElementById("cofpass");
    let changebtn = document.getElementById("csign-up");

    if (userField.value.length == user && passField.value.length == pass && confpassField.value.length == pass  ){

        changebtn.value = signed;
        userField.style.border ="2px solid green";
        passField.style.border ="2px solid green";
        confpassField.style.border ="2px solid green";
        emailField.style.border ="2px solid red";
        
    }
   

   else if (userField.value.length !== user && passField.value.length == pass && confpassField.value.length !== pass ){

        changebtn.value =  tryagin;
        userField.style.border ="2px solid red";
        passField.style.border ="2px solid green";
        confpassField.style.border ="2px solid green";
        emailField.style.border ="2px solid red";
   }

   else if ( passField.value.length !== pass && userField.value.length == user){

        changebtn.value =  tryagin;
        userField.style.border ="2px solid green";
        confpassField.style.border ="2px solid red";
        emailField.style.border ="2px solid red";
    }

    else {

    changebtn.value = tryagin;
    userField.style.border ="2px solid red";
    passField.style.border ="2px solid red";
    confpassField.style.border ="2px solid red";
    emailField.style.border ="2px solid red";
   
    
    }
   
       
}


//calculator with the help of this video (https://www.youtube.com/watch?v=tfyLw-1VERA&t=0s)

function show(clicked){

    document.getElementById('screen').value += clicked;

    return clicked;

}

function equal(){

    let screen = document.getElementById('screen').value;

    let value1 = eval(screen);

    document.getElementById('screen').value = value1

    return value1;

}

function present(){

}

    //search bar for items

    //varibale everything before
var txtValue ,div , ul, li,filter , lo,barInter ;

    //give value to the varirables and call the ul  
    ul = document.getElementById("ul");
    
    // call the search bar
    barInter = document.getElementById("searchbar");

function searchFor() {
    li = ul.getElementsByClassName("list");

    //show any word inside the list
    filter =  barInter.value.toUpperCase();
    
    //loop for search way start from first letter
    for (lo = 0; lo < li.length; lo++) {

    // call the product box and let it follow the loop
        div = li[lo].getElementsByTagName("div")[0];

        //show only what i write
        txtValue = div.textContent 

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[lo].style.display = "";
        } 

        else {
            li[lo].style.display = "none";
        }
    }
}

// option when you clcik on any product img with dislpay a page to choose the size and show more ditals

// call all the hidden elements 
var hiddendiv1 = document.getElementById("hidden-div1");
var hiddendiv2 = document.getElementById("hidden-div2");
var hiddendiv3 = document.getElementById("hidden-div3");
var hiddendiv4 = document.getElementById("hidden-div4");
var hiddendiv5 = document.getElementById("hidden-div5");



// call all the front pictures of the products
var frontImg1 = document.getElementById("front-img1");
var frontImg2 = document.getElementById("front-img2");
var frontImg3 = document.getElementById("front-img3");
var frontImg4 = document.getElementById("front-img4");
var frontImg5 = document.getElementById("front-img5");


// make a function for each front picture when you click on the product img display the product details
frontImg1.onclick = function showdetails(){ hiddendiv1.style.display = "block";} 
frontImg2.onclick = function showdetails(){ hiddendiv2.style.display = "block";}
frontImg3.onclick = function showdetails(){ hiddendiv3.style.display = "block";}  
frontImg4.onclick = function showdetails(){ hiddendiv4.style.display = "block";} 
frontImg5.onclick = function showdetails(){ hiddendiv5.style.display = "block";} 

// When you click on span (x) close the hidden close the hidden product details
let closebtuun= document.getElementsByClassName("close");
for (var p = 0 ; p < closebtuun.length; p++){

    closebtuun[p].addEventListener('click', function closepage(){
        hiddendiv1.style.display = "none";
        hiddendiv2.style.display = "none";
        hiddendiv3.style.display = "none";
        hiddendiv4.style.display = "none";
        hiddendiv5.style.display = "none";
        
    })
}

//when you click on small imges show bigger

// call all the small pictures by class name and make a loop for them
var miniImg = document.getElementsByClassName('mini-img');

    // loop iterate through each mini-img 
for (var r = 0 ; r < miniImg.length; r++){
  
    // add functon with the following the loop  when click on each mini-img
    miniImg[r].addEventListener('click', function chingeimges(){
      
    // replace src  in main img with clicked mini-img src   
     
var mainImg1 = document.getElementById('mainImg1');
var mainImg2 = document.getElementById('mainImg2');
var mainImg3 = document.getElementById('mainImg3');
var mainImg4 = document.getElementById('mainImg4');
var mainImg5 = document.getElementById('mainImg5');
    mainImg1.src = this.src
    mainImg2.src = this.src
    mainImg3.src = this.src 
    mainImg4.src = this.src
    mainImg5.src = this.src
    
  })
}


//when u click on size button keep the same color of hover
let colorChange=false;
var sizingBtn = document.getElementsByClassName('sizing-btn');

for (var s = 0 ; s < sizingBtn.length; s++){
  
    sizingBtn[s].addEventListener('click', function keepBtnColor(colorChange){

       if(colorChange){

        this.style.backgroundColor = "#910303";
        colorChange=true;
       } 

       else{
        this.style.backgroundColor = "#ffffff";  
        colorChange=false;
       } 
       
    })
}

// when click on basket, it will send you to the basket list
var basketHeadbtn = document.getElementById("baskt-head-btn");
var basktHideDiv = document.getElementById("basket-list");

basketHeadbtn.addEventListener("click", function showbasktHide(){
    basktHideDiv.style.display = "block";

    window.scrollTo(450,document.body.scrollHeight);
})

// when click on favorite, it will send you to the favorte list
var favHeadbtn = document.getElementById("fav-head-btn");
var favHideDiv = document.getElementById("favorite-list");

favHeadbtn.addEventListener("click", function showfavrtHide(){
    favHideDiv.style.display = "block";

    window.scrollTo(550, document.body.scrollHeight);
})




// add products to the basket and count || them

   // call the the button by class
   var basket = document.getElementsByClassName('addtobasket');
   
    
    // loop to increase the number every time click on the button

    
 for ( var c = 0; c < basket.length; c++){
     basket[c].addEventListener('click', () => {
            addingNumbers(c);
    })
 }
     // function to save the items number in basket after refresh the page

     // with the help of this video (https://www.youtube.com/watch?v=PoTGs38DR9E)
     function whileloading(){

        // to get addingnumbers and save them in the span
        var itemsNumbers =localStorage.getItem('addingNumbers');
            
         if(itemsNumbers) {
              document.querySelector('.basketBtn span').textContent = itemsNumbers;
      }
 }
     
    // create a function to add the the adding numbers to the local storage and save them
    function addingNumbers() {
       
    var itemsNumbers = localStorage.getItem('addingNumbers');
     alert("Added to your basket")
    
     // change it into numbers
    itemsNumbers =parseInt(itemsNumbers);
        
    //adding 1 to the numbers each time when u click on the butn
    if(itemsNumbers){
        localStorage.setItem('addingNumbers', itemsNumbers + 1); 
        document.querySelector('.basketBtn span').textContent= itemsNumbers+ 1; 
               
    }
        
     else{
        localStorage.setItem('addingNumbers', 1);
      document.querySelector('.basketBtn span').textContent= 1;
         
     }

    
}
whileloading();

    // add products to the favorites and count them     
var favorite = document.getElementsByClassName('addtofavorite');
    
for ( var f = 0; f <favorite.length; f++){
    favorite[f].addEventListener('click', () => {
    addingNumbersf();  
    })
}

function whileloadingf(){

    var itemsNumbersf =localStorage.getItem('addingNumbersf');

    if(itemsNumbersf) {
    document.querySelector('.favoritebtn span').textContent = itemsNumbersf;

    }
}

function addingNumbersf() {

var itemsNumbersf = localStorage.getItem('addingNumbersf');
alert("Added to your favorite list")

itemsNumbersf =parseInt(itemsNumbersf);

if(itemsNumbersf){
    localStorage.setItem('addingNumbersf', itemsNumbersf + 1); 
    document.querySelector('.favoritebtn span').textContent= itemsNumbersf+ 1;    
}

else{
localStorage.setItem('addingNumbersf', 1);
document.querySelector('.favoritebtn span').textContent= 1;
}


}
whileloadingf();

// call all the add to basket buttons again
var addToBasket0= document.getElementsByClassName("addtobasket")[0].addEventListener
("click", callElements0);

var addToBasket1= document.getElementsByClassName("addtobasket")[2].addEventListener
("click", callElements1);

var addToBasket2= document.getElementsByClassName("addtobasket")[4].addEventListener
("click", callElements2);

var addToBasket3= document.getElementsByClassName("addtobasket")[6].addEventListener
("click", callElements3);

var addToBasket4= document.getElementsByClassName("addtobasket")[8].addEventListener
("click", callElements4);

function callElements0(){

    // call the product´s information to transfer them to the basket
    var img= document.getElementsByClassName("front-img")[0].src
    var title= document.getElementsByClassName("product-name")[0].innerText
    var price= document.getElementsByClassName("product-price")[0].innerText
    
    // call the function to excut it
    addTobasket(img,title,price)
    
    // call the refresh price function to update the total price
    refreshPrice();   
}

function callElements1(){

    // call the product´s information to transfer them to the basket
    var img= document.getElementsByClassName("front-img")[1].src
    var title= document.getElementsByClassName("product-name")[1].innerText
    var price= document.getElementsByClassName("product-price")[1].innerText
    
    // call the function to excut it
    addTobasket(img,title,price)
    
    // call the refresh price function to update the total price
    refreshPrice();  

}

function callElements2(){

    // call the product´s information to transfer them to the basket
    var img= document.getElementsByClassName("front-img")[2].src
    var title= document.getElementsByClassName("product-name")[2].innerText
    var price= document.getElementsByClassName("product-price")[2].innerText
    
    // call the function to excut it
    addTobasket(img,title,price)
    
    // call the refresh price function to update the total price
    refreshPrice();  

}

function callElements3(){

    // call the product´s information to transfer them to the basket
    var img= document.getElementsByClassName("front-img")[3].src
    var title= document.getElementsByClassName("product-name")[3].innerText
    var price= document.getElementsByClassName("product-price")[3].innerText
    
    // call the function to excut it
    addTobasket(img,title,price)
    addToFav(img,title,price)
    // call the refresh price function to update the total price
    refreshPrice();   
}

function callElements4(){

    // call the product´s information to transfer them to the basket
    var img= document.getElementsByClassName("front-img")[4].src
    var title= document.getElementsByClassName("product-name")[4].innerText
    var price= document.getElementsByClassName("product-price")[4].innerText
    
    // call the function to excut it
    addTobasket(img,title,price)
    
    // call the refresh price function to update the total price
    refreshPrice();   
}


//this function with the help of this video (https://www.youtube.com/watch?v=YeFzkC2awTM)
function  addTobasket(img,title,price){
    
    // create element to add the information in it
    var createlemnt=document.createElement("div")
    createlemnt.classList.add("basket-row")

    // call the the itmes dive to add the new div into it
    var basketItm= document.getElementsByClassName("basket-itms")[0];

    // this element to replace the informtion with the new ones
    var contents= `
    <div class="cart-item cart-column">
         <img class="cart-item-image" src="${img}" width="100" height="100">
         <span class="cart-item-title">${title}</span>
    </div>
        <span class="basket-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="basket-quantity-in" type="number" value="1">
        <button class="remove-btn btn-danger" type="button">REMOVE</button>
    </div>`
   
    createlemnt.innerHTML = contents

    // append the new div to the itmes div with the new itm information
    basketItm.append(createlemnt)

    // call all the function which related to the new div like remove butn, refreshprice
    createlemnt.getElementsByClassName("remove-btn")[0].addEventListener("click", itmRemoved)
    createlemnt.getElementsByClassName("basket-quantity-in")[0].addEventListener("change", refreshPrice)
    createlemnt.getElementsByClassName("basket-quantity-in")[0].addEventListener("change", quantityChanged)      
}


// call all the remove btns by class name.
var removeBtn= document.getElementsByClassName("remove-btn");

// make for loop to make all the butns do same action.
for (var r = 0 ; r < removeBtn.length; r++){

       var clickme= removeBtn[r]

       // make a function and a paremeter to remove the all element with in the btun
     clickme.addEventListener("click",  itmRemoved) 
       
}

    function itmRemoved(thiss){
        var afterclick= thiss.target 

        // parentelememt to remove 1 div ass we have 2 div we want to remove we have to write it 2 times.
            afterclick.parentElement.parentElement.remove()
            refreshPrice()
       
}

    // function to add the total price and update it 

    // with the help of this video (https://www.youtube.com/watch?v=YeFzkC2awTM)
    function refreshPrice(){
        var basketItms= document.getElementsByClassName("basket-itms")[0];
        var basketRows= basketItms.getElementsByClassName("basket-row");
        var totalPrice=0;

        for (var r = 0 ; r <basketRows.length; r++){

            var basketRow= basketRows[r]
            var priceElement=basketRow.getElementsByClassName("basket-price")[0]
            var quntitElmnt= basketRow.getElementsByClassName("basket-quantity-in")[0]
            var updatePrice=parseFloat( priceElement.innerText.replace("€",""))
            var quanti= quntitElmnt.value
            totalPrice=totalPrice+(updatePrice*quanti)
        }

            // to round the total to the nearest 2 decemal after the .
            totalPrice=Math.round(totalPrice * 100) / 100
            document.getElementsByClassName("total-price")[0].innerText=  totalPrice + " €"

}

        // call the quantity box when increase or dicrease the quantity the price will change
        var qantity= document.getElementsByClassName("basket-quantity-in")
        for (var r = 0 ; r <qantity.length; r++){
            var increase= qantity[r]

            // add event when quantity price increse or decrese the total will change
            increase.addEventListener("change", quantityChanged)
        }

            // creat a function to change the quantity price
    function quantityChanged(event){
        var change=event.target
            // if the quantity not a number or smaller or equal 0 
        if(isNaN(change.value) || change.value<=0){
                change.value=1
        }
            refreshPrice()         

}
 
        // function alert the  purchase button

        var purchase= document.getElementById("purchase")
        
        purchase.onclick= function boughtItms(){
           
            alert( "Your purchase is successful")
        
}

    // add to favorte

    var addToFav0= document.getElementsByClassName("addtofavorite")[0].addEventListener
    ("click", callfav0);

    var addToFav1= document.getElementsByClassName("addtofavorite")[2].addEventListener
    ("click", callfav1);

    var addToFav2= document.getElementsByClassName("addtofavorite")[4].addEventListener
    ("click", callfav2);

    var addToFav3= document.getElementsByClassName("addtofavorite")[6].addEventListener
    ("click", callfav3);

    var addToFav4= document.getElementsByClassName("addtofavorite")[8].addEventListener
    ("click", callfav4);


    function callfav0(){
        var imgf= document.getElementsByClassName("front-img")[0].src
        var titlef= document.getElementsByClassName("product-name")[0].innerText
        var pricef= document.getElementsByClassName("product-price")[0].innerText
        addToFav(imgf,titlef,pricef);
    }
    
    function callfav1(){
        var imgf= document.getElementsByClassName("front-img")[1].src
        var titlef= document.getElementsByClassName("product-name")[1].innerText
        var pricef= document.getElementsByClassName("product-price")[1].innerText
        addToFav(imgf,titlef,pricef);
    }

    function callfav2(){
        var imgf= document.getElementsByClassName("front-img")[2].src
        var titlef= document.getElementsByClassName("product-name")[2].innerText
        var pricef= document.getElementsByClassName("product-price")[2].innerText
        addToFav(imgf,titlef,pricef);
    }

    function callfav3(){
        var imgf= document.getElementsByClassName("front-img")[3].src
        var titlef= document.getElementsByClassName("product-name")[3].innerText
        var pricef= document.getElementsByClassName("product-price")[3].innerText
        addToFav(imgf,titlef,pricef);
    }


    function callfav4(){
        var imgf= document.getElementsByClassName("front-img")[4].src
        var titlef= document.getElementsByClassName("product-name")[4].innerText
        var pricef= document.getElementsByClassName("product-price")[4].innerText
        addToFav(imgf,titlef,pricef);
    }

    
    function  addToFav(imgf,titlef,pricef){
        
    var createlemnt=document.createElement("div")
    createlemnt.classList.add("basket-row")
    var basketItm= document.getElementsByClassName("basket-itms")[1];

    var contents= `
    <div class="cart-item cart-column">
         <img class="cart-item-image" src="${imgf}" width="100" height="100">
         <span class="cart-item-title">${titlef}</span>
    </div>
        <span class="basket-price cart-column">${pricef}</span>
    <div class="cart-quantity cart-column">
        <button class="remove-btn btn-danger" type="button">REMOVE</button>
    </div> `
   
    createlemnt.innerHTML = contents
    basketItm.append(createlemnt)
    createlemnt.getElementsByClassName("remove-btn")[0].addEventListener("click", itmRemoved)
            
}
