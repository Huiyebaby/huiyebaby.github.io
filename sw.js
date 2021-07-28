/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/07/01/hexo博客/index.html","16737d10bb6eee1d8ff61ba1c5ef7e65"],["/2020/08/18/强调句/index.html","ac31b3fd8bb8f474ef3f0062b391357f"],["/2020/08/31/JAVA编程起步/index.html","0067f0238ac317a513929a9cd8970056"],["/2020/09/02/名词性从句/index.html","ba8c3c1586fc155c4fbdf3e220b7f264"],["/2020/09/02/定语从句/index.html","0d3676826a12647f62b5d2b6fa6735f1"],["/2020/09/02/状语从句/index.html","092b81a3f1f07ab39b714c1476f2a8d6"],["/2020/09/02/简单句的补充/index.html","e004c183b2951d57b3492045a08d159a"],["/2020/09/16/MySql数据库/index.html","3961ff212f3dc6fd945f6a06dcbdf140"],["/2020/09/18/JShell交互式工具/index.html","55c45a62883c7d4b1d34536416fc3bd2"],["/2020/09/19/CLASSPATH环境属性/index.html","db739dda652847e866bf5c5348efe870"],["/2020/09/19/JAVA代码集合/index.html","b74910e5e9ca3ca59eda8cb8b8cd8485"],["/2020/09/21/JAVASE/index.html","25283391575e471951712e14cfb23673"],["/2020/09/21/MySql表的结构/index.html","9132bb8dda768cd70fe08dd8fd404456"],["/2020/10/04/分组查询 Group By/index.html","ed38590027f5b30eab26e42c2d4681b4"],["/2020/10/05/MySQL查询/index.html","cc58dbf6218f4bf9e5e81960190cdaf2"],["/2020/10/12/MYSQL表的使用/index.html","5b16bf7c8b4c0da98dc8c919fb4a7456"],["/2020/10/15/MYSQL——27道练习题/index.html","793e043e7816f5dcb3dd0be446d8f8d5"],["/2020/10/26/Monster的口语方法/index.html","6fbe79f4091a58989110cb0d85231f7b"],["/2020/10/27/拍摄/index.html","b996cb53d5067138b95e0b93428eff7e"],["/2020/12/04/详细阅读之策略/index.html","9496e82531002c0a8d7d12c2aaf6e998"],["/2021/01/07/长难句分析/index.html","6cb0ce31ae3270b2aae58e46726387ef"],["/2021/04/11/unserialize反序列化漏洞/index.html","5e1e9e808dde6026ccd816e8c60d7b49"],["/2021/04/11/代码审计--Duomicms变量覆盖函数/index.html","68caba038c7d30c1f9ee1fef24f77719"],["/2021/04/12/0day审计实战案例/index.html","2a0a853ed8cad82992ef2c6153bd52a6"],["/2021/04/15/bypass-绕过阻挡我们的WAF/index.html","b313d0979b37cb70ca4feaff113872f5"],["/2021/04/19/内网渗透/index.html","51c6099aca90e962b53ef2d1e8ed8c5a"],["/2021/04/20/SQL注入实战/index.html","ccd40b74da95226188d14a69f084c5ee"],["/2021/05/02/注入漏洞1/index.html","787a4de7a17d86c1e5e95e87d4afdb9e"],["/2021/05/05/App渗透测试原理/index.html","d556f7c7b7944db5ce057da1d38a2975"],["/2021/05/07/网络攻防工具/index.html","34df05f339df3b5e767d208488acc452"],["/2021/05/09/【kali linux】基础知识/index.html","361e9483813936c9b5530d9042ec6713"],["/2021/05/12/Movavi Screen Recorder v21.2.0汉化破解/index.html","cc89d9d5668cfcd228f78ce92929be44"],["/2021/05/15/第十四届全国大学生CTF比赛/index.html","246a0d41d5f666db39425d532f2a21b3"],["/2021/05/17/谷歌语法搜索关键字（打包）/index.html","893faf06faa810c105ae6512da8a96bc"],["/2021/05/19/[buuctf]web SQL注入篇/index.html","c414e6e5403e6a44b2b72fe8347e84b2"],["/2021/05/21/[C语言]学习之路/index.html","b1ec7e4633bcc8467fae718cbfba5b9c"],["/2021/05/25/[C]哈夫曼编码器和译码器（C语言）/index.html","37767b966a8673cbf3ea383e7341437e"],["/2021/05/27/Gitee pages自动部署/index.html","80261f0142fc836bf4396064c51e3c75"],["/2021/05/28/议论文的基本万能模板/index.html","5b9fd824060b28cf5b5444a7b985eca3"],["/2021/06/13/[VC]无向图遍历（邻接矩阵和邻接表）/index.html","1067b9a7f459b5242a5596481ffb0081"],["/2021/06/14/【信息收集】Google hack语法基础/index.html","627cb989ec85c419e50d9faf232df8d5"],["/2021/06/14/【信息收集】基础模板/index.html","a689225493e28a00eafd88401263f91d"],["/2021/06/14/【信息收集工具】Nmap基础使用/index.html","592df72d07aa8038f36374596c6c3e76"],["/2021/06/15/【信息收集】CMS指纹识别/index.html","ffbe94e57a506f96a958438b215824a1"],["/2021/06/15/【信息收集】子域名收集和目录扫描/index.html","50f05a58d16ebdb9884b4c58564cefbd"],["/2021/06/15/【注入工具】SQLmap实践手册/index.html","6962da1f799d1cdf1b07c8fb23e98820"],["/2021/06/15/【漏洞工具】BEEF基本启动方式/index.html","a873d3cc0f99f5aba777de606d5f3d20"],["/2021/06/16/【入侵工具】webshell管理工具基础使用/index.html","a6f557d0f422f40b172a9089db77bc0d"],["/2021/06/16/【漏洞工具】Metasploit框架基本命令/index.html","c16d973076fc88503c055d431206c4dd"],["/2021/06/17/【破解工具】Hashcat加密破解/index.html","3ed53b7427f0a16a0cce7a649ebb2579"],["/2021/06/18/【嗅探工具】wireshark初步认识/index.html","889c3cea2f059928341a9056bfa843a8"],["/2021/06/18/【漏洞工具】Metasploit框架永恒之蓝/index.html","ab341628d3a34718efd84a55f281de50"],["/2021/06/18/【漏洞工具】Metasploit框架爆破模块/index.html","215caf9934ebf4e7e6f7254ca50ccb7a"],["/2021/06/19/【嗅探工具】Dns劫持 - Ettercap/index.html","e48fa10423ce70e73816000cb6dbd66f"],["/2021/06/21/【嗅探工具】无线WIFI密码破解/index.html","9130ad5324ea7ce559949462562757b9"],["/2021/06/23/【后门攻击】后门生成模块免杀/index.html","0b7401b0d8d3fc3e466688ce15dce214"],["/2021/06/24/【Java】数据结构-插入排序法/index.html","7b77ae6f11713a175170592b27cd3964"],["/2021/06/24/【Java】数据结构-线性查找法/index.html","2923f1135dbc87a70fdf2994d115d313"],["/2021/06/24/【Java】数据结构-选择排序法/index.html","b876344b5e235aa30e7330d94efb3128"],["/2021/06/25/【Java】leetcode题解-有效括号利用栈LIFO实现/index.html","69408f02a97e220b295726cf26e0bdd2"],["/2021/06/25/【Java】数据结构-利用动态数组自定义栈LIFO/index.html","78dbdce8d6d9087bfbd547f7a0976460"],["/2021/06/25/【Java】数据结构-循环队列/index.html","81a5f5c42f22b85857bd91ab70e2c3b9"],["/2021/06/25/【Java】数据结构-自定义数组的数据结构/index.html","79c3aa317fca2aac9501c018b24b1635"],["/2021/06/26/【Java】LeetCode题答-203移除链表元素/index.html","0e4eab14069e41bd1803610575467efc"],["/2021/06/26/【Java】数据结构-链表实现栈(完整代码)/index.html","0958690b8bdf530c37200e6643d500ac"],["/2021/06/26/【Java】数据结构-链表实现队列(完整代码)/index.html","9a14bd6db71fbe5063858dac36267fc1"],["/2021/06/26/【Java】数据结构-链表的增删改查(完整代码)/index.html","6f23093af459e0c4d1fd98abae0bf2c8"],["/2021/06/27/【Java】数据结构-归并排序（完整代码）/index.html","df91f5bdba0763f7ad2e85dccc104dce"],["/2021/06/30/【Java】LeetCode题答-704二分查找/index.html","8cadb156e51df7980fb8c181ac984875"],["/2021/06/30/【Java】数据结构-二分搜索树前中后序遍历和增查改（完整代码）/index.html","5546f03d39b713d77e2fbb0a8672c6a7"],["/2021/06/30/【Java】数据结构-冒泡排序（完整代码）/index.html","fc85344ac7c51a1345c597658867bf97"],["/2021/06/30/【Java】数据结构-堆排序（完整代码）/index.html","60dc6ede5e3666fe8cc1419f975ed882"],["/2021/06/30/【Java】数据结构-快速排序（完整代码）/index.html","40d37a58cbf8ccf6f5ee9abe16048be9"],["/2021/07/05/【小知识】windows中java同时两个版本java8和java16混用/index.html","7ad689304935401cbd6a79922661a630"],["/2021/07/07/【HTML】Form表单中Input的使用/index.html","59190ea90216f3346d6da27b163cdd12"],["/2021/07/07/【HTML】a标签，src标签，table标签使用/index.html","8b9f666db6eac46d8f6030c9ac1da940"],["/2021/07/07/【HTML】列表list使用/index.html","13dab980b0900a9164c135137ee4a64d"],["/2021/07/07/【HTML】框架frame的使用/index.html","e03f8f1929c52c211ac877d7e2e74318"],["/2021/07/07/【HTML】选择框、复选框、单选框、文本域/index.html","922f838f8e1e1379e67750ea877b261b"],["/2021/07/08/【HTML】CSS基础学习之列表和超链接伪类/index.html","caa69cf75c9b7c0e9d0bf5d6f105fdf1"],["/2021/07/08/【HTML】CSS基础学习之引用样式和选择器的使用/index.html","28a0db37d8269b35546999917059be12"],["/2021/07/08/【HTML】CSS基础学习之背景边框文字文本的学习/index.html","2d89b535bd3f37ce9be8f1e19387fba8"],["/2021/07/09/【HTML】CSS基础学习之float浮动块级元素行内元素/index.html","14224bca31dfae6fb8551d191a80744d"],["/2021/07/09/【HTML】CSS基础学习之盒子模型margin和padding的使用/index.html","0be90194d09432615d11f5c9698172ca"],["/2021/07/13/【HTML】实战阿里云src页面css模仿基础学习/index.html","568db54e9c8a7bff0b0749f04b2ee0c9"],["/2021/07/13/【ctfshow】web篇wp记录（持续更新）/index.html","da3a74e58d3c4796c7d0130a5c984e31"],["/2021/07/18/【PHP】基础知识整理/index.html","59459f2a157bcf93afa6357f7b6c7ce3"],["/2021/07/19/【GITHUB】Github上传本地项目/index.html","a5db6831667a7ee1f8ccd3977f1ab9f7"],["/2021/07/19/【渗透测试】信息收集-备忘单/index.html","642f26541bae162b6db7eda9acb58d68"],["/2021/07/21/【封神台】upload-labs wp/index.html","edad4e8d195b4dd3d5fd8d9a197a0afb"],["/2021/07/25/【封神台】Sql-Labs wp/index.html","ae55ad31ab44febacc27a01ebde33be6"],["/2021/07/25/【封神台】数据库注入 wp/index.html","24a8a731a701773aef2fdd94372cca63"],["/about/index.html","053ad2144d6a13213caba075ba5b0fc6"],["/archives/2020/07/index.html","cf7a973f4abe9e6831ab9fa2f8b278d7"],["/archives/2020/08/index.html","5d4075f0b54099d8d717952dd5875d4e"],["/archives/2020/09/index.html","329626cb640580c70b16db65ab05b596"],["/archives/2020/10/index.html","f3fd2ab2f9bb92926b91388d9b253e20"],["/archives/2020/12/index.html","af8c1491b7cb6fde69fec9c3b51743e4"],["/archives/2020/index.html","c889a1aa54a6d2bd639c336921e5a2d1"],["/archives/2020/page/2/index.html","3487859a3ce95923ad4aaec58af6d286"],["/archives/2021/01/index.html","048a25c8380de54ebfa728dfef4632a3"],["/archives/2021/04/index.html","fd7d4744c02e24fca3196bb6d0b52f6b"],["/archives/2021/05/index.html","0922bcf10b86f942d9b6901732f3cee1"],["/archives/2021/05/page/2/index.html","647dc3a2cd48993c3fadf2b27e47443a"],["/archives/2021/06/index.html","50ddd974c912cd5b84c672e7bb38a941"],["/archives/2021/06/page/2/index.html","1a7b3dad67e5f6ac8b446af1882bbcc5"],["/archives/2021/06/page/3/index.html","c8358d0651075e01b03977c3fc7ec078"],["/archives/2021/06/page/4/index.html","820e8d19af2034d4ff292739033fe7e1"],["/archives/2021/07/index.html","ceaffa61ce3566ea7ea448965340d42e"],["/archives/2021/07/page/2/index.html","b302570e62d17098807d193b80c3b894"],["/archives/2021/index.html","4ef4f3724ed34d364b19e18d3711fd9c"],["/archives/2021/page/2/index.html","876c0a05aac0ba43924d74261ee84ae0"],["/archives/2021/page/3/index.html","cf3811257b1c7b74fa6ad55a1a381844"],["/archives/2021/page/4/index.html","2606db7b4fc6d1d8a8e5bcda0c3e5dde"],["/archives/2021/page/5/index.html","95d73541235118e1370a02846db84e72"],["/archives/2021/page/6/index.html","2b7cf166fae6a2f6db5d16a4a7cf9fd1"],["/archives/2021/page/7/index.html","efab88bda41b4a8ce84792e8cd942f6b"],["/archives/2021/page/8/index.html","a3c1f0aadf4ffb5bdc6a4c1ff5a9f6bb"],["/archives/index.html","275734c94168c67ff7eacdb3fe1cb687"],["/archives/page/10/index.html","06f856913d9865d26a138c54d842f66f"],["/archives/page/2/index.html","f01f6a177bbff90c23df19c23c494f67"],["/archives/page/3/index.html","d6c231484124439c57012f2747511528"],["/archives/page/4/index.html","f74d42f1511259f6266823121ff5cd15"],["/archives/page/5/index.html","b697361b5b87bc1f23d46bb2466b993e"],["/archives/page/6/index.html","0d2b04f05169adb2c2ac0f38b0431d0e"],["/archives/page/7/index.html","d86ace3984b766461cd480bcff0da62a"],["/archives/page/8/index.html","0d482e6661af3993bd0e9a59c80a88aa"],["/archives/page/9/index.html","930a4362d5b08780dd5b53c4d90b69a3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Buuctf/index.html","c8bd9c526b8879d5068a9aadc0c21078"],["/categories/CISCN/index.html","a3d383447203ad470c8000ec8fbc46c2"],["/categories/CTF/index.html","341d7dea473796f6f49b82041804facb"],["/categories/C语言/index.html","1cbdadc92e7e33ca07ba515d8e094ef8"],["/categories/English/index.html","46893777bd0c90db9e4e7a2220ae7ad2"],["/categories/Github/index.html","5f3d5863c0cc1fe695ed3b01e06eb52b"],["/categories/HTML/index.html","cb74a61876a5e942340590f908ed9ed2"],["/categories/HTML/page/2/index.html","f0ae91936bed72b78e6dc84481e3a022"],["/categories/Java/index.html","b211006df55d401c038d23f36e5ac5d8"],["/categories/MySQL/index.html","3520f94dfb6fc50c048eade5875df84a"],["/categories/hexo博客搭建/index.html","e980cd7188744eb112d64f60300660f6"],["/categories/index.html","eef045ba969c000fc0cdd635f80c805e"],["/categories/kali/index.html","854acc113c6d561eaf8ce990f64f10fe"],["/categories/php/index.html","e6bb2f7838d9ebf19102028bcb3aef70"],["/categories/工具/index.html","574a64e49bf8b1bbb227eeadc00d5bb3"],["/categories/摄影/index.html","92b5d507c99744866a0089fa33e85cb0"],["/categories/渗透测试/index.html","de15ab308c9557cce3dac6e958a4a4bc"],["/categories/漏洞挖掘/index.html","b710d8b684651e5d2bfde8468972db74"],["/categories/知识积累/index.html","8c3c70bef1466900980e37c0440c68e7"],["/categories/算法与数据结构/index.html","06fed570211397145dbcc8964a356461"],["/categories/算法与数据结构/page/2/index.html","ad32a5b27e7e4baf07cbc02e250e9da3"],["/categories/黑客工具/index.html","91b3616357dd97bf3ab422b5e6905bc5"],["/categories/黑客工具/page/2/index.html","22a07292d57d418d236493bebd58bd79"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","1396b8a107df64cc7a0b167fb776dae5"],["/dist/APlayer.min.css","31cd767f3938bcc69faf252ae100ced3"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","a87485aa75e5177ef2b06bf948e31075"],["/figlet/fetch.min.js","350d73710c8e7facd458e74b17b96c27"],["/figlet/figlet.js","0dcd07654130a5de80d46793553ba41b"],["/flash/flash/index.html","369e3a63130381b1d593cb33c08d7db4"],["/flash/index.html","a7eaac899bfcb06732c2c631bac23d17"],["/gylq-navigation/index.html","df9289ed60f88e57b6fa5ed2aa64bef5"],["/help/index.html","6edf4235160a666abd7ac5946a5605dd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d9452503de1e4195e67028f073c5addb"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","c6e949a6226bcf46b24676d7ff90de88"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/failure.png","38ff0bc871eae50300877ef019eac4b5"],["/images/favicon-16x16-next .png","cb9f23934fe03bc9d284da68e659d847"],["/images/favicon-32x32-next.png","896f4eb152b3798ed17bfc57d1d3e505"],["/images/head.jpg","c6e949a6226bcf46b24676d7ff90de88"],["/images/hot.png","a90be0de558143aabf0acc9cfa0a8688"],["/images/icon-slides.png","5efa36b1d0ef0b5fbb33813582d3b405"],["/images/linkcard.png","f5f5a1ff80b9f2403d76d0092128df19"],["/images/linkcard_bak.png","e1f9f6973a3d2c38b0b2b7317bd7b317"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/qq.png","5c481dffe0f706b9666f6ca18bd4d2c6"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/read.png","4462c81055423c8d2db56a77b51c5cb8"],["/images/rocket.png","bccdd1a3718ff55c4bac6c7c11e436ee"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/subscribe.png","641c2d396a563ddafa6fed34a9984a03"],["/images/subscribe1.png","d4accaba47d6e791ce0cd6365735992f"],["/images/subscribe~1.png","e147141e7f29ff2bb46356cc8ca7c831"],["/images/time.png","7412c44c18963032d2d121ce0cb8809f"],["/images/wechat.svg","2ef3f3696267249c4372a5e3f9db36f2"],["/images/wechatpay.jpg","d9dbc02b5f7c379adac84eeb7f6f51b6"],["/images/xiaohutong.png","14589dbb580ac44e4c04e4e94f22ab0f"],["/index.html","08468714ed5ce2e9ffe210ccbe46d5c4"],["/js/cursor/explosion.min.js","f8599b24e09ee8be2d30560755e38236"],["/js/cursor/fireworks.js","2c8509065e42a7bafeb4c599a6a6eaa9"],["/js/cursor/love.min.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/cursor/text.js","fbe111a3ab258f224f8c4b41c9b3e886"],["/js/src/Valine.min.js","1479b73139a463e6147164e7dc880d9c"],["/js/src/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","8fdcf8ca4941000b226b2e7535bf1af8"],["/js/src/clipboard-use.js","6245c44a33b72d0b5d04562b6808a309"],["/js/src/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["/js/src/crash_cheat.js","a9f0920c901ee43e163479111c874163"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","da6cb85a2c1d36027ca414459c8dd58f"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ee7e149030931501fa19b0ab74b46b34"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/life/index.html","d59d3a9045a8625acea7a78bc583b459"],["/live2d-widget/README.html","db79a3bbfd794941c59b40a2f16ec8b1"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d-widget/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d-widget/autoload.js","fdff49a1ea5efd0d3bbd7ac8748b51f2"],["/live2d-widget/demo/demo1.html","a6cda8b39bd7f7afe7ba4b27f5d07dfb"],["/live2d-widget/demo/demo2.html","0575a50b61776525f57f71742be28c28"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5d4707e2962f19113405c1f4d577bb58"],["/live2d-widget/waifu.css","c4dae5924f2fb0b5ea6ef26aaab80db9"],["/page/10/index.html","e9e00963a08ae3d3437f1ee704f6e3e2"],["/page/2/index.html","ed87c45ab1f359311aa81ab42332bc87"],["/page/3/index.html","5eb2956e1481e4439793d91f025d79cf"],["/page/4/index.html","173e32cb02459edd648750c736736c5d"],["/page/5/index.html","9c149c9202f65ba983e376a299352195"],["/page/6/index.html","77b8a422f67f44751aede0f5610d5c1f"],["/page/7/index.html","c8384466b76dc33971e9fbd6492debf7"],["/page/8/index.html","792eeab22b25004f5d22b4b03b744584"],["/page/9/index.html","8b56dc2a1694bd4788742c5e01277382"],["/sharejs/css/share.min.css","5302d280328f45bd351132938cfeb4c3"],["/sharejs/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/sharejs/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/sharejs/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/sharejs/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/sharejs/js/jquery.share.min.js","1c3bf7d587a82e2611c01a5b284aa756"],["/sharejs/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/sw-register.js","3dd9a412d7b848cda538ddb86b5f5a65"],["/tags/AWVS/index.html","7617a6dc6779782e66ec4c3d39548898"],["/tags/CMS/index.html","09f4290d8f84c4434d3cd9df7a272beb"],["/tags/C语言/index.html","99bb9734572c2a6023e8734ffe4a69eb"],["/tags/Dns劫持/index.html","9edad0aaabc01c41bfbf9c4ea686790c"],["/tags/Ettercap/index.html","c50ccf47c1f34eb08d9b8f813ddc0054"],["/tags/Form/index.html","2b12d561432ea1ea8cfb3658f17f7b6f"],["/tags/Git/index.html","977216b6c32db038d2380a9dbf7da9f1"],["/tags/Gitee自动部署/index.html","66a28cb5384fee9805c238e77a00c592"],["/tags/Google-hack语法/index.html","5803e5d225648e84fd0c6d305c4de70c"],["/tags/Hashcat/index.html","06a34c2ac22575b9218a21b9113afec2"],["/tags/JAVA/index.html","eee59f460374b39d75f5aba190ae5de8"],["/tags/JAVA/page/2/index.html","6f5a0d01851642fd5973eb34d3f812f7"],["/tags/LeetCode/index.html","279f4784a5ac3aa7d173834664b234c8"],["/tags/Nmap/index.html","9ff84691c1b3212194684c7165bbbe6d"],["/tags/SQL注入/index.html","fd74feefc1df13b0c723a5a581f6f63a"],["/tags/aircrack/index.html","bf83ab693ed32250cd86ebbc27504dea"],["/tags/css/index.html","872af446f09705f3fc32138f311b5032"],["/tags/ctf/index.html","5e24e3120497d640b14ec36f85d64987"],["/tags/html/index.html","cb78d5c000c6e0bd4585928a13c695d3"],["/tags/html/page/2/index.html","9e0fc08b896b935665d2be7b28d4d15b"],["/tags/index.html","bcf0f3db9f43de1cb4ee0d425c82cff9"],["/tags/input/index.html","7d0aa7ce7bb5f1f568225fa3cf743e61"],["/tags/kali基础/index.html","f6bbcb254d69f26875d751eb9aa12666"],["/tags/list的使用/index.html","50e585de099b5be8a9c66e0a96f5bbb2"],["/tags/msf/index.html","6f053065d8e0060d2ce85346ff6fba4c"],["/tags/php/index.html","de54f4aa19ca0a68c1d7f0beefbfd58a"],["/tags/python脚本/index.html","487363b4fbfdd68c17c91c49418d5166"],["/tags/sqlmap/index.html","35c64eebdeb39a2f9f0b2986c2bec3f9"],["/tags/web/index.html","5b0c786211e427768fd7ebde8a609e1b"],["/tags/web安全/index.html","e0c8eeb35f034484cde6ca0ee360faf4"],["/tags/wireshark/index.html","ea91278cf13b880cb805706afb19f948"],["/tags/wp/index.html","d6fec84060497be7a23e58777646f4a3"],["/tags/二分搜索树/index.html","0cdaf31c77f65428f6053cde8d05d753"],["/tags/信息收集/index.html","69ba137ff5b08a6127670536074aafb0"],["/tags/免杀/index.html","de711fc477405b4ee8030bbdc60e8e40"],["/tags/博客搭建/index.html","cbb870beb46c8e933285d9dd6891d13e"],["/tags/嗅探工具/index.html","6abb1651f58ba50edca899d8d091ea40"],["/tags/堆排序/index.html","7e79ea2f132bef235c4a820ff956bd90"],["/tags/备忘录/index.html","975d8b9a242f1f9cc2a60d84820d248f"],["/tags/子域名/index.html","456bd5412a62e1a42320b72ced407786"],["/tags/学习记录/index.html","e378969ffafd1e741e283f435cf1adf6"],["/tags/工具/index.html","367e4435c0fa17a943e8283499bfa257"],["/tags/归并排序/index.html","e946c46ccc7b1b3e792be9fc92ee2bec"],["/tags/录屏/index.html","cc8b697a3e2dee1cce1bbd4c899252e9"],["/tags/快速排序/index.html","d743923ac56e30464095bda81b7cec3c"],["/tags/成长之路/index.html","d6fc9bf702643529339537972874b5f8"],["/tags/成长之路/page/2/index.html","a68a4d44a7a9b78572285297c221a3c7"],["/tags/成长之路/page/3/index.html","7c798a5d23e4f56dfb54cf153b9a1948"],["/tags/成长之路/page/4/index.html","d4669e40902bb399e66eee9fcd343a4e"],["/tags/指纹识别/index.html","bed0c5c81029cc7f3057554a269a1855"],["/tags/插入排序/index.html","16cec92fcd59d1dd3e7e2730a5a9fbb0"],["/tags/数据结构/index.html","86d25a2be0137e0b0dc42916dbaa9852"],["/tags/数据结构/page/2/index.html","366ad622459f4184bbd39230f61fa682"],["/tags/文件上传/index.html","52054ba056ff337930cb4250145bf8a8"],["/tags/无线wifi密码破解/index.html","be07b373aabbd7da86e2980bbbf20d0d"],["/tags/标签的使用/index.html","15795010d89eee110b38ff5432be0706"],["/tags/渗透测试/index.html","87b8e6444a4c27684578ebe373b537fd"],["/tags/渗透测试基础/index.html","090ae1d07dbc330e13ade452313bb742"],["/tags/渗透测试工具/index.html","dafb89e3cf4db0d1df2f20e1eda10bf5"],["/tags/漏洞工具/index.html","1a7cce93f20752252882088521ab9c27"],["/tags/爆破工具/index.html","fb8ab1e8bea65fdc5b143fa884bab54d"],["/tags/版本共存/index.html","e9ecb6b1616ad3ae472b5ca8348f7296"],["/tags/知识拓展/index.html","9ffed749336c590e0c295032a8b8187d"],["/tags/知识拓展/page/2/index.html","810cc2e235bbdb28fe4ae4f63263e2ef"],["/tags/网络攻防工具/index.html","d4ccc94f4cce664a3ff6c8ed179c5850"],["/tags/英语四级/index.html","b72ca94f0deb5f384d825dde58e24cfb"],["/tags/议论文万能模板/index.html","637d679ec38cd30b097a2296d97ae4c8"],["/tags/谷歌语法/index.html","30c1b8e344b0a53da7a589e18fd13580"],["/tags/选择排序/index.html","9d4e29562e1ed3186831c1d8e09b75cd"],["/tags/链表实现队列/index.html","963478f9f41e008df309230232180f10"],["/tags/链表的增删改查/index.html","f928196cc40d3311091d456844235251"],["/tags/镜头/index.html","bd2bfbeb0fcb233672416386943dece1"],["/tags/黑客工具/index.html","6fd88888705a3c4bc52c2ac621bd2596"],["/top/index.html","db724c2de3c78d58411328760ded65dc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
