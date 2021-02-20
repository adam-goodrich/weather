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
    let condition;
    if (cityData.weather[0].main == "Clouds") {
      condition = "cloud";
    } else if (cityData.weather[0].main == "Clear") {
      condition = "sunny";
    } else if (cityData.weather[0].main == "Snow") {
      condition = "snow";
    } else if (
      (cityData.weather[0].main == "Rain") |
      (cityData.weather[0].main == "Drizzle") |
      (cityData.weather[0].main == "Thunderstorm")
    ) {
      condition = "rain";
    } else {
      condition = "clear";
    }
    document.body.style.backgroundImage = `url("images/${condition}.gif")`;

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

    const weatherDescription = cityData.weather[0].description;
    const finalSentence = weatherDescription.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (letter) => letter.toUpperCase()
    );

    const DayNumber = d.getDate();
    let dateEnd = "th";
    if (
      (DayNumber == "10") |
      (DayNumber == "11") |
      (DayNumber == "12") |
      (DayNumber == "13")
    ) {
      dateEnd = "th";
    } else if (DayNumber[DayNumber.length - 1] == "1") {
      dateEnd = "st";
    } else if (DayNumber[DayNumber.length - 1] == "2") {
      dateEnd = "nd";
    } else if (DayNumber[DayNumber.length - 1] == "3") {
      dateEnd = "rd";
    } else {
      dateEnd = "th";
    }

    return `
    <h1>${cityData.name}</h1>
    <h2>${months[d.getMonth()]} ${DayNumber}${dateEnd}</h2>
    <p>Temp: ${Math.round(cityData.main.temp)}°F</p>
    <p>Feels Like: ${Math.round(cityData.main.feels_like)}°F</p>
    <p>${finalSentence}</p>
    <img class="icon" src="http://openweathermap.org/img/wn/${
      cityData.weather[0].icon
    }@2x.png">
    `;
  } catch (e) {
    document.body.style.backgroundImage = `url("images/error.gif")`;
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
    console.log(cityData);
    let condition;
    if (cityData.weather[0].main == "Clouds") {
      condition = "cloud";
    } else if (cityData.weather[0].main == "Clear") {
      condition = "sunny";
    } else if (cityData.weather[0].main == "Snow") {
      condition = "snow";
    } else if (
      (cityData.weather[0].main == "Rain") |
      (cityData.weather[0].main == "Drizzle") |
      (cityData.weather[0].main == "Thunderstorm")
    ) {
      condition = "rain";
    } else {
      condition = "clear";
    }
    document.body.style.backgroundImage = `url("images/${condition}.gif")`;

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

    const weatherDescription = cityData.weather[0].description;
    const finalSentence = weatherDescription.replace(
      /(^\w{1})|(\s+\w{1})/g,
      (letter) => letter.toUpperCase()
    );

    const DayNumber = d.getDate();
    let dateEnd = "th";
    if (
      (DayNumber == "10") |
      (DayNumber == "11") |
      (DayNumber == "12") |
      (DayNumber == "13")
    ) {
      dateEnd = "th";
    } else if (DayNumber[DayNumber.length - 1] == "1") {
      dateEnd = "st";
    } else if (DayNumber[DayNumber.length - 1] == "2") {
      dateEnd = "nd";
    } else if (DayNumber[DayNumber.length - 1] == "3") {
      dateEnd = "rd";
    } else {
      dateEnd = "th";
    }

    return `
    <h1>${cityData.name}</h1>
    <h2>${months[d.getMonth()]} ${DayNumber}${dateEnd}</h2>
    <p>Temp: ${Math.round(cityData.main.temp)}°C</p>
    <p>Feels Like: ${Math.round(cityData.main.feels_like)}°C</p>
    <p>${finalSentence}</p>
    <img class="icon" src="http://openweathermap.org/img/wn/${
      cityData.weather[0].icon
    }@2x.png">
    `;
  } catch (e) {
    document.body.style.backgroundImage = `url("images/error.gif")`;
  }
}

async function drawDataF(city, tempTypeBool) {
  const fahrenheitTrue = tempTypeBool;
  const info = document.createElement("div");
  info.classList.add("info");
  if (fahrenheitTrue) {
    result = await getTempF(city);
  } else {
    result = await getTempC(city);
  }
  if (result === undefined) {
    result = `
<h1>City Not Found</h1>
<p>Please Check Your Spelling And Try Again</p>`;
  }
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

const header = document.getElementById("header");
const headerContainer = document.createElement("div");
const toggleContainer = document.createElement("div");
toggleContainer.classList.add("headercontainer");
headerContainer.classList.add("headercontainer");
const content = document.getElementById("content");

const searchInputName = document.createElement("label");
searchInputName.classList.add("searchInputName");
searchInputName.innerHTML = "City Name:";
const search = document.createElement("input");
search.type = "text";
search.placeholder = "New York";
const submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
header.appendChild(headerContainer);
headerContainer.appendChild(searchInputName);
headerContainer.appendChild(search);
headerContainer.appendChild(submitButton);

const fDiv = document.createElement("div");
const cDiv = document.createElement("div");
const fChoice = document.createElement("input");
fChoice.type = "radio";
fChoice.id = "fahrenheit";
fChoice.name = "toggleSwitch";
fChoice.value = "fahrenheit";
fChoice.checked = true;
const fLabel = document.createElement("label");
fLabel.htmlfor = "fahrenheit";
fLabel.innerHTML = "Fahrenheit";
const cChoice = document.createElement("input");
cChoice.type = "radio";
cChoice.id = "celsius";
cChoice.name = "toggleSwitch";
cChoice.value = "celsius";
const cLabel = document.createElement("label");
cLabel.htmlfor = "celsius";
cLabel.innerHTML = "Celsius";

header.appendChild(toggleContainer);
toggleContainer.appendChild(fDiv);
toggleContainer.appendChild(cDiv);

fDiv.appendChild(fChoice);
fDiv.appendChild(fLabel);

cDiv.appendChild(cChoice);
cDiv.appendChild(cLabel);

let searchCity = "New York";

submitButton.addEventListener("click", () => {
  var radios = document.getElementsByName("toggleSwitch");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      if (radios[i].value == "fahrenheit") {
        checkedRadio = true;
      } else {
        checkedRadio = false;
      }
      break;
    }
  }
  searchCity = search.value;
  removeAllChildNodes(content);
  drawDataF(searchCity, checkedRadio);
});

var radios = document.getElementsByName("toggleSwitch");

for (var i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", () => {
    var radios = document.getElementsByName("toggleSwitch");
    console.log(search.value)
    if (search.value == "") {
      searchCity = "New York"
    } else {
      searchCity = search.value;
    }
    for (var i = 0, length = radios.length; i < length; i++) {

      if (radios[i].checked) {
        if (radios[i].value == "fahrenheit") {
          checkedRadio = true;
        } else {
          checkedRadio = false;
        }
        break;
      }
    }
    removeAllChildNodes(content);
    drawDataF(searchCity, checkedRadio);
  });
}

drawDataF(searchCity, true);
