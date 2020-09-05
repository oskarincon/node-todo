const fs = require('fs');
var colors = require('colors');


let listTODO = [];

let saveData = () => {
    let data = JSON.stringify(listTODO);
    fs.writeFile('./db/data.json', data, (e) => {
        if (e) throw new Error("no se pudo", e)
    })

}

let cargarData = () => {
    try {
        listTODO = require('../db/data.json');
    } catch (e) {
        listTODO = [];
    }

}


let createTODO = (descripcion) => {
    cargarData();
    let todo = {
        descripcion,
        completed: false
    };
    listTODO.push(todo);
    saveData();

    return todo;
}

let getListTODO = () => {
    cargarData();
    return listTODO;
}

let updateTODO = (descripcion, completed) => {
    cargarData();
    let index = listTODO.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listTODO[index].completed = completed;
        saveData();
        return true;
    } else {
        return false;
    }
}

let deleteTODO = (descripcion) => {
    cargarData();
    let index = listTODO.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listTODO.splice(index, 1);
        saveData();
        return true;
    } else {
        return false;
    }
}



module.exports = {
    createTODO,
    getListTODO,
    updateTODO,
    deleteTODO
}