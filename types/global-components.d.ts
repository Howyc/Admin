import SvgIcon from "@/components/SvgIcon/index.vue"

/** 由 app.component 全局注册的组件需要在这里声明 TS 类型才能获得 Volar 插件提供的类型提示） */
//扩展 Vue 模块的类型定义
declare module "vue" {
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon
  }
}

// 在 TypeScript 中，如果一个文件没有导出任何内容，它被视为一个全局脚本，这可能会导致一些不期望的副作用。通过导出一个空对象，我们确保了这个文件被视为一个模块，从而避免了潜在的问题。
export {}
