class Nodo{
    
    constructor(dato){
        this.dato=dato
        this.sig=this.ant=null
    }


    getDato(){
        return this.dato
    }
    setDato(dato){
        this.dato=dato
    }

    getSig(){
        return this.dato
    }
    setSig(sig){
        this.sig=sig
    }

    getAnt(){
        return this.ant
    }
    setDato(ant){
        this.ant=ant
    }
}
module.exports=Nodo