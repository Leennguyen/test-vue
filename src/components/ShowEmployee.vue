<template>
  <div class="show">
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          First name
        </th>
        <th class="text-left">
          Last name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Action
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="data in data"
          :key="data"
      >
        <td>{{ data.firstName }}</td>
        <td>{{ data.lastName }}</td>
        <td>{{ data.email }}</td>
        <td>
          <v-btn
              class="mr-4"
              @click="updateItem(data.id)"
          >
            update
          </v-btn>
          <v-btn
              class="mr-4"
              @click="deleteItem(data.id)"
          >
            delete
          </v-btn>
        </td>
      </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowEmployee",

  data() {
    return {
      data: [],

    }
  },
  methods: {

    async addItem() {
      try {
        const addEmployee = await axios.post("http://localhost:8090/api/v1/employees",
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email
            }
        )
        console.log(addEmployee)
      } catch (e) {
        console.log(e)
      }

    },

  async getItem() {
    try {
      const employees = await axios.get("http://localhost:8090/api/v1/employees");
      this.data = employees.data;
    } catch (e) {
      console.log(e)
    }
  },
    async deleteItem(id) {
      let x = window.confirm("Delete this employee")
      try {
        if (x) {
          const deleteEmployee = await axios.delete("http://localhost:8090/api/v1/employees/" + id);
          this.data = deleteEmployee.data
          alert("Deleted")
        }

      } catch (e) {
        console.log(e)
      }
    },

    updateItem(id) {
      this.$router.push({
        name: 'employee',

        params: {
          employeeId: id,
        }
      });
    },

},
  created(){
    this.getItem();
  }
}
</script>

<style scoped>
.show{
  width: 50%;
  margin: auto;
  margin-top: 5%;
}
</style>