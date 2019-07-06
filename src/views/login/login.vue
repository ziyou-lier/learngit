<template>
  <div>
    <div class="login-wrap" v-show="showLogin">
      <ButtonGroup>
        <Button type="primary">
          <Icon type="ios-arrow-back" v-on:click="ToLogin"></Icon>登录
        </Button>
        <Button type="primary" v-on:click="ToRegister">
          注册
          <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
      <br />
      <ul style="line-height:40px">
        <li>
          <Input v-model="username" placeholder="请输入用户名" clearable style="width: 200px" />
        </li>
        <li>
          <Input v-model="password" placeholder="请输入密码" clearable style="width: 200px" />
        </li>
        <li>
          <Button type="primary" v-on:click="login">登录</Button>
        </li>
      </ul>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <ButtonGroup>
        <Button type="primary" v-on:click="ToLogin">
          <Icon type="ios-arrow-back" ></Icon>
          登录
        </Button>
        <Button type="primary" v-on:click="ToRegister">
          注册
          <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
      <br />
      <ul style="line-height:40px">
        <li>
          <Input
            type="text"
            placeholder="请输入用户名"
            v-model="newUsername"
            clearable
            style="width: 200px"
          />
        </li>
        <li>
          <Input type="text" placeholder="请输入姓名" v-model="newName" clearable style="width: 200px" />
        </li>
        <li>
          <Input
            type="email"
            placeholder="请输入邮箱"
            v-model="newEmail"
            clearable
            style="width: 200px"
          />
        </li>
        <li>
          <Input
            type="password"
            placeholder="请输入密码"
            v-model="newPassword"
            clearable
            style="width: 200px"
          />
        </li>
        <li>
          <Button type="primary" v-on:click="register">注册</Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: "",
      username: "",
      password: "",
      newUsername: "",
      newName: "",
      newEmail: "",
      newPassword: ""
    };
  },
  
  methods: {
    //在login.vue页面控制登录注册切换
    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
    },
    ToLogin() {
      this.showRegister = false;
      this.showLogin = true;
    },
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        /*接口请求*/

        axios
          .post("http://lhp.aesong.com:8080/springboottest/login", {
            username: this.username,
            password: this.password
          })
          .then(res => {
            console.log(res.data);
            this.$Message.info({
              content: res.data.message
            });
            if ((res.data = "20000")) {
              this.$router.push({ name: "Show" });
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    //注册
    register() {
      if (this.newUsername == "" || this.newPassword == "") {
        alert("请输入用户名或密码");
      } else {
        /*接口请求*/

        axios
          .post("http://lhp.aesong.com:8080/springboottest/register", {
            username: this.newUsername,
            name: this.newName,
            email: this.newEmail,
            password: this.newPassword
          })
          .then(res => {
            console.log(res.data);
            this.$Message.info({
              content: res.data.message
            });
            
            if (res.data.status =="20000"){
                    this.showRegister = false;
                    this.showLogin = true;
            }

          })
          .catch(function(error) {
            tishi = "error";
            console.log(error);
          });
      }
    }
  }
};
</script>
