let dishes;
const cards = document.querySelector('.cards');

// Загрузка информации о блюдах
async function loadDishes() {
    const response = await fetch('/api/dishes');
    if(response.ok){
        dishes = await response.json();
        if (!Array.isArray(dishes)) { return; }
        initCards();
    }
    else {
        loadTestCards(50);
    }
}

loadDishes();

// Создание карточек блюд, заполнение их данными и добавление в верстку
function initCards(){

    dishes.forEach(dish => {
    
        const card_template = document.querySelector('.card_template');
        const card_template_clone = card_template.content.cloneNode(true);
        const card = card_template_clone.querySelector('.card');

        const new_card = card.cloneNode(true);
        const in_cart_button = new_card.querySelector('.dishcontrol__in-cart-button');
        const minus_button = new_card.querySelector('.dishcontrol__minus-button');
        const plus_button = new_card.querySelector('.dishcontrol__plus-button');
        const quantity_input = new_card.querySelector('.dishcontrol__quantity-input');
        const price = new_card.querySelector('.card__price-value');
        const total_price = new_card.querySelector('.dishcontrol__total-price-value');

        // Запись информации из dish в card
        new_card.dataset.id = dish.id;
        new_card.querySelector('.card__dishname p').textContent = dish.name;
        new_card.querySelector('.card__price-value').textContent = Number(dish.price).toFixed(2);
        new_card.querySelector('.card__photo').style.backgroundImage = `url('${dish.mainImageUrl}')`;

        cards.appendChild(new_card);
    });
}


// ------------------------------------События


document.addEventListener('click', (event) => {
    const target = event.target;

    // Кнопка минус
    if (target.closest('.dishcontrol__minus-button')) {
        dishcontrol__minus_button_handlerClick(target);
        return;
    }
    
    // Кнопка плюс
    if (target.closest('.dishcontrol__plus-button')) {
        dishcontrol__plus_button_handlerClick(target);
        return;
    }

    if(target.closest('.dishcontrol__in-cart-button')){
        dishcontrol__in_cart_button_handlerClick(target);
        return;
    }

    if (target.closest('.dishcontrol__quantity-input')) {
        return;
    }    

    // cart
    if (target.closest('.card')) {
        card_handlerClick(target);
        return;
    }    
    
    if (target.closest('.panel__dishes-catalog-button')) {
        panel__dishes_catalog_button_handlerClick(target);
        return;
    }  

});

document.addEventListener('input', (event) => {
    const target = event.target;

    if (target.closest('.dishcontrol__quantity-input')) {
        dishcontrol__quantity_input_handlerInput(target);
        return;
    }
});


// Обработчики событий

