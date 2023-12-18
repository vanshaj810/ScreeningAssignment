// Get all elements with the class 'radioBox'
var radioBoxes = document.querySelectorAll(".radioBox");

// Add a click event listener to each radioBox
radioBoxes.forEach(function (box) {
  box.addEventListener("click", function () {
    // Remove 'border-green-active' class from all radioBoxes
    radioBoxes.forEach(function (box) {
      box.classList.remove("border-green-active");
    });

    // Add 'border-green-active' class to the clicked radioBox
    box.classList.add("border-green-active");
    // Toggle the 'display_none' class
    var displayNoneElement = box.querySelector(".display_none");
    if (displayNoneElement) {
      displayNoneElement.classList.toggle("display_none");
      displayNoneElement.classList.add("active-text-color");
    }

    // Check the checkbox in the clicked box
    var checkbox = box.querySelector('input[type="checkbox"]');
    if (checkbox) {
      checkbox.checked = true;
    }

    // Uncheck checkboxes in other boxes
    radioBoxes.forEach(function (otherBox) {
      if (otherBox !== box) {
        var otherCheckbox = otherBox.querySelector('input[type="checkbox"]');
        if (otherCheckbox) {
          otherCheckbox.checked = false;
        }
        var displayNoneElement = otherBox.querySelector(".active-text-color");
        let displayNoneElement2 = otherBox.querySelector(
          ".forecefully_display_none"
        );
        let displayNoneElement22 = box.querySelector(
          ".forecefully_display_none"
        );
        console.log("displayNoneElement2", displayNoneElement2);
        if (displayNoneElement && displayNoneElement2 == null) {
          displayNoneElement.classList.add("forecefully_display_none");
        } else if (displayNoneElement2 != null) {
          displayNoneElement22.classList.remove("forecefully_display_none");
        }
      }
    });
  });
});
