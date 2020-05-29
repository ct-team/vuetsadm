<template>
  <div>
    <Breadcrumb />
    <Search @search="handleSearch" ref="search" />
    <Table
      @open-view="handleOpenView"
      @edit="handleEdit"
      :data="tableData"
      ref="table"
    />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Breadcrumb from './breadcrumb.vue';
import Search from './search.vue';
import Table from './table.vue';
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

  private form: SearchRequest = {
    user: '',
    region: ''
  };

  @Watch('$route')
  // eslint-disable-next-line
    getPath(to: any, from: any) {
    // 监听路由变化,如果是从编辑页返回，触发刷新表格接口
    if (from.path === '/edit') {
      this.refreshTable();
    }
  }

  // method
  private handleSearch(form: SearchRequest): void {
    (this.$refs.search as Search).setLoading(false);
    this.form = form;
    this.refreshTable();
  }

  private handleOpenView(row: TableRow): void {
    this.routerPush('view', row.id);
  }

  private handleEdit(row: TableRow): void {
    this.routerPush('edit', row.id);
  }

  // eslint-disable-next-line
    private routerPush(path: string, id: any): void {
    this.$router.push({
      path,
      query: {
        id
      }
    });
  }

  private async refreshTable() {
    (this.$refs.table as Table).setTableLoading(true);
    const ret: ResponseInfo = await getTableList(this.form);

    this.tableData = ret.data;
    (this.$refs.table as Table).setTableLoading(false);
  }

  mounted(): void {
    this.refreshTable();
  }
}
</script>
