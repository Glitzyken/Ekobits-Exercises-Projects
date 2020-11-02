async function getNumDraw(year) {
  const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=1`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => data.data)
    .then((dataArr) => {
      return dataArr
        .reduce((acc, val) => {
          const team1Goal = val.team1goals;
          const team2Goal = val.team2goals;

          if (team1Goal === team2Goal) {
            acc += 1;
          }
        })
        .then((totalDraw) => console.log(totalDraw));
    });
}

getNumDraw(2011);
