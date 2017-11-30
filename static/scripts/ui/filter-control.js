define("ui/filter-control",["jquery"],function(e){"use strict";function t(e,t){t=t||(_.isEmpty(e)?"":e[0]);var n=o(['<div class="dropdown-select btn-group">','<button type="button" class="btn btn-default">','<span class="dropdown-select-selected">'+t+"</span>","</button>","</div>"].join("\n"));return e&&e.length>1&&(n.find("button").addClass("dropdown-toggle").attr("data-toggle","dropdown").append(' <span class="caret"></span>'),n.append(['<ul class="dropdown-menu" role="menu">',_.map(e,function(e){return['<li><a href="javascript:void(0)">',e,"</a></li>"].join("")}).join("\n"),"</ul>"].join("\n"))),n.find("a").click(function(e){var t=o(this),n=t.parents(".dropdown-select"),r=t.text();n.find(".dropdown-select-selected").text(r),n.trigger("change.dropdown-select",r)}),n}function n(e,t){return this.init(e,t)}var r=function(e){return e&&e.__esModule?e:{default:e}}(e),o=r.default;n.prototype.DATA_KEY="filter-control",n.prototype.init=function(e,t){return t=t||{filters:[]},this.$element=o(e).addClass("filter-control btn-group"),this.options=r.default.extend(!0,{},this.defaults,t),this.currFilter=this.options.filters[0],this.render()},n.prototype.render=function(){return this.$element.empty().append([this._renderKeySelect(),this._renderOpSelect(),this._renderValueInput()]),this},n.prototype._renderKeySelect=function(){var e=this,n=this.options.filters.map(function(e){return e.key});return this.$keySelect=t(n,this.currFilter.key).addClass("filter-control-key").on("change.dropdown-select",function(t,n){e.currFilter=_.findWhere(e.options.filters,{key:n}),e.render()._triggerChange()}),this.$keySelect},n.prototype._renderOpSelect=function(){var e=this,n=this.currFilter.ops;return this.$opSelect=t(n,n[0]).addClass("filter-control-op").on("change.dropdown-select",function(t,n){e._triggerChange()}),this.$opSelect},n.prototype._renderValueInput=function(){var e=this;return this.currFilter.values?this.$valueSelect=t(this.currFilter.values,this.currFilter.values[0]).on("change.dropdown-select",function(t,n){e._triggerChange()}):this.$valueSelect=o("<input/>").addClass("form-control").on("change",function(t,n){e._triggerChange()}),this.$valueSelect.addClass("filter-control-value"),this.$valueSelect},n.prototype.val=function(){var e=this.$element.find(".filter-control-key .dropdown-select-selected").text(),t=this.$element.find(".filter-control-op .dropdown-select-selected").text(),n=this.$element.find(".filter-control-value");return{key:e,op:t,value:n.hasClass("dropdown-select")?n.find(".dropdown-select-selected").text():n.val()}},n.prototype._triggerChange=function(){this.$element.trigger("change.filter-control",this.val())},r.default.fn.extend({filterControl:function(e){var t=r.default.makeArray(arguments).slice(1);return this.map(function(){var i=o(this),l=i.data(n.prototype.DATA_KEY);if("object"===r.default.type(e)&&(l=new n(i,e),i.data(n.prototype.DATA_KEY,l)),l&&"string"===r.default.type(e)){var s=l[e];if("function"===r.default.type(s))return s.apply(l,t)}return this})}})});