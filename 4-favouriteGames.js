const myGames = ['Red Dead Redemption 2','GTA V','Skyrim','Far Cry 3'];
const exportedGames = {}

for(let i = 0 ; i<myGames.length;i++){
    exportedGames[`game ${i+1}: `] = myGames[i];
}

module.exports = exportedGames;
