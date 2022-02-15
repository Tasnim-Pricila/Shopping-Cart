
// Updating product quantity and price 
const plus = document.getElementById('quantity-plus');
const minus = document.getElementById('quantity-minus');

function updateProductQty(id, isIncreasing,item, price) {
    const idName = document.getElementById(id + '-input');
    const idValue = idName.value;
    if(isIncreasing == true){
        if (idValue == ''){
            idName.value = 0; 
        }
        else if(idValue < 5){
            const newNumber = parseInt(idValue) + 1;
            idName.value = newNumber;        
        }    
    } 
    else if(isIncreasing == false){
        if(idValue > 0 ){
            const newNumber = parseInt(idValue) - 1;
            idName.value = newNumber;       
        }
    } 
    const productPrice = document.getElementById(item + '-price');
    const newPrice = idName.value * price;
    productPrice.innerText = newPrice;
    calculation();
}


// Getting All Product Price 
function getPrice(id){
    const getId = document.getElementById(id + '-price');
    const getValue = getId.innerText;
    return getValue;
}

// All calculation 
function calculation(){
    const productPrice = getPrice('product');
    const casePrice = getPrice('case');
    // Finding Subtotal
    const subtotal = parseFloat(productPrice) + parseFloat(casePrice);
    const getSubtotal = document.getElementById('subtotal');
    getSubtotal.innerText = subtotal;
    // Finding Tax
    const getTax = document.getElementById('tax');
    const tax = subtotal * 20 / 100;
    getTax.innerText = tax;
    // Finding Total 
    const getTotal = document.getElementById('total');
    getTotal.innerText = subtotal + tax;
}

function onClick(clickId, getId, isIncreasing, getPrice, price ){
    const plus = document.getElementById(clickId);
    plus.addEventListener('click', function(){
        updateProductQty(getId, isIncreasing, getPrice, price);
    })
}

onClick('quantity-plus','quantity', true,  'product', 1200);
onClick('quantity-minus','quantity',false, 'product', 1200);
onClick('case-plus','case', true, 'case', 50 );
onClick('case-minus','case',false,  'case', 50 );

// Without onclick Function 

// const plus = document.getElementById('quantity-plus');
// plus.addEventListener('click', function(){
//     updateProductQty('quantity', true, 'product', 1200);
    
// })
// const minus = document.getElementById('quantity-minus');
// minus.addEventListener('click', function(){
//     updateProductQty('quantity',false, 'product', 1200);
    
// })
// const casePlus = document.getElementById('case-plus');
// casePlus.addEventListener('click', function(){
//     updateProductQty('case', true, 'case', 50);
    
// })
// const caseMinus = document.getElementById('case-minus');
// caseMinus.addEventListener('click', function(){
//     updateProductQty('case',false, 'case', 50);
    
// })


    