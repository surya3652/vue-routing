<template>
  <main>
    <div class="container">
      <div v-if="show" class="slidecontainer">
        <div class="rangebar">
          <input type="range" min="1" max="4" v-model="value" />
          <span>{{ value }}</span>
          <button @click="fun()" class="btn btn-primary">ok</button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <draggable
            style="min-height: 112px"
            class="draggable-list1"
            :list="list1"
            :group="{ name: 'mygroup', put: true }"
            :move="detect"
          >
            <li class="list-item" v-for="element in list1" :key="element">
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="show = true"
              ></i>
              {{ element }}
            </li>
          </draggable>
        </div>
        <div class="col-lg-12">
          <draggable
            style="min-height: 112px"
            class="draggable-list2"
            :list="list2"
            :group="{ name: 'mygroup', put: true }"
            :move="detect"
          >
            <li class="list-item" v-for="element in list2" :key="element">
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="show = true"
              ></i>
              {{ element }}
            </li>
          </draggable>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "HelloWorld",
  props: {},
  components: {
    draggable,
  },
  data() {
    return {
      list1: ["A", "B", "C", "D"],
      list2: [1, 2, 3, 4],
      value: 1,
      expand: [],
      show: false,
    };
  },
  methods: {
    fun() {
      this.show = false;
    },
    detect: (event) => {
        console.log(event)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 50px;
  margin-bottom: 100px;
}
h3 {
  margin: 40px 0 0;
}

.btn {
  border-radius: 250px;
  margin-left: 10px;
}
.draggable-list1,
.draggable-list2 {
  background: #42b983;
  color: #fff;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 250px;
}
.icon {
  background-color: black;
  border: 4px solid black;
  border-radius: 600px;
  position: absolute;
  right: 1%;
  top: 1px;
}

.list-item {
  position: relative;
  margin: 5px;
  padding: 35px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid black;
  background: linear-gradient(#32294d, #6b5e9a, #ab9bd8);
  flex: 1 0 calc(25% - 10px);
  display: inline-flex;
}

.rangebar {
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  background-color: #e6a4b4;
}
span {
  padding: 5px;
  border: 2px solid;
  border-radius: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
}
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #ffffff;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}
</style>

<!-- pull option to clone means that dragging an element out of this list will clone the element and not move it permanently out of the list.
  And setting put to false means we can’t drag new elements into this group. -->
