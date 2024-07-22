
//Access SVG object and its content document
window.addEventListener("load", function() {
   // Declare map object as variable
   var svg = document.getElementById("worldMap");
   // Declare map content as object
   var svgObject = document.getElementById("worldMap").contentDocument;
   

})
// Declare mapViewer object for interaction
var mapView = document.getElementById("mapViewer");
// Declare function to summon data
function getDemoInfo() {
   var doc = $(".//assets/world.svg").contentDocument;
   var locName;
   window.addEventListener("click", function(){
   // Get XML data with jQuery
      
      if (doc.path.classList !== null) {
         locName = doc.path.classList.value;
         $("#locName").load(".//assets/world.svg .locName");
      } else if (doc.path.name.value !== null) {
         locName = doc.path.name.value
         $("#locName").load(".//assets/world.svg #locName");
      }
      console.log(locName);
      // w3 jQuery ext file Load function 
      
      $.ajax({
         url: "api.geonames.org/get?",
         type: "GET",
         username: "jakechood",
         data: {
            geoNameId : locName,
            units: "imperial",
            dataType: 'xml'
         },  
      }).done(function(data) {
         $("#working").hide();
         $("#results").show();
         // Separate featureCode data (bugfix attempt)
         let countryCapital = data.featureCode.PPLC;
         let countryRegion = data.featureCode.RGN;
         let countryWaterfalls = data.featureCode.FLLS;
         let countryLakes = data.featureCode.LK;
      // Display the location data retrieved from the API 
         $("#locName").innerHTML = data.geoNameId;        
         $("#countryCapital").innerHTML = countryCapital;
         $("#countryRegion").innerHTML = countryRegion;
         $("#countryWaterfalls").innerHTML = countryWaterfalls;
         $("#countryLakes").innerHTML = countryLakes;
         $(locName).prependTo("#locNameTitle");
      }).fail(function() {
        $("#working").hide();
        $("#error").html("Error displaying location information.");
      });
   console.log(locName);
});
};

function showAfghanistan() {
   $.ajax({
      url: "api.geonames.org/citiesJSON?",
      type: "GET",
      data: {
         geoNameId : "afghanistan",
         units: "imperial",
         dataType: 'json',
         username: "jakechood"
      },  
      success : function() {
         
      }
   }).done(function(data) {
      }).done(function(data) {
         $.ajax({
            url: "api.geonames.org/citiesJSON?",
            type: "GET",
            data: {
               geoNameId : "afghanistan",
               units: "imperial",
               dataType: 'json',
               username: "jakechood"
            },
      });
      $("#working").hide();
      $("#results").show();
      // Separate featureCode data (bugfix attempt)
      let countryCapital = data.featureCode(PPLC);
      let countryRegion = data.featureCode[1];
      let countryWaterfalls = data.featureCode[2];
      let countryLakes = data.featureCode[3];
   // Display the location data retrieved from the API 
      $("#locName").innerHTML = "Afghanistan";        
      $("#countryCapital").innerHTML = countryCapital;
      $("#countryRegion").innerHTML = countryRegion;
      $("#countryWaterfalls").innerHTML = countryWaterfalls;
      $("#countryLakes").innerHTML = countryLakes;
      $(locName).prependTo("#locNameTitle");
   }).fail(function() {
   $("#working").hide();
   $("#error").html("Error displaying location information.");
   });
;
};