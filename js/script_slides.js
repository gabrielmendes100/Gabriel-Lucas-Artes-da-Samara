var wall_index = 1;
show_wall(wall_index);

function plus_walls(n){
 show_wall(wall_index += n);
}

function current_walls(n){
 show_wall(wall_index = n);
}

function show_wall(n){
 var i;
 var walls = document.getElementsByClassName("wall");
 var dots = document.getElementsByClassName("dot");

 if(n > walls.length){ wall_index = 1; }

 if(n < 1){ wall_index = walls.length; }

 for(i = 0; i < walls.length; i++){
  walls[i].style.display = "none"; 
 }

 for(i = 0; i < dots.length; i++){
  dots[i].className = dots[i].className.replace(" active", "");
 }

 walls[wall_index-1].style.display = "block";
 dots[wall_index-1].className += " active";

}