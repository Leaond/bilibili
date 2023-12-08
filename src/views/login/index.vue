<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" size="default">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'

//定义表单校验需要的配置对象
const rules = {
  username: [
    //规则对象属性:
    {
      required: true, // required,代表这个字段务必要校验的
      min: 5, //min:文本长度至少多少位
      max: 10, // max:文本长度最多多少位
      message: '长度应为6-10位', // message:错误的提示信息
      trigger: 'change', //trigger:触发校验表单的时机 change->文本发生变化触发校验, blur:失去焦点的时候触发校验规则
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 10,
      message: '长度应为6-15位',
      trigger: 'change',
    },
  ],
}
//收集账号与密码数据
let loginForm = reactive({ username: 'admin', password: '111111' })
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
