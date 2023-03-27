<template>
  <section>
      <div class="container">
          <form @submit.prevent="handleSubmit">
              <div class="form-group">
                  <label for="fullName">Full name:</label>
                  <input type="text" id="fullName" v-model="name" :rules="fullNameRules">
              </div>
              
              <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" v-model="email">
              </div>

              <div class="form-group">
                  <label for="massage">Massage:</label>
                  <textarea id="massage" rows="5" v-model="message"></textarea>
              </div>

              <button type="submit">Submit</button>
          </form>
      </div>

      <div>
          <p>Result</p>
          <p>Name: {{ name }}</p>
          <p>Email: {{ email }}</p>
          <p>Massage: {{ message }}</p>
      </div>
  </section>
</template>

<script>

export default {
data() {
    return {
        name: '',
        fullNameRules: [
        value => {
          if (value?.length > 3) return true

          return 'Full name must be at least 3 characters.'
        },
      ],
        email: '',
        message: ''
    }
},
methods: {
  handleSubmit() {
    let userMessage = {
      name: this.name,
      email: this.email,
      message: this.message
    }

    console.log(userMessage);

   
  }
}
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat";
}
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #00000033;
  border-radius: 8px;
}
.form-group {
  margin-top: 20px;
  font-size: 20px;
  color: #9e9e9e;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: 1px solid rgba(128, 128, 128, 0.199);
  margin-top: 5px;
}
textarea {
  resize: vertical;
}
button {
  width: 100%;
  border: none;
  padding: 20px;
  font-size: 24px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}
</style>