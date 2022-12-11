function validateForm() {
    title = document.forms["contactMe"]["postTitle"].value;
    email = document.forms["contactMe"]["email"].value;
    username = document.forms["contactMe"]["username"].value;
    link = document.forms["contactMe"]["link"].value;
    category = document.forms["contactMe"]["category"].value;
    message = document.forms["contactMe"]["message"].value;

    // check required fields
    if(title == "" || email == "" || username == "" || message == "" || category == "") {
        alert("The fields Title, Email, Username, Category, and Message are required!");
        return;
    }
    // valid email
    if(email != "" && email.indexOf("@") == -1) {
        alert("Must provide a valid email!")
        return;
    }
    // if link validate
    if(link != "") {
        try {
            url = new URL(link); //https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
        } catch (error){
            console.log(error);
            alert("Enter a valid URL!");
            return;
        };
    }
    document.forms["contactMe"].action = "http://localhost:3006/contactMe";

};

function updateUsername() {
    email = document.forms["contactMe"]["email"].value;

    if(document.forms["contactMe"]["username"].value == "" && email.indexOf("@") != -1) {
        username = email.substring(0, email.indexOf("@"));
        document.getElementById("username").value = username;
    }
}

function checkConcern() {
    category = document.forms["contactMe"]["category"].value;
    if(category == "Concern") {
        document.getElementById("concernMessage").innerHTML = "In order to best address your concern, please make sure to list the specific way in which I have wronged you.";
        document.getElementById("concernMessage").style = "border: 1px solid red";
    }
    else {
        document.getElementById("concernMessage").innerHTML = "";
        document.getElementById("concernMessage").style = ""; 
    }
}

