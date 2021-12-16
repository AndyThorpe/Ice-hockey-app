<template>
  <div>
    <div v-for="(game, index) in fixtures" :key="index">
      <div class="game" v-if="game.teams">
        <div class="home">
          {{ game.teams.home.name }}
        </div>

        <div class="score">{{ game.scores.home }} vs {{ game.scores.home }}</div>

        <div class="away">
          {{ game.teams.away.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fixtures",

  props: {
    fixtures: Object,
  },
  data() {
    return {
      data: this.fixtures,
    };
  },
  mounted() {
    console.log(this.fixtures);
  },
};
</script>

<style scoped>
.game {
  font-size: 1em;
  display: flex;
  padding: 0.5em 2em;
  justify-content: space-between;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #ffffff;
  margin: 0 2% 2px;
  width: 96%;
  border-radius: 6px;
}

.home {
  text-align: left;
}

.away {
  text-align: right;
}

.home,
.away {
  width: 40%;
}

.score {
  width: 20%;
}

.score {
  flex: 1;
  display: flex;
  justify-content: center;
}
.container {
  border-radius: 16px;
  background: #f1f1f1;
  padding: 1rem;
  box-shadow: 0 0 5px 3px #ffffff;
  width: 100%;
  color: #4d4d4d;
}
</style>
