
/*
 * Complete the 'findSubstring' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function findSubstring(s, k) {
    var s1=s.toString();
    var le=s.length;
    var result=[];

    for(var iter=0;iter<le;iter++){
        for(var iter2=iter;iter2<le+1;iter2++){
            a=s1.slice(iter,iter2);
            if(a.length==k){
                result.push(VowelsCOunt(a));
            }
        }   
        
    }
    const ma=Math.max.apply(Math, result.map(function(o) { return o.count; }))
    result.
    forEach(n => {   
        if(n.count==ma)
        {
            console.log(n.subString);
        }
     
    });

}

// Counting Vowels in SubString
 function VowelsCOunt(subString){
     var count=0;
      for(var j=0;j<subString.length;j++){
                if(subString.charAt(j) == "a" || subString.charAt(j) == "e" || subString.charAt(j) == "i" || subString.charAt(j) == "o" || subString.charAt(j) == "u"){
                      count=count+1;
                    }    
        }
     return {count,subString};
 }
findSubstring('azedrii',5);
