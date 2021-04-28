// password is = stayhappy

//This will redirect you to jgoso.com

function myfun() {
    if (document.form.password.value === "stayhappy") {
        alert("login successfully");
        window.location = "https://jgoso.com"
    } else {
        alert("Invalid Password ! Try again.");
    }
}
