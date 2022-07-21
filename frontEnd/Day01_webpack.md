# Day01

## 今日学习目标

1. 能够理解webpack基本概念和作用

2. 能够掌握webpack使用步骤

3. 能够使用webpack相关配置

4. 能够使用webpack开发服务器

5. 能够查阅使用webpack中文文档



## 0.思考

![image-20220613104709974](images/image-20220613104709974.png)



**问题：第一个文件是正常的jq文件，第二个是min版本的jq文件，那jq.js 如何转换成 jq.min.js**

1. 手动操作，可行性高吗？？

2. 有没有一种自动整合, 压缩, 剔除无用代码技术?

   

## 1. webpack基本概念

webpack 官方文档：https://webpack.docschina.org/

> `webpack`概念/作用

### 1.1. 简介

webpack本质上就是，<span style="color:red;">**node的一个第三方模块包, 用于分析，打包代码的**</span>。

>类似于moment.js(node的第三方模块包，作用是格式化时间)，webpack 也是 node 一个 第三方包， 只是webpack的功能是用于打包的。

> 第三方即是非官方提供的

### 1.2. webpack的作用

- 支持所有类型文件的打包

  <img src="images/image-20210207234927772.png" alt="image-20210207234927772" style="zoom:50%;" />

- 把很多文件打包整合到一起, 缩小项目体积, 提高加载速度

<img src="images/image-20220613112423453.png" alt="image-20220613112423453" style="zoom: 33%;" />

其中功能:

* less/sass -> css

  <img src="images/image-20211102203123639.png" alt="image-20211102203123639" style="zoom: 33%;" />

* ES6/7/8 -> ES5 处理js兼容

* 支持js模块化

* 处理css兼容性

* html/css/js -> 压缩合并，提高加载速度

### 1.3 小结

webpack 是一个 <span style="color:red">**node的第三方模块包，作用是分析代码,压缩,打包代码**</span>

### 1.4 与后续vue课程联系

 为要学的 vue-cli 开发环境做铺垫

<img src="images/image-20220613223646965.png" alt="image-20220613223646965" style="zoom: 25%;" />

## 2. webpack 基本使用(***)

### 2.0 准备项目

> 注意：<span style="color:red;"> **webpack项目目录结构** </span>和 我们之间的 目录结构规范是不一样的。

- 根目录下创建一个 public 文件夹， public 下 创建一个index.html

- 根目录下创建一个 src 文件夹, 放业务代码

> 这是一个共识，我们只需要按这个要求去做即可



**初始化项目开始**

1. 根目录创建public

+ 创建index.html

  ```html
  <body>
    <div id="swiper">轮播图</div>
    <div>tabs标签页</div>
  </body>
  
  <script src="../src/index.js"></script>
  ```

2.创建src存放代码资源文件

+ 创建index.js

  ```js
  // 轮播图逻辑
  console.log('实现轮播图的业务逻辑')
  // tab栏切换的逻辑
  console.log('实现tabs标签页的逻辑')
  ```

+ 将业务进行拆分

  + 创建banner.js

    ```js
    // 轮播图逻辑
    console.log('实现轮播图的业务逻辑')
    ```
  
  + 创建tabs.js
  
    ```js
    // tab栏切换的逻辑
    console.log('实现tabs标签页的逻辑')
    ```

  + index.html中引入
  
    ```html
    <body>
     	<div id="swiper">轮播图</div>
      <div>tabs标签页</div>
    </body>
    <script src="../src/banner.js"></script>
    <script src="../src/tabs.js"></script>
    ```

存在问题：需要在index.html 页面 引入很多js，会导致页面加载速度过慢

### 2.1 解决多次引入资源文件

+ 在index.js中引入banner.js和tabs.js

  ```js
  import './banner.js'
  import './tabs.js'
  ```

+ index.html中引入index.js

  ```html
  <body>
    <div id="swiper">轮播图</div>
    <div>tabs标签页</div>
  </body>
  <script src="../src/index.js"></script>
  ```

+ 报错

  ![image-20211102212233955](images/image-20211102212233955.png)

错误解析：

import 是 es6 里模块(Module)加载的语法, html文件加载js代码是通过 script 标签， script 标签的type值 默认属性

