import { createApp } from 'vue'
import App from './App.vue'

let instance = undefined

function render () {
  instance = createApp(App)
  instance.mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function mount(props) {
  render(props)
}

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

export async function unmount() {
  instance.unmount();
}


