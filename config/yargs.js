const desc = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const comp = {
    alias: 'c',
    default: true,
    desc: 'marca completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion: desc
    })
    .command('actualizar', 'actualizar el estado completado de una tarear', {
        descripcion: desc,
        completado: comp
    })
    .command('borrar', 'borrar una tarea', {
        descripcion: desc
    })
    .help()
    .argv;

module.exports = {
    argv
}