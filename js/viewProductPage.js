let similarProduct = document.querySelector(".similar_products");
let wrapper = document.querySelector(".wrapper");
let ingredients_wrapper = document.querySelector(".ingredients-wrapper");
const populate_main_product = (i) => {
  let img_container = document.createElement("div");
  img_container.className = "img_container";
  let description = document.createElement("div");
  description.className = "description";
  wrapper.append(img_container, description);
  let brand = document.createElement("h3");
  brand.className = "brand";
  let title = document.createElement("h2");
  title.className = "title";
  let short_desc = document.createElement("p");
  short_desc.className = "short_desc";
  let price_wrapper = document.createElement("div");
  price_wrapper.className = "price_wrapper";
  let price = document.createElement("h2");
  price.className = "price";
  let long_desc = document.createElement("p");
  long_desc.className = "long_desc";
  img_container.style.backgroundImage = `url(${i["ImgFull"]})`;
  brand.innerText = i["Brand"];
  title.innerText = i["Product Name"];
  short_desc.innerText = i["Short Desc"];
  let initial_price = document.createElement("div");
  if (i["Initial Price"] != null) {
    initial_price.className = "initial_price";
    initial_price.innerHTML = `Rp. ${i["Initial Price"]}`;
  }
  price.innerHTML = `Rp.${i["Final Price"]}`;
  long_desc.innerText = i["Long Desc"];
  let pay_add_to_cart = document.createElement("div");
  pay_add_to_cart.className = "pay_add_to_cart";
  let pay_now = document.createElement("h2");
  pay_now.className = "pay_now";
  let add_to_cart = document.createElement("h2");
  add_to_cart.className = "add_to_cart";
  pay_now.innerText = "Pay Now";
  add_to_cart.innerText = "Add to Cart";
  pay_add_to_cart.append(add_to_cart, pay_now);
  price_wrapper.append(initial_price, price);
  description.append(
    brand,
    title,
    short_desc,
    price_wrapper,
    long_desc,
    pay_add_to_cart
  );
  console.log(i["Ingredients"].split("\n"));
  let ingredients= i["Ingredients"].split("\n")
  for(let j in ingredients){
    let ingredient = document.createElement("p");
    ingredient.innerHTML = ingredients[j];
    ingredient.style.fontWeight = "thin";
    ingredients_wrapper.append(ingredient);

  }

};

const populate_similar_product = (i) => {
  // console.log(`this is i: ${i}`);
  let outer_card = document.createElement("div");
  outer_card.className = "outer_card";
  outer_card.style.transition = "top 2.0s linear 0s";
  let args = document.createElement("div");
  args.className = "args";
  let best_seller = document.createElement("div");
  best_seller.className = "best_seller";
  let card = document.createElement("div");
  card.className = "card";
  let card_image = document.createElement("div");
  card_image.className = "card_image";
  let card_description = document.createElement("div");
  card_description.className = "card_description";
  let h3 = document.createElement("h3");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let price = document.createElement("h2");
  let initial_price = document.createElement("h2");
  price.className = "price";
  initial_price.className = "initial_price";
  let button = document.createElement("button");
  // outer_card.append(best_seller);
  outer_card.append(args, card);
  card.append(card_image, card_description, button);
  h3.innerText = i["Brand"];
  h2.innerText = i["Product Name"];
  p.innerHTML = i["Short Desc"];
  card_image.style.backgroundImage = `url(${i["Img"]})`;
  console.log(i["Img"]);
  price.innerHTML = i["Final Price"];
  args.innerHTML = i["Note (Pop -out circle)"] == "BS" ? "Best Seller" : "New";
  if (i["Initial Price"] != null) {
    console.log(i["Initial Price"]);
    initial_price.innerHTML = i["Initial Price"];
    initial_price.style.margin = "0rem 1rem 0rem 0px";
  }
  let price_wrapper = document.createElement("div");
  price_wrapper.className = "price-wrapper";
  price_wrapper.append(initial_price, price);
  card_description.append(h3, h2, p, price_wrapper);
  button.innerHTML = "Shop Now";
  similarProduct.append(outer_card);
};

window.onload = () => {
  let p = new productsClass();
  if (localStorage.getItem("product_title") == null) {
    window.location.href = "../html/HomePage.html";
  }
  let product = p.oneProduct(localStorage.getItem("product_title"));
  for (let key in product) {
    if (product[key].length != 0) {
      product = product[key][0];
      break;
    }
  }
  //  console.log(product)
  //get similar products based on the product category
  let similar_product = p.similarProduct(product);
  //   console.log(product);
  let similar_products = [];
  for (let key in similar_product) {
    if (similar_product[key].length != 0)
      for (let i in similar_product[key]) {
        similar_products.push(similar_product[key][i]);
      }
  }
  populate_main_product(product);
  for (let key in similar_products) {
    populate_similar_product(similar_products[key]);
  }
  let cards_button = document.querySelectorAll(".card button");
  cards_button.forEach((e) => {
    e.addEventListener("click", (elem) => {
      //get the the parent outer card and get the child title

      //title of the card
      let title = elem.target.parentElement.children[1].children[1];
      title.style.border = "none";
      localStorage.setItem("product_title", title.innerText);
      console.log(localStorage.getItem("product_title"));
      window.location.href = "../html/ViewProductPage.html";
    });
  });
  increment = () => {};
  decrement = () => {};
};
