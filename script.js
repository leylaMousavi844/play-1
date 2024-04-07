var hero = [
    { id: 1, heroName: 'hero one' },
    { id: 2, heroName: 'hero two' },
    { id: 3, heroName: 'hero three' }
]
var abilitie = {
    1: { abilities: [' power ', ' speed ', ' jump '], src: './images/hero1.jpg' },
    2: { abilities: [' fire ', ' knife ', ' bomb '], src: './images/hero2.jpg' },
    3: { abilities: [' gun ', ' hidden ', ' map '], src: './images/hero3.jpg' }
}


const heroes = hero.map(item => ({ ...item, ...abilitie[item.id] }))
console.log(heroes)
heroes.forEach(item => {
let mainElement=document.getElementById("main")

let parent=document.createElement("div")
mainElement.appendChild(parent);
let image=document.createElement("img")
parent.appendChild(image);
image.src=item.src; 
image.style.width="300px";
image.style.height="190px";
let heroNames=document.createElement("h2");
parent.appendChild(heroNames);
heroNames.innerText=item.heroName;

let abilities=document.createElement("ul");
abilities.style.listStyle="none"
let title=document.createElement("h3")
abilities.appendChild(title);
title.innerText="abilities:"
parent.appendChild(abilities);
item.abilities.forEach(index=>{
let liItem=document.createElement("li");
abilities.appendChild(liItem);
liItem.innerText=index;  
})
})