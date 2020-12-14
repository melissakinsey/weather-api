$(document).ready(function () {
  // {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  // <script type="text/javascript"> */}

  $("#values").click(function () {
    var APIKey = "addc5f504176245d7ca85381d3c3c7bf";
    var city = $("#cityInput").val();
    console.log(city);
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      APIKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(queryURL);

      console.log(response);
      $(city).text("Weather Details: " + response.description);
      // $(".city").html("<h1>" + response.name + "Weather Details</h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);

      var tempF = (response.main.temp - 273.15) * 1.8 + 32;

      $(".temp").text("Temperature (K) " + response.main.temp);
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);
    });
  });
});
