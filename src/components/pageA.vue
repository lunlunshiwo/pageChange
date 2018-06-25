<template>
  <div>
    <div class="header">
      <div class="left" @click="goback">
        {{str}}
      </div>
      <div class="title">pageA</div>
      <router-link class="right"  to="/pageB">
        下一页
      </router-link>
    </div>
    <div>
      北京时间6月24日20时，2018年俄罗斯世界杯G组第二轮继续进行，英格兰6-1血洗巴拿马，提前一轮出线。凯恩上演帽子戏法，斯通斯梅开二度并造点，林加德造点后打进一记世界波。巴洛伊打进挽回颜面的进球。
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  data () {
    return {
      str: '<'
    }
  },
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>
