const titleTips = {
  "night": [
    "晚上了，内卷的同时也要注意保养身体哦！",
    "你吃晚饭了吗",
    "晚安"
  ],
  "midnight": [
    "快给我去睡觉(#`O′)",
    "再不睡觉，你的身体迟早要垮掉(#`O′)",
    "夜深了，内卷的同时也要注意保养身体哦！",
    "人家好困啊~ 你还不去睡觉吗……",
    "不要为了一个彩蛋就不睡觉哦",
    "天都要亮啦！快去补补觉！"
  ],
  "morning": [
    "又是元气满满的一天呢！",
    "醒醒，太阳晒屁股啦！",
    "今天的任务是什么呢？"
  ],
  "afternoon": [
    "下午来喽~",
    "你吃午饭了吗",
    "时光飞逝，不知不觉已经到下午了呢！"
  ]
}

const pageHead = {
  data() {
    return {
      titleTip: (()=>{
        let hour = new Date().getHours()
        if(hour>=18 && hour<=21){
          return titleTips["night"][Math.floor(Math.random()*titleTips["night"].length)]
        }
        if(hour>=22 && hour<=4){
           return titleTips["midnight"][Math.floor(Math.random()*titleTips["midnight"].length)]
        }
        if(hour>=5 && hour<=12){
          return titleTips["morning"][Math.floor(Math.random()*titleTips["morning"].length)]
        }
        if(hour>=13 && hour<=17){
          return titleTips["afternoon"][Math.floor(Math.random()*titleTips["afternoon"].length)]
        }
      })(),
      time: String(new Date().getHours())+':'+(new Date().getMinutes()<10?'0':'')+String(new Date().getMinutes()),
      timeIcon: new Date().getHours()>6&&new Date().getHours()<17?"🌞":"🌙"
    }
  },
  mounted(){
    setInterval(() => {
      this.titleTip = (()=>{
        let hour = new Date().getHours()
        if(hour>=18 && hour<=21){
          return titleTips["night"][Math.floor(Math.random()*titleTips["night"].length)]
        }
        if(hour>=22 && hour<=4){
           return titleTips["midnight"][Math.floor(Math.random()*titleTips["midnight"].length)]
        }
        if(hour>=5 && hour<=12){
          return titleTips["morning"][Math.floor(Math.random()*titleTips["morning"].length)]
        }
        if(hour>=13 && hour<=17){
          return titleTips["afternoon"][Math.floor(Math.random()*titleTips["afternoon"].length)]
        }
      })(),
      this.time = String(new Date().getHours())+':'+(new Date().getMinutes()<10?'0':'')+String(new Date().getMinutes())
      this.timeIcon= new Date().getHours()>6&&new Date().getHours()<17?"🌞":"🌙"
    }, 10*1000)
  },
  template: `
  <div id="title">
    <p class="time">{{ time }} {{ timeIcon }}</p>
    <p class="titleTip">{{ titleTip }}</p>
  </div>
  `,
}


export default pageHead