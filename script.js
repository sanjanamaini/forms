var form = document.getElementById("studentForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Process the form submission here

  // Display the submission message
  var message = document.createElement("p");
  message.textContent = "Thank you! Your submission has been received.";
  form.appendChild(message);
});

// var studentForm = document.getElementById("studentForm");
// if (studentForm) {
//   studentForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // var fName = document.getElementById("frst_3").querySelector("input").value;
//     // var lName = document.getElementById("last_3").querySelector("input").value;
//     var regn = document.getElementById("reg_num").querySelector("input").value;
//     var dep = document.getElementById("department").value;
//     var cgp = document.getElementById("grade").querySelector("input").value;
//     var pos = document.getElementById("position").value;
//     var des = document
//       .getElementById("description")
//       .querySelector("textarea").value;
//     var rsn = document.getElementById("reason").querySelector("textarea").value;

//     var stuData = {
//       //"Image": imag,
//       Name: fName + " " + lName,
//       Registration: regn,
//       Dept: dep,
//       Cgpa: cgp,
//       Position: pos,
//       Description: des,
//       Reason: rsn,
//     };

//     // Convert stuData to JSON
//     var jsonData = JSON.stringify(stuData);
//     console.log(jsonData);

//     // Additional code to save or process the JSON data as needed

//     // Reset the form
//     //studentForm.reset();
//   });
// }
// Access the form element
const sform = document.getElementById('studentForm');

// Event listener for form submission
sform.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Create an object to store the form data
  const formData = {};

  // Iterate through each form field
  for (let i = 0; i < sform.elements.length; i++) {
    const element = sform.elements[i];
    const fieldName = element.id; // Use the ID of the field as the key in the JSON object

    // Skip elements without an ID or the submit button
    if (!fieldName || element.type === 'submit') {
      continue;
    }

    // Store the field value in the JSON object
    formData[fieldName] = element.value;
  }

  // Convert the JSON object to a string
  const jsonData = JSON.stringify(formData, null, 2);

  // Output the JSON data to the console
  console.log(jsonData);
});

