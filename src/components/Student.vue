<template>
    <!-- Student Row -->
    <tr class="table-active" :for="id">
      <td :id="id"><router-link :to="{name: 'Student', params: { name: name }}">{{ name }}</router-link></td>
      <td class="text-center">{{ percentile }}</td>
    </tr>
</template>

<script>
  export default {
    props: {
      id: { type: String },
      name: { type: String },
      percentile: { type: Number },
      term1: { type: Array },
      term2: { type: Array },
      term3: { type: Array }
    },
    
    data() {
      return {
      };
    }
  };
</script>
