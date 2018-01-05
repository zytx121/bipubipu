<template>
  <div class="layout">
  <mu-back-top/>
    <div class="header">
      <mu-icon-button icon="menu" @click="toggle(true)"/>
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <div class="b-user" >
          <img src="../assets/image/avatar.jpg" width="100px">                                     
        </div>
        <mu-list @itemClick="docked ? '' : toggle()">
          <mu-list-item title="谱子搜索">
            <mu-icon slot="left" value="search"/>
          </mu-list-item>
          <mu-list-item title="佳作欣赏">
            <mu-icon slot="left" value="book"/>
          </mu-list-item>
          <mu-list-item title="求谱/上传">
            <mu-icon slot="left" value="send"/>
          </mu-list-item>
          <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        </mu-list>
      </mu-drawer>
      <div class="logo">
        bipubipu
      </div>
      <div class="login">
      <mu-icon-menu
        icon="more_vert"
        :anchorOrigin="leftTop"
        :targetOrigin="leftTop"
      >
        <mu-menu-item title="个人中心" />
        <mu-menu-item title="您的收藏" />
        <mu-menu-item title="设置"  />
        <mu-menu-item title="帮助" />
        <mu-menu-item title="退出" />
      </mu-icon-menu>    
      </div>
    </div>
    <div class="content">
      <div class="body">
        <img class="logo" src="../assets/image/logo.png" width="500px">
        <div class="links">
          <mu-flat-button color="black" label="Old Site" class="demo-raised-button" href="http://jefun.top/" target="_blank" />
          <mu-flat-button color="black" label="Github" class="demo-raised-button" href="https://github.com/zytx121/justice_eternal" target="_blank"/>
        </div>
      </div>

    </div>
    <div class="footer">
      <a href="http://www.miitbeian.gov.cn/">黔ICP备17010756号</a> © 2018 Created by zytx121
    </div>
    
  </div>

</template>
<script>
export default {
  data () {
    return {
      open: false,
      docked: true,
      leftTop: {horizontal: 'left', vertical: 'top'}

    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    }
  }
}
</script>
<style scoped>
.layout{
  min-height: 100vh;
  background-color: white;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  /*align-items: center;*/
  /*text-align: center;*/
}

.header{
}

.b-user img{
  margin-top: 10px;
  margin-left: 45px;
  border-radius: 50%;
}
.logo{
  font-size: 24px;
  color: black;
  display: inline-block;
  padding: 10px 20px;
}

.login{
  float: right;
  margin-right: 5px;
}

.content{
  width: 90%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
}


.body{
  /*background-color: white;*/
  border-radius: 5px;
  min-height: 500px;
}

.links {
  padding-top: 15px;
  text-align: center;
}

.demo-raised-button {
  margin: 12px;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>