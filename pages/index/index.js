// pages/index/index.js
var app = getApp();
Page({
    data: {
        shopinfo: {
            shopname: '哲哥小面',
            shopimg: '../../pages/images/zg.jpg',
            shoplocation: '北京市大兴区绿地缤纷城地下一层，味多美斜对面',
            shoptel: "13699286528",
            businessHours:'09:00-22:00',
            shopType:'特色小吃'
        },
        receiveStatus: ['卡券失效','超过总领取限制','已领取','已领完','超过单日领取限制'],
        recommend: [
            {
                skuImg: '../../pages/images/sku.jpg',
                saleNum: '3',
                skuName: '精品肉夹馍'
            },
            {
                skuImg: '../../pages/images/sku.jpg',
                saleNum: '3',
                skuName: '精品肉夹馍'
            },
            {
                skuImg: '../../pages/images/sku.jpg',
                saleNum: '3',
                skuName: '精品肉夹馍'
            },
            {
                skuImg: '../../pages/images/sku.jpg',
                saleNum: '3',
                skuName: '精品肉夹馍'
            }
        ],
        coupons: [{
            type: 1,
            value: 20,
            stat: false,
            range: "2017-07-12至2017-12-22",
            time: '2017-12-12',
            color: 'cards3'
        }, {
            type: 2,
            value: 20,
            stat: true,
            range: "2017-07-12至2017-12-22",
            time: '2017-12-12',
            color: 'cards1'
        }, {
            type: 1,
            value: 20,
            stat: true,
            range: "2017-07-12至2017-12-22",
            time: '2017-12-12',
            color: 'cards2'
        }],
        comment: [{
            userName: "JSON Broke",
            stars: 4,
            userImage: '../../pages/images/gifimg.jpg',
            time: '2017-12-12 9:00',
            content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }, {
            userName: "JSON Broke",
            stars: 4,
            time: '2017-12-12 9:00',
            userImage: '../../pages/images/gifimg.jpg',
            content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }, {
            userName: "JSON Broke",
            stars: 4,
            time: '2017-12-12 9:00',
            userImage: '../../pages/images/gifimg.jpg',
            content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }],
        
    },
    callShop: function () {
        wx.makePhoneCall({
            phoneNumber: this.data.shopinfo.shoptel
        })
    },
    //领取优惠券
    getCoupon:function(e){
        var parmas ={};
        parmas.cardIds = e.currentTarget.id; 
        parmas.openId = app.apiServer.parmas.openId;
        parmas.memberId = app.apiServer.parmas.memberId;
        var _parmas = JSON.stringify(parmas);
        wx.request({
            url: app.apiServer.host + 'couponGet.htm?json=' + _parmas,
            method:'POST',
            success:function(data){
                wx.removeStorage({
                    key: 'CARDLIST',
                    success: function (res) {
                        
                    }
                })
                wx.showToast({
                    title: '会员卡领取成功',
                    icon: 'success',
                    duration: 2000
                });  
                app.getData('cardTemplateList', 'CARDLIST', app.apiServer.parmas).then(function (res) {
                    that.setData({
                        couponlist: res
                    });
                });
            }
        });
    },
    //领取会员卡
    registerCard: function () {
        wx.navigateTo({
            url: '/pages/registercard/registercard',
        })
    },
    
    onLoad: function (options) {
        var that = this;
        wx.setNavigationBarTitle({
            title: '哲哥小面'
        });
        app.getData('getMember', 'MEMBER', app.apiServer.parmas).then(function(res){
            //console.log(res);
        });

        app.getData('cardTemplateList', 'CARDLIST', app.apiServer.parmas).then(function (res) {
            that.setData({
                couponlist:res
            });
        });
        //加载tabBar菜单
        app.setTab();

        wx.getLocation({
            success: function (res) {
                var latitude = res.latitude
                var longitude = res.longitude
                var speed = res.speed
                var accuracy = res.accuracy
                console.log(accuracy)
            }
        });

        this.setData({
            pageloading: true
        });
        
    },
    
    onReady: function () {
        this.setData({
            pageloading: true
        });
    },

    onShow: function () {
        this.setData({
            pageloading:true
        });
    },

    onHide: function () {
    },
    onUnload: function () {

    }
})