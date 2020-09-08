<template>
  <div>
    <Breadcrumb />
    <Search @search="handleSearch" ref="search" />
    <Table
      @open-view="handleOpenView"
      @open-edit="handleOpenEdit"
      :data="tableData"
      :loading="loading"
      ref="myTable"
    />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Breadcrumb from './Breadcrumb.vue';
import Search from './Search.vue';
import Table from './Table.vue';
import { SearchRequest, TableRow, ResponseInfo } from '@/types/index';
import { getTableList } from '@/api';

@Component({
  components: {
    Breadcrumb,
    Search,
    Table
  }
})
export default class Home extends Vue {
  // data
  private tableData: Array<object> = [];
  private loading: boolean = true;
  private form: SearchRequest = {
    user: '',
    region: ''
  };

  // method
  private handleSearch(form: SearchRequest): void {
    this.form = form;
    this.refreshTable(this.form, () => {
      (this.$refs.search as Search).setLoading(false);
    });
  }

  private handleOpenView(row: TableRow): void {
    this.routerPush('drawer/view', row.id, '查看');
  }

  private handleOpenEdit(row: TableRow): void {
    this.routerPush('drawer/edit', row.id, '编辑');
  }

  private routerPush(path: string, id: any, title: string): void {
    this.$router.push({
      path,
      query: {
        id,
        title
      }
    });
  }

  private setTableLoading(type: boolean) {
    this.loading = type;
  }

  private refreshTable(data: object = this.form, complete?: any) {
    this.setTableLoading(true);
    getTableList(data, complete)
      .then((res: ResponseInfo) => {
        this.tableData = res.data;
        this.setTableLoading(false);
      })
      .catch(() => {
        this.tableData = [];
        this.setTableLoading(false);
      });
  }

  private bindBusEvent() {
    this.$bus.$on('refreshTable', (params: any) => {
      this.refreshTable(params);
    });
  }

  created(): void {
    this.bindBusEvent();
    this.refreshTable();
  }

  destroy() {
    this.$bus.$off('refreshTable');
  }
}
</script>
