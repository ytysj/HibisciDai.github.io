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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","320d437d547f3da5e92fecbaee2519ea"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","44efa3166816531d7dcd349d005df80e"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","bc8d3f75a23c3fdecbc579113044d742"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","2028b26f570a6b75f79f37a645a8c271"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","4cd0125bfd6ca2d8169af1392a2136a1"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","265cc718d9d23a214a5359044a5f4739"],["/2017/02/07/2017-02-07-知识产权/index.html","87ffeea9cc35d94c6d7ad9a203ceb3fc"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","399c2d8e0ae2236bdaaa0bba9eabe95c"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","339dc28c2daba67645fb8cd8c82cfc42"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","a98876c3aa3401073e1d3d75da3a3eda"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","658231a1302a66ae5473034ad900b810"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","e4e8e69cb6cfdf99d8fdf777f1b54e3a"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","8d0f721740efe9dfdb9405e5a454fdea"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","0ff430d0a798dc98d29eeaed5988180f"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","c263e78fd382c2d45f8c169b2e87e8d4"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","99e40d9e574a9c19f2863986021fa553"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","21fbb80cfbeb5a6d80aed63b1a7e59a3"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","3c6fa2065050e67a309ff64cdf1a958d"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","a019f6d4fc436ec1201f09cc3742756a"],["/2017/06/19/2017-06-19-Maven/index.html","9ad0aad64488a5126278ae0aa4a4f7ca"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","15699cbee06ef6fb0ab7c457ed9ea8d5"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","249288d52d18f9052ad668ce82f5bdf7"],["/2017/07/12/2017-07-12-设计模式初步/index.html","a321750ac93ee48e378076cba58d1b54"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","403f4b6652e7c6081ae8aca137683134"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","3acf241dd8ec5f9bf058f0836d7ebabb"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","d26a38dc29095acfe7d44120a76de601"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","4dccb8b829e7386c39fecd8188d9afa8"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","c4509cf85967516f3c699f32305d1ccb"],["/2018/03/19/hello-world/index.html","76d0ceafde06ba112220bce0bc4e1103"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","ab5ded04d29ce5b230c3ad0cb54f39b9"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","a83a895e970ff206d976bffcbd4e9ac9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","3887e7d69e0f8a0c7d717af6b95937b4"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","8fd16af7e1c6cac3ce6c5fae1449ae38"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","cd677777ddebf6a2a8aae91d37604594"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/README.html","0dc18d06084fe1063355a8c0366b6526"],["/about/index.html","5ad2a44af24e22f1b1782419db336ee3"],["/archives/2016/06/index.html","c21ee3b692c0a65134ff51c3d310eb48"],["/archives/2016/index.html","8625bf13485ed970dcdab609839f27e8"],["/archives/2017/01/index.html","0f89f792e162bef0b6dca425cf4bd549"],["/archives/2017/02/index.html","443c30725fa3650ba4db3c910151f2ec"],["/archives/2017/03/index.html","4e610dfa0b7fdd2a19f95edcc2ee4f5d"],["/archives/2017/04/index.html","e453b196aded1be5fa6618ca52cf62bf"],["/archives/2017/05/index.html","6e61bf351248f82a3f886e337a2215e9"],["/archives/2017/06/index.html","f62f5964ea02135aafadc8fe45e345ad"],["/archives/2017/07/index.html","2c2dc03f4b53a691c39535d644646972"],["/archives/2017/11/index.html","a5793dc9d00c2e9f4ebf154897aa02c8"],["/archives/2017/12/index.html","baa8b529bb6d3ecf97d68e799c96cab5"],["/archives/2017/index.html","439b3b590f4469a3cd310625907b5f09"],["/archives/2017/page/2/index.html","0bf77388276b9e502cbec28277aa4fd9"],["/archives/2017/page/3/index.html","0ea6d33bbc1ef19d669dfb8f747bb8df"],["/archives/2018/01/index.html","d29f83f006518b718182fcce9e7ef5e5"],["/archives/2018/03/index.html","14246d9c2d41ba905304567aee77b3e8"],["/archives/2018/04/index.html","d00c7aceaf951a74f477e0b5c2760b8e"],["/archives/2018/index.html","47c70d8e65a989f918e68e9d64e4b6d0"],["/archives/index.html","c870763a7b26ebd61e8ee786a662a549"],["/archives/page/2/index.html","3cc9de9471fc9d578c8f662294828d99"],["/archives/page/3/index.html","c592eb4099177ff06e94b30ecc5426af"],["/archives/page/4/index.html","ad75b502ec27da3d35224030c8382e55"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","0d12d831d1e0ab1dfe073b4de8dcf116"],["/categories/index.html","5a24cbf2cbc575ff180f42eae5069618"],["/categories/前端/index.html","1878943b9eda593d875f9a24d103d984"],["/categories/后台/index.html","d34d01cd4b6d2dbcc782fcfb3d36ea3d"],["/categories/架构框架/index.html","efe7330f45a0f234b9fa1434ccba6807"],["/categories/知识产权/index.html","8de5a640a14bf70758416761c3b5909f"],["/categories/硬件/index.html","cc7c45b38f9b708cd69fdcffa400053d"],["/categories/神经网络风/index.html","3fc95a3e9ab4828c594ad754f2c7c36f"],["/categories/算法/index.html","bb9f253f71f31ff07c20d8e1b8ffa5d9"],["/categories/计算机基础/index.html","c9856fb556b4ffba7a04811ef2f39de8"],["/categories/计算机网络/index.html","26b5070f1d16cbf2443a07f191f842aa"],["/categories/设计模式/index.html","2d6c635a1a8a317582970d6f73cceef3"],["/categories/软件/index.html","617a63d8d805356552c02404d095ca5b"],["/categories/默认分类/index.html","f61e6f955e0fb180148c0d57de5d42a2"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","1682577b53748bd57c079a51ac8c897a"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","b7fc8a1dbb8256344930f3a4167f104b"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","43e4efdbc07b80a65c11ddaa75195bb7"],["/page/3/index.html","17e8382cb605e7ab993b966e7945910a"],["/page/4/index.html","b4067a3a0e1c33b2898569a312fbf39d"],["/tags/Ajax/index.html","a5de11c86086f24e829b6f63817dc0f2"],["/tags/JAVA/index.html","183a33e72928aa2da248dbd13175dd0a"],["/tags/JVM/index.html","a86d15127781a1b2fe74d1717ed56427"],["/tags/JavaScript/index.html","86c35ac9009c460f0cc961fb1bc8fa75"],["/tags/Jquery/index.html","a091f24049647cd0168630c283e78ce7"],["/tags/Maven/index.html","69e84cecbfac05ec2594801aebb5fc6e"],["/tags/Mongodb/index.html","f4b4247c18deb39973ea636809860903"],["/tags/MyBatis/index.html","cd7bbe626c6eb06b326f6ea42e318f78"],["/tags/OJ练习题/index.html","31bfea82440b5eaea9dec032d125cf9f"],["/tags/Shadowsocks/index.html","ef1e48c910dedc90cb4ca1f3a698561a"],["/tags/Struts2/index.html","26e1c24445e3c2f8583b5ffbc32e61d6"],["/tags/VPN/index.html","6cd8d1f2370da2850f1cba94b1d09342"],["/tags/VPS/index.html","1fde12f331e9e0bd76b9e6831d29a898"],["/tags/hexo/index.html","5c3080448447173472348e41e3d7529a"],["/tags/index.html","03949ca05b0c175a2076870dbbc59840"],["/tags/南阳OJ/index.html","8a34ec8bfd3e14a8bf1f3a5f1cc3ba48"],["/tags/博客搭建过程/index.html","bff005f1f191111902e5620bc9216b5b"],["/tags/反射/index.html","5a7c4906996f1864969714e44f492b4d"],["/tags/技术/index.html","c5db60ab1b9e8ecdfb1db7d302ad279a"],["/tags/操作系统/index.html","0c3b4a5bebdb859d8b5478cc3f8c47b1"],["/tags/框架/index.html","77858a339d78e6d8e2389a929d6c3d71"],["/tags/测试/index.html","73b2f77ce6d1bd14068e001c070a1bf4"],["/tags/知识产权/index.html","af185a40297d3af78462da545b94fb0d"],["/tags/硬件/index.html","c7e2b9ba592bac77f006bf3498bdf57a"],["/tags/神经网络风格画/index.html","eeaa7221afe65404446dacab7a148ec4"],["/tags/算法/index.html","6588f44b624f959dca0708e7a4c3217a"],["/tags/翻墙/index.html","8cdec5b404f9353d979111e646eab8a3"],["/tags/计算机基础/index.html","5b91e57f46aedb5e848f2b45b2271108"],["/tags/设计模式/index.html","6e480eb16c56b3b47460e453624c43e0"],["/tags/路由器/index.html","6eafb2df8c566087a3556e181bfb71f5"],["/tags/软件/index.html","929c0e749cc2a68534e37d83020e096a"],["/tags/锐捷/index.html","82ed693601be16aa70e945f5e7e36077"],["/tags/集群/index.html","96840d2d06e9a6c43489a44c4e237196"]];
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







