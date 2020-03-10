// pages/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[],
    filter:[],
    imgUrls: [
      'https://p0.meituan.net/210.0/xianfudwm/8984dacece81c7ac5deabbbd25a00df5166846.jpg',
      'https://p1.meituan.net/210.0/xianfudwm/4dd9e440d3ffd7ca4a71627c75314ad3142313.jpg',
      'https://p1.meituan.net/210.0/xianfudwm/4dd9e440d3ffd7ca4a71627c75314ad3142313.jpg'
    ],

    // picker
    foodTypes: ['全部商品', '西瓜','水果', '寿司', '面条'],
    foodTypesIndex: 0,
    rankTypes: ["综合排序", '热度', '价格', '好评', '时间'],
  rankTypesIndex: 0,
  foodList:[],
  orderNum:0,
  orderCost:0,
  orderList: {},
  
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   let originData = app.globalData.foodList;
   this.setData({ foodList: originData});

  },
  // 增加数量
  addToCart: function (e) {
    var dataset = e.currentTarget.dataset;
    this.changeNum(dataset.index, true);
    wx.showToast({
      title: '已添加',
      icon: "success",
      duration: 1000
    })
  },
  // 减少数量
  reduceFromCart: function (e) {
    var dataset = e.currentTarget.dataset;
    wx.showToast({
      title: '已删除',
      icon: 'success',
      duration: 1000
    })
    this.changeNum(dataset.index, false);
  },

  // 判断减少增加
  changeNum: function (index, bool) {
    let t_food = this.data.foodList[index];
    let orderList = this.data.orderList;
    let obj = orderList[t_food.id];
    // 如果存在 数量变化
    if (obj) {
      if (bool) {
        obj.num = obj.num + 1;

      } else {
        if (obj.num > 0) {
          obj.num = obj.num - 1;

        } else {
          return;//减少为0
        }
      }

    }
    else {
      if (bool) {
        // 不存在时点击增加 写入一条订单信息 数量加1
        obj = {
          id: t_food.id,
          num: 1,
          cost: t_food.cost,
          title:t_food.title
        };
        orderList[t_food.id] = obj;
      } else {
        return;//不存在减一

      }
    }
    var order_num = 0;
    var order_cost = 0;
    for (let k in orderList) {
      order_num = orderList[k].num + order_num;//计算总数量
    order_cost = order_cost + orderList[k].cost * orderList[k].num;//计算总价格


    }
    t_food.num = obj.num;
    let foodList = this.data.foodList;
    foodList[index] = t_food
    this.setData({
      orderList: orderList,
      orderNum: order_num,
      orderCost: order_cost,
      foodList: foodList,
    });
  },
  // 食品类型
  foodTypeChange(e) {
    this.setData({
      foodTypesIndex: e.detail.value
    })

  },
  rankTypeChange(e) {
    this.setData({
      rankTypesIndex: e.detail.value
    })
  

  },
  ok: function () {
    // 当用户点击当前按钮时 用户已经选择完毕
    if (this.data.amount === 0) {
      return;
    }
    // 将数据存储到本地对象
    wx.setStorage({
      key: 'orderList',
      data: this.data.orderListArr.filter(function (value) {
        return value.num != 0
      }),
      success: function () {
        // 跳转配送页面
        wx.navigateTo({
          url: "/pages/dingdan/dingdan"
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 页面初始化 options为页面带来参数
    let originData = app.globalData.foodList;
    let foodList = [];
    for (
      let i = 0; i < originData.length;i++) {
        foodList.push(originData[i]);
      }
      this.setData({foodList:foodList});
      },
     

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})