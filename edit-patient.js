document.addEventListener("DOMContentLoaded", function() {
    var editPopup = document.getElementById("editPatientPopup");
    var editForm = document.getElementById("editPatientForm");
    var currentEditingLi = null;

    // Function to show the edit form
    function showEditForm(li) {
        var textContent = li.querySelector(".text-content").innerHTML.trim();
        var nameParts = textContent.split("<br>");
        var name = nameParts[0].split(" ");
        var firstName = name[0];
        var lastName = name.slice(1).join(" ");
        var details = nameParts[1].split(", ");
        var gender = details[0];
        var age = details[1].replace('</span>', '');

        document.getElementById("editFirstName").value = firstName;
        document.getElementById("editLastName").value = lastName;
        document.getElementById("editGender").value = gender;
        document.getElementById("editAge").value = age;

        currentEditingLi = li;
        editPopup.style.display = "block";
    }

    // Attach event listeners to existing patients' 3dots.svg icons
    document.querySelectorAll(".options-icon").forEach(function(icon) {
        icon.addEventListener("click", function() {
            showEditForm(this.closest("li"));
        });
    });

    // Event delegation for dynamically added patients
    document.querySelector(".scrollable-list").addEventListener("click", function(event) {
        if (event.target && event.target.matches(".options-icon")) {
            showEditForm(event.target.closest("li"));
        }
    });

    // Handle form submission for editing a patient
    editForm.onsubmit = function(event) {
        event.preventDefault();

        var firstName = document.getElementById("editFirstName").value;
        var lastName = document.getElementById("editLastName").value;
        var gender = document.getElementById("editGender").value;
        var age = document.getElementById("editAge").value;

        if (currentEditingLi) {
            currentEditingLi.querySelector(".text-content").innerHTML = `${firstName} ${lastName}<br><span>${gender}, ${age}</span>`;
            closePopups();
        }
    };

    // Close popups function
    function closePopups() {
        editPopup.style.display = "none";
    }

    // Close the edit popup when clicking the close button or outside the popup
    document.querySelector(".popup .close").addEventListener("click", function() {
        closePopups();
    });

    window.onclick = function(event) {
        if (event.target === editPopup) {
            closePopups();
        }
    };
});