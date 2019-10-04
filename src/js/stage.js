class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
      }
    
      render() {
        this.element = document.createElement('div');
        //this.element.className = 'stage'
        this.element.innerHTML = (
            `<div class="stage"></div>`
        );

        this.update()
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    
    update(){
        const stage = this.element.querySelector ('.stage')
        stage.style.width = `${this.width * TILE_SIZE}px`;
        stage.style.height = `${this.height * TILE_SIZE}px`;
    }
}