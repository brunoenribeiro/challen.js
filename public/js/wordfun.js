class WordFun {
	// Methods

	//Create a "pyramid", starting with the middle letter in the first line, and adding adjacent letters on next each line.
	static createPyramidFromText() {
		const input = document.getElementById("pyramid-input").value;

		if (!input) {
			document.getElementById("result1").innerHTML = "Can't create a word triangle without a word :P";
			return false;
		} else if (input.indexOf(" ") !== -1){
			document.getElementById("result1").innerHTML = "Just one word, please.";
			return false;
		} else if (input.length % 2 === 0){
			document.getElementById("result1").innerHTML = "Please enter a word with an odd number of letters";
			return false;
		}

		const times = Math.ceil(input.length / 2); //Times a loop should happen until the entire word is printed.
		
		const middleIndex = Math.floor(input.length / 2);
		let line = input[middleIndex]; //Middle letter, first row
		let result = line;

		//Loop to define next lines, starting from the second
		for (let i = 1; i < times; i++){
			line = input[middleIndex - i] + line + input[middleIndex + i];
			result += "<br>" + line;
		}

		document.getElementById("result1").innerHTML = result;
	}

	static convertIntoLeet() {
		const input = document.getElementById("input2").value;
		const dictionary = {
			"a": "4",
			"b": "6",
			"c": "c",
			"d": "[)",
			"e": "3",
			"f": "]=",
			"g": "g",
			"h": "#",
			"i": "!",
			"j": ",|",
			"k": "k",
			"l": "L",
			"m": "m",
			"n": "n",
			"o": "( )",
			"p": "P",
			"q": "Q",
			"r": "r",
			"s": "$",
			"t": "7",
			"u": "(_)",
			"v": "v",
			"w": "w",
			"x": "%",
			"y": "y",
			"z": "z"

		}
		let result = "";

		//For each character in input, search if dictionary has an key for it. If so, add the key's value to the result. If not, add the character itself.
		Array.from(input).forEach(function(c){
			if (dictionary.hasOwnProperty(c.toLowerCase())){ //.toLowerCase() avoids duplicating keys in uppercase.
				result += dictionary[c.toLowerCase()];
			} else {
				result += c;
			}
		});

		document.getElementById("result2").innerHTML = result;
	}

}