是'text/javascript'，当前这个script 是非模块，在非模块里是无法识别 es6 模块的语法的，现在这种情况下 说明

对js模块化支持的不好。



### 2.2 webpack使用(***)

1. 初始化包环境

   ```bash
   yarn init
   ```

2. 安装依赖包

   ```js
   yarn add webpack webpack-cli -D // webpack webpack-cli 第三方模块包
   
   // webpack-cli用于在命令行中运行webpack，cli即命令行接口（Command Line Interface）
   ```

3. 配置scripts(自定义命令)

   ```bash
     "scripts": {
       "build": "webpack"
     }
     // npx
   ```

7. 运行打包命令

   ```js
   yarn build // 打包指令   实际上执行的webpack
   #或者 npm run build
   ```

5. **打包结果分析**(***)

- 打包完成中后，文件默认输出在   根目录下的<span style="color:red;">**dist文件夹下，文件名默认为main.js**</span>
- main.js 里的代码  是经过  整合 压缩 删除无用代码 之后生成的


- webpack 打包的<span style="color:red;">**默认入口文件 src/index.js**</span>（迷宫游戏）

- src  类似于开发环境，dist 是打包之后生成的文件夹，他俩是相互独立的

  ![image-20220616151459435](images/image-20220616151459435.png)

  思考：在刚刚的代码中，新建一个toggle.js, 这个的代码可以被打包进去吗？？？
  
  > 代码想要被打包进入main.js **要与入口文件产生间接和直接的引入关系**
  
  

6. 补充一下

```js
// 补充一下
// yarn add packName // 安装依赖包

// package.json 
// 字段 devDependencies  存放的是 开发环境所需的依赖
// 比如 webpack
 yarn add packName -D
 yarn add packName -dev

// 字段 dependencies  存放的是 开发/生产(不管哪个环境都需要的)环境也所需的依赖
// 比如 echarts
 yarn add packName
 yarn add packName --save
 yarn add packName --save-dev

 yarn add echarts -S
```

<img src="images/image-20220613115923222.png" alt="image-20220613115923222" style="zoom:50%;" />



### 2.3 webpack 更新打包

需求：在基本使用的例子中，引入jq,利用jq 给轮播图div添加给背景颜色

思考一下：我想要jq还需要和之前一样 script 标签引入吗 ？？？ 直接引入jQuery.min.js吗 ？？？

```js
// 安装依赖
yarn add jquery
// OR 
npm i jquery

// jq的使用
// src/mains.js
// 先引入jquery
import $ from 'jquery';
$('#swiper').css('background-color', 'red')

```

重新打包

```bash
yarn build
```

> 总结: 
>
> 1. 代码更新之后， 需要重新打包才可以看效果
>
> 2. src  类似于开发环境，dist 是打包之后生成的文件夹，他俩是相互独立的



### 2.4 webpack基本使用小结

- 环境准备
  - <span style="color:red;">**yarn init (初始化包环境)   安装依赖包   配置scripts(自定义命令)**</span>
- 打包，运行打包命令即可
- <span style="color:red">**webpack 打包 默认 以 src/index.js 为入口的**</span> 
- webpack 打包 完成之后，<span style="color:red;"> **默认 将 文件输出 在 dist的目录下，默认生成的文件 为index.js**</span>  
- src 可以理解成 开发环境， dist 是打包后， 他们两者相互独立



## 3. webpack的配置（***）

webpack 配置文档： https://webpack.docschina.org/concepts/

### 3.0 webpack-入口和出口

#### 3.0.1 概念 

**入口起点(entry point)** 指示 webpack 应该使用哪个模块，来作为打包的开始。

简单理解： 告诉webpack从哪开始打包

默认入口: ./src/index.js ， <span style="color:red;">**可以使用entry属性来配置**</span>



**output** 属性告诉 webpack 在哪里输出它所打包出来的文件，以及如何命名这些文件

简单理解：打包后的文件输出到哪里

默认出口: ./dist/main.js， <span style="color:red;">**可以使用output属性来配置**</span>

入口出口更多细节： https://webpack.docschina.org/concepts/#entry



#### 3.0.1 如何自定以 入口出口

**webpack的默认配置文件 --- webpack.config.js(默认)**

