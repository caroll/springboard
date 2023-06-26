/* I repeated some commands so that each block was independent, to make 
it easier to comment/uncomment */


// Select the section with an id of container without using querySelector.
const container = document.getElementById("container");

// Select the section with an id of container using querySelector.
//const containerB = document.querySelector("#container");

// Select all of the list items with a class of “second”.
//const seconds = document.querySelectorAll("li.second");

/* Select a list item with a class of third, but only the list 
item inside of the ol tag */
//const ol = document.querySelector("ol li.third");

// Give the section with an id of container the text “Hello!”.
/*
const container = document.getElementById("container");
const newText = document.createElement("span");
newText.textContent = "Hello!";
container.prepend(newText);
*/

// Add the class main to the div with a class of footer.
/*
const footer = document.querySelector(".footer");
footer.classList.add("main");
*/

// Remove the class main on the div with a class of footer.
/*
const footer = document.querySelector(".footer");
footer.classList.remove("main");
*/

/* Create a new li element, Give the li the text “four",Append the li
 to the ul element*/
 /*
const nLi = document.createElement("li");
nLi.textContent = "four";
const ul = document.querySelector("ul");
ul.append(nLi);
*/

/* Loop over all of the lis inside the ol tag and give them a 
background color of “green” */
/*
const ol = document.querySelector("ol");
const list = ol.children;
for(let li of list) {
    li.style.backgroundColor = "green";
}
*/

// Remove the div with a class of footer
/*
const footer = document.querySelector(".footer");
footer.remove();
*/

