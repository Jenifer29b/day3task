function reqListener() {
    const countrys = (JSON.parse(this.responseText));
     for (let country of countrys) {
        console.log(country.name.common);
     }

     //finding region
   // for (let country of countrys) {
    //  console.log(country.region);
   //}

    // finding subregion
   // for (let country of countrys) {
   //   console.log(country.subregion);
  // }

   //population
   //for (let country of countrys) {
    //  console.log(country.population);
   //}
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();
  


