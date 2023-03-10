function checkData(){

    var enterEmail = document.getElementById('email').value;
    var enterPwd = document.getElementById('pwd').value;

    var getEmail=localStorage.getItem('Email');
    var getPwd=localStorage.getItem('Pwd');

    if (enterEmail == getEmail)
      {
        if (enterPwd == getPwd) {
            window.location.href="register.html";
            alert("Login Sucessful");
            
        }
        else {
            alert("wrong password")
        }
      }

}