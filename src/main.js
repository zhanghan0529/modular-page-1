var $  = require("./js/lib/jQuery/jquery.min.js");
var Carousel = require("./js/app/Carousel.js");
var GoTop = require("./js/app/GoTop.js");
var WaterFall = require("./js/app/WaterFallImg.js");

Carousel.init($(".cal"));
GoTop.init();
WaterFall.init($(".pic-show>ul"),$(".pic-show .pic-show-btn"));