const source = require('../public/source/criteria/');

function FileRead(path)
{
    let listCriteria = [];
    const fs = require('fs');
    fs.readFile(source + path, 'utf-8', (err, data) => {
        if (err) throw err;

        listCriteria.push(data);
    });
    return listCriteria;
}

export { FileRead };
