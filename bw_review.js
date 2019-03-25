"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Austin Inmon
   Date:   3.13.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
      w
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
//the init function will run when the page loads up. 
window.onload = init;
//storing collection of the reviewing stars
var stars = document.querySelectorAll("span#stars img");
//defined the event listeners for the page. 
function init() {
      //Looping through the collection of the star images and chnged the cursors to pointer. 
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      //Runs the updateCount funtion in response to the keyup event. 
      document.getElementById("comment").addEventListener("keyup", updateCount);
}
//the function is to color the star when user moves the mouse over the stars. 
function lightStars(e) {
      //storing the alt object in the variable star number. 
      var starNumber = e.target.alt;
      var starb = e;
      //When the mouse moves over the stars the stars will light up. 
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      //The loop has the first star highighted but cant go anymore than 5. 
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      //
      document.getElementById("rating").value = starNumber + " stars";
      //
      e.addEventListener("click", function () {
            starb.removeEventListener("mouseleave", turnOffStars);
      });
}
//The purpose of this funtion is to unlight the stars when the mouse goes back from the last star decreasing to the first star. 
function turnOffStars() {
      //
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }

      document.getElementById("rating").value = "";
}
// Keeps the total amount of characters the user has typed in the box on the page. 
function updateCount() {
      //
      var commentText = document.getElementById("comment").value;
      //
      var charCount = countCharacters(commentText)
      //
      var wordCountBox = document.getElementById("wordCount")

      wordCountBox.value = charCount + "/1000";
      //
      if (charCount > 1000) {
            wordCount.style.color = "white";
            wordCount.style.backgroundColor = "red";
            //
      } else {
            wordCount.style.color = "black";
            wordCount.style.backgroundColor = "white";
      }
}

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}