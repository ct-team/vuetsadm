<template>
  <div class="form-wrap" v-loading="slideLoading">
    <el-form :model="formData" label-width="auto" class="dt-form">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { FormInfo, ResponseInfo } from '@/types';
import { getViewData, saveEditData } from '@/api';

@Component({})
export default class Home extends Vue {
  // data
  private slideLoading = false;
  private formData: FormInfo = {
    name: '',
    address: '',
    date: ''
  };

  // 计算属性
  get id() {
    return Number(this.$route.query.id);
  }

  private getEditInfo() {
    this.setSlideLoading(true);
    getViewData(this.id)
      .then((res: ResponseInfo) => {
        this.formData = res.data;
        this.setSlideLoading(false);
      })
      .catch(() => {
        this.setSlideLoading(false);
      });
  }

  private handleSubmit() {
    this.setSlideLoading(true);
    saveEditData(this.formData)
      .then((res: any) => {
        this.setSlideLoading(false);
        this.$message({
          message: res.message,
          type: 'success'
        });
        this.handleCloseDrawer();
        this.$bus.$emit('refreshTable');
      })
      .catch(() => {
        this.setSlideLoading(false);
      });
  }

  public setSlideLoading(type: boolean): void {
    this.slideLoading = type;
  }
  @Emit('close-drawer')
  handleCloseDrawer() {}

  created(): void {
    this.getEditInfo();
  }
}
</script>
