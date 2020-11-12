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
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="phone">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="请输入手机号"
            v-model="form.phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            show-password
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="code">
          <!-- layout布局容器 -->
          <el-row>
            <el-col :span="17">
              <el-input
                prefix-icon="el-icon-key"
                placeholder="请输入验证码"
                v-model="form.code"
              ></el-input>
            </el-col>
            <el-col :span="7">
              <img @click="changeCode" class="code" :src="codeURl" alt="" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="checked">
          <!-- 按钮 -->
          <el-checkbox v-model="form.checked">
            我已阅读并同意
            <el-link type="primary" :underline="false">用户协议</el-link>
            与
            <el-link type="primary" :underline="false">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="showRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右侧盒子 -->
    <img src="@/assets/login_banner_ele.png" alt="" />
    <registerCom ref="registerCom"></registerCom>
  </div>
</template>

<script>
// 导入抽取的接口文件
import { userLogin, getCodeURL } from "../../../api/login";
// 导入工具函数
import { setToken } from "../../utils/token";
// 导入注册组件
import registerCom from "./register";
export default {
  name: "login",
  data() {
    return {
      form: {
        phone: "",
        password: "",
        code: "",
        checked: []
      },
      rules: {
        phone: [
          {
            required: true,
            message: "手机号不能为空",
            trigger: "blur"
          },
          {
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: "手机号格式有误",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 12,
            message: "密码长度为 6 - 12位",
            trigger: "change"
          }
        ],
        // 验证码
        code: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          },
          {
            min: 4,
            max: 4,
            message: "验证码长度为4位",
            trigger: "change"
          }
        ],
        // 是否勾选
        checked: [
          {
            required: true,
            message: "请勾选同意按钮",
            trigger: "change"
          }
        ]
      },
      codeURl: getCodeURL()
    };
  },
  // 注册组件
  components: {
    registerCom
    // registerCom:registerCom
  },
  methods: {
    onSubmit() {
      // $refs点出来的属性需要和el-form的ref一致
      this.$refs.form.validate(valid => {
        console.log("valid:", valid);
        // valid true 校验通过
        if (valid) {
          // 接口调用
          userLogin({
            phone: this.form.phone,
            password: this.form.password,
            code: this.form.code
          }).then(res => {
            // console.log(res);
            if (res.data.code === 200) {
              // 成功
              this.$message.success("欢迎回来!");
              // 保存token
              setToken(res.data.data.token);
              // 去首页
              this.$router.push("/index");
            } else if (res.data.code === 202) {
              // 失败
              this.$message.error(res.data.message);
            }
          });
        } else {
          // 校验失败!
          // console.log('error submit!!')
          // 提示用户
          this.$message.error("数据格式有误!");
          return false;
        }
      });
    },
    changeCode() {
      this.codeURl = getCodeURL() + `?${Date.now()}`;
    },
    // 显示注册
    showRegister() {
      console.log("this.$refs.registerCom:", this.$refs.registerCom);
      // 修改是否显示的布尔值
      this.$refs.registerCom.dialogFormVisible = true;
    }
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
    padding-top: 43px;
    padding-left: 41px;
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
    .code {
      display: block;
      width: 100%;
      height: 39px;
    }
    .el-checkbox {
      display: flex;
      align-items: center;
      .el-checkbox__input {
        transform: translateY(2px);
      }
      .el-checkbox__label {
        display: flex;
        align-items: center;
      }
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>