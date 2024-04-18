const readline = require('readline');
const Lista = require("./Lista")

class Menu {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.list=new Lista()
  }

  mostrarMenu() {
    console.log("======= Menú =======");
    console.log("1. Reiniciar");
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
        console.log("Se reinicio la aplicación.");
        this.list.reiniciar();
        this.mostrarMenu();
        this.rl.question("Seleciona otra opcion que deseas: ",(opcion)=>{
          opcion = parseInt(opcion);
          if(isNaN (opcion)||opcion<1||opcion>8){
            this.rl.close();
          }else{
            this.ejecutarOpcion(opcion);
          }
        })
        
        break;
      case 2:
        console.log("Mostrando datos.");
        this.list.mostrar();

        this.mostrarMenu();
        this.rl.question("Selecciona la opcion que deseas: ",(opcion)=>{
          opcion = parseInt(opcion);
          if(isNaN(opcion)|| opcion < 1 || opcion > 8){
            this.rl.close();
          }else{
            this.ejecutarOpcion(opcion);
          }
        })
        break;
      case 3:
        console.log("Buscando información.");
        this.rl.question("¿Mostrar lista al derecho o al revez? (d/r) ", v => {
          resp=this.list.buscar(v)
          console.log(resp.valor)

          this.mostrarMenu();
          this.rl.question("Seleciona la opcion que deseas: ",(opcion)=>{
            opcion = parseInt(opcion);
            if(isNaN(opcion)||opcion<1||opcion>8){
              this.rl.close();
            }else{
              this.ejecutarOpcion(opcion);
            }
          })
        })
        break;
      case 4:
        console.log("Ingresa el valor a insertar")
        this.rl.question("Valor: ",(valor)=>{
          this.list.insertar(valor);
          console.log(`Nuevo valor insertado a la lista: ${valor}`)

          this.mostrarMenu();
          this.rl.question("Selecciona la opcion que deseas: ",(opcion)=>{
            opcion = parseInt(opcion);
            if(isNaN(opcion)|| opcion < 1 || opcion > 8){
              this.rl.close();
            }else{
              this.ejecutarOpcion(opcion);
            }
          })
        })
        break;
      case 5:
        console.log("Eliminando un dato.");
        this.rl.question("Valor: ",(valor)=>{
          this.list.eliminar(valor);
          console.log(`Valor elimando :c : ${valor}`);

          this.mostrarMenu();
          this.rl.question("Selecciona la opcion que deseas: ",(opcion)=>{
            opcion = parseInt(opcion);
            if(isNaN(opcion)|| opcion < 1 || opcion > 8){
              this.rl.close();
            }else{
              this.ejecutarOpcion(opcion);
            }
          })
        })

        break;
      case 6:
        console.log("Modificando un dato existente.");
        this.list.modificar();
        break;
      case 7:
        console.log("======= CREDITOS =======");
        console.log("Victor Emmanuel Cabello Rodriguez");
        console.log("Victor Isaias Castrejon Rodriguez");
        break;
      case 8:
        console.log("Saliendo de la aplicación.");
        this.rl.close();
        break;
      default:
        console.log("Opción no válida.");
    }
  }

  iniciar() {
    this.mostrarMenu();
    this.rl.question("Ingrese el número de la opción que desea: ", (opcion) => {
      
      opcion = parseInt(opcion);
      if(isNaN(opcion) || opcion < 1 || opcion > 8) {
        this.rl.close();
      }
      else {
        this.ejecutarOpcion(opcion);
        
      }
    });
  }
}


const menu = new Menu();
menu.iniciar();
