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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","fdda6df455edc9465332446555fb1222"],["/2016/12/25/2016-12-25-木槿花的槿/index.html","eb9dff5f463d1ef67a0217bf4ce0c4eb"],["/2017/01/07/2017-01-07-脑神经错觉型假性心脏痛觉综合症/index.html","006dad37a733e532e6ee7ef48eef3a08"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","da82683a44e6546217d51e52baf21efe"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","a11c84b22265e2998cd331c643c99aa4"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","61e757b630417bf3d26512fdfc5a53d7"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","3accf17d686fd1a9cd11eb31c078cc86"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","bea5b2321a9d0179839e1f74029bffc4"],["/2017/02/07/2017-02-07-知识产权/index.html","d8d50eb7115ca11523148be82e539361"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","db26d4e992776e0c13474b3527f67a7e"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","9ed5ed1d594e82a7c54b2bc42a4e1b76"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","ec62456895494593ad6f5512a8c6e066"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","023bbc9de8d6154465def5bbd6b10610"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","c76cdedfecac12083defd492f5f8f4e5"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","116fe681f27f4954cff63113d3070007"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","9d85bb1d5d6665a40b2b68fdd04db641"],["/2017/03/19/2017-03-19-废柴槿为什么喜欢写日志/index.html","fc058ebb896f02de40f044da1ab10eed"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","35bb82d2310f5d83396775f2955c8810"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","eeab4966de09590f885c2d383908f3f5"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","c6ce79725b80bfd1089e90291d4b420f"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","95c121bedb7992698afe5cf0c21bff95"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","91be4f23abcabd6bdcdd7c90f03b612a"],["/2017/05/19/2017-5-19-我姓齐天名大圣/index.html","74a63ce314b0a234e0b14746d714f3ea"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","23daebc26ed903d65703bd96bc849ec9"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","543c0958608577722585aa70e938770e"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","67ce6b41cc926800a6d1690c72c23482"],["/2017/07/12/2017-07-12-设计模式初步/index.html","bd0a8a93d7f82ed715c13320b349a961"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","7a157dc1ffb87983ad4cd98740ee4309"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","8ce228467692e0985b7ee105628c6a45"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","bc6142ffbdb674a6b7f88f49afebed1d"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","22039cfb0c65c754ada2dcd350b25776"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","a5ab0e07deccfcf2d291f11bc7be7428"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","49ac152025ed2b0b1b296588379cac0d"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","ff659ec3d3a14e85a06d73ef660b7baf"],["/2018/03/19/hello-world/index.html","040ddbcbeda78c14a094df02d8f69681"],["/2018/03/21/设计模式-03-工厂模式/index.html","06172092c55dea1d8572156e5d572318"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","9e7c7f3834af2843d300fe2f7e1e0a46"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","323bb4fd0b932568ca1c7521f5c80e81"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","f6c079afbb7dfbeb6e227dcfb3d6755c"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","237f0e8af596e74de381453a969c4555"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","fc34cc53d982a96eec0bc2928e37d5b1"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","6c2380ae41cf898103860af38e974c33"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","75f0d464773fd2dedc42076c68306d2a"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/04/设计模式-07-适配器模式/index.html","5ad9f26da591151b62b76fad6730f553"],["/2018/04/04/设计模式-07-适配器模式/案例1-1.png","688cb4303131edbbca65ebbeed9fbd89"],["/2018/04/04/设计模式-07-适配器模式/案例1-2.png","98fd462baf4f59d22d755b44f6afeabc"],["/2018/04/04/设计模式-07-适配器模式/设计模式07.png","62b6f6e9d81366b384cf0d4de92d46fe"],["/2018/04/09/设计模式-08-桥接模式/index.html","8a8124d034a7a7223bc8b64c4c384595"],["/2018/04/09/设计模式-08-桥接模式/案例1.png","5d625e53e1dc464f03539a9c206dbf13"],["/2018/04/09/设计模式-08-桥接模式/案例2-1.png","79033a85ab638aa7004d7e3b3885ca9d"],["/2018/04/09/设计模式-08-桥接模式/案例2.png","8ee522d3a60091328a320555a4dcf7e4"],["/2018/04/09/设计模式-08-桥接模式/设计模式08.png","b42fd26b56bfd694f2bb1e0f7a1ff317"],["/2018/04/16/设计模式-09-组合模式/index.html","0f1acade14564af8567be6fcd8528fdf"],["/2018/04/16/设计模式-09-组合模式/案例1.png","9cb7d739fa6cc1173b62433d1ecaf135"],["/2018/04/16/设计模式-09-组合模式/案例2.jpg","8cafcf39fe2078f7a36dbe964944b0ab"],["/2018/04/16/设计模式-09-组合模式/设计模式09.png","e2c0c9eb9e75e11b72a4cae33f03c530"],["/2018/04/18/设计模式-10-装饰器模式/index.html","d815b8eb886ffd3ce6b9c91bd4dad293"],["/2018/04/18/设计模式-10-装饰器模式/案例1.png","4d51034522483ba2952506d07449caf7"],["/2018/04/18/设计模式-10-装饰器模式/案例2.png","b7e9cbe70c2e92230f900b60e408b95d"],["/2018/04/18/设计模式-10-装饰器模式/设计模式10.png","10b6838fdff2a30a4973341f97d3b76a"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","60fd073d52ba9d0d99b07814c5cfce9b"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/04/23/设计模式-11-外观模式/index.html","8404f4d940fabfa2ff7a93e3bd54ad61"],["/2018/04/23/设计模式-11-外观模式/案例1.png","5df8972b270433b9cdee4d1ec6311d8d"],["/2018/04/23/设计模式-11-外观模式/案例2.png","8705eabf4e7238e591ce9f0c1f1e60ed"],["/2018/04/23/设计模式-11-外观模式/案例3.jpg","1debb9e9b92697ece0cb53e34ad14eff"],["/2018/04/23/设计模式-11-外观模式/设计模式11.png","a2e4b6436fbb9228579dbb438fcef8b7"],["/2018/04/25/设计模式-12-享元模式/index.html","85ec49698221e1b7e9bc5bac946efef4"],["/2018/04/25/设计模式-12-享元模式/案例1.png","a2df8feac03b08ec5123f08ee919e567"],["/2018/04/25/设计模式-12-享元模式/案例2.png","7598d9706a786f94ff3cc461b2c807a3"],["/2018/04/25/设计模式-12-享元模式/案例3.jpg","48fd0356f3db1ec3699581b3010e663e"],["/2018/04/25/设计模式-12-享元模式/设计模式12.png","a074a8546709e3342eb267b2225c90e1"],["/2018/04/28/设计模式-13-代理模式/index.html","951c64bdf31b10a28a5a24f6c6e2bb81"],["/2018/04/28/设计模式-13-代理模式/案例1-1.png","9aebebd07571ddd6aa0f09adfe2991d7"],["/2018/04/28/设计模式-13-代理模式/案例1.png","8181676ba545fbd8fe27537f541c47e2"],["/2018/04/28/设计模式-13-代理模式/案例2.png","5cd7435b295a89472d99cc82ba471d2b"],["/2018/04/28/设计模式-13-代理模式/设计模式13.png","1eac492880b6c08b78bc7b6c0efaf706"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","cba15d780763da931ec4cd6da47508c8"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/2018/05/09/设计模式-14-职责链模式/index.html","779798c69ee3435677fe3c5720de5d02"],["/2018/05/09/设计模式-14-职责链模式/案例1-1.png","e6731c71cb4c42a06bbfa61a837fa0a3"],["/2018/05/09/设计模式-14-职责链模式/案例1.png","bbf9ff11ee028e9c2a5df9a0514c3d9c"],["/2018/05/09/设计模式-14-职责链模式/案例2.png","2741553387d1e61a8f625e5c751107a3"],["/2018/05/09/设计模式-14-职责链模式/设计模式14.png","2f27e43d9a1e9dd2850a0553e37aa439"],["/2018/05/09/设计模式-15-命令模式/index.html","7e2d26d5cbd59ae7063fbe09918dcaab"],["/2018/05/09/设计模式-15-命令模式/案例1.png","c85310afd3cee968693adf265d4a9120"],["/2018/05/09/设计模式-15-命令模式/案例2.png","a09d04d15adba837ea11e4959c34352f"],["/2018/05/09/设计模式-15-命令模式/设计模式15.png","1c326e08257ff4a8f4d59fdcf2124328"],["/README.html","1fd39a69c67da829879460ef95e136d4"],["/about/index.html","34de08096649a0a8072bcd9d188c5096"],["/archives/2016/06/index.html","3efa2f89c015e604c3c9079661a3d406"],["/archives/2016/12/index.html","f6d584c3a5e94de25d03050b8db3bfa7"],["/archives/2016/index.html","6947b493af717bca334b886acf678e29"],["/archives/2017/01/index.html","42efafc5c82a2203db4ecfebb9c8898f"],["/archives/2017/02/index.html","f007dc95638bfb8424748260b55781ef"],["/archives/2017/03/index.html","728a241fdf8ce9674f242f9eafc1566b"],["/archives/2017/04/index.html","83bdee3b442cb964dba05a83d9212c70"],["/archives/2017/05/index.html","c062dcf25495fe4a791c529540e3158f"],["/archives/2017/06/index.html","e508a6d1238e34bf6a6f0998d3ef47d4"],["/archives/2017/07/index.html","d3b7ce57989a4791bd3500cbfe71fa9a"],["/archives/2017/11/index.html","a6c82ad68e8d4d0686688d1972ac61a0"],["/archives/2017/12/index.html","60e733805e57509514b584c438e81eea"],["/archives/2017/index.html","9a9c833968bb6b7b17a38f306273be0e"],["/archives/2017/page/2/index.html","dc80b98e29d255a0d667e0d59ebeb498"],["/archives/2017/page/3/index.html","4de54e6b830dc6acf4167bbfd2e07950"],["/archives/2018/01/index.html","3b223fe6268a4ba43b8add00159fddc6"],["/archives/2018/03/index.html","906d1bf24a47ef4b36787dfcf3dceb26"],["/archives/2018/04/index.html","857a63fd7faa55752cff544031332ae4"],["/archives/2018/04/page/2/index.html","fd4dd57e53075e4e66f30755070a8e2b"],["/archives/2018/05/index.html","c10180db3be23d3c14e905dbe026e5ed"],["/archives/2018/index.html","d881f4c8a6ea40590a65b34423dbfdde"],["/archives/2018/page/2/index.html","f12ff42f5ea0b02c3242431eff134263"],["/archives/2018/page/3/index.html","aceb8dcc474d4f43651dbdb4fa6b0063"],["/archives/index.html","3ccf6ba971674d8eef1c0568ba6d6d20"],["/archives/page/2/index.html","f134b5b35d46b374673d80b1372b1e11"],["/archives/page/3/index.html","a62d3757c6a98fd0e1a8e65f98541c94"],["/archives/page/4/index.html","5fd595253f1fb6654208ce6c8be08ee8"],["/archives/page/5/index.html","f249ba336d22867412cd27f6fe48de65"],["/archives/page/6/index.html","4937fd7ef73adcf792f5594cffde1b56"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","a7cc9e2cef2dd4dd88222fbc81c62719"],["/categories/index.html","ccd70d2cba3705427de37fe7e968f189"],["/categories/前端/index.html","f69139b3f5abe8957337207b72b61409"],["/categories/后台/index.html","9f161b3cf1060f9717b4faf648216652"],["/categories/日志/index.html","5a731687536c328f88d575ce73081d5f"],["/categories/架构框架/index.html","dc90043779a8af248e01f95d71a32f20"],["/categories/框架/index.html","fd1637f8440a1322932dc1ba6c8e91f3"],["/categories/知识产权/index.html","a77f8ff8de1a84e2a2b6cb0c166249e3"],["/categories/硬件/index.html","7b2b54099e200d534f493a40c07c380d"],["/categories/神经网络风/index.html","536900992b76e9f2d4ca3b0bde40c46e"],["/categories/算法/index.html","84919bb06757110da5cd8331cc55d82b"],["/categories/计算机基础/index.html","f7662ab73bfefff3f2a33a9eccf951e2"],["/categories/计算机网络/index.html","d11ca9aa5862e04b066e68a3cbdfbf01"],["/categories/设计模式/index.html","a88ae300cd154808e793152a4057f6d6"],["/categories/设计模式/page/2/index.html","2479c0b3d14c5b55b4bd92b434824782"],["/categories/软件/index.html","1459710229a48ac6fb70f78100dd1158"],["/categories/默认分类/index.html","a9ffbf064fc58ef94cc39419525333c7"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","eed979d663eb458c6ff95f29c9dc7b01"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery12.jpg","e4a3579e956e2e07a61ba72cb8d12053"],["/gallery/index/gallery15.jpg","a118857b2163e9e7b437de12ed86d39c"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","9b495076a84d55269791ac0a2cf983fa"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","3e56cc4e1b911176550b7613d4d675ea"],["/page/3/index.html","edcfb68e301490b9ddb3e99880ad6063"],["/page/4/index.html","40353760728d2857121aef98e675b6c4"],["/page/5/index.html","171df8f6759cc090a39dd4807351379e"],["/page/6/index.html","9211f436e6c002149cd8528e83a4d5f9"],["/tags/Ajax/index.html","fdbaf587e17d371464af44fa516b4799"],["/tags/JAVA/index.html","e3c2d4a4518dca99ddb01a6f5b6b450f"],["/tags/JVM/index.html","d9e97e675a9ccfde12291790eb73fd47"],["/tags/JavaScript/index.html","d14d52f3e23950a315c2c8c2c2e55978"],["/tags/Jquery/index.html","1cbd0246622e637e56e684d00ffe31ea"],["/tags/Maven/index.html","8ff04d0eaba151df0b6a86a5bd4f7cc9"],["/tags/Mongodb/index.html","cc2b9146a5288c6d912a093c34e1df0e"],["/tags/MyBatis/index.html","f208313dd9d9442ca1653c06f81138a7"],["/tags/OJ练习题/index.html","0ba52349adbaae3752bd1902ce500f44"],["/tags/Shadowsocks/index.html","d5900254a4e93cfdccf34ed8d4d342b8"],["/tags/Spring/index.html","38e963c8aeb3899fb51dfb46d4e955f9"],["/tags/Struts2/index.html","8fcc8b335341aa4b4d47d9fd893acf3b"],["/tags/VPN/index.html","78a5b2d194d0b943c7676a7df3b63a3f"],["/tags/VPS/index.html","eb3722c3da432e0185268a793f8058ad"],["/tags/hexo/index.html","d853c7d502b04cd3b12d19f71682525e"],["/tags/index.html","4aee0d463cc2c5f88ed883eeb2878114"],["/tags/南阳OJ/index.html","7325bb745bb5c6f9438c50cde31001ef"],["/tags/博客搭建过程/index.html","b78bdb2e69fc2a67c6c8e87b4bbd9d90"],["/tags/反射/index.html","b66a36256f8b9a8e4ca9791009b9127e"],["/tags/学习笔记/index.html","26e8992102a20e6cffba5dd43b517eb2"],["/tags/技术/index.html","c1d92000f81ff556811c370e8482127e"],["/tags/操作系统/index.html","5dbff47ef6fccb811a0e4eaabf61c54b"],["/tags/日志/index.html","e2aa41e6ad84185fb431397750900402"],["/tags/框架/index.html","b3b0f23d779f24b825f9bc8bc107677d"],["/tags/测试/index.html","6ffad8a1f4fd68b411b2fbb982231741"],["/tags/知识产权/index.html","7f2b0f577465b7a65d4defd71b40fdd4"],["/tags/硬件/index.html","a202f49b199784e18b84f10df96edefa"],["/tags/神经网络风格画/index.html","7fde3093573acd051ac74253e21fb3ee"],["/tags/算法/index.html","b2ad933e9cb0b3a4223cb3cbee11c3ed"],["/tags/翻墙/index.html","f8d43f0b00786a913b9ece46a8fd0ef3"],["/tags/计算机基础/index.html","ebc89351345f3324102d5635e2a1a84d"],["/tags/设计模式/index.html","e2072ad2b176cae4868f2b953b93ed1d"],["/tags/设计模式/page/2/index.html","3839cc3f7bacf7dd05ef4d11275f53c7"],["/tags/路由器/index.html","8c51a6d634895509f913627a3264f3d1"],["/tags/软件/index.html","fdefe6457958c4030b3430148becb750"],["/tags/锐捷/index.html","6c29285a5d0a3e01792a586dae7a65cf"],["/tags/集群/index.html","13661956ea6fcd9eeb5ffddfd075da9f"]];
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







