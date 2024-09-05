const cityForm = document.querySelector('form');

const updateCity = async(city) => {
    console.log(city)
    const citydets = await getCity(city);
    console.log(citydets)

    const weather = await getWeather(citydets.Key);
    return {citydets: citydets, weather: weather};
}
const time = document.querySelector('img.time');
 const updateUI = (data) => {
    const city = data.citydets.EnglishName;
    const weather = data.weather.Temperature.Metric.Value;
    const weatherIcon = data.weather.WeatherIcon;
    // const temp = data.weather[0].Temperature.Imperial.Value;
    const weatherDesc = data.weather.WeatherText;


    let timeSCR=null;
    if(data.weather.IsDayTime==true) {
        timeSCR = 'day.svg';
    } else {
        timeSCR = 'night.svg';
    }
    time.setAttribute('src', timeSCR);
    console.log('data', data);
    console.log('city', city);
    console.log('weather', weather);
    console.log('weathericon', weatherIcon);
    document.getElementById("cityname").innerText = city
    document.getElementById("temp").innerText = weather
    document.getElementById("weatherdescs").innerText = weatherDesc
    document.getElementById("weathericon").src = `${weatherIcon}.svg`
}
cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city).then((data) => updateUI(data));
})