// pages/bink/bink.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "https://m.zhe800.com.cn/uploads/Advert/3/20170809134845986.jpg",
      "https://m.zhe800.com.cn/uploads/Advert/3/20170809134951969.jpg",
      "https://m.zhe800.com.cn/uploads/Advert/3/20170809134902636.jpg"
    ],
    goods: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let page = app.globalData.page;
    this.getGoods(page);
  },
  getGoods(page) {
    wx.request({
      url: 'https://m.zhe800.com.cn/getlist?page=' + page,
      success: this.handleGetGoodsSucc
    })
  },
  handleGetGoodsSucc(data) {
    console.log(data.data.data);
    this.setData({
      goods: [...this.data.goods, ...data.data.data]
    })
    app.globalData.page++;
  },
  onReachBottom() {
    let page = app.globalData.page;
    this.getGoods(page);
  }
})