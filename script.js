async function Getdata(){
    let data=await fetch("https://restcountries.com/v3.1/all")
    let res=await data.json()
    let imgcard=document.getElementsByClassName("Imagecard")
    var item=null
    let doit=false
    for(let i=0;i<res.length;i++){
        console.log(res[i])
        item = res[i].name.common
        imgcard[0].innerHTML+=`
        <div class="bg-dark text-white my-4 mx-4 text-center"style="width: 18rem; height:50%">
            <span>${res[i].name.common}</span>
            <div class="card"  style="width: 18rem ">
                <img class="card-img-top "style="height: 160px" src=${res[i].flags.svg} alt="Card image cap" />
                    <div class="card-body text-light bg-dark ">
                        <h6 class="card-title">Capital: ${res[i].capital[0]}</h6>
                        <h6 class="card-text">Region : ${res[i].region}</h6>
                        <h6 class="card-title">Country Code: ${res[i].cca3}</h6> 
                        <button onClick="Getweatherdata('${res[i].name.common}')" class="btn btn-secondary">Click for Weather</button>
                     </div>
            </div>
        </div>`

        
    }
}Getdata()

async function Getweatherdata(x){ 
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=f1dcc6f5ef0edd3a68267cb517ec20aa`
    let data1= await fetch(url)
    let res=await data1.json()
    var Weathercontainer=document.getElementById("Weathercontainer")
    //

    Weathercontainer.innerHTML=`
    <div class="container">
    <div class="row g-0">
    <div class="col-md-4">
      <img src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png" class="img-fluid rounded-startmp-0" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title m-0 mb-2 "><b>City name- ${x}</b></h5>
        <p class="card-text m-0"><small class="text-muted">Temperature- ${res.main.temp}°K</small></p>
        <p class="card-text m-0"><small class="text-muted">feels_like- ${res.main.feels_like}</small></p>
        <p class="card-text m-0"><small class="text-muted">Description- ${res.weather[0].description}</small></p>
        <p class="card-text m-0"><small class="text-muted">Degree- ${res.wind.deg}°</small></p>
        <p class="card-text m-0"><small class="text-muted">Humidity- ${res.main.humidity}</small></p>

      </div>
      </div>
      </div>
      </div>
`

    
    

}