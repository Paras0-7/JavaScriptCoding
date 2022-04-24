
// Write a function which partitions a list of items based on a given predicate.
// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] 
// where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).
// NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) 
// should be preserved relative to each other.
// For convenience and utility, the partition function should return the boundary index. 
// In other words: the index of the first T value in items.

function partitionOn(pred, items) {
  
  
    let arr = items.map(function(item,index){
      
      return pred(item);
   
      
    })
    
    let predTrue=[];
    let predFalse=[];
    arr.forEach(function(value,index){
      if(value){
        predTrue.push(items[index]);
      }
      else{
        predFalse.push(items[index]);
        
      }
    });
    
    
    items.length=0;
    items.push(...predFalse,...predTrue);
    
    return predFalse.length;
    
  }