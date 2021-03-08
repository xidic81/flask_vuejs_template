const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    hp: null,
    tipe: null
  },
  methods:{
    checkForm: function (e) {
      if (this.name && this.hp) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.hp) {
        this.errors.push('Phone required.');
      }

      e.preventDefault();
    }
  }
})
