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
    return this.size === 0;
  }

  getSize(){
    return this.size;
  }

  prepend(value){
    let nodeObj = new Node(value);
    
    if(this.empty()){
        this.head = nodeObj; 
    }
    else {
        nodeObj.next = this.head;
        this.head = nodeObj;
    }
    this.size++;
  }

  display(){
    if (this.empty()){
        console.log("Linked list is empty");
    }
    else{
        let cur = this.head;
        let values ='';
        while(cur){
            // console.log(cur.value);
            values += cur.value+" ";
            cur  = cur.next;
        }
        console.log(values);
    }
  }
}

let list = new linkedList();
list.prepend(19);
list.prepend(1);
list.prepend(9);
list.prepend(12);

console.log(list.getSize());
list.display()
