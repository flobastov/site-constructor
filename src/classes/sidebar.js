import {block} from "../utils";
import {TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector)
        this.update = update
        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    add(e) {
        e.preventDefault()
        const type = e.target.name
        const value = e.target.value.value
        const styles = e.target.styles.value

        const block = type === 'title'
            ? new TitleBlock(value, {styles})
            : new TextBlock(value, {styles})

        this.update(block)

        e.target.value.value = ''
        e.target.styles.value = ''

    }

    get template() {
        return [
            block('title'),
            block('text'),
        ].join('')
    }
}
