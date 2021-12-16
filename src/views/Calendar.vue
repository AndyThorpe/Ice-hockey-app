<template>
  <div class="roster-container">
    <h1>Calendar</h1>

    <div class="group" v-for="(fixture, index) in groupedFixtures" :key="index">
      <div class="header">
        <img v-if="fixture[0].league.logo" class="logo" :src="fixture[0].league.logo" />
        <h2 v-if="fixture[0].teams">{{ fixture[0].league.name }}</h2>
        <img class="flag" :src="fixture[0].country.flag" />
      </div>
      <Fixtures :fixtures="fixture" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Fixtures from "../components/Fixtures";

const groupBy = (key) => {
  return function group(array) {
    return array.reduce((acc, obj) => {
      const property = obj.league[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  };
};

export default {
  name: "Calendar",
  data() {
    return {
      data: ["hello"],
      matches: [],
      groupedFixtures: [],
    };
  },
  components: {
    Fixtures,
  },
  mounted() {
    const options = {
      method: "GET",
      url: "https://api-hockey.p.rapidapi.com/games/",
      params: { date: "2021-11-11" },
      headers: {
        "x-rapidapi-host": "api-hockey.p.rapidapi.com",
        "x-rapidapi-key": "12117a8c92msh0ea775add40b4b1p101790jsn06cf9618e58b",
      },
    };
    axios.request(options).then((response) => {
      console.log(response.data.response);
      const sorted = response.data.response.sort((a, b) => (a.league.id > b.league.id ? 1 : b.league.id > a.league.id ? -1 : 0));

      sorted.map((match) => {
        this.matches.push(match);
      });

      const groupByLeagueId = groupBy("id");
      const groupedFixtures = groupByLeagueId(this.matches);
      this.groupedFixtures = groupedFixtures;
      console.log(this.groupedFixtures);
    });
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  padding: 0.5em 2em;
  margin: 1em 0;
  border-radius: 6px;
  box-shadow: 0px 5px 10px -8px black;
}

.group {
  background-color: rgb(238, 238, 238);
  padding: 0.5em 1em 1.2em 1em;
  box-shadow: 0px 5px 10px -8px black;
  border-radius: 5px;
  margin-bottom: 2em;
  border: 1px solid #e7e7e7;
}

.header h2 {
  margin: 0px;
  font-size: 1.4em;
}

.logo {
  height: 30px;
}

.flag {
  height: 18px;
}

.logo {
  margin-right: 2em;
}

.flag {
  margin-left: auto;
}

.roster-container {
  border-radius: 16px;
  background: #f1f1f1;
  padding: 1rem 2rem;
  width: 50vw;
  box-shadow: 0 0 5px 3px #ffffff;
  color: #4d4d4d;
  margin: 2vw;
}
table {
  text-align: left;
  width: 100%;
}

@media screen and (max-width: 900px) {
  .roster-container {
    width: 90vw;
    margin: 5vw;
  }
}
</style>
