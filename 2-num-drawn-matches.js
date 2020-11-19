async function getNumDraw(year) {
  const drawnMatchesArray = [];

  const totalPages = await fetch(
    `https://jsonmock.hackerrank.com/api/football_matches?year=${year}`
  )
    .then((res) => res.json())
    .then((data) => data.total_pages); // 196

  for (let i = 1; i <= totalPages; i++) {
    let url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=${i}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return data.data;
      })
      .then((dataArr) => {
        let count = 0;
        dataArr.forEach((el) => {
          let team1goal = el.team1goals;
          let team2goal = el.team2goals;

          if (team1goal === team2goal) {
            count += 1;
          }
        });

        console.log(`Fetched ${count} drawn matche(s) from page ${i}`); // This for a visible sign of progress
        drawnMatchesArray.push(count);
      });
  }

  const totalResultOfDrawnMatches = drawnMatchesArray.reduce(
    (acc, val) => acc + val
  );

  console.log(
    `There are ${totalResultOfDrawnMatches} drawn matches in ${year}`
  );
}

getNumDraw(2011);
