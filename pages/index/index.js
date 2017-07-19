// pages/index/index.js
var app = getApp();
Page({
    data: {
        shopinfo: {
            shopname: '西少爷肉夹馍北苑路北店',
            shopimg: '../../pages/images/usimg.jpg',
            shoplocation: '北京市朝阳区北苑路北',
            shoptel: "18912312312"
        },
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
            userImage: '../../pages/images/userimg.jpg',
            time: '2017-12-12 9:00',
            content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }, {
            userName: "JSON Broke",
            stars: 4,
            time: '2017-12-12 9:00',
            userImage: '../../pages/images/userimg.jpg',
            content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }, {
            userName: "JSON Broke",
            stars: 4,
            time: '2017-12-12 9:00',
            userImage: '../../pages/images/userimg.jpg',
            content: '东四四条胡同里，走50米左右就能看到了。奔着他家紫姜江团来的，看着就好吃。一进门，古香古色的，很有北京味道。每个椅子上都有一个坐垫，很贴心。店里有一个大鱼缸，里面有两......'
        }],
        couponlist: {
          "pageCount": 5,
          "totalCount": 43,
          "currentPage": 1,
          "pageSize": 10,
            "items": [
                {
                    "couponNo": "906440280357854942",
                    "couponName": "流程21元代金券",
                    "couponStatus": 0,
                    "couponType": 5,
                    "getDate": "2017-06-14 13:24:01",
                    "reduceCost": 1,
                    "leastCost": 1,
                    "beginTime": "2017-06-14 13:22:07",
                    "endTime": "2017-07-14 13:22:07",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://open.liantuobank.cn/assets/images/wechat.png",
                    "color": "#A795FF",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est9w8jlngxvDybO1qGaURiNY",
            "goodItem": {
                    "itemName": "饼干",
                    "itemNo": "12345678",
                    "itemPrice": 1,
                    "itemText": "苏打饼干",
                    "status": 0
                }
                },
            {
                    "couponNo": "902247244565344031",
                    "couponName": "2折",
                    "couponStatus": 0,
                    "couponType": 1,
                    "getDate": "2017-06-13 17:45:13",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "909349912314754221",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "201706-13 17:45:21",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FFC491",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "907360826700354843",
                    "couponName": "2折",
                    "couponStatus": 2,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:17:55",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#A795FF",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "904122527835624602",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:06:59",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#A795FF",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "902235415144254737",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 16:24:39",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FFC160",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "901549426739334408",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 17:45:17",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#63b359",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "900077942193204153",
                    "couponName": "2折",
                    "couponStatus": 4,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:18:17",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "902622453888604527",
                    "couponName": "2折",
                    "couponStatus": 1,
                    "couponType": 1,
                    "getDate": "2017-06-13 17:45:08",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                },
                {
                    "couponNo": "909472542541104982",
                    "couponName": "2折",
                    "couponStatus": 3,
                    "couponType": 1,
                    "getDate": "2017-06-13 11:18:11",
                    "leastCost": 1,
                    "discount": 2,
                    "beginTime": "2017-06-13 11:02:43",
                    "endTime": "2017-07-13 11:02:43",
                    "giveFriend": 1,
                    "notice": "请在结账时出示给服务员",
                    "description": "本优惠券不可兑换现金，不可找零。",
                    "servicePhone": "",
                    "merchantId": 10104677,
                    "merchantName": "收款小精灵",
                    "logo": "http://192.168.5.158:8070/assets/images/wechat.png",
                    "color": "#FF7A6B",
                    "syncWechat": 0,
                    "wechatCardId": "pd-est5wP6YCQX593-3zV2bCWQxs"
                }
            ],
                "returnCode": "S",
                "returnMessage": "操作成功"
            },
    },
    callShop: function () {
        wx.makePhoneCall({
            phoneNumber: this.data.shopinfo.shoptel
        })
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
            title: '西少爷'
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