<template>
  <div>
    <form @submit.prevent="" action="">
      <input required v-model="input" type="text" />
      <button class="btn btn-primary" @click="trigger()">Show</button>
      <button class="btn btn-danger" @click="reset()">Reset</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputForm",
  data() {
    return {
      input: "",
      isVisible: false,
    };
  },
  methods: {
    trigger() {
      if (this.input != "") {
        this.$parent.isVisible = true;
      }
      this.$parent.inputArray = this.input.split(",");
    },
    reset() {
      this.input = "";
      this.$parent.isVisible = false;
      this.$parent.inputArray = [];
    },
  },
};
</script>
<style scoped>
* {
  margin: 5px;
}
input {
  padding: 5px;
}
</style>
