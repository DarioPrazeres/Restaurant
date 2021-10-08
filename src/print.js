import Icon from './icon/barra-horizontal.png';
import pizza from './icon/pizza.jpg';
import restaurant from './icon/restaurante02.jpg';

const general = document.createElement('section');

const banner = document.createElement('section');
const infoBox = document.createElement('div');
const img = new Image();
const title = document.createElement('h1');
const subTitle = document.createElement('h2');
const sTitle = document.createElement('h5');

const welcome = document.createElement('section');
const welcome_1 = document.createElement('div');
const welcome_2 = document.createElement('div');
const welcome_3 = document.createElement('div'); 

export default function amHome(){
  general.appendChild(bannerShow());
  general.appendChild(welcomeToFresco());

  return general;
}
function bannerShow(){
  banner.classList.add('banner');
  infoBox.classList.add('container');
  infoBox.classList.add('infoBox');
  title.classList.add('white');
  subTitle.classList.add('orange');
  sTitle.classList.add('white');
  img.src = Icon;

  //style
  img.setAttribute('style', 'width:300px');
  title.setAttribute('style','font-size:60px');
  sTitle.setAttribute('style','font-size:25px');

  title.innerHTML = 'Fresco';
  subTitle.innerHTML = 'Especialidades Italianas';
  sTitle.innerHTML = 'Comida boa | Bom vinho';

  infoBox.appendChild(img);
  infoBox.appendChild(title);
  infoBox.appendChild(subTitle);
  infoBox.appendChild(sTitle);
  banner.appendChild(infoBox);

  return document.body.appendChild(banner);
}
function welcomeToFresco(){
  welcome.appendChild(welcomeGrid_1());
  welcome.appendChild(welcomeGrid_2());
  welcome.appendChild(welcomeGrid_3());

  // to Welcome_1

  welcome.classList.add('row');
  welcome.classList.add('mt-3');
  welcome.classList.add('mb-3');
  welcome.classList.add('jumbotron');
  welcome.classList.add('align-items-md-stretch');
  //welcome.setAttribute('style', 'heigt: 900px');
  return welcome;
}
function welcomeGrid_1(){
  const litleTitle = document.createElement('h5');
  const bigTitle = document.createElement('h1');
  const fewTitle = document.createElement('h2');
  const  para =  document.createElement('p');
  const btn = document.createElement('button');

  //classes style
  bigTitle.classList.add('orange');
  btn.classList.add('btn');
  btn.classList.add('btn-dark');
  btn.classList.add('round');
  welcome_1.classList.add('wine');
  welcome_1.classList.add('mb-2');
  //write in the tags
  litleTitle.innerHTML= 'O mais amado do bairro';
  bigTitle.innerHTML= 'Bem-Vindo';
  fewTitle.innerHTML='Reconhecido pela boa comida e bebida desde 1978.';
  para.innerHTML='Premiada pelo instituto Curso em Vídeo de qualidade de culinária e oferecendo os melhores serviços. Premiada pelo instituto Curso em Vídeo de qualidade de culinária e oferecendo os melhores serviços.';
  btn.innerHTML='Mais Sobre nós';

  //put in welcome
  welcome_1.appendChild(litleTitle);
  welcome_1.appendChild(bigTitle);
  welcome_1.appendChild(fewTitle);
  welcome_1.appendChild(para);
  welcome_1.appendChild(btn);
  welcome_1.classList.add('col-xl-4');

  return welcome_1;
}
function welcomeGrid_2(){
  
  welcome_2.classList.add('col-xl-4');
  welcome_2.classList.add('pizza');
  welcome_2.classList.add('mb-2');
  return welcome_2;
}
function welcomeGrid_3(){
  const rest = new Image();
  const title_3=document.createElement('h1');
  const para = document.createElement('p');
  
  welcome_3.appendChild(rest);
  welcome_3.appendChild(title_3);
  welcome_3.appendChild(para);

  para.innerHTML = 'Todos os dias, das 9h até 23h';
  title_3.innerHTML = 'Horário';
  //style
  para.classList.add('white');
  title_3.classList.add('white');

  welcome_3.classList.add('col-xl-4');
  welcome_3.classList.add('timeLine');
  welcome_3.classList.add('mb-2');
  
  return welcome_3;
}