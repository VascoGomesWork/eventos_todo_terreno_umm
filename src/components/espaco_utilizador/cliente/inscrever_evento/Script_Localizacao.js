import React from "react";

    //Código Google Maps -> https://www.w3schools.com/graphics/google_maps_intro.asp
    function myMap() {
    var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
