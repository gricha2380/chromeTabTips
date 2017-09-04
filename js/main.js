// List of JavaScript tips
var request = new XMLHttpRequest();
var url = "https://spreadsheets.google.com/feeds/list/1WzbZVa56lPn3Cqrtqn6SEU5RJ3dSIIhLcXGupj2bBqg/default/public/values?alt=json";
var data = '';
var counter;

request.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(this.responseText);
		//console.log(data);
		//console.log("data full");
		//console.log(data["feed"]["entry"][0]["content"]["$t"])
		counter = Math.abs(data["feed"]["entry"].length);
		console.log("this is counter in AJAX "+counter);
		showTip();
    }
}

request.open("GET", url, true);
request.send();

var tipsList = [
	"Don't forget the <span class='code'>var</span> keyword when assigning a variable's value for the first time.",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",

	"Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>function timesFive(inputNumber) {<br> &nbsp;&nbsp;return inputNumber * 5; <br>}<br>console.log(timesFive(6));<br>// Output: 30</span> ",

	"The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

	"The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

	"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> 'Hello, my name is ' + myName;</span>",

	"To generate a random number, use JavaScript's built in function <span class='code'>Math.random()</span>.",

	"Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>"
];

// Generate a number
function generateNumber(num) {
	var random = Math.ceil(Math.random()*Number(num));
	//console.log(tipsList.length-1);
	return random;
}

function showTip() {
	// Tip Limit counter

	var list = data["feed"]["entry"];
//counter = counter.length;
console.log("counter starter value")
console.log(counter);
var currentTip;
//reduceTip(counter);

	if (counter>1) {
		currentTip = generateNumber(counter-1);
		console.log("current tip is "+currentTip);
		reduceTip();
		console.log("Reducing counter now, sir. It's: "+counter);
		//console.log(list[0]["content"]["$t"]);
		document.getElementsByClassName("js-tip")[0].innerHTML = "<div class='title'>"+list[currentTip]["gsx$category"]["$t"] + "</div>"+ list[currentTip]["content"]["$t"];
	} else if (counter==1) {
		currentTip = generateNumber(counter-1);
		reduceTip();
		document.getElementsByClassName("js-tip")[0].innerHTML = list[currentTip]["content"]["$t"];
		document.getElementsByClassName("tip-button")[0].classList.add("disabled");
	}
	else {
		// reduceTip();
		document.getElementsByClassName("js-tip")[0].innerHTML = list[currentTip]["content"]["$t"];
		document.getElementsByClassName("tip-button")[0].classList.add("disabled");
	}

}
//showTip();

function reduceTip() {
	//var countPlain = Math.abs(counterLocal);
	console.log("content of reduceTip",counter);
	//counterLocal--;
	counter--;
	console.log("content of reduceTip after minus",counter);
	document.getElementsByClassName("tip-limit-count")[0].innerText = counter;
	console.log("final reduceTip value "+counter)
	//return counter = counterLocal;
}

document.getElementsByClassName("tip-button")[0].addEventListener("click", function(){
	showTip();
});


// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip


// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look


// Get the first tip
