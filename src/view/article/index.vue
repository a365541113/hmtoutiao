<template>
<div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="状 态:">
        <el-radio-group v-model="form.resource">
          <el-radio label="all">全部</el-radio>
          <el-radio label="0">草稿</el-radio>
          <el-radio label="1">待审核</el-radio>
          <el-radio label="2">审核通过</el-radio>
          <el-radio label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="频 道:">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="Java" value="Java"></el-option>
          <el-option label="JS" value="JS"></el-option>
          <el-option label="css" value="css"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时 间:">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"

            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
      </el-form-item>
      <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
    </el-form>
  </el-card>
  <el-card>
      <div>123</div>
</el-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        status: null,
        region: '',
        type: [],
        resource: 'all'
      }
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  margin-bottom: 20px;
  /* height: 2000px; */
}

</style>
