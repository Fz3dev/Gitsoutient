const red = document.getElementById("red");
const orange = document.getElementById("orange");
const green = document.getElementById("green");
console.log(green);

setInterval(() => {
  setTimeout(() => {
    red.classList.remove("red");
    green.classList.add("green");
  }, 4000);
  setTimeout(() => {
    green.classList.remove("green");
    orange.classList.add("orange");
  }, 8000);
  setTimeout(() => {
    orange.classList.remove("orange");
    red.classList.add("red");
  }, 10000);
}, 10000);

const SuperHeros = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};
