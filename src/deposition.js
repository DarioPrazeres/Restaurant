import Icon from './icon/aspas.png';
import dep_1 from './icon/depoimento01.png';
import dep_2 from './icon/depoimento02.png';
import dep_3 from './icon/depoimento03.png';



export default function amDeposition() {
  const general = document.createElement('section');
  const container =document.createElement('div');
  const container_1 =document.createElement('div');
  const item_1 =document.createElement('div');
  const item_2 =document.createElement('div');
  const item_3 =document.createElement('div');
  const item_4 =document.createElement('div');
  const title = document.createElement('h1');

  const aspas = new Image();
  aspas.src = Icon;
  title.innerHTML= 'Depoimentos';
  //classList
  item_1.classList.add('col-sm-6');
  item_2.classList.add('col-sm-6');
  item_3.classList.add('col-sm-6');
  item_4.classList.add('col-sm-6');
  container.classList.add('depoimentDad');
  container_1.classList.add('depoimentDad');
  container.classList.add('row');
  container_1.classList.add('row');
  container_1.classList.add('container-fluid');
  container.classList.add('container-fluid');
  general.classList.add('mt-3');
  general.classList.add('containerDepoiment');
  title.classList.add('orange');
  item_1.classList.add('depoiment');
  item_2.classList.add('depoiment');
  item_3.classList.add('depoiment');
  item_4.classList.add('depoiment');

  //add in fhater
  item_1.appendChild(aspas);
  item_1.appendChild(title);
  container.appendChild(item_1);
  container.appendChild(item_2);
  container_1.appendChild(item_3);
  container_1.appendChild(item_4);
  general.appendChild(container);
  general.appendChild(container_1);

  //logic
  item_2.appendChild(depoiment('Joana L','“A melhor pizza do bairro, e quando pedimos o vinho para acompanhar, temos a dupla perfeita. Recomendo a todos aqueles que procuram um lugar agradável para jantar.”','Facebook',dep_1));
  item_3.appendChild(depoiment('Clarissa J','“A melhor pizza do bairro, e quando pedimos o vinho para acompanhar, temos a dupla perfeita. Recomendo a todos aqueles que procuram um lugar agradável para jantar.”','YouTube',dep_2));
  item_4.appendChild(depoiment('Juliana P','“A melhor pizza do bairro, e quando pedimos o vinho para acompanhar, temos a dupla perfeita. Recomendo a todos aqueles que procuram um lugar agradável para jantar.”','Google',dep_3));

  return general;
}

function depoiment(name, paragraph, job, imgSrc){
  const depoiment = document.createElement('div');
  const para = document.createElement('p');
  const author = document.createElement('h2');
  const work = document.createElement('h5');
  const authorImg = new Image();


  //add in father
  depoiment.appendChild(authorImg);
  depoiment.appendChild(para);
  depoiment.appendChild(author);
  depoiment.appendChild(work);

  //class list
  authorImg.classList.add('depoimentImg');
  //logic
  para.innerHTML = paragraph;
  author.innerHTML = name;
  authorImg.src = imgSrc;
  work.innerHTML = job;

  return depoiment;
}