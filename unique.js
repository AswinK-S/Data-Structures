function unique(array){

    for(let i=0; i<array.length-1; i++){
        flag=0;
        for(let j=i+1; j<array.length;j++){
            if(array[i]===array[j])
            {
                flag=1
                break
            }
        if(flag == 1)
        {
           continue
        }
        else{
            console.log(array[i])
        }
        }

    }

}


