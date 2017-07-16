// pages/order/order.js

Page({
  data: {
    cardid:'1923123213',
    codestat:true, //获取验证码状态
    endtime:30,    //获取验证码倒计时
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
    objectMultiArray: [
        [
            {
                id: 0,
                name: '无脊柱动物'
            },
            {
                id: 1,
                name: '脊柱动物'
            }
        ], [
            {
                id: 0,
                name: '扁性动物'
            },
            {
                id: 1,
                name: '线形动物'
            },
            {
                id: 2,
                name: '环节动物'
            },
            {
                id: 3,
                name: '软体动物'
            },
            {
                id: 3,
                name: '节肢动物'
            }
        ], [
            {
                id: 0,
                name: '猪肉绦虫'
            },
            {
                id: 1,
                name: '吸血虫'
            }
        ]
    ],
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区']
  },

  bindChange: function (e) {
      const val = e.detail.value
      this.setData({
          year: this.data.years[val[0]],
          month: this.data.months[val[1]],
          day: this.data.days[val[2]]
      })
  },


  //倒计时
  getverification:function(){
      if(this.data.codestat){
        var time = this.data.endtime;
        this.setData({
          codestat:false
        });
        for(let i=0;i<=time;i++){
          setTimeout((function callback(){
            this.setData({
              endtime: time - i
            });
            if (this.data.endtime==0){
              this.setData({
                codestat:true,
                endtime:30
              });
            }
          }).bind(this), i*1000);
        }
      }
  },

  onLoad: function (options) {
    console.log(options);
    var that = this;
    wx.setNavigationBarTitle({
      title: '免费领取会员卡'
    });
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  }
})