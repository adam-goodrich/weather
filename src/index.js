console.log("Hello");



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
    return `The tempature is ${Math.round(cityData.main.temp)}℉ in ${
      cityData.name
    }. 
The local conditions are ${cityData.weather[0].main}`;
  } catch (e) {
    return `${city} not found`, e;
  }
};

async function getTempC(city) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3665979cfe86d7791e40a7595465d684`,
      {
        mode: "cors",
      }
    );
    const cityData = await response.json();
    return `The tempature is ${Math.round(cityData.main.temp)}°C in ${
      cityData.name
    }.
The local conditions are ${cityData.weather[0].description}`;
  } catch (e) {
    console.log(`${city} not found`, e);
  }
}

async function drawDataF(city) {
  const content = document.getElementById("content");
  const info = document.createElement("div");
  result = await getTempF(city)
  info.innerHTML = result
  content.appendChild(info)
}


async function drawDataC(city) {
  const content = document.getElementById("content");
  const info = document.createElement("div");
  info.innerHTML =  await getTempC(city)
  content.appendChild(info)
}

drawDataF("New York")



// getTempF("Boston");
// getTempC("Boston");

// getTempF("Orlando");
// getTempC("Orlando");

// getTempF("Poop Town");
