//
var pitanje = [
	"koliko je 2+2 ?",
	"Glavni grad Srbije je:",
	"Najveca reka na svet:",
];

//
document.getElementById("askMe").addEventListener("click", function () {
	var nekiNasumicanBroj = Math.floor(Math.random() * 3);
	var odgovor = prompt(pitanje[nekiNasumicanBroj]).toLowerCase();
    
	if (odgovor == "beograd") {
		console.log("TACAN ODGOVOR!");
	} else if (odgovor == "4") {
		console.log("TACAN ODGOVOR!");
	} else if (odgovor == "nil") {
		console.log("TACAN ODGOVOR!");
	}
});

//
