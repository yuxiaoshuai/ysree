
// 封装dayjs

import dayjs from "dayjs";

class Ysday {

  constructor(date) {

    this.date = dayjs(date);

  }

  // 封装 Day.js - format 方法
  format(date_type) {

    return this.date.format(date_type);

  }

}

export { Ysday };
