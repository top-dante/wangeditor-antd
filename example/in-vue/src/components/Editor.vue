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
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'fontSize',  // 字号
                'fontName',  // 字体
                'italic',  // 斜体
                'underline',  // 下划线
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'image',  // 插入图片
                'table',  // 表格
                'video',  // 插入视频
                'undo',  // 撤销
                'redo'  // 重复
            ];
            editor.create();
            //如果默认传递content值则渲染默认内容
            if(this.content){
                editor.txt.html(this.content)
            }
        }
    }
</script>