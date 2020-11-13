<!--
 * @Author: your name
 * @Date: 2020-11-10 15:51:44
 * @LastEditTime: 2020-11-13 11:24:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qc_new_websited:\projects\recorder-front\src\components\HelloWorld.vue
-->
<template>
  <div class="hello">
    <div class="btn-container">
      <div class="button" @click="clear">重置</div>
      <div class="button ml-1r" @click="changeColor">换色</div>
    </div>
    <div class="board double-width">
      <div class="card" :class="color1" v-for="(item, index) in pieces1" :key="'piece1' + index" @mousedown.self="rightClick($event, 'pieces1', index)" @contextmenu="contextMenu">
        {{ item.value }}
      </div>
    </div>
    <div class="flex">
      <div class="board">
        <div class="card" :class="color2" v-for="(item, index) in pieces2" :key="'piece2' + index" @mousedown.self="rightClick($event, 'pieces2',  index)" @contextmenu="contextMenu">
          {{ item.value }}
        </div>
      </div>
      <div class="board">
        <div class="card" :class="color3" v-for="(item, index) in pieces3" :key="'piece3' + index" @mousedown.self="rightClick($event, 'pieces3',  index)" @contextmenu="contextMenu">
          {{ item.value }}
        </div>
      </div>
    </div>
    <div v-show="show" class="mark" :style="'top:' + top + 'px;left:' + left + 'px;'">
      <MarkCard @mark="mark" @cancel="cancel" @clear="clearMark"></MarkCard>
    </div>
    <div class="flex color-container" v-show="showColor">
      <div class="item yellow" @click="setColor('yellow')"></div>
      <div class="item blue" @click="setColor('blue')"></div>
      <div class="item green" @click="setColor('green')"></div>
      <div class="item purple" @click="setColor('purple')"></div>
    </div>
  </div>
</template>

<script>
import MarkCard from "./MarkCard"
export default {
  name: 'HelloWorld',
  components: { MarkCard },
  data() {
    return {
      show: false,
      showColor: false,
      left:0,
      top:0,
      pieces1: [],
      pieces2: [],
      pieces3: [],
      color1: 'green',
      color2: 'blue',
      color3: 'purple',
      keyName: '',
      count: null
    }
  },
  props: {
    msg: String
  },
  mounted() {
    document.addEventListener("contextmenu", function(event){
      event.preventDefault();
    });
    for (let i=0; i<16; i++) {
      this.pieces1.push({value: ''});
      this.pieces2.push({value: ''});
      this.pieces3.push({value: ''});
    }
  },
  methods: {
    clear() {
      this.reset(this.pieces1);
      this.reset(this.pieces2);
      this.reset(this.pieces3);
    },
    clearMark() {
      this.show = false;
      this[this.keyName][this.count].value = '';
    },
    cancel() {
      this.show = false;
    },
    reset(arr) {
      arr.forEach((item) => {
        item.value = '';
      });
    },
    rightClick(e, string, index) {
      this.show = true;
      if (e.layerY >= 90) {
        this.top = 90;
      } else {
        this.top = e.layerY;
      }
      if (e.layerX >= 220) {
        this.left = 220;
      } else {
        this.left = e.layerX;
      }
      this.count = index;
      this.keyName = string;
    },
    contextMenu(e) {
      e.preventDefault();
    },
    mark(item) {
      this.show = false;
      this[this.keyName][this.count].value = item.name;
    },
    changeColor() {
      this.showColor = true;
    },
    setColor(color) {
      if (color === 'yellow') {
        this.color1 = 'green';
        this.color2 = 'blue';
        this.color3 = 'purple';
      }
      if (color === 'blue') {
        this.color1 = 'purple';
        this.color2 = 'green';
        this.color3 = 'yellow';
      }
      if (color === 'green') {
        this.color1 = 'yellow';
        this.color2 = 'purple';
        this.color3 = 'blue';
      }
      if (color === 'purple') {
        this.color1 = 'blue';
        this.color2 = 'yellow';
        this.color3 = 'green';
      }
      this.showColor = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 336px; */
.ml-1r {
  margin-left: 1rem;
}
.hello {
  width: 336px;
  padding: 4px;
  text-align: center;
  background: url('~@/assets/board-bk.png');
  border-radius: 4px;
}
.flex {
  display:flex;
}
.board {
  width:168px;
  display: flex;
  flex-wrap:wrap;
}
.card {
  width:38px;
  height:38px;
  cursor: pointer;
  color:#fff;
  background: #709C00;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .19), inset 0 1px 0 rgba(255, 255, 255, .4);
  border-radius: 3px;
  display:flex;
  align-items: center;
  justify-content: center;
  margin:2px;
}
.double-width {
  width:336px;
}
.mark {
  position:absolute;
}
/*#9044A0 #D86C00 #2868A0 #709C00 */
.mark-card {
  background:url('~@/assets/board-bk.png');
  padding:2px;
}
.purple {
  background: #9044A0;
}
.green {
  background:#709C00;
}
.yellow {
  background:#D86C00;
}
.blue {
  background: #2868A0;
}
.btn-container {
  display:flex;
  padding:2px;
}
.button {
  color:#fff;
  background:url('~@/assets/board-bk.png');
  border-radius: 2px;
  border:1px solid #fff;
  cursor:pointer;
  font-size:12px;
  padding:2px 4px;
}
.item {
  display:flex;
  align-items: center;
  justify-content: center;
  width:38px;
  height:38px;
  margin:2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .19), inset 0 1px 0 rgba(255, 255, 255, .4);
  cursor: pointer;
  color:#fff;
  border-radius: 3px;
}
.color-container {
  position:absolute;
  top:40px;
  left:80px;
  background: #fff;
  border-radius: 3px;
}
</style>