1. 新建src并列处, webpack.config.js
2. 填入配置项

```js
const path = require("path")

module.exports = {
    entry: "./src/main.js", // 入口
    output: { 
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 出口文件名
    }
}
// __dirname 可以用来动态获取当前文件所属目录的绝对路径
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口

// path.resolve(__dirname, "dist"),
// /Users/maohuihui/Desktop/vue-base/code/day_01/03_webpack配置_修改入口和出口/dist
```

3. 修改package.json, 自定义打包命令 - 让webpack使用配置文件

```json
"scripts": {
    "build": "webpack"
},
```

4. 打包观察效果

5. **webpack.config.js**  webpack的默认配置文件

   ```js
   // 修改默认配置文件
   // --config 指定配置文件
   "scripts": {
       "build": "webpack --config webpack.config11.js"   // 修改默认配置文件
       // webpack 运行的默认文件是  webpack.config.js
     },
   ```
   
   

#### 3.0.2 入口出口总结

1. 入口出口 告诉 webpack 打包是从哪里开始  打包后的文件输出到哪里

2. 可以通过<span style="color:red"> **entry 和 output** </span>字段 进行自定义配置（<span style="color:red">**webpack的默认配置文件：webpack.config.js**</span>）

   

### 3.1 打包流程图

![image-20210421125257233](images/image-20210421125257233.png)

> 思考一下： <span style="color: red;">**所有要被打包的资源都要跟入口产生直接/间接的引用关系 对吗**</span> ？？？？



### 3.2 插件-自动生成html文件

插件： <span style="color:red">**扩展webpack其他的能力**</span>

<span style="color:red;">**html-webpack-plugin插件**</span>, 让webpack打包后生成html文件并自动引入打包后的js

  1. 下载插件

     ```
     yarn add html-webpack-plugin  -D
     ```

  2. webpack.config.js配置

     ```js
     // 引入自动生成 html 的插件
     const HtmlWebpackPlugin = require('html-webpack-plugin')
     
     module.exports = {
         // ...省略其他代码
         plugins: [
             new HtmlWebpackPlugin()
         ]
     }
     ```
     
3. 重新打包后观察dist下是否多出html并运行看效果

   <span style="color:red;">**打包后的index.html自动引入打包后的js文件**</span>
   
  4. 自定义打包的html模版，和输出文件名字

     ```js
     plugins: [ // 插件是字段 plugins 里配置
       new HtmlWebpackPlugin({
         template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
         filename: 'index.html' // 生成文件的名称
       })
     ]
     ```

