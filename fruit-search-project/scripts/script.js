const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const suggList = document.querySelector("#suggestion-list");
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


/*
 * function: searchSTR
 * description: executes the search for the string
 * and return a matching set of fruits
 */
function searchSTR( str ) {
	let results = [];
	// global search: g & case insensitive: i
	let regex = new RegExp( str , "gi" );
	results = fruit.filter( function (value, key) {
		return value.match( regex );
	  });
	return results;
}
/*
 * function: searchSTRHandler
 * description: Prepare and validate the search: cleaning and check the string size
 */
function searchSTRHandler(e) {
	// clear any previous search
	clearSuggestion();
	// starts search with more than 2 characters (it's annoying to start with only 1 letter)
	if ( input.value.length >= 2 ) {
		results = searchSTR( input.value );
		if ( results ) {
			showSuggestions( results , input.value  );
		}
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
function showSuggestions( results , inputVal ) {
	results.forEach( function ( value , index ) { 
		const newLine = document.createElement("option");
		newLine.setAttribute("value", value );
		suggList.append(newLine);
	});
}
// validates the string for the search
input.addEventListener('keyup', searchSTRHandler );
