<template>
  <div
    :class="`bwy-btn${isDot ? '_dot' : ''} ${btnClass}`"
    :style="{
      ...parseStyle(btnStyle),
      '--color': color,
      padding:
        size == 'small'
          ? '8px 20px'
          : size == 'medium'
          ? '12px 28px'
          : '16px 36px',
    }"
  >
    <BwyIcon
      v-if="icon"
      :icon="icon"
      :color="isDot ? color : `#fff`"
      :size="iconSize"
      iconStyle="margin-right: 4px;"
    ></BwyIcon>
    <slot></slot>
    <div v-if="isDot" class="bwy-btn-mask"></div>
  </div>
</template>

<script setup>
import { parseStyle } from "../common/index";
import BwyIcon from "./BwyIcon.vue";

const props = defineProps({
  // 是否空心
  isDot: {
    type: Boolean,
    default: false,
  },
  // 尺寸 small - 小号 medium - 中等 large - 大号
  size: {
    type: String,
    default: "small",
  },
  iconSize : {
    type : String,
    default : '13px'
  },
  icon: {
    type : String,
    default : ''
  },
  // 类名
  btnClass: {
    type: String,
    default: "",
  },
  // 颜色
  color: {
    type: String,
    default: "#1677ff",
  },
  // 内联样式
  btnStyle: {
    type: [Object, String],
    default: "",
  },
});

// const emit = defineEmits(['click'])

</script>

<style>
.bwy-btn {
  position: relative;
  background: var(--color);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bwy-btn_dot {
  color: var(--color);
  display: flex;
  align-items: center;
  border: 1px solid var(--color);
  border-radius: 4px;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
}
.bwy-btn-mask {

  background: var(--color);
  opacity: 0.1;
  position: absolute;
  left: 0;
  top: 0;
}

.bwy-btn:hover {
  /* text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.562); */
  transform: scale(1.01);
  box-shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.575);
}

.bwy-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100px;
  width: 50%;
  height: 100%;
  transform: rotate(80deg);
  background: #ffffff77;
  filter: blur(10px);
  transition: 0.6s ease-in-out;
}

.bwy-btn:hover::after {
  left: 100%;
}
</style>