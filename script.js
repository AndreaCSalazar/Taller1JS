window.addEventListener("DOMContentLoaded", () => {
    let listNotes = [];
    let inputText = document.getElementById("descriptionId");
    let seeNotesBtn = document.querySelector(".btn");

    let $form = document.querySelector('form');

    $form.addEventListener("submit", (Event) =>{
        Event.preventDefault();
        addNote();
    });

    function addNote() {
        let note = inputText.value();
        if (note) {
            listNotes.push(note);
            inputText.value = "";
            console.log(listNotes);
        } else {
            alert("Please write something in the description!");
        }
    }

    

    seeNotesBtn.addEventListener("click", event => {
        event.preventDefault();

        let allNotes = "";

        listNotes.forEach(note => {
            allNotes += note + "\n"
        })

        alert(allNotes);
        
    });
});