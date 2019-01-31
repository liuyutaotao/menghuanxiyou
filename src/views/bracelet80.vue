<template>
    <div class="ring">
        <div>
            <el-menu
                :default-active="$route.path"
                mode="horizontal"
                router
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/Introduce">灵饰</el-menu-item>
            </el-menu>
        </div>
        <div>
            <el-row>
                <el-col :span="6">
                    <div class="content-left">
                        <el-card :body-style="{ padding: '5px' }">
                            <img src=".././assets/80-4.png" width="100%" height="100%">
                            <div style="padding: 14px;">
                                <h4>翡玉镯</h4>
                                <div class="bottom clearfix">
                                <el-collapse >
                                    <el-collapse-item title="了解更多" name="1">
                                        <div class="more">
                                            <h4>基本介绍</h4>
                                            <p>属性：(16-24)物理伤害或物理防御。</p>
                                            <p>佩戴：人物等级≥80级，无角色性别要求，鼠标右键点击佩戴(超级简易可使要求降低15级)。</p>
                                            <p>获得方法：集齐灵饰指南书和元灵晶石，利用淬灵之术打造获得(和武器打造技巧类似)。</p>
                                            <h4>附加说明：</h4>
                                            <p>1、鉴定时有几率获得提高伤害(固定、法术或者物理)、速度、狂暴等级、物理暴击、法术暴击、封印命中、法术伤害结果、穿刺、治疗能力等额外属性(最多3个额外属性)。</p>
                                            <p>2、额外属性可以通过星辉石提高。</p>
                                        </div>   
                                    </el-collapse-item>
                                </el-collapse>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="content-right">
                        <div class="search">
                            <span>查询记录 :</span>
                            <el-input placeholder="请输入关键字" v-model="searchKey" @keyup.enter="search">
                                <!-- <el-select v-model="select" slot="prepend" placeholder="请选择">
                                    <el-option label="打造日期" value="1"></el-option>
                                    <el-option label="基础属性" value="2"></el-option>
                                    <el-option label="附加属性" value="3"></el-option>
                                    <el-option label="价格" value="4"></el-option>
                                </el-select> -->
                                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                            </el-input>
                        </div>
                        <div class="ringTable">
                            <div class="opration">
                                <el-button @click="add">添加</el-button>
                                <!-- <el-button @click="eidt">编辑</el-button>
                                <el-button @click="del">删除</el-button> -->
                            </div>
                            <div class="table-data">
                            <el-table
                                ref="table"
                                current-row-key
                                :data="tables"
                                @selection-change="handleSelectionChange"
                                header-align="center">
                                <el-table-column type="selection" width="55"></el-table-column>
                                <el-table-column prop="date" label="打造日期"></el-table-column>
                                <el-table-column prop="property" label="基础属性"></el-table-column>
                                <el-table-column prop="harm" label="附加属性"></el-table-column>
                                <el-table-column prop="price" label="价格"></el-table-column>
                                <el-table-column  label="操作" align="center" width="250">
                                    <template slot-scope="scope">
                                        <button @click="handleEdit(scope.$index, scope.row)">编辑</button>
                                        <button @click="handleDelete(scope.$index, scope.row)">删除</button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-dialog title="添加灵饰" :visible.sync="dialogFormVisible">
            <el-form :model="form" ref="formDialog" :rules="rules" label-width="120px" class="form-dialog">
                <el-form-item label="打造时间" prop="date">
                    <el-date-picker type="date" placeholder="请选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="基础属性" prop="property">
                    <el-select v-model="form.property" placeholder="请选择基础属性" style="width:100%">
                        <el-option label="防御" value="防御"></el-option>
                        <el-option label="伤害" value="伤害"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="附加属性" prop="harm">
                    <el-select v-model="form.harm" placeholder="请选择附加属性" style="width:100%">
                        <el-option label="法术伤害" value="法术伤害"></el-option>
                        <el-option label="法术暴击" value="法术暴击"></el-option>
                        <el-option label="物理伤害" value="物理伤害"></el-option>
                        <el-option label="物理暴击" value="物理暴击"></el-option>
                        <el-option label="封印等级" value="封印等级"></el-option>
                        <el-option label="伤害" value="伤害"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="form.price" placeholder="请输入价格"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="saveConfirm">确 定</el-button>
            </div>
        </el-dialog>         
    </div>
