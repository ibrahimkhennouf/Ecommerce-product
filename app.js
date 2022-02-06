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

let bckb = document.querySelectorAll(".pos")[0];

let img = document.querySelector("#img");

let imgX = document.querySelector("#imgX");

let tglshow = () => {
  bckb.classList.toggle("blk");
};
img.addEventListener("click", tglshow);
imgX.addEventListener("click", tglshow);

let blkcont = document.querySelector(".main__prod__imgs1");

console.log(blkcont.children);

let grid = blkcont.children[1];

let fstim = () => {
  blkcont.removeChild(blkcont.children[1]);
  blkcont.removeChild(blkcont.children[0]);
  let img1 = document.createElement("img");
  img1.setAttribute("src", "imgs/image-product-1.jpg");
  blkcont.appendChild(img1);
  blkcont.appendChild(grid);
};

let scndim = () => {
  blkcont.removeChild(blkcont.children[1]);
  blkcont.removeChild(blkcont.children[0]);
  let img2 = document.createElement("img");
  img2.setAttribute("src", "imgs/image-product-2.jpg");
  blkcont.appendChild(img2);
  blkcont.appendChild(grid);
};

let thrdim = () => {
  blkcont.removeChild(blkcont.children[1]);
  blkcont.removeChild(blkcont.children[0]);
  let img3 = document.createElement("img");
  img3.setAttribute("src", "imgs/image-product-3.jpg");
  blkcont.appendChild(img3);
  blkcont.appendChild(grid);
};

let frthim = () => {
  blkcont.removeChild(blkcont.children[1]);
  blkcont.removeChild(blkcont.children[0]);
  let img4 = document.createElement("img");
  img4.setAttribute("src", "imgs/image-product-4.jpg");
  blkcont.appendChild(img4);
  blkcont.appendChild(grid);
};

document.querySelector("#img1").addEventListener("click", fstim);
document.querySelector("#img2").addEventListener("click", scndim);
document.querySelector("#img3").addEventListener("click", thrdim);
document.querySelector("#img4").addEventListener("click", frthim);
