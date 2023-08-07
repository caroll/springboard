# Fruit search 

## step 1

What type of JavaScript event listeners would you need to add to refresh the drop-down as a user types?

* event listener: keyup

How would you populate the search bar with an option from the drop down list? What event would trigger this action?

* a click or enter probably
The click was the easy choice here, but I believe that the field should be another kind of input to use enter and be easier to navigate via keyboard.

* setting the input value = list item selected

## step 2 Read the Starter Code
* added some CSS (html, body and an extra wrap for positioning the search field)
* fixed the CSS and JS paths
    
## step 3 Create search bar in the screen
* it was already there

## step 4 Add Placeholder Text Into The Search Bar
* it was already in place

## step 5 Add An Event Listener For Key Strokes
* I'm using keyup

## step 6 Filter The List Based On User Input
* search is case insensitive
* it's an array, but maybe I should have converted it to a Set
* I'm using regex

## step 7 Display The Results List As A Drop Down 
* creates the suggestion list

## step 8 Highlight the suggestion below a user’s cursor
* It's done in CSS (I think that's easier), but I commented it and
* added as an event listener to the js file using mouseover and mouseout to replicate
* the hover action

## step 9 Populate the search box with a user’s selected suggestion
* Used the event information passed as param

## step 10 Style the page 
* added gradient background with custom colors
* added some style for the input and suggestion list

# Talk with mentor

## Skye's suggestions

* put fruit array outside of function
    * meh... have no idea why I put it inside the function - FIXED
* use array includes() + string toLowerCase() instead of filter + regex
    * I still prefer to use array filter + regex, since the includes() will just return true/false and in this case, I need to find AND return any matches to the search string to be shown as suggestions. - NOT A BUG
* let the handler function handles the showSuggestions() instead of the search() function - FIXED

## my question

* how do I make the form usable via keyboard? The input + ul didn't work to navigate via keyboard, just with mouse clicks.
    * The suggestion was keep using the text input + list tag and use JS to look for the nearby elements to find a way to navigate to/from the input and the suggestion list.

How I fixed it:

* Instead of input text + UL I used an input + datalist;
* As the input and the datalist are connected, the navigation between them is effortless;
* With the input+list I had 5 functions:
    * searchHandler: prepare e validates the search for the string
    * search: executes the search for the string
    * showSuggestions: shows the matches found in the search
    * clearSuggestions: clear the list of suggestions
    * useSuggestion: sets the input with the value of the chosen suggestion
* With the input+datalist I just needed 4, I have no more use of the function useSuggestion(). As the navigation is now effortless, when selecting the desired suggestion, the input is automatically filled with the datalist option content.
* I understand that it doesn't look the same or that isn't even possible to use the same events/effects to change colors on mouseover/mouseout, but the form works and it's accessible.


## Additional references/tools
* https://developer.mozilla.org/
* https://codepen.io/carolcomandulli/
* https://stackoverflow.com/
* https://www.w3schools.com/