let mouth = true;
let xpos = 0;
const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const update = () => {
    const pacboy = document.querySelector('.entity--pac');
    pacboy.style.left = `${xpos}px`;
  }
  document.addEventListener('keydown',()=>{
    const pacboylight=document.querySelector('.pacboy-active-light');
      if (event.key === 'ArrowRight'){
        if (mouth===true){
          pacboylight.style.backgroundPositionX = 'right';
          mouth=false;
        }
        else {
          pacboylight.style.backgroundPositionX = 'left';
          mouth=true;
        }
      xpos += TILE_SIZE;
      update();
      }
  })

});


