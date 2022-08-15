<template>
  <div class="form">
    <form>
      <v-text-field
          v-model="employee.firstName"
          :error-messages="nameErrors"
          :counter="10"
          label="First Name"
          required
      ></v-text-field>
      <v-text-field
          v-model="employee.lastName"
          :error-messages="nameErrors"
          :counter="10"
          label="Last Name"
          required
      ></v-text-field>
      <v-text-field
          v-model="employee.email"
          :error-messages="emailErrors"
          label="E-mail"
          required
      ></v-text-field>

      <v-btn
          class="mr-4"
          @click="back"
      >
        Back
      </v-btn>
      <v-btn @click="submit">
        submit
      </v-btn>

    </form>
    <br>
    <br>

  </div>
</template>

<script>
import axios from 'axios';

export default {

  name: "FormCreate",

  props: {
    employeeId: String,
  },

  data() {
    return {
      employee: {},
    }
  },

  computed: {
    isEditingEmployee() {
      return this.employeeId !== 'new';
    },
  },

  watch: {
    employeeId: {
      async handler() {
        if (this.isEditingEmployee) {
          await this.getEmployeeById();
        } else {
          this.employee = {};
        }
      },

      immediate: true,
    }
  },

  methods: {

    async getEmployeeById() {
      try {
        const resp = await axios.get("http://localhost:8090/api/v1/employees/" + this.employeeId);
        console.log(resp.data )
        this.employee = resp.data;
      } catch (e) {
        console.log(e)
      }

    },
    submit(){
      if(!this.isEditingEmployee){
        this.addItem()
      } else {
        this.updateItem()
      }
    },

    async updateItem() {
      try {
        const updateEmployee = await axios.put("http://localhost:8090/api/v1/employees/" + this.employeeId, this.employee);
        console.log(updateEmployee)
      }catch (e) {
        console.log(e)
      }
    },

    async addItem() {
      try {
        const addEmployee = await axios.post("http://localhost:8090/api/v1/employees",
            {
              firstName: this.employee.firstName,
              lastName: this.employee.lastName,
              email: this.employee.email
            }
        )
        console.log(addEmployee)
      } catch (e) {
        console.log(e)
      }
    },
  },

}

</script>

<style scoped>
.form {
  width: 50%;
  margin: auto;
  padding: 5% 0;
}
</style>