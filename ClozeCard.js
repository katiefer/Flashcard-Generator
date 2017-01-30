//Create ClozeCard constructor object
function ClozeCard(text, cloze){
//Make text an array
	this.text = [];
	this.cloze = cloze;
	
//Create a for loop to loop through text
	for (var i=0; i < text.length; i++){

//If text is equal to cloze input, replace cloze text with "...". Store replaced value in partial variable.
		if (text === cloze){
			var partial = str.replace(cloze, "...");
		}

//Throw error if error
	 if(error){
      throw error;
      }
	}

//Include the scope safe constructor

	function ClozeCard(text, cloze){
		if (!(this instanceof ClozeCard)){
			return new ClozeCard(text, cloze);
		}
	}
}
console.log(partial, cloze);