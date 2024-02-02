"use strict";if($(".footer__arrow").on("click",(function(){var e=$(this).attr("href"),t=$(e).offset().top;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},600),!1})),$(".card-mask").mask("9999 9999 9999 9999",{autoclear:!1}),$(".date-mask").mask("99/99",{autoclear:!1}),$(".code-mask").mask("9999",{autoclear:!1}),$(".loader--js").on("click",(function(e){e.preventDefault();$('.quiz__step input[type="radio"]:checked').val();$('.quiz__step.active .checkbox input[type="checkbox"]:checked').length>0?($.fancybox.close(),$.fancybox.open({loop:!1,src:"#modal-loader",baseClass:"dark-fancybox",touch:!1}),setTimeout((function(){$.fancybox.close(),window.location.href="product.html"}),1500)):console.log("Выберите хотя бы один вариант ответа")})),$(".order--js").on("click",(function(e){e.preventDefault(),$.fancybox.open({loop:!1,src:"#order-modal",baseClass:"dark-fancybox",touch:!1})})),$(".page-quiz__btn").on("click",(function(){$(".page-quiz__button").addClass("hidden"),$(".page-quiz__container").slideToggle(400)})),$(".step--js").length>0&&$(".step--js").on("click",(function(e){e.preventDefault();var t=$(this).data("next-step"),n=$(this).closest(".quiz__step");n.find(".radio, .quiz__label, .checkbox").each((function(e,t){console.log($(t).html())}));var o=n.find('.radio input[type="radio"]:checked');if(0===o.length&&n.find('.radio input[type="radio"]').length>0){if(console.log("Выберите вариант ответа"),$(this).hasClass("btn-next"))return void n.addClass("error")}else console.log("Выбран радиобаттон с значением: "+o.val());if(0===n.find('.quiz__label input[type="tel"]').filter((function(){return null!==$(this).val()&&void 0!==$(this).val()&&""!==$(this).val().trim()})).length&&n.find(".quiz__label").length>0&&(console.log("Введите текст"),$(this).hasClass("btn-next")))n.addClass("error");else if(0===n.find('.checkbox input[type="checkbox"]:checked').length&&n.find(".checkbox").length>0&&(console.log("Выберите вариант ответа"),$(this).hasClass("btn-next")))n.addClass("error");else{n.removeClass("active"),$('.quiz__step[data-step="'+t+'"]').addClass("active"),console.clear();var a=10*t;if($(".quizStepCount").css("width",a+"%"),$(this).hasClass("btn-next"))console.log("Это кнопка 'Next'");else{var s="product.html";$(this).hasClass("btn-item_border"),window.location.href=s}}})),$(".quiz__field").length>0&&($(".quiz__field").on("focus",(function(){$(this).parent().find(".quiz__label-caption").addClass("active")})),$(".quiz__field").on("blur",(function(){0==$(this).val().length?$(this).parent().find(".quiz__label-caption").removeClass("active"):$(this).parent().find(".quiz__label-caption").addClass("active")}))),$(".result").length>0)var swiper=new Swiper(".result__swiper",{slidesPerView:1,spaceBetween:20,pagination:{el:".result .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".result .arrow_next",prevEl:".result .arrow_prev"}});if($(".reviews").length>0)swiper=new Swiper(".reviews__swiper",{slidesPerView:1.34,spaceBetween:9,pagination:{el:".reviews .swiper-pagination",clickable:!0,renderBullet:function(e,t){return'<span class="'+t+'">'+(e+1)+"</span>"}},navigation:{nextEl:".reviews .arrow_next",prevEl:".reviews .arrow_prev"}});$(".select").on("click",(function(e){$(this).hasClass("disabled")||($(".select").not(this).removeClass("active").find(".select-options").slideUp(50),$(this).toggleClass("active"),$(this).find(".select-options").slideToggle(50))})),$(".select-options__value").on("click",(function(){$(".select-title").removeClass("gray"),$(this).parents(".select").find(".select-title__value").html($(this).html()),$(this).addClass("active"),""!=$.trim($(this).data("value"))?$(this).parents(".select").find("input").val($(this).data("value")):$(this).parents(".select").find("input").val($(this).html())})),$(document).on("click",(function(e){$(e.target).is(".select *")||($(".select").removeClass("active"),$(".select-options").slideUp(50))})),$(".offers").length>0&&document.addEventListener("DOMContentLoaded",(function(){var e=new Date((new Date).getFullYear(),(new Date).getMonth()+1,2),t=null;function n(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}function o(){var o=e-new Date;o<=0&&clearInterval(t);var c=o>0?Math.floor(o/1e3/60/60/24):0,r=o>0?Math.floor(o/1e3/60/60)%24:0,d=o>0?Math.floor(o/1e3/60)%60:0,u=o>0?Math.floor(o/1e3)%60:0;a.textContent=c<10?"0"+c:c,s.textContent=r<10?"0"+r:r,i.textContent=d<10?"0"+d:d,l.textContent=u<10?"0"+u:u,a.dataset.title=n(c,["день","дня","дней"]),s.dataset.title=n(r,["час","часа","часов"]),i.dataset.title=n(d,["минута","минуты","минут"]),l.dataset.title=n(u,["секунда","секунды","секунд"])}var a=document.querySelector(".timer__days"),s=document.querySelector(".timer__hours"),i=document.querySelector(".timer__minutes"),l=document.querySelector(".timer__seconds");o(),t=setInterval(o,1e3)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".form"),t=e.querySelectorAll(".form__field"),n=document.getElementById("zip"),o=document.getElementById("city");e.addEventListener("submit",(function(e){var n=!0;t.forEach((function(e){""===e.value.trim()&&"apt"!==e.id?(n=!1,e.closest(".form__box").classList.add("error")):e.closest(".form__box").classList.remove("error")})),n?(!function(){var e=document.getElementById("name").value,t=document.getElementById("lastname").value,n=document.getElementById("zip").value,o=document.getElementById("address").value,a=document.getElementById("apt").value,s=document.getElementById("city").value,i=document.getElementById("select-state").textContent,l=document.getElementById("phone").value,c=document.getElementById("email").value;""!==a.trim()&&(document.cookie="apt="+encodeURIComponent(a));document.cookie="firstName="+encodeURIComponent(e),document.cookie="lastName="+encodeURIComponent(t),document.cookie="zip="+encodeURIComponent(n),document.cookie="address="+encodeURIComponent(o),document.cookie="city="+encodeURIComponent(s),document.cookie="state="+encodeURIComponent(i),document.cookie="phone="+encodeURIComponent(l),document.cookie="email="+encodeURIComponent(c)}(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#final-modal",baseClass:"dark-fancybox",touch:!1,afterShow:function(){$("#new-address").text($("#address").val());var e=new Date;e.setDate(e.getDate()+7);var t=e.toISOString().split("T")[0];$("#new-data").text(t),$(".thank--js").on("click",(function(){window.location.href="thanks.html"}))},afterClose:function(){$(".thank--js").off("click")}})):e.preventDefault()})),t.forEach((function(e){e.addEventListener("change",(function(){""===e.value.trim()&&"apt"!==e.id?e.closest(".form__box").classList.add("error"):e.closest(".form__box").classList.remove("error")}))})),n.addEventListener("keyup",(function(e){e.preventDefault();var t=$(this).val();$.get("https://api.zippopotam.us/US/"+t,(function(e){o.value=e.places[0]["place name"],""===o.value.trim()?o.closest(".form__box").classList.add("error"):o.closest(".form__box").classList.remove("error"),$("#state").val(e.places[0]["state abbreviation"]),$("#select-state").html(e.places[0]["state abbreviation"])}),"json")}))}));