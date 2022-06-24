// 食物类
class Food {
    element: HTMLElement
    // 获取页面中的food 元素
    constructor() {
        this.element = document.querySelector('#food')!
    }
    // X坐标
    get X() {
        return this.element.offsetLeft
    }
    // Y坐标
    get Y() {
        return this.element.offsetTop
    }
    // 坐标改变
    change() {
        let left = (Math.floor(Math.random() * 30)) * 10
        let top = (Math.floor(Math.random() * 30)) * 10
        this.element.style.top = top + 'px'
        this.element.style.left = left + 'px'
    }
}
export default Food