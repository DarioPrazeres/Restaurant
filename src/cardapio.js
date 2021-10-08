import Icon from './icon/folha-fundo-02.jpg';
import Dish_01 from './icon/prato01-300x255.jpg';
import Dish_02 from './icon/prato02-300x255.jpg';
import Dish_03 from './icon/prato03-300x255.jpg';
import Dish_04 from './icon/prato04-300x255.jpg';
import bannerHour from './icon/restaurante01.jpg';

export default function amCardapio(){
    const general = document.createElement('section');

    general.appendChild(cardapioCentral());
    general.appendChild(happyHour());
    general.classList.add('container-fluid');
    general.classList.add('mt-6');
    return general;
}
function cardapioCentral(){
    const cardapio = document.createElement('div');
    const icon = document.createElement('div');
    const title = document.createElement('h1');
    const container = document.createElement('div');
    const container_1 = document.createElement('div');
    const item_1 = document.createElement('div');
    const item_2 = document.createElement('div');
    const item_3 = document.createElement('div');
    const item_4 = document.createElement('div');

    cardapio.appendChild(icon);
    cardapio.appendChild(title);
    cardapio.appendChild(container);
    cardapio.appendChild(container_1);
    container.appendChild(item_1);
    container.appendChild(item_2);
    container_1.appendChild(item_3);
    container_1.appendChild(item_4);
    // logic
    
    title.innerHTML = 'Nosso Cardápio';
    //style-class
    title.classList.add('orange');
    title.setAttribute('style', 'text-align: center;');
    cardapio.classList.add('container-fluid');
    container.classList.add('row');
    container.classList.add('mb-3');
    container_1.classList.add('mb-3');
    container_1.classList.add('row');
    item_1.classList.add('col-sm-6');
    item_2.classList.add('col-sm-6');
    item_3.classList.add('col-sm-6');
    item_4.classList.add('col-sm-6');

    item_1.appendChild(itemCardapio('Peixe à Fresco','$35','Acompanha salada e legumes', Dish_01));
    item_2.appendChild(itemCardapio('Fettuccine DPproject','$29','Molho de carne moída e uma folha', Dish_02));
    item_3.appendChild(itemCardapio('Spaghetti Dario','$25','Molho alho e óleo e outra folha (maior)', Dish_03));
    item_4.appendChild(itemCardapio('Fettuccine Prazeres','$32','Um pouco de tudo (e mais)', Dish_04));
    return cardapio;
}
function itemCardapio(titulo, priceItem, para, sourceImg){
    const item = document.createElement('div');
    const price = document.createElement('h1');
    const discription = document.createElement('div');
    const title = document.createElement('h3');
    const disc = document.createElement('p');
    const dishImg = new Image();
    dishImg.src = sourceImg;
    //class list
    price.classList.add('orange');
    dishImg.classList.add('cardapioImg');
    item.classList.add('itemCardapio');
    item.classList.add('mb-2');
    
    
    //add in dad
    item.appendChild(dishImg);
    item.appendChild(discription);
    item.appendChild(price);
    discription.appendChild(title);
    discription.appendChild(disc);
    

    price.innerHTML = priceItem; 
    title.innerHTML = titulo; 
    disc.innerHTML = para;

    return item;
}
function happyHour(){
    const happy = document.createElement('section');
    const container = document.createElement('div');
    const col_1 = document.createElement('div');
    const col_2 = document.createElement('div');
    const bannerHappy = new Image();
   

    bannerHappy.src = bannerHour;
    bannerHappy.setAttribute('style', 'width:100%;height: 500px;');
    
    //add class list
    container.classList.add('row-flex');
    
    col_2.setAttribute('style', 'height: 500px;');
    col_2.classList.add('border');
    container.classList.add('mb-3');
    //container.classList.add('border');
    col_1.classList.add('col-sm-6');
    col_2.classList.add('col-sm-6');
    col_2.classList.add('wine');

    col_1.appendChild(bannerHappy);
    col_2.appendChild(wineWenesday('Toda Quarta-feira','Happy Hour', 'Metade do preço nas garrafas de vinho e seis deliciosos lanches por $9'));
    container.appendChild(col_1);
    container.appendChild(col_2);
    happy.appendChild(container);

    return happy;
}
function wineWenesday(st, t, p){
    const container = document.createElement('div');
    const litleTitle = document.createElement('h6');
    const subTitle = document.createElement('h1');
    const para = document.createElement('p');

    subTitle.classList.add('orange');
    container.classList.add('wine');
    para.setAttribute('style', 'font-size:20px;');
    //logic
    litleTitle.innerHTML = st;
    subTitle.innerHTML = t;
    para.innerHTML = p;

    container.appendChild(litleTitle);
    container.appendChild(subTitle);
    container.appendChild(para);

    return container;
}