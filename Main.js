const readline = require('readline');

class Menu {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  mostrarMenu() {
    console.log("======= Menú =======");
    console.log("1. Inicializar");
    console.log("2. Mostrar datos");
    console.log("3. Buscar información");
    console.log("4. Insertar nuevo dato");
    console.log("5. Eliminar dato");
    console.log("6. Modificar dato");
    console.log("7. Mostrar créditos");
    console.log("8. Salir");
    console.log("=====================");
  }

  ejecutarOpcion(opcion) {
    switch (opcion) {
      case 1:
        console.log("Inicializando la aplicación.");
        break;
      case 2:
        console.log("Mostrando datos.");
        break;
      case 3:
        console.log("Buscando información.");
        break;
      case 4:
        console.log("Insertando nuevo dato.");
        break;
      case 5:
        console.log("Eliminando un dato.");
        break;
      case 6:
        console.log("Modificando un dato existente.");
        break;
      case 7:
        console.log("======= CREDITOS =======");
        console.log("Victor Emmanuel Cabello Rodriguez");
        console.log("Victor Isaias Castrejon Rodriguez");
        break;
      case 8:
        console.log("Saliendo de la aplicación.");
        break;
      default:
        console.log("Opción no válida.");
    }
  }

  iniciar() {
    this.mostrarMenu();

    this.rl.question("Ingrese el número de la opción que desea: ", (opcion) => {
      opcion = parseInt(opcion);
      while(opcion =! 8){
        if (isNaN(opcion) || opcion < 1 || opcion > 8) {
            this.rl.close();
          }else{
            this.ejecutarOpcion(opcion);
            this.rl.question("Regresar al menu?")
            this.rl.close();
          }
      }
    });
  }
}

const menu = new Menu();
menu.iniciar();
