const Nodo=require('./Nodo.js')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
class Lista{
    Lista() {
        this.p=new Nodo()
        this.f=new Nodo()
    }

    mostrar(){
        if(this.p==null){
            console.log("lista vacia")
        }
        else{
            if(this.p==this.f){
                console.log(p.dato)
            }
            else {
                var resp
                 rl.question("¿Mostrar lista al derecho o al revez? (d/r) ", l => {
                    resp=l
                    if(resp=="d"){
                        var q=this.p
                        while(q!=null){
                            console.log(q.dato)
                            q=q.sig
                        }
                    }else if(resp=="r"){
                        var q=this.f
                        while(q!=null){
                            console.log(q.dato)
                            q=q.ant
                        }
                    }
                    rl.close();
                  })

            }
        }
    }

    insertar(valor){

        var r=this.buscar(valor)
        if(r==null){
            this.f=this.p=new Nodo(valor)
            
        }
        else {
            var n=new Nodo(valor)

            if(valor.localeCompare(r.dato,'es')<1){

                n.sig=r

                if(r.ant==null){
                    this.p=n
                    n.ant=null
                }
                else{
                    n.ant=r.ant
                    r.ant.sig=n
                }
                r.ant=n
            }
            else {
                n.ant=r
    
                if(r.sig==null){
                    this.f=n
                    n.sig=null
                }else{
                    n.sig=r.sig
                    r.sig.ant=n
                }

                r.sig=n

            }
        }
    }

    eliminar(){

    }

    buscar(valor){
        if(this.p==null){
            return null
        }else{
            var r=new Nodo()
            if(valor[0]<='m'){
                r=this.p
                while (r.sig!=null&&valor.localeCompare(r.sig.dato,'es')==1){
                    r=r.sig
                }
            }else if(valor[0]>='m'){
                r=this.f
                while (r.ant!=null&&valor.localeCompare(r.ant.dato,'es')==-1){
                    r=r.ant
                }
            }
            return r
        }
    }

    reiniciar(){

    }

    modificar(){

    }
    

    
}
module.exports=Lista