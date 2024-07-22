let inputBox = document.getElementById('input-box');
let weatherIcon = document.getElementById('weather-icon')
let search = document.getElementById('search')
let weather = document.querySelector('.weather')



window.onload = function(){

    let loader = document.querySelector('.loader')
    loader.style.display = 'none'
    let content = document.querySelector('.main_content')
    content.style.display = 'block'
  }
async function checkWeather(city){

    if(inputBox.value === ""){
        Swal.fire({
            icon: "error",
            title: "Please enter a city name",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }else{

    const apikey = "4a585a71266763434a861052ee1060e0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const weatherData = await fetch(url).then(response => response.json());
    
  

    console.log(weatherData);
    
    document.querySelector(".city").innerHTML = weatherData.name;
    document.querySelector(".temp").innerHTML = Math.round(weatherData.main.temp) + "°C";
    document.querySelector(".humiditypercent").innerHTML = weatherData.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = weatherData.wind.speed + " km/h";

    const weatherIcon = document.querySelector(".weather-icon");
    const background = document.querySelector('.background')

 

    switch (weatherData.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            background.src = "asstes/cloudy.gif"

            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            background.src = "asstes/clear.gif"


            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            background.src = "asstes/rain.gif"

            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            background.src = "asstes/drizzle.gif"

            break;
            case "Smoke":
                weatherIcon.src = "images/smoke.png";
                background.src = "asstes/smoke.gif"
    
                break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            background.src = "asstes/snow.gif"

            break;
        case "Thunderstorm":
            weatherIcon.src = "images/storm.png";
            background.src = "asstes/storm.gif"

            break;
        case "Mist":
        case "Fog":
            weatherIcon.src = "images/mist.png";
            background.src = "asstes/haze.gif"

            break;
            case "Haze":
                weatherIcon.src = "images/Haze.png";
                background.src = "asstes/mist.gif"
    
                break;
        default:
            // Default icon if weather condition doesn't match any case
            weatherIcon.src = "images/default.png";
            background.src = "asstes/default.gif"

            break;
    }

    weather.style.display = "block"

    }
}

checkWeather()


inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        checkWeather(inputBox.value);
    }
});

search.addEventListener("click", () => {
  checkWeather(inputBox.value)
  
})

