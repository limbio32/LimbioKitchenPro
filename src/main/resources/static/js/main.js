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
        new_card.querySelector('.card__price').textContent = Number(dish.price).toFixed(2) + " ₾";
        new_card.querySelector('.card__photo img').src = dish.mainImageUrl;


        cardsContainer.appendChild(new_card);
    });
}
loadDishes();


