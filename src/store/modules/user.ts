//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin } from '@/api/user'
//引入数据类型
import type { loginForm } from '@/api/user/type'
import { ref } from 'vue'
//创建并暴露用户小仓库
export const useUserStore = defineStore('User', () => {
  const token = ref(localStorage.getItem('TOKEN')) //用户唯一标识token
  const userLogin = async (data: loginForm) => {
    //登录请求
    const result: any = await reqLogin(data)
    if (result.code == 200) {
      //pinia仓库存储token
      //由于pinia|vuex存储数据其实利用js对象
      token.value = result.data.token
      //本地存储持久化存储一份
      localStorage.setItem('TOKEN', result.data.token)
      //保证当前async函数返回一个成功的promise函数
      return 'ok'
    } else {
      return Promise.reject(new Error(result.data.message))
    }
  }
  return { token, userLogin }
})
