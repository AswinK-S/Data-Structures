class Node{
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

    empty(){
        return this.size === 0;
    }

    getsize(){
        return this.size;
    }

    prepend(value){

        let node = new Node(value);

        if(this.empty()){
            this.head= node;
        }
        else {
            node.next = this.head;
            this.head = node;

        }
        this.size++


    }


    
}

let list = new linkedList();

console.log(list.empty(),list.getsize());

list.prepend(10)
list.prepend(7)
list.prepend(6)

console.log(list.empty(), list.getsize());