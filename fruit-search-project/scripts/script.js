const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggList = document.querySelector("#suggestion-list");

/*
 * function: search
 * description: executes the search and return a matching set of fruits
 */
function search(str) {
	let results = [];
	// global search: g & case insensitive: i
	let regex = new RegExp( str , "gi" );
	const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
	results = fruit.filter( function (value, key) {
		return value.match( regex );
	  });
	showSuggestions( results , str  );
}
/*
 * function: searchHandler
 * description: Prepare and validate the search: cleaning and check the string size
 */
function searchHandler(e) {
	// clear any previous search
	clearSuggestion();
	// starts search with more than 2 characters (it's annoying to start with only 1 letter)
	if ( input.value.length >= 2 ) {
		search( input.value );
	} 
}
/*
 * function: clearSuggestion
 * description: Clear all previous suggestions from the list
 */
function clearSuggestion() {
	while (suggList.hasChildNodes()) {
		suggList.removeChild(suggList.firstChild);
	}
}
/*
 * function: showSuggestions
 * description: shows the list of suggestions based on the search
 */
function showSuggestions(results, inputVal) {
	results.forEach( function ( value , index ) { 
		const newLine = document.createElement("li");
		newLine.textContent = value ;
		newLine.setAttribute("id", value );
		suggList.append(newLine);
	});
}
/*
 * function: useSuggestion
 * description: Shows the selection in the input field
 */
function useSuggestion(e) {
	// add innerText to the input
	input.value = e.target.innerText;
	// clear suggestion list
	clearSuggestion();
}

// validates the search
input.addEventListener('keyup', searchHandler);
// accepts the suggestion
suggList.addEventListener( "click" , (e) => {
	if ( e.target.nodeName == "LI" ) {
		useSuggestion(e);
	}
});
// adds hover effect on the suggestion list
suggList.addEventListener( "mouseover" , (e) => {
	if ( e.target.nodeName == "LI" ) {
		e.target.style.background = "rgb(204, 214, 145)";
	}
});
suggList.addEventListener( "mouseout" , (e) => {
	if ( e.target.nodeName == "LI" ) {
		e.target.style.backgroundColor = "rgb(234, 222, 219)";
	}
});