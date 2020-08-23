<template>
  <div class="add">
    <div class="nav-bar">
      <text class="iconfont" @click="backPage">&#xe6db;</text>
      <text class>添加事件</text>
      <text class></text>
    </div>
    <div class="form-item">
      <text>事件标题：</text>
      <input type="text" v-model="name" placeholder="请输入事件名称" class="input" />
    </div>

    <div class="form-item">
      <text>事件内容：</text>
      <textarea type="text" v-model="desc" placeholder="请输入事件内容" class="textarea"></textarea>
    </div>

    <div class="btns-footer">
      <text class="add-btn" @click="addRecord">添加</text>
      <text class="clear">清空</text>
    </div>
  </div>
</template>

<script>
const storage = weex.requireModule("storage");
const navigator = weex.requireModule("navigator");
export default {
  name: "add",
  data() {
    return {
      name: "",
      desc: "",
    };
  },
  methods: {
    addRecord() {
      const currentMessage = {
        name: this.name,
        desc: this.desc,
      };
      let currentList = [];
      storage.getItem("todoThings", (e) => {
        if (e.result === "success") {
          currentList = JSON.parse(e.data);
          console.log("成功");
        } else {
          console.log("失败");
          currentList = [];
        }
      });

      currentList.push(currentMessage);
      storage.setItem("todoThings", JSON.stringify(currentList), (e2) => {
        if (e2.result === "success") {
          console.log(333333);
          navigator.pop({
            animated: "true",
          });
        }
      });
    },
    backPage(){
      navigator.pop({
        animated:'true'
      })
    }
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

.nav-bar {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 25px 15px;
}

.add {
  flex-direction: column;
  background: blanchedalmond;
}

.form-item {
  flex-direction: row;
  padding: 0 50px;
  margin-top: 150px;
}

.input,
.textarea {
  flex: 1;
  background: white;
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

.add-btn,
.clear {
  flex: 1;
  text-align: center;
}
</style>