
// 时间工具

class Day {

  constructor(_name = null) {

    this.dayName = _name;
    this.dayAttribute = 'day自定义属性值';

  }

  // Day类 - 打印函数
  dayPrintInfo(_print_info) {

    return `调用父类打印方法——${this.dayName}`;

  }

  // Day类 - 插槽函数
  daySlot() {
    return `DAY-SLOT`;
  }

}

export { Day };
