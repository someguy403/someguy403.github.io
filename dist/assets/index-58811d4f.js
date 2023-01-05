(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const f="/assets/goggles-svg-5c780966.svg",i="/assets/share-14a88147.svg";document.querySelector("#app").innerHTML=`
<section id="section-1" class="section flex">
<div class="wrapper flex">
  <img src="${f}" alt="Goggles" id="gogglesimg" />
  <div id="div1" class="flex">
    <h3>Hello!, I'm Goggles!</h3>
    <p>I'm a Web Developer &#128579;</p>
  </div>
</div>
<button id="linksbtn" class="btn flex">Links</button>
</section>
<section id="section-2" class="section flex">
<div class="wrapper flex">
  <nav id="links" class="flex">
    <a href="https://www.facebook.com/profile.php?id=100051292185304" target="_blank" class="flex">
      Facebook (Nguyễn Khoa)
      <span class="flex">
        <img src="${i}" alt="Share This" />
      </span>
    </a>
    <a href="https://github.com/someguy403" target="_blank" class="flex">
      Github (Goggles)
      <span class="flex">
        <img src="${i}" alt="Share This" />
      </span>
    </a>
    <a href="https://discordapp.com/users/799597159661699112" target="_blank" class="flex">
      Discord (Goggles)
      <span class="flex">
        <img src="${i}" alt="Share This" />
      </span>
    </a>
    <a href="https://steamcommunity.com/profiles/76561199015590832/" target="_blank" class="flex">
      Steam (Gogs)
      <span class="flex">
        <img src="${i}" alt="Share This" />
      </span>
    </a>
  </nav>
</div>
<button id="backbtn" class="btn flex">Back</button>
</section>
<button id="togglebtn" class="flex">
<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Button" clip-path="url(#clip0_1_17)">
    <g id="dark">
      <path
        id="Vector"
        d="M29.6788 4.04801C20.3306 8.67052 9.84937 18.756 5.45858 27.3006C-7.14725 51.954 2.76745 81.6501 28.1207 95.2374C36.6191 99.7198 37.7522 100 51.2078 100C64.3802 100 66.0799 99.7198 74.8615 95.3775C84.7762 90.6149 92.4246 83.1909 97.382 73.8058C102.198 64.4207 100.215 60.0784 92.7079 63.7203C74.2949 72.9654 51.2078 66.2417 41.4348 48.8723C37.6105 42.1487 37.044 39.7674 37.044 30.5224C37.044 21.2773 37.6105 18.756 41.5764 11.472C44.8341 5.16862 45.6839 2.64725 44.4092 1.38657C42.0013 -0.994718 38.8853 -0.434415 29.6788 4.04801Z"
        fill="var(--btn-color)"
      />
    </g>
    <g id="light">
      <path
        id="Vector_2"
        d="M46.5388 1.69888C46.0945 2.88681 45.9464 6.15362 46.2426 8.97495C46.5388 13.1327 47.2793 13.8752 50.3892 13.8752C53.7953 13.8752 54.0915 13.2812 54.0915 7.19305C54.0915 1.4019 53.6472 0.510954 50.6854 0.0654803C48.7602 -0.231502 47.1312 0.510954 46.5388 1.69888Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_3"
        d="M15.1433 14.9146C12.4776 17.5874 12.9219 19.6663 16.9204 23.3786C23.8807 29.9122 30.1006 23.6756 23.5845 16.6965C19.8822 12.6872 17.809 12.2418 15.1433 14.9146Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_4"
        d="M77.1938 16.6965C73.1954 20.8542 73.4915 25.6059 77.7862 26.1999C82.229 26.7939 88.5969 19.6663 86.5236 16.3995C84.0061 12.5387 81.0442 12.6872 77.1938 16.6965Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_5"
        d="M40.7632 27.0909C23.7326 34.8124 20.1784 55.7497 33.5067 68.3714C41.7999 76.0929 51.2777 77.4294 61.348 72.5292C70.2335 68.2229 74.8244 60.6499 74.8244 50.2555C74.8244 43.7219 73.9358 40.6036 71.1221 36.4458C64.4579 26.6454 50.9816 22.4876 40.7632 27.0909Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_6"
        d="M0.630283 47.8796C-1.29491 52.7798 1.22265 54.8587 7.7387 54.4132C13.3662 53.9678 14.1067 53.5223 14.1067 50.2555C14.1067 46.9887 13.3662 46.5432 7.7387 46.0977C3.14785 45.8007 1.22265 46.2462 0.630283 47.8796Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_7"
        d="M86.5236 47.8796C84.5984 52.7798 87.116 54.8587 93.632 54.4132C99.2595 53.9678 100 53.5223 100 50.2555C100 46.9887 99.2595 46.5432 93.632 46.0977C89.0412 45.8007 87.116 46.2462 86.5236 47.8796Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_8"
        d="M16.4761 77.5778C12.7738 81.4386 13.07 85.2994 17.0685 86.7843C20.3265 88.1207 26.9907 81.5871 26.3983 77.7263C25.8059 73.4201 20.4746 73.2716 16.4761 77.5778Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_9"
        d="M75.1205 75.0535C73.0473 76.9839 74.232 80.9931 77.6381 84.4084C84.3022 90.4966 90.5221 84.2599 84.4503 77.5778C81.0442 74.1626 77.0457 72.9746 75.1205 75.0535Z"
        fill="var(--btn-color)"
      />
      <path
        id="Vector_10"
        d="M46.5388 87.8237C46.0945 89.0117 45.9464 92.2785 46.2426 95.0998C46.5388 99.2575 47.2793 100 50.3892 100C53.7953 100 54.0915 99.406 54.0915 93.3179C54.0915 87.5267 53.6472 86.6358 50.6854 86.1903C48.7602 85.8933 47.1312 86.6358 46.5388 87.8237Z"
        fill="var(--btn-color)"
      />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_1_17">
      <rect width="100" height="100" fill="var(--btn-color)" />
    </clipPath>
  </defs>
</svg>
</button>
`;const r=document.querySelector("#app"),n=document.querySelector("#light"),a=document.querySelector("#dark"),y=document.querySelector("#togglebtn"),u=document.querySelector("#linksbtn"),m=document.querySelector("#backbtn"),C=document.querySelectorAll(".section");window.addEventListener("DOMContentLoaded",o=>{window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?r.setAttribute("data-theme","dark"):r.setAttribute("data-theme","light"),b(r.dataset.theme),r.dataset.theme==="dark"?(a.style.display="none",n.style.display="block"):r.dataset.theme==="light"&&(a.style.display="block",n.style.display="none")});document.readyState==="interactive"&&g();u.addEventListener("click",p);m.addEventListener("click",g);document.onkeydown=o=>{o.key==="ArrowDown"?p():o.key==="ArrowUp"&&g()};window.onresize=function(){const l=window.innerHeight;C.forEach(c=>{c.style.height=l})};y.addEventListener("click",()=>{const o=r.dataset.theme;o==="light"?(a.style.display="none",n.style.display="block",r.setAttribute("data-theme","dark")):o==="dark"&&(n.style.display="none",a.style.display="block",r.setAttribute("data-theme","light"));const l=r.dataset.theme;b(l)});function g(){window.scrollTo({top:0,behavior:"smooth"})}function p(){window.scrollTo({top:window.innerHeight,behavior:"smooth"})}const e=document.querySelector(":root");function b(o){o==="dark"?(e.style.setProperty("--body-bgc","#1c1c1c"),e.style.setProperty("--section-outline","white"),e.style.setProperty("--gogsi-border","white"),e.style.setProperty("--div1-bgc","grey"),e.style.setProperty("--btntogglebtn-bgc","#2b2a33"),e.style.setProperty("--links-border","white"),e.style.setProperty("--linkshover-border","white"),e.style.setProperty("--linkshover-color","#071a8c")):o==="light"?(e.style.setProperty("--body-bgc","#a9a9a9"),e.style.setProperty("--section-outline","rgba(0, 0, 0, 0.6)"),e.style.setProperty("--gogsi-border","rgba(0, 0, 0, 0.4)"),e.style.setProperty("--div1-bgc","rgba(240, 240, 240, 0.3)"),e.style.setProperty("--btntogglebtn-bgc","#6b6b6b"),e.style.setProperty("--links-border","black"),e.style.setProperty("--linkshover-border","rgba(35, 36, 42, 0.5)"),e.style.setProperty("--linkshover-color","#b1dae7")):console.error("Cannot Change Theme: Error!")}
