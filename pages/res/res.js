// pages/pay/paycomplete/paycomplete.js
var app = getApp();
Page({
    data: {
       goods:[],
       buttonTxt:'商品扫码',
       stepStat:false,
       barCodeList:[],
       cartTotal:0,
       allPrice:0,
    },
    stepStat:function(){
        var that = this;
        var _stepStat = that.data.stepStat;
        _stepStat = (_goods.length == 0) ? false : true;

    },
    totalChange:function(e){
        console.log(e);
        var that = this;
        var _id = e.currentTarget.id;
        var _goods = that.data.goods;
        var _cartTotal = that.data.cartTotal;
        var _allPrice = that.data.allPrice;
        var _cartTotal = that.data.cartTotal;
        var _stepStat = that.data.stepStat;
        console.log(_goods);
        if (e.target.dataset.name =='add'){
            _goods[_id].amount +=1;
            _goods[_id].subtotal += _goods[_id].price;
            _cartTotal += 1;
            _allPrice += _goods[_id].price;
        } else if (e.target.dataset.name == 'min'){
            if (_goods[_id].amount == 1) {
                wx.showModal({
                    title: '确认删除商品？',
                    content: '确认后将从购物车中删除该商品，需要重新扫描',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                            _cartTotal -= 1;
                            _allPrice -= _goods[_id].price;
                            _goods.splice(_id,1);
                            if (_cartTotal == 0) {
                                _stepStat = false;
                            }
                            that.setData({
                                goods: _goods,
                                cartTotal: _cartTotal,
                                allPrice:_allPrice,
                                stepStat: _stepStat
                            });
                        } else if (res.cancel) {
                            
                        }
                    }
                });
            }else{
                _goods[_id].amount -= 1;
                _goods[_id].subtotal -= _goods[_id].price;
                _cartTotal -= 1;
                _allPrice -= _goods[_id].price;
            }
            if (_cartTotal == 0) {
                _stepStat = true;
            }
        }

        console.log(_goods);
        that.setData({
             goods: _goods,
             cartTotal: _cartTotal,
             allPrice: _allPrice,
             cartTotal: _cartTotal,
             stepStat: _stepStat
        });
        console.log(that.data)

    },
    skuScan:function(){
        var that = this;
        Array.prototype.in_array = function (e) {
            for (var i = 0; i < this.length && this[i] != e; i++);
            return !(i == this.length);
        }
        wx.scanCode({
            success: (res) => {
                console.log(res.result);
                wx.request({
                    url: app.apiServer.host + 'barcodeGoods.htm',
                    method: 'GET',
                    header: {
                        'content-type': 'application/json'
                    },
                    data:{
                        json:{
                            barcode:res.result
                        }
                    },
                    fail:()=>{
                        console.log('没有该商品')
                    },
                    success:(res) => {
                        console.log(res);   
                        if (res.data.returnCode == "S"){
                            var _goods = that.data.goods;
                            var _stepStat = that.data.stepStat;
                            var _barCodeList = that.data.barCodeList;
                            var _allPrice = that.data.allPrice;
                            var _cartTotal = that.data.cartTotal;

                            if( _barCodeList.in_array(res.data.goods.barcode)){
                                console.log(_barCodeList.indexOf(res.data.goods.barcode));
                                var _index = _barCodeList.indexOf(res.data.goods.barcode);
                                _goods[_index].amount += 1;
                                _goods[_index].subtotal = Number(_goods[_index].price) * Number(_goods[_index].amount);
                                _allPrice += _goods[_index].subtotal;
                            }else{
                                res.data.goods.amount = 1;
                                res.data.goods.subtotal = res.data.goods.price;
                                _barCodeList.push(res.data.goods.barcode);
                                _goods.push(res.data.goods);
                                _allPrice += res.data.goods.price;
                            }
                            _stepStat = (_goods.length == 0) ? false : true;
                            _cartTotal += 1;
                            that.setData({
                                goods:_goods,
                                stepStat: _stepStat,
                                allPrice:_allPrice,
                                cartTotal:_cartTotal
                            });
                        }else{
                            wx.showModal({
                                title: '提示',
                                content: res.data.returnMessage,
                            })
                        }
                        console.log(that.data.goods);
                    }
                    
                })
            },
            fail:(res) =>{
                console.log(res);
            }
        });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        //设置评分星状态
        // var _starItem = [];
        // for(var i=1;i<=that.data.starNumber;i++){
        //     _starItem.push(i);
        // }
        // that.setData({
        //     starItem: _starItem
        // });
        wx.setNavigationBarTitle({
            title: '自助扫码购物',
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