var app = document.getElementById('lead');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('"If you want to shine like a sun, first burn like a sun." <br>- <strong>Dr. APJ Abdul Kalam</strong>')
    .changeDeleteSpeed(20)
    .pauseFor(2500)
    .deleteAll()
    .typeString('"Things can get out of a black hole both on the outside and possibly to another Universe. <br>So, If you feel you are in a black hole, don\'t give up - there\'s a way out" <br> - <strong>Stephen Hawking</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('"The cosmos is within us. We are made of starstuff. We are a way for the universe to know itself." <br>- <strong>Carl Sagan</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('"The first step is to establish that something is possible, then - probability will occur." <br>- <strong>Elon Musk</strong>')
    .pauseFor(2500)
    .start();


// Map
var mymap = L.map('map', {
    center: [23.8408767, 91.4214196],
    zoom: 13
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'sk.eyJ1IjoiamFzaG1hZXN0ZXIiLCJhIjoiY2s0bXV5b3QzMG92ZjNtbWlncGNvaDJmZyJ9.uTsP83Vu5ap6JST-YsjNxQ'
}).addTo(mymap);
var marker = L.marker([23.8408767, 91.4214196]).addTo(mymap);
marker.bindPopup("<b>NIT Agartala</b><br>SANGANAN PRAYOG<br> <a target=\"_blank\" href=\"https://www.google.com/maps/place/National+Institute+of+Technology+Agartala/@23.8406804,91.4211192,17z/data=!4m5!3m4!1s0x0:0xf1c683a298e69e7b!8m2!3d23.8408767!4d91.4214196\">Click here</a>").openPopup();

// Smooth Scrolling
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("#navbar a").on('click', function(event) {

        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

// Sticky menu Background
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// Map Token
// sk.eyJ1IjoiamFzaG1hZXN0ZXIiLCJhIjoiY2s0bXV5b3QzMG92ZjNtbWlncGNvaDJmZyJ9.uTsP83Vu5ap6JST-YsjNxQ