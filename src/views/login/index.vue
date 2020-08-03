<template>
    <div class="login">
        <div class="form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { addlogin } from "@/api/home"
import { mapActions } from "vuex"
export default {
    data(){
        return{
            form:{

            }
        }
    },
    mounted(){

    },
    methods:{
        ...mapActions(["AddLogin"]),
        onSubmit(){
            addlogin(this.form).then((res)=>{         
                if(res.success){
                    console.log(111)
                    this.AddLogin(res);
                    this.$router.push({
                        path: "/"
                    });
                }
            })
        }
    }
}
</script>
<style lang="less"  scoped>
    .login{
        display: flex;
        height: 100vh;
        .form{
            margin: auto;
            width: 500px;
        }
    }
</style>