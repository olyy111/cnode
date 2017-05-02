<template>
  <header class="header">
    <slot name="left">
      <div class="item"></div>
    </slot>
    <h2 class="title">{{ title }}</h2>
    <slot name="right">
      <div class="item"></div>
    </slot>
  </header>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }

</script>
<style lang="stylus" scoped>
  .header {
    display: flex;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 10500;
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #ddd;
    .item {
      width: 50px;
    }
    .title {
      flex-grow: 1;
      overflow: hidden;
      padding: 0;
      margin: 0;
      text-align: center;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>
