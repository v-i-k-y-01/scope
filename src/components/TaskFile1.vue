
<template>
    <div class="quiz-container">
      <h1>Quiz Application</h1>
      <router-link to="/TaskFile2"><button @click="addQuiz">Add Quiz</button></router-link>
      <button @click="viewQuiz">View Quiz</button>
      <div v-if="message">
        <p>{{ message }}</p>
        </div>
        </div>
  </template>
    
  <script>
  export default {
   data() {
      return {
        message: ' '
      };
    },
    methods: {
      addQuiz() {
  
        this.message = 'Add Quiz button clicked!';
  
      },
      viewQuiz() {
        this.message = 'View Quiz button clicked!';
      }
    }
  };
  </script>
    
  <style scoped>
  .quiz-container {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin: 5px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>