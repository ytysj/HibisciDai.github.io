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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","d747bec98dfbf24fa303957457cd80a0"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","b6500e77c994d543c0e7d2f9475c5630"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","8662d95c44c8b9033306f36f352edae5"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","ed3b273b308090e04ba7aeaf51cfe278"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","3b2b8dd6ea261c1ff9e27441bbe16d38"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","d8c268444b29b8b7d4838163a9a42dc7"],["/2017/02/07/2017-02-07-知识产权/index.html","842fa050c0d3eef30a704cfac81b503f"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","98aa20d2f58824dd99f61e33b0ba52aa"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","5b7733b247d647509644c878f790d123"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","12235f148c53adb2219be3edeeb7c3a5"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","63016ea61757dcbac0857fde4fd63521"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","86bd80b9fa436c547cfd20dee5e0fdae"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","6f27f7b72f27a798294a3b3ad39a0f71"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","79013d2df77c4c39ffbf3e53baad99fb"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","176c76c5233afe507409a0c0f8264722"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","3e7bb2dd7f0113d9c39083a9ef629fc3"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","a39f26653a0e1535022f4c9bbd9a5716"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","c72650e0f5881e6c97a5345aec6096d6"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","2630023e931752bd8ea3616a556fd512"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","3691f310f830265ac80da82e7fc56c21"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","b40078e8c960db1cd1c63696e42a65c2"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","27b1dd942e7a3717db7c62a4259a4816"],["/2017/07/12/2017-07-12-设计模式初步/index.html","d99a4e300b1e3132af692771886fc932"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","1e38d4d9b4884ecf10340ed0d7c8473f"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","96a1b96861d94391c565209a8655f455"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","c6724abe3eebb5a41a66185937e76b27"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","0242bfdcbcea6e23cc2a5e28aada08ea"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","de9ac5cf7e4041578ac5aaea729c6571"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","32b4f85ab08c7820c671bbe62ffbcf9b"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","2ec54f528c4a45e01235bc25c042bb6c"],["/2018/03/19/hello-world/index.html","cc8094ed67b0d745527254a8a11c2038"],["/2018/03/21/设计模式-03-工厂模式/index.html","c352456fefd9cf2b75c208bc68564892"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","2f4531f336c9d13bce73d8224327d8ef"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","12a5b7a41b7bcdf170dd13af7fcaa92e"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","89d9823d353df993c108a902167305c4"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","2ca03fa9c7e8e4754fbac35393879a23"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","f82b785c5e6f05d1d7d9ddf04182fb83"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","2d63a3ed7a025857b6ef87aa35ab7056"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","a6e6a1119663d69ec16d1985f39e087c"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","d7b83840f3aa35cd08fd7d29d2ad56c7"],["/about/index.html","7c43453dc966ef426b4b8e725a1f4941"],["/archives/2016/06/index.html","bc40c85f14ca4905e54f51735177f8df"],["/archives/2016/index.html","c4e23dfc0b5fa8a4abaa02f1dfd3b320"],["/archives/2017/01/index.html","e02c49eaf71020f6e7dd9e8f6d04636d"],["/archives/2017/02/index.html","9cbf502a8d1ed66f6a5a9c16ab16041e"],["/archives/2017/03/index.html","fbbb5ec889dc4911603fce3fa34a3c9c"],["/archives/2017/04/index.html","ada637dae40e66454fbbeca04629a467"],["/archives/2017/05/index.html","25d066aff97a2406d2cdd635ea36a3f5"],["/archives/2017/06/index.html","97f1c0b0cc786bc1efe4518239c62c83"],["/archives/2017/07/index.html","1cde1dbb91d1627250a70d8db1fb1efd"],["/archives/2017/11/index.html","8bfcc707c7294e78003c306b7321f910"],["/archives/2017/12/index.html","4e6a852e11e254837d58a42d059cedaa"],["/archives/2017/index.html","54b7b6146006a9b9077ec5ba40626583"],["/archives/2017/page/2/index.html","a0c555891d353072b8e8d8e1a6c3d375"],["/archives/2017/page/3/index.html","534eeea62cc49f181bae823e96850536"],["/archives/2018/01/index.html","24d6755d9aca3fefd8196d4b31198d68"],["/archives/2018/03/index.html","989c082cfbda74a76fbebfd43cfd3b4e"],["/archives/2018/04/index.html","3c3f7be7ef9887e6ac77ec61a24e9791"],["/archives/2018/05/index.html","da72680f9e0b0ea56de7623090a0e0ad"],["/archives/2018/index.html","5480d623bbdebf57e8dbefedba6b3767"],["/archives/2018/page/2/index.html","d4d627e1e2fea40540a4305dc2c35056"],["/archives/index.html","f332abf8367c51218c5bb251b9e11ff1"],["/archives/page/2/index.html","d6dc775203d18539550725d17176056b"],["/archives/page/3/index.html","83b101c7fa089b02cdeeeecd9f08200a"],["/archives/page/4/index.html","201d4606df359de1673335670869712a"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","24eca93bab9087c6b9fb96092d0ec00e"],["/categories/index.html","675acfa980dc1a762d5911c594311d80"],["/categories/前端/index.html","93961e0a0abee67934d2c45e04886183"],["/categories/后台/index.html","42033db43515ea614a0aab3a8faa7101"],["/categories/架构框架/index.html","b7fbcb2ed332871c028d4e25ffa0d64e"],["/categories/框架/index.html","ca088ef973dd5bc18bbacb79be6f314f"],["/categories/知识产权/index.html","5f23f72ff188b69b8b59aa0d96087ba4"],["/categories/硬件/index.html","23ed001a50c3bba7e64f8364a80e2f59"],["/categories/神经网络风/index.html","1938bcd275eb98709459b58d90316d27"],["/categories/算法/index.html","38911fc8a0a83d68e2e19831ad297d9a"],["/categories/计算机基础/index.html","f2712cfd6383cc7a247e699ffec301ba"],["/categories/计算机网络/index.html","e1268ae7b00273852b9ffb3011ee43a4"],["/categories/设计模式/index.html","67ba2746fe37367d005c67aeb8fc1dd4"],["/categories/软件/index.html","7bdaf88051403e113fa0abbc48e90241"],["/categories/默认分类/index.html","c91c015b6ccc10b90d270c61ca4d257b"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","86e1613a9ea69cfd1c84be8bf4be2141"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery15.jpg","cf27c69f2b91f14e191861c212245c6d"],["/gallery/index/gallery16.jpg","0cab00106173c18bdb67e5bb340e30e4"],["/gallery/index/gallery17.jpg","51ebddb8eaf5c261b040f49729a0655f"],["/gallery/index/gallery18.png","2eacd2ea3794f3e6465bea6c1f444cf6"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","78db3542c5d40abef9222cbef374b85b"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","c7b735cf956cdf11736a32c0aa274fc9"],["/page/3/index.html","b08080dda9c033819570f4cd726c4a0c"],["/page/4/index.html","ae901b0a10e6d74340a309dcc87f8c90"],["/tags/Ajax/index.html","bb776073ae7e251d8bb129f6c264054d"],["/tags/JAVA/index.html","5ca22f109cd400771a974c6b06a7ed47"],["/tags/JVM/index.html","40cad57183764016a2ef1fa760b983b2"],["/tags/JavaScript/index.html","2040880a65cb725823ad265634f50d21"],["/tags/Jquery/index.html","202929267f3685ee699d7ffdd1549288"],["/tags/Maven/index.html","854b9b7c7674f0cdda7458cedc35449c"],["/tags/Mongodb/index.html","62ee1937819156e57ac8e0def374c683"],["/tags/MyBatis/index.html","0a1711b66121219326f5e907e5e15957"],["/tags/OJ练习题/index.html","af31f93bfaf74a4e5eb12f09ca3c57c3"],["/tags/Shadowsocks/index.html","2d4ffa1500e317fd1e05f595716cce41"],["/tags/Spring/index.html","b38de4f8839d7c124eccf7d05ecfbd46"],["/tags/Struts2/index.html","240e62a204bd98c6b17611b71b0fa953"],["/tags/VPN/index.html","cf12ddb67d5e9bd18cf9fa27540785a9"],["/tags/VPS/index.html","8b09fcda417fd7a73bc38d6a59ac9e4a"],["/tags/hexo/index.html","26b18bc257975498d1b371a6d56bb9ca"],["/tags/index.html","faf6299e659a6cbab67ddb8f2c38758c"],["/tags/南阳OJ/index.html","b5fa8396607a36ab2edd5242291187e2"],["/tags/博客搭建过程/index.html","57ee36b2f0cd3bc15fd85b02a4e08eaf"],["/tags/反射/index.html","735c9544c90f4a8a026c2a1c3c489663"],["/tags/学习笔记/index.html","3711bae2c67d743d637fda338d842573"],["/tags/技术/index.html","d2c01ff90c933657c2efd530df036e6b"],["/tags/操作系统/index.html","8540c3e8a0c405c6da4bf2663b058622"],["/tags/框架/index.html","c06f3432083ee1adced8c2ad0c2ff37e"],["/tags/测试/index.html","41ced0330be56711bd10568f23049dee"],["/tags/知识产权/index.html","5035de089b7bc349ec55af4a10ae4ff2"],["/tags/硬件/index.html","eb5d4e5c99dcd540529189749694843c"],["/tags/神经网络风格画/index.html","07bebdee51e67fca581c1af673a8a86d"],["/tags/算法/index.html","e6997b316a19b069b8baf6cdf000b0c9"],["/tags/翻墙/index.html","cde8a6b06256eafe796e231671bf8ede"],["/tags/计算机基础/index.html","6c8c046b3ac74e3f402abe9401cb834e"],["/tags/设计模式/index.html","751039d36bcac6067dc8be471652fc62"],["/tags/路由器/index.html","88a9872beb725782d81c4930bf17e2fd"],["/tags/软件/index.html","b616e0cd6f40be0ff18b203cac5f76d9"],["/tags/锐捷/index.html","59c8ca7c92d55eefff90fd0391123daa"],["/tags/集群/index.html","4151db868b5b149f14fac803192dae2d"]];
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







