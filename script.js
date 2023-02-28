let url="https://makeup-api.herokuapp.com/api/v1/products.json"
console.log('first')
var conye=""
function Clickbut(){

    let searchbar=document.getElementById("searchbar").value
        console.log(searchbar,conye)
        conye.filter((e)=>{
           if( e.name == searchbar){
                console.log(e)  
                          
           }
        })
    }
window.onload=function(){
    let root=document.getElementById("root")
    root.innerHTML=`
    
    <nav class="navbar bg-body-tertiary RG ">
    <div class="container-fluid  ">
      <span class="navbar-brand  h1 text-light ">Vini's Makeup App</span>
      <form class="d-flex" role="search">
        <input id="searchbar" class="form-control me-2" type="search" placeholder="Search Products" aria-label="Search">
        <button  class="btn btn-outline-success vini"  onClick="Clickbut()" type="submit">Search</button>
      </form>

    </div>
  </nav>
`

let root2=document.createElement("div")

root2.innerHTML=`   <div class="container">
        <marquee width="100%" direction="right" height="20px">
        <b> Vini's Cosmetic products (930)</b> </marquee>                            
         <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                         <img src="https://media.glamour.com/photos/6241e4c57c7cafd1951d9741/master/pass/LuxuryMakeup.png" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                    <img
                                        src="https://reviewit.pk/wp-content/uploads/2019/09/Screen_Shot_2019-03-13_at_12.25.09_AM_1400x.progressive.png.jpg" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://hips.hearstapps.com/hmg-prod/images/veganbeautybrands-1639507302.png" class="d-block w-100" alt="...">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                    </div>
                    <h4 class="vini2"><b>All Products</b></h4>
                    
                `
root.append(root2)
}
async function getMakeupData(){
    let data=await fetch(url)
    let res=await data.json()
    showbrands(res)
    conye = res
}getMakeupData()

let Makeupdiv=document.getElementById('Makeupdiv')
//console.log(mainMovieDiv)

function showbrands(Makeup){
    Makeup.map((ele)=>{
        var Makeupdiv1=document.createElement("div")
        Makeupdiv1.classList.add("col","Makeup")
        Makeupdiv1.innerHTML=`            
        <div class="col">
            <div class="card h-75">
                <img src="${ele.image_link}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Brand-${ele.brand}</h5>
                    <h6>Name- ${ele.name}</h6>
                    <h6>Price- $${ele.price}</h6>
                    <a href="${ele.product_link}" target="_blank" attribute class="btn btn-primary vinbut">click to shop</a>
                        <div class="overview">
                        <p><b>Description</b></p>
                        <p>${ele.description}</p>
                    </div>
                </div>
        </div>
        </div>
        
`
Makeupdiv.append(Makeupdiv1)
    })

}

