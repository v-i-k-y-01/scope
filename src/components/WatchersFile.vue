<template>
  <h1>Let us take Volume Button Example For Watchers</h1>
  <button v-if="volume < maxVolume" @click="increaseVolume">Increase</button>
  <button v-if="volume > 0" @click="decreaseVolume">Decrease</button>
  <p>Current Volume: {{ volume }}</p>
  <br>
  <br>
  <label for="movies">Movies: </label>
  <input type="text" v-model="movies">
</template>

<script>
export default {
  data() {
    return {
      volume: 0,
      maxVolume: 20,
      movies: 'batman',
    };
  },
  methods: {
    increaseVolume() {
      this.volume += 1;
    },
    decreaseVolume() {
      this.volume -= 1;
    },
  },
  watch: {
    volume(value) {
      if (value >= this.maxVolume) {
        if (value > this.maxVolume) {
          this.volume = this.maxVolume; // Cap the volume at maxVolume
        }
        alert('You are listening at Maximum Volume');
      }
    },
    movies: {
      handler(value) {
        console.log(`The current value: ${value}`);
      },
      immediate: true // Optionally, you can set deep to true if you want to watch nested properties of the object
    },
  },
};
</script>

<style scoped>
</style>
