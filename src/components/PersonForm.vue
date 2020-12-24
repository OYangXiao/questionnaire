<template>
  <table cellspacing="0" cellpadding="4">
    <thead>
      <tr>
        <th width="60">序号</th>
        <th class="name-column" width="100">被考评者</th>
        <th width="100">德（20）</th>
        <th width="100">智（15）</th>
        <th width="100">体（20）</th>
        <th width="100">美（30）</th>
        <th width="100">劳（15）</th>
        <th width="120">总分</th>
        <th width="80">备注</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(person, index) of persons" :key="person.name">
        <td>{{ index }}</td>
        <td class="name-column">{{ person.name }}</td>
        <td><input type="number" max="15" min="0" v-model="person.score.a" /></td>
        <td><input type="number" max="15" min="0" v-model="person.score.b" /></td>
        <td><input type="number" max="15" min="0" v-model="person.score.c" /></td>
        <td><input type="number" max="15" min="0" v-model="person.score.d" /></td>
        <td><input type="number" max="15" min="0" v-model="person.score.e" /></td>
        <td><input type="number" max="100" min="0" v-model="person.score.all" /></td>
        <td><button class="link-btn">备注</button></td>
      </tr>
    </tbody>
  </table>
</template>
<style lang="less" scoped>
.name-column {
  text-align: left;
}
tr{
  height: 40px;
}
thead {
  background-color: #ecebf1;
}
tbody{
  td{
    border-right: 1px solid;
    border-bottom: 1px solid;
    &:last-of-type{
      border-right: none;
    }
  }
}
input {
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
<script>
export default {
  props: ['persons'],
};
</script>
