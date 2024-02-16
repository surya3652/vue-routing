<template>
  <main>
    <div class="container">
      <div v-if="show" class="slidecontainer">
        <div class="rangebar">
          Width : <input type="range" min="1" max="4" v-model="width" /><span>{{
            width
          }}</span
          ><br /><br />
          Height :
          <input type="range" min="1" max="4" v-model="height" /><span>{{
            height
          }}</span
          ><br />
          <button @click="assign_style()" class="btn btn-primary">ok</button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <draggable
            style="min-height: 112px"
            class="draggable-list1"
            v-model="list1"
            :group="{ name: 'mygroup' }"
          >
            <li
              class="list-item"
              v-for="(element, index) in list1"
              :style="element.dynamic_style"
              :key="index"
            >
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="menu(list1, index)"
              ></i>
              {{ element.name }}
            </li>
          </draggable>
        </div>
        <div class="col-lg-12">
          <draggable
            style="min-height: 112px"
            class="draggable-list2"
            v-model="list2"
            :group="{ name: 'mygroup' }"
          >
            <li
              class="list-item"
              v-for="(element, index) in list2"
              :style="element.dynamic_style"
              :key="index"
            >
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="menu(list2, index)"
              ></i>
              {{ element.name }}
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
      list1: [
        { name: "A", width: 1, height: 1, dynamic_style: "" },
        { name: "B", width: 1, height: 1, dynamic_style: "" },
        { name: "C", width: 1, height: 1, dynamic_style: "" },
        { name: "D", width: 1, height: 1, dynamic_style: "" },
      ],
      list2: [
        { name: 1, width: 1, height: 1, dynamic_style: "" },
        { name: 2, width: 1, height: 1, dynamic_style: "" },
        { name: 3, width: 1, height: 1, dynamic_style: "" },
        { name: 4, width: 1, height: 1, dynamic_style: "" },
      ],
      width: 1,
      height: 0,
      show: false,
      current_list: [],
      current_index: 0,
    };
  },
  methods: {
    assign_style() {
      this.show = false;
      this.current_list[this.current_index].width = this.width;
      this.current_list[this.current_index].height = this.height;
      this.current_list[this.current_index].dynamic_style = `flex: 0 0 calc(${
        this.width * 25
      }% - 10px);`;
    },
    menu(list, index) {
      this.show = true;
      this.current_list = list;
      this.current_index = index;
      this.width = list[index].width;
      this.height = list[index].height;
      console.log(this.current_list);
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
  margin-top: 5px;
}

.draggable-list1,
.draggable-list2 {
  background: #42b983;
  margin: 30px 250px;
  color: #fff;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
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
  margin: 5px;
  padding: 35px;
  position: relative;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid black;
  background: linear-gradient(#32294d, #6b5e9a, #ab9bd8);
  flex: 0 0 calc(25% - 10px);
  display: inline-flex;
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

.rangebar {
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  background-color: #66f35c;
}

.slider {
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

<!-- <li class="list-item">
              {{ list1[0].name }}
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="show = true"
              ></i>
            </li>
            <li class="list-item1">
              {{ list1[1].name }}
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="show = true"
              ></i>
            </li>
            <li class="list-item2">
              {{ list1[2].name }}
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="show = true"
              ></i>
            </li>
            <li class="list-item3">
              {{ list1[3].name }}
              <i
                class="fa-solid fa-ellipsis-vertical icon"
                @click="show = true"
              ></i>
            </li> -->
