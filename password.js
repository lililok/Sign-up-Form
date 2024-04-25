document.getElementsByClassName("password").addEventListener( {

    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password_validation").value;
    if (password === confirmPassword) {
        document.getElementById("message").innerHTML = "Passwords match!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerHTML = "Passwords do not match!";
        document.getElementById("message").style.color = "red";
    }
});