<template>
  <div class="form-wrap" v-loading="slideLoading">
    <el-form :model="formData" class="dt-form">
      <el-form-item label="日期">
        {{ formData.date }}
      </el-form-item>
      <el-form-item label="姓名">
        {{ formData.name }}
      </el-form-item>
      <el-form-item label="地址">
        {{ formData.address }}
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FormInfo, ResponseInfo } from '@/types';
import { getViewData } from '@/api';

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

  private getViewInfo() {
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

  public setSlideLoading(type: boolean): void {
    this.slideLoading = type;
  }

  created(): void {
    this.getViewInfo();
  }
}
</script>
