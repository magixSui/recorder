<!--
 * @Author: your name
 * @Date: 2020-11-12 16:22:41
 * @LastEditTime: 2020-11-13 11:22:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qc_new_websited:\projects\recorder-front\src\components\Mark.vue
-->
<template>
  <div class="mark-card">
    <div class="mark-card-container">
      <div class="item" v-for="(item, index) in cards" :key="index" @click="$emit('mark', item)">
        {{ item.name }}
      </div>
    </div>
    <div class="btn-container">
      <div class="button" @click="$emit('clear')">清除</div>
      <div class="button" @click="$emit('cancel')">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mark_card',
  data() {
    return {
      cards: [{
        name: '军'
      }, {
        name: '师'
      }, {
        name: '旅'
      }, {
        name: '团'
      }, {
        name: '营'
      }, {
        name: '连'
      }, {
        name: '排'
      }, {
        name: '兵'
      }, {
        name: '弹'
      }, {
        name: '?'
      }, {
        name: '小'
      }, {
        name: '大'
      }]
    }
  }
}
</script>

<style scoped>
.mark-card {
  width:126px;
  border-radius: 4px;
}
.mark-card-container {
  width:126px;
  display: flex;
  flex-wrap:wrap;
}
.item {
  display:flex;
  align-items: center;
  justify-content: center;
  width:38px;
  height:38px;
  margin:2px;
  background: #D86C00;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .19), inset 0 1px 0 rgba(255, 255, 255, .4);
  cursor: pointer;
  color:#fff;
  border-radius: 3px;
  user-select:none;
}
.btn-container {
  display:flex;
  justify-content: space-around;
  color:#fff;
  font-size:12px;
  padding:2px 4px;
}
.button {
  color:#fff;
  background:url('~@/assets/board-bk.png');
  border-radius: 2px;
  border:1px solid #fff;
  cursor:pointer;
  font-size:12px;
  padding:1px 4px;
  user-select:none;
}
</style>