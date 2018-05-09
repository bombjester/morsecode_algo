 var uniqueMorseRepresentations = function(words) {
    var translated = [];
    function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
    }
 var translator = {a : ".-",
                      b : "-...",
                      c : "-.-.",
                      d : "-..", 
                      e : ".",
                      f : "..-.",
                      g : "--.",
                      h : "....", 
                      i : "..", 
                      j : ".---", 
                      k : "-.-", 
                      l : ".-..", 
                      m : "--", 
                      n : "-." , 
                      o : "---", 
                      p : ".--.", 
                      q : "--.-", 
                      r : ".-.", 
                      s : "...", 
                      t : "-" ,
                      u : "..-" , 
                      v : "...-", 
                      w : ".--" ,
                      x : "-..-" , 
                      y : "-.--",
                      z : "--.."};
    
  
    
    for (index in words){
        var word = words[index];
        var morse = "";
        for(letters in words[index]){
              for (var key in translator) {
                if (key == words[index][letters]){
                    morse += translator[key];
                }
            }
        }
        translated.push(morse);
    }
       return(removeDuplicates(translated).length);
};