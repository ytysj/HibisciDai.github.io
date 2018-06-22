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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","477fe460d92b09b9f4955c6ded5714ec"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","88bf4b0ff1abea9ea9776dc9aa6a7051"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","30709f05b4168e171c3d281833272f74"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","bc99c3b4ec2f68ca953f1703f427c080"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","69c4230c950b03de5a9fa0868837c30a"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","02e36700fcabee26b51aca6eb0506863"],["/2017/02/07/2017-02-07-知识产权/index.html","bddf2ad5194d6228943198b1c613debf"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","88da42b7c153c3239ce64e01d7db01f7"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","5d40d3bdb23c41c382f52f7b92fd8918"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","f9f8dd6190d9ec085b7396254e937efb"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","d6c3b3853ac91d5c0f7cc4fa1fce3b80"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","96725c9824b195dc1d18339804aeaabb"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","39b93af9f843b0c987c39cbe547861ec"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","55eed4cf219f4ca86ae54b42dcc703fc"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","3637f6bdfbff1efa4cbc8c33fd85288f"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","0dbac6015d47ffc0ae70b0924e1679f2"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","718c3a5ba1ab55b73fcb8421656f85e2"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","29bcc3a8537ec6fc87b02500802bc572"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","b5f6424322ade991e064c756d5562b2c"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","ee01a63660268ea1ec794bd864374fe3"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","867e90ad3c46c7a61713d47bfca22acd"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","5a37a8f9c31a03b70cfe4981b5cb9f6d"],["/2017/07/12/2017-07-12-设计模式初步/index.html","9f4b5b9f6c60720fd331e1114b6d84af"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","b88444908f3ac1d1eff9fa6d32eeb60a"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","8e251d2e840d0297e9c0dc8b55f5c25f"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","cb30c776859bcb7765c477a7fcbe9561"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","3515a8272a022eafe8cb932d17211135"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","0941781187b5cc715e1d8354a3aba8fb"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","ec20df38beddbdaf680c755d00cc3623"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","2744eb0e7969e7839fb5c25cd2a28dc6"],["/2018/03/19/hello-world/index.html","5f088f6a4e5ffea744dee7414537f9c4"],["/2018/03/21/设计模式-03-工厂模式/index.html","fba5a7bf026badd90d1a18543dde5c68"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","bdf5003079dcbc0f6973606fca1eff0f"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","453b8fa258eb5b207e53815d2f78ebef"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","9a7e8f1517134d56e84fd3912501c9c9"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","c535ed2fd738bf45dc753fd17a310192"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","825a40512d1c381b979dca3d17217ea0"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","7b49318d8b757a3754784d790d77e39b"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","152ab3db65e5212dd9126451944d7a37"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","1b6ba76fb688c32b368738c31c18fd35"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","b73210945d739d8371933be85b19c96c"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","a98a721f7829489fe602c08ee89ea197"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","288a20e741b26db8fc6a6373b407a742"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","4b231ee79766407c3c5d133073a16cd4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","f0b14719daeb106da2e27e1971a24374"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/04/25/设计模式-12-享元模式/index.html","7957bcbe3960f90acc2ab8ad26dfa3ed"],["/2018/04/25/设计模式-12-享元模式/案例1.png","a2df8feac03b08ec5123f08ee919e567"],["/2018/04/25/设计模式-12-享元模式/案例2.png","7598d9706a786f94ff3cc461b2c807a3"],["/2018/04/25/设计模式-12-享元模式/案例3.jpg","48fd0356f3db1ec3699581b3010e663e"],["/2018/04/25/设计模式-12-享元模式/设计模式12.png","a074a8546709e3342eb267b2225c90e1"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","97610b59d1878c5e67abc3bbcc8ac9ff"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","479e99e340db9ec885ad2d49e82ae176"],["/about/index.html","30609d499ecf34723646f8cf38933655"],["/archives/2016/06/index.html","13f99989418d9833a82b28a7b1a490ad"],["/archives/2016/index.html","ceb20b280fa7eb572f40ac6c56f3c353"],["/archives/2017/01/index.html","52b535bdd96a24365d0eca2591f4ae9e"],["/archives/2017/02/index.html","e8826bc4d2e53b6e02de1034d883a5b8"],["/archives/2017/03/index.html","ca44eade9fd840f6643d9fd9e03f8bbe"],["/archives/2017/04/index.html","6fe6a7c705a42d737dab142e27b9c3b8"],["/archives/2017/05/index.html","c4fa5344be97c2ff7c0514b93011bd15"],["/archives/2017/06/index.html","3e6877b3310c587a2b25854cc1999edb"],["/archives/2017/07/index.html","0b11d32db08ea179d7780a00ee38a587"],["/archives/2017/11/index.html","8ca0a7840edd8f3f7e6ab0389b6327e9"],["/archives/2017/12/index.html","4c0d25430885a4a2b61cdb392482dc5c"],["/archives/2017/index.html","942f49000b82fc4a0af641d9565da492"],["/archives/2017/page/2/index.html","c39aefa990dac8c6a038b044de2c9770"],["/archives/2017/page/3/index.html","4a8afb5dff9a4e6cc129168872719186"],["/archives/2018/01/index.html","efa4c4e1b2ec30598be62ad458b7e7de"],["/archives/2018/03/index.html","00479b24c1fdb8b5e00f773de0266bac"],["/archives/2018/04/index.html","d0e54aae328852fa2cd402ab50b2876d"],["/archives/2018/05/index.html","57d2e4b1efb0ab6e27fc04f97778a8f1"],["/archives/2018/index.html","e5a1683785132f8701b045142803951f"],["/archives/2018/page/2/index.html","3c9a985a9c27d0cf136bf4bf0918941c"],["/archives/2018/page/3/index.html","9988eb12a6a7c635200f756c448a225d"],["/archives/index.html","793acf40fd967d109d7ab6d801066581"],["/archives/page/2/index.html","1c12f89346419aa542c4ecd6d756206a"],["/archives/page/3/index.html","3804b1facc113fc823be819169855bbe"],["/archives/page/4/index.html","3afd7665b36b07cc010efa3890202370"],["/archives/page/5/index.html","2df9c989962220ad41eef0b1dd5fae50"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","49d866b32cbf80a515eb512cac452978"],["/categories/index.html","3b0fc669ab26ccb2ef945975a9986b2a"],["/categories/前端/index.html","b892f5a65ce401ccb9b352ba9db0e10d"],["/categories/后台/index.html","50a9d7dec8f7d5b38ac62dc3cc03adba"],["/categories/架构框架/index.html","66d7a93aa5b0f6e510ff735537dcb4d6"],["/categories/框架/index.html","5791c5f23e848dff07e684c6fa753a07"],["/categories/知识产权/index.html","6081cf06b18d86e2c82307c4fabb5fc9"],["/categories/硬件/index.html","b0a75ecfff08533dec1eaa274e78b003"],["/categories/神经网络风/index.html","adba91cf776814ec089d7339fe75c8f8"],["/categories/算法/index.html","7545787a8d2c707b7335e074d681d351"],["/categories/计算机基础/index.html","5452fde0969a2da9a94aee5e2d862e8b"],["/categories/计算机网络/index.html","e58c0a4a37b4c4ca9cb4475198454d46"],["/categories/设计模式/index.html","0ed8eccd61666382eb1f7f3869e99be4"],["/categories/设计模式/page/2/index.html","141722c26988b45aa0d596e896ed42a3"],["/categories/软件/index.html","5b6e5c0f80b8acc067a4b9dc52057a4e"],["/categories/默认分类/index.html","a43397b05f389df4e73df5e15bdd54a7"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","392e16ac54b5c30fe2d4d412887824d2"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","d18c9535cb85b4355db83dac2e5707e6"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","d18df09b57d926ea6ed4c7efc43480a4"],["/page/3/index.html","a9582533820c67a7925387191b6622cb"],["/page/4/index.html","b5410fdada54f49c4516b492f1e2f982"],["/page/5/index.html","d58c8f759c6433057c4879bdaa48795d"],["/tags/Ajax/index.html","d03a3133899e569e90ec7bed549c0589"],["/tags/JAVA/index.html","3062a8a20738dccbf868bfe9e69761dc"],["/tags/JVM/index.html","bc6a504cdeace93af8b3b0b2713144bc"],["/tags/JavaScript/index.html","010b8224740aaaa9f55d3e6bf2c6f895"],["/tags/Jquery/index.html","5fb241185f91daa82c8f65d542a7803f"],["/tags/Maven/index.html","95319710e5d309bdf24d7eda732c49db"],["/tags/Mongodb/index.html","9fbac9913c2cf90e9c9d9ceb620bd21c"],["/tags/MyBatis/index.html","7bf4b68b9aae1b8187ca4db80d893cf8"],["/tags/OJ练习题/index.html","ff521c1f09de9c0d5a00bf3613169940"],["/tags/Shadowsocks/index.html","e8321f72836e0019801ee77d2de4e7c9"],["/tags/Spring/index.html","a9e9d517597d444ab4a7084196ddc075"],["/tags/Struts2/index.html","d4be8cbe4612b9dd918706fecb9744ef"],["/tags/VPN/index.html","e3c9db5a2321b7cd4b7b258cf84783df"],["/tags/VPS/index.html","8adc5f9bc68c6221b9e0ada34d632649"],["/tags/hexo/index.html","6e9b59db05dc948376c11565d5d1c68f"],["/tags/index.html","d172c126731f4ca7535548436fd927f5"],["/tags/南阳OJ/index.html","7e950458456f9b847cf41eab06ddd2cf"],["/tags/博客搭建过程/index.html","d287dcb2980e4c623703c8cc0596034a"],["/tags/反射/index.html","f064d348d46a7975a6f65b983d5d54f6"],["/tags/学习笔记/index.html","45f80d427c307fd3c23b7ee9e58538e0"],["/tags/技术/index.html","e32ad7d7e19e0a97ff30255f70fa8ee3"],["/tags/操作系统/index.html","09e895491573c80e7302e5d8b62b8619"],["/tags/框架/index.html","6c11af71db524df8d97b7657401fc14f"],["/tags/测试/index.html","d28e1a616070e4546ffbafb23fd10785"],["/tags/知识产权/index.html","fe7a0a73a8662ab9e8b01059e4aad9f7"],["/tags/硬件/index.html","b0945ac1f26c96dd951e345fcda2edd9"],["/tags/神经网络风格画/index.html","5bbc0e431611fa554ab0dd9be0909b19"],["/tags/算法/index.html","d55402d22bbb24f049da0811ff6b08da"],["/tags/翻墙/index.html","9c8abd8e117e48aefe080b52d2630dd9"],["/tags/计算机基础/index.html","e06a9b24cd921a9bcb04956abf15880b"],["/tags/设计模式/index.html","c362baf7365c05daef6594aa0a3b2e86"],["/tags/设计模式/page/2/index.html","d0699c20823609257aba50ac014c914b"],["/tags/路由器/index.html","214189c51ec408a9c3cc6df63029539f"],["/tags/软件/index.html","95939e7f1fdc20fb4fa40c4d9d953ac8"],["/tags/锐捷/index.html","7a00869f3b9abb8e9e6179bae901fb34"],["/tags/集群/index.html","a298cc045defc0943d00efd81f776ece"]];
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







