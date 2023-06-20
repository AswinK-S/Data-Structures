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
        else{
            let prev =this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    delete(index){
        if(index <0 || index>this.size){
            console.log('invalid')
            return
        }
        if(this.head.next===null && index===0){
            this.head = null;
            return
        }
      else{
        let curr= this.head;
        let prev= null;
        let count=0;
        while(count!==index){
            prev =curr ;
            curr = curr.next;
            count++
        }
        prev.next=curr.next;
     }
        this.size--;
    }

    // delete(index){

    //     if(index <0 || index>this.size){
    //         console.log('invalid')
    //         return
    //     }
    
    //     let p1 = this.head;
    //     let p2 = null;
    
    //     for(let i=0; i<index-1; i++){
    //         p2 = p1;
    //         p1 = p1.next;
    //     }
    //     p1=p1.next;
    //     p2.next=p1;
    //     this.size--;
        
    // }


    
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
list.delete(2);
list.display()


