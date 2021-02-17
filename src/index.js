console.log("Hello");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

async function getTempF(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=3665979cfe86d7791e40a7595465d684`,
      {
        mode: "cors",
      }
    );
    const cityData = await response.json();
    console.log(cityData);
    const d = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `
<h1>${cityData.name}</h1>
<h2>${months[d.getMonth()]} ${d.getDate()}</h2>
<p>Temp: ${Math.round(cityData.main.temp)}°F</p>
<p>Feels Like: ${Math.round(cityData.main.feels_like)}°F</p>
<p>${cityData.weather[0].description}</p>
<img class="icon" src="http://openweathermap.org/img/wn/${
      cityData.weather[0].icon
    }@2x.png">
`;
  } catch (e) {
    return `${city} not found`, e;
  }
}

async function getTempC(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3665979cfe86d7791e40a7595465d684`,
      {
        mode: "cors",
      }
    );
    const cityData = await response.json();
    var d = new Date();
    return `
<h1>${cityData.name}</h1>
<h2>${d.getDate()}</h2>
<p>The tempature is ${Math.round(cityData.main.temp)}°C</p>
<p>Feels Like: ${Math.round(cityData.main.feels_like)}°C</p>
<p>${cityData.weather[0].description}<p>
<img class="icon" src="http://openweathermap.org/img/wn/${
      cityData.weather[0].icon
    }@2x.png">
`;
  } catch (e) {
    console.log(`${city} not found`, e);
  }
}

async function drawDataF(city) {
  const info = document.createElement("div");
  info.classList.add("info");
  result = await getTempF(city);
  info.innerHTML = result;
  content.appendChild(info);
}

async function drawDataC(city) {
  const content = document.getElementById("content");
  const info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = await getTempC(city);
  content.appendChild(info);
}

const content = document.getElementById("content");

const header = document.getElementById("header");
const searchInputName = document.createElement("label");
searchInputName.innerHTML = "City Name";
const search = document.createElement("input");
search.type = "text";
const submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
header.appendChild(searchInputName);
header.appendChild(search);
header.appendChild(submitButton);

let searchCity = "Boston";

submitButton.addEventListener("click", () => {
  searchCity = search.value;
  removeAllChildNodes(content);
  drawDataF(searchCity);
});

drawDataF(searchCity);
