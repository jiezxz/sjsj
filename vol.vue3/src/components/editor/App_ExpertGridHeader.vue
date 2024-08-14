<template>
  <vol-box :lazy="true" v-model="model" title="提示" :height="400" :width="700" :padding="5">
    <div v-if="state === 0">当前班组前一天数据未填写，无法提交，需要主任或部长账号解锁</div>
    <div v-else>当前班组<br>交接人：{{ jiaojieren }} &nbsp;- &nbsp;接班人： {{ jiebanren
    }} <br>
      班组前一天数据 日期：{{ date }}&nbsp;&nbsp;-&nbsp;&nbsp;未填写<br>
      提交失败，是否解锁</div>
    <template #footer>
      <div>
        <el-button v-if="state === 1" type="default" size="small" @click="lockUp">解锁</el-button>
        <el-button type="default" size="small" @click="model = false">取消</el-button>
      </div>
    </template>
  </vol-box>
</template>
<script>
import VolBox from '@/components/basic/VolBox.vue';
import ajax from '@/api/http.js'
//这里使用的vue2语法，也可以写成vue3语法
export default {
  components: { 'vol-box': VolBox },
  methods: {},
  data() {
    return {
      model: false,
      state: 0,
      jiaojieren: '',
      jiebanren: '',
      date: '',
      form: ''
    };
  },
  methods: {
    open() {
      this.model = true
    },
    lockUp() {

      ajax.post('/api/Sc_jjb/Add', this.form, () => {
        window.location.reload()
        console.log('添加成功')
        this.model = false
        console.log(this.$refs.grid)
      }).then(res => {
        console.log(res)
        window.location.reload()
      })
    }
  }
};
</script>