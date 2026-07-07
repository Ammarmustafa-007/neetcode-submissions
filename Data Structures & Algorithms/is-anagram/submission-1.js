class Solution {
   isAnagram(s, t) {
    if (s.length !== t.length){
        return false ;
    }
    let freqchk = new Map();
    
    for (let char of s){
        var currentcount = freqchk.get(char) || 0 ;

       freqchk.set(char , currentcount+1 );
    }

    for (let char of t){
     
     currentcount = (freqchk.get (char) || 0)-1;
     freqchk.set (char , currentcount);

     if (currentcount < 0) {
            return false;
        }
      }
      return true ;
       }
}
