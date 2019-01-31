<template>
    <div class="login">
        <div class="login-regin">
            <el-tabs type="card">
                <el-tab-pane label="登录">
                    <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1">
                        <el-form-item label="用户名/邮箱" prop="userName">
                            <el-input type="text" v-model="ruleForm1.userName" placeholder="请输入用户名或邮箱账号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="passWord">
                            <el-input type="password" v-model="ruleForm1.passWord" placeholder="请输入密码"></el-input>
                        </el-form-item>
                            <div class="checked"><el-checkbox v-model="checked">记住密码</el-checkbox></div>
                        <el-form-item>
                        <el-button type="primary" @click="login">登录</el-button>
                        </el-form-item>
                        <!-- <el-button>重置</el-button> -->
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册">
                    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2">
                        <el-form-item label="昵称" prop="nickName">
                        <el-input type="text" v-model="ruleForm2.nickName" placeholder="请输入昵称"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱账号" prop="email">
                        <el-input type="text" v-model="ruleForm2.email" placeholder="请输入邮箱账号"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="newPassWord">
                        <el-input type="password" v-model="ruleForm2.newPassWord" placeholder="请输入密码"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="confirmPassWord">
                        <el-input type="password" v-model="ruleForm2.confirmPassWord" placeholder="请再次输入密码确认"></el-input>
                        </el-form-item>
                        <el-form-item>
                        <el-button type="primary" @click="register">注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <div class="else-info">
                    <a href="#">忘记密码</a>|
                    <router-link to="/Introduce">游客登录</router-link>|
                    <a href="#">意见反馈</a>
                </div>
            </el-tabs>
        </div>
        
    </div>
    
</template>

<script>

    
export default {
   name:'login',
   data(){
       let validateUserName=(rule, value, callback)=>{
           if(this.$data.ruleForm1.userName==''||null == this.$data.ruleForm1.userName){
                callback('请输入用户名或邮箱账号');
           }else{
               if(this.$data.ruleForm1.userName=='liuyutao'){
                   callback();
               }else{
                   callback('用户名或邮箱账号不存在');
               }
           }
       };
       let validatePassWord=(rule, value, callback)=>{
            if(this.$data.ruleForm1.passWord==''||null == this.$data.ruleForm1.passWord){
               callback('请输入密码');
            }else{
               if(this.$data.ruleForm1.passWord=='liuyutao'){
                   callback();
               }else{
                   callback('密码错误');
               }
           }
       };
      let validatePass = (rule, value, callback) => {
        if (this.$data.ruleForm2.newPassWord == ''||null==this.$data.ruleForm2.newPassWord) {
          callback('请输入密码');
        } else {
          if (this.$data.ruleForm2.newPassWord !== '') {
            this.$refs.ruleForm2.validateField('newPassWord');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (this.$data.ruleForm2.confirmPassWord == ''||null == this.$data.ruleForm2.confirmPassWord) {
          callback('请再次输入密码');
        } else if (this.$data.ruleForm2.confirmPassWord!== this.$data.ruleForm2.newPassWord) {
          callback('两次输入密码不一致!');
        } else {
          callback();
        }
      };
    return {
       checked:false,
       ruleForm1:{
           userName:'',
           passWord:''
       },
       ruleForm2:{
           nickName:'',
           email:'',
           newPassWord:'',
           confirmPassWord:''
       },
       rules1:{
           userName:[
               {required:true,validator:validateUserName,trigger:'blur'}
           ],
           passWord:[
               {required:true,validator:validatePassWord,trigger:'blur'}
           ]
       },
       rules2:{
           nickName:[
               {required:true,message:'请输入昵称',trigger:'blur'},
               {min:1,max:10,message:'长度为1到10个字符',trigger:'blur'}
           ],
           email:[
               { required: true, message: '请输入邮箱地址', trigger: 'blur' },
               { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
           ],
           newPassWord:[
               {required:true,validator:validatePass,trigger:'blur'}
           ],
           confirmPassWord:[
                {required:true,validator: validatePass2,trigger:'blur'},
           ]
       }
    }
   },
   methods:{
      login(){
          this.$refs.ruleForm1.validate((valid) => {
          if (valid) {
            this.$router.push({path:'/Introduce'})
            // alert('submit!');
          } else {
            this.$message.error('登录失败')
            // console.log('error submit!!');
            return false;
          }
        })
      },
      register(){
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.$message.succcess('注册成功')
            this.$router.push({path:'.././views/Home.vue'})
            // alert('submit!');
          } else {
            this.$message.error('注册失败')
            // console.log('error submit!!');
            return false;
          }
        })
      }
   }
}
</script>

<style lang="less" scoped>
    .login-regin {
        .el-tabs{
            font-weight: 700;
            border-radius: 5px;
            // opacity: .7;
            .checked{
                text-align:left;
                padding:5px 0 10px;
            }
        }
        
      }
      .el-button {
        width: 100%;
      }
      .else-info {
        padding-top: 10px;
        font-size: 12px;
        text-align:right;
      }
</style>

