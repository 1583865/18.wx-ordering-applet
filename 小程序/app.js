App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 调用api从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    
  },
getUserInfo:function(cb){
  var that = this
  if(this.globalData.userInfo) {
    typeof cb == "function" && cb(this.globalData.userInfo)} else {
      // 调用登录接口
      wx.login({
        success: function() {
          wx.getUserInfo({
            success: function(res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
        
      })
    }
 
},
globalData: {
  userInfo:null,
  foodList:[
    {
      id: 1,
      title: "重庆小面",
      cost: 45,
      desc:"精心面粉制作，搭配秘制酱料",
      icon:"https://p0.meituan.net/210.0/wmproductdwm/3fcb93496cfefdf8ce7d185eea3763ba193644.jpg",
      num: 0

    },
    {
      id: 1,
      title: "重庆小面",
      cost: 45,
      desc: "精心面粉制作，搭配秘制酱料",
      icon: 'https://p0.meituan.net/210.0/wmproductdwm/3fcb93496cfefdf8ce7d185eea3763ba193644.jpg',
      num: 0

    },
    {
      id: 1,
      title: "麻汁凉面",
      cost: 45,
      desc: "精心面粉制作，搭配秘制酱料",
      icon: 'https://p1.meituan.net/210.0/xianfudwm/4dd9e440d3ffd7ca4a71627c75314ad3142313.jpg',
      num: 0

    },
    {
      id: 1,
      title: "牛肉干拌面",
      cost: 45,
      desc: "精心面粉制作，搭配秘制酱料",
      icon: 'https://p0.meituan.net/210.0/xianfudwm/8984dacece81c7ac5deabbbd25a00df5166846.jpg',
      num: 0

    },
    {
      id: 1,
      title: "麻汁凉面",
      cost: 45,
      desc: "精心面粉制作，搭配秘制酱料",
      icon: 'https://p1.meituan.net/210.0/xianfudwm/4dd9e440d3ffd7ca4a71627c75314ad3142313.jpg',
      num: 0

    },
    {
      id: 1,
      title: "麻汁凉面",
      cost: 45,
      desc: "精心面粉制作，搭配秘制酱料",
      icon: 'https://p1.meituan.net/210.0/xianfudwm/4dd9e440d3ffd7ca4a71627c75314ad3142313.jpg',
      num: 0

    },
    {
      id: 1,
      title: "麻汁凉面",
      cost: 45,
      desc: "精心面粉制作，搭配秘制酱料",
      icon: 'https://p1.meituan.net/210.0/xianfudwm/4dd9e440d3ffd7ca4a71627c75314ad3142313.jpg',
      num: 0

    },
    {
      id: 1,
      title: "麻汁凉面",
      cost: 45,
      desc: "精心面粉制作，搭配秘制酱料",
      icon: 'https://p1.meituan.net/210.0/xianfudwm/4dd9e440d3ffd7ca4a71627c75314ad3142313.jpg',
      num: 0

    },
    {
      id: 1,
      title: "无籽西瓜",
      cost: 45,
      desc: "7.5一斤",
      icon: 'https://p0.meituan.net/210.0/wmproductdwm/8501b54d018aa6c3abb6147395f7c216136146.jpg',
      num: 0

    },
    {
      id: 1,
      title: "白釉",
      cost: 45,
      desc: "白釉",
      icon: 'https://p1.meituan.net/210.0/wmproduct/91000782b09071efaab15230c3bbee5d89023.jpg',
      num: 0

    }

  ]



},


  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
