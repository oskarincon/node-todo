const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let task = todo.createTODO(argv.descripcion);
        console.log(task);
        break;
    case 'listar':
        let listado = todo.getListTODO();
        console.log('========  TODO  ========='.green);
        for (const i of listado) {
            console.log(`Descripcion: ${i.descripcion}`.blue);
            console.log(`Estado     : ${i.completed}`.blue);
        }
        console.log('========================='.green);
        break;
    case 'actualizar':
        let isUpdate = todo.updateTODO(argv.descripcion, argv.completado);
        console.log(isUpdate);
        break;
    case 'borrar':
        let isDelete = todo.deleteTODO(argv.descripcion);
        console.log(isDelete);
        break;
    default:
        console.log('comando no existe');
        break;
}