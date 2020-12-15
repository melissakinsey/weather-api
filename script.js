$(document).ready(function () {
  $("#values").click(function () {
    var APIKey = "addc5f504176245d7ca85381d3c3c7bf";
    var city = $("#cityInput").val();
    console.log(city);
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial" +
      "&appid=" +
      APIKey;
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (list) {
      console.log(queryURL);

      console.log(list.list[0].weather[0].description);
      var description = list.list[0].weather[0].description;
      $("#description-day-1").text(description);
      $(".city").html("<h2><b>" + list.city.name + " Weather Details</b></h2>");
      //

      //   $("#values").click(function () {
      //     var APIKey = "addc5f504176245d7ca85381d3c3c7bf";
      //     var cityName = $("#cityInput").val();
      //     console.log(cityName);
      //     var queryURL =
      //       "https://api.openweathermap.org/data/2.5/forecast/daily?q=" +
      //       cityName +
      //       "&cnt=5" +
      //       "&appid=" +
      //       APIKey;
      //
      //     $.ajax({
      //       url: queryURL,
      //       method: "GET",
      //     }).then(function (list) {
      //       console.log(queryURL);
      //
      //       console.log(list);
      //       $(".city").html("<h2><b>" + list.city.name + " Weather Details</b></h2>");

      // console.log(response);
      // var Windspeed = response.list.wind.speed;
      // // const theWind = ".wind";
      // $(".wind").html("<p>Windspeed: " + Windspeed + "</p>");
      //
      //       console.log();
      //       $(".humidity").text("Humidity: " + list.main.humidity);
      //
      //       console.log(list);
      //       $(".tempF").text("Temperature (F) " + list.main.temperature);

      // console.log("Humidity: " + response.list.main.humidity);
      // console.log("Temperature (F): " + tempF);
    });
  });
});
