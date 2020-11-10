<template>
  <div class="login-container">
    <!-- 左侧盒子 -->
    <div class="left-box">
      <!-- 标题盒子 -->
      <div class="title-box">
        <!-- logo -->
        <img src="../../assets/logo.png" alt="" />
        <span class="title">黑马妹妹</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入手机号"
            v-model="form.name"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            show-password
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            v-model="form.passwod"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <!-- layout布局容器 -->
          <el-row>
            <el-col :span="17">
              <el-input
                prefix-icon="el-icon-key"
                placeholder="请输入验证码"
                v-model="form.info"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <img  class="code" src="../../assets/图层 6.png" alt="">
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="yonghu">
          <!-- 按钮 -->
          <div class="xieyi">
            <el-checkbox></el-checkbox>
            <span>我已阅读并同意</span>
            <el-link href="https://www.baidu.com" type="primary"
              >用户协议</el-link
            >
            与
            <el-link href="https://www.baidu.com" type="primary"
              >隐私条款</el-link
            >
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右侧盒子 -->
    <img src="@/assets/login_banner_ele.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        name: "",
        password: "",
        info: ""
      }
    };
  }
};
</script>

<style lang="less">
.login-container {
  // 开启弹性
  display: flex;
  // 上下居中
  align-items: center;
  // 均分
  justify-content: space-around;
  height: 100%;
  background: linear-gradient(#1493fa 28%, #01c6fa 96%);
  .left-box {
    width: 478px;
    height: 550px;
    background: #f5f5f5;
    padding-top: 44px;
    padding-left: 48px;
    padding-right: 31px;
    .title-box {
      display: flex;
      align-items: center;
      margin-bottom: 31px;
      img {
        width: 25px;
        height: 18px;
        margin-right: 13px;
      }
      span {
        &.title {
          font-size: 22px;
        }
        &.line {
          width: 1px;
          height: 28px;
          background-color: gray;
          margin: 0 12px;
        }
        &.sub-title {
          font-size: 21px;
        }
      }
    }
    .code{
      display: block;
      width: 100%;
      height: 39px;
    }
    .xieyi {
      display: flex;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>