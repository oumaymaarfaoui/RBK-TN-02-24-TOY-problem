

//  *

//  * Write a function `f(a, b)` which takes two strings as arguments and returns a

//  * string containing the characters found in both strings (without duplication), in the

//  * order that they appeared in `a`. Remember to skip spaces and characters you

//  * have already encountered!

//  *

//  * Example: commonCharacters('acexivou', 'aegihobu')

//  * Returns: 'aeiou'

//  * Should return null or empty string of there is no commonCharacters


var commonCharacters=function(string1, string2) {
    var res=[]
    var s=[]
    var common=""
    for(var i=0; i<string1.length; i++) {
        for(var j=0; j<string2.length; j++) {
            if(string1[i]===string2[j]) {
                res.push(string1[i])
            }
        }
    }
    for(var z=0; z<res.length; z++) {
        if(!s.includes(res[z])){
            s.push(res[z])
        }
    }
    for(var y=0; y<s.length; y++) {
        common=common+s[y]
    }
    return common
    
}