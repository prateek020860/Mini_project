let main=document.querySelector("main");

let totalTag=document.querySelector("#total");

let cartItems=JSON.parse(localStorage.getItem("cart")) || [];

displayProducts();

function displayProducts(){

    main.innerHTML="";

    let total=0;

    cartItems.forEach((item)=>{

        total+=Math.ceil(item.price*95)*item.quantity;

        let div=document.createElement("div");

        div.classList.add("box");

        let img=document.createElement("img");

        img.src=item.thumbnail;

        let title=document.createElement("h2");

        title.innerText=item.title;

        let price=document.createElement("h3");

        price.innerText=`Rs ${Math.ceil(item.price*95)}`;

        let qty=document.createElement("h4");

        qty.innerText=`Quantity : ${item.quantity}`;

        let plus=document.createElement("button");

        plus.innerText="+";

        let minus=document.createElement("button");

        minus.innerText="-";

        let remove=document.createElement("button");

        remove.innerText="Remove";



        plus.addEventListener("click",()=>{

            item.quantity++;

            localStorage.setItem("cart",JSON.stringify(cartItems));

            displayProducts();

        });



        minus.addEventListener("click",()=>{

            if(item.quantity>1){

                item.quantity--;

            }

            localStorage.setItem("cart",JSON.stringify(cartItems));

            displayProducts();

        });



        remove.addEventListener("click",()=>{

            cartItems=cartItems.filter((p)=>p.id!==item.id);

            localStorage.setItem("cart",JSON.stringify(cartItems));

            displayProducts();

        });

        div.append(img,title,price,qty,plus,minus,remove);

        main.append(div);

    });

    totalTag.innerText=`Total : Rs ${total}`;

}