const input = document.querySelector("textarea");
const notesBoard = document.querySelector(".notes-board");
const noNotes = document.querySelector("#no-notes");
const addBtn = document.querySelector("#add");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector("#close");
const modalContent = document.querySelector("#content");
window.addEventListener("load", input.focus());

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (input.value == "") {
		alert("Note cannot be empty.");
	} else {
		console.log("hi");
		noNotes.hidden = true;
		let noteWrapper = document.createElement("div");
		noteWrapper.setAttribute("id", "wrapper");
		let details = document.createElement("button");
		details.setAttribute("id", "view-details");
		details.innerHTML = "View details";
		let sticky = document.createElement("p");
		sticky.setAttribute("id", "new-note");
		sticky.innerHTML = `${input.value.substring(0, 30)}...`;
		noteWrapper.appendChild(sticky);
		noteWrapper.appendChild(details);
		notesBoard.appendChild(noteWrapper);
		let modalSticky = input.value;
		input.value = "";
		input.focus();
		details.addEventListener("click", () => {
			// console.log(modalContent.lastChild);
			modalContent.lastChild.remove();
			let modalP = document.createElement("p");
			modalP.setAttribute("id", "modal-para");
			modalP.innerHTML = modalSticky;
			modalContent.appendChild(modalP);
			modal.classList.toggle("show");
		});
	}
});

modalCloseBtn.addEventListener("click", () => modal.classList.toggle("show"));
window.addEventListener("click", (e) =>
	e.target == modal ? modal.classList.toggle("show") : null
);
