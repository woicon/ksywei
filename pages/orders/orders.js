//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    menuCat:[{"categoryNo":"154F7B93A9C0E7","categoryName":"凉菜"},{"categoryNo":"C66602E4F35D43","categoryName":"热菜小炒"},{"categoryNo":"27101009D4BDD2","categoryName":"酒水饮料"}],
    menuContent:[{"id":172631,"itemNo":"111","itemName":"红烧肉","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//e4674b38-a017-46e7-8a16-b5df761adcd8.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172630,"itemNo":"3333","itemName":"宫爆鸡丁","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//304f0276-1cf2-4d4a-b3c0-e62ff9f4fe98.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172629,"itemNo":"3334","itemName":"土豆牛肉","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//5afee70b-1e18-49df-8df0-921730f42fe5.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172628,"itemNo":"3335","itemName":"干煸豆角","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//c6436034-23d0-489f-9ba3-7036150e25e0.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172627,"itemNo":"3336","itemName":"清炒四季度","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//7799dfe5-00dc-4438-b708-4357f1f8fd17.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172626,"itemNo":"3337","itemName":"小炒肉","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//07fe6c9f-e7e6-4cfc-97a8-2fede4761aa1.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172625,"itemNo":"3338","itemName":"红烧鲤鱼","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//e6d9dc83-1924-4bf4-8c05-30c5744d9e00.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172624,"itemNo":"3339","itemName":"酸菜鱼","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//c173cb19-0d07-487e-827c-00196bf53094.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172623,"itemNo":"3340","itemName":"水煮肉","categoryNo":"C66602E4F35D43","categoryName":"热菜小炒","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//4484a91e-d4f4-4315-9e5d-ba764ce1f94c.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172622,"itemNo":"3341","itemName":"拍黄瓜","categoryNo":"154F7B93A9C0E7","categoryName":"凉菜","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//3dc6a8e7-ff08-42df-8928-e99b71a66b6d.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172621,"itemNo":"3342","itemName":"东北大拉皮","categoryNo":"154F7B93A9C0E7","categoryName":"凉菜","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//ae326b9e-8720-439c-ae24-04cd8e48d7cc.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172620,"itemNo":"3343","itemName":"大拌菜","categoryNo":"154F7B93A9C0E7","categoryName":"凉菜","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//37b85e6b-c9c0-4a5a-b0b5-3d38f0adf4f8.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172619,"itemNo":"3344","itemName":"蓝莓山药","categoryNo":"154F7B93A9C0E7","categoryName":"凉菜","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//dfda675f-4ae4-4e03-a473-3050e4e11925.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172618,"itemNo":"3345","itemName":"花生米","categoryNo":"154F7B93A9C0E7","categoryName":"凉菜","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//d3c51cf9-3de3-42d5-91e7-f14b38cd316f.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172617,"itemNo":"3346","itemName":"洋葱木耳","categoryNo":"154F7B93A9C0E7","categoryName":"凉菜","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"/份","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//6d69198b-ec0b-40b2-892e-c05269c593a6.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172608,"itemNo":"3347","itemName":"牛栏山","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//05901355-de0e-4305-a36f-f5c2eb4d7de4.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172607,"itemNo":"3348","itemName":"燕京普啤","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//021eeff7-24c9-4c03-9ee9-d935288d1778.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172606,"itemNo":"3349","itemName":"哈尔滨啤酒","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//0bb7ad10-7f87-47ad-9ff1-bbaca39b801e.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172605,"itemNo":"3350","itemName":"老村长","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//55e2623f-84e7-429f-a97a-6955f3cfef70.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172604,"itemNo":"3351","itemName":"可乐","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//eb795ba8-973a-44ad-a705-a2a092ea7fc9.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172603,"itemNo":"3352","itemName":"果粒橙","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//3ede1a57-9ac9-4b8b-89f7-f3aef17b058c.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172602,"itemNo":"3353","itemName":"雪碧","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//e11518a5-c6f6-490a-b906-e2fc8b6acf94.jpg","itemContent":"","isSaleOut":1,"type":"0"},{"id":172601,"itemNo":"3354","itemName":"露露","categoryNo":"27101009D4BDD2","categoryName":"酒水饮料","salePrice":0.01,"discountPrice":0.01,"integral":0,"status":"1","backCol1":"","itemPic":"http://upload.liantuobank.com/public_upload/shopcashier/0//e8d03df9-21e4-4c06-be49-dabcdb66873c.jpg","itemContent":"","isSaleOut":1,"type":"0"}],
    tabStat:0,//菜单切换
    cartList:{},//购物车商品集合
    allTotal:0,//购物车总价格
    allAmout:0,//购物总数
    catAmout:{},//购物车内商品分类数量
    mask:false,//遮罩层
    cartToggle:false,//购物车是否展开状态
  },
  submitOrder:function(){
    wx.navigateTo({
      url: '../wxpay/wxpay'
    });
  },
  cart:function(e){
      //购物车操作
      var that = this,
          elm = e.target.id,
          id = e.currentTarget.id,
          cat = e.currentTarget.dataset.skucat,
          skuItem = e.currentTarget.dataset.skuitem,
          skuStat = e.currentTarget.dataset.skustat;
      console.log(e);
      //数据更新
      function setdata(cartlist,amout,total,catamout){
        that.setData({
          cartList:cartlist,
          allAmout:amout,
          allTotal:total,
          catAmout:catamout
        });
      }
      if(elm == "addBtn"){
          skuItem.skuAmout = skuItem.skuAmout?skuItem.skuAmout+1:1;
          skuItem.skuTotal = skuItem.skuTotal?Number(skuItem.salePrice)*skuItem.skuAmout:Number(skuItem.salePrice);
          skuItem.skuStat = true;
          that.data.cartList[id] = skuItem;
          that.data.catAmout[cat] = that.data.catAmout[cat]?that.data.catAmout[cat]+1:1;
          setdata(
            that.data.cartList,
            that.data.allAmout+1,
            parseFloat(Number(that.data.allTotal)+Number(skuItem.salePrice)).toFixed(2),
            that.data.catAmout);
      }
      if(elm == "minBtn"){
          skuItem.skuAmout = skuItem.skuAmout-1;
          that.data.catAmout[cat] = that.data.catAmout[cat]-1;
          if(skuItem.skuAmout==0){
            that.data.cartList[id]=undefined;
            if(that.data.catAmout[cat]==0){
              that.data.catAmout[cat]=undefined;
            }
          }else{
            that.data.cartList[id] = skuItem;
            skuItem.skuStat = true;
            skuItem.skuTotal = Number(skuItem.salePrice)*Number(skuItem.skuAmout);
          }
          setdata(
            that.data.cartList,
            that.data.allAmout-1,
            parseFloat(Number(that.data.allTotal) - Number(skuItem.salePrice)).toFixed(2),
            that.data.catAmout
            );
      } 
      
      console.log(this.data.catAmout); 
  },
  toggleCart:function(e){
      if(this.data.cartToggle){
        this.setData({
          cartToggle:false,
          mask:false
        });
      }else{
        this.setData({
          cartToggle:true,
          mask:true
        });
      }
  },
  //清空购物车
  cleanCart:function(e){
    var that = this;
    wx.showModal({
      title: '确认清空购物车吗？',
      content: '',
      success: function(res) {
        if (res.confirm) {
          that.setData({
            cartList:{},//购物车商品集合
            allTotal:0,//购物车总价格
            allAmout:0,//购物总数
            catAmout:{},//购物车内商品分类数量
         });
        }
      }
    });
  },
  //菜单分类切换
  showMenu:function(event){
    this.setData({
        tabStat:event.target.dataset.index
    });
  },
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  },
  onLoad: function () {
   // var that = this;
    // console.log(icon);
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo, 
    //   });
    // });

  }
})
