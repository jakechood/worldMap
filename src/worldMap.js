
//Access SVG object and its content document
window.addEventListener("load", function() {
   // Declare map object as variable
   var svg = document.getElementById("worldMap");
   // Declare map content as object
   var svgObject = document.getElementById("worldMap").contentDocument;
   

})
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