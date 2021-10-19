import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
  code: 0,
  msg: "",
  data: [
    {
      id: "2",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F15%2F19%2F2359aaca06cb17d.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f80,100&q=a80&n=0&g=0n&fmt=jpeg?sec=1637220574&t=dfd9405f8e1ccbbde567d2999e4fa0eb",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Fback_pic%2F05%2F15%2F19%2F2359aaca06cb17d.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637220574&t=dfd9405f8e1ccbbde567d2999e4fa0eb",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "1",
      midImg:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
      bigImg:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=1920&h=1080",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "3",
      midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01558659a12215a801211d25ab87d2.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f99,100&q=a80&n=0&g=0n&fmt=jpeg?sec=1637220575&t=2b9b951755f40d389c5ca90a43c6cb88",
      bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01558659a12215a801211d25ab87d2.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637220575&t=2b9b951755f40d389c5ca90a43c6cb88",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ],
});
