<template>
    <div class="form-container">
      <div class="form-box">
        <h1>Enter the required details</h1>
        <form @submit.prevent="submitForm">
          <div class="form-section">
            <h2>Enter the Question</h2>
            <textarea id="question" name="question" placeholder="Enter the question" v-model.trim.lazy="formSolutions.question"></textarea>
          </div>
          <div class="form-section">
            <h2>Enter the Options</h2>
            <input type="text" id="option1" name="option1" placeholder="Option - 1" v-model.trim.lazy="formSolutions.option1">
            <input type="text" id="option2" name="option2" placeholder="Option - 2" v-model.trim.lazy="formSolutions.option2">
            <input type="text" id="option3" name="option3" placeholder="Option - 3" v-model.trim.lazy="formSolutions.option3">
            <input type="text" id="option4" name="option4" placeholder="Option - 4" v-model.trim.lazy="formSolutions.option4">
          </div>
          <div class="form-section">
            <h2>Select the Correct Answer</h2>
            <select id="correctanswer" v-model="formSolutions.correctanswer">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <button type="submit">Submit</button><br><br>
          <button type="button" @click.prevent="display">View</button>
        </form>
      </div>
    </div>
  <!--to display in form page itself-->
    <div id="reference" v-show="showing">
      <h2>Reference</h2>
      <p>Question: {{ formSolutions.question }}</p>
      <p>Option 1: {{ formSolutions.option1 }}</p>
      <p>Option 2: {{ formSolutions.option2 }}</p>
      <p>Option 3: {{ formSolutions.option3 }}</p>
      <p>Option 4: {{ formSolutions.option4 }}</p>
      <p>Correct Answer: {{ formSolutions.correctanswer }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formSolutions: {
          question: '',
          option1: '',
          option2: '',
          option3: '',
          option4: '',
          correctanswer: ''
        },
        showing: false
      }
    },
    methods: {
      submitForm() {
        // storing  form data to the console
        console.log("Question:", this.formSolutions.question);
        console.log("Option 1:", this.formSolutions.option1);
        console.log("Option 2:", this.formSolutions.option2);
        console.log("Option 3:", this.formSolutions.option3);
        console.log("Option 4:", this.formSolutions.option4);
        console.log("Correct Answer:", this.formSolutions.correctanswer);
  
        // this hides data while clicking submit button
        this.showing = false;
      },
      // this displays data while clicking view button
      display() {
        this.showing = !this.showing;
      }
    }
  }
  </script>
  
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f1f1f1;
  }
  
  .form-box {
    width: 400px;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    color: #333333;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .form-section {
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 18px;
    color: #555555;
    margin-bottom: 10px;
  }
  
  textarea,
  input[type="text"],
  select {
    width: 100%;
    padding: 15px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  button[type="submit"],
  button[type="button"] {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    background-color: #3498db;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #2980b9;
  }
  </style>
  