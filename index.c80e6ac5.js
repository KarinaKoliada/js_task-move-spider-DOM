var t=document.querySelector(".wall"),e=document.querySelector(".spider");t.addEventListener("click",function(i){var n=t.getBoundingClientRect(),c=e.getBoundingClientRect(),h=i.clientX-n.left-c.width/2,l=i.clientY-n.top-c.height/2;h=Math.max(0,Math.min(h,n.width-c.width)),l=Math.max(0,Math.min(l,n.height-c.height)),e.style.left="".concat(h,"px"),e.style.top="".concat(l,"px")});
//# sourceMappingURL=index.c80e6ac5.js.map
