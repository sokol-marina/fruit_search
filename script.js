const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  results = fruit.filter((f) => f.toLowerCase().includes(str.toLowerCase()));
  return results;
}

function searchHandler(e) {
  const inputVal = e.target.value;
  if (inputVal.length > 0) {
    const results = search(inputVal);
    showSuggestions(results, inputVal);
  } else {
    suggestions.innerHTML = "";
  }
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ""; 
  if (inputVal) {
  results.slice(0, 5).forEach((result) => {
    const li = document.createElement("li");
	const escapedInputVal = inputVal.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	// Create a RegExp to find matching parts, 'gi' for global and case-insensitive search
	const regex = new RegExp(`(${escapedInputVal})`, 'gi');
	// Replace matching parts with a bold version
	const formattedResult = result.replace(regex, '<strong>$1</strong>');
	li.innerHTML = formattedResult;
    suggestions.appendChild(li);
	suggestions.classList.add('has-suggestions');
  });}else{alert("No imput value")}
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent; 
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
