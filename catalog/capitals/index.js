const capitalsList = document.getElementById('capitalsList')

fetch('https://restcountries.com/v3.1/region/europe')
  .then(resolve => resolve.json())
  .then(data => {
    data.forEach(country => {
      capitalsList.innerHTML += `<li> ${country.capital[0]} </li>`
    })
  })

// console.log(country.capital[0])
