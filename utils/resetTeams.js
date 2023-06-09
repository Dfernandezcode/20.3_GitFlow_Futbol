const { Team } = require("../models/Team.js");

const teamList = [
  { teamName: "ATLÉTICO DE MADRID", foundedIn: 1903, originCity: "MADRID" },
  { teamName: "REAL MADRID", foundedIn: 1902, originCity: "MADRID" },
  { teamName: "FC BARCELONA", foundedIn: 1899, originCity: "BARCELONA" },
  { teamName: "PARIS SAINT GERMAIN", foundedIn: 1970, originCity: "PARIS" },
];

const resetTeams = async () => {
  try {
    await Team.collection.drop();
    console.log("Teams borrados correctamente");
    // Add
    const documents = teamList.map((team) => new Team(team));
    await Team.insertMany(documents);
    console.log("Teams creados correctamente!");
  } catch (error) {
    console.error("ERROR AL CONECTAR CON LA BBDD");
    console.error(error);
  }
};

module.exports = { resetTeams };
