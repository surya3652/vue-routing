<template>
  <main>
    <div class="container">
      <div class="row">
        <h4>
          Both block elements are draggable into the other and no cloning is
          available
        </h4>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list1"
            :list="list1"
            :group="{ name: 'mygroup1', put: true }"
          >
            <div class="list-item" v-for="element in list1" :key="element">
              {{ element }}
            </div>
          </draggable>
        </div>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list1"
            :list="list2"
            :group="{ name: 'mygroup1', put: true }"
          >
            <div class="list-item" v-for="element in list2" :key="element">
              {{ element }}
            </div>
          </draggable>
        </div>
      </div>
      <hr />
      <hr />
      <div class="row">
        <h4>
          Only first block elements are draggable to second block, vice versa is
          not possible and no cloning is available
        </h4>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list2"
            :list="list3"
            :group="{ name: 'mygroup2', put: false }"
          >
            <div class="list-item" v-for="element in list3" :key="element">
              {{ element }}
            </div>
          </draggable>
        </div>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list2"
            :list="list4"
            :group="{ name: 'mygroup2', put: true }"
          >
            <div class="list-item" v-for="element in list4" :key="element">
              {{ element }}
            </div>
          </draggable>
        </div>
      </div>
      <hr />
      <hr />
      <div class="row">
        <h4>
          Both block elements are draggable into the other and cloning is
          available
        </h4>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list3"
            :list="list5"
            :group="{ name: 'mygroup3', pull: 'clone', put: true }"
          >
            <div class="list-item" v-for="element in list5" :key="element">
              {{ element }}
            </div>
          </draggable>
        </div>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list3"
            :list="list6"
            :group="{ name: 'mygroup3', pull: 'clone', put: true }"
          >
            <div class="list-item" v-for="element in list6" :key="element">
              {{ element }}
            </div>
          </draggable>
        </div>
      </div>
      <hr />
      <hr />
      <div class="row">
        <h4>
          Only first block elements are draggable to second block, vice versa is
          not possible and cloning is available
        </h4>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list4"
            :list="list7"
            :group="{ name: 'mygroup4', pull: 'clone', put: false }"
          >
            <div class="list-item" v-for="element in list7" :key="element">
              {{ element }}
            </div>
          </draggable>
        </div>
        <div class="col-lg-6">
          <draggable
            style="min-height: 112px"
            class="draggable-list4"
            :list="list8"
            :group="{ name: 'mygroup4', put: true }"
          >
            <div class="list-item" v-for="element in list8" :key="element">
              {{ element }}
            </div>
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
  props: {
    msg: String,
  },
  components: {
    draggable,
  },
  data() {
    return {
      list1: ["A", "B", "C", "D"],
      list2: [1, 2, 3, 4],
      list3: ["A", "B", "C", "D"],
      list4: [1, 2, 3, 4],
      list5: ["A", "B", "C", "D"],
      list6: [1, 2, 3, 4],
      list7: ["A", "B", "C", "D"],
      list8: [1, 2, 3, 4],
    };
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
ul {
  list-style-type: none;
  padding: 0;
}
.hello {
  background-color: #42b983;
  width: auto;
  height: auto;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.draggable-list1 {
  background: #42b983;
  color: #fff;
  border: 1px solid;
  border-radius: 10px;
}

.draggable-list2 {
  background: #adb942;
  color: #fff;
  border: 1px solid;
  border-radius: 10px;
}

.draggable-list3 {
  background: #e25555;
  color: #fff;
  border: 1px solid;
  border-radius: 10px;
}
.draggable-list4 {
  background: #6897dd;
  color: #fff;
  border: 1px solid;
  border-radius: 10px;
}
.list-item {
  margin: 5px;
  padding: 35px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  border: 2px solid black;
  background: linear-gradient(#32294d, #6b5e9a, #ab9bd8);
  display: inline-block;
}
</style>

<!-- pull option to clone means that dragging an element out of this list will clone the element and not move it permanently out of the list.
And setting put to false means we can’t drag new elements into this group. -->
