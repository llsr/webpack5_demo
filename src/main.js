import "./assets/styles/style.css";
import './assets/styles/blue.scss';
import './echart'
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');

console.log('Interesting!')
function getComponent() {
    // Lodash, now imported by this script
    return import("lodash")
      .then(({ default: _ }) => {
        const element = document.createElement("div");
  
        element.innerHTML = _.join(["Hello", "webpack"], " ");
  
        return element;
      })
      .catch((error) => "An error occurred while loading the component");
  }
  
  const button = document.createElement("button");
  
  button.innerHTML = "Click me ";
  
  button.onclick = () => {
    getComponent().then((component) => {
      document.body.appendChild(component);
    });
  };
  
  document.body.appendChild(button);
  console.log(process.env)