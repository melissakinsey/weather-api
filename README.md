# Weather Dashboard
Searchable weather dashboard build with Javascript, JQuery, Bootstrap, HTML, and CSS.


## Description

As a homework assignment, we were asked to create a weather dashboard. The dashboard pulls five-day weather forecasts from the [OpenWeather API](https://openweathermap.org/api). The data changes for each city searched, so there's no need for persistent storage.

## Getting Started
Use the browser search the weather forecast for any city. Type the name of the city into the search box and click the magnifying glass icon. A five-day forecast for that city will appear on the five cards near the bottom of the screen:
* General conditions 
* Temperature (Fahrenheit)
* Windspeed
The next day's forecast (Day 1) will also appear in the display area to the left of the screen. When you're ready to check the weather for a different city, return to the search box and type the name of another city (delete or type over the last city searched). Repeat this process for as many cities as you like.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Links to Finished Work

Github repo URL: https://github.com/melissakinsey/day-planner.git

GitLab Pages URL: https://melissakinsey.github.io/day-planner


## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```
## Additional Features Not Specified in Acceptance Criteria
* The five-day forecast for any given city includes a description of overall conditions (e.g., "Scattered Clouds" or "Clear Sky").
* The left side of the screen features buttons that highlight the next day's forecast when a city is searched.
* A span element was used to style the day number for each of the five days.
* The UI features a resort/summertime theme:
    ** A beach image combined with a flamingo float ring image
    ** A background gradient 
    ** A water image. A negative margin was used to overlap the gradient image so that the beach umbrella and chair appear to be on a beach.


## Credits

Credit is due to the following:

\*Our fabulous Columbia University Boot Camp instructor, teaching assistants, and staff

\*My tutor, Alyssa Schmalenberger

\*Our super little "We Got This!" study group (#study-group-1")!

\*Google Fonts ("Faster One" font used in title and day numbers)

\*Font Awesome (icons in button element)

\*Pixabay:
    ** Open Clipart Vectors (beach image)
    ** Annalise Art (flamingo float ring image)
    ** Stux (pink/gold gradient image)

## License

Copyright (c) 2020, Melissa Kinsey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
