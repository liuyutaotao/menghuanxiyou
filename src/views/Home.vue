<template>
  <div class="enter-box">
    <el-container>
      <el-header>
        <img src=".././assets/logo1.png" alt="梦幻西游">
        <div class="login-page">
          <el-popover
            placement="right"
            title="灵饰"
            width="300"
            trigger="hover"
            content="灵饰为梦幻西游的角色装备，玩家角色可佩戴四个灵饰，分别为“戒指”、“耳饰”、“手镯”及“佩饰”。
            灵饰可为人物增加额外的属性，以平衡旧有战斗格局以及召唤兽进阶所带来的能力提升对整体战斗格局的影响。">
            <span slot="reference">灵饰专区</span>
          </el-popover>
        </div>
        <a href>基本版</a>|
        <a href>English</a>|
        <a href>手机版</a>|
        <a href>定制版</a>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="12">
            <div class="content-left">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="content-right">
              <login/>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <a href>关于游戏</a>
        <span>|</span>
        <a href>服务条款</a>
        <span>|</span>
        <a href>隐私政策</a>
        <span>|</span>
        <a href>客服中心</a>
        <span>|</span>
        <a href>联系我们</a>
        <span>|</span>
        <a href>帮助中心</a>
        <span>|</span>
        <span>© 2019 mhxy. All Rights Reserved.</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import login from '@/components/login.vue'

export default {
  name: 'enter',
  components: {
    login
  }
}

</script>
<style lang="less">
  a {
    display: inline-block;
    text-decoration: none;
    padding: 0 5px;
  }
  a:hover {
    text-decoration: underline;
    color: #fff;
  }
</style>

<style lang="less" scoped>

.enter-box {
  width: 100%;
  height: 100%;
  .el-header {
    line-height: 60px;
    text-align: right;
    padding-right: 20px;
    font-size: 14px;
    background-color: rgba(199, 173, 190, 0.7);
    position: relative;
    img {
      height: 60px;
      width: 150px;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.7;
    }
    .login-page {
      position: absolute;
      top: 5px;
      left: 160px;
      color: #f50;
      font-weight: 700;
      font-size:18px;
      font-family: serif;
    }
  }
  .el-main {
    background-image: url(".././assets/bg.jpg");
    background-size: cover;
    .content-left {
      padding: 20px 200px 20px 300px;
      text-align: left;
    }
    .content-right {
      margin: 50px 120px;
      padding: 20px;
      text-align: center;
      border: solid 1px #999;
      border-radius: 5px;
      background-color:rgba(200,200,200,.5);
    }
  }
  .el-footer {
    line-height: 60px;
    text-align: center;
    font-size: 12px;
    background-color: rgba(199, 173, 190, 0.7);
    span {
      color: #868686;
    }
  }
}
</style>

