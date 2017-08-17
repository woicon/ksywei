App({
    onLaunch: function (options) {
        //调用API从本地缓存中获取数据
        // var logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now());
        // wx.setStorageSync('logs', logs);
        let that = this;
        let api = that.apiServer.host;
        that.apiServer.parmas.superMerchantId = options.query.superMerchantId;
        var initialize = new Promise(function (res, rej) {
            wx.login({
                success: function (data) {
                    res(data);
                },
            });
        })
        .then((res) => {
            //wx719f7f7aad2c0ccc  wx11c5c3d22d5fedf3
            let parmas = {
                appid: 'wx719f7f7aad2c0ccc',
                secret: '4a757085e73833537e9d91b44e1c33ef',
                code: res.code
            }
            return that.request(api + 'microappToOpenid.htm', parmas);
        })
        .then((res) => {
            console.log(res);
            //console.log("登录成功返回的openId：" + res.data.wechatVo.openId);
            that.weChatUserInfo.openId = res.data.wechatVo.openId;
            that.apiServer.parmas.openId = res.data.wechatVo.openId;
            if (res.data.wechatVo.openId != null & res.data.wechatVo.openId != undefined) {
                if (that.weChatUserInfo.userInfo) {
                    typeof cb == "function" && cb(that.weChatUserInfo.userInfo)
                } else {
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
            return res.data.wechatVo.openId;
        })
        .then((res)=>{
            console.log(res);
            let parmas = {
                openId:res,
                superMerchantId:that.apiServer.parmas.superMerchantId
            }
            return that.request('http://shopcashiertest.liantuobank.com/ShopCashier/microapp/memberInfo.in', parmas)
        })
        .then((res)=>{
            console.log(res);
        })

        return initialize;

        wx.getLocation({
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
            }
        });
    },
    
    strDate: function (fmt){
        Date.prototype.Format = function (fmt) { //author: meizz   
            var o = {
                "Y+": this.getFullYear(),                //年
                "M+": this.getMonth() + 1,               //月份   
                "d+": this.getDate(),                    //日   
                "h+": this.getHours(),                   //小时   
                "m+": this.getMinutes(),                 //分   
                "s+": this.getSeconds(),                 //秒  
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
                "S": this.getMilliseconds()             //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    },
    weChatUserInfo: {
        userInfo: null,
    },
    apiServer: {
        //   host:'https://club.liantuobank.com/api/',
        host: 'http://open.liantuobank.cn/api/',
        parmas: {
            //openId: 'od-est9be0uFiLjDKyfPKwY9eFkA',
            memberId: '61852',
            merchantId: '10104677',
            coreMerchantId:'10104677',
            merchantNo:'SC_I5640724439',
            memberCode: 'od-est14Vpd4tUnOuy6HarvoubGw',
            superMerchantId:'10104677',
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
              }
            });
          }
        });
      });
      return promise;
    },

    request:function(url,parmas,rtype){
        var promise = new Promise(function (resolve, reject) {
            wx.request({
                url:url,
                data: parmas,
                method:rtype||'GET',
                success: function (res) {
                    resolve(res);
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