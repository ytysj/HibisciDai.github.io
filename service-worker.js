/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","5da91593c1af324a290d086c22817ffa"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","c5c460cbad3446dfa5689e75a1605ca4"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","6431dcc953a0c34a405b96a48a027372"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","f2fc3d3dc624b0b72457c156286122c2"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","9607e0404ee26a0132a673f4163c22b4"],["/2017/02/07/2017-02-07-知识产权/index.html","7396d487027cbc2de3bf897bd714e1f0"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","ba722f08f6bf12bd7f4a6cfb87df6f27"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","642bdf3f131dc8d2d364cf761cc66d25"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","29b8333cb0ec16921b30592a1859e189"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","c9ce7c8e41aac584c5af9c83415f870d"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","e8d0722562e61d3f2a6dd7d3f8c14903"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","55684219389d61582bdc1619d4c8a96c"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","a5d54a43980203009120b8acc8c36374"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","ac48a4bf96b892ef2d37f837c36969c1"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","10f2580b6548ed27d906dd07159232b1"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","6cc8a3cf0ccf1313846af8e2bdcd6734"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","bce5ceaaa7be8522d63e20ca3ea23416"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","3e4130292bd3acb2eb4de2c5cb4bc699"],["/2017/06/19/2017-06-19-Maven/index.html","63b2c386a73be9abac8df92d4f6804db"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","e34f9d57de8a3b1fca3b0d33944fc979"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","37ad69bfb98b243fe70ae83d16674728"],["/2017/07/12/2017-07-12-设计模式初步/index.html","9a8e7e4744f47026fbb47119c2d54577"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","f0c6dbf49cde4f076a2428aeef42db46"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","0ab48177888f945c6a2e08f48b830382"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","3bffe882b8289ffaabfcdb7fffd93402"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","05b96f38494b589cfcbd88660c889dd1"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","9d59c4e5e628fbe1cb084590ec877f8f"],["/2018/03/19/hello-world/index.html","76e913a038028b2b901299e23a0c6324"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","6c53f3ba372f073f27e2b87e2c49af85"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","b42a0ebdf33bbae57fd9fd7246d234a4"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","3eb2d61f696d50cde94f62ada62e06d1"],["/2018/04/02/text-picture/index.html","b88c87575a19626cc21520544fd1265a"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/about/index.html","c95f6b7665995c69b951265c3cf73fcc"],["/archives/2016/06/index.html","9a2a3321faf4a561cd7a610afefdb08a"],["/archives/2016/index.html","e2e4e9627f6eb25a146134171e1ef64a"],["/archives/2017/01/index.html","58cf7202dc4e561f15c30cb83e712a4c"],["/archives/2017/02/index.html","eec454d91395850956f3d9bf876fe6a4"],["/archives/2017/03/index.html","c756728364b01b7aae6a4386fcf5d4e3"],["/archives/2017/04/index.html","3eaf5e7a9972bd2e53324838c73f8b52"],["/archives/2017/05/index.html","9c8146b2d78c73f634499f06c8700319"],["/archives/2017/06/index.html","e5a6e0f9cce6cdb2692f2adc916862d8"],["/archives/2017/07/index.html","2635722670de9ded901f7e6ee7c13544"],["/archives/2017/11/index.html","b116f701738ba9b3467b64c563194e94"],["/archives/2017/12/index.html","ff63004da51491d97109de522a789fcf"],["/archives/2017/index.html","e64a6d9c3aedcda9421a54d6f432c32c"],["/archives/2017/page/2/index.html","49cce5d448c22786bb98b45785a1f7f8"],["/archives/2017/page/3/index.html","49176ae142c94065f2a8a6d62eec3d49"],["/archives/2018/01/index.html","72ada4ce9491b36a86b69279a36cc966"],["/archives/2018/03/index.html","03cae1799a6aaa61c79a21279ba5bf87"],["/archives/2018/04/index.html","514af088d29900377f32a36dc27b5505"],["/archives/2018/index.html","9011644e2044992799a9ca7cb535c150"],["/archives/index.html","8ac3ed7013ecc89d4c2c9b409829c7a0"],["/archives/page/2/index.html","c248936b253a35e0d7079b161efb93e6"],["/archives/page/3/index.html","e5e1c99961d7a620671c904875c78421"],["/archives/page/4/index.html","70d062a809c549d6482bd8c7b6d814a3"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","c1956c89fcd1599c8beb64931f9ff55f"],["/categories/index.html","432ce5b3a84f45462ed9b155cec057c4"],["/categories/前端/index.html","c008865289f008123808cf03bff351c0"],["/categories/后台/index.html","963fecaef1d33e4767d25d509d191d24"],["/categories/知识产权/index.html","fe10293ca68b92cf0a362791091cf88e"],["/categories/硬件/index.html","3ccc883f7ce987212f199a84485adc1c"],["/categories/神经网络风/index.html","711f6f76222efff018123f6e0654ca60"],["/categories/算法/index.html","53815d1d39fca7d3e249f3b81e1ce334"],["/categories/计算机基础/index.html","f5dfd1d1956b9b9ebcefab5ba9709ceb"],["/categories/设计模式/index.html","7951df943ede5987a3cb1e5ced819948"],["/categories/软件/index.html","a7f637c39c67aff328f632bea16eb4d1"],["/categories/默认分类/index.html","c7a69a94ea2822b156a463932e8b1b97"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","c082c7a835ab05fb3b9ea1e46257e7ad"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","22c25761693ce692f4872e5a5c9b325f"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","f4fbc04cfef4ee3f359197c5493174ba"],["/page/3/index.html","af08cdeca458e0815179e668936159b3"],["/page/4/index.html","db2c8713e1b5d75229bd2314cef29a71"],["/tags/Ajax/index.html","0e159dacc96ab2a4867dfe5cae10588a"],["/tags/JAVA/index.html","34ed43ec179b57e78c284ee99743d0b2"],["/tags/JVM/index.html","390b8d35e3b6c03e8853bb003830ab9a"],["/tags/JavaScript/index.html","5be8891abda78c31ee4e1cf4845ef594"],["/tags/Jquery/index.html","edeb53f4df95736ce94b469f780e2b5f"],["/tags/Maven/index.html","9efe36c3a9dbc19cb2aa9cb05dc11219"],["/tags/MyBatis/index.html","e4a6ecab32fee14985ee766d7683ea8d"],["/tags/OJ练习题/index.html","2ee9f99350873b71ffcf6029f353b51c"],["/tags/Struts2/index.html","0544c9a8dc61a42a1fb4143b79ca4f0c"],["/tags/hexo/index.html","8582b721b7e7132e17fa2ee4c63f9134"],["/tags/index.html","0c85386d814037abf4bb5eaa6b94d4d0"],["/tags/南阳OJ/index.html","4c02cd096c5aec5f5c21ded7b15ad319"],["/tags/博客搭建过程/index.html","1a8632266421cdc755a3aa814479ce76"],["/tags/反射/index.html","c89d0b9084d29d8a15f1e872c30c7e14"],["/tags/技术/index.html","3185476493aa4042c6163b3feda7beb3"],["/tags/操作系统/index.html","98ab1d3c70ca0cd504735af58428997e"],["/tags/框架/index.html","996a1a654d912262aceb6305c9585cf2"],["/tags/测试/index.html","15e0094eae8be8f26fcf0c591b05ecc1"],["/tags/知识产权/index.html","f9ccc86aa6272f2781de10ce017be7d4"],["/tags/硬件/index.html","48a7cf487fba1e78cc2625e7d8860255"],["/tags/神经网络风格画/index.html","18c4b8626deab4d92d43a5602248e86b"],["/tags/算法/index.html","00825657ec7c77af6a6fe2f774f767d0"],["/tags/计算机基础/index.html","56d7bdcfa698086837ab0f86b535b863"],["/tags/设计模式/index.html","96f7fd0a16d120d99eaf70ba1b3256b6"],["/tags/路由器/index.html","747e37ac349bb96c899cb46b3cfe8aa5"],["/tags/软件/index.html","3b87e02ccca0d5f8546ba494e13329be"],["/tags/锐捷/index.html","64c8f1f54df60e8fde67a66ff452b941"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







