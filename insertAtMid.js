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

    getSize(){
        return this.size;
    }

    append(value){
        let node = new Node(value);

        if(this.size === 0){
            this.head = node;
            this.size++;
            return
        }
        let curr = this.head;

        while (curr.next){
            curr= curr.next;
        }
        curr.next=node;
        this.size++
        return
    }
    
    insertAtMid(x){
        let node = new Node(x)
        if(this.size===0){
            console.log('empty')
            return
        }
        if(this.size===1){
        this.head = node;
        this.size++;
        return;
        }
        let curr=this.head;
        let prev=null;
        let mid =Math.floor(this.size/2);
        let count=0;

        while(count<mid){
            prev = curr;
            curr =curr.next;
            count++;
        }
        node.next=prev.next;
        prev.next=node;
        this.size++;
        return
    }

    display(){
        console.log('linkedlist');
        let current = this.head;
        let values=""
        if(this.size==0){
            return 
        }
      while(current){
        values += current.value +" ";
        current=current.next;
      }
    console.log(values)
    }
}


let list = new linkedList();
list.append(10)
list.append(10)
list.insertAtMid(8)
list.display()


