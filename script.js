window.addEventListener("DOMContentLoaded", () => {
    let listNotes = [];
    let inputText = document.getElementById("descriptionId");
    let saveNoteBtn= document.getElementById("saveBtn")
    let seeNotesBtn = document.getElementById("seeNoteBtn");

    let $form = document.querySelector('form');

    $form.addEventListener("submit", (Event) =>{
        Event.preventDefault();
        addNote();
    });

    function addNote() {
        let note = inputText.value;
        if (note) {
            listNotes.push(note);
            inputText.value = "";
            console.log(listNotes);
        } else {
            alert("Please write something in the description!");
        }
    }


    saveNoteBtn.addEventListener("click", event => {
        event.preventDefault();
        addNote();
        alert("Note has been saved!");
    });
    

    seeNotesBtn.addEventListener("click", event => {
        event.preventDefault();

        let allNotes = "";

        listNotes.forEach(note => {
            allNotes += note + "\n"
        })

        console.log(allNotes);
        
    });
});