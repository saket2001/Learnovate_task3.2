import state from "./model.js";

////////////////////
const productsPage = document.querySelector(".products_container");
const productPage = document.querySelector(".productPage");
const view_buttons = document.querySelectorAll(".view-btn");
const close_button = document.querySelector(".close-btn");

let studentId = "";
const products = state.students;
productsPage.style.display = "grid";

////////////////////

view_buttons.forEach((view_btn) => {
  view_btn.addEventListener("click", (e) => {
    //getting student id
    studentId = e.target.getAttribute("data-id");

    //hiding products page
    productsPage.style.display = "none";
    //removing hidden class
    productPage.classList.toggle("hidden");

    // sending id to display product
    const [selectedProduct] = products.filter((product) => {
      if (product.id === studentId) return product;
    });

    if (productPage.querySelector(".product_container"))
      productPage.querySelectorAll(".product_container").forEach((div) => {
        div.style.display = "none";
      });

    //rendering product on page
    const htmlMarkup = `
                <div class="product_container" data-id="${selectedProduct.id}">
                  <div class="product__image">
                    <img src="${selectedProduct.image}"
                        alt="product image">
                  </div>
                  <div class="product__details">
                        <div class="product__title">
                            ${selectedProduct.name}
                        </div>
                        <div class="product__description">
                            ${selectedProduct.address}
                        </div>
                        <div class="product__description">
                            Year- ${selectedProduct.std}
                         </div>
                        <div class="product__description">
                            Division- ${selectedProduct.div}
                        </div>
                        <div class="product__description">
                            Roll no- ${selectedProduct.id}
                        </div>
                         <div class="product__price">
                            <div class="price">
                                CGPA- <b>
                                    ${selectedProduct.grades}
                                    </b>
                            </div>
                          </div>
                          <div class="product__description">
                              Contact no- ${selectedProduct.contact}
                          </div>
                        <div class="product__stars">
                          ${selectedProduct.talent}
                        </div>
                    </div>
                </div>
                `;

    productPage.insertAdjacentHTML("beforeEnd", htmlMarkup);
  });
});

close_button.addEventListener("click", () => {
  //removing hidden class
  productPage.classList.toggle("hidden");
  productsPage.style.display = "grid";
});
