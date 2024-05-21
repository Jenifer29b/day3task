 function reqListener() {
    const countrys = (JSON.parse(this.responseText));
    console.log(countrys);
     
   
  //flag
      for(let country of countrys) {
       console.log(country.flags.png);
      }

  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  


