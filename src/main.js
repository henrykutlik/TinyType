var TT = TT || {}
let shift = false;

$(document).ready(() => { 
    $.each(TT.alphabet.call(), (index, element) => {
        $("#sectionMiddle").append("<td><div class='chars' id='" + element + "'>" + element + "</div></td>");
        $("#" + element).on('mousedown', {letter: element}, TT.type);

    });

    $("#space").on('mousedown', TT.insertSpace);
    $("#shift").on('mousedown', TT.shift);
    $("#bksp").on('mousedown', TT.del);


})

TT.type = (event) => {
    let currentTextField = $("#write").val();
    let letter = event.data.letter;
    if (shift === true) {
        letter = letter.toUpperCase();
        shift = false;
    }
    let newTextField = currentTextField + letter;
    $("#write").val(newTextField);
}

TT.insertSpace = () => {
    let currentTextField = $("#write").val();
    $("#write").val(currentTextField + " ");
}

TT.del = () => {
    let currentTextField = $("#write").val();
    $("#write").val(currentTextField.slice(0,-1));
}

TT.alphabet = () => {
    let alphabet = [];
    for (i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        alphabet.push(String.fromCharCode(i));
    }
    return alphabet
}


TT.shift = () => {shift = !shift;}