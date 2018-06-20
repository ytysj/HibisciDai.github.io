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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","e01c033025cde23058cb3b3cc4862fe0"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","538dca219b83e2419641e81b755e0b21"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","0a678ac08689300f5607ecb39a407bc9"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","568339b082dc0e9c6298d7659b4298d2"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","e201e3bd9490294c3d251ee8d32dee79"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","2f1cb2c01bbe11434be7af5b2c775060"],["/2017/02/07/2017-02-07-知识产权/index.html","72314f8536141f13e69b2cc98be9f881"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","f667a1685b492f942f22a2128a99b9b4"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","9fc240956f4940c0637b19be0b6bbdc3"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","0457040473353fe6662829e538136818"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","86c0cf74963e4b74501a69a3bc178786"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","112540d2b92429740f40212411fc4c93"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","be0646bb12b7406871314a26b3a82758"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","7a2d0d0459c5513e6ecef84b69a30aaa"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","7e16eb388c2492b71abb450b9c0d2ecc"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","5ae5c57cc1aec0722a06ea0aba8377a4"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","fe24926c323fc22f96d2bbf098676f54"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","67b4cb3c9df2e62fa71a41e498270276"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","55999c714618cf6cbc047acc449c0867"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","f8ea1296060905a8b4ede21ea2135af4"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","6a8708e068bec077b59a70a2f8883a21"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","68c3ebb9e57e8163b5131a39addaa02d"],["/2017/07/12/2017-07-12-设计模式初步/index.html","7c23ed9e0e7b003a5c080f8336e1da44"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","8f2fd096881484f53751508d6dab1888"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","e6cf0b6e21dbe0b4753cbab0d00fe77c"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","396aeee016c133d74f9f1e9805d9ada9"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","40e35372dce5b3a9bb0513673ea88a0a"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","54c1e3b5a9c0961f25d9d53bb422592d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","91beb59660679afffcdce4f6ebbc2cb7"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","dbf99fb1596ca1eaea836f9560b124a9"],["/2018/03/19/hello-world/index.html","c91675e78149633a0282dff1c9c45c6c"],["/2018/03/21/设计模式-03-工厂模式/index.html","3085fdecce138ba5f62d4052a62d4083"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","29de3a8cee758f041c1ed73df4e0007f"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","b01c8043544fbc14e64d60aee5eefdb1"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","1f1d3ff9c941525c2f7bd490789c28c2"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","8587a7fe9739a72abe0738734580eb1f"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","80e1b829a04dc93042f1a7fe5dd5592e"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","242d0c1e229822f16379c0e843fd76df"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","3b4427b4e512e4a666fab9860219119a"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","ff9ee1e73761b945013e650d24cf0211"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","e8fb6932e9c2a5fc37d3472a55efc6ac"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","bf37f608348032cb4ffd7815ec1d5e22"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","8ac2c84d1e50ae9933d232be8c41cea7"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","489ee3de5e560c3219d666d6285d4a3c"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","4d87646a28c79bbb0c6138ef674705e1"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","5bf572b4d4998e391766b3a0c1eddd74"],["/about/index.html","3e9194703dee8b671e375074a7f4671b"],["/archives/2016/06/index.html","7ece82a07dce8d34bf364eda3fd65fb1"],["/archives/2016/index.html","53f4ff48d18dc8e7a0bbd86fbed7752f"],["/archives/2017/01/index.html","3bb966f9e83aaef75c06bc57e9052ff2"],["/archives/2017/02/index.html","1cde55ec080d7fc2c2f30b77613aecc5"],["/archives/2017/03/index.html","f48665a16169b78d375698f9e20d2028"],["/archives/2017/04/index.html","a9f79e20bb0a9ce7114a01a205e9142c"],["/archives/2017/05/index.html","b7f0bcce0abf3cc49340f9081014004f"],["/archives/2017/06/index.html","b02e1cec4f603437a98c46884d15a3a4"],["/archives/2017/07/index.html","8c6160681cf0d3150f2de396ac95883f"],["/archives/2017/11/index.html","5c93e4ee8ca1b6d43f749cc16d8c23ff"],["/archives/2017/12/index.html","067d3e10ea901d1e7202d7a185f33310"],["/archives/2017/index.html","06c9ffafe402dd1c3a1a6b8847d32f26"],["/archives/2017/page/2/index.html","a9999c794155c67e42d592febca803ad"],["/archives/2017/page/3/index.html","b51d2c95fa9021535d0d229b53ab8a0d"],["/archives/2018/01/index.html","c2daf55df1bb139b3300ffa55d3f4b0b"],["/archives/2018/03/index.html","dff8168e78eb768bc0223959eb13dafd"],["/archives/2018/04/index.html","5d91f56430d66f07d930b6555fb040a5"],["/archives/2018/05/index.html","12c46ecdec80b9da24dd965ce3c4c5bc"],["/archives/2018/index.html","d446daef0d89a5850a9ef01c08c94290"],["/archives/2018/page/2/index.html","21ec1a8ddae6edfa919969c613f9ccf8"],["/archives/index.html","13d5bda15a985bb2b896fb0e64093dbd"],["/archives/page/2/index.html","7a5ef77fc00d3c604adff9720c699790"],["/archives/page/3/index.html","12b5806996465b85ec43872bd4a84970"],["/archives/page/4/index.html","3b9cdc5137d10a316d5337f13e52b070"],["/archives/page/5/index.html","7add783f89408dfda9667d2424c8172f"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","3e2061e42f38bb5302e05417283b7bfc"],["/categories/index.html","0549e6538b8b600ed2b50cadf7d0cf2c"],["/categories/前端/index.html","99c8317afbe0a66d7e01016c6b67e08e"],["/categories/后台/index.html","5a08621b5e256b2dabd780529200306a"],["/categories/架构框架/index.html","c43d130ff1c875979e0c5eef1002e3cb"],["/categories/框架/index.html","d45f72713ad91aa3e8628dd290b10e3b"],["/categories/知识产权/index.html","2496e40a5d2028fbef8941d71b67b8c7"],["/categories/硬件/index.html","ffaf046e32a275e0eacc43d16dbebff7"],["/categories/神经网络风/index.html","db6d730f5f70cc9906c8a844a6c554dd"],["/categories/算法/index.html","4fe9939f87dd45bb9217ccc30786410b"],["/categories/计算机基础/index.html","1a8381af860d3659e69671a71f7036bd"],["/categories/计算机网络/index.html","7e1ad62373ecccd8461fc7cb790d3662"],["/categories/设计模式/index.html","202a500bc05bcae4007a6392c3d647b0"],["/categories/设计模式/page/2/index.html","833cf241b853eaba57d08e36b51b87d0"],["/categories/软件/index.html","6657e1cb30734d9fcdce84fcfbe2d482"],["/categories/默认分类/index.html","513fc58a080dc952262ceee5f4e45c34"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","509f4d6b591485b7e792bc7c2ced2908"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","99063cc545e75d5599ee027cafd5df69"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","75378a8faf34d84e9ce22147e7fe4289"],["/page/3/index.html","dfb9f78a07872c93bcbdbb2879a3b283"],["/page/4/index.html","d6fb4f02c8fbe3eee92c727d405d5b6f"],["/page/5/index.html","24931624710f6c14188c0987a863a184"],["/tags/Ajax/index.html","94cf37f3321abb7397610beaffbb3956"],["/tags/JAVA/index.html","074c163f9d1d9c5b9180730b106fe7cd"],["/tags/JVM/index.html","64ddaf1e83d41ad307b8098e6cd16615"],["/tags/JavaScript/index.html","844984257aa7d8e9737c452a6f533cce"],["/tags/Jquery/index.html","a2b57175654efedd9450c0a73e099904"],["/tags/Maven/index.html","228e1e1fe366f178dbc10b4210f1edfd"],["/tags/Mongodb/index.html","be00a90b78de6f2e6420c1bb68abfe7d"],["/tags/MyBatis/index.html","906e7aaa2ad64cf2c1305288858c6136"],["/tags/OJ练习题/index.html","9b3e744075d1aae658a465a77dee3da9"],["/tags/Shadowsocks/index.html","4bdab3f472a133dcf300e41c414f9c1f"],["/tags/Spring/index.html","069e4b4c24a72a7bd6a7cd2a23817ded"],["/tags/Struts2/index.html","306f54c3204cf0a69210cf865a2d05b7"],["/tags/VPN/index.html","8dc6e0485defc6b62b8e3827fa94fcc2"],["/tags/VPS/index.html","eedb4f474d260b30f7b92c52805ddd65"],["/tags/hexo/index.html","6992d993b38594dec0d13d125ae10d3d"],["/tags/index.html","c43630c34651c2415b48a93168869182"],["/tags/南阳OJ/index.html","179e0b7564ad798a1846ccfa6387d241"],["/tags/博客搭建过程/index.html","bd85f5e38d2e0b86ab0fb1641be9484d"],["/tags/反射/index.html","3f4d0a144729fd88ee078c25919ae534"],["/tags/学习笔记/index.html","593d15c540fb0f63dc78467868615f8d"],["/tags/技术/index.html","64cce634159563cb3706df886988db5f"],["/tags/操作系统/index.html","bfd46bebcadf98bbecaf600500acbaa3"],["/tags/框架/index.html","f9dac91a011013f60f162fd703451a3e"],["/tags/测试/index.html","01ba270c53dc653cf363e74354866721"],["/tags/知识产权/index.html","71f8fa2c6021e38663e3b39ebeac5efe"],["/tags/硬件/index.html","2aff85cc8300ba67255ba3fd94f54191"],["/tags/神经网络风格画/index.html","9ec5f0056b61e6d7d101a9755ec9a6d8"],["/tags/算法/index.html","a4321d94e0a0f7fbd938fb0d4b90e78d"],["/tags/翻墙/index.html","2c7738d5cfb851751fbd7d0db407a09e"],["/tags/计算机基础/index.html","d88dcada0de00d8344e0d538af40356c"],["/tags/设计模式/index.html","279f8077c20a84ac2832036e526080db"],["/tags/设计模式/page/2/index.html","aae8fcbc7ba8f20ef2b6c859d27055fb"],["/tags/路由器/index.html","69d6067796ccdd7fa33064ad200ac541"],["/tags/软件/index.html","22def5e15e1fa385f5c3702cb410b254"],["/tags/锐捷/index.html","91d55f00422984673e7e44b567b77e2b"],["/tags/集群/index.html","d997249157adf1027bca2d400bbefdb2"]];
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







