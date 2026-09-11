function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var department = document.getElementById("department").value;
    var marks = document.getElementById("marks").value;
    var city = document.getElementById("city").value;
    if (name == "" || age == "" || department == "" || marks == "" || city == "") {
        alert("Please Enter All Detalis");
        return;
    }
    var student = {
        name: name,
        age: age,
        department: department,
        marks: marks,
        city: city
    };
    var jsonData = JSON.stringify(student);
    var studentDetails = JSON.parse(jsonData);
    var card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML =
        "<h2>" + studentDetails.name + "</h2>" +
        "<p>Age: " + studentDetails.age + "</p>" +
        "<p>Department: " + studentDetails.department + "</p>" +
        "<p>Marks: " + studentDetails.marks + "</p>" +
        "<p>City: " + studentDetails.city + "</p>" +
        "<button class='delete-button' onclick='deleteStudent(this)'>Delete</button>";
    document.getElementById("studentData").appendChild(card);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("department").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("city").value = "";
}
function deleteStudent(button) {
        button.parentElement.remove();
}