<template>
  <dart-slide
    :loading="slideLoading"
    :visible="slideVisible"
    :title="slideTitle"
    width="60%"
    :afterClose="handleClose"
  >
    <el-form
      :model="formData"
      label-width="auto"
      class="dt-form"
      v-if="formData.name"
    >
      <el-form-item label="日期">
        <el-input v-model="formData.date"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="formData.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </dart-slide>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FormInfo, ResponseInfo } from '@/types';
import { getViewData, saveEditData } from '@/api';

@Component({})
export default class Home extends Vue {
  // data
  private slideLoading = false;
  private slideVisible = true;
  private slideTitle = '编辑';

  private formData: FormInfo = {
    name: '',
    address: '',
    date: ''
  };

  // 计算属性
  get id() {
    return this.$route.query.id;
  }

  // methods

  private handleClose(): void {
    this.$router.push({
      path: '/'
    });
  }

  private async getEditInfo() {
    this.setSlideLoading(true);
    const ret: ResponseInfo = await getViewData(+this.id);

    this.formData = ret.data;
    this.setSlideLoading(false);
  }

  private async handleSubmit() {
    const ret = await saveEditData(this.formData);

    this.$message({
      message: ret.message,
      type: 'success'
    });

    this.handleClose();
  }

  public setSlideLoading(type: boolean): void {
    this.slideLoading = type;
  }

  created(): void {
    this.getEditInfo();
  }
}
</script>
