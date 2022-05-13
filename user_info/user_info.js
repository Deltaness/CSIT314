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

function onLoad(){
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            console.log(req.response);
            const json = JSON.parse(req.response);
            document.getElementById("userName").innerHTML=json.uid;
        }
    }
    req.open("POST", "test", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify({
        uid: "william"
    }));
}