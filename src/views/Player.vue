<template>
  <div class="roster-container">
    <h1>Player Name</h1>

    <p>GP: {{ this.playerStats.games }}</p>

    <h2>Offence</h2>

    <!-- <p>points: {{ this.playerStats.points }}</p> -->
    <p>Goals: {{ this.playerStats.goals }}</p>
    <p>Assists: {{ this.playerStats.assists }}</p>
    <p>shots: {{ this.playerStats.shots }}</p>
    <p>gameWinningGoals: {{ this.playerStats.gameWinningGoals }}</p>

    <p>overTimeGoals: {{ this.playerStats.overTimeGoals }}</p>
    <p>gameWinningGoals: {{ this.playerStats.gameWinningGoals }}</p>

    <p>plusMinus: {{ this.playerStats.plusMinus }}</p>

    <h2>Defence</h2>
    <p>hits: {{ this.playerStats.hits }}</p>
    <p>blocked: {{ this.playerStats.blocked }}</p>
    <p>penaltyMinutes: {{ this.playerStats.penaltyMinutes }}</p>
    <!-- <p>pim: {{ this.playerStats.pim }}</p> -->
    <h2>TOI</h2>
    <p>shifts: {{ this.playerStats.shifts }}</p>
    <p>TOI: {{ this.playerStats.timeOnIce }}</p>
    <p>evenTimeOnIce: {{ this.playerStats.evenTimeOnIce }}</p>
    <p>evenTimeOnIcePerGame: {{ this.playerStats.evenTimeOnIcePerGame }}</p>

    <p>powerPlayTimeOnIce: {{ this.playerStats.powerPlayTimeOnIce }}</p>
    <p>powerPlayTimeOnIcePerGame: {{ this.playerStats.powerPlayTimeOnIcePerGame }}</p>

    <p>timeOnIcePerGame: {{ this.playerStats.timeOnIcePerGame }}</p>
    <p>shorthandedTimeOnIce: {{ this.playerStats.shorthandedTimeOnIce }}</p>

    <p>shorthandedTimeOnIcePerGame: {{ this.playerStats.shorthandedTimeOnIcePerGame }}</p>
    <h2>Special Team Stats</h2>
    <p>powerPlayGoals: {{ this.playerStats.powerPlayGoals }}</p>
    <p>powerPlayPoints: {{ this.playerStats.powerPlayPoints }}</p>
    <p>shorthandedGoals: {{ this.playerStats.shorthandedGoals }}</p>
    <p>shorthandedPoints: {{ this.playerStats.shorthandedPoints }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Player",
  data() {
    return {
      playerStats: {},
    };
  },
  mounted() {
    const playerId = this.$router.currentRoute.value.params.id;
    console.log(playerId);
    axios.get("https://statsapi.web.nhl.com/api/v1/people/" + playerId + "/stats?stats=statsSingleSeason").then((response) => {
      this.playerStats = response.data.stats[0].splits[0].stat;
    });
  },
};
</script>

<style>
table {
  text-align: left;
}
</style>
