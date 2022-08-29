export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx67e3a35edd3ec37f",
    // 公众号APP_SECRET
    APP_SECRET: "bd330cffe055f56f6320077438235e4e",
    // 模板消息id
    TEMPLATE_ID: "Uidcr4qEr-1_b2IKzhkhBHar0rT_0I_3tBHFcUi3-Uo",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["o_BJR6bGOXwQTBq34bWaSA9yy_PQ",:"o_BJR6YMe6kWwDE69VGPldsg4ozE"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "河北",
    // 所在城市
    CITY: "石家庄",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   /** BIRTHDAYS: [
      {"name": "老婆", "year": "1997", "date": "05-15"},
      {"name": "家公", "year": "1997", "date": "03-19"},
    ],*/

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "1997-08-19",
    // 结婚纪念日
    //MARRY_DATE: "2022-08-18",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
