<template>
    <div >
      <div class="left-header">
        <SvgIcon :name="appStores.sidebar.opened ? 'open' : 'close'" class="el-icon--right" @click="toggleCollapse"></SvgIcon>
        <div >
          <el-breadcrumb class="app-breadcrumb" separator="/">
            <transition-group name="breadcrumb">
              <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
                <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
              </el-breadcrumb-item>
            </transition-group>
          </el-breadcrumb>
        </div>
      </div>
      <div class="right-header">
          <el-dropdown class="avatar-container" >
              <div class="avatar-wrapper">
                  <img src="@/assets/icons/logo.gif"  class="user-avatar">
                  <SvgIcon name="arrowdown" class="el-icon-caret-bottom"><arrow-down /></SvgIcon>
              </div>
              <template #dropdown>
              <el-dropdown-menu>
                  <el-dropdown-item command="a" @click="goHome">首页</el-dropdown-item>
                  <el-dropdown-item command="b" @click="signOut">退出登录</el-dropdown-item>
              </el-dropdown-menu>
              </template>
          </el-dropdown>
      </div>
    </div>
</template>

<script lang="ts" setup>
import {appStore} from '@/stores/app'
import { ArrowRight } from '@element-plus/icons-vue'
let router = useRouter();


const appStores = appStore();
let levelList=''
let matched=''


// 侧边栏展开折叠
function toggleCollapse(){
    appStores.toggleSideBar()
}
// 退出登录
function signOut(){
    router.push({ path: '/login' });
}
// 返回首页
function goHome(){
    router.push({ path: '/' });
}
// 面包屑
function getBreadcrumb(){
  matched=router.options.routes.filter(item=> item.meta && item.meta.title)
  // console.log(matched)
  const first = matched[0]
  if(!isDashboard(first)){
    // console.log(matched);
    // matched = [{ path: '', meta: { title: 'home' }}].concat(matched)
  }
  levelList=matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
  // console.log(levelList)
   return levelList
}
// 是否为首页
function  isDashboard(route) {
  // console.log(route);
  const name = route && route.children[0].name
  // console.log(name);
  if (!name) {
    return false
  }
  // console.log(name);
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}
// console.log(getBreadcrumb());
</script>

<style scoped lang="scss">
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.el-icon--right{
    width:25px;
    height:25px;
    margin-right: 20px;
}
.el-icon-logo{
    width:15px;
    height:15px;
}
  .right-header {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }
    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
          width:12px;
          height: 12px;
        }
      }
    }
  }
  .left-header{
    float: left;
    height: 50px;
    display: flex;
    line-height: 50px;
    align-items: center;
  }
</style>