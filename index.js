const input = document.querySelector("textarea");
const notesBoard = document.querySelector(".notes-board");
const noNotes = document.querySelector("#no-notes");
const addBtn = document.querySelector("#add");
window.addEventListener("load", input.focus());

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (input.value == "") {
		alert("Note cannot be empty.");
	} else {
		console.log("hi");
		noNotes.hidden = true;
		let sticky = document.createElement("p");
		sticky.setAttribute("id", "new-note");
		sticky.innerHTML = input.value;
		notesBoard.appendChild(sticky);
		input.value = "";
		input.focus();
	}
});
