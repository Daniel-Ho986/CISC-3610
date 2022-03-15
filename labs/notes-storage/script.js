saveNotes = () => {
    var title = document.getElementById("textinput").value;
    var note = document.getElementById("textarea").value;
    localStorage.setItem('page', JSON.stringify({Title: title, Note: note}));
}

deleteNotes = () => {
    localStorage.clear();
}