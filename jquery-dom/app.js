jQuery(document).ready(function(){
    // When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
    console.log("Let's get ready to party with jQuery!");
    //Give all images inside of an article tag the class of image-center 
    $("img").attr( "class" , "image-center");
    //Remove the last paragraph in the article
    $("p:last-child").remove();
    //Set the font size of the title to be a random pixel size from 0 to 100.
    $("h1").css("font-size" , Math.floor(Math.random() * 100+1) );
    // Add an item to the list; it can say whatever you want.
    let newLine = document.createElement("li");
    newLine.innerText = "Such tiny, itchy bitty puppy!";
    $("ol").append(newLine);
    // Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

});
