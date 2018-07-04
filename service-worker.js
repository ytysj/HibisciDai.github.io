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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","faae4f86d099ac98b5ef16f668f017ac"],["/2016/12/25/2016-12-25-木槿花的槿/index.html","0b1a007723d63521506d1d49d5fda1f6"],["/2016/12/25/2016-12-25-木槿花的槿/木槿花的槿.png","7fe213cba5fa6abb06ec87ce0bf447b3"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/index.html","26d776207c4e48c218cfe8c5f23045d7"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/脑神经错觉型假性心脏痛觉综合症.png","2ad6fa54869c250de4f2fe62091ceb4a"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","ad2788a1c4452bfd243f012afa50bdff"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","2fcc22d9a2dcfa700a3e971b6c757d9e"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","220deb0c5a68db3f7d994d08ce5ab428"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","e2ebb4841fa3178bcfea620d4a784888"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","1e2182a3c97c53c8e49ae8b02e2a8507"],["/2017/02/07/2017-02-07-知识产权/index.html","635cb6aa2cc880718cd77e15ed8d1f7d"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","0c37dcc2d91943d26e5b28e413cb97eb"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","ec80929c55a269345dc3fe1b6d36cc35"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","032ebb679a3e25c08a4dfaefbcf86ac1"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","19ea2d62284754ad15dd3df448e34bd7"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","91e25af000ca3e394e525ebafe49c200"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","b8c863ea5cad373312af4ea899f50ecc"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","293100f6d6e7e41e663b76e5e3d874d4"],["/2017/03/19/2017-03-19-废柴槿为什么喜欢写日志/index.html","83a24ae1a15ed84b95307a726521335c"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","31477fb994ec8b69bb44becd2e61c0e0"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","fd4be8663ae6707d9c3239413eb2596d"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","d31310b8bf9936869c4c21a07cde2f9e"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","d3a688d5af9a13f8ba5b47b71ab68d79"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","c43c63ec4f134a67d583d8fb18c4c653"],["/2017/05/19/2017-5-19-我姓齐天名大圣/index.html","60a78abc04ea6bca9298a2b4bbae0601"],["/2017/05/19/2017-5-19-我姓齐天名大圣/我姓齐天名大圣.png","0a1f5176d29a336fb0d6b8231d3116bb"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","c9bc8b953dcc657c2cfd277aa38f01c1"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","6546c9b48a8bef41e6137495f85c4492"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","4b2c4d2d66dfd53662166a17c57896d2"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","db0109eb8945775d455067d5ae012b61"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","656c2052804325b720410a321684708c"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","33e7fcbf430d92b2e21f0e7c05146fe5"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/01/实用网站统计/index.html","468171d83fd411eae0ecf03c212a5ad2"],["/2018/01/01/实用网站统计/实用网站统计.png","f053f66ca2d68fce9311e71a14c43f16"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","fbf282aa462fd872aa66410a20f49fa7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","10b1aa160adf8ebb0bd6514b897ddbff"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","f3d69fcb90b0c3f102275a44a2dbc67c"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","81b06caae5dd1a90e0f464739de62f0e"],["/2018/03/19/hello-world/index.html","1c85c95414b849f443378430dc22cb0f"],["/2018/03/21/设计模式-03-工厂模式/index.html","e74a0b4763ca6d2a047ed4af1d849c01"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","fd254993ec2baf9070a860d4a8809e8d"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","31df59a50cf21300ad699be05bd3d3c4"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","a7c765998980e14057e814feca73da30"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","c76f2861d1f1efc54f960063e94498fe"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","79c69cc444034e3ebd8640280b9cf068"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","0c7d4737bfdc32c2fb6c11a9754658cc"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","c3aaa530036160d9dd1cb050a401b20e"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","f4d769354da3cc62ea822ee8ed5ab39c"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","464a3362978fdb2c643a3ae785c7e8d4"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","21bf8b87dfc65afc852df00add3bb0f9"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","d601e0c1e00ae40ed026471dc78147a3"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","a39ed6933b49421c40486f0ae83aab0f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","7fc15a2966b5789393aecad8c3de8902"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/04/25/设计模式-12-享元模式/index.html","c63770a1533ef1a03072ba7a3aa039fc"],["/2018/04/25/设计模式-12-享元模式/案例1.png","a2df8feac03b08ec5123f08ee919e567"],["/2018/04/25/设计模式-12-享元模式/案例2.png","7598d9706a786f94ff3cc461b2c807a3"],["/2018/04/25/设计模式-12-享元模式/案例3.jpg","48fd0356f3db1ec3699581b3010e663e"],["/2018/04/25/设计模式-12-享元模式/设计模式12.png","a074a8546709e3342eb267b2225c90e1"],["/2018/04/28/设计模式-13-代理模式/index.html","37c6567d3fab7e5801578da9ce459a46"],["/2018/04/28/设计模式-13-代理模式/案例1-1.png","9aebebd07571ddd6aa0f09adfe2991d7"],["/2018/04/28/设计模式-13-代理模式/案例1.png","8181676ba545fbd8fe27537f541c47e2"],["/2018/04/28/设计模式-13-代理模式/案例2.png","5cd7435b295a89472d99cc82ba471d2b"],["/2018/04/28/设计模式-13-代理模式/设计模式13.png","1eac492880b6c08b78bc7b6c0efaf706"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","c16d50ad68edbdc13b35e5a8b2b50f89"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/2018/05/09/设计模式-14-职责链模式/index.html","99d9d4769baa33699b6a31c8a83df186"],["/2018/05/09/设计模式-14-职责链模式/案例1-1.png","e6731c71cb4c42a06bbfa61a837fa0a3"],["/2018/05/09/设计模式-14-职责链模式/案例1.png","bbf9ff11ee028e9c2a5df9a0514c3d9c"],["/2018/05/09/设计模式-14-职责链模式/案例2.png","2741553387d1e61a8f625e5c751107a3"],["/2018/05/09/设计模式-14-职责链模式/设计模式14.png","2f27e43d9a1e9dd2850a0553e37aa439"],["/2018/05/14/设计模式-15-命令模式/index.html","967ec531f1413078787e9ce79b5726b1"],["/2018/05/14/设计模式-15-命令模式/案例1.png","c85310afd3cee968693adf265d4a9120"],["/2018/05/14/设计模式-15-命令模式/案例2.png","a09d04d15adba837ea11e4959c34352f"],["/2018/05/14/设计模式-15-命令模式/设计模式15.png","1c326e08257ff4a8f4d59fdcf2124328"],["/2018/05/16/设计模式-16-解释器模式/index.html","5f7e074e164fd86acce78d2cd991d95a"],["/2018/05/16/设计模式-16-解释器模式/案例1.png","5855bc24d9872b01a920b5d6b7ef1ff6"],["/2018/05/16/设计模式-16-解释器模式/设计模式16.png","dcd14bd75535d9e4aa27e6bc553633a1"],["/2018/05/21/设计模式-17-中介者模式/index.html","3669087ba62456bfe6bca482802615cf"],["/2018/05/21/设计模式-17-中介者模式/案例1-1.png","1cf06f642544ea3101f5091aa76ec6c8"],["/2018/05/21/设计模式-17-中介者模式/案例1.png","41a1683c3bbac5b72518a281aa643f9f"],["/2018/05/21/设计模式-17-中介者模式/设计模式17.png","a7f3406063682a6e5a5b20ff8d0140cb"],["/2018/05/23/设计模式-18-备忘录模式/index.html","2365a72a744edf7a61083302d67f4f84"],["/2018/05/23/设计模式-18-备忘录模式/案例1.png","3a0c82ab530752bc9ad746dba2e831ce"],["/2018/05/23/设计模式-18-备忘录模式/设计模式18.png","42e6313d212d9395e43a0b07b593537a"],["/2018/05/28/设计模式-19-观察者模式/index.html","b1f070f016fe51dfce5f23c2093962c2"],["/2018/05/28/设计模式-19-观察者模式/案例1-1.png","8ed252f2260cc03de20038fc565f5a34"],["/2018/05/28/设计模式-19-观察者模式/案例1.png","62421f4b57d3a9e4ce09125b7aa194ae"],["/2018/05/28/设计模式-19-观察者模式/设计模式19.png","ff1a611c9d1b883f6ba126e800990436"],["/2018/05/30/设计模式-20-状态模式/index.html","a050cf95c7339e1688645014666e3436"],["/2018/05/30/设计模式-20-状态模式/案例1.png","8e12c2da2adf21da9e116f309288dba8"],["/2018/05/30/设计模式-20-状态模式/设计模式20.png","3b681387bf8a6b779d7c71ac8eae9570"],["/2018/06/06/设计模式-21-策略模式/index.html","d4871858f0fc648f753a8c0336965df7"],["/2018/06/06/设计模式-21-策略模式/案例1.png","e8bd6dae5f0c714dccd6fb99c94f1e16"],["/2018/06/06/设计模式-21-策略模式/设计模式21.png","3b6647d82b21389fbc0d41658e090072"],["/2018/06/11/设计模式-22-模板方法/index.html","8319efe0eccb7490ae314214e70ebae5"],["/2018/06/11/设计模式-22-模板方法/设计模式22.png","90010fcbc1eb3b654b981492802db493"],["/2018/06/13/设计模式-23-迭代器/index.html","0d31e662bcb5c815506e21811d8b31b4"],["/2018/06/13/设计模式-23-迭代器/案例1.png","4efd004b5ca1ae900f6e818a0165c486"],["/2018/06/13/设计模式-23-迭代器/设计模式23.png","fead4258cd83831c9ecdc614b1eae2ab"],["/2018/07/03/设计模式小结/index.html","e68b8b12aded38eb7307a77e97e3ff65"],["/2018/07/03/设计模式小结/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/07/03/设计模式小结/设计模式之间关系-1.png","084b21bf00b785197cf4d97843a6ef9e"],["/2018/07/03/设计模式小结/设计模式之间关系-2.jpg","2468115597e7492aeec2e7962a83ea59"],["/2018/07/03/设计模式小结/设计模式小结.png","657f3955150c02d2f5a3f7615c910c82"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/SwiftPlaygrounds初识及九宫格最优策略.png","221d58dd4bbf80cac4ce307357519763"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo1.jpg","0e54378c5dd4127d19c5dd284ab62217"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo3.jpg","4e3ed0f31bf0f5e50a440e4ddf168c34"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo4.jpg","62a32d5a6553891ef731f1f22c338850"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/index.html","ef7fcfcad84e8771a3b8b17dac481392"],["/2018/07/04/text-media/index.html","097e00193fc5f3da6451847ee15c5b05"],["/2018/07/04/text-media/博客音频视频问题.png","ffdb8ecbc9a2db3abfe023c643a14bca"],["/README.html","d9c75374d13b28a5236f0234665c84ff"],["/about/index.html","fa458ec093e500008eab67a4d0d4a6f0"],["/archives/2016/06/index.html","f25d9ca168361a21216a04c30b1de0e8"],["/archives/2016/12/index.html","c56c5294599e0308beaa8aedceb15e6c"],["/archives/2016/index.html","997f5d9a513ff4e2be32eeeb50774ed4"],["/archives/2017/01/index.html","c2cde45985dda2ad38967de04e2a22aa"],["/archives/2017/02/index.html","d3097883d7dc9f596a4435cb3bd6a7b3"],["/archives/2017/03/index.html","109832324a44b8d176beb68cafc27550"],["/archives/2017/04/index.html","794f6715431c77d736c68d42d7d20d99"],["/archives/2017/05/index.html","2a8e7161ffa7cc1a8be53562d5603476"],["/archives/2017/06/index.html","ec85448679e45a2df67650e88774c72a"],["/archives/2017/07/index.html","89c00c9c18e8313e441558026b5efc96"],["/archives/2017/11/index.html","e540123b18d314bef6f6c59f432bb6fb"],["/archives/2017/12/index.html","7fa87edddd158b8202b20a1e19a1d92a"],["/archives/2017/index.html","6daf14c87f00344899c8dffb88b57aeb"],["/archives/2017/page/2/index.html","e11522d1c9c6877f723db97e4dcf5113"],["/archives/2017/page/3/index.html","8fa9d294435afc158a5e75366bc71cca"],["/archives/2018/01/index.html","2febad950637286498ec687f4226eec3"],["/archives/2018/03/index.html","64f941a5e3858f9923688b112de577ad"],["/archives/2018/04/index.html","08d150a521ca44d249f67d340fc849a0"],["/archives/2018/04/page/2/index.html","dd9d57a453e72db4074b446bef3fe7db"],["/archives/2018/05/index.html","6214119ca36a2b38e1384a3ad0550942"],["/archives/2018/06/index.html","83c7738187cacaaf3c6c9bddd21922c8"],["/archives/2018/07/index.html","84e45b01546b67f87f9e7f18434a0627"],["/archives/2018/index.html","24f17dd3c0027e8420dfa2ca55292fed"],["/archives/2018/page/2/index.html","5e15bd3494694746e653e63f945e5713"],["/archives/2018/page/3/index.html","25d59dc0de2a415328077fe4d2f42331"],["/archives/2018/page/4/index.html","5d54ee90b3662c9edccc0f47723b60cc"],["/archives/index.html","17926a2815936626e5ff703087092206"],["/archives/page/2/index.html","45a477a6fe520753d743a48b12ebd607"],["/archives/page/3/index.html","9da721a11b2fa5bb41506f008b7a4eef"],["/archives/page/4/index.html","07b96739f088e7dd52ee456292747153"],["/archives/page/5/index.html","cb934ecc6630a6923219cb214fd80eac"],["/archives/page/6/index.html","25cdcabf284f0f66c2212f09032e1ea0"],["/archives/page/7/index.html","770dae4dfb239723f9376f3bb2e5d102"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d07c7bdfdce361c091c770dcd9550b32"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","97b5cfd6e67eb91c55670dc23c6d552b"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/JAVA/index.html","d4f00c80b9df0d5d8cbaa36a7dc6cbde"],["/categories/index.html","0c3a1fe5f4de0f1fe9559cade3a7f59b"],["/categories/前端/index.html","0bfb5fe4181cac99b609eae800c22c6e"],["/categories/后台/index.html","5ee3b13aaf7b76dde87101e87bcd7c31"],["/categories/数据库/index.html","8b2042a677d0bb6bad2a2f780c5e0aa7"],["/categories/日志/index.html","7e56f5c049639cfe1e601f25388131e3"],["/categories/知识产权/index.html","757c8b78a00c3013f7cf830b95c8c36a"],["/categories/硬件/index.html","487b4eee96a75cd888f24b9893920850"],["/categories/算法/index.html","14fe1ae61b8d0bdf527bd313b80d8bcf"],["/categories/计算机基础/index.html","b031bf616c71823fb510ef3571cd2be4"],["/categories/计算机网络/index.html","b3561f8ae427e5e96977a81be6dcff0f"],["/categories/设计模式/index.html","d3282e6b01205992ce7213535268eee5"],["/categories/设计模式/page/2/index.html","02e4c9765162678a4c6b9ebbcb07b029"],["/categories/设计模式/page/3/index.html","b4a7b6c63ace7be0e459fd6a1cf3fe46"],["/categories/课外扩展/index.html","5b8773cb68f4ac108cec8baaf2894ce2"],["/categories/软件/index.html","1311573fe1e7b5a76b55394f104f2baf"],["/categories/默认分类/index.html","49415c45451b765f404bfbb91484bd99"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","f0debb84539f8a0333b536a43f09e8e9"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","993e9f61b40dd6639bd483620443b27c"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","073bef02e77cbf0c2f41838d0ad3089c"],["/page/3/index.html","e2f9cb8c1194699c1987d08a5e40441c"],["/page/4/index.html","828e45df17459f3e9cc8e6cf550c62be"],["/page/5/index.html","85b027c8f9358aa54ffd0b32f96049c4"],["/page/6/index.html","573008e07a0761f00f9afbcb1bbdd519"],["/page/7/index.html","c46c28e204966ae7f3cfdd522612437b"],["/tags/Ajax/index.html","0a95399203f292fcde2dce2f6270dc33"],["/tags/AppleDeveloper/index.html","fa6199d5cec960de51c06611814caed9"],["/tags/JAVA/index.html","1b12373e0ef4e3654d89a7a4e44ad694"],["/tags/JVM/index.html","617a5377bd3f237e15c2c728f483cf99"],["/tags/JavaScript/index.html","170f47649677e8d4e08e4238c51ca1f9"],["/tags/Jquery/index.html","e278af8814e363d4f2d2060bd178925c"],["/tags/Maven/index.html","a8348c1ea7090993308330f515e8b86b"],["/tags/Mongodb/index.html","f55d63a3dbe7f1ddd79dc1d72f7edcbd"],["/tags/MyBatis/index.html","b8a2d99795ffaaf81b69d56de0c23636"],["/tags/OJ练习题/index.html","ee75f1f20d7016bd414aae54301a6676"],["/tags/Shadowsocks/index.html","fd79d35135769892c4bc7e16d8d70878"],["/tags/Spring/index.html","53d2853607abc07d79ae4f04995e8c1e"],["/tags/Struts2/index.html","f05a0659181a52d4e7183f7f681f7a05"],["/tags/SwiftPlaygrounds/index.html","1f0a00d08cf9d7201bdbe222878a7e8e"],["/tags/VPN/index.html","c364201e582bc53433aaa88c3983109f"],["/tags/VPS/index.html","4c1b4377b333b4f373476f632dbd6010"],["/tags/hexo/index.html","333a39c35f99ea51877870e0380bd2da"],["/tags/index.html","035a4e75dcc7a5a5037d8416319349bd"],["/tags/南阳OJ/index.html","a5884dacc84164a2d73f2b929c489def"],["/tags/博客搭建过程/index.html","b1d7012f9d621897aaf72990c2b733b8"],["/tags/反射/index.html","d54b73c0c838af6b8875c08be27e0450"],["/tags/学习笔记/index.html","697ecf91a94cb72fc07dbc83e832316c"],["/tags/技术/index.html","80a4a8d53b54d95c716fe21cba8f1b87"],["/tags/操作系统/index.html","38c9442ea0433922776b8057a67c20ec"],["/tags/日志/index.html","da942b55717e20382094f7f33c307141"],["/tags/框架/index.html","fa7f7dbac2c061bb77303fe70229dc66"],["/tags/测试/index.html","8a37c1fe05f85aa5e4f3d8e19213faed"],["/tags/知识产权/index.html","85b4fcf771450558a9a3ab3a692e681b"],["/tags/硬件/index.html","d7d9ae39f9cbd40eb91ef353c7859c5f"],["/tags/神经网络风格画/index.html","5e0dd4eb6cf44b34e0495c049ed90fc1"],["/tags/算法/index.html","9ec815a74130da1aebf974fbd22924c6"],["/tags/统计/index.html","ce71bcf888e5f9eb3b0536db1cae49bd"],["/tags/翻墙/index.html","d5057aec2d00dff7d7ffb08024813090"],["/tags/计算机基础/index.html","ce5040534a1570e35e4342a99a0376b6"],["/tags/设计模式/index.html","f9d73243050ed0b6cf2aa3e976c19347"],["/tags/设计模式/page/2/index.html","b8e36332ea3b732e2d920efe47ea754f"],["/tags/设计模式/page/3/index.html","3f0e07bfdc60465631b0387d55f1ef10"],["/tags/路由器/index.html","791617e805e66da69ed990cf7623ca3f"],["/tags/软件/index.html","7e01d39321815f7c38fb700b8fa26c19"],["/tags/锐捷/index.html","9549acd95dd5f603d042d8362483145b"],["/tags/集群/index.html","02a3d998fa71b5b7814bb31e17ada63e"]];
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







