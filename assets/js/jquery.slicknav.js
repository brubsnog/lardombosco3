!function(e,n,t){var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!1,removeClasses:!1,brand:"",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},i="slicknav",s="slicknav";function l(n,t){this.element=n,this.settings=e.extend({},a,t),this._defaults=a,this._name=i,this.init()}l.prototype.init=function(){var t,a,i=this,l=e(this.element),o=this.settings;if(o.duplicate?(i.mobileNav=l.clone(),i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("id")})):(i.mobileNav=l,i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("id")})),o.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(n,t){e(t).removeAttr("class")})),t=s+"_icon",""===o.label&&(t+=" "+s+"_no-text"),"a"==o.parentTag&&(o.parentTag='a href="#"'),i.mobileNav.attr("class",s+"_nav"),a=e('<div class="'+s+'_menu"></div>'),""!==o.brand){var r=e('<div class="'+s+'_brand">'+o.brand+"</div>");e(a).append(r)}i.btn=e(["<"+o.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+o.label+"</span>",'<span class="'+t+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+o.parentTag+">"].join("")),e(a).append(i.btn),e(o.prependTo).prepend(a),a.append(i.mobileNav);var d=i.mobileNav.find("li");e(d).each(function(){var n=e(this),t={};if(t.children=n.children("ul").attr("role","menu"),n.data("menu",t),t.children.length>0){var a=n.contents(),l=!1,r=[];e(a).each(function(){if(e(this).is("ul"))return!1;r.push(this),e(this).is("a")&&(l=!0)});var d=e("<"+o.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(o.allowParentLinks&&!o.nestedParentLinks&&l)e(r).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();else e(r).wrapAll(d).parent().addClass(s+"_row");o.showChildren?n.addClass(s+"_open"):n.addClass(s+"_collapsed"),n.addClass(s+"_parent");var c=e('<span class="'+s+'_arrow">'+(o.showChildren?o.openedSymbol:o.closedSymbol)+"</span>");o.allowParentLinks&&!o.nestedParentLinks&&l&&(c=c.wrap(d).parent()),e(r).last().after(c)}else 0===n.children().length&&n.addClass(s+"_txtnode");n.children("a").attr("role","menuitem").click(function(n){o.closeOnClick&&!e(n.target).parent().closest("li").hasClass(s+"_parent")&&e(i.btn).click()}),o.closeOnClick&&o.allowParentLinks&&(n.children("a").children("a").click(function(n){e(i.btn).click()}),n.find("."+s+"_parent-link a:not(."+s+"_item)").click(function(n){e(i.btn).click()}))}),e(d).each(function(){var n=e(this).data("menu");o.showChildren||i._visibilityToggle(n.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(n).mousedown(function(){i._outlines(!1)}),e(n).keyup(function(){i._outlines(!0)}),e(i.btn).click(function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+s+"_item",function(n){n.preventDefault(),i._itemClick(e(this))}),e(i.btn).keydown(function(e){13==(e||event).keyCode&&(e.preventDefault(),i._menuToggle())}),i.mobileNav.on("keydown","."+s+"_item",function(n){13==(n||event).keyCode&&(n.preventDefault(),i._itemClick(e(n.target)))}),o.allowParentLinks&&o.nestedParentLinks&&e("."+s+"_item a").click(function(e){e.stopImmediatePropagation()})},l.prototype._menuToggle=function(e){var n=this,t=n.btn,a=n.mobileNav;t.hasClass(s+"_collapsed")?(t.removeClass(s+"_collapsed"),t.addClass(s+"_open")):(t.removeClass(s+"_open"),t.addClass(s+"_collapsed")),t.addClass(s+"_animating"),n._visibilityToggle(a,t.parent(),!0,t)},l.prototype._itemClick=function(e){var n=this,t=n.settings,a=e.data("menu");a||((a={}).arrow=e.children("."+s+"_arrow"),a.ul=e.next("ul"),a.parent=e.parent(),a.parent.hasClass(s+"_parent-link")&&(a.parent=e.parent().parent(),a.ul=e.parent().next("ul")),e.data("menu",a)),a.parent.hasClass(s+"_collapsed")?(a.arrow.html(t.openedSymbol),a.parent.removeClass(s+"_collapsed"),a.parent.addClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e)):(a.arrow.html(t.closedSymbol),a.parent.addClass(s+"_collapsed"),a.parent.removeClass(s+"_open"),a.parent.addClass(s+"_animating"),n._visibilityToggle(a.ul,a.parent,!0,e))},l.prototype._visibilityToggle=function(n,t,a,i,l){var o=this,r=o.settings,d=o._getActionItems(n),c=0;a&&(c=r.duration),n.hasClass(s+"_hidden")?(n.removeClass(s+"_hidden"),l||r.beforeOpen(i),n.slideDown(c,r.easingOpen,function(){e(i).removeClass(s+"_animating"),e(t).removeClass(s+"_animating"),l||r.afterOpen(i)}),n.attr("aria-hidden","false"),d.attr("tabindex","0"),o._setVisAttr(n,!1)):(n.addClass(s+"_hidden"),l||r.beforeClose(i),n.slideUp(c,this.settings.easingClose,function(){n.attr("aria-hidden","true"),d.attr("tabindex","-1"),o._setVisAttr(n,!0),n.hide(),e(i).removeClass(s+"_animating"),e(t).removeClass(s+"_animating"),l?"init"==i&&r.init():r.afterClose(i)}))},l.prototype._setVisAttr=function(n,t){var a=this,i=n.children("li").children("ul").not("."+s+"_hidden");t?i.each(function(){var n=e(this);n.attr("aria-hidden","true"),a._getActionItems(n).attr("tabindex","-1"),a._setVisAttr(n,t)}):i.each(function(){var n=e(this);n.attr("aria-hidden","false"),a._getActionItems(n).attr("tabindex","0"),a._setVisAttr(n,t)})},l.prototype._getActionItems=function(e){var n=e.data("menu");if(!n){n={};var t=e.children("li"),a=t.find("a");n.links=a.add(t.find("."+s+"_item")),e.data("menu",n)}return n.links},l.prototype._outlines=function(n){n?e("."+s+"_item, ."+s+"_btn").css("outline",""):e("."+s+"_item, ."+s+"_btn").css("outline","none")},l.prototype.toggle=function(){this._menuToggle()},l.prototype.open=function(){this.btn.hasClass(s+"_collapsed")&&this._menuToggle()},l.prototype.close=function(){this.btn.hasClass(s+"_open")&&this._menuToggle()},e.fn[i]=function(n){var t,a=arguments;return void 0===n||"object"==typeof n?this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new l(this,n))}):"string"==typeof n&&"_"!==n[0]&&"init"!==n?(this.each(function(){var s=e.data(this,"plugin_"+i);s instanceof l&&"function"==typeof s[n]&&(t=s[n].apply(s,Array.prototype.slice.call(a,1)))}),void 0!==t?t:this):void 0}}(jQuery,document,window);