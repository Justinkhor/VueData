<template>
    <!-- Mistake Row -->
    <tr class="table-active">
      <td class="text-center">{{ questNum }}</td>
      <td class="text-center">{{ value }}</td>
      <td class="text-center">{{ desc }}</td>
      <td class="text-center">{{ diffLevel }}</td>
    </tr>
</template>

<script>
  export default {
    props: {
      questNum: { type: String },
      id: { type: String },
      desc: { type: String },
      value: { type: String },
      diffLevel: { type: String },
      topic1: { type: String },
      topic2: { type: String },
      subTopic1: { type: String },
      subTopic2: { type: String },
      subSubTopic1: { type: String },
      subSubTopic2: { type: String }
    },
    
    data() {
      return {
      };
    }
  };
</script>