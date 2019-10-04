class Pac {
  constructor(xpos, ypos, direction ) {
      this.xpos = xpos;
      this.ypos = ypos;
      this.direction = direction;
      this.mouth = true;
    }

    move(dir) {
      if (dir === 'ArrowRight') {
          this.xpos += TILE_SIZE;
          this.direction = 'right';
      } else if (dir === 'ArrowLeft') {
          this.xpos -= TILE_SIZE;
          this.direction = 'left';
      } else if (dir === 'ArrowUp') {
          this.ypos -= TILE_SIZE;
          this.direction = 'up';
      } else if (dir === 'ArrowDown') {
          this.ypos += TILE_SIZE;
          this.direction = 'down';
      }
      this.chomp();
      this.update();
    }

    chomp() {
        if (this.mouth === true) {
            this.mouth = false;
        } else {
            this.mouth = true;
        }
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'stage'
        this.element.innerHTML = (
            `<div class="entity entity--pac pacboy-active-light"></div>`
        );

        document.addEventListener('keydown',() => {
            let dir = event.key
            this.move(dir);
            this.update();
        });

        this.update;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    update() {
        const pacboyLight = this.element.querySelector('.pacboy-active-light');
        const pacboy = this.element.querySelector('.entity--pac');
        pacboy.style.left = `${this.xpos}px`;
        pacboy.style.top = `${this.ypos}px`; 

        if (this.mouth===true) {
            pacboyLight.style.backgroundPositionX = 'right';
        } else {
            pacboyLight.style.backgroundPositionX = 'left';
        };

        if (this.direction === 'right') {
            pacboyLight.style.backgroundPositionY = '0%';
        } else if (this.direction === 'left') {
            pacboyLight.style.backgroundPositionY = '33%';
        } else if (this.direction === 'up') {
            pacboyLight.style.backgroundPositionY = '99%';
        } else if (this.direction === 'down') {
            pacboyLight.style.backgroundPositionY = '66%';
        }
    }

}