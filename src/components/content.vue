<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<script>
</script>
<style lang="stylus" scoped>
  .content {
    overflow: auto;
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 50px;
    left: 0;
    z-index: 100;
    -webkit-overflow-scrolling : touch; 
  }
</style>
