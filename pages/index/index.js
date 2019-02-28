Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[],
    curIndex:0,
    swiperList:[],
    videosList:[]
  },
  switchBar(e){
    this.setData({
      curIndex:e.target.dataset.index
    })
  },
  getNavList() {
    const that=this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success: function(res) {
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        
        }
      }
    })
  },
  getSwiperList(){
    const _self=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success:function(res){
        if(res.data.code===0){
          _self.setData({swiperList:res.data.data.swiperList})
        }
      }
    })
  },
  getVideoList(){
    const _self=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success:function(res){
        if(res.data.code===0){
          _self.setData({videosList:res.data.data.videosList})
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getNavList()
      this.getSwiperList()
      this.getVideoList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})