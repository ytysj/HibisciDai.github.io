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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","ce18d29724745c981bb951dfa6cdae80"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","7bd4960bd3c8a36ca4b887a0eac59230"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","0a05b5733bea82c7b9075c8af4193383"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","69d0894647fa18bdff4636a7afb7697a"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","fdd79afddcaa9126351dde31681f39ba"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","542338b14378a90d79d5a7b1f40654e6"],["/2017/02/07/2017-02-07-知识产权/index.html","412b18b768aa2ff5694dce881ee7ae13"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","bc64482ca104d97ec6e83bfe1e2e87db"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","665adaa7f8ee0c8a3e02991493b2109c"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","6d5b61f65d0c43bddab3c8b01785e117"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","54e0c0d815f046f0e8b4778b870a64a8"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","5ec5cddb283b3d2ffe7cad7bf04aab7a"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","a71b63ba6804e1a7b59ec7eab71ba510"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","739392b797a477f81f3acc2b0b2d62a6"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","d924a034342413cea44eeabb54ef28d6"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","ffd1ad80acb25ab7ee74cefc514a7370"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","2dc8a6ec3e4ed3a147012df4a045e1bb"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","8848aecf086baef2dcdfbfd2255e7d3f"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","0511dc111b8f997472404746a6bbce02"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","9333d885bf3fd2c792606cc7a71757f0"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","6280168b918a23beb7598f8bbb606838"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","a505679e34831654d424d3710efe08d8"],["/2017/07/12/2017-07-12-设计模式初步/index.html","aacc98dc619940e2ea934347a1eaa180"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","f3670a917aad94ec0762194877ba266f"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","809d7beb63c45cc98ab019566380955a"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","4cb849ba7405ceb4d096d4e428d18907"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","ab9a9ddc972efb3f5d6c4a3d8d93bf74"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","1a101a842d109bf16b68cbd22a9590d4"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","f57a325e36642a4c59560baf08e3fca5"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","6341442aafd62ef58fceaaf5f216ccb0"],["/2018/03/19/hello-world/index.html","f0c7901628558bd520649bc33d26b1fb"],["/2018/03/21/设计模式-03-工厂模式/index.html","7e8fa546bcf9fce3666dd8f528e2cdef"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","a86b3f83bb33f11f269ebea0594c8b16"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","69aca2f673f4df9f343ede7535e2ae0b"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","8482c5cdf1fbaaad690c18787d8baa1b"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","3bc772034c39105ad906496d39d3858a"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","a9e35c27298a05e12a94d87403758f93"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","65108f86fdc8e9a69491e233a5976c53"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","aa1f0b70f2b2c861fef773bf2a2e754c"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","42568601c429c2e6e370fae68b88bcb6"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","cd1530619f64bb4ff30aa175c45f1c96"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","0b9953a26f1e54484aebd3c83badc212"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","5c4f05c620b880bbf257e9f884e737b6"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","09c47540e1236fd20acb9166655d7d84"],["/about/index.html","b778d494a645846dcb7b7695b146ae5b"],["/archives/2016/06/index.html","d202e047a931608dd5f5dedae5cff23e"],["/archives/2016/index.html","4d765ccb174c6a1c44cc8df171772517"],["/archives/2017/01/index.html","7c62d5a7f763d9bd39f6307dde187152"],["/archives/2017/02/index.html","68796c6b1ddf6147b1529841467c3bfd"],["/archives/2017/03/index.html","b041cea3738f3dcff924cb857cddc9cb"],["/archives/2017/04/index.html","bea75f7175804664f2718aa46815c487"],["/archives/2017/05/index.html","ac52d385555733e9c3d5e06356070d00"],["/archives/2017/06/index.html","646619217b04eebdc5e3f3b595ea8261"],["/archives/2017/07/index.html","7ecbd640c2c02cf83adadc27a9089cb2"],["/archives/2017/11/index.html","0ff0bb3586dcf7bfceb306995fad2c4f"],["/archives/2017/12/index.html","cb2e77bed5973f127811594e6f974621"],["/archives/2017/index.html","8c38c612a6784d0bf95bf751e45fbb00"],["/archives/2017/page/2/index.html","da8bdfc9b12f9d45ec00c034d5487701"],["/archives/2017/page/3/index.html","5a8e38e96108453e073693f39ce7869c"],["/archives/2018/01/index.html","05042c68dbebc4059e7ce174b5f6b6ad"],["/archives/2018/03/index.html","ba21eb75e00780c87f2e9b8c05ba72d3"],["/archives/2018/04/index.html","e9a63d233ae87cfebc9d361e357de650"],["/archives/2018/05/index.html","2af6ad91bd971bd8c8f0ac27a8eb05e0"],["/archives/2018/index.html","40969b7e434f6acf3d185652b17e1514"],["/archives/2018/page/2/index.html","3c86db8f37628596c24ff377880fe5e0"],["/archives/index.html","12bcc33c58b7afcf8f8220c44eee86b9"],["/archives/page/2/index.html","c0f40c622f4afd189a94571bd18e01e8"],["/archives/page/3/index.html","f166373c2a3f826a0800aed49a36c37f"],["/archives/page/4/index.html","2e50aa640c7f6a434ccfb042bf23d814"],["/archives/page/5/index.html","b67d892f9e89c60751648675597e4b65"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","2528174b3f2466fa74022d1df2e7ff62"],["/categories/index.html","333290e3c4ddb3b355c6eb7a802581f6"],["/categories/前端/index.html","83c188f2c1b3728b8e719b30f09f3bc7"],["/categories/后台/index.html","6fd0b7a48b61886c5ae4549b8e7d19f5"],["/categories/架构框架/index.html","db05735606e846b22fcf66cff5e3f66f"],["/categories/框架/index.html","96d08ceddb58e49a8f3ab31f8bdf62b2"],["/categories/知识产权/index.html","980272950e90020030577e61290067f1"],["/categories/硬件/index.html","4b6c8611da9985e9bb12e678f1b31dcf"],["/categories/神经网络风/index.html","fa1cdb5a35b83d9605f14384105cc0f5"],["/categories/算法/index.html","d1fbae6e253bcd82149dbd46e96c3edb"],["/categories/计算机基础/index.html","67f5a4120dca2584e9575f1cf12a3961"],["/categories/计算机网络/index.html","00727659502dbabcb2547d68c6443738"],["/categories/设计模式/index.html","5a808eaf1b9e86ee18c046d6a6bb6f90"],["/categories/软件/index.html","7ea073e73470738fc22448d866abaf42"],["/categories/默认分类/index.html","c256f64d2f15d0a1ce623bee3f58e02a"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","33c2b1094ff7e5c6f05eff41262e72fe"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","4671793f5e6d517feae5cd97031d18b2"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","b678c1af2e7c3672f73238d320f8b396"],["/page/3/index.html","3a9ff8c3e2db9cdd1c52d0c5841bd7c9"],["/page/4/index.html","4e76c038db6e6bf78d58e1cd08d467d3"],["/page/5/index.html","c2257f1f0a12376ca1c818163e39793f"],["/tags/Ajax/index.html","ad83624e35f1d4161e47a46a3153be5e"],["/tags/JAVA/index.html","7584eadf820ec48955fce1799b639b6a"],["/tags/JVM/index.html","d83dbda3228e5edb46499292215b9104"],["/tags/JavaScript/index.html","cfd689a287c30d96916b8e05c4163a46"],["/tags/Jquery/index.html","04131c09b1accb8606de00b07f509818"],["/tags/Maven/index.html","2831145676821012a6dec6508dc316e2"],["/tags/Mongodb/index.html","e53cf59be440651e41779fcdb81a3063"],["/tags/MyBatis/index.html","6fc0ffea28f1068e9937ca2fb80d1afb"],["/tags/OJ练习题/index.html","583069b9dc7ed786fbeb976a5c4e4ccc"],["/tags/Shadowsocks/index.html","1e0064ed7ab86126a350be9e8a674a72"],["/tags/Spring/index.html","c195dec9aa3e5ebf387a6d7bf73de698"],["/tags/Struts2/index.html","beab984096a14bab5a451453c85ce77d"],["/tags/VPN/index.html","6db8086bd80aa2760767976e0e2fa16c"],["/tags/VPS/index.html","5148a1306f6945a466e17a3af73db732"],["/tags/hexo/index.html","6c7c875475d5f93848e0fcfb6c2c4e60"],["/tags/index.html","028c7a2167d7443489ce7f41c0b28a41"],["/tags/南阳OJ/index.html","6487f50e97dd4a87cf3fd8e8c760147c"],["/tags/博客搭建过程/index.html","549f3c9cc1c9e31c01e768738e47a6ee"],["/tags/反射/index.html","a8460d0b3960ead98a66438ade097c00"],["/tags/学习笔记/index.html","2fd32d6546cf5c7dae9aa21af66136be"],["/tags/技术/index.html","8800a2a89aae22322bc801fd70f3bc91"],["/tags/操作系统/index.html","54c532814e463d7d9ca03ff051c5daa0"],["/tags/框架/index.html","c95d4aaa6aac94ba017d7deb4b3ba148"],["/tags/测试/index.html","3e46cb501b478dd9a865e5510b72fd19"],["/tags/知识产权/index.html","fb3f9b90a3251c9725f8c9827e3b1df9"],["/tags/硬件/index.html","624acdee0346edfb10b5cbd98ec40c17"],["/tags/神经网络风格画/index.html","dfe28b8092533f568218d587949f7071"],["/tags/算法/index.html","37942db96066e0b527b990d421cbe385"],["/tags/翻墙/index.html","1fc6781526b61f6437c4b5433b8adab2"],["/tags/计算机基础/index.html","b6c5c99c4235d16783f139ea41a7a134"],["/tags/设计模式/index.html","f1a7f76b5f92ca82ba5500fb4f1da71f"],["/tags/路由器/index.html","1f2ffbcace35f649fb5be3fffe129338"],["/tags/软件/index.html","b19ce8d5eefca6f54c0b4d5d5853cd48"],["/tags/锐捷/index.html","41597bdbe6b52c61860dcaa9e6897bbf"],["/tags/集群/index.html","3c474dee8105332e6c12fee13393a6f6"]];
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







