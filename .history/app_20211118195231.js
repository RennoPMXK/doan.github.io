// Menu effect

var navbarItem= document.querySelectorAll('.navbar-menu-item a')
var subMenu= document.querySelector('.navbar-sub-menu')
var iconmenu = document.querySelector('.navbar-menu-item i')
var menuMobie = document.querySelector('.menu-icon')
var overlayMenu = document.querySelector('.mobile-menu')
var modal = document.querySelector('.modal')
var closeMobile = document.querySelector('.mobile-close-icon')
console.log(navbarItem[2])
navbarItem[2].addEventListener('click', function(){
  subMenu.classList.toggle('active');
  iconmenu.classList.toggle('active');
})

menuMobie.addEventListener("click" , function(){
   overlayMenu.classList.add('active');
   modal.classList.add('active');
})

closeMobile.addEventListener('click', function(){
    overlayMenu.classList.remove('active');
    modal.classList.remove('active');
})

navbarItem.forEach(function(item , index){
  item.onclick = function(){
    document.querySelector('.navbar-menu-item a.active').classList.remove('active');
    this.classList.add('active')
  }
})

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var tabs = $$('.tab-item');


var panes = $$('.tab-pane');


// tab-active
tabs.forEach(function(tab, index){
    tab.onclick = function(){
        document.querySelector('.tab-item.active').classList.remove('active')
        this.classList.add('active')
        document.querySelector('.tab-pane.active').classList.remove('active')
        panes[index].classList.add('active')
    }
})

// hero-slide
var slideIndex = 0;
showSlide();

var timer = setInterval(showSlide, 3000);
var slideContainer = document.querySelector('.hero-section')
var slideControl = document.querySelector('.slide-control')

slideContainer.onmouseover = function(){
  clearInterval(timer);
}

slideControl.onmouseover = function(){
  clearInterval(timer);
}

slideContainer.onmouseleave = function(){
  timer = setInterval(showSlide,3000);
}

slideControl.onmouseleave = function(){
  timer = setInterval(showSlide, 3000);
}

function showSlide(){
 
   var slides = document.querySelectorAll('.slide-item');
   var dots = document.querySelectorAll(".dot");

   slides.forEach(function(slide , index){
      slides[index].style.display = 'none'
      slides[index].classList.remove('active')
   })

   dots.forEach(function(dot,index){
     dots[index].classList.remove("active");
   })

   slideIndex++;
   if(slideIndex > slides.length) slideIndex = 1;
   slides[slideIndex-1].style.display = "block";
   slides[slideIndex-1].classList.add('active')
   dots[slideIndex-1].classList.add("active");
}

function chooseSlide(n){
  slideIndex = n;
  showSlide();
  clearInterval(timer);
}


