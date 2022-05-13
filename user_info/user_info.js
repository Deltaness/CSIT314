function modify(){
    window.open("../html/modify_user_info.html",target="_self");
}

function back(){
    window.open("../html/customer.html",target="_self");
}

function openNav(){
    document.getElementById("nav").style.width="250px";
    document.getElementById("container").style.marginLeft="250px";
}

function closeNav(){
    document.getElementById("nav").style.width = "0";
    document.getElementById("container").style.marginLeft= "0";
}
var json_C;
function onLoad(){
    var id = getCookie("id");
    var password = getCookie("password");
    var type = getCookie("type");
    const req = new XMLHttpRequest();
    
    req.open("POST", "????", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({
        uid: id,
        password: password,
        type: type
    }));

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            console.log(req.response);
            const json = JSON.parse(req.response);
            json_C = json;
            document.getElementById("userName").innerHTML=json_C.username;
            document.getElementById("gender").innerHTML=json_C.gender;
            document.getElementById("dob").innerHTML=json_C.dob;
            document.getElementById("email").innerHTML=json_C.email;
            document.getElementById("phone").innerHTML=json_C.phone;
            document.getElementById("address").innerHTML=json_C.address;
            document.getElementById("VIPstart").innerHTML=json_C.VIPstart;
            document.getElementById("VIPend").innerHTML=json_C.VIPend;
            document.getElementById("vehicleList").innerHTML=json_C.vehicleList;
        }
    }
}