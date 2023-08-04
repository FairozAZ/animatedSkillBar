let i = 0;

window.onload = function(){
  if(i == 0){
    i = 1;

    let jsElem = document.getElementById('jsBar'),
        htmlElem = document.getElementById('htmlBar'),
        cssElem = document.getElementById('cssBar');

    let jsWidth = 0, htmlWidth = 0, cssWidth = 0;

    let jsId = setInterval(jsFrame, 8);
    function jsFrame(){
      if(jsWidth >= 70){
        clearInterval(jsId);
        i = 0;
      }else{
        jsWidth++;
        jsElem.style.width = jsWidth + '%';
        jsElem.innerHTML = jsWidth + '%';
      }
    }

    let htmlId = setInterval(htmlFrame, 8);
    function htmlFrame(){
      if(htmlWidth >= 80){
        clearInterval(htmlId);
        i = 0;
      }else{
        htmlWidth++;
        htmlElem.style.width = htmlWidth + '%';
        htmlElem.innerHTML = htmlWidth + '%';
      }
    }

    let cssId = setInterval(cssFrame, 8);
    function cssFrame(){
      if(cssWidth >= 90){
        clearInterval(cssId);
        i = 0;
      }else{
        cssWidth++;
        cssElem.style.width = cssWidth + '%';
        cssElem.innerHTML = cssWidth + '%';
      }
    }

  }
}