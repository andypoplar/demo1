<template>
  <div class="wraper" @viewappear="onShow" @viewdisappear="onHide">
    <text class="title">待办事件</text>
    <div class="things-wrap">
      <div
        class="thing"
        v-for="(item,index) in todoThings"
        :key="item.name"
        @click="itemThing(item)"
      >
        <text class="label">{{item.name}}</text>
        <div class="thing-right">
          <text class="btn-success" @click="clickFinish(index)">完成</text>
          <text class="iconfont">&#xe6a2;</text>
        </div>
      </div>
    </div>
    <text class="title">已办事件</text>
    <div class="things-wrap">
      <div class="thing" v-for="item in doneThings" :key="item.name" @click="itemThing(item)">
        <text class="label">{{item.name}}</text>
        <div class="thing-right">
          <text class="iconfont">&#xe6a2;</text>
        </div>
      </div>
    </div>

    <div class="btns-footer">
      <text class="add" @click="addTodo">添加</text>
      <text class="clear" @click="clearTodo">清空</text>
    </div>
  </div>
</template>

<script>
import { getEntryUrl } from "./utils";
const storage = weex.requireModule("storage");
const navigator = weex.requireModule("navigator");
export default {
  name: "App",
  components: {},
  data() {
    return {
      todoThings: [],
      doneThings: [],
    };
  },
  created() {
    if (weex.config.env.platform === "Web") {
      this.onShow();
    }
  },
  methods: {
    clickFinish(index) {
      this.doneThings.push(this.todoThings[index]);
      this.todoThings.splice(index, 1);
    },

    onHide() {
      storage.setItem("todoThings", JSON.stringify(this.todoThings));
      storage.setItem("doneThings", JSON.stringify(this.doneThings));
    },

    onShow() {
      console.log("页面加载完成");
      storage.getItem("todoThings", (e) => {
        if (e.result === "success") {
          this.todoThings = JSON.parse(e.data);
        } else {
          this.todoThings = [];
        }
      });

      storage.getItem("doneThings", (e) => {
        if (e.result === "success") {
          this.doneThings = JSON.parse(e.data);
        } else {
          this.doneThings = [];
        }
      });
    },

    addTodo() {
      if (weex.config.env.platform === "Web") {
        this.onHide();
      }
      navigator.push({
        url: getEntryUrl('components/add'),
        animated: "true",
      });
    },

    clearTodo() {
      this.todoThings = [];
      this.doneThings = [];
      this.onHide();
    },

    itemThing(item) {
      if (weex.config.env.platform === "Web") {
        this.onHide();
      }
      storage.setItem("currentThing", JSON.stringify(item));

      navigator.push({
        url: getEntryUrl('components/detail'),
        animated: "true",
      });
    },
  },
  beforeCreate() {
    const domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "iconfont",
      src: "url('http://at.alicdn.com/t/font_1967490_nkafodhsmlb.ttf')",
    });
  },
};
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
}

.wraper {
  background: antiquewhite;
}

.thing {
  background: white;
  padding: 20px 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

.thing-right {
  flex-direction: row;
  align-items: center;
}

.btn-success {
  font-size: 25px;
  border: 1px solid black;
  padding: 2px 14px;
  border-radius: 10px;
  margin-right: 10px;
}

.title {
  font-size: 32px;
  padding: 20px;
}

.btns-footer {
  position: absolute;
  bottom: 0px;
  width: 750px;
  height: 100px;
  background: #ffffff;
  flex-direction: row;
  align-items: center;
}

.add,
.clear {
  flex: 1;
  text-align: center;
}
</style>
