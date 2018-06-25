<template>
  <div>
    <div class="header">
      <div class="left" @click="goback">{{str}}</div>
      <div class="title">pageB</div>
    </div>
    <div>
      世界杯小组赛第一轮，英格兰2-1险胜突尼斯，巴拿马0-3惨败给比利时。本场比赛，英格兰若能够击败巴拿马，将提前晋级16强。本场比赛，英格兰中场阿里因伤缺阵，斯特林搭档凯恩出场。
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageB',
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
