<template>
  <div class="roster-container">
    <h1>Team Roster</h1>
    <table>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Position</th>
      </tr>

      <tr class="player" v-for="(player, index) in players" :key="index">
        <td>{{ player.jerseyNumber }}</td>
        <td>{{ player.person.fullName }}</td>
        <td>{{ player.position.abbreviation }}</td>
        <td><router-link :to="{ path: '/player/' + player.person.id }">View Player</router-link></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Roster",
  data() {
    return {
      players: [],
    };
  },
  mounted() {
    const teamId = this.$router.currentRoute.value.params.id;
    axios.get("https://statsapi.web.nhl.com/api/v1/teams/" + teamId + "/roster").then((response) => {
      this.players = response.data.roster;
    });
  },
};
</script>

<style>
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
