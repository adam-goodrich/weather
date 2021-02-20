(()=>{function e(e){for(;e.firstChild;)e.removeChild(e.firstChild)}async function t(e,t){const n=t,a=document.createElement("div");a.id="gifDiv",a.classList.add("gifDiv"),i.appendChild(a);const r=document.createElement("div");r.classList.add("info"),result=n?await async function(e){try{document.body.style.backgroundImage='url("images/clear.gif")';const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=imperial&appid=3665979cfe86d7791e40a7595465d684`,{mode:"cors"}),n=await t.json();let a;console.log(n),a="Clouds"==n.weather[0].main?"cloud":"Clear"==n.weather[0].main?"sunny":"Snow"==n.weather[0].main?"snow":"Rain"==n.weather[0].main|"Drizzle"==n.weather[0].main|"Thunderstorm"==n.weather[0].main?"rain":"clear",document.getElementById("gifDiv").style.backgroundImage=`url("images/${a}.gif")`;const r=new Date,i=["January","February","March","April","May","June","July","August","September","October","November","December"],c=n.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g,(e=>e.toUpperCase())),d=r.getDate();let o="th";return o="10"==d|"11"==d|"12"==d|"13"==d?"th":"1"==d[d.length-1]?"st":"2"==d[d.length-1]?"nd":"3"==d[d.length-1]?"rd":"th",`\n    <h1>${n.name}</h1>\n    <h2>${i[r.getMonth()]} ${d}${o}</h2>\n    <p>Temp: ${Math.round(n.main.temp)}°F</p>\n    <p>Feels Like: ${Math.round(n.main.feels_like)}°F</p>\n    <p>${c}</p>\n    <img class="icon" src="http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">\n    `}catch(e){document.body.style.backgroundImage='url("images/error.gif")'}}(e):await async function(e){try{document.body.style.backgroundImage='url("images/clear.gif")';const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=3665979cfe86d7791e40a7595465d684`,{mode:"cors"}),n=await t.json();let a;console.log(n),a="Clouds"==n.weather[0].main?"cloud":"Clear"==n.weather[0].main?"sunny":"Snow"==n.weather[0].main?"snow":"Rain"==n.weather[0].main|"Drizzle"==n.weather[0].main|"Thunderstorm"==n.weather[0].main?"rain":"clear",document.getElementById("gifDiv").style.backgroundImage=`url("images/${a}.gif")`;const r=new Date,i=["January","February","March","April","May","June","July","August","September","October","November","December"],c=n.weather[0].description.replace(/(^\w{1})|(\s+\w{1})/g,(e=>e.toUpperCase())),d=r.getDate();let o="th";return o="10"==d|"11"==d|"12"==d|"13"==d?"th":"1"==d[d.length-1]?"st":"2"==d[d.length-1]?"nd":"3"==d[d.length-1]?"rd":"th",`\n    <h1>${n.name}</h1>\n    <h2>${i[r.getMonth()]} ${d}${o}</h2>\n    <p>Temp: ${Math.round(n.main.temp)}°C</p>\n    <p>Feels Like: ${Math.round(n.main.feels_like)}°C</p>\n    <p>${c}</p>\n    <img class="icon" src="http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">\n    `}catch(e){document.body.style.backgroundImage='url("images/error.gif")'}}(e),void 0===result&&(result="\n<h1>City Not Found</h1>\n<p>Please Check Your Spelling And Try Again</p>"),r.innerHTML=result,a.appendChild(r)}const n=document.getElementById("header"),a=document.createElement("div"),r=document.createElement("div");r.classList.add("headercontainer"),a.classList.add("headercontainer");const i=document.getElementById("content"),c=document.createElement("label");c.classList.add("searchInputName"),c.innerHTML="City Name:";const d=document.createElement("input");d.id="searchInput",d.type="text",d.placeholder="New York";const o=document.createElement("button");o.innerHTML="Submit",n.appendChild(a),a.appendChild(c),a.appendChild(d),a.appendChild(o);const l=document.createElement("div"),h=document.createElement("div"),m=document.createElement("input");m.type="radio",m.id="fahrenheit",m.name="toggleSwitch",m.value="fahrenheit",m.checked=!0;const s=document.createElement("label");s.htmlfor="fahrenheit",s.innerHTML="Fahrenheit";const u=document.createElement("input");u.type="radio",u.id="celsius",u.name="toggleSwitch",u.value="celsius";const p=document.createElement("label");p.htmlfor="celsius",p.innerHTML="Celsius",n.appendChild(r),r.appendChild(l),r.appendChild(h),l.appendChild(m),l.appendChild(s),h.appendChild(u),h.appendChild(p);let g="New York";o.addEventListener("click",(()=>{for(var n=document.getElementsByName("toggleSwitch"),a=0,r=n.length;a<r;a++)if(n[a].checked){"fahrenheit"==n[a].value?checkedRadio=!0:checkedRadio=!1;break}g=d.value,g=""==d.value?"New York":d.value,e(i),t(g,checkedRadio)})),d.addEventListener("keypress",(function(n){if("Enter"===n.key){for(var a=document.getElementsByName("toggleSwitch"),r=0,c=a.length;r<c;r++)if(a[r].checked){"fahrenheit"==a[r].value?checkedRadio=!0:checkedRadio=!1;break}g=d.value,g=""==d.value?"New York":d.value,e(i),t(g,checkedRadio)}}));for(var w=document.getElementsByName("toggleSwitch"),f=0;f<w.length;f++)w[f].addEventListener("change",(()=>{var n=document.getElementsByName("toggleSwitch");console.log(d.value),g=""==d.value?"New York":d.value;for(var a=0,r=n.length;a<r;a++)if(n[a].checked){"fahrenheit"==n[a].value?checkedRadio=!0:checkedRadio=!1;break}e(i),t(g,checkedRadio)}));t(g,!0)})();