(()=>{function e(e){for(;e.firstChild;)e.removeChild(e.firstChild)}async function t(e,t){const a=t,n=document.createElement("div");n.id="gifDiv",n.classList.add("gifDiv"),i.appendChild(n);const r=document.createElement("div");r.classList.add("info"),result=a?await async function(e){try{document.body.style.backgroundImage='url("images/clear.gif")';const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=imperial&appid=3665979cfe86d7791e40a7595465d684`,{mode:"cors"}),a=await t.json();let n;console.log(a),n="Clouds"==a.weather[0].main?"cloud":"Clear"==a.weather[0].main?"sunny":"Snow"==a.weather[0].main?"snow":"Rain"==a.weather[0].main|"Drizzle"==a.weather[0].main|"Thunderstorm"==a.weather[0].main?"rain":"clear",document.getElementById("gifDiv").style.backgroundImage=`url("images/${n}.gif")`;const r=new Date,i=["January","February","March","April","May","June","July","August","September","October","November","December"],c=a.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g,(e=>e.toUpperCase())),d=r.getDate();let o="th";return o="10"==d|"11"==d|"12"==d|"13"==d?"th":"23"==d?"rd":"21"==d|"31"==d?"st":"22"==d?"nd":"23"==d?"rd":"th",`\n    <h1>${a.name}</h1>\n    <h2>${i[r.getMonth()]} ${d}${o}</h2>\n    <p>Temp: ${Math.round(a.main.temp)}°F</p>\n    <p>Feels Like: ${Math.round(a.main.feels_like)}°F</p>\n    <p>${c}</p>\n    <img class="icon" src="https://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png">\n    `}catch(e){document.body.style.backgroundImage='url("images/error.gif")'}}(e):await async function(e){try{document.body.style.backgroundImage='url("images/clear.gif")';const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=3665979cfe86d7791e40a7595465d684`,{mode:"cors"}),a=await t.json();let n;console.log(a),n="Clouds"==a.weather[0].main?"cloud":"Clear"==a.weather[0].main?"sunny":"Snow"==a.weather[0].main?"snow":"Rain"==a.weather[0].main|"Drizzle"==a.weather[0].main|"Thunderstorm"==a.weather[0].main?"rain":"clear",document.getElementById("gifDiv").style.backgroundImage=`url("images/${n}.gif")`;const r=new Date,i=["January","February","March","April","May","June","July","August","September","October","November","December"],c=a.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g,(e=>e.toUpperCase())),d=r.getDate();let o="th";return o="10"==d|"11"==d|"12"==d|"13"==d?"th":"23"==d?"rd":"21"==d|"31"==d?"st":"22"==d?"nd":"23"==d?"rd":"th",`\n    <h1>${a.name}</h1>\n    <h2>${i[r.getMonth()]} ${d}${o}</h2>\n    <p>Temp: ${Math.round(a.main.temp)}°C</p>\n    <p>Feels Like: ${Math.round(a.main.feels_like)}°C</p>\n    <p>${c}</p>\n    <img class="icon" src="https://openweathermap.org/img/wn/${a.weather[0].icon}@2x.png">\n    `}catch(e){document.body.style.backgroundImage='url("images/error.gif")'}}(e),void 0===result&&(result="\n<h1>City Not Found</h1>\n<p>Please Check Your Spelling And Try Again</p>"),r.innerHTML=result,n.appendChild(r)}const a=document.getElementById("header"),n=document.createElement("div"),r=document.createElement("div");r.classList.add("headercontainer"),n.classList.add("headercontainer");const i=document.getElementById("content"),c=document.createElement("label");c.classList.add("searchInputName"),c.innerHTML="City Name:";const d=document.createElement("input");d.id="searchInput",d.type="text",d.placeholder="New York";const o=document.createElement("button");o.innerHTML="Submit",a.appendChild(n),n.appendChild(c),n.appendChild(d),n.appendChild(o);const l=document.createElement("div"),h=document.createElement("div"),m=document.createElement("input");m.type="radio",m.id="fahrenheit",m.name="toggleSwitch",m.value="fahrenheit",m.checked=!0;const s=document.createElement("label");s.htmlfor="fahrenheit",s.innerHTML="Fahrenheit";const u=document.createElement("input");u.type="radio",u.id="celsius",u.name="toggleSwitch",u.value="celsius";const p=document.createElement("label");p.htmlfor="celsius",p.innerHTML="Celsius",a.appendChild(r),r.appendChild(l),r.appendChild(h),l.appendChild(m),l.appendChild(s),h.appendChild(u),h.appendChild(p);let g="New York";o.addEventListener("click",(()=>{for(var a=document.getElementsByName("toggleSwitch"),n=0,r=a.length;n<r;n++)if(a[n].checked){"fahrenheit"==a[n].value?checkedRadio=!0:checkedRadio=!1;break}g=d.value,g=""==d.value?"New York":d.value,e(i),t(g,checkedRadio)})),d.addEventListener("keypress",(function(a){if("Enter"===a.key){for(var n=document.getElementsByName("toggleSwitch"),r=0,c=n.length;r<c;r++)if(n[r].checked){"fahrenheit"==n[r].value?checkedRadio=!0:checkedRadio=!1;break}g=d.value,g=""==d.value?"New York":d.value,e(i),t(g,checkedRadio)}}));for(var w=document.getElementsByName("toggleSwitch"),f=0;f<w.length;f++)w[f].addEventListener("change",(()=>{var a=document.getElementsByName("toggleSwitch");console.log(d.value),g=""==d.value?"New York":d.value;for(var n=0,r=a.length;n<r;n++)if(a[n].checked){"fahrenheit"==a[n].value?checkedRadio=!0:checkedRadio=!1;break}e(i),t(g,checkedRadio)}));t(g,!0)})();