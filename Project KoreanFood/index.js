let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () =>{
    console.log("clicked");
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}

let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}

//Swiper funtion
var swiper = new Swiper(".home-slider" , {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:3000, //เวลาในการเคลื่นสไลด์ (millisecond)
        disableOnInteraction:false,
    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true
});

var swiper = new Swiper(".review-slider" ,{
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:3000, //เวลาในการเลื่อนสไลด์
        disableOnInteraction:false,
    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});


/*Loader Section*/
function loader(){
    document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
    setInterval(loader, 3000)
}
window.onload = fadeOut;
/*card */
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".box .btn");
  const cartContainer = document.getElementById("cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อคลิกที่ลิงก์

      // ดึงข้อมูลสินค้าที่เกี่ยวข้องจากกล่องปุ่มที่คลิก
      const productBox = button.closest(".box");
      const productName = productBox.querySelector("h3").textContent;
      const productPrice = productBox.querySelector(".price").textContent;

      // สร้าง Element สำหรับสินค้าในตะกร้า
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
                <span>${productName}</span>
                <span>${productPrice}</span>
            `;

      // เพิ่มสินค้าลงในตะกร้า
      cartContainer.appendChild(cartItem);

    });
  });
});

let cartO = document.querySelector("#cart-icon");
cartO.onclick = () => {
  let search_form = document.querySelector("#cart-info");
  search_form.classList.toggle("active");
};

let cartC = document.querySelector("#cart-icon");
cartC.onclick = () => {
  let search_form = document.querySelector("#cart-info");
  search_form.classList.toggle("active");
};