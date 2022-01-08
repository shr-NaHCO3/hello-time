const dataIO = {
  init: function(){//初始化
    if(! window.localStorage){
      return false
    }
  },
  clearData: function(){
    for(let i=0;i<window.localStorage.length;i++){
      window.localStorage.removeItem(window.localStorage.key(i))
    }
  },
  addTask: function(taskName, title, value, IsSubtask=false, rootTask=undefined, proportionMode='auto', proportion='-1'){
    /*
    * @function 写入任务
    * @param *taskname {string} 任务名
    * @param *title {string} 标题
    * @param *value {string} 内容
    * @param IsSubtask {bool} 是否为子任务
    * @param rootTask {string} 如果是子任务，父任务的名称
    * @param proportionMode {string} ['auto'|'manual']占比分配模式，auto自动，manual手动
    * @param proportion {number} (0.0~1.0) 如果占比模式为手动，任务占比
    */
    if(IsSubtask==true){
      // 生成子任务JSON
      let task = {
        type: "sub",
        name: taskName,
        title: title,
        value: value,
        finished: false,
        proportionMode: proportionMode,
        proportion: proportion
      }
      // 获取主任务JSON
      let root = JSON.parse(window.localStorage.getItem(rootTask))
      //拼接
      root.subTask.push(task)
      //储存
      window.localStorage.setItem(rootTask, JSON.stringify(root))
      return root
    }else{
      // 生成主任务JSON
      let task = {
        type: "root",
        title: title,
        value: value,
        finished: false,
        proportionMode: proportionMode,
        proportion: proportion,
        subTask: [],
      }
      // 储存
      window.localStorage.setItem(taskName, JSON.stringify(task))
      return task
    }
  },
  readTask: function(taskName){
    return JSON.parse(window.localStorage.getItem(taskName))
  },
  finishTask: function(taskName, isSubtask=false, roottaskName=undefined){
    if(isSubtask){
      let root = JSON.parse(window.localStorage.getItem(roottaskName))
      for(let i=0;i<root.subTask.length;i++){
        if(root.subTask[i].name == taskName){
          root.subTask[i].finished = true
        }
      }
      window.localStorage.setItem(roottaskName, JSON.stringify(root))
    }
    else{
      let root = JSON.parse(window.localStorage.getItem(taskName))
      for(let i=0;i<root.subTask.length;i++){
        if(root.subTask[i].finished == false){
          console.error('子任务没有全部完成！')
          return 'err'
          
        }
      }
      root.finished = true
      window.localStorage.setItem(taskName, JSON.stringify(root))      
    }
  },
  removeTask: function(taskName, isSubtask=false, roottaskName=undefined){
    if(isSubtask){
      let root = JSON.parse(window.localStorage.getItem(roottaskName))
      for(let i=0;i<root.subTask.length;i++){
        if(root.subTask[i].name == taskName){
          root.subTask.splice(i,1)
        }
      }
      window.localStorage.setItem(roottaskName, JSON.stringify(root))
    }
    else{
      window.localStorage.removeItem(taskName)
    }
  },
}



export default dataIO