function login(){
    var cus = document.getElementById("cus");
    var pro = document.getElementById("pro");
    var identity;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    setCookies(username,password);
    if (cus.checked){
        identity = cus.value;
        window.open("../customer/customer.html",target="_self");

    } else if(pro.checked){
        identity = pro.value;
        window.open("../professional/professional.html",target="_self");
    }
    
}
function setCookies(username,password){
    document.cookie = "username="+username;
    document.cookie = "password="+password;
    // window.alert("dsqwd"+document.cookie);
}