<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      <div @click="increment">aaa</div>
      <div>{{count}}</div>
      <div>{{token}}</div>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      
    }
  },
  computed:{
    // count(){
    //   return this.$store.state.count
    // }
    ...mapState([        
      'count',
      'token'
    ])
  },
  // computed: mapState({
  //   // 箭头函数可使代码更简练
  //   count: state => state.count,

  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',

  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // }),
  methods:{
    increment(){
      this.$store.commit('increment');
      console.log(this.$store.state.count)
    },
  },
  mounted(){
    //数组去重
    let arr = [1,1,7,7,9,9,9,1,6,6,7];
    console.log(new Set(arr))
    console.log([...new Set(arr)]);
    console.log(Array.from(new Set(arr)));
    //数组取最大最小值
    console.log(Math.max(...arr))
    console.log(Math.min(...arr))
    //保留指定位数的小数点
    let num = 3.1415926;
    console.log(num.toFixed(4));//注意， toFixed() 方法返回的是字符串而不是一个数字。
    //金钱格式化
    let cash = '123456789';
    console.log(cash.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    console.log((cash).toLocaleString());
    console.log(typeof(parseInt(cash)));
    //标准JSON的深拷贝
    let a = {
      a1:1,
      b1:{c:1,d:2}
    };
    let b = JSON.parse(JSON.stringify(a));
    console.log(b);
    
    let data;
    console.log(data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
