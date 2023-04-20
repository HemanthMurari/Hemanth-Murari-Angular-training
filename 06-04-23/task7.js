function filterThis(candidateFilter,candidates)
{
    result=[]
    for( x of candidates)
        if(candidateFilter(x))
            result.push(x)
    return result 
}
candidates = [
    {sno:1,name:"Allagadda",score:56},
    {sno:2,name:"Naga",score:78},
    {sno:3,name:"Hemanth",score:99},
    {sno:4,name:"Murari",score:13},
    {sno:5,name:"Dedalus",score:88},]
result=filterThis(function(candidate){
        if(candidate.score>70)
          return true
        return false  
},candidates)
console.log(result)