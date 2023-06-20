function unique(array){

    for(let i=0; i<array.length-1; i++){
        let flag=0;
        for(let j=0; j<array.length;j++){
            if(i!==j &&array[i]===array[j])
            {
                flag=1
                break
            }
        }
        if(flag === 0)
        {
            console.log(array[i])
        }
        
        }

    }

let array = [1,2,5,87,6,9,5,2,1]

unique(array)