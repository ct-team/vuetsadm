<template>
  <el-drawer
    :title="title"
    :visible.sync="drawer"
    direction="rtl"
    size="50%"
    @closed="handleClose"
  >
    <router-view @close-drawer="closeDrawer"></router-view>
  </el-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Drawer extends Vue {
  // data
  private drawer = false;

  get title() {
    return this.$route.query.title;
  }

  closeDrawer() {
    this.drawer = false;
  }
  handleClose() {
    this.$router.push('/');
  }

  mounted() {
    this.drawer = true;
  }
}
</script>
