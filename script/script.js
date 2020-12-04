//
var actionsMarker = false;
// UTILS
function getUrlParam(paramName){
  paramString = window.location.search.replace('?', '').split('#')[0];
  paramsAsStrings = paramString.split('&');
  try {
    for (counter=0; counter<=paramsAsStrings.length; counter++){
      p = paramsAsStrings[counter];
      nameValue = p.split('=');
      if (nameValue[0] === paramName){
        return nameValue[1];
      }
    }
    return null;
  } catch (e) {
    return null
}
}
// Catch actions
window.addEventListener('scroll', () => {actionsMarker=true})
window.addEventListener('click', () => {actionsMarker=true})
window.addEventListener('load', function (){
  setTimeout(function () {
    //debugger
    if (!actionsMarker){
      url = getUrlParam('url');
      if (url){
        document.location.href = url;
      }
    }
  }, 10000)
});
// ONLOAD
window.addEventListener('load', () =>{
  lang = getUrlParam('language');
  if ((lang) && (window.location.href.indexOf('googtrans') == -1)){
    window.location = window.location.href.split('#')[0];
	  window.location += `#googtrans(en|${lang})`;
	  location.reload();
  }
});

window.addEventListener('load', () =>{
  new google.translate.TranslateElement({pageLanguage: 'en'});
  document.getElementsByTagName('body')[0].style.position = 'inherit';

});

window.addEventListener('load', () =>{
  url = getUrlParam('url');
  if (url){
    document.querySelector('.button-download').href = url;
  }
});



window.addEventListener('load', function (){
  setTimeout(function () {
    alert('Test Alert');
  }, 1000)
});
window.addEventListener('load', () => {
  //document.querySelectorAll- возвращает список элементов в пределах документа
  document.querySelectorAll('.img-review').forEach((item, i, array) => {
    //forEach -используется для перебора массива
  //item-очередной элемент массива, i– его номер, array – массив, который перебирается
    item.addEventListener('click', (array) => {  //регистрирует обработчик события для целевого объекта (Element, Document, Window)
      activeSlide = document.querySelector('.active');
      //classList - свойство. возвращает псевдомассив DOMTokenList, содержащий все классы элемента
      activeSlide.classList.remove('active'); // remove-Удаляет у элемента указанные классы
      if (activeSlide.nextElementSibling) {
        //nextElementSibling - является свойством только для чтения, которое возвращает элемент (объект Element), следующий сразу за указанным в списке дочерних элементов родительского элемента
        console.log(activeSlide.nextElementSibling.classList)
        activeSlide.nextElementSibling.classList.add('active'); //add-добавить
      }
      else {
        activeSlide.parentNode.firstElementChild.classList.add('active');
      }
    })
  });
});




//var i=0;
//var image=document.getElementById("image");
//var imgs=['img/review-1.jpg','img/review-2.jpg','img/review-3.jpg','img/review-4.jpg','img/review-5.jpg','img/review-6.jpg','img/review-7.jpg','img/review-8.jpg','img/review-9.jpg','img/review-10.jpg'];
//function imgsrc() {
//  i++;
//  i%=imgs.length;
//  image.src = imgs[i];
//}
//<img class="img-review" id="image" src="img/review-1.jpg" onClick="imgsrc();">
