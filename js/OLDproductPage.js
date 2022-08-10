

let liCheckBox = document.querySelectorAll(".brand_select_section>ul>li");
let checkbox = document.querySelectorAll(
  ".brand_select_section>ul>li>label>input"
);

//contain function
function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].name == obj) {
      return true;
    }
  }
  return false;
}

//mark brand
brand = [];
all_brands = [];
const generateData = () => {
  brand.forEach((key) => {
    for (const v in product_database_list[key]) {
      console.log(product_database_list[key][v].name);
      // here is the problem
      if (!containsObject(product_database_list[key][v].name, all_brands)) {
        // console.log(product_database_list[key][v]);
        populate_product(product_database_list[key][v]);
        all_brands.push(product_database_list[key][v]);
        // console.log(all_brands);
      } else {
        // console.log("depopulate");
        if (containsObject(product_database_list[key][v].name, all_brands)) {
          // return;
          // console.log("product index");
          // console.log("before delete:${all_brands}");
          depopulate_product(all_brands.indexOf(product_database_list[key][v]));
          // console.log(all)
          all_brands.splice(
            all_brands.indexOf(product_database_list[key][v]),
            1
          );
        }
      }
    }
  });
};
const generateDataOnLoad = () => {
  brand.forEach((key) => {
    for (const v in product_database_list[key]) {
      console.log(product_database_list[key][v].name);
      // here is the problem
      if (!containsObject(product_database_list[key][v].name, all_brands)) {
        // console.log(product_database_list[key][v]);
        populate_product(product_database_list[key][v]);
        all_brands.push(product_database_list[key][v]);
        // console.log(all_brands);
      } else {
        // console.log("depopulate");
        if (containsObject(product_database_list[key][v].name, all_brands)) {
          // return;
          // console.log("product index");
          // console.log("before delete:${all_brands}");
        }
      }
    }
  });
};

const generateDataFiltered = async () => {
  while (product_container.hasChildNodes()) {
    product_container.removeChild(product_container.lastChild);
  }
  for (i in all_brands) {
    populate_product(all_brands[i]);
  }
  // generateData();
};

window.onload = () => {
  liCheckBox.forEach((card) => {
    // console.log(card.children[0].children[0].checked);
    card.style.backgroundColor = "red";
    brand.push(card.children[0].textContent.trim());
    generateDataOnLoad();
  });
};
liCheckBox.forEach((elem) => {
  elem.children[0].addEventListener("click", (e) => {
    // window.location.reload();
    if (elem.children[0].children[0].checked) {
      elem.style.backgroundColor = "red";
      //assign ke localStorage
      // localStorage.setItem(
      //   elem.children[0].textContent.trim(),
      //   JSON.stringify(elem.children[0].textContent.trim())
      //   );
      if (!containsObject(elem.children[0].textContent.trim(), brand)) {
        brand.push(elem.children[0].textContent.trim());
      }
    } else {
      // localStorage.removeItem(elem.children[0].textContent.trim());
      elem.style.color = "#dff1e3";
      elem.style.backgroundColor = "#dff1e3";
      // if (containsObject(elem.children[0].textContent.trim(), brand)) {
      console.log(
        `the position is : ${brand.indexOf(
          elem.children[0].textContent.trim()
        )}`
      );
      brand.splice(brand.indexOf(elem.children[0].textContent.trim()), 1);
      console.log(
        `the position is : ${brand.indexOf(
          elem.children[0].textContent.trim()
        )}`
      );
      // }

      // console.log(all_brands);
      //ketika di lokal stroage terdapat key yang aktif maka product dimasukan
    }
    generateData();
    //end for
    console.log(`the brands: ${brand}`);
    console.log(`all brands after loops: ${all_brands}`);
  });
});



//SORT BY DROP DOWN
let dropDownMenu = document.querySelector(".dropdown_menu");
let sortBy = document.querySelector(".sort_by");
let sortedBySelection = document.querySelectorAll(".sort_by ul li");
dropDownMenu.addEventListener("click", (e) => {
  // e.preventDefault();
  if (sortBy.style.visibility == "visible") {
    sortBy.style.visibility = "hidden";
    sortBy.style.opacity = "0";
    sortBy.style.bottom = "-11rem";
    // sortBy.style.height = 0;
  } else {
    sortBy.style.bottom = "-13rem";
    sortBy.style.visibility = "visible";
    sortBy.style.opacity = 1;
    sortBy.style.height = "auto";
  }
});
sortedBySelection.forEach((sort) => {
  console.log(all_brands);
  sort.addEventListener("click", async (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent == "lowest price") {
      await sortedByPriceAscending();
    } else if (e.target.textContent == "highest price") {
      await sortedByPriceDescending();
    } else if (e.target.textContent == "alphabetically A - Z") {
      await sortedAToZ();
    } else if (e.target.textContent == "alphabetically Z - A") {
      await sortedZToA();
    }
    await generateDataFiltered();
  });
});

//product populate with cards
//root for append
let product_container = document.querySelector(".product_list_section");

const depopulate_product = (i) => {
  if (product_container.hasChildNodes()) {
    product_container.removeChild(product_container.children[i], 1);
  }
};

const populate_product = (i) => {
  // console.log(`this is i: ${i}`);
  let outer_card = document.createElement("div");
  outer_card.className = "outer_card";
  outer_card.style.transition = "top 2.0s linear 0s";
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
  price.className = "price";
  let button = document.createElement("button");
  // outer_card.append(best_seller);
  outer_card.append(card);
  card.append(card_image, card_description, button);
  card_description.append(h3, h2, p, price);
  h3.innerText = i.brand;
  h2.innerText = i.name;
  p.innerHTML = i.name;
  card_image.style.background = i.img;
  price.innerHTML = i.price;
  button.innerHTML = "Shop Now";
  product_container.append(outer_card);
};

