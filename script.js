const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

//filters list of fruits and returns new array results with string containing letters from fruits
function search(str) {
	let results = [];
	results = fruit.filter(fruitType => fruitType.toLowerCase().includes(str.toLowerCase()));
	return results;
}

//as keys are typed in search bar, pass input and filtered list into showSuggestions()
function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

//clears HTML content in suggestions
//when input is typed, populate suggestions box with a list element for each letters included in results
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';

	if(inputVal.length > 0) {
		results.forEach(results => {
			const li = document.createElement('li');
			
			const highlightedSuggestion = results.replace(new RegExp(`(${inputVal})`, 'ig'), '<span class="has-suggestions">$1</span>');
			//li.addEventListener("mouseover", e => event.setAttribute("style", "background-color:white;"));
			
			suggestions.appendChild(li);
			li.innerHTML = highlightedSuggestion;
		});
	}

}

//populate search bar with the suggestion following click
//updates search bar and clears suggestions HTML content
function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);