const result=document.getElementById('result');
const cart=document.getElementById('cart');

function increament() {
    result.innerText=parseFloat(result.innerText) +1
    cart.innerText = result.innerText
}

function decreament() {
    if (parseFloat(result.innerText)> 0){
        result.innerText=parseFloat(result.innerText) -1
    }
    cart.innerText=result.innerText
}


const mainIMG=document.getElementById('mainImg')
function changeImg (img){
    mainIMG.src=img
}