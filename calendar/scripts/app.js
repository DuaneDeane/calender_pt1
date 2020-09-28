
var visible = false;
var important = false;
var UI = {};

function showDetails() {
    console.log("btn clicked!");

    if(!visible) {
        UI.secForm.removeClass('invisible');
        UI.btnShow.text('Hide details');
        visible = true;
    }
    else {
        UI.secForm.addClass('invisible');
        UI.btnShow.text('Show details');
        visible = false;
    }

}

function toggleImportant() {
    if(!important) {
        UI.btnImportant.removeClass("btn-light");
        UI.btnImportant.addClass("btn-danger");
        important = true;
    }
    else {
        UI.btnImportant.addClass("btn-light");
        UI.btnImportant.removeClass("btn-danger");
        visible = false;
    }
    
}

function init() {
    console.log("main page");

    UI = {
        btnShow: $("#btnShow"),
        btnImportant: $("#btnImportant"),
        secForm: $("#secForm")
    };

    // get data from servers
    // hook events
    UI.btnShow.click(showDetails);
    UI.btnImportant.click(toggleImportant);

    // set the text of an input field
    $("#txtTitle").val("Duane Deane");
}


window.onload = init;