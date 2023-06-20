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

   insert(value,index){
    if(index<0 || index>this.size){
        return;
    }
    if(index===0){
        this.prepend(value);
    }
    else{
        let node = new Node(value);
        let tempPointer = this.head;

        for(let i=0; i<index-1; i++){
             tempPointer =tempPointer.next;  
        }
        node.next = tempPointer.next;
        tempPointer.next =node ;
        this.size++;
    }
   }

    append(value){
        let node = new Node(value);
        if(this.empty()){
            this.head = node;
        }
        else{
            let prev =this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }



    insertAfter(x,value){
        let node =new Node(value);
        let pointer = this.head;
        while(pointer.value!=x){
            pointer = pointer.next;
        }
        node.next = pointer.next ;
        pointer.next=node;
        this.size++;
    
    }

    delete(value){
        if(this.empty())
        {
            console.log('empty');
            return
        }
        if(this.head.value===value){
            this.head=this.head.next;
            this.size--;
            return
        }
        let current=this.head;
        let prev=null;
        while (current){
            if(current.value === value){
                prev.next=current.next;
                this.size--;
                return
            }
            prev=current;
            current=current.next;
        }
        console.log('no data');
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
list.append(101);
list.insert(78,3);
list.insertAfter(11,7)
list.display();
list.delete(4);
list.display();

console.log(list.getSize());



