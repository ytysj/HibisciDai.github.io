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

var precacheConfig = [["/1997/06/01/废柴语录/index.html","0c1966bf0544048bc6e4fdbaaa6ed503"],["/1997/06/01/废柴语录/废柴语录.jpg","4ec2f1037d5373e0d55350db4043c313"],["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","d2a10bc4f81959d6693bcb1918fca70e"],["/2016/12/25/2016-12-25-木槿花的槿/index.html","7f1c33c20e422834a1c275cf2d6c028d"],["/2016/12/25/2016-12-25-木槿花的槿/木槿花的槿.png","7fe213cba5fa6abb06ec87ce0bf447b3"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/index.html","ae7f294c426fd3e04254cb07839dcf09"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/脑神经错觉型假性心脏痛觉综合症.png","2ad6fa54869c250de4f2fe62091ceb4a"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","2136aa25264213cfcc8b93d49ce7b865"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","a273b28720397c43f5d8481b696accef"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","1706466ccc5579b27fb6ac5caabe11b0"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","a12bc2111a67ae4f43451c3a4d2aa697"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","d81d17705b551121c2f2849a3af73be8"],["/2017/02/07/2017-02-07-知识产权/index.html","44d61afbc2019b1d2fd549b86e2cd921"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","d3689fe25537eca13a29c6743e3a2859"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","abecb622c955fd07d63aa6569b35894c"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","293e5f0725d9bd2c183db05a4fd3aa84"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","b02441e0680f347fc9c3ef8c291fa061"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","d3898f27e8a7b697bb215d74ccdc9f95"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","acb88f95fbb4a25b52f4581501b480d8"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","0a095959aec0d05149d416039c6fa602"],["/2017/03/19/2017-03-19-废柴槿为什么喜欢写日志/index.html","b4af4b4c4b8c96f9e4f760d89e32a72e"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","419bf320f87ef0a915d912c2f60e990b"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","239575027d50092ae08d9d2ccf6ac1f4"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","0103d3b9d08e4ba9a44bcd442c9dfb23"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","bd42303fadcb9eb55251b7f6aec01a77"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","5319ebca921eff5941072c920f29e410"],["/2017/05/19/2017-5-19-我姓齐天名大圣/index.html","199691c6a99766a65bf70b7410d3c4e3"],["/2017/05/19/2017-5-19-我姓齐天名大圣/我姓齐天名大圣.png","0a1f5176d29a336fb0d6b8231d3116bb"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","c677d061928ba10f241eef51b0f57a6f"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","bd51b22153390d2972238fd5d84f7fdc"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","22a357d90cb0ce8fbe83689e460f2a4d"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","d8a66a66243540e8bbf70583c1072ccb"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","1432c03f6a9143b3f05906ac2c2dd851"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","58fd1e73a07383e1ee98f624b15d5b4d"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/01/实用网站统计/index.html","52839a4fd6d58a868fa69928a61b1e9d"],["/2018/01/01/实用网站统计/实用网站统计.png","f053f66ca2d68fce9311e71a14c43f16"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","3f968769df831cd87a93d087133c2565"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","f8b0914b4e83c285c776ed037fbd393e"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","b60cdb0cee0bd75666096bbd3da92785"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","9743dfcc0e3411b6e27b55c69080f64a"],["/2018/03/19/hello-world/index.html","16608381919a0f8d245e25ae852f3bd1"],["/2018/03/21/设计模式-03-工厂模式/index.html","8067a509b77878e5a1815c050adfe3df"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","f5f76dce64f43a103ffa71bf7f0d221f"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","e4ad77edf5d5429f1d2c77bc652fc4f6"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","123ef5eeee47a6502918e90d96e6fec2"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","83c45763eca4c08304323b68ac7c61be"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","bd872709defd5f62ffb43734f38c6685"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","d9c304041f553098d6b85a899c0a7445"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","3d2e781f8a7bb2eccc0e5d11472589b1"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","192972e51cd0580dc9fba008fb4affa5"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","09a0462c445ea9e4fe20a3b15289d52c"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","136ae1ae2929e76d328b693715d58b62"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","bfa4462ec22d7f877c59092834fc36e8"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","e3e5f4acb52cd013cb72472e7c8baea8"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","4ebdcf5108d9650924afae8c34366639"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/04/25/设计模式-12-享元模式/index.html","11948be4a89b05b893d0e71079085bd1"],["/2018/04/25/设计模式-12-享元模式/案例1.png","a2df8feac03b08ec5123f08ee919e567"],["/2018/04/25/设计模式-12-享元模式/案例2.png","7598d9706a786f94ff3cc461b2c807a3"],["/2018/04/25/设计模式-12-享元模式/案例3.jpg","48fd0356f3db1ec3699581b3010e663e"],["/2018/04/25/设计模式-12-享元模式/设计模式12.png","a074a8546709e3342eb267b2225c90e1"],["/2018/04/28/设计模式-13-代理模式/index.html","7f26b0d71e42ed7c52440dd50549900f"],["/2018/04/28/设计模式-13-代理模式/案例1-1.png","9aebebd07571ddd6aa0f09adfe2991d7"],["/2018/04/28/设计模式-13-代理模式/案例1.png","8181676ba545fbd8fe27537f541c47e2"],["/2018/04/28/设计模式-13-代理模式/案例2.png","5cd7435b295a89472d99cc82ba471d2b"],["/2018/04/28/设计模式-13-代理模式/设计模式13.png","1eac492880b6c08b78bc7b6c0efaf706"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","7256f9bf8e7e7effa8538be5eb248a15"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/2018/05/09/设计模式-14-职责链模式/index.html","939e86a4134869538619d3aff9fc7c36"],["/2018/05/09/设计模式-14-职责链模式/案例1-1.png","e6731c71cb4c42a06bbfa61a837fa0a3"],["/2018/05/09/设计模式-14-职责链模式/案例1.png","bbf9ff11ee028e9c2a5df9a0514c3d9c"],["/2018/05/09/设计模式-14-职责链模式/案例2.png","2741553387d1e61a8f625e5c751107a3"],["/2018/05/09/设计模式-14-职责链模式/设计模式14.png","2f27e43d9a1e9dd2850a0553e37aa439"],["/2018/05/14/设计模式-15-命令模式/index.html","5738f57a101f0afee6f4573271b40781"],["/2018/05/14/设计模式-15-命令模式/案例1.png","c85310afd3cee968693adf265d4a9120"],["/2018/05/14/设计模式-15-命令模式/案例2.png","a09d04d15adba837ea11e4959c34352f"],["/2018/05/14/设计模式-15-命令模式/设计模式15.png","1c326e08257ff4a8f4d59fdcf2124328"],["/2018/05/16/设计模式-16-解释器模式/index.html","b13b56368f8cf8f79a198de53d4d3a93"],["/2018/05/16/设计模式-16-解释器模式/案例1.png","5855bc24d9872b01a920b5d6b7ef1ff6"],["/2018/05/16/设计模式-16-解释器模式/设计模式16.png","dcd14bd75535d9e4aa27e6bc553633a1"],["/2018/05/21/设计模式-17-中介者模式/index.html","36b6dcc77c7c1739d80d864c48bc3dba"],["/2018/05/21/设计模式-17-中介者模式/案例1-1.png","1cf06f642544ea3101f5091aa76ec6c8"],["/2018/05/21/设计模式-17-中介者模式/案例1.png","41a1683c3bbac5b72518a281aa643f9f"],["/2018/05/21/设计模式-17-中介者模式/设计模式17.png","a7f3406063682a6e5a5b20ff8d0140cb"],["/2018/05/23/设计模式-18-备忘录模式/index.html","2493b14edf38c19f8f4869f9367ced28"],["/2018/05/23/设计模式-18-备忘录模式/案例1.png","3a0c82ab530752bc9ad746dba2e831ce"],["/2018/05/23/设计模式-18-备忘录模式/设计模式18.png","42e6313d212d9395e43a0b07b593537a"],["/2018/05/28/设计模式-19-观察者模式/index.html","fb91012d743d9de589485c1bfd00cab3"],["/2018/05/28/设计模式-19-观察者模式/案例1-1.png","8ed252f2260cc03de20038fc565f5a34"],["/2018/05/28/设计模式-19-观察者模式/案例1.png","62421f4b57d3a9e4ce09125b7aa194ae"],["/2018/05/28/设计模式-19-观察者模式/设计模式19.png","ff1a611c9d1b883f6ba126e800990436"],["/2018/05/30/设计模式-20-状态模式/index.html","416e5f60b8e7cd39ba7a4eaa269c0823"],["/2018/05/30/设计模式-20-状态模式/案例1.png","8e12c2da2adf21da9e116f309288dba8"],["/2018/05/30/设计模式-20-状态模式/设计模式20.png","3b681387bf8a6b779d7c71ac8eae9570"],["/2018/06/06/设计模式-21-策略模式/index.html","04db9477625f1bf6765a162259e49144"],["/2018/06/06/设计模式-21-策略模式/案例1.png","e8bd6dae5f0c714dccd6fb99c94f1e16"],["/2018/06/06/设计模式-21-策略模式/设计模式21.png","3b6647d82b21389fbc0d41658e090072"],["/2018/06/11/设计模式-22-模板方法/index.html","4f4695a16fa7d484ee9deacccd13cb12"],["/2018/06/11/设计模式-22-模板方法/设计模式22.png","90010fcbc1eb3b654b981492802db493"],["/2018/06/13/设计模式-23-迭代器/index.html","ff8e9426d30d4fbab83b6919a17583e2"],["/2018/06/13/设计模式-23-迭代器/案例1.png","4efd004b5ca1ae900f6e818a0165c486"],["/2018/06/13/设计模式-23-迭代器/设计模式23.png","fead4258cd83831c9ecdc614b1eae2ab"],["/2018/07/03/设计模式小结/index.html","3faed1c43613be302c844312bc7ba899"],["/2018/07/03/设计模式小结/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/07/03/设计模式小结/设计模式之间关系-1.png","084b21bf00b785197cf4d97843a6ef9e"],["/2018/07/03/设计模式小结/设计模式之间关系-2.jpg","2468115597e7492aeec2e7962a83ea59"],["/2018/07/03/设计模式小结/设计模式小结.png","657f3955150c02d2f5a3f7615c910c82"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/SwiftPlaygrounds初识及九宫格最优策略.png","221d58dd4bbf80cac4ce307357519763"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo1.jpg","0e54378c5dd4127d19c5dd284ab62217"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo3.jpg","4e3ed0f31bf0f5e50a440e4ddf168c34"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo4.jpg","62a32d5a6553891ef731f1f22c338850"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/index.html","35f7e96796116f8cd6415d7f4d3e807c"],["/2018/07/04/text-media/index.html","55afd6494be8af0da55f6eb1eacdad32"],["/2018/07/04/text-media/博客音频视频问题.png","ffdb8ecbc9a2db3abfe023c643a14bca"],["/2018/07/06/text-RSS/index.html","abf0d7b360bb6dbfb35a0cb09675b54c"],["/2018/07/06/text-RSS/博客RSS订阅.png","6c55c188aa716847ec58b11e0bf6e4f4"],["/2018/08/06/书单语录/index.html","49fdb0a54dbf2f2aa7b38112fc29bbe3"],["/2018/08/06/书单语录/书单语录.jpg","8eb23f6d0b76b6a773e16d195bd1d9c3"],["/README.html","be996c7253e73d1db0118e96a7476c4b"],["/about/index.html","fb9b550b0a591d10ae07fd61e6468a6a"],["/archives/1997/06/index.html","74d41bc3577f2bf33859dd5520eb149d"],["/archives/1997/index.html","dc4117095e354378bb4e2224683caed1"],["/archives/2016/06/index.html","7edd71f2e4c240fb4d888b9c9e1928e4"],["/archives/2016/12/index.html","10aa0b6c9f2e2d033e643b9846de7739"],["/archives/2016/index.html","faae808cbc5446706be293934c0bbe8d"],["/archives/2017/01/index.html","d7825fe9f0dbf354a539b68e72b47022"],["/archives/2017/02/index.html","3c4a0375e6497a4f0cbbfe6ab1082d7c"],["/archives/2017/03/index.html","3752b96719456f66e775a46038679502"],["/archives/2017/04/index.html","5e407c17576d61cdd3932a9387ac5d95"],["/archives/2017/05/index.html","95a0905a0040733c06ee13140beb5ff5"],["/archives/2017/06/index.html","c25ddeadf45aaeb0b7f273d53d257bad"],["/archives/2017/07/index.html","867559eaac1316f5e7fc5991082ef34e"],["/archives/2017/11/index.html","79f9322d0e9694bac45ee81a6714d3d8"],["/archives/2017/12/index.html","84ecd5b98c7ff83c462fc04841dede10"],["/archives/2017/index.html","a9f86d57e28ed9421875713fd494672c"],["/archives/2017/page/2/index.html","681996432921b7b1eb392a14b24b7e25"],["/archives/2017/page/3/index.html","40569fdd90c682634ccd3de89ccec820"],["/archives/2018/01/index.html","a96cec289596929b9c7402dcf59f9560"],["/archives/2018/03/index.html","760e6c1f6a4dc89552495f6d762cfac2"],["/archives/2018/04/index.html","8dea8d2d571b841f87c581212adefef8"],["/archives/2018/04/page/2/index.html","9ea959cd37196821121f1b0a3454d731"],["/archives/2018/05/index.html","eccbe9c04803697e57de1e51ce80476c"],["/archives/2018/06/index.html","b408837c7305749e729f7baaad68701e"],["/archives/2018/07/index.html","fd345f3c86b66d66d36664e4172f9542"],["/archives/2018/08/index.html","0225774b3c82cf06055fb3e82e471f2e"],["/archives/2018/index.html","d79961e47e478f728a716b03ffd28985"],["/archives/2018/page/2/index.html","1c930ce9a8f8a85efd65271dbb5edce2"],["/archives/2018/page/3/index.html","49ca0ae5781a21057f900a814a72b8c6"],["/archives/2018/page/4/index.html","9c8828da0a95688f0a235f17dbfb7a30"],["/archives/index.html","a3ecc5e83f9669cc5d3bb0363d5650f2"],["/archives/page/2/index.html","a853047325da82a5ca3348b231f93a68"],["/archives/page/3/index.html","9736e1e0d7b0cada21e8949d1a1430ce"],["/archives/page/4/index.html","6f564f64a5121b34925ec0c1e7c3d5d7"],["/archives/page/5/index.html","de81fa003b581ae8ead9a8b38fa55075"],["/archives/page/6/index.html","afaad8cb7691544d8d7e229150e97b8d"],["/archives/page/7/index.html","ce4de3ed1da914b78af256adba6a6541"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d07c7bdfdce361c091c770dcd9550b32"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","97b5cfd6e67eb91c55670dc23c6d552b"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/JAVA/index.html","9cff2871d156b7ae2f810af57344ba70"],["/categories/index.html","25df06a2787364b585645b082c2959a1"],["/categories/前端/index.html","944dc2ecad9dcd54f63c3faeca7a4282"],["/categories/后台/index.html","b670f9fd1e0ff46e68398aa22728892b"],["/categories/数据库/index.html","0ee0d7bcf4030f26f38fb37a2df4f40a"],["/categories/日志/index.html","82ec0302c3622fbf2ece9b54a2ffd54a"],["/categories/知识产权/index.html","32f380f8b196044f17695d9ee9885fe2"],["/categories/硬件/index.html","8a0d7d47d36c8c0e2a13b43db5f8a29a"],["/categories/算法/index.html","663a78aeb124ead3ced61b4797846d58"],["/categories/计算机基础/index.html","dfc9c9a1e38a0c232378594c66151ba1"],["/categories/计算机网络/index.html","a117e75ef88f65f804f464fdb35ce2f2"],["/categories/设计模式/index.html","7f5b40fcd6890a4cef1a05ac9bd5f9ef"],["/categories/设计模式/page/2/index.html","2dafcb2d747f2c374c69bf764c1fcdce"],["/categories/设计模式/page/3/index.html","565d21177d520dc5b02f1af95c694ea8"],["/categories/课外扩展/index.html","b161fe029575758d3a5e93922a2907fd"],["/categories/软件/index.html","61d48d8e00a7d76263cf6b543d2526c2"],["/categories/默认分类/index.html","c4a92ff5c396e4501f574c0b1fbb0bd4"],["/css/index.css","d50c35a872d92d4554219c43751d5307"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","f2d9a24c6834b0e2922a662408c85f45"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","11cdddc9cf80e62f930fe88a6f30681a"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","94b124a64975e9bc827f75385d217182"],["/page/3/index.html","7f10b48e4a5752374c0af629bc863617"],["/page/4/index.html","0d97c968fb751036fb3d6e4c3d1a42c0"],["/page/5/index.html","4acc8867bf7186e4634026af08d8aa8e"],["/page/6/index.html","addf51eb9b7143100d65f7e2d12f688d"],["/page/7/index.html","ee34d2b75a31dd1fddd26acbd881638b"],["/tags/Ajax/index.html","b99cfce7f0964d1b9c2a2bf3124acc31"],["/tags/AppleDeveloper/index.html","8d0d6e70724ef8b83b242bee6da93cda"],["/tags/JAVA/index.html","155a0cec2b51c3ced7e346c284125f33"],["/tags/JVM/index.html","aabd0e0fb6ed731ecd17f00d55510189"],["/tags/JavaScript/index.html","42235515830f83b90801ca9e68fc4e5e"],["/tags/Jquery/index.html","83b2f1a23e5c8c245c30014be04df460"],["/tags/Maven/index.html","2423881057e884bc1e51c7d6f70dfe4b"],["/tags/Mongodb/index.html","9917f9c7c0392414c70e01154022d7c4"],["/tags/MyBatis/index.html","32d4d9141044e9ea9d48e500d139cfb2"],["/tags/OJ练习题/index.html","21165fa9252ebad8079aaf32de76af9d"],["/tags/Shadowsocks/index.html","0539835066e1d0a045478e0081c89514"],["/tags/Spring/index.html","4a87a40ea7fa7e1b47fe18490e8158fb"],["/tags/Struts2/index.html","55bd5891c7dbb05d8fcb61a61adcc015"],["/tags/SwiftPlaygrounds/index.html","3d20ec4e71064f4b3e0fb80d73eea4b5"],["/tags/VPN/index.html","8887d7d956c545890a9f9c1ee8552c95"],["/tags/VPS/index.html","cf2ec27064caa644f0bd40b27d93c6f1"],["/tags/hexo/index.html","3a8360ee8fcdb87ff886f1b1b183ada7"],["/tags/index.html","61fa4ad031dee1079654100d22696538"],["/tags/南阳OJ/index.html","2b005006a8d460a47f150782f11a7a55"],["/tags/博客搭建过程/index.html","22e3fa374faef2775dc6af5a5266c5d6"],["/tags/反射/index.html","266a5ed289300d8d8888f400711a2354"],["/tags/学习笔记/index.html","7f28d30310760cdcdf4a7c36f1844d3f"],["/tags/技术/index.html","7dd51fd64eda72168601c6184bf92528"],["/tags/操作系统/index.html","38feb5540124ebe503711bb979c56e4f"],["/tags/日志/index.html","51fdbfa8a879c0ab84a24ce71cc23f34"],["/tags/框架/index.html","4646c9d57e8638b27ac9a564575cdd36"],["/tags/测试/index.html","0057c7c6040230e83fa2a191152cd6fd"],["/tags/知识产权/index.html","ace01a4e66ea71458dfd555a49536b74"],["/tags/硬件/index.html","ca6a803d9d9d07486a70a5dba1ca3897"],["/tags/神经网络风格画/index.html","852dfcd74e28b7f505f8364898e83be4"],["/tags/算法/index.html","be32b33d90d2bffb071ec4810ab1cdc7"],["/tags/统计/index.html","3f07a67f143cb5e4192f6d91e9abc2dc"],["/tags/翻墙/index.html","d800ac3f33919304c7b93c095e4ef7fc"],["/tags/计算机基础/index.html","00adf60be6adf4d6b9ba858dc15f3157"],["/tags/设计模式/index.html","dfdb5c2c0b0357dfaecbaecc4a2d7a0c"],["/tags/设计模式/page/2/index.html","db2a923f6d97a04aba2d2fcf0ec49de3"],["/tags/设计模式/page/3/index.html","69a09cea6a3487a2edadb6c2c71cd03c"],["/tags/路由器/index.html","b670c276982c660eac4b69d751d791e5"],["/tags/软件/index.html","3e0e5d4eaefc15cead214e56e2a1b52c"],["/tags/锐捷/index.html","bfa886f9f0692ace9483cb89a8a95184"],["/tags/集群/index.html","9d329cef2e18b7e678baafa3573a1989"]];
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







