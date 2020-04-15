
let w = 30;
let h = 20;
let world = Array(h);
for(let i = 0; i < world.length; i ++){
  world[i] = Array(w);
  world[i].fill("[ ]");
}
// seed
world[(Math.floor(h/2))][(Math.floor(w/2))] = "[0]";
world[(Math.floor(h/2))-1][(Math.floor(w/2))-1] = "[0]";
world[(Math.floor(h/2))+1][(Math.floor(w/2))+1] = "[0]";



function tick(){
//  document.getElementById("conway").innerHTML = "<h2>Hello world!</h2>"
//  document.getElementById("conway").innerHTML = "h: " + world.length + ", h:" + world[0];  
  // alert(neighborhood((Math.floor(w/2)),(Math.floor(h/2))));
  let world2 = copyworld(world);
  world2[(Math.floor(h/2))+1][(Math.floor(w/2))+2] = "[0]";
  document.getElementById("conway").innerHTML = display(world2);
}

function copyworld(world){
  return world.map(inner => inner.slice());
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

function neighborhood(w, h){
  let neighbors = [
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1]
  ];
  sum = 0;
  for(let i = 0; i < neighbors.length; i ++){
    // alert(neighbors[i][0]+","+neighbors[i][1]+":"+world[h+neighbors[i][0]][w+neighbors[i][1]])
    if(world[h+neighbors[i][0]][w+neighbors[i][1]] == "[0]"){
      sum += 1;
    }
  }
  return sum;
}


