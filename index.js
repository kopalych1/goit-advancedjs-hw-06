import{a as p,S as f,i as c}from"./assets/vendor-Cce4fIue.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m="47934856-127240b78ee1c1893a576f39c";function g(t){var r="https://pixabay.com/api/?key="+m+"&q="+encodeURIComponent(t)+"&image_type=photo&orientation=horizontal&safesearch=true";return p.get(r).then(a=>a.data.hits).catch(a=>(console.error(a),[]))}const u=document.querySelector("ul.gallery"),d=document.querySelector("div.loader"),v=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(t){var r=t.webformatURL,a=t.largeImageURL,o=t.tags,e=t.likes,s=t.views,l=t.comments,y=t.downloads;return`
    <li class="gallery-item">
      <a href="${a}">
        <img src="${r}" alt="${o}" loading="lazy" />
      </a>
      <div class="gallery-stats">
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Likes</span>
          <span class="gallery-stats-value">${e}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Views</span>
          <span class="gallery-stats-value">${s}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Comments</span>
          <span class="gallery-stats-value">${l}</span>
        </div>
        <div class="gallery-stats-item">
          <span class="gallery-stats-label">Downloads</span>
          <span class="gallery-stats-value">${y}</span>
        </div>
      </div>
    </li>
  `}function b(){u.innerHTML=""}function L(){d.style.display="block"}function w(){d.style.display="none"}function q(t){const r=t.map(h).join("");u.insertAdjacentHTML("beforeend",r),v.refresh()}function n(){c.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"})}function I(){c.error({title:"Search string must not be empty",position:"topCenter"})}const i=document.querySelector("form.form");i.addEventListener("submit",t=>{t.preventDefault();var r=t.target.elements["search-text"].value.trim();if(r==""){I();return}console.debug("User query: "+r),L(),b(),g(r).then(a=>{a.length||n(),q(a)}).catch(()=>{n()}).finally(()=>{w()}),i.reset()});
//# sourceMappingURL=index.js.map
