<template>
<tr>
  <td colspan="5" class="text-center">
    <button type="button" class="btn btn-dark">My id is {{ item.id }}</button>
  </td>
</tr>
</template>

<script>
export default {
  name: "ButtonRow",
  props: {
    item: Object
  }
}
</script>

<style scoped>

</style>