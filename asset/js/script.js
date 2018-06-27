var wordArea = document.getElementById("word");
var wrongLetters = document.getElementById("missedLetters");
var winningTextPlaceholder = document.getElementById("winningText");
var possibleWordsArray = ["amazing", "baby", "dental", "crazy", "javascript", "believe"];
console.log(possibleWordsArray);
var randomNumber = Math.floor(Math.random() * 6);
var winnerWord = possibleWordsArray[randomNumber];
var winnerWordArray = [];
var hiddenWord = [];
var pressedKey = "";

console.log(winnerWord);
for (var i = 0; i < winnerWord.length ; i++) {
  for (var j = 0; j < winnerWord[i].length ; j++) {
    winnerWordArray.push(winnerWord[i][j]);
  }
}

for (var i = 0; i < winnerWordArray.length ; i++) {
	hiddenWord.push("_");
}



 wordArea.appendChild(document.createTextNode(hiddenWord.join("")));

 console.log(winnerWordArray);

document.addEventListener("keypress", function(e) {
	pressedKey = String.fromCharCode(e.which);
	console.log(pressedKey);

	if (winnerWordArray.indexOf(pressedKey) >= 0) {
		for (var i = 0; i < winnerWordArray.length ; i++) {
			if (pressedKey == winnerWordArray[i]) {
				hiddenWord[i] = pressedKey;
			}
		}
	} else {
		wrongLetters.appendChild(document.createTextNode(pressedKey + ","));
	}

	console.log(hiddenWord.join(""));
	wordArea.innerHTML = hiddenWord.join("");
	if (hiddenWord.join("") === winnerWord) {
		winningTextPlaceholder.appendChild(document.createTextNode("Winner Winner Chicken Dinner!"));
	}
})

