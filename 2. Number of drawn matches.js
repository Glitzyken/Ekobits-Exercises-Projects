async function getNumDraw(year) {
  const url = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&page=1`;

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.data;
    })
    .then((dataArr) => {
      let count = 0;
      dataArr.forEach((el) => {
        let team1goal = el.team1goals;
        let team2goal = el.team2goals;

        // console.log(el);

        if (team1goal === team2goal) {
          count += 1;
        }
      });

      console.log(count);
    });
}

getNumDraw(2011);
