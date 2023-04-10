function filterThis(candidateFilter,student)
{
    result=[]
    for( x of student)
        if(candidateFilter(x))
            result.push(x)
    return result 
}
student = [
    {sno:1,name:"Allagadda",percentage:56},
    {sno:2,name:"Naga",percentage:78},
    {sno:3,name:"Hemanth",percentage:99},
    {sno:4,name:"Murari",percentage:13},
    {sno:5,name:"Dedalus",percentage:88},]
result=filterThis(function(candidate){
        if(candidate.percentage>70)
          return true
        return false  
},student)
console.log(result)