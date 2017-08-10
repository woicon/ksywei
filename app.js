App({
    onLaunch: function () {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        var that = this;
        wx.login({
            success: function (res) {
                if (res.code) {
                    //获取openId
                    wx.request({
                        url: 'https://api.weixin.qq.com/sns/jscode2session',
                        data: {
                            appid: 'wx11c5c3d22d5fedf3', //小程序唯一标识
                            secret: '4a757085e73833537e9d91b44e1c33ef', //小程序的 app secret
                            grant_type: 'authorization_code',
                            js_code: res.code
                        },
                        method: 'GET',
                        header: {
                            'content-type': 'application/json'
                        },
                        success: function (openIdRes) {
                            console.log("登录成功返回的openId：" + openIdRes.data.openid);
                            console.log(that.weChatUserInfo);
                            that.weChatUserInfo.openId = openIdRes.data.openid;
                            // 判断openId是否获取成功
                            if (openIdRes.data.openid != null & openIdRes.data.openid != undefined) {
                                // 有一点需要注意 询问用户 是否授权 那提示 是这API发出的
                                if (that.weChatUserInfo.userInfo) {
                                    typeof cb == "function" && cb(that.weChatUserInfo.userInfo)
                                } else {
                                    //调用登录接口
                                    wx.getUserInfo({
                                        withCredentials: false,
                                        success: function (res) {
                                            that.weChatUserInfo.userInfo = res.userInfo
                                            typeof cb == "function" && cb(that.weChatUserInfo.userInfo)
                                        },
                                        fail: function (failData) {
                                            console.info("用户拒绝授权");
                                        }
                                    })
                                }
                            } else {
                                console.info("获取用户openId失败");
                            }
                        },
                        fail: function (error) {
                            console.info("获取用户openId失败");
                            console.info(error);
                        }
                    })
                }
            }
        });
    },
    weChatUserInfo: {
        openId: null,
        userInfo: null,
    },
    apiServer: {
        //   host:'https://club.liantuobank.com/api/',
        host: 'http://open.liantuobank.cn/api/',
        //   parmas:{
        //     merchantId: '10265244',
        //     superMerchantId: '10265239',
        //     openId: 'od-est3bYmVySSuaJPitZrL3pr6g',
        //     memberId: '266171'
        //   },
        parmas: {
            // openId: this.weChatUserInfo.openId,
            openId: 'od-est14Vpd4tUnOuy6HarvoubGw',
            memberId: '61852',
            //superMerchantId: '10104677',
            merchantId: '10104677',
        }
    },
    setTab: function () {
        var _curPageArr = getCurrentPages();
        var _curPage = _curPageArr[_curPageArr.length - 1];
        var _pagePath = _curPage.__route__;
        if (_pagePath.indexOf('/') != 0) {
            _pagePath = '/' + _pagePath;
        }
        var tabBar = this.tabBar;
        for (var i = 0; i < tabBar.list.length; i++) {
            tabBar.list[i].active = false;
            if (tabBar.list[i].pagePath == _pagePath) {
                tabBar.list[i].active = true;
            }
        }
        _curPage.setData({
            tabBar: tabBar
        });
    },
    getData: function (url,key,parmas) {
      var that = this;
      var promise = new Promise(function (resolve, reject) {
        wx.getStorage({
          key:key,
          success: function (res) {
            resolve(res.data);
            console.log(res);
          },
          fail: function () {
            wx.request({
              url: that.apiServer.host + url+'.htm',
              data: {
                json: parmas,
              },
              success: function (res) {
                wx.setStorage({
                  key:key,
                  data: res.data
                });
                resolve(res.data);
                console.log(res);
              }
            });
          }
        });
      });
      return promise;
    },
    tabBar: {
        list: [
            {
                pagePath: "/pages/index/index",
                text: "主页",
                iconPath: "home",
                selectedIconPath: "home-s",
                active: true
            },
            {
                pagePath: "/pages/order/order",
                text: "订单",
                iconPath: "order",
                selectedIconPath: "order-s",
                active: false
            },
            {
                pagePath: "/pages/coupons/coupons",
                text: "优惠券",
                iconPath: "coup",
                selectedIconPath: "coup-s",
                active: false
            },
            {
                pagePath: "/pages/member/member",
                text: "我的",
                iconPath: "user",
                selectedIconPath: "user-s",
                active: false
            }
        ]
    },
    globalData: {
        userInfo: null,
        color: '#1CC16F',
    }
});