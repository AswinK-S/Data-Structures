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


    // insertBefore(x,value){
    //     if(this.empty()){
    //         console.log('empty')
    //         return
    //     }
    
    //     let node = new Node(value);
    //     let p1 = this.head
    //     let p2 = null
    
    //     while(p1.value !== x){
    //         p2 = p1
    //         p1 = p1.next
    //     }
    //     node.next = p2.next
    //     p2.next = node
    //     this.size++
    // }

    
    insertBefore(x,value){
        let node = new Node(value);
        let curr = this.head
        let prev = null
        if(curr.value===x){
            node.next = curr
            this.head =node
            this.size++
            return
        }
        while(curr.next){
            if(curr.value===x){
            node.next=prev.next
            prev.next=node
            this.size++
            console.log('yes')
            return
        }
        prev=curr
        curr=curr.next
    }
    console.log('no')
    return 
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
console.log(list.getSize());

list.prepend(10);
list.prepend(0);
list.prepend(11);
list.append(101);
list.display();

list.insert(78,3);
list.display();

list.insertBefore(1,5)
list.display();
console.log(list.getSize());







