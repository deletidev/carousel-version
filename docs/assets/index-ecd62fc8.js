(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.getElementById("header-background");document.getElementById("menu-line");document.getElementById("menu");let c={root:document.querySelector("#scrollArea"),rootMargin:"0px",threshold:[.5]},s=(n,l)=>{console.log(l),n.forEach(r=>{if(r.isIntersecting){r.target.classList.add("active"),r.target.dataset.color="purple";let o=document.querySelectorAll(".active");(o.length===3||o.length===4)&&(o[0].dataset.color="green",o[1].dataset.color="pink",o[2].dataset.color="purple",o[2].nextElementSibling.dataset.color="pink",o[2].nextElementSibling.nextElementSibling.dataset.color="green")}else r.target.classList.remove("active"),r.target.dataset.color="green"})},a=new IntersectionObserver(s,c),d=document.querySelectorAll(".carousel__item--grid");d.forEach(n=>{a.observe(n)});
