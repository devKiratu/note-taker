// Select DOM elements to use
const input = document.querySelector("textarea");
const notesBoard = document.querySelector(".notes-board");
const noNotes = document.querySelector("#no-notes");
const addBtn = document.querySelector("#add");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("#close");
const modalContent = document.querySelector("#content");

window.addEventListener("load", input.focus());

let count = 0; // Keeps count of the number of notes made

//What to do when the 'add note' button is clicked
addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	//Ensures input is not an empty string
	if (input.value == "") {
		alert("Note cannot be empty.");
	} else {
		noNotes.hidden = true;

		count++; //increment counter once we have valid input

		//Create DOM elements to use to display created text notes
		let noteWrapper = document.createElement("div");
		noteWrapper.setAttribute("id", "wrapper");

		let noteNumber = document.createElement("h4");
		noteNumber.textContent = `Note ${count}:`;

		let details = document.createElement("button");
		details.setAttribute("id", "view-details");
		details.innerHTML = "View details";

		let sticky = document.createElement("p");
		sticky.setAttribute("id", "new-note");

		const maxLength = 35;

		sticky.innerHTML =
			input.value.length > maxLength
				? `${input.value.substr(0, maxLength)}...`
				: input.value;

		//Append created elements to the notes-board
		noteWrapper.appendChild(noteNumber);
		noteWrapper.appendChild(sticky);
		noteWrapper.appendChild(details);
		notesBoard.appendChild(noteWrapper);

		//create a copy of the note to be used on the modal display
		let modalSticky = input.value;

		//reset input area
		input.value = "";
		input.focus();

		//dictates how the 'view details' button responds to a click event
		details.addEventListener("click", () => {
			modalContent.lastChild.remove(); //clears the modal of any previous input
			//creates a paragraph and appends the copy of input we stored in modalSticky to it.
			//Append paragraph to the modal and activate it

			let modalP = document.createElement("p");
			modalP.setAttribute("id", "modal-para");
			modalP.innerHTML = modalSticky;
			modalContent.appendChild(modalP);
			modal.classList.toggle("show");
		});
	}
});

//for closing the modal window
modalCloseBtn.addEventListener("click", () => modal.classList.toggle("show"));
window.addEventListener("click", (e) =>
	e.target == modal ? modal.classList.toggle("show") : null
);
