//Require respective JS constructor files

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// function BasicCard(front, back){
// 	this.front = front;
// 	this.back = back;
// }

//Create new BasicCard constructor object - Input arguments
var b = new BasicCard("What are PCI-DSS Requirements?", "The Payment Card Industry Data Security Standard (PCI DSS) is a proprietary information security standard for organizations that handle branded credit cards from the major card schemes including Visa, MasterCard, American Express, Discover, and JCB.");

// Console.log variable
console.log(b);

//Create new ClozeCard constructor object - Input arguments
var c = new ClozeCard("The Payment Card Industry Data Security Standard (PCI DSS) is a proprietary information security standard for organizations that handle branded credit cards from the major card schemes including Visa, MasterCard, American Express, Discover, and JCB.", "The Payment Card Industry Data Security Standard (PCI DSS) is a proprietary information security standard for organizations that handle branded credit cards from the major card schemes including Visa, MasterCard, American Express, Discover, and JCB.", "Payment Card Industry Data Security Standard (PCI DSS)");

console.log(c);