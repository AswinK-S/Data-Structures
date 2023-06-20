class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }
}

const obj = new linkedList()

console.log(obj.isEmpty())
console.log(obj.getSize())