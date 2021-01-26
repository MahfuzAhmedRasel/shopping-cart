var plusItem = document.getElementById('plus1');
plusItem.addEventListener('click', function(){

addNumber("item-number", 1);
priceAdd("price-daw", 1219);
priceAdd("sub-total", 1219);
priceAdd("total", 1219);


})

var secPlusItem = document.getElementById('plus2');
secPlusItem.addEventListener('click', function(){
    addNumber("item-number2", 1);
    priceAdd("price-daw2", 59)
    priceAdd("sub-total", 59);
    priceAdd("total", 59);
})

var minusItem = document.getElementById('minus1');
minusItem.addEventListener('click', function(){
    addNumber("item-number", -1);
    priceAdd("price-daw", -1219);
    priceAdd("sub-total", -1219);
    priceAdd("total", -1219);
})

var minusItem = document.getElementById('minus2');
minusItem.addEventListener('click', function(){
    addNumber("item-number2", -1);
    priceAdd("price-daw2", -59);
    priceAdd("sub-total", -59);
    priceAdd("total", -59);
})





// Number Add Funtion
function addNumber(id, number){
    var itemNumber = document.getElementById(id).value;
    var itemRnumber = parseFloat(itemNumber);
    itemNumber = itemRnumber + number;
   document.getElementById(id).value = (itemNumber);
}

// Price Add Funtion
function priceAdd(id, price){
    var itemNumber = document.getElementById(id).innerText;
    var numberKoro = parseFloat(itemNumber);
    var rasel = numberKoro + price;
    console.log(rasel);
    document.getElementById(id).innerText =(rasel);
 
}