import _ from 'lodash';
import './style.css';
import './bootstrap.bundle';
import './bootstrap.css';
import Icon from './icon/fresco-logo-pequeno.png';
import amHome from './print.js';
import amDeposition from './deposition.js';

import amCardapio from './cardapio.js';

function menu(){
    const nav= document.createElement('nav');
    const container_fluid= document.createElement('div');
    const butt = document.createElement('button');
    const span = document.createElement('span');

    nav.classList.add('navbar');
    nav.classList.add('navbar-expand');
    nav.classList.add('navbar-light');
    nav.classList.add('fixed-top');
    nav.classList.add('bg-light');
    
    container_fluid.classList.add('container');
   
   /* 
    butt.classList.add('navbar-toggler');
    butt.setAttribute('data-bs-toggle', 'collapse');
    butt.setAttribute('data-bs-target', '#navbarCollapse');
    butt.setAttribute('aria-controls', 'navbarCollapse');
    butt.setAttribute('aria-expanded', 'false');
    butt.setAttribute('aria-label', 'Toggle navigation');
    
    span.classList.add('navbar-toggler-icon');*/

    nav.appendChild(navbarBrand());    
    nav.appendChild(collapse());
    nav.appendChild(container_fluid);

    return nav;
}
function collapse(){
    const div_collapse = document.createElement('div'); 

    div_collapse.classList.add('collapse');
    div_collapse.classList.add('navbar-collapse');
    //div_collapse.setAttribute('id', 'navbarCollapse');
    
    
    const ul_menu = document.createElement('ul');
    ul_menu.classList.add('navbar-nav');
    ul_menu.classList.add('me-auto');
    ul_menu.classList.add('mb-2');
    ul_menu.classList.add('mb-md-0');
    
    ul_menu.appendChild(linkMenu('Home', amHome));
    ul_menu.appendChild(linkMenu('Deposition', amDeposition));
    
    ul_menu.appendChild(linkMenu('Menu', amCardapio));
    
    return ul_menu;
}

function linkMenu(nameOfLink, action){
    const link_menu = document.createElement('li');
    const ancor_menu = document.createElement('a');

    link_menu.classList.add('nav-item');
    ancor_menu.classList.add('nav-link');
   
    
    ancor_menu.innerHTML = nameOfLink;
    ancor_menu.addEventListener('click', ()=>{
        body.innerHTML='';
        selectioMenu(nameOfLink);
    });
    link_menu.appendChild(ancor_menu);

    return link_menu;
}
function selectioMenu(name){
    if(name==='Home'){
        body.appendChild(amHome());
    }else if(name=='Deposition'){
        body.appendChild(amDeposition());
    }else if(name=== 'Menu'){
        body.appendChild(amCardapio());
    }  
}
function navbarBrand(){
    const ancor = document.createElement('a'); 
    const lo = new Image();

    lo.src= Icon;
    lo.setAttribute('style', 'width:100px');

    ancor.classList.add('navbar-brand');
    ancor.appendChild(lo);
    
    return ancor;
}
function amFooter(){
    const footer = document.createElement('footer')
    const numberCall = document.createElement('h1')
    const call = document.createElement('h3')
    const sectionNumber = document.createElement('div');
    const sectionCopy = document.createElement('div');
    const author = document.createElement('p');
    const enterprise = document.createElement('p');
    const year = new Date();

    numberCall.innerHTML='946 689 138';
    call.innerHTML = 'Ligue e faça a sua reserva';
    author.innerHTML= 'Criado por Dario Prazeres';
    enterprise.innerHTML = `DPproject &copy; ${year.getFullYear()}`

    numberCall.classList.add('white');
    call.classList.add('white');
    numberCall.setAttribute('style', 'font-size:60px;');
    sectionNumber.setAttribute('style', 'height:400px;');

    sectionNumber.classList.add('footerNumber');
    sectionNumber.classList.add('container-fluid');
    footer.classList.add('footerBack');
    sectionCopy.classList.add('border-top');
    sectionCopy.classList.add('section-copy');

    sectionNumber.appendChild(call);
    sectionNumber.appendChild(numberCall);
    sectionCopy.appendChild(enterprise);
    sectionCopy.appendChild(author);
    
    footer.appendChild(sectionNumber);
    footer.appendChild(sectionCopy);

    return footer;
}
const content =document.createElement('div');
const body = document.createElement('section');
content.appendChild(menu());
body.appendChild(amHome());
content.appendChild(body);
content.appendChild(amFooter());
document.body.appendChild(content);
