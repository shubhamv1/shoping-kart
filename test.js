/* fetching api data */
document.addEventListener("DOMContentLoaded", function () {
  const menProducts = document.querySelector(".item-1");
  const womenProducts = document.querySelector(".item-2");
  const jewelryProducts = document.querySelector(".item-3");
  const electronicsProducts = document.querySelector(".item-4");

  async function fetchProducts(url) {
    try {
      let data = await fetch(url);
      let response = await data.json();

      let menElements = response.filter(
        (product) => product.category === "men's clothing"
      );
      let womenElements = response.filter(
        (product) => product.category === "women's clothing"
      );
      let jewelryElements = response.filter(
        (product) => product.category === "jewelery"
      );
      let electronicsElements = response.filter(
        (product) => product.category === "electronics"
      );

      const searchInput = document.getElementById("search-input");
      searchInput.addEventListener("input", function () {
        const searchedValue = searchInput.value.toLowerCase();

        menElements = response.filter(
          (product) =>
            product.category === "men's clothing" &&
            product.title.toLowerCase().includes(searchedValue)
        );
        womenElements = response.filter(
          (product) =>
            product.category === "women's clothing" &&
            product.title.toLowerCase().includes(searchedValue)
        );
        jewelryElements = response.filter(
          (product) =>
            product.category === "jewelery" &&
            product.title.toLowerCase().includes(searchedValue)
        );
        electronicsElements = response.filter(
          (product) =>
            product.category === "electronics" &&
            product.title.toLowerCase().includes(searchedValue)
        );

        renderResult(menElements, menProducts);
        renderResult(womenElements, womenProducts);
        renderResult(jewelryElements, jewelryProducts);
        renderResult(electronicsElements, electronicsProducts);
      });

      renderResult(menElements, menProducts);
      renderResult(womenElements, womenProducts);
      renderResult(jewelryElements, jewelryProducts);
      renderResult(electronicsElements, electronicsProducts);
    } catch (err) {
      console.log(err);
    }
  }

  function renderResult(response, container) {
    container.innerHTML = "";
    for (let i = 0; i < response.length; i++) {
      let title = response[i].title;

      /* GENERATING RANDOM COLOUR */
      const colors = [getRandomColor(), getRandomColor(), getRandomColor() ];

      /* GENERATING RANDOM SIZE */
      const sizes = [getRandomSize()];

      container.innerHTML += `
       <div class="product">
           <img src="${response[i].image}" class="product-img">
           <div class="product-content">
           <h3 class="product-title">${
             title.length > 8
               ? title.substring(0, 8).concat(" ...more")
               : title
           }</h3>
           <div class= price-size> 
           <p class="product-price">
             $ ${response[i].price}
             <p class="size-chart"> ${sizes.join(", ")}
           </p>
           </div>
           <div class=colors>
           Colors : 
           ${colors
             .map(
               (color) =>
                 `<div class="circle" style="background-color: ${color}"></div>`
             )
             .join("")}
           </div>
           <div class="ratings"> 
            <p>Rating : ${response[i].rating.rate}⭐</p>
            </div>
           </div>
           <button id="addBtn">Add to Cart</button>
       </div>
       `;
    }
  }

  fetchProducts("https://fakestoreapi.com/products");
});
/* ------------------------------------------------------------------------------------------ */


