async function getTotalGoals(team, year) {
  const home = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=1`;
  const away = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=1`;

  const homeResult = await fetch(home)
    .then((res) => res.json())
    .then((data) => data.data)
    .then((dataArr) => {
      const arrOfGoals = dataArr.map((arr) => {
        return parseInt(arr.team1goals);
      });

      return arrOfGoals.reduce((acc, curVal) => acc + curVal);
    })
    .catch((err) => console.log(`🔥${err}`));

  const awayResult = await fetch(away)
    .then((res) => res.json())
    .then((data) => data.data)
    .then((dataArr) => {
      const arrOfGoals = dataArr.map((arr) => {
        return parseInt(arr.team2goals);
      });

      return arrOfGoals.reduce((acc, curVal) => acc + curVal);
    })
    .catch((err) => console.log(`🔥${err}`));

  console.log(homeResult + awayResult);
}

getTotalGoals('Barcelona', 2011);
