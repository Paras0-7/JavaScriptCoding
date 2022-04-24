// In object-oriented programming, it is sometimes useful to have private shared state among all 
// instances of a class; in other languages, like ruby, this shared state would be tracked with a 
// class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

// In this kata, I want you to write make a Cat constructor that takes arguments name and weight to 
// instantiate a new cat object. The constructor should also have an averageWeight method that returns 
// the average weight of cats created with the constructor.



export let Cat = (function () {
   
     let cats = {
       count: 0,
       totalWeight:0,
       avgWeight:0
     }
     
     function CatConstructor(name,weight){
       if(!name || !weight){
         throw new Error('Both name and weight should be provided');
       }
       
       cats.count++;
       this.name = name;
       
       Object.defineProperty(this, 'weight',{
         get:function(){
            // console.log("Inside get")
           return this._weight || 0;
         },
         set:function(val){
            //  console.log("Inside set")
           cats.totalWeight = cats.totalWeight -this.weight + val;
           cats.avgWeight = cats.totalWeight / cats.count;
           
           return this._weight = val;
         }
       })
       this.weight = weight;
     }
     
     CatConstructor.averageWeight = function(){
       return cats.avgWeight;
     }
     
     return CatConstructor;
   }());