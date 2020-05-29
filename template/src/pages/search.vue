<template>
  <div class="search-wrapper">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="form.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">
          查询
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';
import { SearchRequest } from '@/types/index';

@Component
export default class Search extends Vue {
  // data
  private form: SearchRequest = {
    user: '',
    region: ''
  };

  private loading = false;

  // method
  private onSubmit(): void {
    this.setLoading(true);
    this.search();
  }

  public setLoading(flag: boolean): void {
    this.loading = flag;
  }

  // emit
  @Emit()
  search() {
    return this.form;
  }
}
</script>

<style scoped>
.search-wrapper {
  overflow: hidden;
  margin: 10px 0;
  padding: 15px 15px 0 15px;
  background-color: #f7f7f7;
  border: 1px solid #e3e3e3;
}
</style>
