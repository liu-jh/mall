import Toast from './Toast.vue'
const obj = {}

obj.install = function(Vue){
  //创建toast组件构造器
  const toastConstructor = Vue.extend(Toast)
  //在内存中创建toast组件
  const toast = new toastConstructor()
  //在内存中创建div，并把toast组件挂载到div
  toast.$mount(document.createElement('div'))
  //将已挂载toast组件的div添加到body
  document.body.appendChild(toast.$el)
  //将新建的toast组件添加到Vue原型
  Vue.prototype.$toast = toast
}

export default obj
