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

var precacheConfig = [["/1997/06/01/废柴语录/index.html","f692bdcb227edc67a67ee8829bfb234a"],["/1997/06/01/废柴语录/废柴语录.jpg","4ec2f1037d5373e0d55350db4043c313"],["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","32a6e212d08237f8502da8337bbbf864"],["/2016/12/25/2016-12-25-木槿花的槿/index.html","129c29d80cb6a1ace456c14577957194"],["/2016/12/25/2016-12-25-木槿花的槿/木槿花的槿.png","7fe213cba5fa6abb06ec87ce0bf447b3"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/index.html","4b8aefeb3e90eee6ae5a38dcb9035c1c"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/脑神经错觉型假性心脏痛觉综合症.png","2ad6fa54869c250de4f2fe62091ceb4a"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","ebd42464b22920c7d0993609a1708eba"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","027ec934611ce300479b378805138b9f"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","9123d30ea505ebe67a055365fca8af2e"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","c69a2df3a87c0519d9cb4f531360a005"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","f438edc0a4ecfeedfe8145e1d09cdb3c"],["/2017/02/07/2017-02-07-知识产权/index.html","e738f2f93bf3b554ad7263980ab20335"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","c30de58e74c411ee1db70bbc16546c13"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","a670f99227e8c4a1f70664da8fb3e211"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","e1ccc09c02d933b819a49531505ac145"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","5ce605727b3b5307a554656ae4308f3d"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","1df68001e3f9ae8007bc970bb1833583"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","acdcdcd78f53f8b81df7f7bb125e3d65"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","38b9bf64288bf11b2f4a0da283d89a8b"],["/2017/03/19/2017-03-19-废柴槿为什么喜欢写日志/index.html","711da4e5c42fcb291f149722548f8eff"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","ad890a882ad4a0710d8d8ccdea1e0675"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","6829d000e20763523997bcf092c52b0f"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","a0efada914130d72e16b07f3451f13ff"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","aa03292b779b181f48a063be778bbabb"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","151cef81cd5b19b30a644817a09f3b86"],["/2017/05/19/2017-5-19-我姓齐天名大圣/index.html","f42d3016afe40bc19ec492cc23bc5186"],["/2017/05/19/2017-5-19-我姓齐天名大圣/我姓齐天名大圣.png","0a1f5176d29a336fb0d6b8231d3116bb"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","4a4b8ff6334d6d14cfe84be5d1939eee"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","7438b76fd7e9c0aeac7eb085c67fc118"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","e11710bcafb04d2383e85bb62b1fd675"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","a75311ea431d81d51d02c2894cc780f7"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","372833a7738fb4e9343e85d8c79ce69b"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","543d332b4fc193a5bf028c45677d1ea5"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/01/实用网站统计/index.html","36de1780611cf58eb5cf32ac336f8b84"],["/2018/01/01/实用网站统计/实用网站统计.png","f053f66ca2d68fce9311e71a14c43f16"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","7b363518b07d77b3c7a3d432077dd04c"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","b512205476cf8aa52b3ce053cc8cd4aa"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","f4b7be7bb11d75cb9a1d42414c3c1f67"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","4d59d870d48cfb036c01bd1650be610a"],["/2018/03/19/hello-world/index.html","62461ae53c2045fcdb54a486fdc9da97"],["/2018/03/21/设计模式-03-工厂模式/index.html","545d70accdeef082b6783ada559891c2"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","355bc9cf1ccd492b18883f80e47529dd"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","fa2af848ab7c2ee0c1fb8d8f45f009dc"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","533aaef850a85e1329b35e556066f9fd"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","f7dcbc16eab76163b9cf2cb8010dddd5"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","7780ca5e5f342b0b6dacd5f5e46fa9ca"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","dd77992a8f7392b7a6e2771797c47d32"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","69afb3977d5dab67cdc0f1109d581c6b"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","90e99a5a31a07001d03c1a062410863f"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","b697a8ac6ce55a030cd09043d6e350df"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","0ff3fae50692ae303ae35f758543e283"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","d17e7b4bb36e4e65d37e6fd5d43886e8"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","3df9f0ff737dac233b9dea7e4c4b1903"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","c99fd2f8fe6a0a10c4abcaccd71fd741"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/04/25/设计模式-12-享元模式/index.html","73460c6a7604f74bf2750cc4db9a0829"],["/2018/04/25/设计模式-12-享元模式/案例1.png","a2df8feac03b08ec5123f08ee919e567"],["/2018/04/25/设计模式-12-享元模式/案例2.png","7598d9706a786f94ff3cc461b2c807a3"],["/2018/04/25/设计模式-12-享元模式/案例3.jpg","48fd0356f3db1ec3699581b3010e663e"],["/2018/04/25/设计模式-12-享元模式/设计模式12.png","a074a8546709e3342eb267b2225c90e1"],["/2018/04/28/设计模式-13-代理模式/index.html","e1eeeab644de481d4d4ace1b17ce5124"],["/2018/04/28/设计模式-13-代理模式/案例1-1.png","9aebebd07571ddd6aa0f09adfe2991d7"],["/2018/04/28/设计模式-13-代理模式/案例1.png","8181676ba545fbd8fe27537f541c47e2"],["/2018/04/28/设计模式-13-代理模式/案例2.png","5cd7435b295a89472d99cc82ba471d2b"],["/2018/04/28/设计模式-13-代理模式/设计模式13.png","1eac492880b6c08b78bc7b6c0efaf706"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","b5f38ebc6823a0b65ec01cb9ccdb0959"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/2018/05/09/设计模式-14-职责链模式/index.html","e91e8fe29519b7773a55bd3106d7e8ba"],["/2018/05/09/设计模式-14-职责链模式/案例1-1.png","e6731c71cb4c42a06bbfa61a837fa0a3"],["/2018/05/09/设计模式-14-职责链模式/案例1.png","bbf9ff11ee028e9c2a5df9a0514c3d9c"],["/2018/05/09/设计模式-14-职责链模式/案例2.png","2741553387d1e61a8f625e5c751107a3"],["/2018/05/09/设计模式-14-职责链模式/设计模式14.png","2f27e43d9a1e9dd2850a0553e37aa439"],["/2018/05/14/设计模式-15-命令模式/index.html","a5ce44200f4250f769f18823a3bad8f0"],["/2018/05/14/设计模式-15-命令模式/案例1.png","c85310afd3cee968693adf265d4a9120"],["/2018/05/14/设计模式-15-命令模式/案例2.png","a09d04d15adba837ea11e4959c34352f"],["/2018/05/14/设计模式-15-命令模式/设计模式15.png","1c326e08257ff4a8f4d59fdcf2124328"],["/2018/05/16/设计模式-16-解释器模式/index.html","82a0d24395e21d53c63d686d7d628d76"],["/2018/05/16/设计模式-16-解释器模式/案例1.png","5855bc24d9872b01a920b5d6b7ef1ff6"],["/2018/05/16/设计模式-16-解释器模式/设计模式16.png","dcd14bd75535d9e4aa27e6bc553633a1"],["/2018/05/21/设计模式-17-中介者模式/index.html","1fbaf26a882fdebc808328b2a84f4dc5"],["/2018/05/21/设计模式-17-中介者模式/案例1-1.png","1cf06f642544ea3101f5091aa76ec6c8"],["/2018/05/21/设计模式-17-中介者模式/案例1.png","41a1683c3bbac5b72518a281aa643f9f"],["/2018/05/21/设计模式-17-中介者模式/设计模式17.png","a7f3406063682a6e5a5b20ff8d0140cb"],["/2018/05/23/设计模式-18-备忘录模式/index.html","0d2f1aefcfca78731379412c73895c2c"],["/2018/05/23/设计模式-18-备忘录模式/案例1.png","3a0c82ab530752bc9ad746dba2e831ce"],["/2018/05/23/设计模式-18-备忘录模式/设计模式18.png","42e6313d212d9395e43a0b07b593537a"],["/2018/05/28/设计模式-19-观察者模式/index.html","59520e5503745eb35edc3501c7a634e4"],["/2018/05/28/设计模式-19-观察者模式/案例1-1.png","8ed252f2260cc03de20038fc565f5a34"],["/2018/05/28/设计模式-19-观察者模式/案例1.png","62421f4b57d3a9e4ce09125b7aa194ae"],["/2018/05/28/设计模式-19-观察者模式/设计模式19.png","ff1a611c9d1b883f6ba126e800990436"],["/2018/05/30/设计模式-20-状态模式/index.html","7a0b99d0d0b13fdd02c27d9a5db04ff1"],["/2018/05/30/设计模式-20-状态模式/案例1.png","8e12c2da2adf21da9e116f309288dba8"],["/2018/05/30/设计模式-20-状态模式/设计模式20.png","3b681387bf8a6b779d7c71ac8eae9570"],["/2018/06/06/设计模式-21-策略模式/index.html","0839d59384324322300fba0139693ac1"],["/2018/06/06/设计模式-21-策略模式/案例1.png","e8bd6dae5f0c714dccd6fb99c94f1e16"],["/2018/06/06/设计模式-21-策略模式/设计模式21.png","3b6647d82b21389fbc0d41658e090072"],["/2018/06/11/设计模式-22-模板方法/index.html","cdfedf737b8dfb81aed649a13ded7d18"],["/2018/06/11/设计模式-22-模板方法/设计模式22.png","90010fcbc1eb3b654b981492802db493"],["/2018/06/13/设计模式-23-迭代器/index.html","c34f3db36c1464e003f5a32490a81372"],["/2018/06/13/设计模式-23-迭代器/案例1.png","4efd004b5ca1ae900f6e818a0165c486"],["/2018/06/13/设计模式-23-迭代器/设计模式23.png","fead4258cd83831c9ecdc614b1eae2ab"],["/2018/07/03/设计模式小结/index.html","5b4c7b25ee0788638ff3f89ab8716f87"],["/2018/07/03/设计模式小结/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/07/03/设计模式小结/设计模式之间关系-1.png","084b21bf00b785197cf4d97843a6ef9e"],["/2018/07/03/设计模式小结/设计模式之间关系-2.jpg","2468115597e7492aeec2e7962a83ea59"],["/2018/07/03/设计模式小结/设计模式小结.png","657f3955150c02d2f5a3f7615c910c82"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/SwiftPlaygrounds初识及九宫格最优策略.png","221d58dd4bbf80cac4ce307357519763"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo1.jpg","0e54378c5dd4127d19c5dd284ab62217"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo3.jpg","4e3ed0f31bf0f5e50a440e4ddf168c34"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo4.jpg","62a32d5a6553891ef731f1f22c338850"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/index.html","320a66731c06f725815c187ff192eb39"],["/2018/07/04/text-media/index.html","974eeffbca8725d9e206b50febb3d5fc"],["/2018/07/04/text-media/博客音频视频问题.png","ffdb8ecbc9a2db3abfe023c643a14bca"],["/2018/07/06/text-RSS/index.html","15b943cab1b986cdde396cd9afc225c4"],["/2018/07/06/text-RSS/博客RSS订阅.png","6c55c188aa716847ec58b11e0bf6e4f4"],["/2018/08/06/书单语录/index.html","3d328f3201548de0db0bf1c36695a2d8"],["/2018/08/06/书单语录/书单语录.jpg","8eb23f6d0b76b6a773e16d195bd1d9c3"],["/2018/08/21/为什么byte类型的范围是-128~127/index.html","4649f414e0057e844159e7c4578f3656"],["/README.html","57eea096fd80a8c7fe2a419453de3f49"],["/about/index.html","55f24f63c42fec95cc6dcd96b24644ff"],["/archives/1997/06/index.html","ab8861b80be4b12c00bcc9d88f11f447"],["/archives/1997/index.html","03fddab8f2492c4f1bf5a22416dfb178"],["/archives/2016/06/index.html","80d51b7c7c102920151d43146c076222"],["/archives/2016/12/index.html","7fe30939517922f813b0e6ab7a9badcc"],["/archives/2016/index.html","7a4301a42828609de812d55bfae0e267"],["/archives/2017/01/index.html","897b9b87cb7dae4f5d91dd3896e9085c"],["/archives/2017/02/index.html","5890a75d6253cef9d5b3b6366e543622"],["/archives/2017/03/index.html","e29b0099f68d2325ef65c4011ee1d982"],["/archives/2017/04/index.html","e08262c7d82bd95588e48bc0285f9a70"],["/archives/2017/05/index.html","65e04ee71c32985be0b71395578fa5ad"],["/archives/2017/06/index.html","4437f0a5cfb7f8c3f398c6132b8ae826"],["/archives/2017/07/index.html","11141046ee12af17e3688a5c10b26519"],["/archives/2017/11/index.html","96a6d8b09aa1b89bb00dbe2b72aaf5d8"],["/archives/2017/12/index.html","e0ae0fa4f8d6d483c3438062d2d711db"],["/archives/2017/index.html","d11cf2b5d38a3c0d5d22a09eb1a6fa67"],["/archives/2017/page/2/index.html","dd8fe47d2e9bde32e6ba7f116f312cb5"],["/archives/2017/page/3/index.html","66f2a1c2378fefa76ee5f2f397cf6317"],["/archives/2018/01/index.html","214f8c9ea7e810f8065ac0bf019a709a"],["/archives/2018/03/index.html","06f605ea2a1036cfcbe8ff855bb4bed1"],["/archives/2018/04/index.html","003672d3760bce474a50c31215cd0c16"],["/archives/2018/04/page/2/index.html","1a55cb6f6acdfc9b324c62509e1947ac"],["/archives/2018/05/index.html","68a1931348c317e806e3c0816aa98b65"],["/archives/2018/06/index.html","d67b55e1518e8a47472295fe2572ddc4"],["/archives/2018/07/index.html","5d1ddcb4eea618f6c9049cfebd9eb74d"],["/archives/2018/08/index.html","44e37bf235e2a68965ea7962d4ae79a3"],["/archives/2018/index.html","ec5ab05429510659476ff0073ec6f71e"],["/archives/2018/page/2/index.html","d7d5452a8640e2e105846c0e2a4de362"],["/archives/2018/page/3/index.html","8415b2a9af6a730165d089ee0147c35b"],["/archives/2018/page/4/index.html","b31c6bdba56c1f169b4bd9de024f5c98"],["/archives/index.html","33df4b6fe0c0a6f387dccc7f6a8bb231"],["/archives/page/2/index.html","5b72e882986e8b54d201e74f3de22914"],["/archives/page/3/index.html","17a32cca0acdd3811ecac483a303fd24"],["/archives/page/4/index.html","a9dae9d339c88c1db5c869ad935a7023"],["/archives/page/5/index.html","bcb158f8a056b8cac3d949697207f6e0"],["/archives/page/6/index.html","6ca6a752616e1f9471b05acd6b5784f1"],["/archives/page/7/index.html","bf4a6b4a73f791679e83a22cd10b3cae"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d07c7bdfdce361c091c770dcd9550b32"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","97b5cfd6e67eb91c55670dc23c6d552b"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/JAVA/index.html","173453142e0b5665bd153aa9b8d551fa"],["/categories/index.html","926760b605dbe36c71efad671c99e849"],["/categories/前端/index.html","9f643456156f70596d6d783213b3a1bc"],["/categories/后台/index.html","16f40b1e4190e0006b118d2b2cfc1ce1"],["/categories/数据库/index.html","b6e49be825d501aec9659b23e0bfed3f"],["/categories/日志/index.html","419d538ac89aa486dba2990f3f4dda37"],["/categories/知识产权/index.html","9dc1cdea5235074bf6d4e1638f9267ce"],["/categories/硬件/index.html","c6e4791a2b34cf29501024d0f5f6a72b"],["/categories/算法/index.html","1f90df5ca62862351313053100cbfaf9"],["/categories/计算机基础/index.html","bb995f7c427117e468daebfcde342b19"],["/categories/计算机网络/index.html","a8684b1a692207076b2cfad3f7b94410"],["/categories/设计模式/index.html","f62af94e659d110b06d1048064add8cf"],["/categories/设计模式/page/2/index.html","a6644dc1c4f0e79f762e0a6c7a08add1"],["/categories/设计模式/page/3/index.html","d3b15be3a4994adb909585405526437f"],["/categories/课外扩展/index.html","80053e766b1b7fa2dd6ab977f2871ab5"],["/categories/软件/index.html","2cd6de068dbaaef98924a20d682f42da"],["/categories/默认分类/index.html","5742917ea8aab9d8cbe6ed230604cf28"],["/css/index.css","d50c35a872d92d4554219c43751d5307"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","8044694937c3dc83620962e133407a4d"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","3ebf077f3f0e7ae3b17c89905b785781"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","e7f96e731cf6932d111689a5a5f5334e"],["/page/3/index.html","eefade86c4651bb18e8d6e01a56eb673"],["/page/4/index.html","de418f996c172445c8581c437804f890"],["/page/5/index.html","07fb48247f407d9b654e46ec6768d2a0"],["/page/6/index.html","d8569eb5682a1bf108c3598f5a3070d4"],["/page/7/index.html","90f05afa93911baffeed9bd9030c859e"],["/tags/Ajax/index.html","2abe594535f4372075efb85ed96c7252"],["/tags/AppleDeveloper/index.html","483a9a4510c9320a1cbe438465d40a93"],["/tags/JAVA/index.html","ce63b4ed6fe44712f908e9a9b6f265ae"],["/tags/JVM/index.html","3846120284d49cce9793e0d9bfe6b4b5"],["/tags/JavaScript/index.html","1991b9711fd75843e32426b301602b10"],["/tags/Jquery/index.html","9dc5b0eba5b37ed5999d8c48a5c067cd"],["/tags/Maven/index.html","6159b9337ff12cca8ecd21cc8e9a22dd"],["/tags/Mongodb/index.html","d06976b96161ad0adc74283de2a23880"],["/tags/MyBatis/index.html","58370b96965555109675089e31477eb3"],["/tags/OJ练习题/index.html","266e0589681626207446cd6a13078e6b"],["/tags/Shadowsocks/index.html","3d0a452948a60170b3e849ba26a54772"],["/tags/Spring/index.html","4ab08e373804d2cb1f8253d0167fb73d"],["/tags/Struts2/index.html","7f47fd83eafa866c839d46d03cf763b8"],["/tags/SwiftPlaygrounds/index.html","996b159c45a6cbe3c1cb743b4fe8d0e4"],["/tags/VPN/index.html","6521aed99d7e9fd0bf1ecf4f78a96e3c"],["/tags/VPS/index.html","670e842d02ebdd0163dc299e09a77c30"],["/tags/hexo/index.html","151c3b7cad192fc5acbcb6c482caf8a9"],["/tags/index.html","9d978198a072d866e4af72a50c31765d"],["/tags/南阳OJ/index.html","67e7c678cbe2ff893413c8515e247d49"],["/tags/博客搭建过程/index.html","5c6843cc7c377704783470c365874798"],["/tags/反射/index.html","39dae02204a7bdb339b9ad5cd2baaffd"],["/tags/学习笔记/index.html","f4c0e5b30f3a5459583bd5ae781dea2b"],["/tags/技术/index.html","2f92cdf10d8217ccbd05c57a2b088bfb"],["/tags/操作系统/index.html","a88bee785e6221a442666f7cfc428ffb"],["/tags/日志/index.html","ac407ffbb3dac90bb3fca60033275bf6"],["/tags/框架/index.html","89712c6ceb44baa888a468b78c9255a7"],["/tags/测试/index.html","230e1362d6adc149a252d33d1cd8666e"],["/tags/知识产权/index.html","cc60010fe1e3091ef500f28105db7f2f"],["/tags/硬件/index.html","fa929019e61b9dd9180e852a4d1bdb3a"],["/tags/神经网络风格画/index.html","6ffaa6cd8fa88f729208b9e5bf4d1e7e"],["/tags/算法/index.html","ccb2f71616aad7dbc055a501254e7ded"],["/tags/统计/index.html","7a61aae13937b04e960f929d5805bdcf"],["/tags/翻墙/index.html","d9d3379083da1e90a882f872f2cbe934"],["/tags/计算机基础/index.html","1a1c7d9660707344dfa2396fa637c8ea"],["/tags/设计模式/index.html","f20bd086ddbc4db2737e67cc1c6de98a"],["/tags/设计模式/page/2/index.html","c81979bc2943e908d3bdb3682741f344"],["/tags/设计模式/page/3/index.html","eed70c83e75d09b3b34e65596a70ece3"],["/tags/路由器/index.html","699c875c4c92f74efb1305ceea46ace4"],["/tags/软件/index.html","7feac8bd6b93a259b2bd0e0f06ab7482"],["/tags/锐捷/index.html","ec831becfe7e382eeea01207c6c6a2e9"],["/tags/集群/index.html","5319133eb5210471fc41f359ee888d37"]];
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







