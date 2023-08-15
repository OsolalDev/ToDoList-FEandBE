const navButton = $(".nav-bar_btn");
// Makes an underline when hovering the nav bar buttons
navButton.hover((e) => {
    const currentButton = e.currentTarget;
    $(currentButton).find(".nav-bar_btn_underline").toggle();
});

// Checked checkboxes
const checkBoxes = $(".content_to-do-list_cb");
checkBoxes.click((e) => {
    // Gets the checkbox we are clicking
    const currentCheckBox = e.currentTarget;
    // Gets the text next to the chechbox we are clicking
    const currentText = currentCheckBox.nextElementSibling;
    if($(currentCheckBox).is(":checked")) {
        $(currentText).addClass("lineThrough-text");
        // console.log("This is checked");
    } else {
        $(currentText).removeClass("lineThrough-text");
    }
})