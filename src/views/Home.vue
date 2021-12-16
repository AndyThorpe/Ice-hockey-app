<template>
  <div>
    <h1>NHL Franchises</h1>
    <h2><router-link :to="{ path: '/calendar/' }">Calendar</router-link></h2>
    <h2><router-link :to="{ path: '/calendar/' }">Fantasy</router-link></h2>

    <div class="teams-container">
      <div class="team" v-for="(team, index) in data" :key="index">
        <TeamCard :team="team" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import TeamCard from "../components/TeamCard";

export default {
  name: "Home",
  data() {
    return {
      data: [],
    };
  },
  components: {
    TeamCard,
  },
  mounted() {
    axios.get("https://statsapi.web.nhl.com/api/v1/teams").then((response) => {
      this.data = response.data.teams;
    });
  },
};
</script>
<style lang="scss" scoped>
.teams-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  align-items: stretch;
}
h2 {
  color: #ffffff;
}
a {
  color: #ffffff;
}
.team {
  width: 340px;
  margin: 1rem;
  @media screen and (max-width: 900px) {
    width: 45%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
}
</style>
