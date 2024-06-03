
// 普通工具

class util1 {
  constructor(name_ = null) {
    this.name = name_;

    this.logName();
  }

  logName() {
    if(!this.name) {
      console.log('您没有传递参数');
      return
    }
    console.log(this.name);
  }
}

export { util1 };