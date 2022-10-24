// *** SELECTING HTML ELEMENTS

// JS Selectors
// document.getElementById              --> return one element
// document.getElementsByClassName      --> return collection - need to use Array.from(collection); - [ same for all below ] 
// document.getElementsByName
// document.getElementsByTagName
// document.getElementsByTagNameNS
// document.querySelector               --> return one element - the first one it finds
// document.querySelectorAll            --> return array


//document.getElementById('grand-parent').style.backgroundColor = "yellow";


//const grandparent = document.getElementById('grand-parent').style.backgroundColor = "yellow";

const grandparent = document.querySelector

const child = Array.from(document.getElementsByClassName('child'));

// child.forEach(element => {
//     element.style.backgroundColor = "yellow";
// });

let x = 0;

function changeBgColor(element){
    x++;
    element.style.backgroundColor = "yellow";
    element.innerHTML = x;
}

child.forEach(changeBgColor);

console.log(x);


// *** SELECTING HTML ELEMENTS > CHILDREN > CHILDREN

// x = element.children             --> return collection
// y = Array.from(x) --> makes it array
// y[0], y[1], ...                  --> 1st children, 2ns children, ...
// z = y[0].children                --> return collection of 1st children's children
//  ... so on

//OR

// x = document.querySelector(".grandparent")
// z = x.querySelector(".child")
// ... here we have directly selected the child , without going through the parent


// *** SELECTING Parent from CHildren (BackWord)

// z = document.querySelector("#child-one")
// y = z.parentElement              --> moves up one parent
// x = y.closest("selector")        --> moves up to the nearest parent with that selector, same as querySelector but upword 

// *** SELECTING Side by Side (Sibling)

// z1 = document.querySelector("#child-one")
// z2 = z1.nextElementSibling       --> moving forward
// z1 = z1.previousElementSibling   --> moving backword



// EVENTs

// Capturing Phase -- Bubble Phase

// Stoping the progagation of events

// running event once

// removing an event - setTimeout( , 2000);

// event delegation


