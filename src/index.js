import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import IMGcat from "./imgs/examples/hand/cat.jpg";
import IMGrat from "./imgs/examples/hand/rat.jpg";
import IMGdogHowPriest from "./imgs/examples/hand/dogHowPriest.jpg";
import IMGdog from "./imgs/examples/hand/dog.jpg";
import IMGsomebody from "./imgs/examples/hand/somebodyArt.jpg";
import IMGtroskiy from "./imgs/examples/hand/Troskiy.jpg";
import IMGvalhalla from "./imgs/examples/hand/valhalla.jpg";

import PCvlad from "./imgs/examples/pc/vlad.jpg"
import PCchina from "./imgs/examples/pc/china.jpg"

import blurSpace from "./imgs/BLUR.jpg"

const nav = document.getElementById("nav");
const el = document.querySelector(".welcome-h1")
function navTop(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
     // console.log(entry)
      if(entry.isIntersecting){
        nav.classList.remove("navDown")
      }
      else{
        nav.classList.add("navDown")
      }
    });
  })
  
  observer.observe(el)
}

function AboutAnim(){
  const aboutP = document.querySelector("#aboutText");
  const aboutH = document.querySelector("#aboutH1");
  const ea = document.querySelector("#aboutText")
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
     // console.log(entry)
      if(entry.isIntersecting){
        aboutP.classList.add("aboutTextShow")
        aboutH.classList.add("aboutTextShow")
        aboutP.classList.remove("hidden")
        aboutH.classList.remove("hidden")
      }
      else{
        aboutP.classList.remove("aboutTextShow")
        aboutH.classList.remove("aboutTextShow")
        aboutP.classList.add("hidden")
        aboutH.classList.add("hidden")
      }
    });
  })
  
  observer.observe(ea)
}

setInterval(navTop,1000)
setInterval(AboutAnim,1000)

function Buttons(props){
  const exam = document.getElementById("example1")
  exam.style.backgroundImage = `url(${IMGrat})`
  let countHand = 0
  let countPC = 0
  if(props.base === "example1"){
    const imgsHand = [IMGrat,IMGcat,IMGdog,IMGdogHowPriest,IMGsomebody,IMGtroskiy,IMGvalhalla]
    function onClick(e){
      if(e.target.className === "previous"){
        countHand--
        if(countHand < 0)
          countHand = 6
        const example1 = document.getElementById("example1")
        example1.style.backgroundImage = `url(${imgsHand[countHand]})`
      }
      else if(e.target.className === "next"){
        countHand++
        if(countHand > 6)
          countHand = 0
        const example1 = document.getElementById("example1")
        example1.style.backgroundImage = `url(${imgsHand[countHand]})`;
      }
    }
    return(
      <div className="buttons">  <button onClick={onClick} className="previous"></button><button onClick={onClick} className="next"> </button></div>
    )
  }
  if(props.base === "example2"){
    const exam = document.getElementById("example2")
    exam.style.backgroundImage = `url(${PCvlad})`
    const imgsPC = [PCvlad,PCchina]
    function onClick(e){
      if(e.target.className === "previous"){
        countPC--
        if(countPC < 0)
          countPC = 1
        const example2 = document.getElementById("example2")
        example2.style.backgroundImage = `url(${imgsPC[countPC]})`;
      }
      else if(e.target.className === "next"){
        countPC++
        if(countPC > 1)
        countPC = 0
        const example2 = document.getElementById("example2")
        example2.style.backgroundImage = `url(${imgsPC[countPC]})`;
      }
    }
    return(
      <div className="buttons">  <button onClick={onClick} className="previous"></button><button onClick={onClick} className="next"> </button></div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById("example1"));
root.render(<Buttons base="example1"/>);
const roo = ReactDOM.createRoot(document.getElementById("example2"));
roo.render(<Buttons base="example2"/>);


function Buy(){
  function HandlingClick(){
    const buyMenu = document.querySelector(".buyMenu")
    const blur = document.querySelector(".sells")
    buyMenu.id = ""
    blur.style.backgroundImage = `url(${blurSpace})`
  }
  return(
    <button class="buy" onClick={HandlingClick} > Заказать </button>
  )
}
const spawnBuy1 = ReactDOM.createRoot(document.querySelector("#spawnButtonBuy1"))
spawnBuy1.render(<Buy />)
const spawnBuy2 = ReactDOM.createRoot(document.querySelector("#spawnButtonBuy2"))
spawnBuy2.render(<Buy />)










/*

<button class="buy"> Заказать </button>

function AnimWelcomeText()
{
  const text = document.querySelector("#WelcomeText")
  text.style.left = 25 + "%"
  let value = window.scrollY;
  text.style.left = (250 + value) * 0.1 + "%"
}

window.addEventListener("scroll", AnimWelcomeText)

*/