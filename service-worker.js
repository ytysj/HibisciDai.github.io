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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","8f81dd902172115f0bacd29283d1ec65"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","4c44522fee29b823ee58e117a4131b23"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","3c3020a8d7b5a173cca1db544754054a"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","2d0aae44fe501b8247610236ab2a7a88"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","d5cccbca1d648d802cdf6fa90b3c5694"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","b34c167c9413f692c3d915dd21f6efa3"],["/2017/02/07/2017-02-07-知识产权/index.html","891c16b6f4a37172a3aecfe00ea23b4f"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","2c092146229e434ec0ac1deeae68bee1"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","a6f32145a1361789aa35ff4a433e8717"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","09513b6900dc9657720537a2b78a5298"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","87eb5978cdc8b6528394645a2c0c64f4"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","e1a7a71311e6aa2678644241cc690967"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","08508ff5b04ffe1f51979e1859c5c121"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","1a3bfc1d11e47f15bac2390ee3abd1bd"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","c2c6eb0f61f095eecbeb686d09e861c2"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","365c7390b2691260adda7d80acabd664"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","bd7d8ee8c99a0eaabaf1c54ab6f13dd2"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","e438ac46a414465677f3a00fa44bcb42"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","869ec3e25985d767a26eddccb3eea09c"],["/2017/06/19/2017-06-19-Maven/index.html","ba3c361152c51bc88fe6dbccdc6218ba"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","979b910816f6c8c6b826c5023410b51d"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","a22f70a8920572dd0e197490328a9f74"],["/2017/07/12/2017-07-12-设计模式初步/index.html","e330443cd1d75ed9bd6a8b993a4dbc03"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","5a4d1b71235f54236f486a56bd779bfe"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","3410ea55912175a8edda5c5a9a9350b7"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","5a9b5cccd62f1a017fb4b113d245cee9"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","86e2ce39cebacb5727e2ae13f90cea91"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","e469e370da88e74b761922cc87be4878"],["/2018/03/19/hello-world/index.html","90106de231b9793ff584f99352f1098c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","8558c274558f86acb1a8f70f6e741b6b"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","e815a6d5f455d6c1d2cd56d747e1edc2"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","bcb75d41137b12fa1ef3ad1e0312e2ae"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","ab0f790684e43e4b4166180018331cc9"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","81d54973032533fa3761783428701733"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/about/index.html","bafd2b1dba626e78a66c15249e8366da"],["/archives/2016/06/index.html","c68f84982f477cd1a7f310842fe20038"],["/archives/2016/index.html","b311a192a98dab255c9d567fbbc6e2fd"],["/archives/2017/01/index.html","85a56d6d4333b0645f92669bf11895a4"],["/archives/2017/02/index.html","a1394e1a2f0e61d475dde368f548f6ae"],["/archives/2017/03/index.html","f87f83e42563f2ce979da7a44cee2744"],["/archives/2017/04/index.html","5881de1ec87dbeff7b1a878a73f739d0"],["/archives/2017/05/index.html","2f55ce240635d301d2282de7d3db736d"],["/archives/2017/06/index.html","b8290c43ac3e6634ac9addfe146a710c"],["/archives/2017/07/index.html","3c9367f9fc1775c425f156a76018ccb5"],["/archives/2017/11/index.html","2544a3458c73dce19a598d9c4011d4ef"],["/archives/2017/12/index.html","861e3200ffe393d849c74ff135f0dd62"],["/archives/2017/index.html","f6cc7590e143d3a6b41b6f4cd8e4f5e1"],["/archives/2017/page/2/index.html","962bb0304148f524bcab735af47a7527"],["/archives/2017/page/3/index.html","a9c53dbe1fcc0c566a8cc19a405906eb"],["/archives/2018/01/index.html","818393ab1973eb45e442688072184d85"],["/archives/2018/03/index.html","69d8a8c81b06bf26e5d30c37106014a1"],["/archives/2018/04/index.html","69d4bd8d1a0a33032ff2b39d91d03cd4"],["/archives/2018/index.html","321197a5f21f251ce56bc272cc803642"],["/archives/index.html","d39c1e3e643b1ede6c2f5a6df7329c3b"],["/archives/page/2/index.html","d04d1325d60b4c02f48d64cf64ff1111"],["/archives/page/3/index.html","accefda1d3308d9827d54c1fdd92fd7f"],["/archives/page/4/index.html","6ba34cd0bac163bbc140ee05c551a2fe"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","13db4462ab702438645a55bf2e2a754b"],["/categories/index.html","7ce5c09d6bc8a35fd5072127004a7f5c"],["/categories/前端/index.html","67ba515c95666e8e5f60731ec3c60269"],["/categories/后台/index.html","811da39fc75928b94222d03a7505996b"],["/categories/架构框架/index.html","27e675cf1dff517422996cfd2f072837"],["/categories/知识产权/index.html","0260f51a7230fe3b3ca5cfd303f26c57"],["/categories/硬件/index.html","57ebc478ea47a98c0204bf6e7f46b770"],["/categories/神经网络风/index.html","6ee521771f9d730e4ed7690fbd31090d"],["/categories/算法/index.html","5e81229bb2cda3550bdfbe0fb5f4cbe8"],["/categories/计算机基础/index.html","f5aafd94bd7519f6683bead2ac61ce7d"],["/categories/计算机网络/index.html","f7e6b94db321c60f055ebaa908ea0fc7"],["/categories/设计模式/index.html","06e31c52c9af281c746808bf3ee0b696"],["/categories/软件/index.html","eefe388b1313ba2de9b633aeb58308f2"],["/categories/默认分类/index.html","8cc10969d3cd56b2289103968db478e4"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","9b6ee66aaeb71b6bcfbe912dc2ae87fb"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","ce3afceef4578bcbc3be61cb0f30de65"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","16c7d7b13fb8472e7414c3c8a2591aa1"],["/page/3/index.html","e63b556266422ae601f046d3a5f09df3"],["/page/4/index.html","ddb7df280309d9ddfa45492f867fad20"],["/tags/Ajax/index.html","efebbc311c868240aadd590af7af9109"],["/tags/JAVA/index.html","0ec0e802cc78bffa879bf5065063538c"],["/tags/JVM/index.html","563a0560323907dfbaec49044b8c489d"],["/tags/JavaScript/index.html","e16e551ea2ed326f9bb649c26635c000"],["/tags/Jquery/index.html","8ef2ad6952afd16ed01a0e53ade448b7"],["/tags/Maven/index.html","e596cab0c1643b145c984e1c5a81caf2"],["/tags/Mongodb/index.html","6bd180bfdc96f1023e41fed7f7daf136"],["/tags/MyBatis/index.html","7b5c8a0e7f6e509e82b92dfea689685f"],["/tags/OJ练习题/index.html","4b7be7772e90ded2546608ac84c60aa3"],["/tags/Shadowsocks/index.html","8ea1c12fa619965e9de0b80deade24ce"],["/tags/Struts2/index.html","446141b2c662511485c79833065e3974"],["/tags/VPN/index.html","e3b0c2cec5a287c8cc3b6b83ba59534f"],["/tags/VPS/index.html","a520a3c7bca8c27ef2d13aa335e0a77f"],["/tags/hexo/index.html","23f28a15940a68b408b5b73e32a9dc8f"],["/tags/index.html","d963c10bf805a5ac26f07465ecd9dc6a"],["/tags/南阳OJ/index.html","195313d3bfd19e3503ddd84e1cf5ca01"],["/tags/博客搭建过程/index.html","db6dd7089d0977a10a952df2a42a2a29"],["/tags/反射/index.html","d4050570bc8955a7c101e73f649b503e"],["/tags/技术/index.html","18dfcdaa1ddcfac6bed6ff1da25225b2"],["/tags/操作系统/index.html","c38e0d5d91a51ce7a2b21724b19ab36d"],["/tags/框架/index.html","e68d0daa30ca320f0fce6d0a37c46d22"],["/tags/测试/index.html","21bc80d3a8578f1105556db4f2d18f3c"],["/tags/知识产权/index.html","87e1b045c1473359126a90a6b17f84aa"],["/tags/硬件/index.html","f830278dc4d1c3ef0abfa93c2bd65a0d"],["/tags/神经网络风格画/index.html","1ba55783f16e0a2d2d0a4e772cf8c7be"],["/tags/算法/index.html","f4bdcf8d6c57bb6f87683fb79aead447"],["/tags/翻墙/index.html","bfe542e5d2ca171e27573d242e40ee77"],["/tags/计算机基础/index.html","88f02a0ed2cf3f831a96130558406f0d"],["/tags/设计模式/index.html","7a7ea0f0ea597ae39935e2961bde63cb"],["/tags/路由器/index.html","d4f9698a02c09fb00260d19d3f30e7b4"],["/tags/软件/index.html","9d517755c5d80ee08c54a18071cc525e"],["/tags/锐捷/index.html","f32272f6c7fb530ad4d98ff0f14c9fd8"],["/tags/集群/index.html","df88b57fb84c1ed162f342275794071f"]];
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







