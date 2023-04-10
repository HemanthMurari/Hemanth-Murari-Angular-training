function filterThis(arrayFilter,array){
    result=[]
    for(let x of array)
        if(arrayFilter(x))
            result.push(x)
    return result        
}
fresult=filterThis(function(x){
    for(let i=2;i<=x;i++)
    {
        if(x%i==0)
            return false
        return true
    }
},[2,5,45,33,43,22,11,17,8,9,5,4,90])
console.log(fresult)
