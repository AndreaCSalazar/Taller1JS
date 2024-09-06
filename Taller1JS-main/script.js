window.addEventListener("DOMContentLoaded", () => {

    $form.addEventListener("submit", (Event) =>{
        Event.preventDefault();
        addNote();
    });
});