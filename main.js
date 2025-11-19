// code to make the sections in the main sortable using jQuery UI
$("#sortable").sortable();

// this iife updates the copyright year in the footer
(function(){
	let now = new Date();
	let span = $("footer span");
	span.html(now.getFullYear());
})();


// canvas 1 - hover event
// hide and show the paragraph on button hover
function toggleHoverP(){  
	$("#canvas1 p").toggleClass("sr-only");
}


// canvas 2 - click event
// hide and show the paragraph on button click
function toggleClickP(){
	$("#canvas2 p").toggleClass("sr-only");
}


// canvas 3 - focus event
// hide and show the paragraph on button focus
function toggleFocusP(){
	$("#canvas3 p").toggleClass("sr-only");
}


// canvas 4 - change event on checkboxes
// update the displayed pizza toppings as 
// the user checks and unchecks the topping checkboxes

// array to hold the toppings as they're added in canvas 4
let toppings = [];

//change event - checkboxes - canvas 4
function displayToppingsList(){
	//get the check mark currently checked
	let currentCheck = $(this); 

	//variable to hold the string to build the output
	let html = "<strong>Your Toppings:</strong>";

  /*
    if the checkbox is checked and not already in 
    the array of toppings, add it to the array
  */
	if(currentCheck.is(":checked")){
    if(toppings.indexOf(currentCheck.val()) === -1){
      toppings.push(currentCheck.val());
    }
  }

  /*
    if the checkbox is unchecked remove it from the array
  */
  if(!currentCheck.is(":checked")){
    let index = toppings.indexOf(currentCheck.val());
    toppings.splice(index, 1);
  }

	// build the HTML to display toppings to the screen from the array
	for (let i = 0; i < toppings.length; i++) {
		if (i == toppings.length - 1) {
			html += toppings[i];
		} else {
			html += toppings[i] + ", ";
		}
	}

	//add the string of HTML to the paragraph on screen
	$("#canvas4 p").empty().html(html);
}


// canvas 5 - change event on select dropdown
function dropdownColorChange(){
  /* 
    use the option's value to determine the color
    we need to display in the paragraph
  */
	let currentColor = "#" + $(this).val();
  
  /* 
    use the option's text to add the name of the 
    color to the paragraph
  */
	let colorName = $("select option:selected").text();
  
  // update the paragraph color and text
	$("#canvas5 p").css("background-color", currentColor).html(colorName);
}


// canvas 6 - using siblings to display error messages
function validateSiblingInputs(e){
  // prevent default form submission
	e.preventDefault();

	/*
      clear previous error messages and remove the error 
      border class from the inputs
  */
	// TO DO

	// boolean to track form validity
	let isValid = true;

	/* 
        if the text input is empty, display a message in the 
        error span sibling and add a red border around that input
        be sure to trim before checking to see if the input is 
        actually blank, it will register the space key as a 
        character and we add one when we reset the form
    */
	// TO DO
    // change our validity flag to false
    isValid = false;
    // display the error message
    // TO DO
    // add a class to the input to show it is invalid visually
		// TO DO
	

	/* 
        if the email input is empty, display a message in the 
        error span sibling and add a red border around that input
        be sure to trim before checking to see if the input is 
        actually blank, it will register the space key as a 
        character and we add one when we reset the form
    */
	// TO DO
    // change our validity flag to false
    isValid = false;
    // display the error message
    // TO DO
    // add a class to the input to show it is invalid visually
    // TO DO

	/*
      if the form is valid, thank the user for their submission 
      and clear the form
  */
	if(isValid){
		// remove the error messages
		// TO DO
		/*
        thank the user for their submission 
        (display a message in the paragraph in this section)
    */
		// TO DO
			`<strong>Your Information:</strong> 
                <strong>Name:</strong> 
                ${"TO DO"}<br> 
                <strong>Email:</strong> 
                ${"TO DO"}`
		
		// clear out the text from the inputs
		// TO DO
	}
}


