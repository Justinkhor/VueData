<template>
  <div class="row">
    <div class="col-6">
      <table class="table">
        <thead>
          <tr class="table-dark">
            <th scope="col">Name</th>
            <th class="text-center">Percentile</th>
          </tr>
        </thead>

        <tbody v-for="student in Students" :key="student.id">
          <student :name="student.name" :percentile="student.percentile" :id="student.id"></student>
        </tbody>
      </table>

      <br><br>

      <term></term>
      <mistake></mistake>
      <score></score>

    </div>

    <div class="col-6">
      <div class="text-center">
        <h3>&emsp;&emsp;&emsp;Student Percentiles</h3>
        <div id="chart"></div>
        <br>
        <div id="box"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Student from '@/components/Student.vue';
  import Term from '@/components/Term.vue';
  import Mistake from '@/components/Mistake.vue';
  import Score from '@/components/Score.vue';
  import uniqueId from 'lodash.uniqueid';
  import * as d3 from "d3";

  export default {
    components: {
      Student,
      Term,
      Mistake,
      Score
    },

    data() {
      return {
        Students: []
      };
    },

    methods: {
      makeBar(id, data) {
        d3.select("svg").remove()
        let margin = {top: 30, right: 30, bottom: 70, left: 60}
        let width = 700 - margin.left - margin.right
        let height = 420 - margin.top - margin.bottom

        // data.sort(function(b, a) {
        //   return a.percentile - b.percentile;
        // });

        let svg = d3.select(id)
                    .append("svg")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        
        let x = d3.scaleBand()
                  .range([ 0, width ])
                  .domain(data.map(d => d.name))
                  .padding(0.8)
                  
        let y = d3.scaleLinear()
                  .domain([0, 100])
                  .range([ height, 0])

        svg.append("g")
          .style("font", "12px poppins")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickSizeOuter(0))
          .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end")

        svg.append("g")
          .style("font", "12px poppins")
          .call(d3.axisLeft(y).tickSizeOuter(0))

        svg.selectAll("mybar")
          .data(data)
          .enter()
          .append("rect")
            .attr("x", d => x(d.name))
            .attr("y", d => y(d.percentile))
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d.percentile); })
            .attr("fill", "#6d90d4")

        svg.append("text")
          .style("font", "14px poppins")
          .attr("fill", "#FFFFFF")
          .attr("text-anchor", "end")
          .attr("transform", "rotate(-90)")
          .attr("y", -margin.left + 20)
          .attr("x", -margin.top - 60)
          .text("Percentile")
      }
    },

    mounted(){
      let self = this
      d3.csv('/data/namelist.csv').then(function(file){
        file.forEach(student => {
          let t1 = []
          let t2 = []
          let t3 = []
          
          Promise.all([
            d3.csv(`/data/term1/Mistake_${student.Name}S1A.csv`),
            d3.csv(`/data/term1/Mistake_${student.Name}S1B.csv`),
            d3.csv(`/data/term1/Mistake_${student.Name}S2.csv`),
            d3.csv(`/data/term1/Score_${student.Name}S1A.csv`),
            d3.csv(`/data/term1/Score_${student.Name}S1B.csv`),
            d3.csv(`/data/term1/Score_${student.Name}S2.csv`),
            d3.csv(`/data/term2/Mistake_${student.Name}S1A.csv`),
            d3.csv(`/data/term2/Mistake_${student.Name}S1B.csv`),
            d3.csv(`/data/term2/Mistake_${student.Name}S2.csv`),
            d3.csv(`/data/term2/Score_${student.Name}S1A.csv`),
            d3.csv(`/data/term2/Score_${student.Name}S1B.csv`),
            d3.csv(`/data/term2/Score_${student.Name}S2.csv`),
            d3.csv(`/data/term3/Mistake_${student.Name}S1A.csv`),
            d3.csv(`/data/term3/Mistake_${student.Name}S1B.csv`),
            d3.csv(`/data/term3/Mistake_${student.Name}S2.csv`),
            d3.csv(`/data/term3/Score_${student.Name}S1A.csv`),
            d3.csv(`/data/term3/Score_${student.Name}S1B.csv`),
            d3.csv(`/data/term3/Score_${student.Name}S2.csv`)
          ]).then(function(files){
            let t1m1a = []
            let t1m1b = []
            let t1m2 = []
            let t1s1a = []
            let t1s1b = []
            let t1s2 = []
            let t2m1a = []
            let t2m1b = []
            let t2m2 = []
            let t2s1a = []
            let t2s1b = []
            let t2s2 = []
            let t3m1a = []
            let t3m1b = []
            let t3m2 = []
            let t3s1a = []
            let t3s1b = []
            let t3s2 = []
            files[0].forEach(m => {t1m1a.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[1].forEach(m => {t1m1b.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[2].forEach(m => {t1m2.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[3].forEach(s => {t1s1a.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[4].forEach(s => {t1s1b.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[5].forEach(s => {t1s2.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[6].forEach(m => {t2m1a.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[7].forEach(m => {t2m1b.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[8].forEach(m => {t2m2.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[9].forEach(s => {t2s1a.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[10].forEach(s => {t2s1b.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[11].forEach(s => {t2s2.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[12].forEach(m => {t3m1a.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[13].forEach(m => {t3m1b.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[14].forEach(m => {t3m2.push({ questNum: m.question_num, id: m.mistake_id, value: m.mistake_value })})
            files[15].forEach(s => {t3s1a.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[16].forEach(s => {t3s1b.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            files[17].forEach(s => {t3s2.push({ questNum: s.question_num, marksGiven: s.marks_given, maxScore: s.max_score })})
            t1.push({ mistakes1A: t1m1a, mistakes1B:t1m1b, mistakes2: t1m2, scores1A: t1s1a, scores1B: t1s1b, scores2: t1s2 })
            t2.push({ mistakes1A: t2m1a, mistakes1B:t2m1b, mistakes2: t2m2, scores1A: t2s1a, scores1B: t2s1b, scores2: t2s2 })
            t3.push({ mistakes1A: t3m1a, mistakes1B:t3m1b, mistakes2: t3m2, scores1A: t3s1a, scores1B: t3s1b, scores2: t3s2 })
            
            let terms = [t1, t2, t3]
            let total = 0
            let score = 0
            let per = 0

            for (let term in terms) {
              for (let record in terms[term][0]) {
                if (terms[term][0][record].length < 30) {
                  for (let row in terms[term][0][record]) {
                    if (terms[term][0][record][row].marksGiven !== undefined) {
                      score += +terms[term][0][record][row].marksGiven
                      total += +terms[term][0][record][row].maxScore
                    }
                  }
                }
              }
            }

            per = Math.round((score/total) * 100)
            self.Students.push({ 
              id: uniqueId('student-'), 
              name: student.Name, 
              percentile: per, 
              term1: t1,
              term2: t2,
              term3: t3
            })
          })
        })
      })

      
      
    },

    updated() {
      this.makeBar("#chart", this.Students)

    }
  };
</script>