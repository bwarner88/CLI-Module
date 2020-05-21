import Vue from 'vue'
import AccuTermGUI from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const AccuTermGUIComponent = {
  install: function (Vue: any) {
    Vue.component('accuterm-gui', AccuTermGUI)
  }
}

export default AccuTermGUIComponent

// new Vue({
//   vuetify,
//   render: h => h(AccuTermGUI)
// }).$mount('#app')