var product_arr = [
  {
      id : 1,
      ten : "Black Pink",
      giacu : "4.500.000đ", 
      giamoi : "3.200.000đ",
      anh : "./img/nam1",
      loai : "nam"
  },

  {
      id : 2,
      ten : "Slate",
      giacu : "", 
      giamoi : "5.600.000đ",
      anh: "./img/nam2",
      loai : "nam"
  },


  {
      id : 3,
      ten : "Desert",
      giacu : "5.600.000đ", 
      giamoi : "4.100.000đ",
      anh : "./img/nam3",
      loai : "nam"
  },


  {
       id : 4,
       ten: "Opar",
       giacu : "6.500.000đ", 
       giamoi : "4.900.000đ",
       anh : "./img/nam4",
       loai : "nam"
  },

  {
       id : 5,
       ten : "Champion Gold",
       giacu : "6.000.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nam5",
       loai : "nam"
  },


  {
       id : 6,
       ten : "Black Rose Leather",
       giacu : "6.500.000đ", 
       giamoi : "4.900.000đ",
       anh : "./img/nam6",
       loai: "nam"
  },

  {
       id : 7,
      "ten" : "Axiom",
      "gia cu" : "6.500.000đ", 
      "anh" : "./img/nam7",
      "loai" : "nam"
  },


  {
       id : 8,
       ten : "Ralley Green Gunmetal",
       giacu : "6.700.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nam8",
       loai: "nam"
  },


    {
       id : 9,
       ten : "Coronoda Blanc",
       giacu : "3.700.000đ", 
       giamoi : "3.500.000đ",
       anh : "./img/nu1",
       loai : "nu"
  },



  {
       id : 10,
       ten : "Bloom Rose",
       giamoi : "4.400.000đ",
       anh : "./img/nu2",
       loai : "nu"
  },


  {
       id : 11,
       ten : "Rodeo",
       giacu : "6.700.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nu3",
       loai : "nu"
  },



   {
       id : 12,
       ten : "Ashen Taupe",
       giacu : "4.600.000đ", 
       giamoi : "3.200.000đ",
       anh : "./img/nu4",
       loai : "nu"
  },



  {
       id : 13,
       ten : "Aubrey",
       giacu : "4.500.000đ", 
       giamoi : "3.800.000đ",
       anh : "./img/nu5",
       loai : "nu"
  },


    {
       id : 14,
       ten : "Hayden",
       giamoi : "4.500.000đ",
       anh : "./img/nu6",
       loai : "nu"
  },


  {
       id : 15,
       ten : "Sherry",
       giamoi : "3.100.000đ",
       anh : "./img/nu7",
       loai : "nu"
  },



  {
       id : 16,
       ten: "Belamar",
       giamoi : "3.900.000đ",
       anh : "./img/nu8",
       loai : "nu"
  },



  {
       id : 17,
       ten : "Minimal Cuff",
       giamoi : "1.600.000đ",
       anh : "./img/phukien1",
       loai : "phukien"
  },


  {
       id : 18,
       ten : "Twist Cuff",
       giamoi : "2.400.000đ",
       anh : "./img/phukien2",
       loai : "phukien"
  },


  {
       id : 19,
       ten: "Crown Cuff",
       giamoi : "2.400.000đ",
       anh : "./img/phukien3",
       loai : "phukien"
  },



  {
       id : 20,
       ten : "Charm Cuff",
       giacu : "3.000.000đ",
       giamoi : "2.400.000đ",
       anh : "./img/phukien4",
       loai : "phukien"
  },



  {
       id : 21,
       ten : "Origin Bracelet",
       giamoi : "2.800.000đ",
       anh : "./img/phukien5",
       loai : "phukien"
  },
  
   
];

function createProduct() {

  if(localStorage.getItem('product')===null) {
  
  
  
      localStorage.setItem('product',JSON.stringify(product_arr));
  
  }
}


// Render sp

function changeProductList(type, element) {
  let tabs = document.getElementsByClassName('menu-best-sale-title-item');

  for( i = 0; i < tabs.length; i++ ) {
      tabs[i].style.background = 'white'
  } 

  element.style.background = '#ee4d2d'

  

   renderProduct(type)
    
  switch(type) {
      case 'nam' :
         document.getElementById(type).innerHTML = 
          document.getElementById('nu').style.display = 'none';
          document.getElementById('phukien').style.display = 'none';
          break;


       case 'nu' :
        
          document.getElementById('nam').style.display = 'none';
           document.getElementById('phukien').style.display = 'none';
           break;


      case 'phukien' :
         
          document.getElementById('nam').style.display = 'none';
           document.getElementById('nu').style.display = 'none';
           break;    
  }
}


function renderProduct(type) {
    var s = ''

    for(let i = 0; i < product_arr.length; i++) {
      if(arr_product[i].loai === type) {
            s+= `
            <div class="menu-best-sale-content-item col-3">
            <div class="menu-best-sale-content-item-img">
                   <img src=${product_arr[i].anh} alt="" class="product-img">
                   <i class='bx bx-bullseye product-icon'></i>
                   <i class='bx bx-shopping-bag product-icon'></i>
            </div>

            <div class="menu-best-sale-content-item-content">
                 <h3 class="item-content-name">${product_arr[i].ten}</h3>
                 <div class="price">
                     <div class="price-old"><del>${product_arr[i].giacu}</del></div>
                     <div class="price-new">${product_arr[i].giamoi}</div>
                 </div>
            </div>
           </div>
            `
      }
    }
      document.getElementById(type).innerHTML = s;
}