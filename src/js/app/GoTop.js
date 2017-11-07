var gotop = (function(){
        function GoTop() {
          //this.ct = ct;
          this.target = document.createElement("button");
          this.createNode();
          this.bindEvent();
        }

        GoTop.prototype.bindEvent = function() {
          var self = this.target;
          //console.log(this.target)
          window.addEventListener("scroll", function() {
            if (document.body.scrollTop === 0) {
              self.style.display = "none";
            } else {
              self.style.display = "inline";
            }
          });
          self.addEventListener("click", function() {
            document.body.scrollTop = 0;
          });
        };

        GoTop.prototype.createNode = function() {
          //var node = document.createElement("button");
          var text = document.createTextNode("GoTop");
          this.target.appendChild(text);
          this.target.classList.add("active");
          document.querySelector("body").appendChild(this.target);
          //console.log(document.querySelector(this.ct))
        };
        return {
                 init: function(){
                     new GoTop();
                 }
               }
            

})()

    //var btn = new GoTop(".ct");
    module.exports = gotop;
