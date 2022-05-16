function domainName(url){
    let h = '';
    let para = '';
    if ((url.startsWith("www",0)) || (url.startsWith("http://www",0))|| (url.startsWith("https://www",0))){
      h = url.split(".");
      console.log("in 1");
      para = h[1];}
    else if (url.startsWith("https://www",0)){
        h = url.split(".");
        console.log("in 2");
        para = h[2];}
        else if ((url.startsWith("https://",0))||(url.startsWith("http://",0))){
            let x =  new URL(url).hostname;
            h = x.split(".");
            console.log("in 4");
       
            para = h[0];
           }
    else if (
              (!url.startsWith("https://www",0)) || 
              (!url.startsWith("www",0)) || 
              (!url.startsWith("http://www",0))|| 
              (!url.startsWith("http://www",0))||
              (!url.startsWith("https://www",0))
              )  
    {h = url.split(".");
    console.log("in 3");

    para = h[0];}
    
    return para; 
}

module.exports = domainName;
console.log(domainName('http://google.co.jp'));
 //console.log(domainName('www.xakep.ru'));
// console.log(domainName('https://www.cnet.com'));
//https://www.codewars.com/kata/514a024011ea4fb54200004b/discuss
