/*
async function loadDishes() {
    // запрос к REST API
    const response = await fetch('/api/dishes');
    
    // превращаем ответ в JS объект
    const dishes = await response.json();

    // контейнер
    const container = document.getElementById('dishes');

    // выводим данные
    dishes.forEach(dishes => {
        container.innerHTML += `
            <div>
                <h2>${dishes.name}</h2>
                <p>${dishes.price}$</p>
                <img src="${dishes.mainImageUrl}" alt="Нет картинки">
            </div>
        `;
    });
}
*/
let dishes;
async function loadDishes() {
    const response = await fetch('/api/dishes');
    dishes = await response.json();

    const cardsContainer = document.querySelector('.cards');
    const card = document.querySelector('.card');
    

    dishes.forEach(dish => {
        const new_card = card.cloneNode(true);
        new_card.querySelector('.card__dishname p').textContent = dish.name;
        new_card.querySelector('.card__price span').textContent = Number(dish.price).toFixed(2);
        //new_card.querySelector('.card__photo img').src = dish.mainImageUrl;
        new_card.querySelector('.card__photo').style.backgroundImage = `url('${dish.mainImageUrl}')`;
        cardsContainer.appendChild(new_card);
        
        const in_cart_button = new_card.querySelector('.card__in-cart-button');
        const minus_button = new_card.querySelector('.card__minus-button');
        const plus_button = new_card.querySelector('.card__plus-button');
        const quantity_input = new_card.querySelector('.card__quantity-input');
        const price = new_card.querySelector('.card__price span');
        const total_price = new_card.querySelector('.card__total-price span');

        minus_button.addEventListener("click", () => {
            if(quantity_input.value >= 1){
                quantity_input.value--;
                total_price.textContent = (Number(price.textContent) * Number(quantity_input.value)).toFixed(2);
            }
            if(quantity_input.value <= 0){
                in_cart_button.classList.remove("card__in-cart-button_green");
            }
        });
        plus_button.addEventListener("click", () => {
            quantity_input.value++;
             if(quantity_input.value > 0){
                in_cart_button.classList.add("card__in-cart-button_green");
            }
            total_price.textContent = (Number(price.textContent) * Number(quantity_input.value)).toFixed(2);
        });

        quantity_input.addEventListener("input", () => {
            if (quantity_input.value <= 0) {
                quantity_input.value = 0;
                in_cart_button.classList.remove("card__in-cart-button_green");
            }
            else if(quantity_input.value > 0){
                in_cart_button.classList.add("card__in-cart-button_green");
            }
            total_price.textContent = (Number(price.textContent) * Number(quantity_input.value)).toFixed(2);
        });

    });
    card.style.display = "none";
}
loadDishes();

