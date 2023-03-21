async function getJson(path) {

    const rawData = await fetch(path);
    const json = await rawData.json();

    return json;
}

export {getJson};
//exports = { getJson };
// module.exports = { getJson, test };