// canvas 7 - background color switcher, click event
/* 
    random number generator function from MDN
    The maximum is exclusive and the minimum is inclusive
*/
function getRandomInt(min, max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

/*
    called when the button is clicked to 
    change the background color of the circle div in 
    that section
*/
function changeCircleColor(){
    // an array of color class names to use to set the background color
    let colors = ["red", "orange", "yellow", "green", "blue", "pink", "purple"];

    /* 
        use the generator to ge a random number representing 
        one of the indexes in the array above
    */
	  let newColor = colors[getRandomInt(0, 7)];

    /*
        get the div we want to change the color of, then
        remove any current color classes and add the new one
    */
    $("#canvas7 div").removeClass().addClass(newColor);
}


// canvas 8 - keyboard events for movement
/*
    the arrow keys are 37, 38, 39, 40 (up, right, down, left), and events 
    only fire for those keys on keydown, not keypress (this was SUPER fun 
    and TOTALLY easy to figure out (JK. It was not either of those things.)

    to get the browser to register a keyboard event on an element that 
    isn't editable/focusable by default (like an input, textarea, or 
    summary element), it has to have a tabindex or contentEditable 
    attribute. Adding the tabindex of -1 to the div containing this 
    element means that it isn't keyboard focusable, but will track 
    keyboard events 
*/
function moveEmoji(e){
    // logging the event to the console so we can see what is in that object
	  console.log(e);

    /*
        when the user presses those arrow keys, we want to make sure that 
        they move the button, not the page (which is what they do by default). 
        We'll prevent that default movement here

        jQuery event.which: https://api.jquery.com/event.which/#event-which1
        MDN info about keyboard events: 
        https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/charCode#notes
        CSS Tricks Article about keyboard events & keys with helpful embedded pen: 
        https://css-tricks.com/snippets/javascript/javascript-keycodes/
    */
    if(e.which == "38" || e.which == "39" || e.which == "37" || e.which == "40"){
      e.preventDefault();
    }

    // let's save the button in a variable because we will use it a lot in this function
    let moveBtn = $("#move-button");

	/* 
      get the current position of the emoji in the div. 
      This will tell us whether we can keep moving inside of the container
      it only tracks the top and left values of the position and it
      returns an object with those two properties
  */
	let position = moveBtn.position();
  // console.log(position);
	

  /*
      if the user presses the up arrow move the button up by 5px
      (as long as there is still space to move it inside of the div)
  */
	if(e.which == "38" && position.top - 5 >= 0){
    moveBtn.finish().animate({
      top: "-=50"
    });
  }

	/*
      if the user presses the right arrow move the button right by 5px
      (as long as there is still space to move it inside of the div)
  */
	if(e.which == "39" && position.left + 5 <= 192){
    moveBtn.finish().animate({
      left: "+=50"
    });
  }
	/*
      if the user presses the down arrow move the button down by 5px
      (as long as there is still space to move it inside of the div)
  */
	if(e.which == "40" && position.top + 5 <= 192){
    moveBtn.finish().animate({
      top: "+=50"
    });
  }
	/*
      if the user presses the left arrow move the button left by 5px
      (as long as there is still space to move it inside of the div)
  */
	if(e.which == "37" && position.left - 5 >= 0){
    moveBtn.finish().animate({
      left: "-=50"
    });
  }
}


// canvas 9 - keyboard events for calling a function
/* 
    based on the number entered by the user in the input, 
    add a new div to the div container with a background 
    color based on the number typed
*/
function addSquare(e){
    /*
        log the event key to the console - we will be able to see 
        the value of the key so we know which ones to handle events for
        the which property 
    */
    // console.log(`colorNum keypress which`, e.whcih);

    /* 
        if they press 0, add a red square #DD2C00 
        (the first value of which in each of these is from the 
        numbers across the top of a keyboard, the second value 
        is from keys in a number pad)
        Use a class that matches the name of the color to give 
        the added div the right background color
    */

    // if they press 1, add an orange square #EF6C00 (use the class)
    if(e.which == "48" || e.which == "96"){
      $("#canvas9 div:first").append(`<div class="red"></div>`);
    }

    // if they press 2, add a yellow square #ffcc14 (use the class)
    if(e.which == "49" || e.which == "97"){
      $("#canvas9 div:first").append(`<div class="orange"></div>`);
    }

    // if they press 3, add a green square #43A047 (use the class)
    if(e.which == "50" || e.which == "98"){
      $("#canvas9 div:first").append(`<div class="yellow"></div>`);
    }

    // if they press 4, add a blue square #2962FF (use the class)
    if(e.which == "51" || e.which == "99"){
      $("#canvas9 div:first").append(`<div class="green"></div>`);
    }

    // if they press 5, add a pink square #F48FB1 (use the class)
    if(e.which == "52" || e.which == "100"){
      $("#canvas9 div:first").append(`<div class="blue"></div>`);
    }

    // if they press 6, add a purple square #7C4DFF (use the class)
    if(e.which == "53" || e.which == "101"){
      $("#canvas9 div:first").append(`<div class="pink"></div>`);
    }

    // if they press 7, add a brown square #6D4C41 (use the class)
    if(e.which == "54" || e.which == "102"){
      $("#canvas9 div:first").append(`<div class="purple"></div>`);
    }

    // if they press 8, add a gray square #90A4AE (use the class)
    if(e.which == "55" || e.which == "103"){
      $("#canvas9 div:first").append(`<div class="brown"></div>`);
    }

    // if they press 9, add a black square #000 (use the class)
    if(e.which == "56" || e.which == "104"){
      $("#canvas9 div:first").append(`<div class="gray"></div>`);
    }
  
    if(e.which == "57" || e.which == "105"){
      $("#canvas9 div:first").append(`<div class="black"></div>`);
    }
  
    /* 
        if the user presses the space bar, add a white 
        square to the div (which = 32)
    */
    if(e.which == "32"){
      $("#canvas9 div:first").append(`<div class="white"></div>`);
    }
}

/* 
    let's also allow the user to remove a square from the div if 
    they delete a value from the input
*/
function removeDiv(e){
    /* 
        if the user presses the backspace/delete key, let's 
        remove the last child in the div (which = 8)
    */
    if(e.which == "8"){
      $("#canvas9 div div:last-child").remove();
    }

}


// canvas 10 - mouse events (mouse move to track the cursor)
/* 
    THIS IS BUGGY, AND THE HTML IS COMMENTED OUT, BUT YOU 
    ARE WELCOME TO PLAY AROUND WITH THE SETTINGS
    
    This function is called when the mouse moves inside of the 
    div in the last section on the page and it determines the 
    current position of the cursor and adjusts the position of 
    our div with the image inside of it that acts as our 
    animated cursor
*/
// function animateCursor(e){
//     console.log('the event object on move', e);

//     // the current coordinates of the mouse cursor
//     let xPosition = e.offsetX;
//     let yPosition = e.offsetY;


//     if(xPosition > $("#canvas10 > div").width() - 50){
//         xPosition = $("#canvas10 > div").width() - 50;
//     }

//     if(yPosition > $("#canvas10 > div").height() - 50){
//         yPosition = $("#canvas10 > div").height() - 50;
//     }

//     $("#cursor").css("top", yPosition).css("left", xPosition);
// }

/* 
    this function is called when the user clicks inside of the div
    inside of the last section on the page and it changes the 
    image displayed as our cursor to a new one
*/
// function changeCursor(){
//     /*
//         a collection of different images to use as cursors
//         the user can click in the div to switch to a new cursor style
//     */
//     let cursors = ["images/burger.gif", "images/fast-forward.gif", "images/fire.gif", "images/fireworks.gif", "images/rocket.gif", "images/solar-system.gif"];

//     // generate a random number for one of the indexes above
//     let newCursor = getRandomInt(0, 6);

//     // replace the image src of the current cursor with the new one
//     $("#canvas10 img").attr("src", cursors[newCursor]);
// }


/* 
    onload function - 
    we'll attach our event handlers here to call the functions above
*/
$(function(){
    // for section 1
    $("#canvas1 button").hover(toggleHoverP);
  
    // for section 2
    $("#canvas2 button").click(toggleClickP);

    // for section 3
    $("#canvas3 button").on("focusin focusout", toggleFocusP);

    // for section 4
    $("#canvas4 input").on("change", displayToppingsList);

    // for section 5
    $("select").on("change", dropdownColorChange);

    // for section 6
    $("#siblingSubmit").on("click", validateSiblingInputs);

    // for section 7
    $("#canvas7 button").on("click", changeCircleColor);

    // for section 8
    $("#canvas8").keydown(moveEmoji);

    // for section 9
    // to add squares to the div
    $("#color-num").keypress(addSquare);
    // to delete a square from the div
    $("#color-num").keydown(removeDiv);

    // for section 10
    // this one adds a listener when the moust moves inside of the div
    // $("#canvas10 div").mousemove(animateCursor);
    // this one handles a click inside of the div to change the cursor
    // $("#canvas10 div").click(changeCursor);
});
