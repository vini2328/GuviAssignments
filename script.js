
let imgcard=document.getElementsByClassName("Imagecard")
imgcard[0].innerHTML=`<h2 class="text-light">please click on the below button to know more about Cats Facts</h2>`
function Getcatfacts(){
    var res=fetch('https://meowfacts.herokuapp.com/')
    .then((res)=>{
        return res.json()
        // converts into json and 
    }).then((data)=>{
        let x=data.data
        for(let i=0;i<x.length;i++){
            console.log(x[i])
             let imgcard=document.getElementsByClassName("Imagecard")
             console.log(imgcard)
            imgcard[0].innerHTML=`
            <div class="row ">
            <div class="col-md-4">
              <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" class="rounded mx-auto d-block" alt="...">
            </div>
            <div class="col-md-5">
              <div class="my-3">
                <h5 class="card-title text-light"><b>Cats Facts</b></h5>
                <p class="card-text text-light">${x[i]}</p>
                <div class="d-grid gap-2 col-6 mx-auto">
                </div>
              </div>
            </div>
          </div>

      `
        }
        })
        

        .catch(err=>console.log(err))

        // gives you to the value



        
    
} 
