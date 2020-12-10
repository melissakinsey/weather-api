$(document).ready(function () {
    let queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}"
    let APIKey = "9c31a3b4618fe0ad90a6912f6418fb0c"
}

$.ajax({
    url: queryURL,
    method: "GET"$( document ).ready(function() {
        
})

form = document.querySelector("searchFor") 

    {form.addEventListener("submit", async function (e));
}



function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);