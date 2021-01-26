//Checking if any buttons and which buttons are pressed

document.querySelector("#factForm").fact1.addEventListener("click", fact1);
document.querySelector("#factForm").fact2.addEventListener("click", fact2);
document.querySelector("#factForm").fact3.addEventListener("click", fact3);
document.querySelector("#factForm").fact4.addEventListener("click", fact4);
document.querySelector("#factForm").fact5.addEventListener("click", fact5);

//fact functions
function fact1(){
	document.querySelector("#factoutput").innerHTML = "The Peregrine Falcon also called the duck hawk is the fastest bird in a dive clocking in at around 389km/h. These birds would dive from altitude, using their speed and energy as their advantage to kill other birds like pigeons, and ducks. They can also sometimes kill a geese.<img src = 'images/falcon.jpg' alt = 'Picture of a Peregrine Falcon'>";
	
}//fact1

function fact2(){
	document.querySelector("#factoutput").innerHTML = "In 2007, Scotland spent £125,000 devising a new national slogan. The winning entry was: \“Welcome to Scotland\”.<img src = 'images/stirlingcastle.jpg' alt = 'Picture of the Stirling Castle'>";
	
}//fact2

function fact3(){
	document.querySelector("#factoutput").innerHTML = "In some countries like Germany, and Mexico, it is legal for you to escape prison, however the police could still arrest you if they find you, and charge you with any other crimes that you committed in your escape. There was once instance where a US prisoner in Mexico escape a prison while the guards were watching a movie so he didn't have to assault a guard, on a helicopter fully licensed and had a flight plan approved by the authorities. He flew to the US, and was allowed entry as a US citizen.<img src = 'images/bell.jpg' alt = 'Picture of a Bell Jetranger helicopter'>";
	
}//fact3

function fact4(){
	document.querySelector("#factoutput").innerHTML = "In WW2, Eugene Lazowski a Polish doctor faked a typhus outbreak, by injecting a strain of a proteus bacteria, this gave the positive result for a typhus test, but the individual doesn't have the disease. This strategy saved 8,000 people from being sent to concentration camps.<img src = 'images/bacteria.jpg' alt = 'Picture of bacteria'>";
	
}//fact4

function fact5(){
	document.querySelector("#factoutput").innerHTML = "When George Washington died, Napoleon Bonaparte of France gave a personal eulogy and ordered a ten day mourning period for France.<img src = 'images/Napoleon.jpg' alt = 'Panting of Napoleon'>";

}//fact5