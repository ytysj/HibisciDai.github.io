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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","02f1dd1ed45acc451e4377290faaeada"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","c5609eee0fe685bef89d594dccd22b60"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","6c35935120d5d6b79e5d4bcd931a8d25"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","1f133b7d631b4572318bf2beafa5d4a2"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","fd896aee3f99807444ade287755db908"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","1115327b3fd1ba499e48fc6221fe76e0"],["/2017/02/07/2017-02-07-知识产权/index.html","6ded093ac54e4f5f9fecbdb992ef0e4c"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","c034fd1bfceef1d7bf48400b0a4f8524"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","157f1eae21c8e4682603e29d8c739c4e"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","6c323971a52e8b517c95475c890e3c3b"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","f96d3a8fbd636612bd03b90aee53c81c"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","c3536e5b29b9b240b4663637502d440b"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","94b7b3cb468883e11f237d1d6d32beda"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","ddda3814b1377a1997e41a2833b616ee"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","3b10bff9c46d6c2a8225e82c2b36b59f"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","4e193cc0a4b308314e5c7d6075073d1a"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","48dfec5df5ab1861707f5617601f23e2"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","b60e559e02468971feca8e9e507b55ec"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","32d960b2389ca57d0170e0187c351d04"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","122954ea1e54b23f1820eca242125c8c"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","4b31c1821eefeb0aa6ea2fa0e92f77ee"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","205b325650c96ffc79d89b45c66c3ac4"],["/2017/07/12/2017-07-12-设计模式初步/index.html","ea8ee5f1780cf6238c947880768da533"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","757fb576670fb4a8179dd3e6ddf9250c"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","9b3ca176b5d6a52377b7f22e0ccafc1d"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","a1730a3523eb507ee4ca50e4aafbbbbb"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","c326278d934908565e11aa7dce273391"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","bddf83340b6bfb1cbc34b98f900683d0"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","ecf2afe1babcdd14fac1829738831f3b"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","696d923fb412fcb4f93c9004dedcd459"],["/2018/03/19/hello-world/index.html","fc72f3d1c85efd2bb52a25f7665de2e2"],["/2018/03/21/设计模式-03-工厂模式/index.html","e55db3d020d8880fcc7c8a397cceb784"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","2a09cc4a51d191a50f654233b472f8a4"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","da091c9135cf952c775efb75e74d4828"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","efee9ddc4d1063fab355ddfe62eddb07"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","3b641b344d78ccbe1853d5a6d5462526"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","50f3fcaa647b0c36eaf1d9a93751fe2c"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","c2dcd5b958023a4ae492e0ba1d666b9e"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","84702def82f3351edbd49c23ae918060"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","2fcd8c7c94f6b3e7f468709c5797c9ae"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","6dce4bf0a91c53bb7dcb669120d9c2b0"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","940b8db4df53026c0340f17ea9695738"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","a935f407c4d4f0ba28ff9c24499f6a52"],["/about/index.html","247065cefe706c31b689053783b65dba"],["/archives/2016/06/index.html","d6d8ed5ba98ba4c41f5c3f7b228f2418"],["/archives/2016/index.html","417589ca7486aaea52a93fabbc5bf706"],["/archives/2017/01/index.html","d1dabc032f4c23812a632cbdb80f67df"],["/archives/2017/02/index.html","56aa6b85e991ce3a7484836ee1e75a22"],["/archives/2017/03/index.html","ebc7980c9d979612597b7db48dcaafdf"],["/archives/2017/04/index.html","489bbd7e03a0d2d5bf2ed620760d0ed6"],["/archives/2017/05/index.html","cd02682e3cff0b62fb4363301ddcd11e"],["/archives/2017/06/index.html","a8f42e32dbbfcf0022dc8527ffdb6510"],["/archives/2017/07/index.html","5ba1969950e5bbf47d955e3ff3596ee8"],["/archives/2017/11/index.html","924c8454aae0a686577d51f6f2c4d7fc"],["/archives/2017/12/index.html","375f6aaac40deaeb10c601a54f3bdf20"],["/archives/2017/index.html","c82889492ffac696bd11b6d096741950"],["/archives/2017/page/2/index.html","7a3acb59a5c3aa1ea764adcfcf6d7243"],["/archives/2017/page/3/index.html","c4246eb93d259b3eb6fc568a2ce73fd8"],["/archives/2018/01/index.html","a3e091232280689837b53377a103a5b4"],["/archives/2018/03/index.html","35a85637c57805bce78334294cbfc59e"],["/archives/2018/04/index.html","815c118d0dd512f63aa3ebe2550d4ce6"],["/archives/2018/05/index.html","b84a4040d6e582f7525e62873458efa8"],["/archives/2018/index.html","8fa4e7e786b0565089091e627bed6a7f"],["/archives/2018/page/2/index.html","0865c820bcd6efec39f66f3ae888feb8"],["/archives/index.html","3be827c246b2fcb45348078657206110"],["/archives/page/2/index.html","3bef702e0b023bd6b23f24788f328a60"],["/archives/page/3/index.html","6d1dc2cb72b8bd68b21ed8bef73dbb03"],["/archives/page/4/index.html","d30d627e8eefaed9cf68cf99b7945921"],["/archives/page/5/index.html","caf3c8862d6d2aedb6e2816552640c96"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","8fa96f36154b515c0cf19782237c08af"],["/categories/index.html","6204a19790ec918cff7a6555419a6aa7"],["/categories/前端/index.html","6e64682af1e648b4b436bb5161fe75ea"],["/categories/后台/index.html","4c01d65e4695d2a9a46d6901c24a80df"],["/categories/架构框架/index.html","b7418eca0104a25c7f73c2e6deac6c5f"],["/categories/框架/index.html","1b3b515e7489817b7e42a2b92c298094"],["/categories/知识产权/index.html","ac9fd0a7d9e3588c6623e1e8481c3dc4"],["/categories/硬件/index.html","1f6ebdd5d71537732a3734fcdfb0189f"],["/categories/神经网络风/index.html","4f95b5970ed559c32f621cc5c6fa8afe"],["/categories/算法/index.html","999539b8f3b9fc05f2abe44614b19335"],["/categories/计算机基础/index.html","627482d96361d56fb6c936a10eaef3ab"],["/categories/计算机网络/index.html","8286f95aaf0c865cc38f74f7e57e809a"],["/categories/设计模式/index.html","7868275df326bb6a1af46f33ef820fd4"],["/categories/软件/index.html","b4c1bab0a1ae07cce8a766784ef69e1d"],["/categories/默认分类/index.html","062e31d6023c9a14ad43799a2146bda7"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2bdef6737e744d3246876fc6006ab9fb"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery15.jpg","cf27c69f2b91f14e191861c212245c6d"],["/gallery/index/gallery16.jpg","0cab00106173c18bdb67e5bb340e30e4"],["/gallery/index/gallery17.jpg","51ebddb8eaf5c261b040f49729a0655f"],["/gallery/index/gallery18.png","2eacd2ea3794f3e6465bea6c1f444cf6"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","181a54a4c1192ce47e03dfa80c6f3370"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","8b152d8e5d971c1314197da5c1d75619"],["/page/3/index.html","be77869e1fe46df07e8ed6cb5fa49364"],["/page/4/index.html","605679cb8b69e7467cfbf570158c4217"],["/page/5/index.html","a0d11b2175b3c449e593c22c3d28f84e"],["/tags/Ajax/index.html","1b03adcafa38e37778cb7f1b2e5a5c68"],["/tags/JAVA/index.html","21196216af177125e1a2843a1de6f6f1"],["/tags/JVM/index.html","a81fba03eb00fee1da18615923c0171d"],["/tags/JavaScript/index.html","7d5180c1bd6c38196b10582dbd0aadc2"],["/tags/Jquery/index.html","f8ccc7446a46ca2ba5c8c2a4d9ef4d7e"],["/tags/Maven/index.html","a0c87f9c8175df8056a6064fc5ea9048"],["/tags/Mongodb/index.html","c8af2ed1994349c1bb3ec333594e9425"],["/tags/MyBatis/index.html","6bb6029546036b39fda298d26e8c898a"],["/tags/OJ练习题/index.html","fd2c0840d9b49cfdca66a9efa68ee4a2"],["/tags/Shadowsocks/index.html","f5e2591b759be98eda8eb453e25e7541"],["/tags/Spring/index.html","18626179b2c6ef6e62b859278b477b28"],["/tags/Struts2/index.html","4bd7e5a35fc99a5edf3228390cb5e4df"],["/tags/VPN/index.html","28aad424bcf733e68b3887d7130e8f6f"],["/tags/VPS/index.html","ca995c924850e63f4b36994c35dc6906"],["/tags/hexo/index.html","9ae27107e5a9cfcc00b2211a93d38a38"],["/tags/index.html","130ef685483d6015a0cbaf6187ca78ea"],["/tags/南阳OJ/index.html","84b9938e9f028dbcaf0fec47b8d2a097"],["/tags/博客搭建过程/index.html","72dc6e80e6007587a89ca595b9cfd73b"],["/tags/反射/index.html","5fb2756c2a38e2cc47a63de9fccd64de"],["/tags/学习笔记/index.html","b288ba906d19d6731b599f708c6051af"],["/tags/技术/index.html","d380bc44afb724e2d21a1eccadcc1e5c"],["/tags/操作系统/index.html","b89a63ee1a9f0dc1f2d972098d3af10c"],["/tags/框架/index.html","1c69d03eef25929941c8f1ab1a20b56c"],["/tags/测试/index.html","7bc911e441893a00199f74aaa9de88d4"],["/tags/知识产权/index.html","a06596b4503109a66b17b2d64736f6bc"],["/tags/硬件/index.html","b4baa3a7b1eff2b286a92b88c61465d4"],["/tags/神经网络风格画/index.html","45dbcb5d94b687b925e312cd203d40c7"],["/tags/算法/index.html","8434d50c88d26265f00b507d051355ee"],["/tags/翻墙/index.html","91870ed78ff1804de71162c74183af6f"],["/tags/计算机基础/index.html","872eaef30a6fd2d4277a17e8b0706b03"],["/tags/设计模式/index.html","63e4d88c52ed18134d9aadad0d4762eb"],["/tags/路由器/index.html","f179c391f0651221cb92c9d297039c11"],["/tags/软件/index.html","4480cce7a7f2a3ddf5c991dcbf11025e"],["/tags/锐捷/index.html","955384b3581342a68075e199974b2b15"],["/tags/集群/index.html","99f8d4c614c08cfd26f0fdfccad40df1"]];
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







