var imp=document.querySelector('.imperial');
var met=document.querySelector('.metric');
var x;

const api = {
    key: "6a5769b01804b6d34f443c925ebea6dd",
    base: "https://api.openweathermap.org/data/2.5/"
}
  const searchbox = document.querySelector('.search-box');
  if(searchbox){

  
  searchbox.addEventListener('keypress', setQuery,false);
  }
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
        x=searchbox.value;
      getResults(x);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function getResults2 (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults2);
  }
  function displayResults (weather) {
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

    let pressure=document.querySelector('.pressure');
    pressure.innerText=`pressure: ${weather.main.pressure} hPa`;

    let humidity=document.querySelector('.humidity');
    humidity.innerText=`humidity: ${weather.main.humidity} %`;

    let windspeed=document.querySelector('.wind-speed');
    windspeed.innerText=`wind-speed: ${weather.wind.speed} m/s`;

    let feel=document.querySelector('.feels-like');
    feel.innerText=`feels-like: ${Math.round(weather.main.feels_like)} °c `;

    let weather_dsc = document.querySelector('.weather-dsc');
    weather_dsc.innerText = weather.weather[0].description;

    let icon=document.querySelector('.icon');
    icon.style.backgroundImage=url(`http://openweathermap.org/img/wn/${weather.weather[0].icon}d@2x.png`)

  }
  function displayResults2 (weather) {
    let city = document.querySelector('.city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
  
    let weather_el = document.querySelector('.weather');
    weather_el.innerText = weather.weather[0].main;

    let weather_dsc = document.querySelector('.weather-dsc');
    weather_dsc.innerText = weather.weather[0].description;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;

    let pressure=document.querySelector('.pressure');
    pressure.innerText=`pressure: ${weather.main.pressure} hPa`;

    let humidity=document.querySelector('.humidity');
    humidity.innerText=`humidity: ${weather.main.humidity} %`;

    let windspeed=document.querySelector('.wind-speed');
    windspeed.innerText=`wind-speed: ${weather.wind.speed} miles/hour`;

    let feel=document.querySelector('.feels-like');
    feel.innerText=`feels-like: ${Math.round(weather.main.feels_like)} °F `;
  }
  function dateBuilder (d) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
window.addEventListener('DOMContentLoaded', () => {
    x="chennai";
    getResults(x);
    
    
})

met.addEventListener('click',()=>{
    getResults(x);
})

imp.addEventListener('click',()=>{
    getResults2(x);
})