
let w = 30;
let h = 20;
let world = Array(h);
for(let i = 0; i < world.length; i ++){
  world[i] = Array(w);
  world[i].fill("[ ]");
}
// seed
world[(Math.floor(h/2))][(Math.floor(w/2))] = "[0]";
// world[(Math.floor(h/2))-1][(Math.floor(w/2))-1] = "[0]";
world[(Math.floor(h/2))+1][(Math.floor(w/2))+1] = "[0]";
world[(Math.floor(h/2))+1][(Math.floor(w/2))+2] = "[0]";
world[(Math.floor(h/2))-1][(Math.floor(w/2))+1] = "[0]";
world[(Math.floor(h/2))+1][(Math.floor(w/2))] = "[0]";

let world2 = copyworld(world);


document.getElementById("conway").innerHTML = display(world);


function tick(){
//  document.getElementById("conway").innerHTML = "<h2>Hello world!</h2>"
//  document.getElementById("conway").innerHTML = "h: " + world.length + ", h:" + world[0];  
//  alert(neighborhood((Math.floor(w/2)),(Math.floor(h/2))));
  for(let i = 0; i < h; i++){
    for(let j = 0; j < w; j++){
      let neighborz = neighborhood(j,i);
      if(neighborz < 2){
        world2[i][j] = "[ ]";
      }
      if(neighborz >= 2 && neighborz <= 3 && world[j][i] != "[ ]"){
        world2[i][j] = "[0]";
      }
      if(neighborz == 3){
        world2[i][j] = "[0]";
      }        
      if(neighborz > 3){
        world2[i][j] = "[ ]";
      }
    }
  }
  world = copyworld(world2);
  document.getElementById("conway").innerHTML = display(world);
}

function copyworld(worldx){
  return worldx.map(inner => inner.slice());
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
    if(world[h+neighbors[i][0]] != undefined){
      if(world[h+neighbors[i][0]][w+neighbors[i][1]] != undefined){
        if(world[h+neighbors[i][0]][w+neighbors[i][1]] == "[0]"){
          sum += 1;
        }        
      }
    }
  }
  return sum;
}


