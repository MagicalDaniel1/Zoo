class Animal {
    constructor(name, type, subtype) {
        this.name = name;
        this.type = type;
        this.subtype = subtype;
        this.energy = 5;
        this.mood = 5;
    }

    listen() {
        return `${this.name} ${(this.type)} you're hear: *noise*`
    }

    eat() {
        this.energy++;
    }

    pet() {
        this.mood++;
        this.energy -= 2;
    }
}

class Butterfly extends Animal {
    constructor(name, subtype) {
        super(name, "Butterfly", subtype);
    }

    listen() {
        return `You're hear from ${(this.type)} ${this.name}: *noise of fluttering*`
    }

    inFlight = false;
}

class Bug extends Animal {
    constructor(name) {
        super(name, "Bug");
    }

    listen() {
        return `You're hear from ${(this.type)} ${this.name}: *quiet sound*`
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name, "Bee");
    }

    listen() {
        return `You're hear from ${(this.type)} ${this.name}: *bzzzzhhhh...*`
    }
}

class Wasp extends Animal {
    constructor(name) {
        super(name, "Wasp");
    }

    listen() {
        return `You're hear from ${(this.type)} ${this.name}: *aggressive bzzzzhhhh...*`
    }
}

const zoo = [];
const zooDiv = document.getElementById("insect-jar-box");

function renderZoo() {
    zooDiv.innerHTML = "";
    zoo.forEach((animal, index) => {
        const card = document.createElement("div");
        card.className = "jar-card";
        card.classList.add(`${animal.subtype}`);
        if (animal.type === "Butterfly") {
            let srcImg = "butterfly_whiteBfly.png"
            if (animal.subtype !== 0) {
                srcImg = `butterfly_${animal.subtype}.png`
            }
            card.innerHTML = `
            <img class="jar" src="jar.png" alt="jar">
            <h2>${animal.name}</h2>
            <p>Energy: ${animal.energy}</p>
            <p>Mood: ${animal.mood}</p>
            <div class="insect-in-jar" id=${animal.subtype}>
                <img class="wing-1" src=${srcImg} alt="butterfly_wing">
                <img class="wing-2" src=${srcImg} alt="butterfly_wing">
            </div>
        `;
        } else {
            card.innerHTML = `
            <img class="jar" src="jar.png" alt="jar">
            <h2>${animal.name}</h2>
            <p>Energy: ${animal.energy}</p>
            <p>Mood: ${animal.mood}</p>
            <img class="insect-in-jar non-buttfly" src=${animal.type}.png alt="butterfly_wing">
        `;
        }
        let feedButton = document.createElement("button");
        feedButton.textContent = "Feed";
        feedButton.className = "feed-button";
        feedButton.onclick = () => {
            setTimeout(() => {
                animal.eat();
                renderZoo();
            }, 500);
        };

        const petButton = document.createElement("button");
        petButton.textContent = "Pet";
        feedButton.className = "pet-button";
        petButton.onclick = () => {
            setTimeout(() => {
                animal.pet();
                renderZoo();
            }, 500);
        };

        const listenButton = document.createElement("button");
        listenButton.textContent = "Listen";
        feedButton.className = "listen-button";
        listenButton.onclick = () => {
            setTimeout(() => {
                console.log(animal.listen());
                renderZoo();
            }, 500);
        };
        card.appendChild(listenButton);

        card.appendChild(feedButton);
        card.appendChild(petButton);
        zooDiv.appendChild(card);
    });
}

document.getElementById("addBtn").onclick = function() {
    const name = prompt("Enter animal name");
    const type = prompt("Enter animal type (Butterfly, Bug or Bee/Wasp)").toLowerCase();

    let animal;
    switch (type) {
        case "butterfly":
            animal = new Butterfly(name, "whiteBfly");
            break;
        case "bug":
            animal = new Bug(name, 0);
            break;
        case "bee":
            animal = new Bee(name, 0);
            break;
        case "wasp":
            animal = new Wasp(name, 0);
            break;
    }

    zoo.push(animal);
    renderZoo();
}

document.getElementById("loadBtn").onclick = () => {
    setTimeout(() => {
        let morfo = new Butterfly("Morfo", "morfo");
        let monarch = new Butterfly("Danaus plexippus", "monarch");
        let whiteBfly = new Butterfly("Pieris rapae", "whiteBfly");
        let pinkBfly = new Butterfly("Deilephila elpenor", "pinkBfly");
        let papiloMachaon = new Butterfly("Papilo Machaon", "papiloMachaon");
        let heliconius = new Butterfly("Heliconius chari...", "heliconius");

        const loadToZoo = [morfo, monarch, whiteBfly, pinkBfly, papiloMachaon, heliconius];

        zoo.push(...loadToZoo);

        renderZoo();
    }, 1000)
}