function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=Array(r);n<r;n++)e[n]=t[n];return e}var r,n=function(r){if(Array.isArray(r))return t(r)}(r=document.documentElement.querySelectorAll("span"))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,n){if(r){if("string"==typeof r)return t(r,void 0);var e=Object.prototype.toString.call(r).slice(8,-1);if("Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),e=0,o=n.find(function(t){return"total-population"===t.getAttribute("class")}),i=n.find(function(t){return"average-population"===t.getAttribute("class")}),a=n.filter(function(t){if("population"===t.getAttribute("class"))return e+=+t.textContent.split(",").join(""),t}).length;o.textContent=e.toLocaleString("en-US"),i.textContent=(e/a).toLocaleString("en-US");
//# sourceMappingURL=index.61847dd7.js.map