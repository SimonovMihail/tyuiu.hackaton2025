<template>
    <el-scrollbar ref="scrollbarRef" height="100vh" always @scroll="scroll">
        <Header/>
    </el-scrollbar>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElScrollbar } from 'element-plus'
  import Header from "@/components/Header.vue";
  const value = ref(0)

  const scroll = ({ scrollTop }) => {
  value.value = scrollTop
  }
</script>