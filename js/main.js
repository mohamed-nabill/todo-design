var productName = document.getElementById("productName")



if (localStorage.getItem("ourProducts") == null) {
    productContainer = []

}
else {
    productContainer = JSON.parse(localStorage.getItem("ourProducts"))
    displayProduct()

}

function addProduct() {
    var product = {
        name: productName.value,
    }


    if (product.count > 1) {
        for (var i = 0; i < product.count; i++) {
            productContainer.push(product)
        }

    }
    else {
        productContainer.push(product)

    }



    localStorage.setItem("ourProducts", JSON.stringify(productContainer))
    displayProduct()
    clearinp()
}
function displayProduct() {
    var productList = ""
    for (var i = 0; i < productContainer.length; i++) {
        productList += `
        <tr>
        <td>${i + 1}</td>
        <td>${productContainer[i].name}</td>
      <td><button 
      onclick="deleteRow(${i})" class="btn btn-danger">Delete</button> </td>
      <td><button class="btn btn-warning">Edit</button> </td>

    </tr>
        `
    }
    document.getElementById("tBody").innerHTML = productList;
}
// clear
function clearinp() {
    productName.value = ""
}
// deleteAll
function deleteAll() {
    productContainer.splice(0)
    localStorage.setItem("ourProducts", JSON.stringify(productContainer))

    displayProduct()
}
// deleteRow
function deleteRow(i) {
    productContainer.splice(i, 1)
    localStorage.setItem("ourProducts", JSON.stringify(productContainer))

    displayProduct()

}

/////////////

function searchProduct(term) {
    var productList = ""
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.includes(term.trim()) == true) {
            productList += `
            <tr>
            <td>${i + 1}</td>
            <td>${productContainer[i].name}</td>
          <td><button 
          onclick="deleteRow(${i})" class="btn btn-danger">Delete</button> </td>
          <td><button class="btn btn-warning">Edit</button> </td>
    
        </tr>
            `
        }
        document.getElementById("tBody").innerHTML = productList;

    }
}


function EditRow(i) { 
    productName.value =
     productContainer[i].Name; 
     Submit.innerHTML ="edit" ;
     mood ="editRow" ;
     imaginary = i ;
    

}
$(document).ready(function(){
    $(".product").animate({width :"100%"} , 1500 , function(){

        $(".product").animate({height:"100vh"} , 1500 , function(){
            $(".omproduct").slideDown(1000)
        })
    })
})


