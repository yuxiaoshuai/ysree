
// 普通工具

class Util1 {
  constructor(name_ = null) {
    this.name = name_;

    this.logName();
  }

  logName() {
    if(!this.name) {
      return '您没有传递参数';
    }
    
    return `您传入了${this.name}`;
  }
}

export { Util1 };