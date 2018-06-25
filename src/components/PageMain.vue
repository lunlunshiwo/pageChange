<template>
  <div>
    <div class="header"></div>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      transitionName: 'enter-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$store.state.routerState.isBack
    if (isBack) {
      this.transitionName = 'enter-right'
    } else {
      this.transitionName = 'enter-left'
    }
    this.changeIsBack(false)
    next()
  },
  methods: {
    ...mapMutations([
      'changeIsBack'
    ])
  }
}
</script>

<style scoped>
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.2s linear;
}
.enter-left-enter,
.enter-right-leave-active {
  transform: translate(100%, 0);
}
.enter-left-leave-active,
.enter-right-enter {
  transform: translate(-100%, 0);
}
.header {
  position: absolute;
  height: 44px;
  background: rgb(0, 0, 0);
  color: #fff;
  width: 100%;
}
</style>
