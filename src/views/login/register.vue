<template>
  <!-- 
        visible 是否显示对话框
        center 默认false,添加了就是true 设置是否居中
       -->
  <el-dialog
    class="register-dialog"
    title="用户注册"
    center
    :visible.sync="dialogFormVisible"
  >
    <!-- el-form设置了label-width所有的都会生效 -->
    <!-- 这里放展示的内容 -->
    <el-form :model="form" :label-width="formLabelWidth">
      <!-- label-width 可以每一行设置不相同的 直接设置给el-form-item即可 -->
      <!-- <el-form-item label="活动名称" :label-width="formLabelWidth"> -->
      <el-form-item label="昵称">
        <el-input autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input autocomplete="off" show-password></el-input>
      </el-form-item>
      <el-form-item label="图形码">
        <el-row>
          <el-col :span="18">
            <el-input autocomplete="off"></el-input>
          </el-col>
          <el-col :span="5" :offset="1">
            <!-- 验证码 -->
            <img class="code" @click="clickCode" :src="codeURL" alt="" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码">
        <el-row>
          <el-col :span="18">
            <el-input autocomplete="off"></el-input>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-button>获取用户验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div>
      <!-- <img src="./imgs/4f8790a694f726a08bff6688fa0d47ea.gif" alt="" /> -->
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false"
        >确 定</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
// 导入方法
import { getRegisterCodeURL } from "../../../api/register";
export default {
  name: "register",
  data() {
    return {
      // 设置对话框是否显示 true显示,false隐藏
      dialogFormVisible: false,
      // 左侧宽度
      formLabelWidth: "100px",
      // 表单数据
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      // 图形验证码地址
      codeURL: getRegisterCodeURL()
    };
  },
  methods: {
    clickCode() {
      console.log(this.codeURL);
      this.codeUR = getRegisterCodeURL();
    }
  }
};
</script>

<style>
.register-dialog .el-dialog__header {
  background: linear-gradient(to right, #01c4fa, #1395fa);
}
.register-dialog .el-dialog__title {
  color: white;
}
.register-dialog .code {
  width: 100%;
  height: 45px;
  display: block;
}
</style>