function dishcontrol__minus_button_handlerClick(target){

    const dishcontrol = target.closest('.dishcontrol');
    const dishcontrol__quantity_input = dishcontrol.querySelector('.dishcontrol__quantity-input');
    const dishcontrol__total_price = dishcontrol.querySelector('.dishcontrol__total-price-value');
    const in_cart_button = dishcontrol.querySelector('.dishcontrol__in-cart-button');

    let card__price;
    if(target.closest('.card') !== null){
        card__price = target.closest('.card').querySelector('.card__price-value');
    }
    if(target.closest('.dishpage') !== null){
        card__price = target.closest('.dishpage').querySelector('.dishpage__price-value');
    }
    if(dishcontrol__quantity_input.value >= 1){
        dishcontrol__quantity_input.value--;
        dishcontrol__total_price.textContent = (Number(card__price.textContent) * Number(dishcontrol__quantity_input.value)).toFixed(2);
    }
    if(dishcontrol__quantity_input.value <= 0){
        in_cart_button.classList.remove("dishcontrol__in-cart-button_green");
    }
}
function dishcontrol__plus_button_handlerClick(target){
    const dishcontrol = target.closest('.dishcontrol');
    const dishcontrol__quantity_input = dishcontrol.querySelector('.dishcontrol__quantity-input');
    const in_cart_button = dishcontrol.querySelector('.dishcontrol__in-cart-button');
    const dishcontrol__total_price = dishcontrol.querySelector('.dishcontrol__total-price-value');
    let card__price;
    if(target.closest('.card') !== null){
        card__price = target.closest('.card').querySelector('.card__price-value');
    }
    if(target.closest('.dishpage') !== null){
        card__price = target.closest('.dishpage').querySelector('.dishpage__price-value');
    }
    dishcontrol__quantity_input.value++;
        if(dishcontrol__quantity_input.value > 0){
        in_cart_button.classList.add("dishcontrol__in-cart-button_green");
    }
    dishcontrol__total_price.textContent = (Number(card__price.textContent) * Number(dishcontrol__quantity_input.value)).toFixed(2); 
}
function dishcontrol__quantity_input_handlerInput(target){
    const dishcontrol = target.closest('.dishcontrol');
    const dishcontrol__quantity_input = dishcontrol.querySelector('.dishcontrol__quantity-input');
    const in_cart_button = dishcontrol.querySelector('.dishcontrol__in-cart-button');
    const dishcontrol__total_price = dishcontrol.querySelector('.dishcontrol__total-price-value');
    let card__price;
    if(target.closest('.card') !== null){
        card__price = target.closest('.card').querySelector('.card__price-value');
    }
    if(target.closest('.dishpage') !== null){
        card__price = target.closest('.dishpage').querySelector('.dishpage__price-value');
    }
    if (dishcontrol__quantity_input.value <= 0) {
        dishcontrol__quantity_input.value = 0;
        in_cart_button.classList.remove("dishcontrol__in-cart-button_green");
    }
    else if(dishcontrol__quantity_input.value > 0){
        in_cart_button.classList.add("dishcontrol__in-cart-button_green");
    }
    dishcontrol__total_price.textContent = (Number(card__price.textContent) * Number(dishcontrol__quantity_input.value)).toFixed(2);
}
function card_handlerClick(target){
    const cards = document.querySelector('.cards');
    const card = target.closest('.card');
    const main = document.querySelector('.main');

    const dishpage_template = document.querySelector('.dishpage_template');
    const dishpage_template_clone = dishpage_template.content.cloneNode(true);
    const dishpage = dishpage_template_clone.querySelector('.dishpage');


    const new_dishpage = dishpage.cloneNode(true);
    const dishpage__img_box = new_dishpage.querySelector('.dishpage__img-box');
    const dishpage__dishname = new_dishpage.querySelector('.dishpage__dishname');
    const dishpage__price_value = new_dishpage.querySelector('.dishpage__price-value');
    const dishpage__weight_value = new_dishpage.querySelector('.dishpage__weight-value');
    
    console.log(dishpage__img_box.style);
    new_dishpage.dataset.id = card.dataset.id;
    dishpage__img_box.style.backgroundImage = card.querySelector('.card__photo').style.backgroundImage;
    dishpage__dishname.textContent = card.querySelector('.card__dishname p').textContent;
    dishpage__weight_value.textContent = card.querySelector('.card__weight-value').textContent;
    dishpage__price_value.textContent = card.querySelector('.card__price-value').textContent;
    
    console.log(dishpage.style.backgroundImage);
    //console.log(main);
    
    cards.classList.add('hidden');
    main.appendChild(new_dishpage);

}
function dishcontrol__in_cart_button_handlerClick(target){

    const dishcontrol = target.closest('.dishcontrol');
    const dishcontrol__quantity_input = dishcontrol.querySelector('.dishcontrol__quantity-input');
    
    if(dishcontrol__quantity_input.value <= 0){return;}

    let main_parent;
    let price;
    let card_photo;

    if(target.closest('.dishpage') !== null){
        main_parent = target.closest('.dishpage');
        price = main_parent.querySelector('.dishpage__img-box');
        card_photo = main_parent.querySelector('.card__photo');
    }
    if(target.closest('.card') !== null){
        main_parent = target.closest('.card');
        price = main_parent.querySelector('.card__price-value');
        card_photo = main_parent.querySelector('.card__photo');
    }    

    const cart_items = document.querySelector('.cart__items');
    const dish_item_mini_collections = cart_items.getElementsByClassName('dish-item-mini');
    const dish_item_mini = document.querySelector('.dish-item-mini');
    const panel_total_sum_value = document.querySelector('.panel__total-sum-value');

    let is_item = false;

    for (const item of dish_item_mini_collections) {
        if(main_parent.dataset.id === item.dataset.id){
            item.querySelector('.dish-item-mini__quantity').textContent = Number(item.querySelector('.dish-item-mini__quantity').textContent) + Number(quantity_input.value);
            item.querySelector('.dish-item-mini__sum').textContent = (Number(item.querySelector('.dish-item-mini__quantity').textContent) * Number(item.querySelector('.dish-item-mini__price-snapshot').textContent)).toFixed(2);
            calculate_total();
            is_item = true;
        }
    }
    if(!is_item){
        const dish_item_mini_template = document.querySelector('.dish-item-mini_template');
        const dish_item_mini_template_clone = dish_item_mini_template.content.cloneNode(true);
        const dish_item_mini = dish_item_mini_template_clone.querySelector('.dish-item-mini');

        const new_dish_item_mini = dish_item_mini.cloneNode(true);
        const item_img_box = new_dish_item_mini.querySelector('.dish-item-mini__img-box');
        const item_quantity = new_dish_item_mini.querySelector('.dish-item-mini__quantity');
        const item_price_snapshot = new_dish_item_mini.querySelector('.dish-item-mini__price-snapshot');
        const item_sum = new_dish_item_mini.querySelector('.dish-item-mini__sum');
        const item_close_button = new_dish_item_mini.querySelector('.dish-item-mini__close-button');
        const item_dishname = new_dish_item_mini.querySelector('.dish-item-mini__dishname');


        new_dish_item_mini.dataset.id = main_parent.dataset.id;

        item_img_box.style.backgroundImage = card_photo.style.backgroundImage;
        item_dishname.textContent = main_parent.querySelector('.card__dishname p').textContent;
        item_quantity.textContent = dishcontrol__quantity_input.value;
        item_price_snapshot.textContent = price.textContent;
        item_sum.textContent = (Number(item_quantity.textContent) * Number(item_price_snapshot.textContent)).toFixed(2);
        
        cart_items.appendChild(new_dish_item_mini);

        panel_total_sum_value.textContent = (Number(panel_total_sum_value.textContent) + Number(item_sum.textContent)).toFixed(2);
        //calculate_total();

        item_close_button.addEventListener("click", () => {
            new_dish_item_mini.remove();
            calculate_total();
        });
    }
}
function panel__dishes_catalog_button_handlerClick(target){
    const dishpage = document.querySelector('.dishpage');

    cards.classList.remove('hidden');
    dishpage.remove();
}








