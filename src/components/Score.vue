<template>
    <!-- Score Row -->
    <tr class="table-active">
      <td class="text-center">{{ questNum }}</td>
      <td class="text-center">{{ subQuestNum }}</td>
      <td class="text-center">{{ marksGiven }}</td>
      <td class="text-center">{{ maxScore }}</td>
      <td class="text-center">{{ diffLevel }}</td>
    </tr>
</template>

<script>
  export default {
    props: {
      questNum: { type: String },
      subQuestNum: { type: String },
      methodEval: { type: String },
      accEval: { type: String },
      marksGiven: { type: String },
      maxScore: { type: String },
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