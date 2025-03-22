<template>
<!--  <el-button type="primary" @click="visible = true">打开弹出框</el-button>-->
<!--  <dd @click="visible = true">-->
<!--    <i class="iconfont icon-question"></i> 问题反馈-->
<!--  </dd>-->
<!--  值：{{props.visible}}-->

  <el-dialog v-model="props.visible"  title="问题反馈">
    <quill-editor
        toolbar="full"
        content-type="html"
        v-model:content="feedbackContent"
        ref="myEditor"
    />

    <template #footer>
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="submitFeedback">提交问题</el-button>
    </template>
  </el-dialog>

</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps({
  visible: Boolean
});

const emit = defineEmits(['update:visible', 'submit']);

const  myEditor = ref(null);
const feedbackContent = ref('');

const closeDialog = () => {
  emit('update:visible',false);
};

const submitFeedback = () => {
  // 提交问题按钮事件逻辑可以在这里实现
  emit('submit', feedbackContent.value);
  console.log('反馈内容:', feedbackContent.value);
  closeDialog();
};

</script>

<style scoped>

</style>
