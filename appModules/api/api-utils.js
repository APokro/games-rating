async function getData(url) {
    try {
      const responce = await fetch(url);
      return responce.json();
    } catch (error) {
      console.log(error);
    }
}
module.exports = { getData};

function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
module.exports = { getData, getRandomGame }; 