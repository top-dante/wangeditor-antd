# wangeditor-antd
基于ant-design风格重构的wangeditor富文本编辑器,主要趋于样式重构，javascript部分未修改。  
[![GitHub issues](https://img.shields.io/github/issues/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![GitHub fork](https://img.shields.io/github/forks/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![GitHub stars](https://img.shields.io/github/stars/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![GitHub license](https://img.shields.io/github/license/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![npm package](https://img.shields.io/npm/v/wangeditor-antd.svg?style=flat-square)](https://www.npmjs.com/package/wangeditor-antd) 
[![NPM downloads](http://img.shields.io/npm/dm/wangeditor-antd.svg?style=flat-square)](https://www.npmjs.com/package/wangeditor-antd)

#### 修改部分说明  
* 重构图标
* 重构下拉样式 
* 重构input输入框

#### 目录说明  
```
dist       ---主文件  
  -- fonts --- 图标文件 
  -- wangeditor.css
  -- wangeditor.js 
index      --- 演示html  
```  
#### 直接使用   
直接下载，将dist目录放入您的项目  
引入 `wangeditor.css`和`wangeditor.js`文件使用即可

#### 在vuejs中使用  
```
npm install wangeditor-antd --save //推荐使用cnpm
```
在项目中使用如下  
```vue
<template>
    <div ref="editor"></div>
</template>
<script>
    import E from 'wangeditor-antd'
    export default {
        name: 'editor',
        props:['get-full-text','content'], //回调方法
        mounted() {
            let editor = new E(this.$refs.editor);
            editor.customConfig.onchange = (html) => {
                this.getFullText(html) //内容赋值
            };
            editor.customConfig.uploadImgServer ='你的上传地址';
            editor.customConfig.uploadFileName = 'file';
            editor.customConfig.zIndex = 100;
            editor.customConfig.uploadImgParams = {
                from: 'editor'
            };
            editor.create();
            //如果默认传递content值则渲染默认内容
            if(this.content){
                editor.txt.html(this.content)
            }
        }
    }
</script>
<style>

</style>
```
更多详细使用文档请详细参考 wangeditor官方文档  
<a href="https://www.kancloud.cn/wangfupeng/wangeditor3/332599" target="_blan">wangeditor官方文档</a>
#### 贴别鸣谢  
* <a href="http://www.wangeditor.com/" target="_blan">wangeditor</a>
* <a href="https://ant.design" target="_blan">antd.design</a>  
* <a href="https://antdv.com" target="_blan">antd-design-vue</a> 

