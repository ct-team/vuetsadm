<template>
    <div class="app-wrapper">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style scoped>
.app-wrapper {
    position: relative;
    padding: 10px;
    box-sizing: border-box;
}
</style>
