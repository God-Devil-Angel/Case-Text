const gulp = require('gulp');
const htmlmin=require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const less=require('gulp-less');
const csso=require('gulp-csso');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('fist',()=>{
	console.log('第一个gulp任务');
	gulp.src('../01.js').pipe(gulp.dest('./dist/'));
})
gulp.task('htmlmin',()=>{

	console.log('压缩命令');
	gulp.src('./src/*.html')
	.pipe(fileinclude())
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist'));



})

//less转换css压缩任务
gulp.task('less',()=>{
	gulp.src(['./src/css/*.less','./src/css/*.css'])
	//less转css
	.pipe(less())
	//css压缩
	.pipe(csso())
	//输出
	.pipe(gulp.dest('D:/css'));

})

//js任务
gulp.task('jsmin',()=>{

	//获取js文件
	gulp.src('./src/js/*.js')
	//js转换 
	.pipe(babel({
		presets:['@babel/env']
	}))
	//js压缩
	.pipe(uglify())
	//输出
	.pipe(gulp.dest('dist/js'));

})