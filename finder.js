const https = require('https')
const querySelectorsPNG ='.amExportButton'
const {JSDOM} = require('jsdom')
// https.get('https://markets.eghtesadnews.com/69386/%D9%BE%D9%88%D9%86%D8%AF',(res)=>
// {
//     var doc = ''
//     res.setEncoding('utf-8')
//     res.on('data',(chunk)=>{
//         doc+=chunk;
//     })
//     res.on('end',()=>{
//         const dom = new JSDOM(doc).window.document;
//         const target = dom.querySelector(querySelectorsPNG);
//         console.log(target)
//     })
// })
JSDOM.fromURL("https://markets.eghtesadnews.com/69386/%D9%BE%D9%88%D9%86%D8%AF").then(dom => {
  
        const target = dom.window.document.querySelectorAll(querySelectorsPNG);
        console.log(target.length);
});