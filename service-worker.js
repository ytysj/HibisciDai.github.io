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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","629558a0f0533fb8d3b2e9f8d5e937a1"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","612f86cf8e5400cf1ca57bc80dd83182"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","d70f2bf8beed7b5a452222c59d8c7921"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","3685c2730c4c685765db279ab4828926"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","99010e073aa187465f1c5ed55b323cb1"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","b5ec0ba2ceba5efe000448b870e0ee3e"],["/2017/02/07/2017-02-07-知识产权/index.html","fcdd12eb833cdcb6bda240fb98f672c3"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","0cd6b3553e8e8e03001ca0b0949558bc"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","17a10f8ea7532fdb89866833f57b4580"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","f252f66234e1bb623094bf30899dfe7f"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","91c1068eef24c0d5cacbd980166e1ba4"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","5ac0a9f41478c58e9d5b5ff1ee39a4ee"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","5118f5f47e0e7c2b30e4077186af0d48"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","ba29412a651d198995cd0e20c051184f"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","1751bb5382b79ae775f0877cf074c482"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","5c359c50a4e9bedc0b32f19caf6b3652"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","ec51743afad24fdf0473664e074da801"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","082b462f5c17710275e6cc61eadd9d9c"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","6ba16a98ea45c7f08e49046646cd89b3"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","076df1e40435d05af768f6961aaf1dcc"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","5886fdb1a09a19fe72051374c303d585"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","37b66f944c3bc84e6cb7b9cdd0977fe2"],["/2017/07/12/2017-07-12-设计模式初步/index.html","bc4ebf452bb075e940af11979774c3a0"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","996095e87a38eb4f0e962aa005e59de9"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","ac73ede60afa974087794aeea40595bd"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","317e4afd3162d6e2284f99c883f04e9a"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","c0ef2cc5f4640aed60b76098d48bd4c8"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","e6dab55d4b1cd7cde648fc7946665865"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","d1b4447f598ced8d0aa4bd40f4be9d21"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","fd483d2f9e32e328f99322f54314a950"],["/2018/03/19/hello-world/index.html","dbe3eb7afef1baa9377b12224352a79d"],["/2018/03/21/设计模式-03-工厂模式/index.html","44144981c14afe710203ec3bb726285e"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","09cb77b943bb9d1a1c4abd57891c01fa"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","146fde2fb67697a592a589397088c1b6"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","483ff9365846dae9e255150889219899"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","324949fa9d64328730cad037b474fc58"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","f283c071a653188cf957836c2f36e488"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","90afc1c8b13b035f6d406f4f25c86ddc"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","acb4f09d4250b2809005523172056e72"],["/about/index.html","aeb182b643f1c1471bb6d1edac2dbbf7"],["/archives/2016/06/index.html","4cde9dc05145e26c468e5c98f3e4555b"],["/archives/2016/index.html","41f0c2655c274cb1971016fa51fa8831"],["/archives/2017/01/index.html","1c5d450f512320697930f40932187342"],["/archives/2017/02/index.html","447413631f8f71b27df7fdc5b380e346"],["/archives/2017/03/index.html","991f484853a466d351389061b8933cce"],["/archives/2017/04/index.html","1cc261d7389387d4bf6e9b8f26abf6ee"],["/archives/2017/05/index.html","2dccb327631228836be1e228d8c3c219"],["/archives/2017/06/index.html","ca92b37a1ca361930c8f4250a9355992"],["/archives/2017/07/index.html","aa506251c884e7940469f6ca4c07c64d"],["/archives/2017/11/index.html","08d290d018314f13afc182479c81af16"],["/archives/2017/12/index.html","8ac66653f375b2d6e154991a5884333b"],["/archives/2017/index.html","1fdcb2a58fb7a051b1dc794b89f979ff"],["/archives/2017/page/2/index.html","773236abf2cfbbd107ffd11e509e527f"],["/archives/2017/page/3/index.html","64a3ecfddc3507b43b0d4a963e68c42f"],["/archives/2018/01/index.html","ff665ae612772acc4043037f91f76abc"],["/archives/2018/03/index.html","3941a02f0e55c535567e6b31684de90b"],["/archives/2018/04/index.html","cee0279710df142baf947daed1fb71cc"],["/archives/2018/05/index.html","6b9a1b4f588eef2cd6ea5eefde0fc62f"],["/archives/2018/index.html","ff62b554d0730956f230bc1a67806c9b"],["/archives/2018/page/2/index.html","cab776b2c7ae8220ccc5c38fad22b984"],["/archives/index.html","fe864c26d80e88a9f78051d3603a3534"],["/archives/page/2/index.html","a4244e81a10dbc82e3a56d49e5905dd1"],["/archives/page/3/index.html","e37c5dd3f63648e0175dd110e2435ab7"],["/archives/page/4/index.html","a0cc94816bce13e4e83372826e0f18fa"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","932f8340fb10ce876f2b46b10f9c81e4"],["/categories/index.html","520d1043f19e5962e1ade892a626cde2"],["/categories/前端/index.html","c55238008eb85ed62e1e9b966b79d582"],["/categories/后台/index.html","498bd5b373b242b853956fd9e0cbd9a8"],["/categories/架构框架/index.html","05e4e0b3e9627619d4a2ba0e596647f6"],["/categories/框架/index.html","c7780359a01b8830e947a6afc079abd2"],["/categories/知识产权/index.html","9b3d8fd63f6154f0c9c1cac43bccaeac"],["/categories/硬件/index.html","d6e53b2a6ad2dcc67c4ae034bdf80827"],["/categories/神经网络风/index.html","2fff082d53f75db7977b60a47db4db1a"],["/categories/算法/index.html","bb72fb9557a33bf9ef393e959865583e"],["/categories/计算机基础/index.html","214729928fc4a7b3c679248e5961c356"],["/categories/计算机网络/index.html","55e2e03f612f3377ae61217d51d58604"],["/categories/设计模式/index.html","4b1af387eaf2a40df831ee0d92e50409"],["/categories/软件/index.html","09d38fb32d61b3b614ab4ccedcbd9ab0"],["/categories/默认分类/index.html","ea77f64930c8a924ef4231312830c166"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","7419d27aad7d772345508820c57462f3"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery15.jpg","cf27c69f2b91f14e191861c212245c6d"],["/gallery/index/gallery16.jpg","0cab00106173c18bdb67e5bb340e30e4"],["/gallery/index/gallery17.jpg","51ebddb8eaf5c261b040f49729a0655f"],["/gallery/index/gallery18.png","2eacd2ea3794f3e6465bea6c1f444cf6"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","1933ba3bb7713ada40aa0ce09641d3a0"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","df406379037ebcffe6da22f5c5fef68e"],["/page/3/index.html","9a8b173d8a0356a53116da9264af9c73"],["/page/4/index.html","0be8435736831cb3307eec2cfc8e1267"],["/tags/Ajax/index.html","e492db1433187a02d9246fb35769db8b"],["/tags/JAVA/index.html","4e669814f0b645847aa6ba9eecb217f6"],["/tags/JVM/index.html","3abb959426d57c1f4bd9f7b7034f8d74"],["/tags/JavaScript/index.html","fcf9070a5609cebc28b4ac12378ff576"],["/tags/Jquery/index.html","df349a7cd1d1f48e8f9eabe304c84171"],["/tags/Maven/index.html","ff3249ad08d94e2047620a86fe1ce068"],["/tags/Mongodb/index.html","8869bbe18a6315608a1a1165a6a6e9fd"],["/tags/MyBatis/index.html","811b5576e2c0d26b30470d6a166607e2"],["/tags/OJ练习题/index.html","504c7e303589a0102722ed78de0e6b0c"],["/tags/Shadowsocks/index.html","d973500dd9457bfe8e8094d25a197ea5"],["/tags/Spring/index.html","d4b040ca43e67559345e153a99d87317"],["/tags/Struts2/index.html","0677d8aec6289bc4ac7d45a4316eeba8"],["/tags/VPN/index.html","f134b1306c6d25e28f4772df54a0dd1c"],["/tags/VPS/index.html","01669edafc6ef1ce13f782720591b3ae"],["/tags/hexo/index.html","39c30c3834a661d54d50bbea12775b37"],["/tags/index.html","5bd353ae36d0c9d6c50897e0a75520bb"],["/tags/南阳OJ/index.html","5a3beab6d4770ff6a60ca69907eba390"],["/tags/博客搭建过程/index.html","522f31ccc48e0974a52138e3e7f05e5b"],["/tags/反射/index.html","d47cab17e0bcf498ffdf9b6739e88f6e"],["/tags/学习笔记/index.html","1ad07b9605f2f69633552880dde923ed"],["/tags/技术/index.html","b5391307f3cc7a97e5063b11b1ec01ee"],["/tags/操作系统/index.html","dc10a5ed6c6bc64fe1de2c9d5cb1ab4b"],["/tags/框架/index.html","a1121b3e1e4cbb0a8659d7de286efa2e"],["/tags/测试/index.html","70e39feeb64911d04070c7c36bd666de"],["/tags/知识产权/index.html","ac97320be3a0b0ff6226ab3d566e1178"],["/tags/硬件/index.html","caafb9207b0d5894b115da40bad99edb"],["/tags/神经网络风格画/index.html","36668e0b7574169451a4d627224213fd"],["/tags/算法/index.html","3403d3b0162f7d6fd91cfa7e112533a8"],["/tags/翻墙/index.html","544f9ff0db52e7314de97728fd2e0d9d"],["/tags/计算机基础/index.html","d3683725a1d122fb9467000876498027"],["/tags/设计模式/index.html","077744fae7dbf0fb5b812a1cdf6bf692"],["/tags/路由器/index.html","7ef3885ef8a0e8bcbb9ce27a46f1b0d1"],["/tags/软件/index.html","b00f90673fb7ae78893753b43bf3d47a"],["/tags/锐捷/index.html","2340f9dc8293a498867cd0e578ee0d66"],["/tags/集群/index.html","aa19cc2f4f7a85dd4c883ab851781613"]];
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







