<template v-for="(item,index) in showList">
  <div>
    <div class="menu">
      <Table height="200" :columns="columns1" :data="data2"></Table>
    </div>
    <Page
      :total="Number(dataCount)"
      :current.sync="page"
      :page-size="pageSize"
      show-total
      @on-change="changepage"
    ></Page>

    <!-- total="Number(dataCount)"是总的条数Number()是将字符串转成数字。
    current.sync="page"是默认页面，.sync是修饰符是vue中的组件的双向绑定方式，下面的页码变的时候上面的page会同步修改，原生的修改页码需要手动改页码，需要监听不同的事件，而通过双向绑定只需要监听on-change这一个事件即可。
    page-size="pageSize"是页面信息条数，
    @on-change="changepage"调用changepage（）改变页面-->
    <!-- current用来返回当前页面 -->
  </div>
</template>
<style>
.menu {
  padding-bottom: 2%;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dataCount: "", // 总数据的条目
      pageSize: 2, // 每页显示多少条
      page: 1,
      // page后端从1开始就定义为1，page后端从0开始就定义为0
      columns1: [
        {
          title: "Id",
          key: "id"
        },
        {
          title: "Username",
          key: "username"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Email",
          key: "email"
        }
      ],
      //展示的数据
      data2: [
        {
          id: "",
          username: "",
          name: "",
          email: ""
        }
      ]
    };
  },
  //默认页面加载
  mounted() {
    this.show();
  },
  // 动态的从数据库获取内容
  methods: {
    show() {
      axios
        .post("http://lhp.aesong.com:8080/springboottest/users", {
          index: String(this.page),
          limit: String(this.pageSize)
        })
        .then(result => {
          console.log(111, result);
          this.data2 = result.data.list; //所有页面的数据
          this.dataCount = Number(result.data.count);
        });
    },
    changepage() {
      this.show();
    }
  }
};
</script>