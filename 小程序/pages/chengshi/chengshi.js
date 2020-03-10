// pages/city/city.js
var city = require("../../modules/city.js");
console.log(city);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseCity: "--",
    hotCity: city.hotCity,
    history: [],
    cityList: city.cityList,
    searchLetter: city.searchLetter,
    type: ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 高度自适应
    var systemInfo = wx.getSystemInfoSync();
    console.log(systemInfo);
    // 获取视口高度 减去固定的50;
    var windowHeight = systemInfo.windowHeight;
    var height = windowHeight - 50;
    // 是知道data中
    this.setData({
      height: height

    })

  },

  chooseLetter: function (e) {
    // 获取当前点击字母
    var letter = e.target.dataset.letter;
    this.setData({
      type: letter
    })
  },
  choose: function (e) {
    // 获取用户所选择的城市
    var city = e.currentTarget.dataset.city;
    // 将当前城市放入历史记录
    var history = this.data.history;
    // 先检测city是否已经存在于history中

    if (history.indexOf(city) != -1) {
      // 如果已经存在就删除
      history.splice(history.indexOf(city), 1);

    }
    // 之前是否存在，代码执行到这里消失
    history.unshift(city);
    // 保证城市名显示在12个
    history.length = history.length > 12 ? 12 : history.length;
    // 设置到数据源中
    this.setData({

      chooseCity: city,
      history: history
    })
  },
  scroll: function (e) {
    // 获取当前手指位置 并计算对应的字母
    var pageY = e.touches[0].pageY - 50;
    // 计算索引值
    var index = parseInt(pageY / (this.data.height / this.data.searchLetter.length));
    // 当前的字母
    var letter = this.data.searchLetter[index];
    // 当前的字母与计算得到的字母相同， 也就是同一个字母上滑动触发多次时，只执行第一次
    // 判断当前的字母与data中字母是否是同一个
    if (letter === this.data.type) {
      console.log("拦截", letter);
      return;
    }
    // 设置给type
    this.setData({
      type: letter
    }),
    wx.navigateTo ({
      url:"/pages/index/index"
    })

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