function buscar() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&appid=dec67b27b24bb9db3ba4125bda15b7f0"
    fetch(url).then(response => {
        response.json().then(data => {
            mostrarClima(data)
        })
    })
    .catch(error => {
        console.log(error)
    })
}

function mostrarClima(data){

    let img = document.querySelector("#img"),
        city = document.querySelector("#city"),
        date = document.querySelector("#date"),
        temp = document.querySelector("#temp"),
        status = document.querySelector("#status"),
        minmax = document.querySelector("#minmax"),
        feels = document.querySelector("#sensacion"),
        iconito = data.weather[0].icon

    const fecha = new Date();
    const myFormat= 'DD-MM-YYYY';
    const myDate = moment(fecha, 'DDMMYYYYTHHmmss').format(myFormat);
    weather = `https://openweathermap.org/img/wn/${iconito}@2x.png`

    img.src = weather
    city.innerHTML = `${data.name} | ${data.sys.country}`
    temp.innerHTML = `${Math.round(ToCelsius(data.main.temp))}°C`
    date.innerHTML = `${myDate}`
    status.innerHTML = data.weather[0].description
    minmax.innerHTML = `Min ${Math.round(ToCelsius(data.main.temp_min))}°C | Max ${Math.round(ToCelsius(data.main.temp_max))}°C`
    feels.innerHTML =  `Sensación térmica ${Math.round(ToCelsius(data.main.feels_like))}°C`
}



function ToCelsius(kelvin){
    let c = kelvin-273.15
    return c
}

function reload() {
    location.reload()
}
setInterval(reload,3000)
buscar()
mostrarClima()
