var height = 8; 
var width = 10;
var board = "";

for (var y = 0; y < height; y++) {   
  for (var x = 0; x < width; x++) {
    if ((x + y) % 2 == 0){
      board += " ";
    }
    else if(x%(width-1) == 0){
      board += "\n";
    }
    else{
      board += "#";
      }
   }
}

console.log(board);