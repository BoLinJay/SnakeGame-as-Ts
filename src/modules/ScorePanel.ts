// 分数和等级类
class ScorePanel {
    // score和level记录分数和登记
    score = 0
    level = 1
    scoreEle: HTMLElement
    levelEle: HTMLElement
    // 最高的等级
    maxLevel: number
    // 多少分升一级
    setLevel: number
    constructor(maxLevel = 10, setLevel = 10) {
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!
        this.maxLevel = maxLevel
        this.setLevel = setLevel
    }
    // 加分的方法
    addScore() {
         this.scoreEle.innerHTML = ++this.score + ''
         if(this.score % this.setLevel === 0) {
             this.addLevel()
         }
    }
    // 提升等级的方法
    addLevel() {
        if( this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}
export default ScorePanel