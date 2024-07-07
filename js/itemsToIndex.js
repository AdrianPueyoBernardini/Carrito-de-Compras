
//ENCONTRAR CONTENEDOR PADRE
const $fatherSection = document.querySelector(".container");
const $sideCartDiv = document.getElementById("sidePanel");
const $cartCounter = document.getElementById("cartCounter");
const $priceCounter = document.getElementById("totalCost");
let cantidadTotal = 0;

let openSide = false;
$sideCartDiv.style.display = "none";


itemList.forEach(function(item){

    //CREAR CONTENEDOR STANDARD Y ASIGNACIÓN DE CLASE CON ESTILO CSS
    const $newDiv = document.createElement("div");
    $newDiv.classList="containerItem";


    //CREAR CONTENEDOR DATA -IMAGEN/TITLE/PRICE
    const $dataDiv = document.createElement("div");
    $dataDiv.classList="productData";

    const $dataImg = document.createElement("img");
    $dataImg.classList = "cardImg";
    $dataImg.setAttribute("src", item.img.toString());

    const $dataName = document.createElement("h3");
    $dataName.classList ="itemTitle";
    $dataName.textContent = item.nombre;

    const $dataPrice = document.createElement("p");
    $dataPrice.classList = "itemPrice";
    $dataPrice.textContent = item.precio + "$";

    $dataDiv.appendChild($dataImg);
    $dataDiv.appendChild($dataName);
    $dataDiv.appendChild($dataPrice);


    //CREAR CONTENEDOR BUTTON
    const $buttonAdd = document.createElement("button");
    $buttonAdd.classList="buttonAdd";
    $buttonAdd.textContent = "Añadir";
    $buttonAdd.addEventListener("click", function(){
        cantidadTotal=0;
        totalCost=0;
        for(let i=0;i<itemList.length;i++){
  
            if(itemList[i].id == item.id){
                itemList[i].cantidad++;
                

            }

            cantidadTotal+=itemList[i].cantidad;
            $cartCounter.textContent=cantidadTotal;

            if(itemList[i].id == item.id && itemList[i].cantidad==1){
                
                let $newDivProduct = document.createElement("div");
                $newDivProduct.classList ="cartProduct";
                $newDivProduct.id = "cartProductID-" + itemList[i].id;
        
                let $productCartQuantityDiv = document.createElement("p");
                $productCartQuantityDiv.textContent = itemList[i].cantidad;
                $productCartQuantityDiv.id = "cantidad-" + itemList[i].id;
        
                let $productCartNameDiv = document.createElement("p");
                $productCartNameDiv.textContent = itemList[i].nombre;
        
                let $productCartPriceDiv = document.createElement("p");
                $productCartPriceDiv.textContent = itemList[i].precio + "$";

                let $deleteCartProductButton = document.createElement("img");
                $deleteCartProductButton.setAttribute("src", "images/cross.png");
                $deleteCartProductButton.classList = "deleteCart";
                $deleteCartProductButton.addEventListener("click", function(){
                cantidadTotal=0;
                totalCost =0;
                $cartCounter.textContent=cantidadTotal;
                    for(let i=0;i<itemList.length;i++){
                        if(itemList[i].id == item.id){
                            itemList[i].cantidad =0;
                        }
                        if(itemList[i].cantidad>=1){
                            totalCost+=(itemList[i].precio *itemList[i].cantidad);
                        }
                        $priceCounter.textContent = totalCost + "$";

                        cantidadTotal+=itemList[i].cantidad;//AQUI
                        $cartCounter.textContent=cantidadTotal;
                    }
                    if(itemList[i].cantidad ==0){
                        $productCartQuantityDiv= document.getElementById("cartProductID-"+itemList[i].id);
                        $productCartQuantityDiv.remove();
                        
                    }

                },false);

        
                $newDivProduct.appendChild($productCartQuantityDiv);
                $newDivProduct.appendChild($productCartNameDiv);
                $newDivProduct.appendChild($productCartPriceDiv);
                $newDivProduct.appendChild($deleteCartProductButton);
        
                $sideCartDiv.appendChild($newDivProduct);
                
    
            }else if(itemList[i].cantidad>1){
                $productCartQuantityDiv= document.getElementById("cantidad-"+itemList[i].id);
                $productCartQuantityDiv.textContent = itemList[i].cantidad.toString();
            }
            if(itemList[i].cantidad>=1){
                totalCost+=(itemList[i].precio *itemList[i].cantidad);
            }
            $priceCounter.textContent = totalCost + "$";
        }   




        
    },false);



    //INTRODUCIR CONTENEDOR ITEM EN CONTENEDOR PADRE Y CREACION DE SU ID
    $newDiv.appendChild($dataDiv);
    $newDiv.appendChild($buttonAdd);
    $newDiv.id = item.id;
    $fatherSection.appendChild($newDiv);
})


function search(){
    let inputText = document.getElementById("buscador").value.toLowerCase();

    for(let i=0; i<itemList.length; i++){
        if(itemList[i].nombre.toLowerCase().includes(inputText)){
            document.getElementById(itemList[i].id).style.display = "flex";
        }else{
            document.getElementById(itemList[i].id).style.display = "none";   
        }
    }
}
function openCart(){
    if(openSide==false){
        $sideCartDiv.style.display = "inline-block";
        openSide=true;
    }else{
        $sideCartDiv.style.display = "none";
        openSide=false;
    }

}




