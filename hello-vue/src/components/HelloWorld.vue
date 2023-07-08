<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ helloMessage }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      helloMessage: '',
    };
  },
  props: {
    msg: String,
  },
  mounted() {
    // Grabbing the file we used to export globally to get the function we created then getting a response
    this.$hello_api.getHelloMessage().then((resp) => {
      // Our message string will equal to this response we are requesting
      this.helloMessage = resp.message;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
