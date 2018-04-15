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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","2483fae0d18331a0798893b43e1aead7"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","a1094a60992ed825f5f79b1e8265a913"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","4ed20db4d827995654c94fcf2179455c"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","3957236e33d55a5855a8ec23c195ea36"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","a020720f655f766e808fe11689b45437"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","7e40c4998de5b46970adef7d25f0f9e9"],["/2017/02/07/2017-02-07-知识产权/index.html","3a2b8f0ad7a74a42ab24fefedd82ef36"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","7e7b8d337bb47effeacade2bdf6212a3"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","cc874697dd1a3170d62af3487354a2e1"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","9d9d8350707358bf0cd7c5a13f628782"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","c936d96048bf398027b24ce10e7ed6c7"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","674233e66b41842f6c1c319e4535e392"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","70fce0b45fe6d4cff133fc5faffea311"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","85ab82c01887bd5f8402cf4e1c45fc35"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","348cc8838eae8f83bcfe2cc29ebc3536"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","398bbb65efba24d9bce9e4928f9d8a25"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","62e5c7b0613e64a678398b11c61fd93d"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","7e3921ded2c7a8ede350ebac2ca958c3"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","1b7801d35804990593ffb443831a0620"],["/2017/06/19/2017-06-19-Maven/index.html","4a2cc4ce523b50fcacb43cc5accbd756"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","5f38bfe6bdce464118676c37c67f34b0"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","0278cf27405843c33a77a5ddfa872a91"],["/2017/07/12/2017-07-12-设计模式初步/index.html","b3e940704d96b80035645c6cc59ace6f"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","fdfe35ae15ffb697949ab02bdeed7503"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","ac7245ad002320a201be12adcee93b8e"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","7cf3995d27dde9fbcc39edfe3241f43e"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","a6e0606077c3f1ab7d5ace0356210712"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","6faa1b6e3d6de7439426ccb791940c07"],["/2018/03/19/hello-world/index.html","1eb18530e92440a11942c9018cad3a2a"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","7deae40b4d54eb999ae2a7e5657cabd2"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","efad585a22f2538da50dcd2fb62c7d1b"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","690338256f9e296833add0ecd8ac3250"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","6542f05f36c296d435c2501ff95d8899"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/about/index.html","93d2ac20367e03a5f424db35d8741a7e"],["/archives/2016/06/index.html","8d20c2da199041975bbe6e1f38dfd9bd"],["/archives/2016/index.html","beb3f8c4fc786d964529cb12765376bc"],["/archives/2017/01/index.html","34f033a0d77eb9f3dab95ae3c37646ef"],["/archives/2017/02/index.html","f64f6b40f553d08e87bb13273dee930e"],["/archives/2017/03/index.html","74a71c39adf734b63a69376b719d4a5e"],["/archives/2017/04/index.html","a90b3664eb504b89fbc6f5c5a765c1e8"],["/archives/2017/05/index.html","3f1eb4f78e4c99c97c7c4168a953d7f5"],["/archives/2017/06/index.html","a5700ffe8980569a4b5c8d4a8cc6bd99"],["/archives/2017/07/index.html","288c092637a198991b3d8d607c2ca1bd"],["/archives/2017/11/index.html","e9aab9d36ec30c64b8ff13749e3ee120"],["/archives/2017/12/index.html","cf734f87ceb6752c35f489161f768442"],["/archives/2017/index.html","c660a3c925b67cc87a33c4e059efb255"],["/archives/2017/page/2/index.html","c61e72b89b14285cf94543f89ec4c757"],["/archives/2017/page/3/index.html","71ba658668a58cc2af76afbc06ae487d"],["/archives/2018/01/index.html","f4e06d933c5274917a6d9db8e624aeba"],["/archives/2018/03/index.html","f1fdfa1860505bed86dcabc962beb301"],["/archives/2018/04/index.html","a823de3988605106d7a8091181684fb8"],["/archives/2018/index.html","2ec5adf41cfe9af5b6ef839682a1b888"],["/archives/index.html","d725f0ba4f8798dc99e1e030befb41e2"],["/archives/page/2/index.html","64aa3babaf3e9c0c4169b54935ca3339"],["/archives/page/3/index.html","42842885f267cd030f21b22e027c5d7d"],["/archives/page/4/index.html","274419fb49184b2e0dac65f1dbc8b8cb"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","1386804caadacf20b2b316640eba1416"],["/categories/index.html","0197b322e8590e47539783ae747e6017"],["/categories/前端/index.html","b1c0b7cc8b972fcba45e020bbcc28369"],["/categories/后台/index.html","e0089188b63bd6d094f55f5e736ae5cd"],["/categories/知识产权/index.html","ca307b1f225c8c0cdd9d4b28449fb365"],["/categories/硬件/index.html","efb5f6ba757f4f91e9ec1bbbe91d9355"],["/categories/神经网络风/index.html","1d22385271cd5828100f1cfd1f952ee0"],["/categories/算法/index.html","4f123dc59e8fe7daa47e16da0776604c"],["/categories/计算机基础/index.html","8ad41f8adf5636af64c52449ab85ed61"],["/categories/计算机网络/index.html","93797bc49f478e4ad383d452d1f22f4d"],["/categories/设计模式/index.html","0d35639aeed8b4d88226656f23411d57"],["/categories/软件/index.html","4e4bbe344fbe613f5c9dd0e307beded8"],["/categories/默认分类/index.html","2f9df888480d601a68cc9eeec8b08452"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","812789b0bba55948fbe43511f49f07d3"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","642544311a420c6b71adbefb31b1e51a"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","424fdab4d94f4e12492de2e41129e4ac"],["/page/3/index.html","c4e30e802983627b1d0a20f5bc362d31"],["/page/4/index.html","79ec810751287e5c7a23fe7928e327e2"],["/tags/Ajax/index.html","fb0479b5492693a87b56661c3235dabc"],["/tags/JAVA/index.html","62000dd883c72264429727060b7d899d"],["/tags/JVM/index.html","7a31fa32f7fff53af22d41317e8f2450"],["/tags/JavaScript/index.html","7de8c9755f72978049b81372a872f7f2"],["/tags/Jquery/index.html","59822e6dae8fecce7f3f27f5e2702d8e"],["/tags/MyBatis/index.html","bd4e980edc3371b8ff3180cadd623366"],["/tags/OJ练习题/index.html","2c0e6f4976beb60ecd03d9442f9c25ba"],["/tags/Shadowsocks/index.html","1fa21ee50c639c5de394361604845776"],["/tags/Struts2/index.html","114b053011851a4f60c4e8bff258406a"],["/tags/VPN/index.html","b87448122e5723aefc60cda7161d5c39"],["/tags/VPS/index.html","94c06179db8ac93a8e0ffdde5887a6d9"],["/tags/hexo/index.html","f4ee8e2285f658195131421718a9239d"],["/tags/index.html","352d58ef011b64be3b74c2b0afc25d88"],["/tags/maven/index.html","a88b8d09d1a057ee772050a69ee58b7d"],["/tags/南阳OJ/index.html","f366b0c050710864b474ca1d8e990552"],["/tags/博客搭建过程/index.html","de46a821b2f2be9f443ca1c45a6ad781"],["/tags/反射/index.html","88ba235b900b27941a31245487bea7c9"],["/tags/技术/index.html","e3a2bca16016307c84d02b7121cbab2d"],["/tags/操作系统/index.html","19c45b180eff100d5463685958028958"],["/tags/框架/index.html","55f23168556d6994f15db0ff7b471e38"],["/tags/测试/index.html","790fda91f0c21f4466aa1b4963f4f7be"],["/tags/知识产权/index.html","a74d1692d16d8a9b5cc66d4b3489d617"],["/tags/硬件/index.html","74e378b678b16ebbe61592d28e4f795a"],["/tags/神经网络风格画/index.html","64325f00346bd58936171e1d3fe6dee6"],["/tags/算法/index.html","4722916b89dcfa57aab22188d94bb2c6"],["/tags/翻墙/index.html","519c968d8d77b890ceed6e109293373c"],["/tags/计算机基础/index.html","d6ec07a15a9a511d3afdccd7ed56b8a2"],["/tags/设计模式/index.html","9b48e4d278e801178d5ea2f664b3d795"],["/tags/路由器/index.html","72bc90d07132914bbecfa1315489cd25"],["/tags/软件/index.html","3f40cc6d317775739201aba893e8a6b9"],["/tags/锐捷/index.html","d5cd12fb43fa0361008b97dbbfed3c64"]];
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







