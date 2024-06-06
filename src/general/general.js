
import { Day } from './day.js';
// 普通工具

class Util1 extends Day {

  constructor(_name = null) {
    
    super('day');

    this.util1Name = _name;
    this.util1Attribute = 'util1自定义属性值';

    this.dayPrintInfo();

    this.util1PrintInfo();

  }

  // Util1类 - 打印函数
  util1PrintInfo(_print_info) {

    return `调用子类打印方法——${this.util1Name}`;

  }

  // Util1类 - 获取父类<插槽函数>
  getDaySlot() {

    return 'run...';

    // super.daySlot();

  }

}

export { Util1 };