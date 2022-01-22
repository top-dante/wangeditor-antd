const gulp = require('gulp');
const path = require('path')
const fs = require('fs')
const uglify = require('gulp-uglify');
const clean = require('gulp-clean-css');
const {dest}  = require('gulp')
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps')
const resolve = require('rollup-plugin-node-resolve')
const gulpReplace = require('gulp-replace')

//导出fonts
gulp.task('default',()=>{
    gulp.src('./src/fonts/*')
        .pipe(dest('./release/fonts'))
    //导出css和压缩css
    gulp.src('./src/wang-editor-antd.css')
        .pipe(gulpReplace( /'fonts\/antd-icon.woff2'/gm, function (fontFile) {
            fontFile = fontFile.slice(0, -1).slice(1)
            fontFile = fontFile.split('?')[0]
            let ext = fontFile.split('.')[1]
            // 读取文件内容，转换为 base64 格式
            let filePath = path.resolve(__dirname, 'src', fontFile)
            let content = fs.readFileSync(filePath)
            let base64 = content.toString('base64')
            // 返回
            return 'data:application/x-font-' + ext + ';charset=utf-8;base64,' + base64
        }))
        .pipe(dest('./release'))
        .pipe(rename('wang-editor-antd.min.css'))
        .pipe(clean())
        .pipe(dest('./release'));
    //导出js和压缩js
    gulp.src('./src/wang-editor-antd.js')
        .pipe(gulpReplace('__INLINE_CSS__', function () {
            // 读取 css 文件内容
            let filePath = path.resolve(__dirname, 'release', 'wang-editor-antd.min.css')
            let content = fs.readFileSync(filePath).toString('utf-8')
            // 替换 \n \ ' 三个字符
            content = content.replace(/\n/g, '').replace(/\\/g, '\\\\').replace(/'/g, '\\\'')
            return content
        }))
        .pipe(dest('./release'))
        .pipe(rename('wang-editor-antd.min.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write(''))
        .pipe(dest('./release'))

    return new Promise(function(resolve, reject) {
        console.log('gulp default task is success')
        resolve();
    });
});
