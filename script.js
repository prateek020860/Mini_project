
(async function dataFetching(){
    let url = "https://dummyjson.com/products?limit=194";
    let main = document.querySelector("main");  // tag , .class name ,#idname
    let apiRes = await fetch(url);
    let resData = await apiRes.json();


    let products =  resData.products;
    // console.log(resData.products);

    products.map((el) => {

    let productDetail = document.createElement("a"); 

    let outerDiv = document.createElement("div"); 

    let heading = document.createElement("h2");
    let image = document.createElement("img");
    let description = document.createElement("p");

    let price_cart = document.createElement("div");
    let price = document.createElement("p");
    let cart = document.createElement("button");

    heading.innerText= el.title;
    image.src=el.thumbnail; 
    description.innerText = el.description;
    price.innerText=`Rs ${Math.ceil(el.price*95)}/-`;
    cart.innerText = "Add to cart";

    outerDiv.classList.add("outerDiv");
    price_cart.classList.add("price_cart");
    cart.classList.add("cart");


    
            // ADD TO CART

        cart.addEventListener("click",(e)=>{

            e.preventDefault();

            let cartItems=JSON.parse(localStorage.getItem("cart")) || [];

            let index=cartItems.findIndex((item)=>item.id===el.id);

            if(index!=-1){

                cartItems[index].quantity++;

            }
            else{

                cartItems.push({

                    ...el,

                    quantity:1

                });

            }

            localStorage.setItem("cart",JSON.stringify(cartItems));

            alert("Added To Cart");

        });

    productDetail.href=`productdetail.html?id=${el.id}`;

    price_cart.append(price,cart);

    outerDiv.append(heading,image,description,price_cart);

    productDetail.append(outerDiv);

    main.append(productDetail);



    })

    

})()