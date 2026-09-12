import {products} from "./products.js";

// For closing ad
var adBar = document.querySelector(".ad_container")

document.getElementById("ad_close").addEventListener("click",

    function () {
        adBar.style.display = "none"
    }
)

// For side navbar opening and closing
var sideNavMenu = document.getElementById("side_navbar_menu")
var sidenavbar = document.querySelector(".side_navbar")

sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0%"
})

document.getElementById("side_navbar_close").addEventListener("click", () => {
    document.querySelector(".side_navbar").style.marginLeft = "-60%"
})




var container=document.querySelector(".products")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <img style="width: 20vw;" src="${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

var filterList =[]
var tags = document.getElementsByName("tags")

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        update()
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()
        }   
    })
})

var searchInput = document.querySelector(".navbar_search input")
searchInput.addEventListener("keyup",function(){
    update()
})

function update()
{
    var productList = document.querySelectorAll(".product")
    var searchValue = searchInput.value.toLowerCase().trim()

    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        var temp=product.querySelector("tags").innerHTML
        const tempFilterArray = temp.split(',');

            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })

        var productName = product.querySelector("h1").innerHTML.toLowerCase()
        var matchesSearch = productName.includes(searchValue)

        if((!check && filterList.length>0) || !matchesSearch)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}