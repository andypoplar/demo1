<template>
  <div class="detail">
    <div class="nav-bar">
      <text class="iconfont" @click="backPage">&#xe6db;</text>
      <text class>事件详情</text>
      <text class></text>
    </div>
    <div class="form-item">
      <text>事件标题：</text>
      <text>{{name}}</text>
    </div>

    <div class="form-item">
      <text>事件内容：</text>
      <text>{{desc}}</text>
    </div>
  </div>
</template>

<script>
const storage = weex.requireModule("storage");
const navigator = weex.requireModule("navigator");
export default {
  name: "detail",
  data() {
    return {
      name: "",
      desc: "",
    };
  },
  created() {
    storage.getItem("currentThing", (e) => {
      if (e.result === "success") {
        let currentData = JSON.parse(e.data)
        this.name = currentData.name
        this.desc = currentData.desc
      }else{
        console.log("失败");
      }
    });
  },
  methods:{
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

.detail {
  flex-direction: column;
  background: blanchedalmond;
}

.form-item {
  flex-direction: row;
  padding: 0 50px;
  margin-top: 50px;
}

.input,
.textarea {
  flex: 1;
  background: white;
}
</style>