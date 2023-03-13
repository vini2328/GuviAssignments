
 function Getcatdata(){
    var res=fetch('https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=siam&api_key=%20live_JIk3SgnKlPawfaY7YEumcfgRhv8vQbECwApD7PQL6W3UlUvn3GfGRLn8XQmeY1ZQ')
    
    var res1=fetch('https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=siam&api_key=%20live_JIk3SgnKlPawfaY7YEumcfgRhv8vQbECwApD7PQL6W3UlUvn3GfGRLn8XQmeY1ZQ')
    .then((res)=>{
        //console.log(res.json())
        return res.json()// converts into json and 
    }).then((data)=>{
        for(let i=0;i<data.length;i++){
            console.log(data[i])
            let imgcard=document.getElementsByClassName("Imagecard")
            imgcard[0].innerHTML+=`
            <div class="bg-dark text-white my-4 mx-4 text-center"style="width: 18rem; height:50%">
            <span>${data[i].breeds[0]?.alt_names}</span>
            <div class="card"  style="width: 18rem ">
                    <img class="card-img-top "style="height: 160px" src=${data[i].url} alt="Card image cap" />
                        <div class="card-body text-light bg-dark ">
                         <h6 class="card-title">Life_span: ${data[i].breeds[0]?.life_span}</h6>
                         <h6 class="card-text">Temperament : ${data[i].breeds[0].temperament}</h6>
                         <h6 class="card-title"> affection_level: ${data[i].breeds[0]?.affection_level} </h6> 
                         <a href="${data[i].breeds[0].cfa_url}" target="_blank" attribute class="btn btn-primary vinbut">click to know more about Cats</a>

                        </div>
                </div>
            </div>`
        }
       })
        .catch(err=>console.log(err))

        // gives you to the value



        
    
} Getcatdata()

function clickme(){

}

    

