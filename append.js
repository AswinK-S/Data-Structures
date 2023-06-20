class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    empty(){
        return this.size ===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        let node = new Node(value);
        if(this.empty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

   

    append(value){
        let node = new Node(value);
        if(this.empty()){
            this.head = node;
        }

            let prev =this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        
        this.size++;
    }

    display(){
        if(this.empty()){
            console.log("empty");
        }
        else {
            let curr = this.head;
            let values ="";
            while (curr){
                values +=curr.value + " ";
                curr = curr.next;
            }
            console.log(values);
        }
    }
}

let list = new linkedList();

list.prepend(10);
list.prepend(0);
list.prepend(11);
list.append(101)
list.display()