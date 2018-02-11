<template>
  <footer class="footer">
    <div class="myicon">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-faxian"></use>
        </svg>
    </div>
      <div>发现音乐</div>
    </div>
    <div class="myicon">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-changpian"></use>
        </svg>
      </div>
      <div>我的音乐</div>
    </div>
    <div class="myicon">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-geshou"></use>
        </svg>
      </div>
      <div>朋友</div>
    </div>

    <div class="myicon">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shezhi"></use>
        </svg>
      </div>
      <div>账号</div>
    </div>
  </footer>
</template>
<script>
    export default{
        
    }
</script>
<style>
.footer{
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
}
.myicon{
  display: block;
  width: 25%;
  text-align: center;
}
</style>
