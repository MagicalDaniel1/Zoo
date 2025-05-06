(setTimeout(function() {
    document.body.style.opacity = "1";
    showQuote();
}, 100))

let planets = [
    {name: "Меркурий", image: "./materials/mercury.png", size: 2440, distance: 57.9, information: "Самая крошечная и ближайшая планета к солнцу"},
    {name: "Венера", image: "./materials/venus.png", size: 6052, distance: 108.2, information: "Венера дальше от солнца чем Меркурий, но горячее его"},
    {name: "Земля", image: "./materials/earth.png", size: 6378, distance: 149.6, information: "Только на нашей Земле найдена жидкая вода и жизнь"},
    {name: "Марс", image: "./materials/mars.png", size: 3390, distance: 227.9, information: "Имеется высочайшая гора в Солнечной системе \"Олимп\""},
    {name: "Юпитер", image: "./materials/jupiter.png", size: 69911, distance: 778.3, information: "Из-за скорости вращения день на Юпитере длится 10ч"},
    {name: "Сатурн", image: "./materials/saturn.png", size: 58232, distance: 1429.4, information: "У Сатурна более 140 спутников, крупнейший — Титан"},
    {name: "Уран", image: "./materials/uranus.png", size: 25362, distance: 2870.7, information: "Уран вращается «на боку» из-за своего сильного наклона"},
    {name: "Нептун", image: "./materials/neptune.png", size: 24622, distance: 4498.3, information: "Ветра на Нептуне сильны и достигают 2100 км/ч."}
];

let filteredPlanets = [];

const quotes = [
    {quote: "Я вижу Землю! Она такая красивая!", author: "Юрий Гагарин"},
    {quote: "Мы — способ, которым Вселенная познаёт себя.", author: "Карл Саган"},
    {quote: "Не стоит бояться смотреть в неизвестность. Ведь именно в ней скрываются удивительные открытия.", author: "Стивен Хокинг"},
    {quote: "Когда смотришь на Землю из космоса, не видишь границ между странами. Жаль, что мы не можем всегда смотреть друг на друга с такой высоты.", author: "Валентина Терешкова"},
    {quote: "Космос – это не просто место, куда можно отправиться. Это новое направление для человечества.", author: "Илон Маск"},
    {quote: "Для меня нет больше красоты, чем звёздное небо над головой.", author: "Исаак Ньютон"}
]

function changeTheme() {
    document.body.classList.toggle("transition");
    setTimeout(function () {
        document.body.classList.toggle("dark-theme");
    }, 1000)
    setTimeout(function () {
        document.body.classList.toggle("transition");
    }, 2000)
}

function showNearestPlanet() {
    document.getElementById("nearest-card").classList.toggle("opened-card");
    let sortedPlanets
    if (document.getElementById("filter").classList.contains("fa-filter")) {
        sortedPlanets = filteredPlanets;
        sortedPlanets.sort(function(a, b) {
            return a.distance - b.distance;
        });
    } else {
        sortedPlanets = planets;
        sortedPlanets.sort(function(a, b) {
            return a.distance - b.distance;
        });
    }
    document.getElementById("nearestPlanetName").textContent = sortedPlanets[0].name;
    document.getElementById("nearestPlanetImage").src = sortedPlanets[0].image;
}

function addPlanet() {
    let planet = {
        name: prompt("Напишите название планеты"),
        size: prompt("Задайте радиус планеты"),
        distance: prompt("Удалённость планеты от солнца (В миллионах километров)"),
        information: prompt("Информация о планете или интересный факт"),
        image: "./materials/planet.png"
    }
    if (planet.name && planet.size && planet.distance && planet.information) {
        planets.push(planet);
    } else {
        alert("А не соизволите заполнить все поля??");
    }
}

function filterBigPlanets() {
    document.getElementById("filter").classList.toggle("fa-filter");
    document.getElementById("filter").classList.toggle("fa-filter-circle-xmark");
    filteredPlanets = planets.filter(planets => planets.size > 10000)
}

function findPlanet() {
    let findPlanets = planets.find(planet => planet.name.toLowerCase() === document.getElementById("searchInput").value.toLowerCase());
    filteredPlanets = [findPlanets];
    displayPlanets(filteredPlanets);
    document.getElementById("searchInput").value = "";
}

function reducePlanets() {
    let reducedPlanets
    document.getElementById("planetContainer").innerHTML = "";
    if (document.getElementById("filter").classList.contains("fa-filter")) {
        reducedPlanets = filteredPlanets.reduce((acc) => acc + 1, 0);
    } else {
        reducedPlanets = planets.reduce((acc) => acc + 1, 0);
    }
    let planetCard = document.createElement('div');
    planetCard.classList.add('planet-spawn-position');
    planetCard.classList.add('planet-card');

    let h2 = document.createElement('h2');
    h2.classList.add('reduced-card-title');
    h2.textContent = `${reducedPlanets}`;
    planetCard.appendChild(h2);
    document.getElementById("planetContainer").appendChild(planetCard);
    setTimeout(function () {
        document.querySelector('.planet-spawn-position').classList.remove('planet-spawn-position');
    }, 400)

}

function showQuote() {
    document.getElementById("quoteField").classList.toggle("quote-spawn");
    let randomQuote = Math.floor(Math.random() * quotes.length);
    setTimeout(function(){
        document.getElementById("quoteField").textContent = `"${quotes[randomQuote].quote}" ©${quotes[randomQuote].author}`;
        document.getElementById("quoteField").classList.toggle("quote-spawn");
    }, 1000)
}

function showPlanets() {
    if (document.getElementById("filter").classList.contains("fa-filter")) {
        displayPlanets(filteredPlanets);
    } else {
        displayPlanets(planets);
    }
}

function displayPlanets(type) {
    document.getElementById("planetContainer").innerHTML = "";
    for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
        document.getElementsByClassName("button")[i].disabled = true;
    }
    type.forEach((planet, i) => {
        setTimeout(function () {
            let planetCard = document.createElement('div');
            planetCard.classList.add('planet-spawn-position');
            planetCard.classList.add('planet-card');

            let planetCardFront = document.createElement('div');
            planetCardFront.classList.add('planet-card-front');

            let img = document.createElement('img');
            img.src = `${planet.image}`;
            img.alt = `${planet.name}`;
            planetCardFront.appendChild(img);

            let h2 = document.createElement('h2');
            h2.classList.add('planet-name');
            h2.textContent = `${planet.name}`;
            planetCardFront.appendChild(h2);

            let planetCardBack = document.createElement('div');
            planetCardBack.classList.add('planet-card-back');
            let planetInformation = document.createElement('div');
            planetInformation.classList.add('planet-information');
            let p1 = document.createElement('p');
            p1.textContent = `Расстояние от солнца: ${planet.distance}млн км`;
            planetInformation.appendChild(p1);

            let p2 = document.createElement('p');
            p2.textContent = `Радиус: ${planet.size}км`;
            planetInformation.appendChild(p2);

            let p3 = document.createElement('p');
            p3.textContent = `${planet.information}`;
            planetInformation.appendChild(p3);

            planetCardBack.appendChild(planetInformation);
            planetCard.appendChild(planetCardFront);
            planetCard.appendChild(planetCardBack);
            document.getElementById("planetContainer").appendChild(planetCard);
        }, 300 * i)
    })
    planets.forEach((planet, i) => {
        setTimeout(function () {
            document.querySelector('.planet-spawn-position').classList.remove('planet-spawn-position');
        }, 300 * i + 100)
    })
    setTimeout(function () {
        for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
            document.getElementsByClassName("button")[i].disabled = false;
        }
    }, 310 * type.length);
}