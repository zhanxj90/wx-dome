// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    freeMovie: [],
    n:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    this.getFreeMovie()
  },

  getData() {
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0',
      success: this.getMovie.bind(this)
    })
  },
  getFreeMovie() {
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&start=0&count=8&loc_id=108288&_=0',
      success: this.freeMovie.bind(this)
    })
  },
  getMovie(res){
    this.setData({
      movies: res.data.subject_collection_items
    })
  },
  freeMovie(res) {
    console.log(res)
    this.setData({
      freeMovie: res.data.subject_collection_items
    })
  },
  handleClick(e){
    let {id, name} = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id + "&name=" + name,
    })
  }
})