<template>
  <div class="table-responsive">
    <table class="table">
      <tbody>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
        <th>Header 4</th>
        <th>Header 5</th>
      </tr>
      <DataRow
        v-for="(item, i) in dummy"
        :key="`dummy-${i}`"
        :item="item"
      />
      <ButtonRow />
      </tbody>
    </table>
  </div>
</template>

<script>
import DataRow from "./DataRow";
import ButtonRow from "./ButtonRow";
export default {
  name: "MyTable",
  components: {
    DataRow,
    ButtonRow,
  },
  data() {
    return {
      dummy: [
        {
          prop1: "Row:1 Cell:1",
          prop2: "Row:1 Cell:2",
          prop3: "Row:1 Cell:3",
          prop4: "Row:1 Cell:4",
          prop5: "Row:1 Cell:5",
        },
        {
          prop1: "Row:2 Cell:1",
          prop2: "Row:2 Cell:2",
          prop3: "Row:2 Cell:3",
          prop4: "Row:2 Cell:4",
          prop5: "Row:2 Cell:5",
        },
        {
          prop1: "Row:3 Cell:1",
          prop2: "Row:3 Cell:2",
          prop3: "Row:3 Cell:3",
          prop4: "Row:3 Cell:4",
          prop5: "Row:3 Cell:5",
        },

      ]
    }
  }
}
</script>

<style scoped>

</style>