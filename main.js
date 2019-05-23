document.addEventListener('DOMContentLoaded',function(){



const product= document.querySelectorAll('.product');
//a function to display an overlay and then hide all the details and zoom in the img of the product
function zoomIn(){
    console.log(this);
    let box=this; 
    let overlay=box.querySelector('.overlay');
    overlay.style.display='block';
    let productDetails=box.querySelector('.proDetails');
    console.log(productDetails)
    productDetails.style.display="none";
    let img = this.querySelector('.proImg img');
    img.style.height="100%";
    img.style.width="100%";


}
//another function for hiding the overlay and display the details of the product again.
function zoomout(){
    let box=this; 
    let productDetails=box.querySelector('.proDetails');
    productDetails.style.display="block";
    let overlay=box.querySelector('.overlay');
    overlay.style.display='none';
    let img = this.querySelector('.proImg img');
    img.style.height="90%";
    img.style.width="90%";

}

product.forEach(pro=>{
    pro.addEventListener('mouseover',zoomIn)
});

product.forEach(pro=>{
    pro.addEventListener('mouseout',zoomout)
});

})