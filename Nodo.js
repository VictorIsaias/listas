class Nodo{
    nodo(dato){
        this.dato=dato
        this.sig=this.ant=null
    }
    nodo(){
        this.dato=null
        this.sig=this.ant=null
    }

    getDato(){
        return dato
    }
    setDato(dato){
        this.dato=dato
    }

    getSig(){
        return dato
    }
    setSig(sig){
        this.sig=sig
    }

    getAnt(){
        return ant
    }
    setDato(ant){
        this.ant=ant
    }
}
module.exports=Nodo