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
        new_card.dataset.id = dish.id;
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

        in_cart_button.addEventListener("click", () => {
            if(quantity_input.value <= 0){return;}
            const cart_items = document.querySelector('.cart__items');
            const dish_item_mini_collections = cart_items.getElementsByClassName('dish-item-mini');
            const dish_item_mini = document.querySelector('.dish-item-mini');

            let is_item = false;

            for (const item of dish_item_mini_collections) {
                if(new_card.dataset.id === item.dataset.id){
                    item.querySelector('.dish-item-mini__quantity').textContent = Number(item.querySelector('.dish-item-mini__quantity').textContent) + Number(quantity_input.value);
                    item.querySelector('.dish-item-mini__sum').textContent = (Number(item.querySelector('.dish-item-mini__quantity').textContent) * Number(item.querySelector('.dish-item-mini__price-snapshot').textContent)).toFixed(2);
                    is_item = true;
                }
            }
            if(!is_item){
                const card_photo = new_card.querySelector('.card__photo');
                const dish_item_mini = document.querySelector('.dish-item-mini');
                const new_dish_item_mini = dish_item_mini.cloneNode(true);
                const item_img_box = new_dish_item_mini.querySelector('.dish-item-mini__img-box');
                const item_quantity = new_dish_item_mini.querySelector('.dish-item-mini__quantity');
                const item_price_snapshot = new_dish_item_mini.querySelector('.dish-item-mini__price-snapshot');
                const item_sum = new_dish_item_mini.querySelector('.dish-item-mini__sum');
                const item_close_button = new_dish_item_mini.querySelector('.dish-item-mini__close-button');

                new_dish_item_mini.dataset.id = new_card.dataset.id;
                item_img_box.style.backgroundImage = card_photo.style.backgroundImage;
                item_quantity.textContent = quantity_input.value;
                item_price_snapshot.textContent = price.textContent;
                item_sum.textContent = (Number(item_quantity.textContent) * Number(item_price_snapshot.textContent)).toFixed(2);

                
                cart_items.appendChild(new_dish_item_mini);

                item_close_button.addEventListener("click", () => {
                    new_dish_item_mini.remove();
                });
            }
        });

    });

    card.style.display = "none";
    //document.querySelector('.dish-item-mini').style.display = "none";
}
loadDishes();

const menu_button = document.querySelector('.menu__button');
const dishmenu = document.querySelector('.dishmenu');
const close_button = document.querySelector('.dishmenu__close');
const cart_button = document.querySelector('.lowerbar__cart-button');
const unibox = document.querySelector('.unibox');


menu_button.addEventListener("click", () => {
    dishmenu.style.display = "block";
});
close_button.addEventListener("click", () => {
    dishmenu.style.display = "none";
});
cart_button.addEventListener("click", () => {
    if (unibox.style.display === "block") {
        unibox.style.display = "none";
        cart_button.style.fill = "#323131";
    } else {
        unibox.style.display = "block";
        cart_button.style.fill = "#70B973";
    }
});

