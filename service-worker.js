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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","968cca8a4a04f2a20688e75d7a43fabd"],["/2016/12/25/2016-12-25-木槿花的槿/index.html","998398b0841252184b96811f1679f3d3"],["/2016/12/25/2016-12-25-木槿花的槿/木槿花的槿.png","7fe213cba5fa6abb06ec87ce0bf447b3"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/index.html","06cab7e90059658b43b90e25acd76609"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/脑神经错觉型假性心脏痛觉综合症.png","2ad6fa54869c250de4f2fe62091ceb4a"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","95206e607fb07064cc5eb63918b1cdc2"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","6492635e60fcca6121eabc6148d32071"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","79643c2666a954844448187cab54de88"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","8fd94803cc1beb4c9d3548f54b40153e"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","de37f12fb503eea117aa8c50e2fa0554"],["/2017/02/07/2017-02-07-知识产权/index.html","83ff6099630ff05fd89022b2c2dda64c"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","6d1a28c07558fbec49ecb67e13d946d7"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","1374d624ff7c40e37592f9c23c9663c4"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","7fde4a6955bf87c96d6baf673697e8a8"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","42911260cb63d53a6b64aceb4a34dd88"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","abccb25597351119f1558e191447a0e7"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","c7712e8b4fa90bc4da5a3d7513822cc1"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","631c9f4b4c6427d22bc23c964a000377"],["/2017/03/19/2017-03-19-废柴槿为什么喜欢写日志/index.html","2068e21c2a93c84684be4b71df0c9d47"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","5a371bdff3bd1defde163c7884000ba4"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","09d120d312fe905689783d24acd2a9a7"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","40006903523425afeeaf273d11017253"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","97aaf281182586592d63c76379655b26"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","f776f7a9448160f93da722d8f5bce7b1"],["/2017/05/19/2017-5-19-我姓齐天名大圣/index.html","62bf1cf0e4f4ca91bb75d594bab5b6e0"],["/2017/05/19/2017-5-19-我姓齐天名大圣/我姓齐天名大圣.png","0a1f5176d29a336fb0d6b8231d3116bb"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","3c7a21bb64a108f53ae835f943cadc66"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","29c2e6fba43f0851d6c942e6ccbb1640"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","f2cf87f4376a21cc2e4ea1f39ffd5f29"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","ad7db53fa58c686d24c461b8eba6fc73"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","5fb1c85fd1b2efd3ba64bccfab1b5f39"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","9702b1f6e292eb5732915422289eea59"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/01/实用网站统计/index.html","6edd64060f5f21e2958a44071b7d9385"],["/2018/01/01/实用网站统计/实用网站统计.png","f053f66ca2d68fce9311e71a14c43f16"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","541bde7b4668d2aa2562b0291957915b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","cf22f18a4453f9fc5cd17a3db26ab1fb"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","50adbc21764be02745671fbf7ce07c04"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","b789dd3dfac12b55003ce60e5a4d1114"],["/2018/03/19/hello-world/index.html","b214d5c6e766e94799c8e6cc07fcd296"],["/2018/03/21/设计模式-03-工厂模式/index.html","af713bb5491ff4359891d652661f9c5d"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","9ddbce06b71f13dc1e47b984646562b8"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","901bcbdaf4be5f97024848bde5754c27"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","b701535dbbaade681a96b9e6bc947425"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","987e64f7cb3f284496f0558294ef81d1"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","ee6c5ef795f9f43f24b780350b81c5a0"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","e728b424d28c690a9396e0792eacabdb"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","fd65f2705f938ddad9a0416397aff37b"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","8688d7a506ce97d5ec63e34a9fb820f8"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","f92bbf7d44cf117b64638cd729c9838f"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","b8722d18d4ed8d5867a5fdff3970f7d6"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","8998a91681da6607236f58832bbea025"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","cbd8e4ac4ff84de1ac379f7118ed4347"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","60ad131808b5ef75f3e09b9447ae33b1"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/04/25/设计模式-12-享元模式/index.html","2f6402604d894870912ac53727e88d0d"],["/2018/04/25/设计模式-12-享元模式/案例1.png","a2df8feac03b08ec5123f08ee919e567"],["/2018/04/25/设计模式-12-享元模式/案例2.png","7598d9706a786f94ff3cc461b2c807a3"],["/2018/04/25/设计模式-12-享元模式/案例3.jpg","48fd0356f3db1ec3699581b3010e663e"],["/2018/04/25/设计模式-12-享元模式/设计模式12.png","a074a8546709e3342eb267b2225c90e1"],["/2018/04/28/设计模式-13-代理模式/index.html","69cadb5ce24623c5c5136049e69997ff"],["/2018/04/28/设计模式-13-代理模式/案例1-1.png","9aebebd07571ddd6aa0f09adfe2991d7"],["/2018/04/28/设计模式-13-代理模式/案例1.png","8181676ba545fbd8fe27537f541c47e2"],["/2018/04/28/设计模式-13-代理模式/案例2.png","5cd7435b295a89472d99cc82ba471d2b"],["/2018/04/28/设计模式-13-代理模式/设计模式13.png","1eac492880b6c08b78bc7b6c0efaf706"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","b002d315462fcd22ffe96270656565f5"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/2018/05/09/设计模式-14-职责链模式/index.html","19c771f3f5010f1eb7c08fba7d9238a2"],["/2018/05/09/设计模式-14-职责链模式/案例1-1.png","e6731c71cb4c42a06bbfa61a837fa0a3"],["/2018/05/09/设计模式-14-职责链模式/案例1.png","bbf9ff11ee028e9c2a5df9a0514c3d9c"],["/2018/05/09/设计模式-14-职责链模式/案例2.png","2741553387d1e61a8f625e5c751107a3"],["/2018/05/09/设计模式-14-职责链模式/设计模式14.png","2f27e43d9a1e9dd2850a0553e37aa439"],["/2018/05/14/设计模式-15-命令模式/index.html","9d6c3203c688c9eff82783e8c78e99b5"],["/2018/05/14/设计模式-15-命令模式/案例1.png","c85310afd3cee968693adf265d4a9120"],["/2018/05/14/设计模式-15-命令模式/案例2.png","a09d04d15adba837ea11e4959c34352f"],["/2018/05/14/设计模式-15-命令模式/设计模式15.png","1c326e08257ff4a8f4d59fdcf2124328"],["/2018/05/16/设计模式-16-解释器模式/index.html","15fa28e2a74fb674565b71de31960cd7"],["/2018/05/16/设计模式-16-解释器模式/案例1.png","5855bc24d9872b01a920b5d6b7ef1ff6"],["/2018/05/16/设计模式-16-解释器模式/设计模式16.png","dcd14bd75535d9e4aa27e6bc553633a1"],["/2018/05/21/设计模式-17-中介者模式/index.html","bee79020fc56143a595c1efa14c8efa3"],["/2018/05/21/设计模式-17-中介者模式/案例1-1.png","1cf06f642544ea3101f5091aa76ec6c8"],["/2018/05/21/设计模式-17-中介者模式/案例1.png","41a1683c3bbac5b72518a281aa643f9f"],["/2018/05/21/设计模式-17-中介者模式/设计模式17.png","a7f3406063682a6e5a5b20ff8d0140cb"],["/2018/05/23/设计模式-18-备忘录模式/index.html","2072509adc8f53f72861354250e2f895"],["/2018/05/23/设计模式-18-备忘录模式/案例1.png","3a0c82ab530752bc9ad746dba2e831ce"],["/2018/05/23/设计模式-18-备忘录模式/设计模式18.png","42e6313d212d9395e43a0b07b593537a"],["/2018/05/28/设计模式-19-观察者模式/index.html","b76e8abdea26fa66398146df4956300e"],["/2018/05/28/设计模式-19-观察者模式/案例1-1.png","8ed252f2260cc03de20038fc565f5a34"],["/2018/05/28/设计模式-19-观察者模式/案例1.png","62421f4b57d3a9e4ce09125b7aa194ae"],["/2018/05/28/设计模式-19-观察者模式/设计模式19.png","ff1a611c9d1b883f6ba126e800990436"],["/2018/05/30/设计模式-20-状态模式/index.html","4e629e94084d139f2911553796e16a9f"],["/2018/05/30/设计模式-20-状态模式/案例1.png","8e12c2da2adf21da9e116f309288dba8"],["/2018/05/30/设计模式-20-状态模式/设计模式20.png","3b681387bf8a6b779d7c71ac8eae9570"],["/2018/06/06/设计模式-21-策略模式/index.html","4b5b58f670536a4ad8cc08ecb4859878"],["/2018/06/06/设计模式-21-策略模式/案例1.png","e8bd6dae5f0c714dccd6fb99c94f1e16"],["/2018/06/06/设计模式-21-策略模式/设计模式21.png","3b6647d82b21389fbc0d41658e090072"],["/2018/06/11/设计模式-22-模板方法/index.html","f743c8efb2778eec3b84f9bbbe7b0053"],["/2018/06/11/设计模式-22-模板方法/设计模式22.png","90010fcbc1eb3b654b981492802db493"],["/2018/06/13/设计模式-23-迭代器/index.html","45b51e5410fb69afc072319f5dbc73b0"],["/2018/06/13/设计模式-23-迭代器/案例1.png","4efd004b5ca1ae900f6e818a0165c486"],["/2018/06/13/设计模式-23-迭代器/设计模式23.png","fead4258cd83831c9ecdc614b1eae2ab"],["/2018/07/03/设计模式小结/index.html","596b6b9b7d5814d456da46d51712353a"],["/2018/07/03/设计模式小结/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/07/03/设计模式小结/设计模式之间关系-1.png","084b21bf00b785197cf4d97843a6ef9e"],["/2018/07/03/设计模式小结/设计模式之间关系-2.jpg","2468115597e7492aeec2e7962a83ea59"],["/2018/07/03/设计模式小结/设计模式小结.png","657f3955150c02d2f5a3f7615c910c82"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/SwiftPlaygrounds初识及九宫格最优策略.png","221d58dd4bbf80cac4ce307357519763"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo1.jpg","0e54378c5dd4127d19c5dd284ab62217"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo3.jpg","4e3ed0f31bf0f5e50a440e4ddf168c34"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/demo4.jpg","62a32d5a6553891ef731f1f22c338850"],["/2018/07/04/2018-07-04-Playgrounds接触及九宫格最优策略/index.html","9d6c67b6f0ed2731f3aa59c72e3433c8"],["/2018/07/04/text-media/index.html","4371b00fbfffdcea769b9cfa276cfd34"],["/2018/07/04/text-media/博客音频视频问题.png","ffdb8ecbc9a2db3abfe023c643a14bca"],["/README.html","b84dfc046671822cd7d674c962957aae"],["/about/index.html","4a24a9d1c25f587866db2fce3aec874b"],["/archives/2016/06/index.html","3f5b2d8398aae76bd7a9b555170c4d94"],["/archives/2016/12/index.html","6e1630b1a3c4a5723e312f8d03d1cd29"],["/archives/2016/index.html","6dc7fead57d3a8df25b3535fd84e6908"],["/archives/2017/01/index.html","19fb658ca1e3403841b6314f9f6a118c"],["/archives/2017/02/index.html","28c992d08cafcfba82e6dfd1468e02eb"],["/archives/2017/03/index.html","73387c9caa988279d59b9e5d3f85de47"],["/archives/2017/04/index.html","8fb7d85f56b864ec11c4ae6bce440b5c"],["/archives/2017/05/index.html","2b0fd1f3bc4739ee45117c03f4885ae5"],["/archives/2017/06/index.html","3438c1d59628020ad733613bb3777e8a"],["/archives/2017/07/index.html","a122559ef786853a85a596e6728e7f73"],["/archives/2017/11/index.html","dd00e996d3e9da2e3cdd35c2a3f1babd"],["/archives/2017/12/index.html","b81ad35b6942b85181114d93427bca59"],["/archives/2017/index.html","9ccf0413b7b02ed324784d88b3c4bbba"],["/archives/2017/page/2/index.html","fef00b7931f20899e69451a2248eaea5"],["/archives/2017/page/3/index.html","5735fa4716fd675453617d85b25ed169"],["/archives/2018/01/index.html","31dda0e684fb915b6406c64e03bdaf47"],["/archives/2018/03/index.html","c4c6311062f736f84dc27d58ffa48fb9"],["/archives/2018/04/index.html","9bf59775e6387bcbff5cb3c210d8f4ee"],["/archives/2018/04/page/2/index.html","ed042e27ab2461423ec111c8e32f82cf"],["/archives/2018/05/index.html","b866bdfb94d021db5b7bbeae308c7e44"],["/archives/2018/06/index.html","3a15d41a9e5cc3057806b6fded0a88bb"],["/archives/2018/07/index.html","41e9a161c2037b79f99b189d7f9ad4d5"],["/archives/2018/index.html","b64e8c9b198bf4fcf6fa3e95f5176bce"],["/archives/2018/page/2/index.html","c598a0871ff4b7e53bc7283bb77134da"],["/archives/2018/page/3/index.html","8ba46b9cea6cef2288cd63a6bc641900"],["/archives/2018/page/4/index.html","7cfec6960494d6218f11761b02f5a6f2"],["/archives/index.html","a38288064792647bf832d0979233f788"],["/archives/page/2/index.html","842cd978cbed21fa0cb2bb2612369ad4"],["/archives/page/3/index.html","9fea08b27a5f1389ef02a554e504e502"],["/archives/page/4/index.html","4f881f364c5e7c5be6ca9ac05f90711f"],["/archives/page/5/index.html","f1bfa50531eeb97a91b470cb50c4648e"],["/archives/page/6/index.html","6f914d1341563ea17dd158d43d53bdc8"],["/archives/page/7/index.html","62abaae5e93beb233309f1c9c7da4a2a"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/css/DPlayer.min.css","d07c7bdfdce361c091c770dcd9550b32"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","97b5cfd6e67eb91c55670dc23c6d552b"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/JAVA/index.html","285c32f1accf7c5576273a36f5e858df"],["/categories/index.html","fe2015484cb32f74b9f42d18a052d78e"],["/categories/前端/index.html","4c243db80ca3029b21fd129345b1ffb7"],["/categories/后台/index.html","af51541ff1ecf69552ec84aceb51f181"],["/categories/数据库/index.html","0afe4cc119d326d216ba645c59df055e"],["/categories/日志/index.html","15adb81f844cfe6076a276be0323aa00"],["/categories/知识产权/index.html","e74309bc345ce921673d1648ef609e3c"],["/categories/硬件/index.html","7a9c6edfee49411c56c79b6cd42df895"],["/categories/算法/index.html","917fef08093b14c12744cdf966b08414"],["/categories/计算机基础/index.html","bc426e6df26bbda9cf59a17dca02c240"],["/categories/计算机网络/index.html","3552c990685ff26d5bbe44bd7b8fd4ff"],["/categories/设计模式/index.html","8a882cbe51c73fe90733ddb5cfc91a05"],["/categories/设计模式/page/2/index.html","a7b2f86a9c6b4311bfe97f95ab5b2b0e"],["/categories/设计模式/page/3/index.html","50537d42f7487138aa6b7ad873f9e5f5"],["/categories/课外扩展/index.html","dec3c05f10a511cdf1c509663eddaf42"],["/categories/软件/index.html","08948548d1a6df1b2ec986dbf0c6e79d"],["/categories/默认分类/index.html","98c772f79d94cb788166079137053673"],["/css/index.css","1603dedaee7432b520f33cd02604393b"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","58452f26860566e4ca6d89fe55b3a3cf"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","9b7f8e3245c236f2344ef8288e4e2fa8"],["/js/copy.js","f4607057c0513bd07a69fcac08121979"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["/js/search/local-search.js","8f69402950f5566dd77f66005a9d17fb"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","cee67bdc1004fc3660fad8ac502a87c2"],["/page/3/index.html","1769b7c7104a0f714ee1fd16797e44fc"],["/page/4/index.html","518e7740d4b18d11e14860bc166623f4"],["/page/5/index.html","7db6f5ca67eeb6746c4a897c02ef53b0"],["/page/6/index.html","9a5473d56128c73f9332d829568afa31"],["/page/7/index.html","6525cbb6faed2584d527e8cc54b75216"],["/tags/Ajax/index.html","178925fea0dde1bb7779b3e2811cd177"],["/tags/AppleDeveloper/index.html","a7b3f17b19d9eac586f6897cde6ccfcc"],["/tags/JAVA/index.html","6dabfc3efb2b635c75d8640e2ad9f8d7"],["/tags/JVM/index.html","daad2f884271732af519273200a651b5"],["/tags/JavaScript/index.html","d05683e636a036643dabbc46761b0abe"],["/tags/Jquery/index.html","40c642a16ede6b164e61d84626224b59"],["/tags/Maven/index.html","4f56c636bc673d19dec923a0c06c5f4b"],["/tags/Mongodb/index.html","b8d70556155bef8510c30a6ef94380a4"],["/tags/MyBatis/index.html","b87f0d34174f607424652944b25f5484"],["/tags/OJ练习题/index.html","ab777ae3ae88e88905d7fce22acd3a27"],["/tags/Shadowsocks/index.html","f3f419f1bfdf8cfd42dcff5f90bd7b1a"],["/tags/Spring/index.html","3fb97f4e4372b39fbbec6b0f4b6e51cf"],["/tags/Struts2/index.html","193103cff5f6a9379b1336dbbb1f494f"],["/tags/SwiftPlaygrounds/index.html","46a3711ef79c30e9e476ffb5b82b234f"],["/tags/VPN/index.html","c5d9f0d81768ac8f8f29c4cd0d937c74"],["/tags/VPS/index.html","3f0ff00e43d59586ae21f3f987da8878"],["/tags/hexo/index.html","69032e984c19895d39b11879ad3bdfa1"],["/tags/index.html","146238ff14f3fb0c4bd6b0514ab7929e"],["/tags/南阳OJ/index.html","3618fab3c3dc732f0f2a8bee8db01ea3"],["/tags/博客搭建过程/index.html","7551880cbf8848363c5770c2d3bd0285"],["/tags/反射/index.html","32dd8e6ccc5003c9bfc5f5490c01c736"],["/tags/学习笔记/index.html","f04ca57138bfe0c60cbdc966f2623c8c"],["/tags/技术/index.html","a0ac23ed4da2af5308d7a973f5d2940a"],["/tags/操作系统/index.html","e79dac934884d5fc0b8a6635a726ef31"],["/tags/日志/index.html","6555d8b0dca125b5823609d11ee6f773"],["/tags/框架/index.html","74590e48733180c23e8bb222a4e271de"],["/tags/测试/index.html","86d25ea1630fa8b95df5c6448ccce425"],["/tags/知识产权/index.html","060ddf64bcc35dbeef000fbfeb2c8dec"],["/tags/硬件/index.html","7973ada4b6b4dd4f830a3a52e8a92244"],["/tags/神经网络风格画/index.html","a53277491469547436225612d40970ce"],["/tags/算法/index.html","cb7318a1dba1e1ef98644f2e770ed19b"],["/tags/统计/index.html","918d99b85f9774e99fc9d5a1c9623251"],["/tags/翻墙/index.html","c613c5471033038b7286f9e0af6b303d"],["/tags/计算机基础/index.html","e122711233f046178233454252b54589"],["/tags/设计模式/index.html","7eb45ca6bdfc0216621ca591d0d30a82"],["/tags/设计模式/page/2/index.html","a8f0223217328d6063160762c0e3a4a0"],["/tags/设计模式/page/3/index.html","b91f4a49a4d43c22fe86e1377e45437b"],["/tags/路由器/index.html","228136e83f9a0113be3c55ae71fcaf16"],["/tags/软件/index.html","f958584987bbae5ba6ffcca02af0c1f8"],["/tags/锐捷/index.html","4347251d21b40f83402029fe0b0022fa"],["/tags/集群/index.html","09c9df1253693b238ae4f4dccc58cf80"]];
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







