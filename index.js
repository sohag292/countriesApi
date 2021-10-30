fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data=> displayCountries(data));

const displayCountries = countries =>{
  const countriesDiv = document.getElementById('countries');
  countries.forEach(country => {
      // const country = countries[i];
    const countryDiv= document.createElement('div');
    countryDiv.className = "country"

    const countryInfo =`
      <h3 class="country-name">${country.name.common}</h3>
      <p> ${country.capital} </p>
      <button onClick="displayCountryDetail('${country.name.common}')">Detailes</button>
    `
    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv);
  });
  // for(let i = 0; i<countries.length; i++){
  //   const country = countries[i];
  //   const countryDiv= document.createElement('div');
  //   countryDiv.className = "country"

  //   const countryInfo =`
  //     <h3 class="country-name">${country.name.common}</h3>
  //     <p> ${country.capital} </p>
  //   `
  //   countryDiv.innerHTML = countryInfo;
  //   countriesDiv.appendChild(countryDiv);
  // }
}

// fetch('https://restcountries.com/rest/v2v3.1/all')
//     .then(response => response.json())
//     .then(json => displayUser(json))
//     .catch(error => console.log(error))

//     function displayUser(user){
      
//       const userNames = user.map(user => user.username);
//       const ul = document.getElementById("countries");
      
//       for(let i = 0; i<userNames.length; i++){
//         const user = userNames[i];
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//       }
//     }

const displayCountryDetail = name=>{
  const url =`https://restcountries.com/v3.1/name/${name}`
  fetch(url)
  .then(res =>res.json())
  .then(data => renderCountryinfo(data[0]))
}

const renderCountryinfo = country =>{
  console.log(country);
  const countryDiv = document.getElementById('countryDetail');

  countryDiv.innerHTML =`
  <h1>Name: ${country.name.common}</h1>
  <p> population: ${country.population}</p>
  <p> Area: ${country.area}</p>
  <img src="${country.flags.png}">
  `
}