//////////////////////////////// Node HTTP way
const getTotalGoals = async (team, year) => {
  const http = require('https');

  const totalTeam1Goals = new Promise((resolve, reject) => {
    http
      .get(
        `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=1`,
        (res) => {
          const chunks = [];

          res.on('data', (chunk) => {
            chunks.push(chunk);
          });

          res.on('end', () => {
            try {
              const matches = JSON.parse(chunks);
              const team1 = matches.data
                .map((val) => {
                  return parseInt(val.team1goals);
                })
                .reduce((acc, val) => acc + val);

              resolve(team1);
            } catch (error) {
              reject(error.message);
            }
          });
        }
      )
      .on('error', (e) => {
        reject(`Got error: ${e.message}`);
      });
  });

  const totalTeam2Goals = new Promise((resolve, reject) => {
    http
      .get(
        `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=1`,
        (res) => {
          const chunks = [];

          res.on('data', (chunk) => {
            chunks.push(chunk);
          });

          res.on('end', () => {
            try {
              const matches = JSON.parse(chunks);
              const team2 = matches.data
                .map((val) => {
                  return parseInt(val.team2goals);
                })
                .reduce((acc, val) => acc + val);

              resolve(team2);
            } catch (error) {
              reject(error.message);
            }
          });
        }
      )
      .on('error', (e) => {
        reject(`Got error: ${e.message}`);
      });
  });

  let home = await totalTeam1Goals;
  let away = await totalTeam2Goals;

  return home + away;
};

getTotalGoals('Barcelona', 2011)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//////////////////////////////// browser FETCH way
async function getTotalGoals(team, year) {
  const home = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team1=${team}&page=1`;
  const away = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}&team2=${team}&page=1`;

  const homeResult = await fetch(home)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data.data;
    })
    .then((dataArr) => {
      const arrOfGoals = dataArr.map((arr) => {
        return parseInt(arr.team1goals);
      });

      return arrOfGoals.reduce((acc, curVal) => acc + curVal);
    })
    .catch((err) => console.log(`🔥${err}`));

  console.log(homeResult);

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

  console.log(awayResult);

  console.log(homeResult + awayResult);
}

getTotalGoals('Barcelona', 2011);
