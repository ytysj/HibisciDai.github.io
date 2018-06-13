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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","a0b9dcf0be28831031bb140d50062af2"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","999de7b25569c01dc8367e33ef619e1c"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","68807c4e9fa91b262c5e6cf440a248b3"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","5b83014c5bdc52882770ce004bfa256e"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","f396f8b7eee7b927b5011063a06db97e"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","5888d6ee4a0548207885221833ba9de1"],["/2017/02/07/2017-02-07-知识产权/index.html","b4b927525d6e128793f1ca31e4ed0e00"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","2415bd2cf2ba3936d4fe72892acc9fde"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","5095f19054e453ed8bd8429b5f5ef88a"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","11084ae29796da4595c3f5e8552afd4e"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","b6c7c8aa04869bf060c84fc95b41c296"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","fb9b916fe4bc729f88fb1cc0cd181427"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","c28f90f86971428cc338e2c3f818c451"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","d90b2bd00146d915ad0d9d8f5a14c1e3"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","7abc21908910c1615cfcad6879543f12"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","6f9e23f55f839567a902b9c44e358c4e"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","613b6083fde97c91856c6080fa4f4a00"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","77b8f7196d4703b61c380e636f30036c"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","d32b66f30c3c68f0d2951e33c456d48f"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","01a47d30f2bc494bd5b6c57367b9226f"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","142d9413e0b0f1b128aa6f4504e90d9a"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","5b1257af235b1f00c965722a44696af9"],["/2017/07/12/2017-07-12-设计模式初步/index.html","cb4c80b97ad839b4ab8e599bcaff1f90"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","61b0f5b00136315acfd283b5714e2afa"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","f5e8a91cf87ed91d79fedf2fee8e22e4"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","e25ca222beca38860bd82313a174fc97"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","d188f1f2e7403df26b3339d7754a2f76"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","3bec020c65e78e440aa8a3dcc7c94485"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","c2436dba8f2cdfe0825fd9d2e484ac1b"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","6ab6a8c6fa6020bdf066a9dd5d197754"],["/2018/03/19/hello-world/index.html","3bf8a5a5e0f7a49be82554ace907059f"],["/2018/03/21/设计模式-03-工厂模式/index.html","237c5cdd0c1614e8f052ca571625e0ce"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式 - 副本/index.html","daf8cf687bbd6d3603ef37ff264bd6bb"],["/2018/03/28/设计模式-05-建造者模式/index.html","53249fd39b63e27acc709aeb1d943537"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","b65c57f41581bbfb3b1a4d00437f899f"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","de3965023da367e64eeb9da94f8dfd3a"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","7d33342769b1af43c44fe28df212c38c"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","ae889087e0dbf299e9c36edf68824b66"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","a216a9c7760b0ee9dbff5c1950b41962"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","ae38b2c00c9629c081a9b632bd2eda87"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","97e636c8f4d91e13e3f9ae31b467c7f4"],["/about/index.html","6187cba9212b58b8634b90adc4390e5c"],["/archives/2016/06/index.html","61df12f5f1187dfb6c6875f6fb0d9c35"],["/archives/2016/index.html","e286619526d4ea7fee101ad2589f3746"],["/archives/2017/01/index.html","9cf24422ad1b63470ecf6c039a7658f6"],["/archives/2017/02/index.html","2d244a9c318d061d68af30b1919593c3"],["/archives/2017/03/index.html","0f6c2c5405d6c8175797e3aad21602df"],["/archives/2017/04/index.html","5a89951a90dedb24722a88da543dd166"],["/archives/2017/05/index.html","6cd43989a3ef1fe794f9385fb028c60c"],["/archives/2017/06/index.html","d7d49c8e09a9b8d62232129a61b12661"],["/archives/2017/07/index.html","3d363211428faee13cabb8af4e0646d2"],["/archives/2017/11/index.html","588c5f39634f6438305099db139f78bd"],["/archives/2017/12/index.html","442911e6494b9b26b1140e59f641e296"],["/archives/2017/index.html","6f5f2917fc923a96c34d7271abc0c14e"],["/archives/2017/page/2/index.html","07c40108c9869c8612f6c146440bf1c7"],["/archives/2017/page/3/index.html","f633cba39ee911d5afccaf8e44e57f24"],["/archives/2018/01/index.html","517c57a2da7674dbd0cc89f255b68434"],["/archives/2018/03/index.html","3f1891543c18662fd1904c1001b071fa"],["/archives/2018/04/index.html","e937f9cd2a03ffb5bc7d025056e7a02f"],["/archives/2018/05/index.html","6b625de7dd3aaddc2c61aa84fe318c82"],["/archives/2018/index.html","64a089edd94e6e2252b928753d9995bf"],["/archives/2018/page/2/index.html","9232862b623783dffb35c1b70aee8872"],["/archives/index.html","c4d4ac3487377c0fa2745d8f954946be"],["/archives/page/2/index.html","e1f020dbd7dba733166d3b06c62ee8e3"],["/archives/page/3/index.html","5fecf23ddaf6f48a2c264d7cd6127332"],["/archives/page/4/index.html","32a15245a720dbb6d10716d916ba28c1"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","447fa6834e657be116f7e57501f09718"],["/categories/index.html","45d656cf06ec7e979385d7238a229568"],["/categories/前端/index.html","31924ef6cf46f5f6f8025ac87899d424"],["/categories/后台/index.html","de870d733bea74acd95bd549fdb8ffff"],["/categories/架构框架/index.html","e3ea08368a02701d9aeba7fbcedd4479"],["/categories/框架/index.html","1cd62625e52a666aaa1786c00381ffd0"],["/categories/知识产权/index.html","428de45feb0b12a5503a49dd98bc3e08"],["/categories/硬件/index.html","44651fc852c4e940dd40558d3166930b"],["/categories/神经网络风/index.html","e1eb96a6c84a7e5f2e6db3df8d73b0cd"],["/categories/算法/index.html","15be0af4f1da0d49f625df0c07353099"],["/categories/计算机基础/index.html","a6e16be200b53a701b67f2fdfc5c6263"],["/categories/计算机网络/index.html","bed99c2c077cf40efac922abc60dfb5a"],["/categories/设计模式/index.html","47bfb75df092e10a864d1defeb1474eb"],["/categories/软件/index.html","b2e5431bda7011af718dced0059c16ee"],["/categories/默认分类/index.html","0d7d550ccb132d62437cd23d526c7573"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","551a2e3714d2965deb9d28883dabb7f5"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery15.jpg","cf27c69f2b91f14e191861c212245c6d"],["/gallery/index/gallery16.jpg","0cab00106173c18bdb67e5bb340e30e4"],["/gallery/index/gallery17.jpg","51ebddb8eaf5c261b040f49729a0655f"],["/gallery/index/gallery18.png","2eacd2ea3794f3e6465bea6c1f444cf6"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","2dd743cfaf691d7471e9fbd1c9503d49"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","04d23347a539cfe596cce5e8b7b142fa"],["/page/3/index.html","794bc6de5f7ebb399caebe6f15365d79"],["/page/4/index.html","7ed03483b3142cb7dbcaac32055b164f"],["/tags/Ajax/index.html","8c96d8dae54353d0eedd1a56d8f7eaaf"],["/tags/JAVA/index.html","16034877d5fa6248e3f13b3fb3b187bc"],["/tags/JVM/index.html","a71e350b6c8732f7feeb4590cd9145e1"],["/tags/JavaScript/index.html","67b61ce4721259e50641c6324a6372fb"],["/tags/Jquery/index.html","93055da4cbccf091c1c18f193680f31c"],["/tags/Maven/index.html","b00fe8695bad7647e45f365ef770bc70"],["/tags/Mongodb/index.html","4210e1167d5d40d6259506bafb10bb88"],["/tags/MyBatis/index.html","9f7d27b3a6dc5260b86115870377a413"],["/tags/OJ练习题/index.html","4d78ca802f7d4723331c7374778b23a4"],["/tags/Shadowsocks/index.html","859d863f7699b858bac8f09b49fa76c1"],["/tags/Spring/index.html","9ce69aedf9c175b37f176945fcdfd41c"],["/tags/Struts2/index.html","cbcb9e461e04317430ad137985a563e2"],["/tags/VPN/index.html","99fcf7b1764fac6d5494e07e83f5b1b8"],["/tags/VPS/index.html","6ca7e993d579d09b108798bb81654eef"],["/tags/hexo/index.html","df363f504479dc4630144d3b52793264"],["/tags/index.html","d00a02a55641a1c29d2153d6d688408c"],["/tags/南阳OJ/index.html","87d35aedaeef4ab33c2ab4d5543d7601"],["/tags/博客搭建过程/index.html","36dd10c5d248a8af86660923bbe36f53"],["/tags/反射/index.html","b70c770494982601d498e8c16b313bfa"],["/tags/学习笔记/index.html","e3c0f3f79794585d8bc714e2168a5fd6"],["/tags/技术/index.html","3f2ba22f9e4b2d563069826f29c88f8b"],["/tags/操作系统/index.html","eabf12dcfbcb417caa04e3da52ccfc5c"],["/tags/框架/index.html","f85d848d195f88a7d547cf8ae9a9cb4c"],["/tags/测试/index.html","dfe43542a038a208d216569b50b45126"],["/tags/知识产权/index.html","c99a41b99da9b84d4637c6e65aa35355"],["/tags/硬件/index.html","8513376e4936633777fca523da9c7c95"],["/tags/神经网络风格画/index.html","6988260e053ef23046bf9bf889945df3"],["/tags/算法/index.html","52e9d5dfc77c770e5de625d95eefb1d1"],["/tags/翻墙/index.html","c28370cb5a3f6f0b3f171b14788e39cb"],["/tags/计算机基础/index.html","d40b339ba0c9ce4975803260aa3ffc37"],["/tags/设计模式/index.html","1d67b9f10b41e0b4a4cebccd50c07bab"],["/tags/路由器/index.html","7fcdaae4b5f5e24174e4c38b08dcfade"],["/tags/软件/index.html","889834124e024d7221023f2341335ac3"],["/tags/锐捷/index.html","6b1bbb63566ac1647fa591347a122cf3"],["/tags/集群/index.html","4098b67c784a12ee8693f385d26bbca4"]];
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







