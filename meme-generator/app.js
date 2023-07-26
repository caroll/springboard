

const form = document.querySelector("#meme-info");
const topText = document.querySelector('input[name="top-text"]');
const bottomText = document.querySelector('input[name="bottom-text"]');
const imgURL = document.querySelector('input[name="img-url"]');
const memeList = document.querySelector('#list-meme');

// FIXME

form.addEventListener( "submit" , function(e) {
    e.preventDefault();
    // creates top text
    const textTop = document.createElement("span");
    textTop.setAttribute( "class" , "top");
    textTop.textContent = topText.value;
    // creates the img
    const newImg = document.createElement("img");
    newImg.setAttribute( "src" , imgURL.value );
    // creates top text
    const textBottom = document.createElement("span");
    textBottom.setAttribute( "class" , "bottom");
    textBottom.textContent = bottomText.value;
    // create img container
    const contentBlock = document.createElement("div");
    contentBlock.setAttribute( "class" , "block" );
    // appends meme elements to the content block
    contentBlock.appendChild( textTop );
    contentBlock.appendChild( newImg );
    contentBlock.appendChild( textBottom );
    // creates action block (in case I want to have more buttons/features)
    const actionBlock = document.createElement("div");
    actionBlock.setAttribute( "class" , "action" );
    // creates delete button
    const btnDel = document.createElement("button");
    btnDel.textContent = "Remove";
    actionBlock.appendChild( btnDel );
    // creates the LI
    const newMeme = document.createElement("li");
    newMeme.appendChild( contentBlock );
    newMeme.appendChild( actionBlock );
    //appends the LI
    memeList.appendChild( newMeme );
    // cleans form
    clearForm();
});
//remove MEME from list
memeList.addEventListener( "click" , function(x) {
    if (x.target.tagName === 'BUTTON' ){
        x.target.parentNode.parentNode.remove();
    }
});
function clearForm () {
    topText.value = "";
    bottomText.value = "";
    imgURL.value = "";
}
