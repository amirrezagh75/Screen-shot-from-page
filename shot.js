var webPage = require('webpage');
var url, clipRect, SaveAs;

//Entering url and file names
var charts = [{
    url: "https://markets.eghtesadnews.com/69386/%D9%BE%D9%88%D9%86%D8%AF",
    name: "pound.png"
}, {
    url: "https://markets.eghtesadnews.com/69384/%D8%AF%D9%84%D8%A7%D8%B1",
    name: "dollar.png"
}, {
    url: "https://markets.eghtesadnews.com/69385/%DB%8C%D9%88%D8%B1%D9%88",
    name: "euro.png"
}]

var TIMEOUTDURATION = 5 * 1000;

var iterator = 0;
//makign time interval for calling function every 5s

var iterationInterval = setInterval(function() {
    console.log("Here before",iterator);
    if(iterator === charts.length)
        iterator = 0;
    Shot(charts[iterator], function(mode){
        if(mode === 'increase')
            iterator+=1;            
    })  
    console.log('current', iterator)  
}, TIMEOUTDURATION);



function Shot(item,cb)
{
    console.log('item', item.url);
  str = './upload/';
  url = item.url;
  SaveAs = item.name;

  page = webPage.create();
  page.open( url , function() {

    // being the actual size of the headless browser
  page.viewportSize = { width: 1440, height: 900 };

  clipRect = page.evaluate(function(){
    return document.querySelector('#chartdiv5').getBoundingClientRect();
  });
  
  page.clipRect = {
    top:    clipRect.top ,
    left:   clipRect.left + 350,
    width:  clipRect.width - 350,
    height: clipRect.height - 100
  };
  page.render(str.concat(SaveAs));
  phantom.exit();
  cb('increase');
});

}