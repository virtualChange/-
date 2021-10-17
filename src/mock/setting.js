import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://img0.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto",
    siteTitle: "我的个人空间",
    github: "https://github.com/virtualChange",
    qq: "1151630419",
    qqQrCode:
      "https://img1.baidu.com/it/u=2410539360,112339169&fm=253&fmt=auto&app=120&f=PNG?w=300&h=300",
    weixin: "virtual",
    weixinQrCode:
      "https://img1.baidu.com/it/u=2410539360,112339169&fm=253&fmt=auto&app=120&f=PNG?w=300&h=300",
    mail: "duyi@gmail.com",
    // icp: "黑ICP备17001719号",
    githubName: "virtualChange",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
