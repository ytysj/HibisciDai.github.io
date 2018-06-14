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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","30a3ccc3883630c27b164ab1f0dff64e"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","1a33486bf605c820eb73a23451453a48"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","cbb67e07cbfc3bb73d62fa546d437ee4"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","af764c9f689eaf55ee248b06e3d7fe29"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","76cf466434b8ae7c38c138b75536d087"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","bc6a96a76f9b9713aeface17a029bf0e"],["/2017/02/07/2017-02-07-知识产权/index.html","1648134f0493f5c75342390db9149bb8"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","52a36ea658b6e356d2088cda64098c1a"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","5f774257d5f6f81efc7972a932667268"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","3aff8d5a1ce47a83a7c82f247a7e8c29"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","5b5dd0306b4cf54094958dc7a4be3667"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","c3bd1f39bd4360b0edc63331ddb50e09"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","00de870b6dfd16992a9190ea1dd46966"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","6394e5b34b258d4efe9565d1428615d0"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","f6785fc93cb0d397c62628f4a88ce6ba"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","91220818129bf0319ed369e505fa8722"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","aec2f4490ec2ea88541924b708ecd8c5"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","85fdece8f8c98de2681bd673785c606f"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","163b1872c2bf12f1131c32f24cece1ae"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","26eb1765cf4724b45b8127331263c3a7"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","178111f7f78fc5b90ac652360ea1c41c"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","62028c679fb3c50590488123cef5faf8"],["/2017/07/12/2017-07-12-设计模式初步/index.html","3e0453d25514c851b2227a53e3b42368"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","679febfd3772ffb60db2eb2ffeba2a7b"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","ca1ed3fe9400ceaca180be9c38e9b981"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","01470b96cf5eef91d206206e321b5b54"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","ba88e56a2d742536c863f5157d1604ff"],["/2018/03/07/设计模式-01-设计模式七大设计原则/index.html","ab3c99b9fa259326a4f2f17cff141963"],["/2018/03/07/设计模式-01-设计模式七大设计原则/主要类关系.png","9345942c42d9b7a99ad7715ca13e4e6b"],["/2018/03/07/设计模式-01-设计模式七大设计原则/利用开闭原则计算A+B.png","3949f270b74aca0d64d4790e46a21838"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改前.png","469d9ea25e422fc09f457f679f6b913d"],["/2018/03/07/设计模式-01-设计模式七大设计原则/司机和车-修改后.png","239914698fa0a36c936d34a6040f66e7"],["/2018/03/07/设计模式-01-设计模式七大设计原则/合成与聚合的区别.png","36c406f9ba54af6987b22d1b3cda7c02"],["/2018/03/07/设计模式-01-设计模式七大设计原则/设计模式01.jpg","7d93941e89478fdbe5a583ef28895346"],["/2018/03/14/设计模式-02-单例模式/index.html","4c6559c1aee6e4a0cf4f63b1afeea706"],["/2018/03/14/设计模式-02-单例模式/设计模式02.jpg","7e330097c71e1bde331ab6427ba35dc5"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","c503fc9348fc27915072254aa18f80ac"],["/2018/03/19/hello-world/index.html","3e4e542805335647fec2d3d3fd85db8e"],["/2018/03/21/设计模式-03-工厂模式/index.html","5497d479f79975878b913cf14ff2fc33"],["/2018/03/21/设计模式-03-工厂模式/扩展前.png","8b726d01be218258d2da41183287ac5a"],["/2018/03/21/设计模式-03-工厂模式/扩展后.png","7b9623ca1f0916c10f4a10c7eb240a19"],["/2018/03/21/设计模式-03-工厂模式/案例1.png","d095f3f3fdf972a84d4ff0ef6a599fd3"],["/2018/03/21/设计模式-03-工厂模式/设计模式03.jpg","af8e734a425a39b7e7b05b9106f9ca65"],["/2018/03/26/设计模式-04-抽象工厂模式/index.html","ac532151801f491856fb4ee8bcfc5a90"],["/2018/03/26/设计模式-04-抽象工厂模式/案例1.png","440684789d1658930bd1ec5ad5288090"],["/2018/03/26/设计模式-04-抽象工厂模式/案例2.png","d86261d8ef042d3dfced8b05c253ce2e"],["/2018/03/26/设计模式-04-抽象工厂模式/设计模式04.png","6eaf0b1f0c28e8e9617cf86aaef2f712"],["/2018/03/28/设计模式-05-建造者模式/index.html","2b352dbf72425117124be9d2b4f84193"],["/2018/03/28/设计模式-05-建造者模式/案例1.png","ba25fa2b4af59aabfb5353369d90e917"],["/2018/03/28/设计模式-05-建造者模式/案例2.png","198fcd5b83dd751b6afee7778d3f0c2a"],["/2018/03/28/设计模式-05-建造者模式/设计模式05.png","1d0b510c3a841c8bd1816efa4f5199f2"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","a83dec491a4df464e3b278d5d9ec3a14"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","0c9b6458f8c9aa897f193bff9076a05c"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","e83ab1d10c5376a43152c03473cabfe3"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","9503633f1a729c910e05f34c860d7263"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/02/设计模式-06-原型模式/index.html","d32bfd8e8a79721c6cd19f9ab622f2f9"],["/2018/04/02/设计模式-06-原型模式/案例1.png","613770e975d1a9bffa6457cd58f96d39"],["/2018/04/02/设计模式-06-原型模式/设计模式06.png","3e85c10ba90878fc147bab73776242d6"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","a9c1a8e2d3327c9af9e5225d4b785664"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","d98b2a7ec20ae1fd0c8258d2c28b3973"],["/2018/05/08/2018-5-8-Spring学习笔记/静态代理设计模式.png","23a15cd9908bc3d737e486422e93dbd3"],["/README.html","2bb64ad733fe9f6ab6c8b317e61c408c"],["/about/index.html","258e97a72d748a3ee9a62812fccbc537"],["/archives/2016/06/index.html","d488a7eb5b79815cc68c354f8d3b0edd"],["/archives/2016/index.html","85c3781a5ad4734e09ea89fa79b9c64a"],["/archives/2017/01/index.html","7ca46d209d4e3ad17030a46d3492eda0"],["/archives/2017/02/index.html","f576c0254f2b0b89383befffa3ba3e28"],["/archives/2017/03/index.html","ba7e166f1313a8a6443cecc2262d3efa"],["/archives/2017/04/index.html","27ef7f3a24d377b47e84458d4eba192d"],["/archives/2017/05/index.html","d560d2634ff93635bccb3054936b386b"],["/archives/2017/06/index.html","cccea7caba8a90867ad0a901e8a56f0b"],["/archives/2017/07/index.html","bf10a5b3c214f9dff78627139efdbf2d"],["/archives/2017/11/index.html","2eabe166af4cd17aa7a66813383da81c"],["/archives/2017/12/index.html","0298771b5cad74b70deb6c2c0c6c9f9d"],["/archives/2017/index.html","dbf35cce474d01f26873f1cb00384838"],["/archives/2017/page/2/index.html","aa87d0fe7e80877482c4d5bba44c9941"],["/archives/2017/page/3/index.html","a1b039b2a48b06dcfcc60c1fdf3d2997"],["/archives/2018/01/index.html","49f05462cfec251d6571812cfbaa0e5d"],["/archives/2018/03/index.html","afab41ceb71774e16c5bf687d1127ca9"],["/archives/2018/04/index.html","75419dcc8cd2adb44f9ee47d66b69727"],["/archives/2018/05/index.html","6f42976f67859722f3c9e2e656e6a3a8"],["/archives/2018/index.html","89a6b59851724a39181680a7ba9fa9b4"],["/archives/2018/page/2/index.html","ca35c25a5fd77fff5621957561cb7227"],["/archives/index.html","90c541b9c58bdb43e05f0e783b40eb0b"],["/archives/page/2/index.html","fdb0b7f808ba9d11babb035e07961aa8"],["/archives/page/3/index.html","91cd007a72f5acd978a282cccba625c6"],["/archives/page/4/index.html","4397727c777380576db4494f56fbb5a5"],["/archives/page/5/index.html","201e971d8a29157d619676baef0d8d4e"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","f106ba420f40fada30a64eedc658f0ff"],["/categories/index.html","dfb13c34ec4be5db584055c556f78c65"],["/categories/前端/index.html","18d543b0f4b8e346e26c8d96460237dd"],["/categories/后台/index.html","5a4ec14c2d8dc95454bc0cff40adba92"],["/categories/架构框架/index.html","a82ca337b676f00148580e9e08273e91"],["/categories/框架/index.html","4106e3ced94ae4ef3e2c8b763579a4ee"],["/categories/知识产权/index.html","e73403932f3ae558c3650fdbb91d2b56"],["/categories/硬件/index.html","3e0735a863ec80acc1d5e1417ddc6b25"],["/categories/神经网络风/index.html","297f41680708579069ae0b7971a26074"],["/categories/算法/index.html","ba51e113ab032e467a0aa5dae29d8e78"],["/categories/计算机基础/index.html","60505fd7c667881632922800b65a1eb8"],["/categories/计算机网络/index.html","5c0843281ba755dbbda9074764b25a28"],["/categories/设计模式/index.html","5493d7570edc93d12fbb71325c30f9d9"],["/categories/软件/index.html","cc41fe884135564c76bf7e78a967096e"],["/categories/默认分类/index.html","145253e6d6f7d3aa9ae9ecad5bb46d31"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","37962457b399012502534c22cc5734b2"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery15.jpg","cf27c69f2b91f14e191861c212245c6d"],["/gallery/index/gallery16.jpg","0cab00106173c18bdb67e5bb340e30e4"],["/gallery/index/gallery17.jpg","51ebddb8eaf5c261b040f49729a0655f"],["/gallery/index/gallery18.png","2eacd2ea3794f3e6465bea6c1f444cf6"],["/gallery/index/gallery19.jpg","9b9d8a811be7e3f31b007f172c065684"],["/gallery/index/gallery20.jpg","b4761efa5609bc2e0702646844ca1ac1"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","f75601315c7c1e4b232c3ffe0fbe79d3"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","fec89f41e554ff4499001e539de7ee96"],["/page/3/index.html","0a3707b6dccd5ec27705272bb63a8a85"],["/page/4/index.html","3a540ebfbdcaf5a362818b7fb1e06fc8"],["/page/5/index.html","81672c8044605b2e923efb7791bbbbc5"],["/tags/Ajax/index.html","8bdcd99a9caa3645d3fa465c3df04b6e"],["/tags/JAVA/index.html","721062d4773e30162acd4ccf8af4ffdc"],["/tags/JVM/index.html","285030b7f36f2968e1f40ff5a6dd3620"],["/tags/JavaScript/index.html","139ccbfea8e5353a4c71b9eb8fc51656"],["/tags/Jquery/index.html","15b04fc43d86312ececf98c276aba8e7"],["/tags/Maven/index.html","ab2d77627d3f516bf92a317d6ccc1782"],["/tags/Mongodb/index.html","fbd71e44e202036edb46ff58c77e8110"],["/tags/MyBatis/index.html","9a3db85e986335e5ed1dd02938220a88"],["/tags/OJ练习题/index.html","f69865dc641c0427d2f24175f34da613"],["/tags/Shadowsocks/index.html","5bf26dd8820e22b23448de5fafc4b394"],["/tags/Spring/index.html","52b4387d7075efefd64bd81f3c3d67cf"],["/tags/Struts2/index.html","60a16e626424138bca6e451a4e120790"],["/tags/VPN/index.html","ff8052d78642bfaddbf08589aa091422"],["/tags/VPS/index.html","fc4be4168b6de245a1cefeedb25fdeb9"],["/tags/hexo/index.html","d973de408f7d2b2ade84a349147f3187"],["/tags/index.html","86ded9893ca947e174f5cfeb607279f7"],["/tags/南阳OJ/index.html","da21f0301d6c5b6aaa406e408aa3e34f"],["/tags/博客搭建过程/index.html","b1949234d1d141866e09430d1a0d6f0b"],["/tags/反射/index.html","609f6fcd0e06aeb289448d28153e282b"],["/tags/学习笔记/index.html","98bab0afcb84b60c6d100b47e7ecbf89"],["/tags/技术/index.html","ebf3ceea706ce98777c06f8cb6253786"],["/tags/操作系统/index.html","958c3e091d24694e44001a21325319d9"],["/tags/框架/index.html","0542d154a0877c02e974739d60a0b797"],["/tags/测试/index.html","3116021ae4f9af3fb99ca69e94fa57ca"],["/tags/知识产权/index.html","e1a88ae311c768940518533e6e1a26cf"],["/tags/硬件/index.html","0b5e8ffdd5a69fb147bbbc8f6781cc0c"],["/tags/神经网络风格画/index.html","8ec5c79447edd718bab450e533fff40d"],["/tags/算法/index.html","2219c06269574a20a73e88840450eb80"],["/tags/翻墙/index.html","e8b52a4ae4bc2f1edc205794c66fe4c2"],["/tags/计算机基础/index.html","b2849e1e93791481a8f0db867c8e2672"],["/tags/设计模式/index.html","cfc8ec666f4f7f601c7a25329f1ecde2"],["/tags/路由器/index.html","9c98474a012834db4cc03b4a0a470cf0"],["/tags/软件/index.html","dc59b47b64090f1d7ed97805374a3d21"],["/tags/锐捷/index.html","9eb54eeea94df29bec4458a6049a99ff"],["/tags/集群/index.html","dbc2876893842647aabaee7a1f9558a0"]];
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







