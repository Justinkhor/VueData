<template>
    <div class="row">
      <div class="col-6">
        <h2>{{ $route.params.name }}</h2>
        <student></student>

        <br>
        <table class="table table-hover">
          <thead>
            <tr style="background-color: #888">
                <th scope="col">Term 1</th>
            </tr>
          </thead>

          <tbody class="accordion-item">
              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="true" aria-controls="collapse10">Mistakes 1A</td>
              </tr>
              <tr id="collapse10" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term1.MistakeS1A" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">Mistakes 1B</td>
              </tr>
              <tr id="collapse11" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term1.MistakeS1B" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="true" aria-controls="collapse12">Mistakes 2</td>
              </tr>
              <tr id="collapse12" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term1.MistakeS2" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="true" aria-controls="collapse13">Scores 1A</td>
              </tr>
              <tr id="collapse13" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term1.ScoreS1A" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="true" aria-controls="collapse14">Scores 1B</td>
              </tr>
              <tr id="collapse14" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term1.ScoreS1B" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="true" aria-controls="collapse15">Scores 2</td>
              </tr>
              <tr id="collapse15" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term1.ScoreS2" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>
          </tbody>
        </table>
        <br>

        <table class="table table-hover">
          <thead>
            <tr style="background-color: #888">
                <th scope="col">Term 2</th>
            </tr>
          </thead>

          <tbody class="accordion-item">
              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse20" aria-expanded="true" aria-controls="collapse20">Mistakes 1A</td>
              </tr>
              <tr id="collapse20" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term2.MistakeS1A" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="true" aria-controls="collapse21">Mistakes 1B</td>
              </tr>
              <tr id="collapse21" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term2.MistakeS1B" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="true" aria-controls="collapse22">Mistakes 2</td>
              </tr>
              <tr id="collapse22" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term2.MistakeS2" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse23" aria-expanded="true" aria-controls="collapse23">Scores 1A</td>
              </tr>
              <tr id="collapse23" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term2.ScoreS1A" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse24" aria-expanded="true" aria-controls="collapse24">Scores 1B</td>
              </tr>
              <tr id="collapse24" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term2.ScoreS1B" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse25" aria-expanded="true" aria-controls="collapse25">Scores 2</td>
              </tr>
              <tr id="collapse25" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term2.ScoreS2" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>
          </tbody>
        </table>
        <br>

        <table class="table table-hover">
          <thead>
            <tr style="background-color: #888">
                <th scope="col">Term 3</th>
            </tr>
          </thead>

          <tbody class="accordion-item">
              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse30" aria-expanded="true" aria-controls="collapse30">Mistakes 1A</td>
              </tr>
              <tr id="collapse30" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term3.MistakeS1A" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse31" aria-expanded="true" aria-controls="collapse31">Mistakes 1B</td>
              </tr>
              <tr id="collapse31" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term3.MistakeS1B" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse32" aria-expanded="true" aria-controls="collapse32">Mistakes 2</td>
              </tr>
              <tr id="collapse32" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Mistake Value</th>
                        <th class="text-center">Mistake Description</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="m in term3.MistakeS2" :key="m.id">
                        <mistake :questNum="m.question_num" :value="m.mistake_value" :desc="m.mistake_description" :diffLevel="m.difficulty_level"></mistake>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse33" aria-expanded="true" aria-controls="collapse33">Scores 1A</td>
              </tr>
              <tr id="collapse33" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term3.ScoreS1A" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse34" aria-expanded="true" aria-controls="collapse34">Scores 1B</td>
              </tr>
              <tr id="collapse34" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term3.ScoreS1B" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr class="accordion-header table-dark">
                <td class="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapse35" aria-expanded="true" aria-controls="collapse35">Scores 2</td>
              </tr>
              <tr id="collapse35" class="accordion-collapse collapse">
                <td class="accordion-body">
                  <table style="width: 100%">
                    <thead>
                      <tr style="background-color: #303030">
                        <th class="text-center">Question Number</th>
                        <th class="text-center">Subquestion Number</th>
                        <th class="text-center">Marks Given</th>
                        <th class="text-center">Max Score</th>
                        <th class="text-center">Difficulty Level</th>
                      </tr>
                    </thead>
                    <tbody v-for="s in term3.ScoreS2" :key="s.id">
                        <score :questNum="s.question_num" :subQuestNum="s.sub_question_num" :marksGiven="s.marks_given" :maxScore="s.max_score" :diffLevel="s.difficulty_level"></score>
                    </tbody>
                  </table>
                </td>
              </tr>
          </tbody>
        </table>
      </div>

      <div class="col-3">
        <!-- <button class="btn btn-dark" @click="updateCharts('m')">Mistakes</button>
         <button class="btn btn-dark" @click="updateCharts('s')">Scores</button> -->
        <div class="text-center">
          <br><br><br>
          <h3>&emsp;Term1 Mistakes</h3>
          <div id="chart1" :key="componentKey"></div>
          <br>
          <h3>&emsp;Term2 Mistakes</h3>
          <div id="chart2" :key="componentKey"></div>
          <br>
          <h3>&emsp;Term3 Mistakes</h3>
          <div id="chart3" :key="componentKey"></div>
        </div>
      </div>

      <div class="col-3">
        <div class="text-center">
          <br><br><br>
          <h3>&emsp;Term1 Scores</h3>
          <div id="chart4" :key="componentKey"></div>
          <br>
          <h3>&emsp;Term2 Scores</h3>
          <div id="chart5" :key="componentKey"></div>
          <br>
          <h3>&emsp;Term3 Scores</h3>
          <div id="chart6" :key="componentKey"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import * as d3 from "d3";
  import Student from '@/components/Student.vue';
  import Mistake from '@/components/Mistake.vue';
  import Score from '@/components/Score.vue';

  export default {
    components: {
      Student,
      Mistake,
      Score
    },

    data() {
      return {
        terms: [],
        term1: {},
        term2: {},
        term3: {},
        mistakes: {},
        scores: {},
        componentKey: 0
      }
    },

    methods: {
      makeChart(id, color, data) {
        let margin = {top: 30, right: 30, bottom: 70, left: 60}
        let width = 360 - margin.left - margin.right
        let height = 320 - margin.top - margin.bottom
        
        let svg = d3.select(id)
                    .append("svg")
                      .attr("width", width + margin.left + margin.right)
                      .attr("height", height + margin.top + margin.bottom)
                    .append("g")
                      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

        let x = d3.scaleBand()
                  .range([ 0, width ])
                  .domain(data.map(d => d[0]))
                  .padding(0.6)
                  
        let y = d3.scaleLinear()
                  .domain([0, d3.max(data, d => d[1] + 1)])
                  .range([ height, 0])

        svg.append("g")
          .style("font", "12px poppins")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).tickSizeOuter(0))
          .selectAll("text")

        svg.append("g")
          .style("font", "12px poppins")
          .call(d3.axisLeft(y).tickSizeOuter(0))

        svg.selectAll("mybar")
          .data(data)
          .enter()
          .append("rect")
            .attr("x", d => x(d[0]))
            .attr("y", d => y(d[1]))
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d[1]); })
            .attr("fill", color)

        svg.append("text")
          .style("font", "14px poppins")
          .attr("fill", "#FFFFFF")
          .attr("text-anchor", "end")
          .attr("transform", "rotate(-90)")
          .attr("y", -margin.left + 20)
          .attr("x", -margin.top - 60)
          .text("Total")
      }
    },

    mounted(){
      let self = this

      Promise.all([
        d3.csv(`/data/term1/Mistake_${this.$route.params.name}S1A.csv`),
        d3.csv(`/data/term1/Mistake_${this.$route.params.name}S1B.csv`),
        d3.csv(`/data/term1/Mistake_${this.$route.params.name}S2.csv`),
        d3.csv(`/data/term1/Score_${this.$route.params.name}S1A.csv`),
        d3.csv(`/data/term1/Score_${this.$route.params.name}S1B.csv`),
        d3.csv(`/data/term1/Score_${this.$route.params.name}S2.csv`),
        d3.csv(`/data/term2/Mistake_${this.$route.params.name}S1A.csv`),
        d3.csv(`/data/term2/Mistake_${this.$route.params.name}S1B.csv`),
        d3.csv(`/data/term2/Mistake_${this.$route.params.name}S2.csv`),
        d3.csv(`/data/term2/Score_${this.$route.params.name}S1A.csv`),
        d3.csv(`/data/term2/Score_${this.$route.params.name}S1B.csv`),
        d3.csv(`/data/term2/Score_${this.$route.params.name}S2.csv`),
        d3.csv(`/data/term3/Mistake_${this.$route.params.name}S1A.csv`),
        d3.csv(`/data/term3/Mistake_${this.$route.params.name}S1B.csv`),
        d3.csv(`/data/term3/Mistake_${this.$route.params.name}S2.csv`),
        d3.csv(`/data/term3/Score_${this.$route.params.name}S1A.csv`),
        d3.csv(`/data/term3/Score_${this.$route.params.name}S1B.csv`),
        d3.csv(`/data/term3/Score_${this.$route.params.name}S2.csv`)
      ]).then(function(files){
        self.term1['MistakeS1A'] = files[0]
        self.term1['MistakeS1B'] = files[1]
        self.term1['MistakeS2'] = files[2]
        self.term1['ScoreS1A'] = files[3]
        self.term1['ScoreS1B'] = files[4]
        self.term1['ScoreS2'] = files[5]
        self.term2['MistakeS1A'] = files[6]
        self.term2['MistakeS1B'] = files[7]
        self.term2['MistakeS2'] = files[8]
        self.term2['ScoreS1A'] = files[9]
        self.term2['ScoreS1B'] = files[10]
        self.term2['ScoreS2'] = files[11]
        self.term3['MistakeS1A'] = files[12]
        self.term3['MistakeS1B'] = files[13]
        self.term3['MistakeS2'] = files[14]
        self.term3['ScoreS1A'] = files[15]
        self.term3['ScoreS1B'] = files[16]
        self.term3['ScoreS2'] = files[17]
        
        self.terms = [self.term1, self.term2, self.term3]

        let ts = ["t1", "t2", "t3"]
        for (let term in self.terms){
          let mt = {}
          let sc = {}
          for (let key in self.terms[term]) {
            let sum = 0
            
            if (key.includes("Mistake")) {
              self.terms[term][key].forEach(m => { sum += +m.mistake_value })
              mt[key] = sum
            }

            else {
              self.terms[term][key].forEach(s => { sum += +s.marks_given })
              sc[key] = sum
            }
          }

          self.mistakes[ts[term]] = mt
          self.scores[ts[term]] = sc  
        }
        
        self.makeChart("#chart1", "#ec7d7f", Object.entries(self.mistakes.t1))
        self.makeChart("#chart2", "#ec7d7f", Object.entries(self.mistakes.t2))
        self.makeChart("#chart3", "#ec7d7f", Object.entries(self.mistakes.t3))
        self.makeChart("#chart4", "#69b3a2", Object.entries(self.scores.t1))
        self.makeChart("#chart5", "#69b3a2", Object.entries(self.scores.t2))
        self.makeChart("#chart6", "#69b3a2", Object.entries(self.scores.t3))
      })
    }
  };
</script>