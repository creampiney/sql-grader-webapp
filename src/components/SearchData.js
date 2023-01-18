import Data from "./json/data.json"

export function searchData(id) {
    var d = JSON.parse(JSON.stringify(Data));
    var results = [];
    for (let i = 0; i < d.length; i++) {
        if (d[i].id === id) {
            results.push(d[i])
        }

    }
    console.log(results);
    return results;
}

export function searchSubInData(dataObj, subid) {
    var results = [];
    for (let i = 0; i < dataObj.sub.length; i++) {
        if (dataObj.sub[i].id === subid) {
            results.push(dataObj.sub[i])
        }

    }
    console.log(results);
    return results;
}