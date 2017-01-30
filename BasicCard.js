//Create global constructor for BasicCard 
function BasicCard(front, back){
	this.front = front;
	this.back = back;

//Throw error if error
	 if(error){
      throw error;
      }

//Include the scope safe constructor 
	function BasicCard(front, back){
		if (!(this instanceof BasicCard)){
			return new BasicCard(front, back);
		}
}