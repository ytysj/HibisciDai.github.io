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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","0b7fdafe26cb184278d84fa02de322c1"],["/2016/12/25/2016-12-25-木槿花的槿/index.html","edf0a54e5f3bdb7ec2593d9f86136669"],["/2016/12/25/2016-12-25-木槿花的槿/木槿花的槿.png","7fe213cba5fa6abb06ec87ce0bf447b3"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/index.html","66f0f44258edcbbb095160f824327b3e"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/脑神经错觉型假性心脏痛觉综合症.png","2ad6fa54869c250de4f2fe62091ceb4a"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","2d5c43500e45d569e8771e02c192af33"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","d7032088e341e114fb3b00f106817e76"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","e1a6b3df18b9745c7eb65ee007dc047a"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","9081bee96902ea8deac896167922a71e"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","4db5bc8686690a590199ccf9b4d9133e"],["/2017/02/07/2017-02-07-知识产权/index.html","1c0471e40b0cfb32eeea746e5b219023"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","b7d43ced2e256655427232a9761e93f7"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","1dc28f7087b31cb940409e1c08619af4"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","589e222db2d20f3033afaedba0103e5a"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","65c662e36b66cdef2a4889992d8dca88"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","eb461cf86afbc640a68d9dc01fcf72e0"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","327bad7e1decb8230b8af04fcd1e51b3"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","51fc777eb825b8e8025cade1c58b3d3b"],["/2017/03/19/2017-03-19-废柴槿为什么喜欢写日志/index.html","df9e570ebebf46d06eb6f5d67523989a"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","15839e9a0a2088cb3d84e500ff96ea65"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","be1f7b6bee79b69fbac80e5fb23dc245"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","686982544bd76f260613fc134697b755"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","3e369b346a4818c3ec7f8c0af2d10820"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","745fe3c5332d0146be45f5d3868f743c"],["/2017/05/19/2017-5-19-我姓齐天名大圣/index.html","0892cf6c71658a57c5e966cfdb1fbc41"],["/2017/05/19/2017-5-19-我姓齐天名大圣/我姓齐天名大圣.png","0a1f5176d29a336fb0d6b8231d3116bb"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","b9d22834cb6aff77bf3f7ed01fd2d3df"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","77b34a19a15d734a736be5a1553b3a03"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","d1db199a9c92f9476ba3d7ee195c7b91"],["/2017/07/12/2017-07-12-设计模式初步/index.html","00f133b1e13bc1437651db4f3095ace7"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","72534025c8eedab0222989c7be84eb57"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","d68fb67cddfbacdd696e7504f6a9c14a"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","9a0bdc0cd3c1d1cb28e9f71647e179d7"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/01/实用网站统计/index.html","3a44f56e525f30bc48c97ea0d46ef40c"],["/2018/01/01/实用网站统计/实用网站统计.png","f053f66ca2d68fce9311e71a14c43f16"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","b4d094de2f8a05ef0946cecde803f9f0"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","e23f5567696c248699ecd3f103f201c7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","0e2753e54ba013877ae673cf9f3ed779"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","2a049ba182c059044f4ca38a4e795838"],["/2018/03/19/hello-world/index.html","636dc4112d989020094485b7a228c078"],["/2018/03/21/设计模式-03-工厂模式/index.html","da708e9711d5c6c458dbaa25d8fa8a57"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","8d52e5830546b252227a0f350b477156"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","fa343c5c9e3504e8480aaebd7ad2d82e"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","074518c46625727ac337f032a0cec5fa"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","cecb633eed89afbc3ca9801922eb67b9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","5f2fca15dd2be0ae8068825962aae720"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","70479d6d0c206a6823de4c0bfc746a61"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","20e9504750e3db2ed370bda45a9772ca"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","2aab1584cbbc41f8450c8bfda210b058"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","a2aafb269bfa32bedf7673d13d93a7e9"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","89b9b26764ea356a34a36b10242fd5d6"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","9e3ae4a481fe1b1902cddc1270e007d7"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","021e598e3b72459a5694ed50590cff73"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","ed0ede1a81e798414aafd48a56c0b9be"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/04/25/设计模式-12-享元模式/index.html","76effecb94fbad717665a02a6cb0d9a8"],["/2018/04/25/设计模式-12-享元模式/案例1.png","a2df8feac03b08ec5123f08ee919e567"],["/2018/04/25/设计模式-12-享元模式/案例2.png","7598d9706a786f94ff3cc461b2c807a3"],["/2018/04/25/设计模式-12-享元模式/案例3.jpg","48fd0356f3db1ec3699581b3010e663e"],["/2018/04/25/设计模式-12-享元模式/设计模式12.png","a074a8546709e3342eb267b2225c90e1"],["/2018/04/28/设计模式-13-代理模式/index.html","d8aa8c9911c6775b8b78c434b3e89e37"],["/2018/04/28/设计模式-13-代理模式/案例1-1.png","9aebebd07571ddd6aa0f09adfe2991d7"],["/2018/04/28/设计模式-13-代理模式/案例1.png","8181676ba545fbd8fe27537f541c47e2"],["/2018/04/28/设计模式-13-代理模式/案例2.png","5cd7435b295a89472d99cc82ba471d2b"],["/2018/04/28/设计模式-13-代理模式/设计模式13.png","1eac492880b6c08b78bc7b6c0efaf706"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","0a87829dea686e9f63f69c1919675a75"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/2018/05/09/设计模式-14-职责链模式/index.html","dfec6a53c8fa23acd77d0efd1667d755"],["/2018/05/09/设计模式-14-职责链模式/案例1-1.png","e6731c71cb4c42a06bbfa61a837fa0a3"],["/2018/05/09/设计模式-14-职责链模式/案例1.png","bbf9ff11ee028e9c2a5df9a0514c3d9c"],["/2018/05/09/设计模式-14-职责链模式/案例2.png","2741553387d1e61a8f625e5c751107a3"],["/2018/05/09/设计模式-14-职责链模式/设计模式14.png","2f27e43d9a1e9dd2850a0553e37aa439"],["/2018/05/14/设计模式-15-命令模式/index.html","ce047a7a28358a6c2327d9d2f39b0c22"],["/2018/05/14/设计模式-15-命令模式/案例1.png","c85310afd3cee968693adf265d4a9120"],["/2018/05/14/设计模式-15-命令模式/案例2.png","a09d04d15adba837ea11e4959c34352f"],["/2018/05/14/设计模式-15-命令模式/设计模式15.png","1c326e08257ff4a8f4d59fdcf2124328"],["/2018/05/16/设计模式-16-解释器模式/index.html","9f1fd9887288d7191139dbe4a39f794c"],["/2018/05/16/设计模式-16-解释器模式/案例1.png","5855bc24d9872b01a920b5d6b7ef1ff6"],["/2018/05/16/设计模式-16-解释器模式/设计模式16.png","dcd14bd75535d9e4aa27e6bc553633a1"],["/2018/05/21/设计模式-17-中介者模式/index.html","a73f0e9ad65c97dc4e05644ad183d0c9"],["/2018/05/21/设计模式-17-中介者模式/案例1-1.png","1cf06f642544ea3101f5091aa76ec6c8"],["/2018/05/21/设计模式-17-中介者模式/案例1.png","41a1683c3bbac5b72518a281aa643f9f"],["/2018/05/21/设计模式-17-中介者模式/设计模式17.png","a7f3406063682a6e5a5b20ff8d0140cb"],["/2018/05/23/设计模式-18-备忘录模式/index.html","f9ec01cf08d80776512f27525ae3ea8e"],["/2018/05/23/设计模式-18-备忘录模式/案例1.png","3a0c82ab530752bc9ad746dba2e831ce"],["/2018/05/23/设计模式-18-备忘录模式/设计模式18.png","42e6313d212d9395e43a0b07b593537a"],["/2018/05/28/设计模式-19-观察者模式/index.html","29a2d8be6b6cafd3a21eb23963943e03"],["/2018/05/28/设计模式-19-观察者模式/案例1-1.png","8ed252f2260cc03de20038fc565f5a34"],["/2018/05/28/设计模式-19-观察者模式/案例1.png","62421f4b57d3a9e4ce09125b7aa194ae"],["/2018/05/28/设计模式-19-观察者模式/设计模式19.png","ff1a611c9d1b883f6ba126e800990436"],["/2018/05/30/设计模式-20-状态模式/index.html","767c7e36568ebfd848529812627087d9"],["/2018/05/30/设计模式-20-状态模式/案例1.png","8e12c2da2adf21da9e116f309288dba8"],["/2018/05/30/设计模式-20-状态模式/设计模式20.png","3b681387bf8a6b779d7c71ac8eae9570"],["/2018/06/06/设计模式-21-策略模式/index.html","8eaa5a3f77a56c23d67de22abf32a5d0"],["/2018/06/06/设计模式-21-策略模式/案例1.png","e8bd6dae5f0c714dccd6fb99c94f1e16"],["/2018/06/06/设计模式-21-策略模式/设计模式21.png","3b6647d82b21389fbc0d41658e090072"],["/2018/06/11/设计模式-22-模板方法/index.html","fa8ff8253dfb8870800b6b5c28003cc6"],["/2018/06/11/设计模式-22-模板方法/设计模式22.png","90010fcbc1eb3b654b981492802db493"],["/2018/06/13/设计模式-23-迭代器/index.html","7be12d89ccd86a477a0ed7d64ae20467"],["/2018/06/13/设计模式-23-迭代器/案例1.png","4efd004b5ca1ae900f6e818a0165c486"],["/2018/06/13/设计模式-23-迭代器/设计模式23.png","fead4258cd83831c9ecdc614b1eae2ab"],["/README.html","bd7723262c2a236206b4b37c4c5b1853"],["/about/index.html","7b6dd7563214406fabc908d1a3e97bb3"],["/archives/2016/06/index.html","fbb382c4ead384290ef6c6dfcf33d04b"],["/archives/2016/12/index.html","9279355535f16a7e971956191b0c3a23"],["/archives/2016/index.html","92af79ce82fdd4d136559fea479dfb29"],["/archives/2017/01/index.html","96994cb41b3987f28151088bf07edcd3"],["/archives/2017/02/index.html","efaaa02dd9ca703b04e5407e824b2a44"],["/archives/2017/03/index.html","ca09a2d574a7f76624c845ae3ac6ea65"],["/archives/2017/04/index.html","89fa624073f68bf5c1102cd2a0be9476"],["/archives/2017/05/index.html","3991ebc1a4844325817ce8953fdfbcec"],["/archives/2017/06/index.html","a95ba51c3d8bcd0d243cbf486c3a0fd8"],["/archives/2017/07/index.html","261821f8e7efd16b4edc526d0222f435"],["/archives/2017/11/index.html","81b6eecedf127757449bdba347b7fa5f"],["/archives/2017/12/index.html","b3b459eeca57d0de66200b609c195c66"],["/archives/2017/index.html","a295d024bd0df8585b37f704298e9e0e"],["/archives/2017/page/2/index.html","e6e5981694d885d7499519fff392ff4f"],["/archives/2017/page/3/index.html","76647c10d0be97b2ec6e7febfa7f4561"],["/archives/2018/01/index.html","bc5f7f78dd7d1e62adbb29d714c720fe"],["/archives/2018/03/index.html","a3959e6c555f7eae0d9c639345f9d551"],["/archives/2018/04/index.html","34dc0ad62c8cdaed6bdc4a1ec87fb9e1"],["/archives/2018/04/page/2/index.html","f7c2d310771bcd643e7abaa407a6400f"],["/archives/2018/05/index.html","8744662723e0e82daad81c09379488f9"],["/archives/2018/06/index.html","785eed92e5a907e4558385921f86e3f6"],["/archives/2018/index.html","11dee00b43b832f0f8f6fc059f32163e"],["/archives/2018/page/2/index.html","e65ba14a5bb2ea992011d9d4d5fb76f5"],["/archives/2018/page/3/index.html","77ff24599d159bfe965c1eba1d5a230f"],["/archives/2018/page/4/index.html","654bb53655e715d25935a2e64ca30237"],["/archives/index.html","5fd066427ba816c03dd645280bb38d9a"],["/archives/page/2/index.html","94943d33559b846a43b4c0ba3444ca71"],["/archives/page/3/index.html","78422d63a13e7cb39ef28e7467310a0e"],["/archives/page/4/index.html","58b691e3af60269d297d84b4ea6e340b"],["/archives/page/5/index.html","afee0203510489949f8c667724c67dba"],["/archives/page/6/index.html","91d29ab818b25ebb5f48cafc8399a9e4"],["/archives/page/7/index.html","c634393d5a607423174965fa05d8b9d0"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","f480f5a342715f8d79079f9f90985293"],["/categories/index.html","f33a8f00121b2e0ad23ac66965bcbf9c"],["/categories/前端/index.html","4eefd7970489e4d0daa374c125381536"],["/categories/后台/index.html","e5c16d84da3f162c7dbc456991bb7267"],["/categories/日志/index.html","4b747cba9a64864b3cfcdc9841a6f336"],["/categories/架构框架/index.html","5172275593af7baf7a54e23891f82b97"],["/categories/框架/index.html","ed63e5296bfd49b3b66963c0c80ec04d"],["/categories/知识产权/index.html","2951a734796809488a1ee87469614974"],["/categories/硬件/index.html","f0e4de5c2bf9bafd755faebc1778081b"],["/categories/神经网络风/index.html","6981115bcf39995b413d355ee76bea07"],["/categories/算法/index.html","24c9061d6beaed9f364be53cc2153b9b"],["/categories/计算机基础/index.html","92e12aa310b40f3e34f2fa4ee17a5ab5"],["/categories/计算机网络/index.html","35cc9295a41cebeeafbb72406c94cde5"],["/categories/设计模式/index.html","4b42a4a435e1e05379174454a9fcb829"],["/categories/设计模式/page/2/index.html","15811f3448bc4781ae74c54d0e7bb247"],["/categories/设计模式/page/3/index.html","b9995bd8953aecc3cc00d064a75d53a2"],["/categories/软件/index.html","0835feb78442e290d02b4f748384c89c"],["/categories/默认分类/index.html","3163f818ee1c12bc0afbb1ea7f0ea734"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","e9be12145a948c03007b11247068b526"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","cd812ca07b2346b27aed576ef4c12f6f"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","0200ab9cc94ed7e18e5afe5af06b345e"],["/page/3/index.html","096f5113652b5685542a81926fc8b604"],["/page/4/index.html","ca539e13263e4970649e4b46401032e0"],["/page/5/index.html","ac08c54795c7395f1123abe30e67928f"],["/page/6/index.html","965836038a4680d95594ece09e6e366c"],["/page/7/index.html","9e62693ad9b0cc9d50d2724fb2c75246"],["/tags/Ajax/index.html","f34f190f57a457ecfea89b627c6f4bfa"],["/tags/JAVA/index.html","49948033c6dec0145868098b6b3b5e14"],["/tags/JVM/index.html","29e507dac5c62994e363c6e67c8059db"],["/tags/JavaScript/index.html","c3130fc42055fdc2e972b6f1293a4a49"],["/tags/Jquery/index.html","653b87821329ed4fde32befe47aa76ca"],["/tags/Maven/index.html","d8a66ddfc25b73b14f46c1a1ea62dd73"],["/tags/Mongodb/index.html","60859e3012295be6b67ed3b3b476159f"],["/tags/MyBatis/index.html","00712b9cc043a20a704604fe9b095e48"],["/tags/OJ练习题/index.html","8c3e5f6de0c14dc53a269f1449636e57"],["/tags/Shadowsocks/index.html","6b673eddb0b9f4beb49c286cf4ef9070"],["/tags/Spring/index.html","31363290ca0b0d30c413873f459c76f7"],["/tags/Struts2/index.html","d354422893014a5e805d2b8d15575c43"],["/tags/VPN/index.html","b1e72643eae661ab2a4a549316f64af2"],["/tags/VPS/index.html","2ed84f9ade0496dafda4ba380a8993af"],["/tags/hexo/index.html","7ed0603883e07fb3abe861051f702622"],["/tags/index.html","4f51ea8ab3916483d3667052e9cdca33"],["/tags/南阳OJ/index.html","e6edc98d4347aeae0d23861064f78211"],["/tags/博客搭建过程/index.html","b2377ab71b894a0e6f88eca2d06e6128"],["/tags/反射/index.html","a24ba60c266e5608941ca6959f9efe47"],["/tags/学习笔记/index.html","82c5487c2370c4403924d3d11cdc9e12"],["/tags/技术/index.html","6f5299bae319a66caa9d43ea5a166fee"],["/tags/操作系统/index.html","64b1b3bc3b1da2d2f292bb17685e8107"],["/tags/日志/index.html","b1d282eec655e0d9eab7762678901dbe"],["/tags/框架/index.html","c1d931ec479349d53899e0142474732f"],["/tags/测试/index.html","4a98794b4e508243330ab75b7d152217"],["/tags/知识产权/index.html","a7ac486343e9970010da2d6bbe547a2e"],["/tags/硬件/index.html","956205e6bfeb93eba3e9e2eb3cf22b01"],["/tags/神经网络风格画/index.html","91778edb44e4c3234458a63cd6679c1a"],["/tags/算法/index.html","bb9ed82103ba9613f1fa67c5aeb8a1b4"],["/tags/统计/index.html","a23c66f38333a653ef6e75d162b90a61"],["/tags/翻墙/index.html","0568a0671693752640cfcfe1b4664877"],["/tags/计算机基础/index.html","63ed8994b1c4890011dd4b54afb93f10"],["/tags/设计模式/index.html","6845ffd04bf71c96864d3d3ea480d526"],["/tags/设计模式/page/2/index.html","380614d16c7629a0f5ba08218da80259"],["/tags/设计模式/page/3/index.html","b9abbc9f7ddba3a4ade7062cb605b89e"],["/tags/路由器/index.html","90c2487b6a6cd876d651d01b553018b5"],["/tags/软件/index.html","32c237b9a103696eacb89a4f47aa0f0b"],["/tags/锐捷/index.html","07e5e414cde8b4c12e331f0e0d714140"],["/tags/集群/index.html","1c1b9b7a70936db5af5ecc02c1be0806"]];
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







