# wangeditor-antd
基于ant-design风格重构的wangeditor富文本编辑器,主要趋于样式重构，javascript部分未修改。  
  
[![GitHub issues](https://img.shields.io/github/issues/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![GitHub fork](https://img.shields.io/github/forks/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![GitHub stars](https://img.shields.io/github/stars/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![GitHub license](https://img.shields.io/github/license/top-dante/wangeditor-antd)](https://github.com/top-dante/wangeditor-antd)
[![npm package](https://img.shields.io/npm/v/wangeditor-antd.svg?style=flat-square)](https://www.npmjs.com/package/wangeditor-antd) 
[![NPM downloads](http://img.shields.io/npm/dm/wangeditor-antd.svg?style=flat-square)](https://www.npmjs.com/package/wangeditor-antd)

![preview](https://oalook.oss-cn-chengdu.aliyuncs.com/20200524223122.png)

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
直接下载，将release目录放入您的项目  
引入 `wang-editor-antd.js`或是`wang-editor-antd.min.js`文件使用即可
#### 新增  
```javascript
//工具条高度 默认 50px small为40px
editor.customConfig.toolBarSize = 'small';
//最小高度 默认 100px
editor.customConfig.minHeight = '100px';
//最大高度 默认 500px
editor.customConfig.maxHeight = '200px';
```
#### 在vuejs中使用  
```
npm install wangeditor-antd --save //推荐使用cnpm
//或是
yarn wangeditor-antd
```
在项目中使用如下  
```vue
<template>
    <section ref="editor">

    </section>
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
            //新增
            editor.customConfig.zIndex = 100;
            //工具条高度 默认 50px small为40px
            editor.customConfig.toolBarSize = 'small';
            //最小高度 默认 100px
            editor.customConfig.minHeight = '100px';
            //最大高度 默认 500px
            editor.customConfig.maxHeight = '200px';
            editor.customConfig.menus=[
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'foreColor',  // 文字颜色
                'backColor',  // 背景颜色
                'link',  // 插入链接
                'list',  // 列表
                'image',  // 插入图片
            ];
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
```
更多详细使用文档请详细参考 wangeditor官方文档  
<a href="https://www.kancloud.cn/wangfupeng/wangeditor3/332599" target="_blan">wangeditor官方文档</a>
#### 贴别鸣谢  
* <a href="http://www.wangeditor.com/" target="_blan">wangeditor</a>
* <a href="https://ant.design" target="_blan">antd.design</a>  
* <a href="https://antdv.com" target="_blan">antd-design-vue</a> 

