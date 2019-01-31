<template>
  <div>
    <el-container>
      <el-header style="margin:0;padding:0">
        <el-menu
            :default-active="$route.path"
            mode="horizontal"
            router
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-submenu index="/introduce">
                <template slot="title">灵饰</template>
                <el-submenu index="/introduce/g60">
                <template slot="title">60级</template>
                <el-menu-item index="/introduce/ring60">戒指</el-menu-item>
                <el-menu-item index="/introduce/earring60">耳饰</el-menu-item>
                <el-menu-item index="/introduce/bracelet60">手镯</el-menu-item>
                <el-menu-item index="/introduce/accessory60">配饰</el-menu-item>
                </el-submenu>

                <el-submenu index="/introduce/g80">
                <template slot="title">80级</template>
                <el-menu-item index="/introduce/ring80">戒指</el-menu-item>
                <el-menu-item index="/introduce/earring80">耳饰</el-menu-item>
                <el-menu-item index="/introduce/bracelet80">手镯</el-menu-item>
                <el-menu-item index="/introduce/accessory80">配饰</el-menu-item>
                </el-submenu>

                <el-submenu index="/introduce/g100">
                <template slot="title">100级</template>
                <el-menu-item index="/introduce/ring100">戒指</el-menu-item>
                <el-menu-item index="/introduce/earring100">耳饰</el-menu-item>
                <el-menu-item index="/introduce/bracelet100">手镯</el-menu-item>
                <el-menu-item index="/introduce/accessory100">配饰</el-menu-item>
                </el-submenu>

                <el-submenu index="/introduce/g120">
                <template slot="title">120级</template>
                <el-menu-item index="/introduce/ring120">戒指</el-menu-item>
                <el-menu-item index="/introduce/earring120">耳饰</el-menu-item>
                <el-menu-item index="/introduce/bracelet120">手镯</el-menu-item>
                <el-menu-item index="/introduce/accessory120">配饰</el-menu-item>
                </el-submenu>

                <el-submenu index="/introduce/g140">
                <template slot="title">140级</template>
                <el-menu-item index="/introduce/ring140">戒指</el-menu-item>
                <el-menu-item index="/introduce/earring140">耳饰</el-menu-item>
                <el-menu-item index="/introduce/bracelet140">手镯</el-menu-item>
                <el-menu-item index="/introduce/accessory140">配饰</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
      </el-header>
      <el-main style="margin:0;padding:0">
        <div class="centent">
            <div class="title">
              <h1> 欢迎来到梦幻西游灵饰专区 ！</h1>
              <span style="color:red">(点击右上角“灵饰”可查看详细介绍)</span>
            </div>
            <el-row :gutter="30" justify="center" type="flex">
              <el-col :span="6">
                <el-carousel height="200px">
                  <el-carousel-item>
                    <img src=".././assets/60-1.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/60-2.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/60-3.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/60-4.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                </el-carousel>
                <span style="font-weight:700">60级灵饰</span> 
              </el-col>
              <el-col :span="6">
                <el-carousel height="200px">
                  <el-carousel-item>
                    <img src=".././assets/80-1.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/80-2.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/80-3.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/80-4.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                </el-carousel> 
                <span style="font-weight:700">80级灵饰</span> 
              </el-col>
              <el-col :span="6">
                <el-carousel height="200px">
                  <el-carousel-item>
                    <img src=".././assets/100-1.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/100-2.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/100-3.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/100-4.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                </el-carousel> 
                <span style="font-weight:700">100级灵饰</span> 
              </el-col>
            </el-row>
            <el-row :gutter="50" justify="center" type="flex">
              <el-col :span="6">
                <el-carousel height="200px">
                  <el-carousel-item>
                    <img src=".././assets/120-1.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/120-2.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/120-3.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/120-4.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                </el-carousel>
                <span style="font-weight:700">120级灵饰</span>  
              </el-col>
              <el-col :span="6">
                <el-carousel height="200px">
                  <el-carousel-item>
                    <img src=".././assets/140-1.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/140-2.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/140-3.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                  <el-carousel-item>
                    <img src=".././assets/140-4.png" alt="" width="60%" height="80%">
                  </el-carousel-item>
                </el-carousel> 
                <span style="font-weight:700">140级灵饰</span> 
              </el-col>
            </el-row>
            <img src=".././assets/梦幻西游.png" alt="" width="10%" height="10%">
            <el-carousel :interval="1000" type="card" height="200px">
                <el-carousel-item>
                  <img src=".././assets/1.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/2.jpeg" alt="" width="60%" height="100%" >
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/3.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <!-- <el-carousel-item>
                  <img src=".././assets/4.jpg" alt="">
                </el-carousel-item> -->
                <el-carousel-item>
                  <img src=".././assets/5.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/6.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/7.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/8.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/9.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/10.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/11.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/12.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/13.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/14.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/15.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
                <el-carousel-item>
                  <img src=".././assets/16.jpg" alt="" width="60%" height="100%">
                </el-carousel-item>
            </el-carousel>
            <p>梦幻西游部分场景展示</p>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    data(){
      return { 
        addlist:'',
        items:[
            {
              list: '' 
            },
        ]   
    }
    },
    methods:{
      handleSelect(){
      }
    }
}
</script>

<style lang="less" scoped>
.centent{
  width: 100%;
  .title{
    padding-bottom: 50px;
    h1{
      margin-bottom:10px;
    }
    p{
      padding:0;
      margin:0;
    }
  }
  img{
    display: inline-block;
    margin-bottom:20px;
  }
  .el-row{
    margin-bottom: 30px;
  }
}
</style>

