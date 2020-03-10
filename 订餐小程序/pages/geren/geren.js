// pages/geren/geren.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 116.386789087,
    latitude: 40.102345654,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  signin: function(){
    // 获取公司经纬度
    var bus_long = this.data.longitude;
    var bus_lait = this.data.latitude;
    // 获取手机位置
    wx.getLocation({
      success: function(res) {
        console.log(res);
        var self_long = res.longitude;
        var self_lati = res.latitude;
        // 转换两者经纬度成千米数
        var result = change(self_lati, self_long, bus_lait, bus_long);
        console.log(result);
        if (result <= 1000) {
          alert("打卡成功");
        }
        else {
          alert("打卡失败");
        }
      },
    })

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