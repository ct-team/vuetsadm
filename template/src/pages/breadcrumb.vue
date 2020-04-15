<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">TypeScript</el-breadcrumb-item>
        <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Breadcrumb extends Vue {}
</script>
