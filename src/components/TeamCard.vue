<template>
  <div class="container">
    <h1>{{ this.data.name }}</h1>
    <p>City: {{ this.data.locationName }}</p>
    <p>Founded: {{ this.data.firstYearOfPlay }}</p>
    <p>Venue: {{ this.data.venue.name }}</p>
    <p>Division: {{ this.data.division.name }}</p>
    <p>Conference: {{ this.data.conference.name }}</p>
    <p>{{ this.data.officialSiteUrl }}</p>
    <router-link :to="{ path: '/roster/' + this.data.id }">View Roster</router-link>
  </div>
</template>

<script>
// { "id": 1,
// "name": "New Jersey Devils",
// "link": "/api/v1/teams/1",
// "venue": { "name": "Prudential Center", "link": "/api/v1/venues/null", "city": "Newark", "timeZone": { "id": "America/New_York", "offset": -4, "tz": "EDT" } },
// "abbreviation": "NJD",
// "teamName": "Devils",
// "locationName": "New Jersey",
// "firstYearOfPlay": "1982",
// "division": { "id": 18, "name": "Metropolitan", "nameShort": "Metro", "link": "/api/v1/divisions/18", "abbreviation": "M" },
// "conference": { "id": 6, "name": "Eastern", "link": "/api/v1/conferences/6" },
// "franchise": { "franchiseId": 23, "teamName": "Devils", "link": "/api/v1/franchises/23" },
// "shortName": "New Jersey",
// "officialSiteUrl": "http://www.newjerseydevils.com/",
// "franchiseId": 23,
// "active": true }

export default {
  props: {
    team: Object,
  },
  data() {
    return {
      data: this.team,
    };
  },
};
</script>

<style scoped>
.container {
  border-radius: 16px;
  background: #f1f1f1;
  padding: 1rem;
  box-shadow: 0px 5px 10px -8px rgb(255, 255, 255);

  width: 100%;
  color: #4d4d4d;
}
</style>
