var Weathercontainer=document.getElementById("Weathercontainer")
var Cityname=document.getElementById("Cityname")

let apikey="f1dcc6f5ef0edd3a68267cb517ec20aa"

async function Getweatherdata(){
    var Cityname=document.getElementById("Cityname").value
    console.log(Cityname)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${Cityname}&appid=${apikey}`
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)

    Weathercontainer.innerHTML=`
    <div class="row g-0">
    <div class="col-md-4">
      <img src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png" class="img-fluid rounded-startmp-0" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title m-0 mb-2 "><b>City name- ${Cityname}</b></h5>
        <p class="card-text m-0"><small class="text-muted">Temperature- ${res.main.temp}°K</small></p>
        <p class="card-text m-0"><small class="text-muted">feels_like- ${res.main.feels_like}</small></p>
        <p class="card-text m-0"><small class="text-muted">Description- ${res.weather[0].description}</small></p>
        <p class="card-text m-0"><small class="text-muted">Degree- ${res.wind.deg}°</small></p>
        <p class="card-text m-0"><small class="text-muted">Humidity- ${res.main.humidity}</small></p>

      </div>
      </div>
      </div>
`


}Getweatherdata()