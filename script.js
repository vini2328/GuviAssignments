function GetPokedata(){
    var res=fetch('https://fakerapi.it/api/v1/images?_quantity=50&?_locale=en_EN_type=pokemon&_height=300')
    
    // var res1=fetch('https://fakerapi.it/api/v1/images?_quantity=100&?_locale=en_EN_type=pokemon&_height=300')
    .then((res)=>{
        //console.log(res.json())
        return res.json()// converts into json and 
    }).then((data)=>{
        var x=data.data
        for(let i=0;i<x.length;i++){
            console.log( "dd",x[i].url)
            let imgcard=document.getElementsByClassName("imagecard")
            console.log(imgcard)
            imgcard[0].innerHTML+=`
            <div class="card imagecard" style="width: 18rem;">
                <img src=${"https://lorempokemon.fakerapi.it/pokemon/600/800"} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${x[i].title}</h5>
                    <p class="card-text">${x[i].description}</p>
                </div>
            </div>
        `
        }
    })
        .catch(err=>console.log(err))

        // gives you to the value



        
    
} GetPokedata()

