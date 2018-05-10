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

var precacheConfig = [["/2016/06/19/2016-06-19-二进制四进制八进制十六进制之间转换关系及浅谈文字在计算机中表示/index.html","b232b6cf346df079064ef9e63078112f"],["/2017/01/30/2017-01-30-Shadowsocks初识及VPN和VPS区别/index.html","ae1f8b81217efe8de6981a0f8d469e70"],["/2017/01/31/2017-01-31-南阳OJ-No.4-ASCII码排序/index.html","d707f383f503c6b15961601baf7a1b31"],["/2017/02/02/2017-02-02-南阳OJ-No.11-奇偶数分离/index.html","f97f14304133e2f3044b32e1b7d8dc53"],["/2017/02/03/2017-02-03-南阳OJ-No.13-Fibonacci数/index.html","9fb0430d56f64caa3d4f23889fb7abc1"],["/2017/02/07/2017-02-07-markdown编辑器测试语法/index.html","23f946da4abfc794e8e7b88f351c0f1a"],["/2017/02/07/2017-02-07-知识产权/index.html","12e5fb33c9084ac5b424862db4063e3f"],["/2017/02/09/2017-02-09-南阳OJ-No.22-素数求和问题/index.html","b34fb3babb71467c0a72062aabd80257"],["/2017/02/12/2017-02-12-南阳OJ-No.24-素数距离问题/index.html","3e6ef5f8fc3477e1d9a39591ee6e1ea0"],["/2017/02/15/2017-02-15-南阳OJ-No.31-5个数求最值/index.html","e19deb2545ce705132b7329a5e935e68"],["/2017/02/15/2017-02-15-南阳OJ-No.33-蛇形填数/index.html","d849b7dcf2f0599e7880fb4059831ddb"],["/2017/02/16/2017-02-16-南阳OJ-No.34-韩信点兵-1/index.html","5b46e6b4f9125d15470ed2d209d7253b"],["/2017/02/27/2017-02-27-南阳OJ-No.56-阶乘因式分解-1/index.html","2abfd850a0be718d1595b781f2b1a6c9"],["/2017/03/07/2017-03-07-南阳OJ-No.57-6174问题数学黑洞/index.html","3486f7009e5eb1ce344c09be01836440"],["/2017/03/23/2017-03-23-原装Win8本改装Win7不完全指南/index.html","a2b5bef59c7285a416f758145acc2e45"],["/2017/04/06/2017-04-06-Sublime-Text-3空间安装及快捷键指南/index.html","a39604efac5ebf8b93177486f3b6aa59"],["/2017/04/08/2017-04-08-JAVA随机数生成/index.html","5ffba9aaa39160d7fcf6b7c3e5f98a15"],["/2017/04/08/2017-04-08-神经网络风格画-Neural-Style-Art/index.html","853784387497a407fa9d7cef08b24dae"],["/2017/05/03/2017-05-03-版本控制概述VSSCVSSVNGit比较Windows下SVN搭建详细介绍/index.html","34ac24c971598c113c1f90f067bc329f"],["/2017/06/19/2017-06-19-Maven综述/Maven综述封面.jpg","224f35ea5fc8c2bae4bf47f2e2e329b8"],["/2017/06/19/2017-06-19-Maven综述/index.html","94ef6ee497805c41b76f492a3e4ba011"],["/2017/06/22/2017-06-22-Maven学习笔记/Maven学习笔记封面.jpg","85ad29634f218c9ed55f69d1c6d97f00"],["/2017/06/22/2017-06-22-Maven学习笔记/index.html","e18796a73fd103906e5dff8dbb33b075"],["/2017/07/12/2017-07-12-JAVA反射机制/index.html","8cd4e32dad949328d09add82b84537c7"],["/2017/07/12/2017-07-12-设计模式初步/index.html","c7f015ae34ef5103ceef91088fbd78a5"],["/2017/07/15/2017-07-15-Java内存机制详解JVM初步/index.html","17156324b6159779bcafe4b0b827854b"],["/2017/11/19/2017-11-19-MyBatis框架/MyBatis框架封面.jpg","63a56654b07fe0de9b341a879e3aa924"],["/2017/11/19/2017-11-19-MyBatis框架/index.html","04e3056acc872a9682316384a8349124"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/index.html","6310de3bef40a5457fcac9a2a48aa2aa"],["/2017/12/22/2017-12-22-小米路由器3实现锐捷认证/小米路由器3实现锐捷认证封面.jpg","1f8950ccf01e42a81ef6d5f7b52744fc"],["/2018/01/10/2018-01-10-JavaScript学习笔记/JavaScript学习笔记封面.jpg","bc692626c345d0d198c3cc26369b56c7"],["/2018/01/10/2018-01-10-JavaScript学习笔记/index.html","5f2cfdac56857ec33d569d85098422ce"],["/2018/03/16/2018-03-16-Ajax学习笔记/Ajax学习笔记封面.jpg","9ebf787ed35b7149905cc2fec61074ed"],["/2018/03/16/2018-03-16-Ajax学习笔记/index.html","0ac40ea7bdde41038703824c984644b4"],["/2018/03/19/hello-world/index.html","a9e7bacbd90da4d627309990fd78cd0a"],["/2018/03/30/2018-03-30-Struts2学习笔记/Action中的成员变量替换request作用域.png","7debedff9d8b3a32cf6aa27d3bc17a2d"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts-default.xml.png","128c213ed2591eb7e472451c6a81dd7b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中上传的文件默认大小.png","ab1d751d9b2addeaf6a09265f648e59c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2中断请求.png","e038a2645072151613632a75244480f8"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2学习笔记封面.jpg","8b8aca65f072698b74b25ec45c86f591"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2强制登录.png","f12ad010642392f5e4f127d01a03a71e"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2拦截响应.png","fbe9b52a915e07d106ba82b7fff8a2ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件上传思路.png","15f88f9b2814ff3ada61bd3676c11598"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2文件下载核心思路.png","dee0d8c4d011b9af244c78bd1093055c"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts2配置文件配置.png","35ab4c2d4541135f67537d551f51528b"],["/2018/03/30/2018-03-30-Struts2学习笔记/Struts解决前台首页.png","439c377e961114f9e8f10ac8863a6363"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug使用.png","88105f19871374a89fbc7dc45cc897d3"],["/2018/03/30/2018-03-30-Struts2学习笔记/debug开发步骤.png","886a41e3f8bfb1e938cf8e98669c47ee"],["/2018/03/30/2018-03-30-Struts2学习笔记/index.html","b20f6e9550a61bb4be1dcbb165af947e"],["/2018/03/30/2018-03-30-Struts2学习笔记/param拦截器.png","b583005b5bff780415b71cd64cd416c1"],["/2018/03/30/2018-03-30-Struts2学习笔记/令牌环实现原理.png","c7219e7c725212f6a490cb66c93a1dce"],["/2018/03/30/2018-03-30-Struts2学习笔记/传统首页显示方式.png","6c8f3936e2f90dd110022f9cfcf62e82"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈注意事项.png","39588a7290ea71d92160d54e4466d53c"],["/2018/03/30/2018-03-30-Struts2学习笔记/值栈的内存结构.png","8551476c82696189907d8fda852632ba"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器注意事项.png","32f4dd862b7d7367d6a0e349b33d608d"],["/2018/03/30/2018-03-30-Struts2学习笔记/拦截器的开发步骤.png","fa946586a3be31296fe6933c6b34ec00"],["/2018/03/30/2018-03-30-Struts2学习笔记/数据处理机制-servlet-struts2.png","e58c39a93097f86b8de91f53c279f4d0"],["/2018/03/30/2018-03-30-Struts2学习笔记/查询所有的思路.png","61004247c4f641aedb921ef73e8f185f"],["/2018/03/30/HibisciDais-Blog-Hello-World/index.html","4d1b51882e072a8b49b9eaef38b847c8"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中的DOM编程.png","93439c0cc0bceed5518eab00b8f0bf91"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery中通过编程的方式加入事件处理.jpg","d8d2ce26dd7e483bb951649f25a6bf21"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery对于Ajax编程的支持.png","a818d3d3f08ec5c7a64c14076b9f0317"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/Jquery框架学习笔记封面.jpg","efeff68e3042670547f78849bf74b3f9"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/index.html","675f9bdc381a188964cd5b8fea8ac426"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/js中事件处理的两种方法.jpg","6abbbe7748e9981b46eb76ba49429c67"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/一组关系方法.png","6f0218bdaf07ad069427e672a3e2ed84"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/事件处理的完整写法.png","0e417943f7beb1458227eec9d67cbf06"],["/2018/04/01/2018-04-01-Jquery框架学习笔记/级联菜单.png","b7112acfcb4e2af3f7c158973ed2efe0"],["/2018/04/02/text-picture/index.html","b45cc3d076e3e1541e31f40af4a6592e"],["/2018/04/02/text-picture/text-picture.jpg","73a0374dc49b9e472a6b791d82f587b7"],["/2018/04/02/text-picture/text-picture1.jpg","d02b791819638d32d3f6e886724657e8"],["/2018/04/02/text-picture/博客图片问题封面.jpg","2ed0cff1f5e4886b966695fb0c639ecc"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB与关系型数据库对比.png","01a94d4985e4c05b5c7aa100cf6e32c1"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB学习笔记封面.jpg","7b21bddb202722b2281e08156cb646b4"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制1.png","5d905b23d0ff2aa9c20336ddb8198afb"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的Master-Slave主从复制2.png","3afd239198cdf146ad452acc9f83bd96"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-为什么需要分片.png","a0a9d09e1f5dec84a3443d0a24a3c725"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-分片架构.png","ee8c8f179acb41965fa6147c84310b3f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/MongoDB的分片-片键.png","18c625a34a2a27d954d161003a3f0394"],["/2018/04/21/2018-4-21-Mongodb学习笔记/cap-theoram-image.png","d9620c779c67d921a0fb9daf4e771385"],["/2018/04/21/2018-4-21-Mongodb学习笔记/index.html","7c20e71076bcfddae3c10be2d37ce11f"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主从集群-Master-slave.png","78a7e48072177e83faaf74e787d22393"],["/2018/04/21/2018-4-21-Mongodb学习笔记/主备集群-Master-Standby.png","bf3bc083d403a2cf4649e9bce4cb9715"],["/2018/04/21/2018-4-21-Mongodb学习笔记/集群总述.png","ad434135222fda66d757300a5aaeed63"],["/2018/05/08/2018-5-8-Spring学习笔记/Spring学习笔记封面.jpg","da936987b48d85f67298eb9091e7abd5"],["/2018/05/08/2018-5-8-Spring学习笔记/User类结构.jpg","a7a044cf06d64b09c9a2227c2aafe690"],["/2018/05/08/2018-5-8-Spring学习笔记/index.html","2164faeb268c4236e5ce741b5f864914"],["/README.html","f595af71703cec02b3cbd2d80fa5e55c"],["/about/index.html","adc5231dc739cf4b89c3a6b0a8e67844"],["/archives/2016/06/index.html","8a52406c7aeeb22f8669ef6b83cf83a2"],["/archives/2016/index.html","a54fe29227be8d8ce18bb39b2603e6cc"],["/archives/2017/01/index.html","0684dab0bb5ffe0e2e5b4c6842b2d00f"],["/archives/2017/02/index.html","b55bd801259bb0c96716fa44a698a68b"],["/archives/2017/03/index.html","a2239b80afc9902c1c64ca906866cb31"],["/archives/2017/04/index.html","2e45b90add923a16784ba7e9c516c91a"],["/archives/2017/05/index.html","4be20227e0680e032c99ea9b28c2f1d6"],["/archives/2017/06/index.html","2ae8f69c5e2a3f9cc545b4700366a323"],["/archives/2017/07/index.html","4f449b347f54aa92346aec23845917a9"],["/archives/2017/11/index.html","aedfa58bae06c71f8f1d38bbdc42dd1b"],["/archives/2017/12/index.html","fe1f55f384b9d3d0eed88334e2e89a96"],["/archives/2017/index.html","e1f3a9187d674324937cf92a2a57d36a"],["/archives/2017/page/2/index.html","6b61f4d96fca9769aba86baa0cd6acbd"],["/archives/2017/page/3/index.html","24acac7cc9f233df0648c00fc094aca0"],["/archives/2018/01/index.html","cca0292d8566cd500e344da2ef47a2b4"],["/archives/2018/03/index.html","eae8af24e0c8c4d55b378afc4f9066d4"],["/archives/2018/04/index.html","d7b65ed12f871095b0f8600966b87a39"],["/archives/2018/05/index.html","142e019402a25038d6bf0e3cfb3c777e"],["/archives/2018/index.html","eb6d1e44758044d3bce1569854aa61d9"],["/archives/index.html","0242754aa7bc626de7a3abc097e3e31d"],["/archives/page/2/index.html","24743970afb7f76314af1cacae1c9599"],["/archives/page/3/index.html","cacd39d6a1684386188e752352a06327"],["/archives/page/4/index.html","b5b0c28354e60a88b22f1bea35c4370d"],["/assets/algolia/algoliasearch.js","210cdc21eb25fcf3b788cb6a246e3f8d"],["/assets/algolia/algoliasearch.min.js","bcda2cbb8ae4df8def1d63567ac73c83"],["/assets/algolia/algoliasearchLite.js","38a9a07c3d496ff6e01225d95dce9b3a"],["/assets/algolia/algoliasearchLite.min.js","f4f424c8a3ed63ca50352767fa636c06"],["/categories/JAVA/index.html","236b1f5d8c9a5ac4000ac3643367c144"],["/categories/index.html","437bd6196209a645b9606610ce76ed9f"],["/categories/前端/index.html","6ee901b1b928e22ad06e5b9b8970eed7"],["/categories/后台/index.html","99b2c67d6111fafb1cc45b0c7152d374"],["/categories/架构框架/index.html","34e0122bc63f32a397dfd8839e5e8b4d"],["/categories/框架/index.html","5ccafab81d860d51c98dbdeeaacb1aa5"],["/categories/知识产权/index.html","70ffd8a7bc3b5601ae8c77e9d273ab80"],["/categories/硬件/index.html","60bbf89a924c4933217d6d6abaeeb392"],["/categories/神经网络风/index.html","a829d81d7c748728b58e31a12dd45e1a"],["/categories/算法/index.html","5e471c14183b5b4c59e7ee72cbb99cc7"],["/categories/计算机基础/index.html","9f0584a6d68bd739ef64f56c8c4a6096"],["/categories/计算机网络/index.html","45a594b5f1d8f313a888d64ca6ba1d95"],["/categories/设计模式/index.html","e44163379e28282a6e35003ee94b4ab0"],["/categories/软件/index.html","e6ab47dd4a47d62eba9123ffda16721d"],["/categories/默认分类/index.html","de5ac7e1312348fe5420e87cb8c0bd71"],["/css/index.css","8b887d55e21dc81766c7edaa0f5a037f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","ef677a461330487457ea1aa7c5ba3885"],["/gallery/index/gallery1.jpg","79638b99fdf169df482975b0b2c8d393"],["/gallery/index/gallery10.jpg","b7426e54d0e7e6e0f0f2d4a87e19cbc8"],["/gallery/index/gallery11.jpg","b448dcac5a7918f39f61c7ac02ed26f4"],["/gallery/index/gallery3.jpg","aa29f9555587126f9287af125328b39e"],["/gallery/index/gallery5.jpg","69d8d3032818512db99b8b225a48210d"],["/gallery/index/gallery7.jpg","36723d7cbcf0b7dd3cc7e87262e84436"],["/gallery/index/gallery8.jpg","9092bf63801798e48e327bee4709bd9e"],["/gallery/index/gallery9.jpg","281d330dc68a9a61ebe7addc05b8ce7d"],["/images/icons/icon-128x128.png","729d863dce81b929e49e5ed723a4d6db"],["/images/icons/icon-144x144.png","d1ac2a517df94645b3bc8a794841febc"],["/images/icons/icon-152x152.png","d23d9a6a6afea9eda9ad2785ab87b2d5"],["/images/icons/icon-192x192.png","693e3d49d0516d99ad8b6caf8225bb05"],["/images/icons/icon-384x384.png","6775caeae9eef029119cadf326d3deb9"],["/images/icons/icon-512x512.png","d8e2079e5d56d65f13b13e6a60b66cf9"],["/images/icons/icon-72x72.png","dec97795a02e78f9c6b5bf7d551d1599"],["/images/icons/icon-96x96.png","9d7c1c14baf59b8aeb8e2cc6ca71c8f5"],["/img/Avatar.png","80d0d751cdc53c6ae2a28dd3ff3bd059"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/banner.jpg","00759381d3e63b9e920ced064b701562"],["/img/banner2-default.jpg","6704650ea6a92544e3002c286bf9ee0f"],["/img/banner2.jpg","203aa2fde7c16d4fddd268d3cee260e5"],["/img/weixin.png","4b80472a1b3595a224a9fe46802fe117"],["/img/zhifubaodashang.jpg","5f3a33dbc6ce5ac12cbf9b73d236b090"],["/index.html","100d499f867a3be40235a4e71878a0c8"],["/js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["/js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["/js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["/js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["/js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["/js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","bd261a5dda799613501070ecc19d6e69"],["/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["/page/2/index.html","d0d1b239a63ad3d9351d7fcccec4b639"],["/page/3/index.html","8dd75f91042945c4a14bc4876837a80d"],["/page/4/index.html","6dbbf55080b746b745d6fdd108709924"],["/tags/Ajax/index.html","8af0820dbae5bbb7ef019dc67b6ef25a"],["/tags/JAVA/index.html","7828ae72b56061f9e4fe66f325738927"],["/tags/JVM/index.html","e8fc2ec6ad408bfbf3ed0e1c88e34525"],["/tags/JavaScript/index.html","b726b24f80bdf6ca9f8a2402a77ed8d7"],["/tags/Jquery/index.html","6a412aa3d87de38f50ca34cf2d338610"],["/tags/Maven/index.html","bbb86592fbd7965bfbdb408e0594a4d3"],["/tags/Mongodb/index.html","8c644e6c0fcc5274a07b40864fcb273e"],["/tags/MyBatis/index.html","7c5176b2cb11b40e3bad7f25c13a4d6c"],["/tags/OJ练习题/index.html","62c60775de318ce50dda28e3faeae21f"],["/tags/Shadowsocks/index.html","b012b37ee3435348ae0471984dafc829"],["/tags/Spring/index.html","29d0bca04da8834cd8dad07b9aa44df3"],["/tags/Struts2/index.html","d6ed60f2bf6753e6fca122e75b23e51f"],["/tags/VPN/index.html","bc85bd73fd43f1caaed185ae928dbdc2"],["/tags/VPS/index.html","7b9f8b70ef6dc20d2181693bbf95d103"],["/tags/hexo/index.html","50abca31cecbeedc35d0a12af00201f7"],["/tags/index.html","82c12d189aba718949179397958389f4"],["/tags/南阳OJ/index.html","ed98f9be599740c4d8905b49710c61c9"],["/tags/博客搭建过程/index.html","1a9ed411b8596aeecffff183ca81b7ff"],["/tags/反射/index.html","4f460649bedbc55b34d2a18e74afd154"],["/tags/学习笔记/index.html","8c47a42e6d7cc0bc6972e2be5625a2c2"],["/tags/技术/index.html","70cbb6b27c4c3038bff57dee05b92a31"],["/tags/操作系统/index.html","85fab508858102d6ba2391999b85b86e"],["/tags/框架/index.html","3b23f1f93377f72b9cf1866c6fbc955b"],["/tags/测试/index.html","4114d013be15cab223414c1eac152393"],["/tags/知识产权/index.html","a1200e9a9c8696287d2fabf4d9689bb2"],["/tags/硬件/index.html","a9706d4f648f2f8e50f498232ec47e8d"],["/tags/神经网络风格画/index.html","f7fd8e80cb5a5c2996c4b51cc97a08c8"],["/tags/算法/index.html","650d2ae1e61616444052fd4b2b0981ac"],["/tags/翻墙/index.html","9b55964635ab549248f2dc7c52c2e0cd"],["/tags/计算机基础/index.html","98e9d3f5fefb40a5cf9bb31a8bbd5292"],["/tags/设计模式/index.html","52d96a7f78b34f953aae14989f81e6be"],["/tags/路由器/index.html","0887470b30bd87b7b59ddd7f789cafa6"],["/tags/软件/index.html","473e076978e6e086c9fbffbfe05f3df9"],["/tags/锐捷/index.html","aa546c142d30156866704030b3c505c1"],["/tags/集群/index.html","5900ab06b50eb9bc4a1745bc09c1ce9f"]];
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







