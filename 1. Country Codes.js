async function getCountryName(code) {
  let filteredCountryName;

  const totalPages = await fetch(
    'https://jsonmock.hackerrank.com/api/countries?page=1'
  )
    .then((res) => res.json())
    .then((data) => data.total_pages); // 25

  for (let i = 1; i <= totalPages; i++) {
    let url = `https://jsonmock.hackerrank.com/api/countries?page=${i}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => data.data)
      .then((dataArray) => {
        dataArray.filter((countryObj) => {
          if (code === countryObj.alpha2Code) {
            console.log('Found!');
            filteredCountryName = countryObj.name;
            return;
          }
        });
      });
  }

  console.log(filteredCountryName);
}

// getCountryName('ZW');
getCountryName('AF');
