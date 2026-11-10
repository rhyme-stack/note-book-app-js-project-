const notesContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// STORING THE NOTES IN THE BROWSER
function storage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// ADDING THE <P> THAT CREATES THE WHITE WRITING SPACE
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/recycle-bin.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    storage(); // save the new empty note too
});

// REMOVING A NOTE THROUGH THE TRASH ICON
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        storage();
    }
});

// SAVE WHENEVER THE USER TYPES (works for typing, pasting, etc.)
notesContainer.addEventListener("input", storage);

// ENTER KEY INSERTS A LINE BREAK INSTEAD OF A NEW PARAGRAPH
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

     

    
    
