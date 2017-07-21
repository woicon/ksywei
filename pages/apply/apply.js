// pages/apply/apply.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      stepBar: ['商户信息', '结算信息','进件信息'],
      formType: ['input', 'picker', 'upfile', 'textarea','time', 'area'],
      currentStep:0,
      formData:[
          [
              {
                  "label": "商户名称",
                  "placeholder": "请输入门店全称",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "商户简称",
                  "placeholder": "如肯德基",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "行业类别",
                  "placeholder": "请选择",
                  "type": "1",
                  "data":{
                      mode:'multiSelector',
                      rang:[],
                      selected:'请选择'
                  },
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "商户所在地",
                  "placeholder": "请选择",
                  "type": "1",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "data": {
                      mode: 'region',
                      rang: [],
                      selected: '请选择'
                  },
                  "value": ""
              },
              {
                  "label": "营业执照号",
                  "placeholder": "32字以内",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "负责人",
                  "placeholder": "10字以内",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "负责人手机号",
                  "placeholder": "11位手机号",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              }
          ],
          [
              {
                  "label": "账户类型",
                  "placeholder": "请选择",
                  "type": "1",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "开户银行",
                  "placeholder": "请选择",
                  "type": "1",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "开户支行",
                  "placeholder": "请输入开户支行",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "证件类型",
                  "placeholder": "请选择",
                  "type": "1",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "证件号码",
                  "placeholder": "请输入证件号",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "持卡人地址",
                  "placeholder": "请输入持卡人地址",
                  "type": "1",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "持卡人手机号",
                  "placeholder": "11位手机号",
                  "type": "0",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "证件有效期",
                  "placeholder": "选择有效期",
                  "type": "1",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              }
      ],
        [
              {
                  "label": "身份证正面",
                  "placeholder": "请选择",
                  "type": "2",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "身份证背面",
                  "placeholder": "请选择",
                  "type": "2",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "营业执照",
                  "placeholder": "请选择",
                  "type": "2",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              },
              {
                  "label": "开户许可证",
                  "placeholder": "请选择",
                  "type": "2",
                  "data": "",
                  "stat": "false",
                  "bindtap": "",
                  "value": ""
              }
        ]
      ],
},
    nextStep:function(){
        this.stepJump(+1);
    },
    backStep: function () {
        this.stepJump(-1);
    },
    stepJump:function(jump){
        var that = this;
        var steped = that.data.currentStep;
        that.setData({
            currentStep: steped + jump,
        });   
    },
  /**
   * 生命周期函数--监听页面加载
   */
    onLoad: function (options) {
        var that = this;
        console.log(this.data.formData['step1']);
        wx.setNavigationBarTitle({
            title: '注册快收银',
        });
        wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#27CFB1',
        });
        var _setpStat = [];
        for (var i = 0; i < that.data.stepBar.length;i++){
            var stat = false;
            _setpStats.push(stat);
        }
        that.setData({
            setpStat: _setpStat
        });
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