(()=>{"use strict";(()=>{const e=document.querySelectorAll(".btn-callback"),t=document.querySelector(".overlay"),l=document.querySelector(".header-modal"),s=document.querySelector(".header-modal__close"),n=document.querySelectorAll(".btn-call-master"),r=document.querySelector(".services-modal"),o=document.querySelector(".services-modal__close");document.addEventListener("click",(c=>{e.forEach((e=>{c.target===e&&(c.preventDefault,t.style.display="block",l.style.display="block")})),(c.target===s||c.target.classList.contains("overlay"))&&(t.style.display="none",l.style.display="none"),n.forEach((e=>{c.target===e&&(c.preventDefault,t.style.display="block",r.style.display="block")})),(c.target===o||c.target.classList.contains("overlay"))&&(t.style.display="none",r.style.display="none")}))})(),(()=>{const e=document.querySelector(".benefits-wrap"),t=document.querySelectorAll(".benefits__item"),l=document.querySelectorAll(".benefits__arrow"),s=document.querySelector(".service-wrap"),n=document.querySelectorAll(".service-block"),r=document.querySelectorAll(".services__arrow");let o,c,a=1,d=0;const i=(e,t)=>{o=e-1,c=e+1,o<0&&(o=t-1),c>=t&&(c=0)},m=(e,l,s)=>{e===t?(i(l,t.length),document.documentElement.clientWidth>=576?(e[o].classList.add(s),e[o].classList.remove("hide"),e[o].style.order="-2",e[l].classList.remove("hide"),e[l].style.order="-1",e[c].classList.remove("hide")):(e[l].classList.add(s),e[l].classList.remove("hide"))):e===n&&(i(l,n.length),document.documentElement.clientWidth>=576?(e[l].parentElement.classList.add(s),e[l].parentElement.classList.remove("hide"),e[l].parentElement.style.order="-1",e[c].parentElement.classList.remove("hide"),e[c].parentElement.style.order="0"):(e[l].parentElement.classList.add(s),e[l].parentElement.classList.remove("hide")))},u=(e,l,s)=>{e===t?(i(l,t.length),document.documentElement.clientWidth>=576?(e[o].classList.remove("hide"),e[o].style.order="-2",e[l].classList.remove("hide"),e[l].style.order="-1",e[c].classList.add(s),e[c].classList.remove("hide")):(e[l].classList.add(s),e[l].classList.remove("hide"))):e===n&&(i(l,n.length),document.documentElement.clientWidth>=576?(e[l].parentElement.classList.remove("hide"),e[l].parentElement.style.order="-1",e[c].parentElement.classList.add(s),e[c].parentElement.classList.remove("hide"),e[c].parentElement.style.order="0"):(e[l].parentElement.classList.add(s),e[l].parentElement.classList.remove("hide")))};l.forEach((e=>{e.addEventListener("click",(e=>{e.currentTarget.classList.contains("benefits__arrow")&&(t.forEach((e=>{e.classList.add("hide"),e.classList.remove("flipInX"),e.style.order=""})),e.target.closest(".benefits__arrow--right")?(a>=t.length-1&&(a=-1),a++,u(t,a,"flipInX")):e.target.closest(".benefits__arrow--left")&&(a<1&&(a=t.length),a--,m(t,a,"flipInX")))}))})),r.forEach((e=>{e.addEventListener("click",(e=>{e.currentTarget.classList.contains("services__arrow")&&(n.forEach((e=>{e.parentElement.classList.add("hide"),e.parentElement.classList.remove("flipInX"),e.parentElement.style.order=""})),e.target.closest(".services__arrow--right")?(d>=n.length-1&&(d=-1),d++,u(n,d,"flipInX")):e.target.closest(".services__arrow--left")&&(d<1&&(d=n.length),d--,m(n,d,"flipInX")))}))})),document.documentElement.clientWidth<576&&(a=0,t[a+1].classList.add("hide"),t[a+2].classList.add("hide"),e.style.justifyContent="center",n[d+1].parentElement.classList.add("hide"),s.style.justifyContent="center")})(),(e=>{const t=document.querySelectorAll(".timer-days"),l=document.querySelectorAll(".timer-hours"),s=document.querySelectorAll(".timer-minutes"),n=document.querySelectorAll(".timer-seconds");let r;const o=()=>{let o=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();o.timeRemaining<=0?clearInterval(r):((o.days<10||o.hours<10||o.minutes<10||o.seconds<10)&&(e=>{for(let t in e)"timeRemaining"!==e[t]&&e[t]<10&&(e[t]="0"+e[t])})(o),t.forEach((e=>{e.textContent=o.days})),l.forEach((e=>{e.textContent=o.hours})),s.forEach((e=>{e.textContent=o.minutes})),n.forEach((e=>{e.textContent=o.seconds})))};o(),r=setInterval(o,1e3)})("20 january 2024"),(()=>{const e=document.querySelector(".smooth-scroll"),t=document.getElementById("offer");window.addEventListener("scroll",(()=>{t.getBoundingClientRect().bottom<0?e.style.right="25px":e.style.right="-100px"})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))})(),(()=>{const e=document.getElementById("calc"),t=document.getElementById("calc-type"),l=document.getElementById("calc-type-material"),s=document.getElementById("calc-input"),n=document.getElementById("calc-total");e.addEventListener("input",(e=>{e.target!==t&&e.target!==l&&e.target!==s||(()=>{const e=+t.options[t.selectedIndex].value,r=+l.options[l.selectedIndex].value,o=s.value;let c=0;c=t.value&&s.value?Math.floor(e*r*o):0,n.value=c})()}))})()})();