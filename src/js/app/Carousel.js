    var $ = require("../lib/jQuery/jquery.min");
    
    var Carousel = (function () {
        function _Carousel($ct) {
            this.$ct = $ct;
            this.init();
            this.bind();
            this.clock();
        }
    
        _Carousel.prototype.init = function () {
            var $imgsWrap = this.$imgsWrap = this.$ct.find(".show");
            //console.log($imgsWrap)
            var $imgs = this.$imgs = this.$ct.find(".show li");
            var $btnPrev = this.$btnPrev = this.$ct.find(".prev");
            var $btnNext = this.$btnNext = this.$ct.find(".next");
            var $btn = this.$btn = this.$ct.find(".show-nav li");
            this.len = $imgs.length;
            //console.log(this.len)
            this.imgsWidth = $imgs.width();
            this.index = 0;
            //this.isShow = false;//模拟的动态锁，防止过快点击加载更多动画
            $imgsWrap.append($imgs.first().clone());
            $imgsWrap.prepend($imgs.last().clone());
            $imgsWrap.css({ left: -this.imgsWidth });
            $imgsWrap.css({ width: (this.len + 2) * this.imgsWidth });
        }
    
        _Carousel.prototype.bind = function () {
            var _this = this
            //console.log(this.$ct.find(".show"))
            this.$btnPrev.on("click", function () {
                _this.showPrev(1);
            })
            this.$btnNext.on("click", function () {
                _this.showNext(1);
            })
            this.$btn.on("click", function () {
                //console.log($(this).index())
                if ($(this).index() > _this.index) {
                    _this.showNext($(this).index() - _this.index);
                } else if ($(this).index() < _this.index) {
                    _this.showPrev(_this.index - $(this).index());
                }
            })
        }
    
    
        _Carousel.prototype.showPrev = function (e) {
            var _this = this;
            if (this.isShow) {
                return;
            }
            this.isShow = true;
            //console.log(_this.$imgsWrap)
            this.$imgsWrap.animate({ left: "+=" + e * _this.imgsWidth },
                function () {
                    _this.index -= e;
                    if (_this.index < 0) {
                        _this.$imgsWrap.css({ left: -_this.len * _this.imgsWidth });
                        _this.index = _this.len - 1;
                    }
                    _this.showBtn()
                    _this.isShow = false;
                })
        }
    
        _Carousel.prototype.showNext = function (e) {
            var _this = this;
            if (this.isShow) {
                return;
            }
            this.isShow = true;
            this.$imgsWrap.animate({ left: "-=" + e * _this.imgsWidth},
                function () {
                
                    _this.index += e;
                    if (_this.index === 4) {
                        _this.$imgsWrap.css({ left: -_this.imgsWidth });
                        _this.index = 0;
                    }
                    _this.showBtn()
                    _this.isShow = false;
                })
    
        }
    
        _Carousel.prototype.showBtn = function () {
            this.$btn.removeClass("active1").eq(this.index).addClass("active1");  
        }
        _Carousel.prototype.clock = function(){
            var _this = this;
            if(this.clock){
                clearInterval(this.clock);
            }
            this.clock = setInterval(function(){
                _this.showNext(1);
            },3000)
        }
        return {
            init: function ($ct) {
                $ct.each(function (index, node) {
                    new _Carousel($(node))
                })
            }
           
        }
    })()
    //Carousel.init($(".wrap"));
   module.exports = Carousel;


