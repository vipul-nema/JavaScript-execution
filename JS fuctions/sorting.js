function InsertionSort(numbers){
    // iteration - iteration ; 
    for(let i =1; i<numbers.length; i++){
        let temp = numbers[i];
		let j;
        for(j=i; j>=0 && numbers[j-1] >temp; j--){
                numbers[j]= numbers[j-1];
        }
		numbers[j] = temp;
    }
    return numbers;
}



function InsertionSort (a){
    // iteration- recurtion;
    for ( let i = 1;i <a.length; i++){
        temp = a[i];
        let j = i;
        while(a[j-1]>temp && j>=0){
            a[j] = a[j-1];
			j--;
        }
        a[j] = temp;
    }
    return a;
}


// selection sort 

function selectionSort (a){  
    // find the min position in each iteration then swap;
    for (let i =0; i<a.length-1; i++){
        let min = i
        for(let j=i+1; j<a.length; j++){
             if(a[j]< a[min]){
                 min = j;
             }
        }
        let temp = a[i] ;
        a[i] = a[min];
        a[min] = temp;    

    }
    return a;
}

 