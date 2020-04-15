<template>
    <dart-table
        :data="data"
        :loading="loading"
        :columns="columns"
        :options="options"
    >
        <el-table-column
            label="操作"
            slot="operation"
            width="150"
            fixed="right"
        >
            <template slot-scope="scope">
                <el-button
                    icon="el-icon-document"
                    type="text"
                    size="small"
                    @click="handleView(scope.row)"
                    >查看</el-button
                >
                <el-button
                    icon="el-icon-edit"
                    type="text"
                    size="small"
                    @click="handleEdit(scope.row)"
                    >编辑</el-button
                >
            </template>
        </el-table-column>
    </dart-table>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Watch } from 'vue-property-decorator';
import { TableRow } from '@/types/index';
@Component
export default class Table extends Vue {
    // prop
    @Prop({ default: [] }) data!: Array<object>;

    // data
    private columns: Array<object> = [
        { prop: 'date', title: '日期', width: '180' },
        { prop: 'name', title: '姓名', width: '180' },
        { prop: 'address', title: '地址' },
        { slot: 'operation' }
    ];

    private loading = false;

    private options: object = {
        border: true
    };

    // methods
    private handleView(row: TableRow): void {
        this.openView(row);
    }

    public setTableLoading(type: boolean): void {
        this.loading = type;
    }

    selectable(row: any, index: number) {
        return index % 2 === 0 ? true : false;
    }

    @Emit('edit')
    private handleEdit(row: TableRow): TableRow {
        return row;
    }

    // Watch
    @Watch('data', { immediate: true })
    // eslint-disable-next-line
    onTableDataChanged(val: Array<object>, oldVal: Array<object>): void {
        oldVal = val;
    }

    // emit
    @Emit()
    openView(row: TableRow) {
        return row;
    }
}
</script>
