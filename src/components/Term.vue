<template>
    <!-- Term Row -->
    <tr class="table-active" :for="id">
      <td :id="id">{{ name }}</td>
      <td class="text-center">{{ percentile }}</td>
    </tr>
</template>

<script>
  export default {
    props: {
      number: { required: true, type: Number },
      mistakes1A: { type: Array },
      mistakes1B: { type: Array },
      mistakes2: { type: Array },
      scores1A: { type: Array },
      scores1B: { type: Array },
      scores2: { type: Array },
    },
    
    data() {
      return {
      };
    }
  };
</script>