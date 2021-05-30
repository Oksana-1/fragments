<template>
  <div id="app">
    <div class="container my-4">
      <MyTable/>
    </div>
  </div>
</template>

<script>
import MyTable from "./components/MyTable";

export default {
  name: 'App',
  components: {
    MyTable
  }
}
</script>