calculate_total();


const menu_button = document.querySelector('.menu__button');
const dishmenu = document.querySelector('.dishmenu');
const close_button = document.querySelector('.dishmenu__close');

const dishes_catalog_button = document.querySelector('.panel__dishes-catalog-button');
const cart_button = document.querySelector('.panel__cart-button');


const panel__main = document.querySelector('.panel__main');

const dishpage = document.querySelector('.dishpage');

menu_button.addEventListener("click", () => {
    dishmenu.style.display = "block";
});
close_button.addEventListener("click", () => {
    dishmenu.style.display = "none";
});



cart_button.addEventListener("click", () => {
    if (panel__main.style.display === "block") {
        panel__main.style.display = "none";
        cart_button.style.fill = "#323131";
    } else {
        panel__main.style.display = "block";
        cart_button.style.fill = "#70B973";
    }
});




//Вычисление общей суммы товаров в корзине
function calculate_total(){
    const dish_item_mini_collections = document.getElementsByClassName('dish-item-mini');
    const panel_total_sum_value = document.querySelector('.panel__total-sum-value');

    let total_sum = 0;

    for (const item of dish_item_mini_collections) {
        const item_sum = Number(item.querySelector('.dish-item-mini__sum').textContent);
        total_sum += item_sum;
    }
    panel_total_sum_value.textContent = total_sum.toFixed(2);
}

// Загрузка тестовых карточек товара
function loadTestCards(quantity){
    const card_template = document.querySelector('.card_template');
    const card_template_clone = card_template.content.cloneNode(true);
    const card = card_template_clone.querySelector('.card');
    const cards = document.querySelector('.cards');
    for(i = 0; i < quantity; i++){
        const new_card = card.cloneNode(true);
        new_card.dataset.id = i;
        cards.appendChild(new_card);
    }
}

// Адаптация контента под динамическую высоту нижней панели
function adaptingСontentToBottomPanel(){
    const fixed_content = document.querySelector('.fixed-content');
    new ResizeObserver(() => {
        document.body.style.setProperty(
            '--bottom-panel-height',
            fixed_content.offsetHeight + 'px'
        );
    }).observe(fixed_content);
}
