let str=["Naga","hemanth","Murari"]
let result=str.reduce(function(element1,element2){
          return element1+element2.length
    },0)
console.log(result)