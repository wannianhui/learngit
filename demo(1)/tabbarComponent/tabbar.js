// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
            "pagePath": "/pages/index/index",
            "iconPath": "icon/icon_home.png",
            "selectedIconPath": "icon/icon_home_HL.png",
            "text": "首页"
          },
          {
            "pagePath": "/pages/course/course",
            "iconPath": "icon/icon_release.png",
            "isSpecial": true
          },
          {
            "pagePath": "/pages/my/my",
            "iconPath": "icon/icon_mine.png",
            "selectedIconPath": "icon/icon_mine_HL.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