/* generating random color and random size -------------------------------------------------- */
function getRandomSize() {
  let res = [];
  let s = ["S", "M", "L", "XL", "XXL"];
  let i = 0, j = 0; k = 0;
  while (i == j || j == k || k == i) {
    i = Math.floor(Math.random() * s.length);
    j = Math.floor(Math.random() * s.length);
    k = Math.floor(Math.random() * s.length);
  }
  res.push(s[i]);
  res.push(s[j]);
  res.push(s[k]);
  return res;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/*----------------------------------------------------------------------------------------------*/ 

// filtering on button clicks -------------------------------------------------------------------
const allBtn = document.getElementById("allFilter");
const mensBtn = document.getElementById("mensFilter");
const womensBtn = document.getElementById("womensFilter");
const jwelleryBtn = document.getElementById("jwelleryFilter");
const electronicsBtn = document.getElementById("electronicsFilter");

allBtn.addEventListener("click", () => {
  document.querySelector(".item-1").style.display = "flex";
  document.querySelector(".mens-section").style.display = "block";
  document.querySelector(".womens-section").style.display = "block";
  document.querySelector(".jwellery-section").style.display = "block";
  document.querySelector(".electronics-section").style.display = "block";

  document.querySelector("#allFilter").style.backgroundColor = "black";
  document.querySelector("#allFilter").style.color = "white";
  document.querySelector("#mensFilter").style.backgroundColor = "white";
  document.querySelector("#mensFilter").style.color = "black";
  document.querySelector("#womensFilter").style.backgroundColor = "white";
  document.querySelector("#womensFilter").style.color = "black";
  document.querySelector("#jwelleryFilter").style.backgroundColor = "white";
  document.querySelector("#jwelleryFilter").style.color = "black";
  document.querySelector("#electronicsFilter").style.backgroundColor = "white";
  document.querySelector("#electronicsFilter").style.color = "black";
});

mensBtn.addEventListener("click", () => {
  document.querySelector(".mens-section").style.display = "block";
  document.querySelector(".womens-section").style.display = "none";
  document.querySelector(".jwellery-section").style.display = "none";
  document.querySelector(".electronics-section").style.display = "none";

  document.querySelector("#allFilter").style.backgroundColor = "white";
  document.querySelector("#allFilter").style.color = "black";
  document.querySelector("#mensFilter").style.backgroundColor = "black";
  document.querySelector("#mensFilter").style.color = "white";
  document.querySelector("#womensFilter").style.backgroundColor = "white";
  document.querySelector("#womensFilter").style.color = "black";
  document.querySelector("#jwelleryFilter").style.backgroundColor = "white";
  document.querySelector("#jwelleryFilter").style.color = "black";
  document.querySelector("#electronicsFilter").style.backgroundColor = "white";
  document.querySelector("#electronicsFilter").style.color = "black";
});

womensBtn.addEventListener("click", () => {
  document.querySelector(".womens-section").style.display = "block";
  document.querySelector(".mens-section").style.display = "none";
  document.querySelector(".jwellery-section").style.display = "none";
  document.querySelector(".electronics-section").style.display = "none";

  document.querySelector("#allFilter").style.backgroundColor = "white";
  document.querySelector("#allFilter").style.color = "black";
  document.querySelector("#mensFilter").style.backgroundColor = "white";
  document.querySelector("#mensFilter").style.color = "black";
  document.querySelector("#womensFilter").style.backgroundColor = "black";
  document.querySelector("#womensFilter").style.color = "white";
  document.querySelector("#jwelleryFilter").style.backgroundColor = "white";
  document.querySelector("#jwelleryFilter").style.color = "black";
  document.querySelector("#electronicsFilter").style.backgroundColor = "white";
  document.querySelector("#electronicsFilter").style.color = "black";
});

jwelleryBtn.addEventListener("click", () => {
  document.querySelector(".jwellery-section").style.display = "block";
  document.querySelector(".mens-section").style.display = "none";
  document.querySelector(".womens-section").style.display = "none";
  document.querySelector(".electronics-section").style.display = "none";

  document.querySelector("#allFilter").style.backgroundColor = "white";
  document.querySelector("#allFilter").style.color = "black";
  document.querySelector("#mensFilter").style.backgroundColor = "white";
  document.querySelector("#mensFilter").style.color = "black";
  document.querySelector("#womensFilter").style.backgroundColor = "white";
  document.querySelector("#womensFilter").style.color = "black";
  document.querySelector("#jwelleryFilter").style.backgroundColor = "black";
  document.querySelector("#jwelleryFilter").style.color = "white";
  document.querySelector("#electronicsFilter").style.backgroundColor = "white";
  document.querySelector("#electronicsFilter").style.color = "black";
});

electronicsBtn.addEventListener("click", () => {
  document.querySelector(".electronics-section").style.display = "block";
  document.querySelector(".mens-section").style.display = "none";
  document.querySelector(".womens-section").style.display = "none";
  document.querySelector(".jwellery-section").style.display = "none";

  document.querySelector("#allFilter").style.backgroundColor = "white";
  document.querySelector("#allFilter").style.color = "black";
  document.querySelector("#mensFilter").style.backgroundColor = "white";
  document.querySelector("#mensFilter").style.color = "black";
  document.querySelector("#womensFilter").style.backgroundColor = "white";
  document.querySelector("#womensFilter").style.color = "black";
  document.querySelector("#jwelleryFilter").style.backgroundColor = "white";
  document.querySelector("#jwelleryFilter").style.color = "black";
  document.querySelector("#electronicsFilter").style.backgroundColor = "black";
  document.querySelector("#electronicsFilter").style.color = "white";
});
//-----------------------------------------------------------------------------------------------

