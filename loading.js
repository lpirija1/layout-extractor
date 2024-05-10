async function loading(pageURL, browser) {  
       var ajax = new XMLHttpRequest;
       ajax.onreadystatechange = function(){
         if (ajax.readyState == 4 && ajax.status == 200) {
             ajax.open("GET", "http://localhost:3000/" + pageURL +"/" + browser,true);
             ajax.setRequestHeader("Content-Type", "application/json");
             ajax.send();
            }
        }
}
   
   