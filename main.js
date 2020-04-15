
let w = 20;
let h = 20;
let world = Array(h);
for(let i = 0; i < world.length; i ++){
  world[i] = Array(w);
  world[i].fill("O");
}

function tick(){
//  document.getElementById("conway").innerHTML = "<h2>Hello world!</h2>"
  
//  document.getElementById("conway").innerHTML = "h: " + world.length + ", h:" + world[0];  
  document.getElementById("conway").innerHTML = display(world);  
}

function display(world){
  let output = "";
  world.forEach(
    function(row){
      row.forEach(
        function(col){
          output += col; 
        }
      );
      output += "\n";
    }
  );

  return output;
}


