// JavaScript Document

/* This script will enable to search events from our website by the event name */

function myFunction() {
    var input, filter, mySearch, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    mySearch = document.getElementById("content");
    li = mySearch.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a","h6")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";

        }
    }
}


/*this script is to check the contact form. If the contack form is empty it will gove alert while sending the form. If the form is filled it will it will also display a alert box showing the the form has sent*/

function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" ) {
alert("Fill All Fields !");
} else {

alert("Successfully Sent!");
}
}



/*The following script to embed google map showing the locations of our branch offices. */

function initMap() {

	var s1 = {
		info: '<strong>Sunway Pyramid</strong><br>\
					 Jalan PJS, Bandar SunwaySt<br> PJ,  46150<br>\
					<a href="https://goo.gl/maps/wxF7pDaaRAM2">Get Directions</a>',
		lat: 3.072952,
		long: 101.607522
	};

	var s2 = {
		info: '<strong>Menara Shell</strong><br>\
					Jalan Tun Sumbathan<br> Kuala Lumpur,  50470<br>\
					<a href="https://goo.gl/maps/M9Bxc434yNU2">Get Directions</a>',
		lat:3.130652,
		long: 101.685000
	};

	var s3 = {
		info: '<strong>KLCC</strong><br>\r\
					Kuala Lumpur<br>Kuala Lumpur, 50450<br>\
					<a href="https://goo.gl/maps/vgoNgM5xtss">Get Directions</a>',
		lat: 3.158860,
		long: 101.713596
	};

	var locations = [
      [s1.info, s1.lat, s1.long, 0],
      [s2.info, s2.lat, s2.long, 1],
      [s3.info, s3.lat, s3.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: new google.maps.LatLng(3.252617, 101.737186),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
