const apiKey = "c3720295daaf367085fbc78500ebfb00";



async function getWeather() {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);  
  const data = await response.json();
  console.log(data);
 document.getElementById("weather-result").innerHTML=`City:${data.name} | Temp:${data.main.temp} | weather:${data.weather[0].description}`;
  
  
}
const myElement = document.getElementById('search-button');
myElement.addEventListener("click",getWeather);{

}

