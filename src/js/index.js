// let mouth = true;
// // true === open; false === closed;
// let xpos = 0;
// let ypos = 0;
// let direction = 'right';
const TILE_SIZE = 85;

// const move = () => {
//   if (event.key === 'ArrowRight') {
//     xpos += TILE_SIZE;
//     direction = 'right';
//   } else if (event.key === 'ArrowLeft') {
//     xpos -= TILE_SIZE;
//     direction = 'left';
//   } else if (event.key === 'ArrowUp') {
//     ypos -= TILE_SIZE;
//     direction = 'up';
//   } else if (event.key === 'ArrowDown') {
//     ypos += TILE_SIZE;
//     direction = 'down';
//   }  
//   chomp();
//   update();
// }

// const chomp = () => {
//   if (mouth === true) {
//     mouth = false;
//   } else {
//     mouth = true;
//   }
// }

// const update = () => {
//   const pacboyLight = document.querySelector('.pacboy-active-light');
//   const pacboy = document.querySelector('.entity--pac');
//   pacboy.style.left = `${xpos}px`;
//   pacboy.style.top = `${ypos}px`; 

//   if (mouth===true) {
//     pacboyLight.style.backgroundPositionX = 'right';
//   } else {
//     pacboyLight.style.backgroundPositionX = 'left';
//   };

//   if (direction === 'right') {
//     pacboyLight.style.backgroundPositionY = '0%';
//   } else if (direction === 'left') {
//     pacboyLight.style.backgroundPositionY = '33%';
//   } else if (direction === 'up') {
//     pacboyLight.style.backgroundPositionY = '99%';
//   } else if (direction === 'down') {
//     pacboyLight.style.backgroundPositionY = '66%';
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
  // update();
  
  const app = document.querySelector('#app');
  const stage = new Stage(7, 5);
  stage.mount(app);
  const stageapp = document.querySelector('.stage')
  const pac = new Pac(0, 0, 'right', stage);
  pac.mount(stageapp);
  const wall1 = new Entity(2, 0, 'wall');
  wall1.mount(stageapp);
  const wall2 = new Entity(2, 1, 'wall');
  wall2.mount(stageapp);
  const wall3 = new Entity(2, 2, 'wall');
  wall3.mount(stageapp);
  const wall4 = new Entity(3, 2, 'wall');
  wall4.mount(stageapp);
  const wall5 = new Entity(3, 3, 'wall');
  wall5.mount(stageapp);
  const wall6 = new Entity(5, 3, 'wall');
  wall6.mount(stageapp);
  const wall7 = new Entity(5, 4, 'wall');
  wall7.mount(stageapp);
  const wall8 = new Entity(0, 4, 'wall');
  wall8.mount(stageapp);
  const wall9 = new Entity(1, 4, 'wall');
  wall9.mount(stageapp);
  const apple1 = new Entity(2, 3, 'apple');
  apple1.mount(stageapp);
  const bomb1 = new Entity(4, 0, 'bomb');
  bomb1.mount(stageapp);
  
  
  // document.addEventListener('keydown',()=>{
  //     move()
  //     update();
  // });
});


