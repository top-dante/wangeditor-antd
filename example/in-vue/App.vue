<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Editor :get-full-text="getFullText"/>
    <div style="padding-top: 24px;">
      <h1>以下是获取的内容</h1>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
  import Editor from "./Editor";
export default {
  name: 'App',
  components: {
    Editor
  },
  data(){
    return {
      content:''
    }
  },
  methods:{
    getFullText(e){
      this.content = e
    }
  }
}
</script>

<style>
#app {
  width: 1000px;
  margin: 0 auto;
  padding-top: 64px;
}
</style>
