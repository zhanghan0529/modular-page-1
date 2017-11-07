var $ = require("../lib/jQuery/jquery.min");
var waterfall = (function() {
  function waterFall($ct, $btn) {
    this.$btn = $btn;
    this.$ct = $ct;
    this.init();
    this.bind();
  }

  waterFall.prototype.init = function() {
    this.page = 0;
    this.$nodeNum = parseInt(this.$ct.width() / this.$ct.find("li").width());
    //console.log(this.$nodeNum);
    this.nodeArr = [];
    this.isShow = true;
    for (var i = 0; i < this.$nodeNum; i++) {
      this.nodeArr[i] = 0;
    }
  };

  waterFall.prototype.bind = function() {
    var _this = this;
    //console.log(this.$btn);
    this.$btn.on("click", function() {
      //console.log(1);
      _this.showPhoto();
    });
  };

  waterFall.prototype.showPhoto = function() {
    this.getPhoto(this.callback);
  };
  waterFall.prototype.getPhoto = function(callback) {
    var _this = this;
    if (!this.isShow) {
      return;
    }
    this.isShow = false;
    $.ajax({
      url: "../../.././getphotos",
      type: "get",
      data: {
        page: _this.page
      }
    })
      .done(function(ret) {
        if (ret.status === 0) {
          //console.log(ret.data);
          if (ret.data.length === 0) {
            return;
          }
          _this.page += 1;
          _this.callback(ret.data);
          _this.isShow = true;
        } else {
          alert("加载图片失败！");
        }
      })
      .fail(function() {
        alert("获取图片失败！");
      });
  };

  waterFall.prototype.callback = function(e) {
    console.log(e);
    var _this = this;
    $.each(e, function(idx, photo) {
      var $node1 = _this.showPic(photo);
      $node1.find("img").load(function() {
        console.log($node1);
        _this.$ct.append($node1);
        _this.waterfall($node1);
      });
    });
  };
  waterFall.prototype.showPic = function(photo) {
    var html = "";
    html += "<li>";
    html += "<img src='" + photo.img + "'alt=''>";
    html += "</li>";
    return $(html);
  };

  waterFall.prototype.waterfall = function($node2) {
    this.minHeight = Math.min.apply(null, this.nodeArr);
    this.minIdx = this.nodeArr.indexOf(this.minHeight);
    //console.log($node2)
    $node2.css({
      top: this.nodeArr[this.minIdx],
      left: $node2.outerWidth(true) * this.minIdx,
      opacity: 1
    });
    //console.log($node2.outerHeight());
    this.nodeArr[this.minIdx] += $node2.outerHeight(true);
    this.$ct.height(this.$ct.height(Math.max.apply(null, this.nodeArr)));
  };
  return {
    init: function($ct, $btn){
            new waterFall($ct, $btn);
    }
    
   
  }
})();

module.exports = waterfall;
