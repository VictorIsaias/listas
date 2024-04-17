const Nodo=require('./Nodo.js')
class Lista{
    Lista() {
        this.p=new Nodo()
        this.f=new Nodo()
    }

    mostrar(){
        if(p==null){
            console.log("lista vacia")
        }
        else{
            if(p==f){
                console.log(p.dato)
            }
            else {
                resp=prompt("¿Mostrar lista al derecho o al revez? (d/r)")
                if(resp=="d"){
                    q=this.p
                    while(q!=null){
                        console.log(q.dato)
                        q=q.sig
                    }
                }else if(resp=="r"){
                    q=this.f
                    while(q!=null){
                        console.log(q.dato)
                        q=q.ant
                    }
                }
            }
        }
    }

    insertar(valor){
        if(this.p==null){
            this.p=new Nodo(valor)
        }
        else {
            var r=this.buscar(valor)
            var n=new Nodo(valor)
            n.sig=r
            n.ant=r.ant
            r.ant.sig=n
            r.ant=n
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
                while (r.sig!=null&&valor.localeCompare(r.sig.dato,'es')==-1){
                    r=r.sig
                }
            }else if(valor[0]>='m'){
                r=this.f
                while (valor.localeCompare(r.ant.dato,'es')==-1&&r.ant!=null){
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