function addNewPatient(imageSrc, firstName, lastName, gender, age) {
    var newListItem = document.createElement("li");
    newListItem.classList.add("patient-item");
    newListItem.innerHTML = 
        `<img src="${imageSrc}" alt="Profile Image" class="profile-img">
        <div class="text-content">${firstName} ${lastName}<br><span>${gender}, ${age}</span></div>
        <img src="3dots.svg" alt="Options" class="options-icon">`;

    patientList.insertBefore(newListItem, document.querySelector(".add-patient"));
    addForm.reset();
    closePopups();

    // Save to localStorage
    savePatientToLocalStorage({
        imageSrc,
        firstName,
        lastName,
        gender,
        age
    });

    // Add event listener to new patient's 3dots.svg icon
    newListItem.querySelector(".options-icon").addEventListener("click", function() {
        showEditForm(newListItem);
    });
}

function savePatientToLocalStorage(patient) {
    let patients = JSON.parse(localStorage.getItem("patients")) || [];
    patients.push(patient);
    localStorage.setItem("patients", JSON.stringify(patients));
}