let planets = [
    {name: "Меркурий", size: 2440, distance: 57.9, image: "img/mercury.png"},
    {name: "Венера", size: 6052, distance: 108.2, image: "img/venus.png"},
    {name: "Земля", size: 6378, distance: 149.6, image: "img/earth.png"},
    {name: "Марс", size: 3390, distance: 227.9, image: "img/mars.png"},
    {name: "Юпитер", size: 69911, distance: 778.3, image: "img/jupiter.png"},
    {name: "Сатурн", size: 58232, distance: 1429.4, image: "img/saturn.png"},
    {name: "Уран", size: 25362, distance: 2870.7, image: "img/uranus.png"},
    {name: "Нептун", size: 24622, distance: 4498.3, image: "img/neptune.png"}

];

function renderPlanets() {
    let container = document.getElementById("planetContainer");
    console.log(container);

    planets.forEach(planet => {
        let card = document.createElement("div");

        let image = document.createElement("img");
        image.src = planet.image;
        image.alt = planet.name;
        card.appendChild(image);

        let h2 = document.createElement("h2");
        h2.textContent = planet.name;
        card.appendChild(h2);

        let size = document.createElement("p");
        size.textContent = `Размер: ${planet.size} км`;
        card.appendChild(size);

        let distance = document.createElement("p");
        distance.textContent = `Расстояние: ${planet.distance} млн км`;
        card.appendChild(distance);

        container.appendChild(card);
    });
}

(setTimeout(function() {
    renderPlanets();
}, 100))


changeTheme = document.getElementById('changeTheme');
function theme(){
    document.body.classList.toggle('theme');
}

function filter(){
    let resultfilter = planets.filter(planet => planet.size > 10000);
    console.log(resultfilter)
}

function addPlanet(){
    let planet = {
        name: prompt("Напишите название планеты"),
        size: prompt("Задайте радиус планеты"),
        distance: prompt("Удалённость планеты от солнца (В миллионах километров)"),
        image: "img/planet.png"
    }
    if (planet.name && planet.size && planet.distance) {
        planets.push(planet);
        console.log(planets)
    }
    else {
        alert("All fields must be filled in!");
    }

}

