// password is = stayhappy

//This will redirect you to jgoso.com


function myfun() {
    if (document.form.password.value === "stayhappy" && document.form.name.value==="Yuvraj Jwala") {
        alert("login successfully");
        window.location = "https://jgoso.com"
    } else {
        alert("Invalid Password ! Try again.");
    }
}


// code by YUVRAJ JWALA