</template>
<script>
import Store from '.././store'
export default {
    data(){
        let validatePrice = (rule, value, callback)=>{
            let reg = /^[1-9]\d*$/
            let result = reg.test(this.$data.form.price)
            if(this.$data.form.price==''||null==this.$data.form.price){
                callback('请输入价格')
            }else{
                if(!result){
                callback('请输入首位不是0的数字')
                }else{
                    callback()
                }
            }
        };
        return {
            select: '',
            input:'',
            searchKey:'',
            tableData:[],
            dialogFormVisible:false,
            index:'',
            flag:false,
            newDate:'',
            oldDate:'',  
            form:{
                date:'',
                property:'',
                harm:'',
                price:''
            },
            rules:{
                date:[
                    {required:true,message:'请选择时间',trigger:'blur'}, 
                ],
                property:[
                    {required:true,message:'请选择基础属性',trigger:'blur'},
                ],
                harm:[
                    {required:true,message:'请选择附加属性',trigger:'blur'} 
                ],
                price:[
                    {required:true,validator:validatePrice,trigger:'blur'},
                ]
            }
        }
    },
    methods:{
        getTableData(){
            this.tableData=Store.fetch()
        },
        search(){
        },
        add(){
            this.dialogFormVisible=true
        }, 
        handleEdit(index, row){  
            this.flag = true
            this.dialogFormVisible=true
            this.form.date=row.date
            this.form.property=row.property
            this.form.harm=row.harm
            this.form.price=row.price
            this.index = index
            // console.log(index)
        },
        handleDelete(index,row){
            this.$confirm('确定要删除"' + row.date + '"的灵饰吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                this.tableData.splice(index,1)
            })
        },
        saveConfirm(){ 
            this.$refs.formDialog.validate((valid)=>{
                if(!valid){
                    return false
                }else{
                   let params={
                        property:this.form.property,
                        harm:this.form.harm,
                        price:this.form.price
                        }
                    if(!this.flag){
                        let year = this.form.date.getFullYear()
                        let month = this.form.date.getMonth()+1
                        let day = this.form.date.getDate()
                        let date = `${year}-${month}-${day}`
                        params['date'] = date
                        this.tableData.push(params)
                        this.$message({
                            type:'success',
                            message:'添加成功!'
                        })
                    }else{
                      this.flag = false
                      if(String(this.form.date).length>10){
                          let year = this.newDate.getFullYear()
                          let month = this.newDate.getMonth()+1
                          let day = this.newDate.getDate()
                          let date = `${year}-${month}-${day}`
                          params['date'] = date
                      }else{
                          params['date'] = this.form.date
                      }
                      this.tableData.splice(this.index,1,params)
                      this.$message({
                            type:'success',
                            message:'修改成功!'
                        })   
                    }
                    this.dialogFormVisible=false
                    this.$refs.formDialog.resetFields()
                    this.form={date:'',property:'',harm:'',price:''}
                }  
            })
        },
        cancel(){
            this.dialogFormVisible=false
            this.$refs.formDialog.resetFields()
            this.form={date:'',property:'',harm:'',price:''}
        },
        handleSelectionChange(val){
        }
    },
    watch:{
        tableData:{
            handler: function(tableData){
                Store.save(tableData)
            },
            deep: false
        },
        form:{
            handler(newval,oldval){
                this.newDate=newval.date
                this.oldDate=oldval.date
                
            },
            deep:true
        }
    },
    created(){
        this.getTableData()
    },
    computed:{
        tables:function(){
            let search =this.searchKey
                if (search){
                    return this.tableData.filter((dataNews)=>{
                        return Object.keys(dataNews).some((key)=>{
                            return String(dataNews[key]).toLowerCase().indexOf(search) != -1
                        })
                    })
                }
                return this.tableData
        }
    }
}

</script>
<style lang="less">
  .ring{
    .search{
        span{
            display: inline-block;
            padding:0 15px;
        }
        .el-input{
            margin-top: 15px auto;
            width: 700px;
            .el-select .el-input {
                width: 130px;
            }
        }
   }
   .el-dialog{
       .form-dialog{
           padding:10px 60px 10px 20px;
       }
   }
   .table-data{
            width: 100%;
            .el-table{
                padding:0 30px;
                button{
                    margin-right:5px;
                }
            }
        }
}
</style>

<style lang="less" scoped>
 .content-left{
    text-align:center;
    padding:20px 50px 0 50px;
    .more{
        text-align:left;
    }
 }
 .content-right{
    text-align:center;
    padding:30px 100px 0 0;
    .ringTable{
        margin: 20px auto;
        width:900px;
        border:solid 1px #dfdfdf;
        border-radius:5px;
        //  padding:10px 20px;
        .opration{
            text-align: right;
            padding:10px 30px;
            border-bottom:solid 1px #dfdfdf;
        }  
    }
}
</style>


