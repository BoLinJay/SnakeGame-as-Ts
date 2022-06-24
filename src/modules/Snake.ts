// 蛇本身类
class Snake {
    // 蛇头
    head: HTMLElement
    // 蛇神
    snakebodys: HTMLCollection
    // 蛇的容器
    element: HTMLElement
    constructor() {
        this.head = document.querySelector('#snake>div')!
        this.element = document.getElementById('snake')!
        this.snakebodys = this.element.getElementsByTagName('div')
    }
    // 获取蛇的头部坐标
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    // 设置蛇头的坐标
    set X(left: number) {
        // 位置没变不在执行
        if(this.X === left) return;
        // 判断是否撞墙
        if( left < 0 || left > 290) {
            throw new Error('Game Over！！！')
        }
        // 判断是否掉头
        if(this.snakebodys[1] && (this.snakebodys[1] as HTMLElement).offsetLeft === left) {
            if(left > this.X) {
                left = this.X - 10 
            } else {
                left = this.X + 10
            }
        }
        this.moveBodys()
        this.head.style.left = left + 'px' 
         // 检查有没有撞到自己
         this.checkHeadBody()
    }
    set Y(top:number) {
        // 位置没变不在执行
        if(this.Y === top) return;
         // 判断是否撞墙
         if( top < 0 || top > 290) {
            throw new Error('Game Over！！！')
        }
        // 判断是否掉头
        if(this.snakebodys[1] && (this.snakebodys[1] as HTMLElement).offsetTop === top) {
            if(top > this.Y) {
                top = this.Y - 10 
            } else {
                top = this.Y + 10
            }
        }
        this.moveBodys()
        this.head.style.top = top + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    // 蛇的身体增加方法
    addsnake() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
    // 蛇身体的移动
    moveBodys() {
        for(let i=this.snakebodys.length-1; i>0; i--) {
            // 获取前面身体的位置
            let X = (this.snakebodys[i-1] as HTMLElement).offsetLeft;
            let Y = (this.snakebodys[i-1] as HTMLElement).offsetTop;
            // 设置后面身体的位置
            (this.snakebodys[i] as HTMLElement).style.left = X + 'px';
            (this.snakebodys[i] as HTMLElement).style.top = Y + 'px';
        }
    }
      // 检查蛇头是否撞到身体的方法
      checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.snakebodys.length; i++) {
            let bd = this.snakebodys[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！Game Over！！！ ');
            }
        }
    }
}

export default Snake