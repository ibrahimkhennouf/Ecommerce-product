let cart = document.querySelector("#cart");

let shwcont = document.querySelector(".pos");

let tglshowcart = () => {
  shwcont.classList.toggle("blk");
};

cart.addEventListener("click", tglshowcart);

let btn = document.querySelector("#btn");
let grd = document.querySelector(".grid");

let bin = () => {
  grd.removeChild(grd.childNodes[2]);
  let p = document.createElement("p");
  p.innerText = "your cart is empty now";
  grd.appendChild(p);
};

let rmandadd = () => {
  if (hed.innerText != 0) {
    grd.removeChild(grd.childNodes[1]);
    let hed = document.querySelector("#hedr").innerText;
    let newelm = document.createElement("div");
    let flxelm = document.createElement("div");
    let par = document.createElement("span");
    let price = document.createElement("span");
    price.style.fontWeight = "bold";
    price.innerText = " $" + parseFloat(hed * 125.0).toFixed(2);
    par.innerText = "Fall Limited Edition Sneackers $125.00 x" + hed;
    let img = document.createElement("img");
    img.setAttribute("src", "imgs/image-product-1-thumbnail.jpg");
    let button = document.createElement("button");
    button.innerText = "Checkout";
    button.classList.add("main__prod__desc__btn");
    let imgbin = document.createElement("img");
    imgbin.setAttribute("src", "imgs/icon-delete.svg");
    imgbin.style.cursor = "pointer";
    imgbin.addEventListener("click", bin);
    flxelm.appendChild(imgbin);
    flxelm.prepend(price);
    flxelm.prepend(par);
    flxelm.prepend(img);
    flxelm.classList.add("newemst");
    newelm.appendChild(button);
    newelm.prepend(flxelm);
    grd.appendChild(newelm);
  }
};

btn.addEventListener("click", rmandadd);

let btnp = document.querySelector("#plus");
let btnm = document.querySelector("#minus");
let hed = document.querySelector("#hedr");
let counter = 0;

let incount = () => {
  counter++;
  hed.innerText = counter;
};

let decount = () => {
  counter = Math.max(0, counter - 1);
  hed.innerText = counter;
};

btnp.addEventListener("click", incount);
btnm.addEventListener("click", decount);

let hrt = document.querySelector("#hrt");

let chnghrt = () => {
  hrt.classList.toggle("red");
};

hrt.addEventListener("click", chnghrt);
