<template>
  <tr>
    <td>{{ item.prop1}}</td>
    <td>{{ item.prop2 }}</td>
    <td>{{ item.prop3 }}</td>
    <td>{{ item.prop4 }}</td>
    <td>{{ item.prop5 }}</td>
  </tr>
</template>

<script>
export default {
  name: "DataRow",
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>