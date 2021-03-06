class Pac {
  constructor(xpos, ypos, direction, stage ) {
      this.xpos = xpos;
      this.ypos = ypos;
      this.direction = direction;
      this.stage = stage;
      this.mouth = true;
    }

    move(dir) {
        switch(dir){
            case 'right': 
                if (this.xpos <= this.stage.width - 2) {
                    this.xpos += 1;
                }
                break;
            case 'left':
                if (this.xpos >= 1) {
                    this.xpos -= 1;
                }
                break;
            case 'up':
                if (this.ypos >= 1) {
                    this.ypos -= 1;
                }
                break;
            case 'down':
                if (this.ypos <= this.stage.height - 2) {
                    this.ypos += 1;
                }
                break;
            }
            this.chomp();
            this.update();
        } 

    
        /*if (this.xpos >= this.stage.width){
            return false;
        } else if (this.xpos <= 0){
            return false;
        } else if (this.ypos >= this.stage.height){
            return false;
        } else if (this.ypos <= 0){
            return false;
        } else {
            return true;
        }
    }*/ 

    chomp() {
        if (this.mouth === true) {
            this.mouth = false;
        } else {
            this.mouth = true;
        }
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'pac'
        this.element.innerHTML = (
            `<div class="entity entity--pac pacboy-active-light"></div>`
        );

        document.addEventListener('keydown',() => {
            if (event.key === 'ArrowRight') {
                this.direction = 'right';
                this.move(this.direction);
            } else if (event.key === 'ArrowLeft') {
                this.direction = 'left';
                this.move(this.direction);
            } else if (event.key === 'ArrowUp') {
                this.direction = 'up';
                this.move(this.direction);
            } else if (event.key === 'ArrowDown') {
                this.direction = 'down';
                this.move(this.direction);
            }
        });

        this.update();

        return this.element;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    update() {
        const pacboyLight = this.element.querySelector('.pacboy-active-light');
        const pacboy = this.element.querySelector('.entity--pac');
        pacboy.style.left = `${this.xpos*TILE_SIZE}px`;
        pacboy.style.top = `${this.ypos*TILE_SIZE+8}px`; 

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