class Entity {
    constructor(xpos, ypos, type) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.type = type;
    }

    render() {
        this.element = document.createElement('div')
        this.element.innerHTML = (
            `<div class="entity entity--${this.type}"></div>`
        );
        const ent = this.element.querySelector(`.entity--${this.type}`);
        ent.style.left = `${this.xpos * TILE_SIZE}px`;
        ent.style.top = `${this.ypos * TILE_SIZE}px`;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }
}