function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}

function check() {
    if (user_name != "") {
        document.getElementById("user_name").innerHTML = user_name;
        window.location = "kwitter_room.html";
    }
    else {
        window.alert("YOU DO NOT HAVE AN ACCOUNT!")
    }
}