function back(){
    window.open("../customer/customer.html",target="_self");
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15,
  });
}

window.initMap = initMap;