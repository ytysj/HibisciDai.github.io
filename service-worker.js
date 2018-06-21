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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","cb3bd3f38dd6e307ebe7581db70aa9c4"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","4010d1bd2112133689a1fd7a0b3b6771"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","83c277e23ab7122858777e1c4a92bce9"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","5efb893dcf53f690d0ae0eee16018881"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","a1b5ff681065cd09c6d46e85990ed56b"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","9b73d0655e7a7c6b72420916d318bc31"],["/2017/02/07/2017-02-07-知识产权/index.html","bea3b671b86ae37ea05e268ca231f172"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","18eb69055a7ea5b130f4cc1909ac4710"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","ed3f0e8f4a4cd9b16a9e06cc8adc7269"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","b4944bf192907c2155b95bff708c542d"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","9c8b504e3aa91129c0e2463dd569ceaf"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","68da9a5ce7a9a6e8f07ba32db7b59e2b"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","0bda285677f2e75c4a28811658141240"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","adfb7c90a1994841e015a88bbdb46fe8"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","668aaa3eead77d15a47736b1be0b9b0d"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","8117a8e413d4d6fec9dfa926fd0d39d9"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","ba20fb0edb6b60f7c1493472dab6c7ff"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","f94fb30e2d2716ef00b3d1f40136820a"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","11d5be86863519ffa34678562233fea9"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","f8a5be7e176129a22b0423c62de08de4"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","753214bfe9f3db5fc7302d6742ca5e93"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","2aa1e4a644d6f5616d4f8681dd6929f1"],["/2017/07/12/2017-07-12-设计模式初步/index.html","96aac05ae5465ed60bdd6ecb822f00ea"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","9e1dce9392f80c734040d3ea9151f8bb"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","ef307acce3be33fe8caeded032d7ed54"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","d7bf52775ecd4f97ce9eea7f51fba9bf"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","02ddd8f692cb058f79228cbcd08d90b4"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","0c95102d385883c008fb58bf8764f6f8"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","c2b817ddd85347ef4532b54190327916"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","9f7688a155a3f77633f570f22ae22826"],["/2018/03/19/hello-world/index.html","df635e79000778ec74c3a906a6dd2786"],["/2018/03/21/设计模式-03-工厂模式/index.html","548359756e8d9d74b18fd54f3d8b71ed"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","12f5327b8f07d3c1f95f36af6c0146a4"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","cb031038916965266c43967484b1a391"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","ad3ccf87a2691857c4c61e1b552ea63f"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","218e034bb252ce89cdcb4cc3cfd9aeae"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","57c33d9a8ffc2dcd6d8d30a7a6898fa4"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","0b1d1f7c57cd2823130ba4262718218c"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","e8192c6f04530dac2a6e04f65b53f496"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","9bf56b3fd800a8780983dca4b2b05575"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","22380305c278b20bce58d3ea878d1510"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","96a98c80b486fa836cda74dfb8b722ef"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","c1f0e6ebe4690ec1b88f584d8922ee31"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","ed9eaebcf040780a608e8f391df325e7"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","f1fc2e66374eb026dd7acad472f8a587"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","387392ec3eb1b04e6523f4b103b7629b"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","185134742d1d23b2a6c3e7b524e1bb99"],["/about/index.html","de9a31c458f7debbb7141c10693288ad"],["/archives/2016/06/index.html","b5840e6b215786e7c6e0b52f6d9ad4ec"],["/archives/2016/index.html","a64faf433b5af0731742aea992ee3033"],["/archives/2017/01/index.html","abfb6371d4c8d5c4ad1c5ce5f5d1af64"],["/archives/2017/02/index.html","63e1343afdce50ae6973739ae8c9d239"],["/archives/2017/03/index.html","2b717ef63dd9e98b29fb9be0d788bb63"],["/archives/2017/04/index.html","ad4427cdfd94d7f79e74f1a8a29aab2b"],["/archives/2017/05/index.html","0fdac333aaa31b63bf754c0fee4ba6ab"],["/archives/2017/06/index.html","3bb6ad483771f5294884aaf5e466c0a0"],["/archives/2017/07/index.html","f56b47e4b95de5d30dfa7074e96a7608"],["/archives/2017/11/index.html","11188b11c9da9556cc3e3b5dd365c5fe"],["/archives/2017/12/index.html","5bfb3f2ad875c0dc7e167bb7c7c3bf94"],["/archives/2017/index.html","6cf294441f7efc8ab449877ae7e28a35"],["/archives/2017/page/2/index.html","ddcb51c2ea5d0898c3047e1562f03881"],["/archives/2017/page/3/index.html","577a793005a80fabc6e0c14248dfef7c"],["/archives/2018/01/index.html","c26b71f19a2590451feec6e15f1ca754"],["/archives/2018/03/index.html","ef858cbd9ecb647a8b95da43f7b37298"],["/archives/2018/04/index.html","1500557be2c7909fb40490f4fc5b700a"],["/archives/2018/05/index.html","fb98b277b8b2e56c250d4f72604e7865"],["/archives/2018/index.html","1a90fdb693cd22a4525d703e169bec74"],["/archives/2018/page/2/index.html","62c34853f1e055fff98c06a83389c37e"],["/archives/index.html","eac1a6b39649464f5c51451c83eda725"],["/archives/page/2/index.html","3299b163da00e3d37b34422aa0d9fa80"],["/archives/page/3/index.html","0edd0b6ae07d967b924a6de8a67ce1d5"],["/archives/page/4/index.html","ead9ca71adb1fe0558a08aedef5664e4"],["/archives/page/5/index.html","cd892ea84290d2adc117eb2ffa385480"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","ad041f586c1a61d377e8dd18ddb49acc"],["/categories/index.html","8804e36adb726298e5c3bb14c16787b0"],["/categories/前端/index.html","0e08a932116521533b0f5075c86cce0c"],["/categories/后台/index.html","6e9b537ff002eab81976ab13439273f5"],["/categories/架构框架/index.html","206c1454254f88ef93c1636382752d44"],["/categories/框架/index.html","548b05104aafb81b3b2795cc2b4af6d2"],["/categories/知识产权/index.html","327af02558baa2e07373e15f7b87f288"],["/categories/硬件/index.html","bd2f5472cd8e197ff2abbeac3491dab2"],["/categories/神经网络风/index.html","29a1a38139636cd6557e6e465e175068"],["/categories/算法/index.html","9a22cb20647d47676b967f51892cee4a"],["/categories/计算机基础/index.html","78e81a5509ec250d43f37d4f845a3fc5"],["/categories/计算机网络/index.html","3b4b39fb889e2edcd92dc4118fcfd868"],["/categories/设计模式/index.html","3cb4650f4471c0822952f4e22a05c95c"],["/categories/设计模式/page/2/index.html","8b12fdabba48dc1df64ba8493eaf473a"],["/categories/软件/index.html","de84be690869b35a63d5ad3f73c1073f"],["/categories/默认分类/index.html","ad185611960a60b4c93f0202f52ed1ae"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","4e04e11132ab621654811d828d5ddb0f"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","45f1dac1e301ca44c0cfc30fb649db01"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","1180335770220879132a35f4fea70c08"],["/page/3/index.html","0c5edbaecd23676518d91c3ba0264088"],["/page/4/index.html","25be75251ac6be869b8929331e295569"],["/page/5/index.html","7cd4fa0cee7ef0e7a32de0d00299e087"],["/tags/Ajax/index.html","32fa05147e59b0b37f43a0f83bcbfdc4"],["/tags/JAVA/index.html","09b889977c28c14c658ceb04ccfe808d"],["/tags/JVM/index.html","72ee3df717faf30b91fb53aed6f955a2"],["/tags/JavaScript/index.html","12012cf22cf5d8b13c4df6e4039c7c4c"],["/tags/Jquery/index.html","6ee29109fe1b88c09e80cbbbecbe6c41"],["/tags/Maven/index.html","776f4d591eed49db44b7f57d38ac909c"],["/tags/Mongodb/index.html","9d3081d66a71ac400f327d551dda4024"],["/tags/MyBatis/index.html","a5c5bbf94ef12ac9062eb34c598edbd1"],["/tags/OJ练习题/index.html","0c8a71486648f2a5a3509bc0012f5557"],["/tags/Shadowsocks/index.html","723b0b5f3cc80519dfb8fb4a4d4ab7a7"],["/tags/Spring/index.html","582a97f65a21d37c63ec8bfc9fef5998"],["/tags/Struts2/index.html","7c6796b64e225dc97796ff50f92582b1"],["/tags/VPN/index.html","7df1f2a903e92d9da524ad2ef9aa1041"],["/tags/VPS/index.html","90f91e9ebbf0c13aa10e30931799907b"],["/tags/hexo/index.html","93aee303f55b7c8e175afb4e4ca5a492"],["/tags/index.html","6ee70bb0256c052cd00791db3abc42c1"],["/tags/南阳OJ/index.html","2244aa08c745fb184f106c44f762dd27"],["/tags/博客搭建过程/index.html","f50de95f199b6817b08e2b124d8779d1"],["/tags/反射/index.html","cf28ccb4689c8161057df6004f42cb36"],["/tags/学习笔记/index.html","04ca2b1ed872b3fdd96553b3b53063fb"],["/tags/技术/index.html","f2b87b4c45892c8c7b986c6cc708fa23"],["/tags/操作系统/index.html","e4dee571eaae95947e6cacd35f202d5e"],["/tags/框架/index.html","f4e537fdd2e321e90dcbe487370f8a72"],["/tags/测试/index.html","4114eb13c1c62c1304e76b8da789a00c"],["/tags/知识产权/index.html","48cc38f035074af3d37b05798c2dcae5"],["/tags/硬件/index.html","c1a6e411ea684845a4cda60156f817d6"],["/tags/神经网络风格画/index.html","75cac6556ad755d98546adb821c31e0f"],["/tags/算法/index.html","f2253dc71767a4956ab59614fcc6af58"],["/tags/翻墙/index.html","081b54232633e3f44061f5e7c47032c1"],["/tags/计算机基础/index.html","bdd5ff00b3df3c9573c07fc2a7ff568d"],["/tags/设计模式/index.html","a7712d2e21c9366de738a8f1b17bdae2"],["/tags/设计模式/page/2/index.html","893da49731fe2d60448af6dac19f0b23"],["/tags/路由器/index.html","201cec7644588046da24011ef851ae97"],["/tags/软件/index.html","9531bdae303643ae1a17791dabcff4d6"],["/tags/锐捷/index.html","95052dc4bd9f2a70e719eab7ef80978c"],["/tags/集群/index.html","72ff043cb6f5dba7055fa18b69973173"]];
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







