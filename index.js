

  function readMore() {
    var  dots = document.getElementById("dots");
    var  moreText = document.getElementById("more");
    var  btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
}
// 1
  var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
// 2
var modal = document.getElementById("myModal2");
var img = document.getElementById("myImg2");
var modalImg= document.getElementById("img02");
var captionText = document.getElementById("caption2");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close2")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
//3
var modal = document.getElementById("myModal3");
var img = document.getElementById("myImg3");
var modalImg= document.getElementById("img03");
var captionText = document.getElementById("caption3");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close3")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
//4
var modal = document.getElementById("myModal4");
var img = document.getElementById("myImg4");
var modalImg= document.getElementById("img04");
var captionText = document.getElementById("caption4");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close4")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
//5
var modal = document.getElementById("myModal5");
var img = document.getElementById("myImg5");
var modalImg= document.getElementById("img05");
var captionText = document.getElementById("caption5");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close5")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
//6
var modal = document.getElementById("myModal6");
var img = document.getElementById("myImg6");
var modalImg= document.getElementById("img06");
var captionText = document.getElementById("caption6");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close6")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
//7
var modal = document.getElementById("myModal7");
var img = document.getElementById("myImg7");
var modalImg= document.getElementById("img07");
var captionText = document.getElementById("caption7");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close7")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
//8
var modal = document.getElementById("myModal8");
var img = document.getElementById("myImg8");
var modalImg= document.getElementById("img08");
var captionText = document.getElementById("caption8");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close8")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
//add to cart

document.addEventListener('DOMContentLoaded', () => {
    const productContainers = document.querySelectorAll('.product-container');
  
    productContainers.forEach(container => {
      container.addEventListener('click', (event) => {
        // Prevent event bubbling up to parent containers
        event.stopPropagation();
        const addToCartIcon = container.querySelector('.add-to-cart');
        addToCartIcon.style.display = 'block';
        
        // Add click event to the add-to-cart icon
        addToCartIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          addToCart(container);
        });
      });
    });
  
    // Hide add-to-cart icon if clicking outside the product container
    document.addEventListener('click', () => {
      document.querySelectorAll('.add-to-cart').forEach(icon => {
        icon.style.display = 'none';
      });
    });
  });
  
  function addToCart(container) {
    // Your logic to add the item to the cart
    const productName = container.querySelector('.product-rating p').innerText;
    const productPrice = container.querySelector('.product-tag .price').innerText;

  }
  //start
  document.addEventListener('DOMContentLoaded', () => {
    const productContainers = document.querySelectorAll('.product-container');
  
    productContainers.forEach(container => {
      container.addEventListener('click', (event) => {
        event.stopPropagation();
        const addToCartIcon = container.querySelector('.add-to-cart');
        addToCartIcon.style.display = 'block';
  
        // Add click event to the add-to-cart icon
        addToCartIcon.addEventListener('click', (e) => {
          e.stopPropagation();
          addToCart(container);
        });
      });
    });
  
    // Hide add-to-cart icon if clicking outside the product container
    document.addEventListener('click', () => {
      document.querySelectorAll('.add-to-cart').forEach(icon => {
        icon.style.display = 'none';
      });
    });
  });
  const cartItems = document.getElementById('cart-items')
  const cartImg = document.getElementById('cart-img')
  cartImg.addEventListener('click', () => {
    cartItems.classList.toggle('open')
    
  })
//   window.onclick = function (event) {
//     if(!event.target.classList.contains(cartItems)){
        
//         if(cartItems.style.display = 'block'){
//             cartItems.style.display = 'none'
//         }
//     }
// }
 
  
  function addToCart(container) {
    const productImgSrc = container.querySelector('.product-img img').src;
    const productName = container.querySelector('.product-rating p').innerText;
    const productPrice = container.querySelector('.product-tag .price').innerText;
    
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="carts">
        <div class="cart">
          <div class="cart-img">
            <img src="${productImgSrc}" alt="${productName}" style="width:5rem;height:auto;">
          </div>
          <div class="cart-details">
            <p>${productName}</p>
            <p class="price">${productPrice}</p>
          </div>
        </div>
        <span class="remove">Remove</span>
      </div>
    `;
    
    cartItems.appendChild(cartItem);
  
    cartItem.querySelector('.remove').addEventListener('click', () => {
      cartItem.remove();
      updateTotalPrice();
    });
  
    updateTotalPrice();
    alert(`Added ${productName} to cart at ${productPrice}`);
  }
  
  function updateTotalPrice() {
    const cartItems = document.querySelectorAll('.cart-item .price');
    let total = 0;
    
    cartItems.forEach(item => {
      const price = parseFloat(item.innerText.replace('#', ''));
      total += price;
    });
  
    document.getElementById('total-price').innerText = `Total: #${total}`;
  }
  const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



