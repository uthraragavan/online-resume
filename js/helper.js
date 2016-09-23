/*
Project: Online Resume
Author: Uthra Vijayaragvan
Date: 09/18/2016
 */
//Variable name declarations to be used in resumeBuilder.js
//The %data% in each of these variables is to be replaced by data coming from schema defined in resumeBuilder.js
var HTMLheaderName = '<h1 class="name orange-text">%data%</h1>';
var HTMLheaderRole = '<span class="role white-text">%data%</span><hr>';
var HTMLcontactGeneric = '<li class="contact-text flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="contact-text flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="contact-text flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="contact-text flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="contact-text flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="contact-text flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="contact-text flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
var HTMLbioPic = '<figure><img src="%data%" class="biopic"></figure>';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="list-group flex-column"></ul>';
var HTMLskills = '<li class="skill-text flex-item"><span class="white-text">%data%</span></li>';
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<span class="work-text"><a href="#">%data%';
var HTMLworkTitle = ' - %data%</a></span>';
var HTMLworkDates = '<div class="date-text"><span class="work-text">%data%</span></div>';
var HTMLworkLocation = '<div class="location-text"><span class="work-text">%data%</span></div>';
var HTMLworkDescription = '<p class="work-text">%data%</p>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<span class="proj-text"><a href="%urldata%" target="_blank">%data%</a></span>';
var HTMLprojectDates = '<span class="proj-text"><div class="date-text">%data%</div></span>';
var HTMLprojectDescription = '<p class="proj-text">%data%</p>';
var HTMLprojectFigure = '<figure class="proj-fig"></figure>'
var HTMLprojectImage = '<img class="proj-img" src="%data%" alt="Project picture"></figure>';
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<span class="edu-text"><a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a></span>';
var HTMLschoolDates = '<div class="date-text"><span class="edu-text">%data%</span></div>';
var HTMLschoolLocation = '<div class="location-text"><span class="edu-text">%data%</span></div>';
var HTMLschoolMajor = '<em><br><span class="edu-text">Major: %data%</span></em>';
var HTMLonlineClasses = '<h3 class="edu-head">Online Classes</h3><div id="online-entry" class="education-entry"></div>';
var HTMLonlineTitle = '<span class="edu-text"><a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a></span>';
var HTMLonlineDates = '<div class="date-text"><span class="edu-text">%data%</span></div>';
var HTMLonlineURL = '<span class="edu-text"><a href="#">%data%</a></span>';
var googleMap = '<div id="map"></div>';

//On resize of window, when the width <= 545, display the skills as inline list
$(document).ready(function() {
    var $window = $(window);
    $(window).on('resize', function() {
        if ($window.width() <= 545) {
            $("#skills").removeClass('list-group flex-column');
            $("#skills").addClass('list-inline');
        } else {
            $("#skills").addClass('list-group flex-column');
            $("#skills").removeClass('list-inline');
        }
    });
});

//Set of functions to display the map under Where I have lived and Worked
var map; // declares a global map variable
function initializeMap() {
    var locations;
    var mapOptions = {
        disableDefaultUI: true
    };

    //Map object
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    // Function that returns the locations from work and school objects in schema defined in resumeBuilder.js
    function locationFinder() {
        var locations = [];
        locations.push(bio.contacts.location);
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}


// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});