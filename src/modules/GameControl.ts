import Snake from './Snake'
import ScorePanel from './ScorePanel'
import Food from './Food'
// 游戏控制器
class GameControl {
    Food: Food
    ScorePanel: ScorePanel
    Snake: Snake
    // 存储用户的按键信息
    direction: String = ''
    // 控制蛇的生死
    isrun = true
    constructor() {
        this.Food = new Food
        this.ScorePanel = new ScorePanel
        this.Snake = new Snake
        this.init()
    }
    // 游戏初始化
    init() {
        // 获取游戏按键信息 
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }
    // 键盘事件的相应函数
    keydownHandler(event:KeyboardEvent) {
        this.direction = event.key
    }
    // 蛇移动的方法
    run() {
        let X = this.Snake.X
        let Y = this.Snake.Y
        // 判断方向
        switch(this.direction) {
            case "ArrowUp": 
                Y -= 10; break
            case "ArrowDown":
                Y += 10; break 
            case "ArrowRight":
                X += 10; break 
            case "ArrowLeft":
                X -= 10; break 
        }
         // 检测蛇是否吃到了食物
         this.checkEat(X, Y)
        // 更新🐍的位置
        try {  
            this.Snake.X = X
            this.Snake.Y = Y
        } catch (error:any) {
            this.isrun = false
            alert(error.message)
        }

        // 持续移动
        this.isrun && setTimeout(this.run.bind(this), 300 - (this.ScorePanel.level - 1) * 30);

       
    }
    // 检测蛇是否吃到食物的方法
    checkEat(X:number, Y:number) {
        if(X === this.Food.X && Y === this.Food.Y) {
            // 食物的位置更换
            this.Food.change()
            // 蛇身增长
            this.Snake.addsnake()
            // 分数增加
            this.ScorePanel.addScore()
        }
    }
}
export default GameControl