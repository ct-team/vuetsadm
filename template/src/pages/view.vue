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
                {{ formData.date }}
            </el-form-item>
            <el-form-item label="姓名">
                {{ formData.name }}
            </el-form-item>
            <el-form-item label="地址">
                {{ formData.address }}
            </el-form-item>
        </el-form>
    </dart-slide>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { FormInfo, ResponseInfo } from '@/types';
import { getViewData } from '@/api';

@Component({})
export default class Home extends Vue {
    // data
    private slideLoading = false;
    private slideVisible = true;
    private slideTitle = '查看';

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

    private async getViewInfo() {
        this.setSlideLoading(true);
        const ret: ResponseInfo = await getViewData(+this.id);

        this.formData = ret.data;
        this.setSlideLoading(false);
    }

    public setSlideLoading(type: boolean): void {
        this.slideLoading = type;
    }

    created(): void {
        this.getViewInfo();
    }
}
</script>