更多细节： [html-webpack-plugin插件地址](https://www.webpackjs.com/plugins/html-webpack-plugin/)

### 3.3. 插件-自动清除dist目录内容

clean-webpack-plugin： 可以自动删除webpack目录下的dist文件

1. 下载插件

   ```js
   yarn add clean-webpack-plugin -D
   ```

2. webpack.config.js配置

   ```js
   const { CleanWebpackPlugin } = require('clean-webpack-plugin');
   
   module.exports = {
     // ... 其他代码省略
     plugins: [
       new CleanWebpackPlugin(), // 删除的是ouput path 里配置的那个输出文件的文件夹
       // 默认情况下dist
     ]
   };
   ```

3. 重新打包后观察dist

更多细节：clean-webpack-plugin的地址：https://npmmirror.com/package/clean-webpack-plugin

### 3.4 mode模式

**如何解决一下警告**

![image-20220613160112828](images/image-20220613160112828.png)

+ mode模式分为开发阶段和发布阶段

+ development 开发阶段，简易打包，打包速度快

+ production 发布阶段，打包精细，打包速度慢（但是没关系不会经常production）

  ```js
  mode: 'development || production' || 'none'
  ```

  更多细节：https://webpack.docschina.org/configuration/mode/
  
  

### 3.4 webpack开发服务器-为何学?

抛出问题: 每次修改代码, 都需要重新打包，重新刷新页面，才可以看到效果，有没有 一个实时刷新的工具呢？每次打包的时间消耗比较长？？？

有： <span style="color:red;">**webpack-dev-server** </span>开发服务器   可以完美解决

webpack-dev-server的能力：

可以在本地启一个服务器,  

1. 监听文件的变化，文件发生改变，会自动重新打包。
2. 打包的内容会缓存在内存中， 文件修改的时候，重新打包只会打修改过的文件，其他的直接从缓存里拿。
3. 会把打包的结果直接展示在浏览器上

文档地址: https://webpack.docschina.org/configuration/dev-server/



### 3.5 webpack-dev-server

> 目标: 启动本地服务, 可实时更新修改的代码, 打包**变化代码**到内存中, 然后直接提供端口和网页访问

1. 下载包

   ```bash
   yarn add webpack-dev-server -D
   ```

2. 配置自定义命令

   ```js
   scripts: {
   	"build": "webpack",
   	"serve": "webpack serve"
   }
   ```

3. 运行命令-启动webpack开发服务器

   ```bash
   yarn serve
   #或者 npm run serve
   ```

> 总结: 以后改了src下的资源代码, 就会直接更新到内存打包, 然后反馈到浏览器上了

### 3.6 webpack-dev-server配置

1. Package.json

   ```json
   "scripts": {
     "build": "webpack",
     "serve": "webpack serve --port 8083 --open"
   },
   // --port 指定端口号
   // --open 直接在浏览器打开
   ```

   

2. 在webpack.config.js中添加服务器配置

   更多配置参考这里: https://webpack.docschina.org/configuration/dev-server/#devserverafter

   ```js
   module.exports = {
       // ...其他配置
       devServer: {
         port: 3000, // 端口号
         open: true
       }
   }
   ```



### 3.7 加载器 - 处理css文件问题

> 目标: 自己准备css文件, 引入到webpack入口, 测试webpack是否能打包css文件

1.新建 - src/styles/index.css

2.编写样式

```css
#swiper { 
  width: 800px;
  height: 100px; 
  background-color: hotpink; 
  color: '#000'
}
```

3.(重要) 一定要引入到入口才会被webpack打包

4.执行打包命令观察效果

![image-20220616164131546](images/image-20220616164131546.png)

> 总结: 保存原因, 因为webpack默认只能处理js/json类型文件, 其他的类型都处理不了



### 3.8 加载器 - 处理css文件

loader(加载器)： loader 用于对模块的源代码进行转换， 转换成webpack认识的代码， 用于扩展webpack打包能力

>  比如说 他可以把 css的代码 webpack 可以识别的js代码, 这样就可以解决上述问题

更多细节： https://webpack.docschina.org/concepts/loaders/

> 1. 

为了解决css文件的问题，需要用用到两个loader

- style-loader
  - style-loader 作用 可以把css代码插入dom中
  - [style-loader文档](https://webpack.docschina.org/loaders/style-loader/)
- css-loader
  - css-loader 作用 可以把css代码转换webpack可以识别的代码
  - [css-loader文档](https://webpack.docschina.org/loaders/css-loader/)

1. 安装依赖

   ```
   yarn add style-loader css-loader -D
   ```

2. webpack.config.js 配置

   ```js
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
       // ...其他代码
       module: { // loader 加载器 配置在这儿
           rules: [ // loader的规则
             {
               test: /\.css$/, // 匹配所有的css文件
               // loader 执行的顺序： use数组里从右向左运行
               // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
               // 再用 style-loader 将样式, 把css插入到dom中
               use: [ "style-loader", "css-loader"]
             }
           ]
       }
   }
   ```



**总结：**

> 1. loaders加载器, 可让webpack处理其他类型的文件, 打包到js中
> 2. webpack默认只认识 js 文件和 json文件
> 3. css-loader 让webpack能够识别 css 文件的内容并打包
> 4.  style-loader 将样式, 把css插入到dom中

### 3.6 加载less问题

1. 新建less样式

   ```less
    #swiper {
     width: 800px;
     height: 100px;
     background-color: hotpink;
     color: '#000'
   }
   
   ```

2. 引入less样式

   ```less
   import './banner.js';
   import './tab.js';
   
   // import './styles/index.css';
   import './styles/index.less';
   ```

3. 报错

   ![image-20220616170623277](images/image-20220616170623277.png)

### 3.7 加载器 - 处理less文件

> 目标: less-loader让webpack处理less文件, less模块翻译less代码, 转换成css代码

[less-loader文档](https://webpack.docschina.org/loaders/less-loader/)

1. 安装 less-loader

   ```js
   yarn add less less-loader -D
   ```

2. webpack.config.js 配置

   ```js
   module: {
     rules: [ // loader的规则
       // ...省略其他
       {
       	test: /\.less$/, // 匹配执行类型的文件
       	// 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
         // 执行的顺序 less-loader css-loader style-loader
         // less-loader 先把less代码转换成css
         // css-loader 再把css代码转换成webpack 可以识别的js代码
         // style-loader 在把css代码插入到 dom中
           use: [ "style-loader", "css-loader", 'less-loader']
       }
     ]
   }
   ```

### 3.8 加载器 - 图片问题

图片问题 从两个角度： 1. css 里引用图片 2. js 里引用图片

 **css 里引用图片**

1. 通过样式设置背景图

   ```css
   // 给body添加一个背景图片
   body{
     background: url("../assets/logo_small.png") no-repeat center;
   }
   ```

打包结果：可以正常运行，会对css里的图片进行拷贝，放在dist目录下

> css-loader对css中引用的图片进行了处理

<img src="images/image-20220616201527374.png" alt="image-20220616201527374" style="zoom:50%;" />

- 图片很多的时候，会导致http请求过多，会过度占用服务器的资源

2. js 里引用图片

   ```js
   // index.js
   import imgUrl from './assets/1.gif';
   
   let img = document.createElement('img');
   img.src = imgUrl;
   document.body.appendChild(img);
   ```

   ![image-20220616204229618](images/image-20220616204229618.png)

> 报错正常，webpack 只可以识别 js 和 json 的文件



### 3.9 加载器 - 处理图片

> 目标: 用asset module方式(webpack5版本新增)

更多细节： [asset module文档](https://webpack.docschina.org/guides/asset-modules/)

#### **3.9.1 webpack4**

如果你用的是webpack4及以前的, 请使用者里的配置**作为了解**

[url-loader文档](https://webpack.docschina.org/loaders/url-loader/)

url-loader 会将引入的图片编码，生成dataURl并将其打包到文件中，最终只需要引入这个dataURL就能访问图片了。

> 会讲图片转换成based64

[file-loader文档](https://webpack.docschina.org/loaders/file-loader/)

file-loader  能够根据配置项复制使用到的资源到构建之后的文件夹，并且能够更改对应的链接。

> 直接复制资源

1. 下载依赖包

   ```bash
   yarn add url-loader file-loader -D
   ```

2. webpack.config.js 配置

   ```js
   {
     test: /\.(png|jpg|gif|jpeg)$/li,
     use: [
       {
         loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
         // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
         options: { // 针对于loader的配置
           limit: 8 * 1024,
         },
       },
     ],
   }
   ```

3. src/assets/准备老师发的2个图文件

4. 在css/less/index.less - 把小图片用做背景图

   ```less
   body{
     background: url("../assets/logo_small.png") no-repeat center;
   }
   ```

5. 在src/main.js - 把大图插入到创建的img标签上, 添加body上显示

   ```js
   // 引入图片-使用
   import imgUrl from './assets/1.gif'
   const theImg = document.createElement("img")
   theImg.src = imgUrl
   document.body.appendChild(theImg)
   ```

6. 打包运行dist/index.html观察2个图片区别

> 总结:  url-loader 把文件转base64 打包进js中, 代码体积会增大, 
>
> file-loader 把文件直接复制输出

#### 3.9.2 webpack5

如果使用的是webpack5版本的, 直接配置在webpack.config.js - 的 rules里即可

```js
{ // 图片文件的配置(仅适用于webpack5版本)
    test: /\.(png|jpg|gif|jpeg)$/i,
    type: 'asset', // 在导出一个 data URI 和发送一个单独的文件之间自动选择
    // 如果你设置的是asset模式
    // 以8KB大小区分图片文件
    // 小于8KB的, 把图片文件转base64, 打包进js中
    // 大于8KB的, 直接把图片文件输出到dist下
      
    // type: 'asset/resource' // 发送一个单独的文件并导出 URL
    // type: 'asset/inline' // 导出一个资源的 data URI
      
      // parser: { // 解析器
      //   dataUrlCondition: {
      //     maxSize: 30 * 1024,
      //   },
      // },

      // generator: {// 生成器
      //   filename: '[hash:6][ext]',
      // },
}
```

打包看效果 yarn build

### 3.10 webpack加载文件优缺点

- 以8kb进行区分，小于8kb图片转成 base64 字符串
  - 好处就是浏览器不用发请求了，直接可以读取
  - 坏处就是如果图片太大，再转`base64`就会让图片的体积增大

### 3.11 加载器 - 处理字体文件

> 目标: 用asset module技术, asset/resource直接输出到dist目录下

1. src/assets/ - 放入字体库fonts文件夹

2. 在main.js引入iconfont.css

   ```js
   // 引入字体图标文件
   import './assets/fonts/iconfont.css'
   ```

3. 在public/index.html使用字体图标样式

   ```html
   <i class="iconfont icon-weixin"></i>
   ```


webpack5使用这个配置,也可以不配置

```js
{ // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    type: 'asset/resource',
    generator: { // 生产器
    	filename: 'font-[name].[hash:6][ext]'
    }
}
```

webpack4及以前使用下面的配置

1. webpack.config.js - 准备配置

   ```js
    { // 处理字体图标的解析
        test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 2 * 1024,
                        // 配置输出的文件名
                        name: '[name].[ext]',
                        // 配置输出的文件目录
                        outputPath: "fonts/"
                    }
                }
            ]
    }
   ```

2. 执行打包命令-观察打包后网页效果


> 总结: url-loader和file-loader 可以打包静态资源文件

### 3.12 加载器 - 处理高版本js语法

1. 在main.js中使用箭头函数(高版本js)

   ```js
   class App {
     static a = 123
   }
   
   console.log(App.a)
   ```

2. 打包后观察lib/bundle.js

> 目标: 让webpack对高版本 的js代码, 降级处理后打包

写代码演示: 高版本的js代码(箭头函数、类), 打包后, 直接原封不动打入了js文件中, 遇到一些低版本的浏览器就会报错

原因: **webpack 默认仅内置了 模块化的 兼容性处理**   `import  export`

babel 的介绍 => 用于处理高版本 js语法 的兼容性  [babel官网](https://www.babeljs.cn/)

解决: 让webpack配合babel-loader 对js语法做处理

**@babel/core：**

@babel/core是babel的核心库，所有的核心Api都在这个库里，这些Api供babel-loader调用

**@babel/preset-env：**

这是一个预设的插件集合，包含了一组相关的插件，Bable中是通过各种插件来指导如何进行代码转换。该插件包含所有es6转化为es5的翻译规则

[babel-loader文档](https://webpack.docschina.org/loaders/babel-loader/)

  1. 安装包

     ```bash
     yarn add -D babel-loader @babel/core @babel/preset-env
     ```

  2. 配置规则

     ```js
     module: {
       rules: [
         {
             test: /\.js$/,
             exclude: /(node_modules)/, // 排除在外 
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                 }
             }
         }
       ]
     }
     ```


> 总结: babel-loader 可以让webpack 对高版本js语法做降级处理后打包

## 今日总结

- [ ] 什么是webpack, 它有什么作用
- [ ] 知道yarn的使用过程, 自定义命令
- [ ] 对webpack各种配置项了解
  - [ ] 入口/出口
  - [ ] 插件
  - [ ] 加载器
  - [ ] mode模式
  - [ ] devServer
- [ ] webpack开发服务器的使用和运作过程

## 今日作业

1. 把课上webpack的配置从0开始, 再过一遍

2. **要求在src下新建一个app.vue文件**, **并在main.js中引入**, **并且打包不报错即可**

   参考文档 https://vue-loader.vuejs.org/zh/guide/#vue-cli

   ```js
   // App.vue
   
   <template>
     <div>App</div>
   </template>
   
   <script>
   export default {};
   </script>
   ```
   
   (4): 打包后运行dist/index.html, 观察是否把vue文件里的标签渲染到页面了
   
3. 代码管理

   - 将代码上传gitte管理 (有关步骤参考笔记)
   - 每实现一个功能, 都git add . 和 git commit -m
   - 将远程仓库设置为公开
   - 上传时候忽略node_modules

4. 做思维导图

