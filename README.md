> vue-router实现webApp切换效果

## 运行方法

``` 
# 安装依赖
npm install
# 浏览器打开localhost:8080
npm run dev

```

## 方案实现
### 记录页面前进后退的状态
要实现页面前进后台动画，首先必须知道页面状态（即是页面是进入下一页，还是后退），我们可以通过封装router.back方法记录回退状态，页面如果需要回退时，调用
```
$router.goback()
```

### 修改router/index.vue
```
// 增强原方法，好处是旧的业务模块不需要任何变动
Router.prototype.goback = function () {
  store.commit('changeIsBack', true)
  this.back(-1)
}

```

### 设置vuex的数据
```
const state = {
  isBack: false //flag
}
const mutations = {
  changeIsBack (state, flag) {
    state.isBack = flag // 改变flag
  }
}
export default {
  state,
  mutations
}


```
### 监听路由变化
使用嵌套路由的方式引入子页面，监听根路由的update钩子做相应操作。
```
beforeRouteUpdate (to, from, next) {
  // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
    let isBack = this.$store.state.routerState.isBack
   if (isBack) {
      this.transitionName = 'enter-right'
   } else {
      this.transitionName = 'enter-left'
   }
   // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
   this.$router.isBack = false
    next()
}
```
### 动画效果
通过transition执行动画
```
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
```
css代码
```
.enter-view {
  position: absolute;
  width:100%;
  transition: all 0.2s linear;
}
.enter-left-enter, .enter-right-leave-active {
  transform: translateX(100%);
}
.enter-left-leave-active, .enter-right-enter {
  transform: translateX(-100%);
}
```
