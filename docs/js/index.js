"use strict";if($(".footer__arrow").on("click",(function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},600),!1})),$(".order--js").on("click",(function(e){e.preventDefault(),$.fancybox.open({loop:!1,src:"#order-modal",baseClass:"dark-fancybox",touch:!1})})),$(".final--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#final-modal",baseClass:"dark-fancybox",touch:!1})})),$(".thank--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#thank-modal",baseClass:"dark-fancybox",touch:!1})})),$(".page-quiz__btn").on("click",(function(){$(".page-quiz__button").addClass("hidden"),$(".page-quiz__container").slideToggle(400)})),$(".step--js").length>0&&$(".step--js").on("click",(function(e){e.preventDefault();var t=$(this).data("next-step");$(".quiz__step").removeClass("active"),$(this).parent().parent().parent().find('.quiz__step[data-step="'+t+'"]').addClass("active");var n=10*t;$(".quizStepCount").css("width",n+"%")})),$(".quiz__field").length>0&&($(".quiz__field").on("focus",(function(){$(this).parent().find(".quiz__label-caption").addClass("active")})),$(".quiz__field").on("blur",(function(){0==$(this).val().length?$(this).parent().find(".quiz__label-caption").removeClass("active"):$(this).parent().find(".quiz__label-caption").addClass("active")}))),$(".result").length>0)var swiper=new Swiper(".result__swiper",{slidesPerView:1,spaceBetween:20,pagination:{el:".result .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".result .arrow_next",prevEl:".result .arrow_prev"}});if($(".reviews").length>0)swiper=new Swiper(".reviews__swiper",{slidesPerView:1.34,spaceBetween:9,pagination:{el:".reviews .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".reviews .arrow_next",prevEl:".reviews .arrow_prev"}});$(".select").on("click",(function(e){$(this).hasClass("disabled")||($(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50))})),$(".select-options__value").on("click",(function(){$(".select-title").removeClass("gray"),$(this).parents(".select").find(".select-title__value").html($(this).html()),$(this).addClass("active"),""!=$.trim($(this).data("value"))?$(this).parents(".select").find("input").val($(this).data("value")):$(this).parents(".select").find("input").val($(this).html())})),$(document).on("click",(function(e){$(e.target).is(".select *")||($(".select").removeClass("active"),$(".select-options").slideUp(50))})),$(".offers").length>0&&document.addEventListener("DOMContentLoaded",(function(){var e=new Date(2024,0,25),t=null;function n(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}function a(){var a=e-new Date;a<=0&&clearInterval(t);var r=a>0?Math.floor(a/1e3/60/60/24):0,c=a>0?Math.floor(a/1e3/60/60)%24:0,u=a>0?Math.floor(a/1e3/60)%60:0,d=a>0?Math.floor(a/1e3)%60:0;i.textContent=r<10?"0"+r:r,s.textContent=c<10?"0"+c:c,l.textContent=u<10?"0"+u:u,o.textContent=d<10?"0"+d:d,i.dataset.title=n(r,["день","дня","дней"]),s.dataset.title=n(c,["час","часа","часов"]),l.dataset.title=n(u,["минута","минуты","минут"]),o.dataset.title=n(d,["секунда","секунды","секунд"])}var i=document.querySelector(".timer__days"),s=document.querySelector(".timer__hours"),l=document.querySelector(".timer__minutes"),o=document.querySelector(".timer__seconds");a(),t=setInterval(a,1e3)}));