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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","a47b5e962dfdaca71c8e134183d767ca"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","7ab0b65c73b604eda6fb11f1566a8d8c"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","f2870a58bd81bac55e1bd262af484483"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","b7046021e6da3d9f254b1959571d4109"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","d9edcd121ea4460ae11d03a9e4d0b2db"],["/2017/02/07/2017-02-07-知识产权/index.html","bd1a1aa717de203310ca211c1a5e70b3"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","687adc53fa2832a55abe732473b6857e"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","9fe6474e2969204ba28f8de42a249113"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","bb4d138dca30c09ba10d5c574da9dfbe"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","8867c3844a0694ba3678e550bb1c461b"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","42b5164e9e392e8d93429548bab26816"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","9b4d9cdf0874ac7d46296323f56ec3d8"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","9b88cb5a3369bd4b268fd17f1ea4b7b9"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","4e03e812b538f767bf391651c0bc7076"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","6408fc7f7796948eadde8f204479404f"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","ca3bb37644f2746a6c7dc4030c208c45"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","e1147492f49d42383f08340364874734"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","a903e45f27a22dfef97658ff57eb7105"],["/2017/06/19/2017-06-19-Maven/index.html","441b466846e6b41d00e772978188e41b"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","56a0471cd05a7217ddb313c52f22004b"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","dc4ec0b744078a3ead90aa8df00c7c32"],["/2017/07/12/2017-07-12-设计模式初步/index.html","bbbfc6aa0b8d62a40ba6585faba185ee"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","8961e89ac28508136792212bd47c5465"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","bb45681ba5168225f92527085e61bc2b"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","4e8cd30be538b7699ee1af81b9ddffe3"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","76103f58f91c52be43ebb83ca925a3e9"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","ce73ceeeb35b9616657ad175ad976fd0"],["/2018/03/19/hello-world/index.html","10026c9d5b9be5b2e6c9039166d12d1a"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","efa01c9570d2c0dbf451a9638ff92343"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","fa953b9c3ac50733c1f3434dec30d359"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","00c79d9e90e85dac7765650fc2dca3b3"],["/2018/04/02/text-picture/index.html","a7ae26f34c7b1530f82e9fa692093b6b"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/about/index.html","40596c43807e9b8ffa508e2ae1464a3e"],["/archives/2016/06/index.html","0df9e9195cd83ff32220800fa06619ec"],["/archives/2016/index.html","5675687e0d0f98862745cce9e82ee0c9"],["/archives/2017/01/index.html","d8a83e2c9e716563cd34abe84ca925c9"],["/archives/2017/02/index.html","bc3229f96b7f5462f65071dd8d2748ff"],["/archives/2017/03/index.html","873a9ce5e28d9d44251b65d497dd57f3"],["/archives/2017/04/index.html","6957d4f5df4d954a25edfadf20b38b89"],["/archives/2017/05/index.html","e7d927f24007bd7ded76b58a241a4299"],["/archives/2017/06/index.html","87eb76ef367500fa054a4e2da488c774"],["/archives/2017/07/index.html","4b1c03ea177ce2e5fb9d949f9dce981b"],["/archives/2017/11/index.html","2418f545475bc17996367fcf05af8ecf"],["/archives/2017/12/index.html","7627d7f30ad224cbf2371f3f9454a42a"],["/archives/2017/index.html","24b87f24140592afa83a3635cd9cad31"],["/archives/2017/page/2/index.html","67f17a734cd8df65f291b08996fadd8d"],["/archives/2017/page/3/index.html","b426859288dfe8244b503a18ee24aa5c"],["/archives/2018/01/index.html","85155fc3f2214b440cfb917d603f8949"],["/archives/2018/03/index.html","da78d6f8e7918673d1725e94cf95d402"],["/archives/2018/04/index.html","51f57a691f5017915359cda2183091ed"],["/archives/2018/index.html","c8fc2612df56330d72036dd9da455e40"],["/archives/index.html","405a7e5aa769eeef833e799236defd56"],["/archives/page/2/index.html","c3581501a85727052d1c88b81b597982"],["/archives/page/3/index.html","d7f1124671f0e498d5782ceba8b41b6c"],["/archives/page/4/index.html","0f51ea763175ae838b3775b4173203fb"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","a5e68b9f377afd8326b9e4b605f4c7cb"],["/categories/index.html","53e04c5c21fb8aa03fb78421b9942953"],["/categories/前端/index.html","bb54855c7a688a684ca033af517e02c0"],["/categories/后台/index.html","24dd29a8c99974fbed546b4cbea6deb8"],["/categories/知识产权/index.html","dcbbf27964c174be90280b1fd3e3b490"],["/categories/硬件/index.html","367cae2bbcce60a7faa3bb1dc91cc109"],["/categories/神经网络风/index.html","7e429edd71970b883c8b03e6c5214388"],["/categories/算法/index.html","bdb5c32343317623d5d87732e92017db"],["/categories/计算机基础/index.html","73883c0518a111c2a2e1226c74a3aefd"],["/categories/设计模式/index.html","66b7495eea50aad13ee05d7dd65fbfaa"],["/categories/软件/index.html","08d087437c7957c9be7f0b8fc2bb207e"],["/categories/默认分类/index.html","dce7882d51e14dcef0c4a2d11b087c85"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","190fa59718018507d69b829b79602f03"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","3fa4f331a537986400d405063cfc9b29"],["/page/3/index.html","7d89a45f5baa7bf906e82664359c6ede"],["/page/4/index.html","d629289c5b1c26060107fb4073ce485e"],["/tags/Ajax/index.html","6c901668749b92a74285b355e7be6cfc"],["/tags/JAVA/index.html","64ce63d90c6b235db3276d26ee9ee0f9"],["/tags/JVM/index.html","dc966b8a823b758040fdeb8a24323567"],["/tags/JavaScript/index.html","c5d9e41da74ce8a25053ba18429c7460"],["/tags/Jquery/index.html","8475e124e982e740d8003c84a9d99bf8"],["/tags/Maven/index.html","c217997bad317e7dbd49516eecea7402"],["/tags/MyBatis/index.html","13b1754971d49c3ac6daaf3c4bff7fa4"],["/tags/OJ练习题/index.html","bebcec686f849f40996fa42d50cfee36"],["/tags/Struts2/index.html","527060781d7c71b4f4835dbe684d50b7"],["/tags/hexo/index.html","531cdac454015b27d1d9b06d88724f7d"],["/tags/index.html","e8579ed47364c95e5ec260c3d912c9ca"],["/tags/南阳OJ/index.html","5006bdf50e50eda2b246ceebf0a39364"],["/tags/博客搭建过程/index.html","4aeecb50e899362a7ad5cdf5bab118ce"],["/tags/反射/index.html","7079d421d7cec3c6ac3391b074db79fa"],["/tags/技术/index.html","ee5f0c7fb0fb65160ecaa87be1741851"],["/tags/操作系统/index.html","110dd0450f44ac39ff731996e871f7b2"],["/tags/框架/index.html","ea226a82c31402faf100ebee74ec85bf"],["/tags/测试/index.html","8e558ab68ec769c2d5d96784c5be74d3"],["/tags/知识产权/index.html","28eb4244d7d972af1eed120ee92325be"],["/tags/硬件/index.html","a5b06dcf0f6159d1b16ae012947c8ac6"],["/tags/神经网络风格画/index.html","f0b4177879e43b95d27d61919b2f3ef9"],["/tags/算法/index.html","0fdc8a6a4f2cfa1cfad6d70972a63b60"],["/tags/计算机基础/index.html","1a5bea0a9d2650a5912f98f4ee0dd142"],["/tags/设计模式/index.html","b1385a3726270ddbf28b167aafef3200"],["/tags/路由器/index.html","d675c56ea7644b3f0265c296e1c03094"],["/tags/软件/index.html","e22492862f5ddcdeaff2f8b78d308da0"],["/tags/锐捷/index.html","35dee5746fd514b9932f86532424aea9"]];
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







