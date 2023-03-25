async function getJSON(path) {

    const rawData = await fetch(path);
    const json = await rawData.json();

    return json;
}

export {getJSON};
//exports = { getJson };
// module.exports = { getJson, test };
