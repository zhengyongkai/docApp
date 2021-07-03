//https://juejin.cn/post/6906788973981466637

import { createApp } from "vue";
import rightMenu from "@/components/rightmenu.vue";
let menuVM = null;

/**
 * 将组件挂在到节点上
 * @param comp 需要挂载的组件
 * @param prop 向组件传的参数
 */
const creatComp = function(comp, prop) {
  // 创建组件
  const app = createApp(comp, {
    ...prop,
  });

  // 创建一个div元素
  const divEle = document.createElement("div");
  // 将创建的div元素挂载追加至body里
  divEle.id = 'show'
  divEle.style.top = prop.top
  divEle.style.position = 'absolute'
  divEle.style.left = prop.left;
  divEle.style.zIndex = 999;
  document.body.appendChild(divEle)
  // 将组件挂载至刚才创建的div中
  app.mount(divEle);
  return divEle;
};

export default {
  install(app) {
    // 监听全局点击，销毁右键菜单dom
    document.body.addEventListener("click", () => {
      if (menuVM != null) {
        // 销毁右键菜单DOM
        document.body.removeChild(menuVM);
        menuVM = null;
      }
    });
    // 创建指令
    app.directive("rightClick", (el, binding)=> {
      // 指令绑定元素元素是否存在判断
      if (el == null) {
        throw "右键指令错误：元素未绑定";
      }
    
      el.oncontextmenu = function(e) {
        if (menuVM != null) {
          // 销毁上次触发的右键菜单DOM
          document.body.removeChild(menuVM);
          menuVM = null;
        }
        const textArray = binding.value.text;
        const handlerObj = binding.value.handler;
        const parameter = binding.arg;
        // 菜单选项与事件处理函数是否存在
        if (textArray == null || handlerObj == null) {
          throw "右键菜单内容与事件处理函数为必传项";
        }
        // 事件处理数组
        const handlerArray = [];
        // 处理好的右键菜单
        const menuList = [];
        // 将事件处理函数放入数组中
        for (const key in handlerObj) {
          handlerArray.push(handlerObj[key]);
        }
        if (textArray.length !== handlerArray.length) {
          // 文本数量与事件处理不对等
          throw "右键菜单的每个选项，都必须有它的事件处理函数";
        }
        // 追加右键菜单数据
        for (let i = 0; i < textArray.length; i++) {
          // 右键菜单对象, 添加名称
          const menuObj = {
            text: textArray[i],
            handler: handlerArray[i],
            id: i + 1,
          };
          // 动态参数不为空则追加
          if (parameter != null) {
            menuObj.parameter = parameter;
          }
          menuList.push(menuObj);
        }
        // 鼠标点的坐标
        // console.log(e.)
        // console.log(el)
        // console.log(el.clientWidth )
        // console.log(e.pageX - el.offsetLeft)
        // const oX = e.clientX;
        // const oY = e.clientY;
        // 动态挂载组件，显示右键菜单
         creatComp(rightMenu, {
          display: "block",
          top: e.pageY - el.offsetTop + "px",
          left: e.pageX - el.offsetLeft + "px",
          rightMenuList: menuList,
        });
        return false;
      };
    });
  },
};
