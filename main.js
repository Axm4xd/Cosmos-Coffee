document.addEventListener("DOMContentLoaded", function () {
        const modal1Btn = document.getElementById("modal1");
        const modal2Btn = document.getElementById("modal2");
        const modal3Btn = document.getElementById("modal3");

        const modalWindow1 = document.getElementById("modalWindow1");
        const modalWindow2 = document.getElementById("modalWindow2");
        const modalWindow3 = document.getElementById("modalWindow3");

        modal1Btn.addEventListener("click", function () {
          modalWindow1.style.display = "flex";
        });

        modal2Btn.addEventListener("click", function () {
          modalWindow2.style.display = "flex";
        });

        modal3Btn.addEventListener("click", function () {
          modalWindow3.style.display = "flex";
        });

        const closeButtons = document.querySelectorAll(".close");
        closeButtons.forEach(function (btn) {
          btn.addEventListener("click", function () {
            btn.parentElement.parentElement.style.display = "none";
          });
        });

        window.addEventListener("click", function (e) {
          if (e.target.classList.contains("modal")) {
            e.target.style.display = "none";
          }
        });
      });

document.addEventListener("DOMContentLoaded", () => {
  const coffees = [
  { id: 1,  name: "Cappuccino",      price: 4.0, qty: 0 },
  { id: 2,  name: "Iced Cappuccino", price: 4.5, qty: 0 },
  { id: 3,  name: "Americano",       price: 3.0, qty: 0 },
  { id: 4,  name: "Espresso",        price: 2.5, qty: 0 },
  { id: 5,  name: "Latte",           price: 4.2, qty: 0 },
  { id: 6,  name: "Iced Latte",      price: 4.7, qty: 0 },
  { id: 7,  name: "Flat White",      price: 4.0, qty: 0 },
  { id: 8,  name: "Mocha",           price: 4.8, qty: 0 },
  { id: 9,  name: "Macchiato",       price: 3.5, qty: 0 },
  { id: 10, name: "Cortado",         price: 3.8, qty: 0 },
  { id: 11, name: "Irish Coffee",    price: 5.5, qty: 0 },
  { id: 12, name: "Affogato",        price: 5.0, qty: 0 },
  { id: 13, name: "Doppio",          price: 3.2, qty: 0 },
  { id: 14, name: "Ristretto",       price: 2.8, qty: 0 },
  { id: 15, name: "Cold Brew",       price: 4.3, qty: 0 },
];


  const cartBtn = document.getElementById("cart");
  const modal = document.getElementById("cart-modal");
  const closeBtn = document.querySelector(".close-btn");
  const cartList = document.getElementById("cart-list");
  const totalPriceEl = document.getElementById("total-price");

  cartBtn.addEventListener("click", () => modal.classList.remove("hidden"));
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.add("hidden"); 
  });

  function renderCart() {
    cartList.innerHTML = "";
    coffees.forEach((item) => {
      const li = document.createElement("li");
      li.className = "cart-item";
      li.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">${item.price.toFixed(2)} $</span>
        <div class="qty-controls" data-id="${item.id}">
          <button class="minus">−</button>
          <span class="qty">${item.qty}</span>
          <button class="plus">+</button>
        </div>
      `;
      cartList.appendChild(li);
    });
    updateTotal();
  }

  function updateTotal() {
    const total = coffees.reduce(
      (sum, item) => sum + item.qty * item.price,
      0
    );
    totalPriceEl.textContent = total.toFixed(2);
  }

  cartList.addEventListener("click", (e) => {
    const btn = e.target;
    if (!btn.matches("button")) return;

    const parent = btn.closest(".qty-controls");
    const id = Number(parent.dataset.id);
    const item = coffees.find((c) => c.id === id);

    if (btn.classList.contains("plus")) {
      item.qty += 1;
    } else if (btn.classList.contains("minus") && item.qty > 0) {
      item.qty -= 1;
    }

    parent.querySelector(".qty").textContent = item.qty;
    updateTotal();
  });

  renderCart();
});
