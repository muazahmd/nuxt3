<template>
  <div id="app" class="container">
    <h1>User Form</h1>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-6">
          <div class="form-group">
            <label for="name">First Name:</label>
            <input type="text" required id="name" class="form-control" v-model="formData.fname" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="name">Last Name:</label>
            <input type="text" required id="name" class="form-control" v-model="formData.lname" />
          </div>
        </div>

        <div class="col-6">
          <div class="form-group">
            <label for="email">Father Name:</label>
            <input type="text" required id="email" class="form-control" v-model="formData.father_name" />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" required id="email" class="form-control" v-model="formData.email" />
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="selectField">Education:</label>
        <select required style="border-radius: 0%" v-model="formData.education" id="selectField" class="form-control">
          <option value="">Choose an option...</option>
          <option value="Master">Master</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Matric">Matric</option>
        </select>
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <textarea required id="address" class="form-control" v-model="formData.address" rows="4"></textarea>
      </div>


      <button style="border-radius: 0%" type="submit" class="btn btn-primary my-4">
        {{ isStatusMode == 'insert' ? "Submit" : "Update" }}
      </button>

      <button @click="clear" v-if="isStatusMode == 'update'" style="border-radius: 0%;margin-left:2px" type="submit"
        class="btn btn-primary my-4">
        Clear
      </button>
    </form>

    <UserTable  @deleteUser="deleteUser" @editUser="updateUser"/>

    <!-- <div class="overflow-auto">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">F Name</th>
            <th scope="col">F Last</th>
            <th scope="col">Father Name</th>
            <th scope="col">Education</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userStore.users" :key="user._id">
            <td>{{ user.fname }}</td>
            <td>{{ user.lname }}</td>
            <td>{{ user.father_name }}</td>
            <td>{{ user.education }}</td>

            <td>{{ user.email }}</td>
            <td>{{ user.address }}</td>
            <td>
              <a class="btn" @click="updateUser(user._id)">
                <Icon name="fa6-regular:pen-to-square" />
              </a>
              <a class="btn" @click="deleteUser(user._id)">

                <Icon name="fa6-regular:trash-can" />


              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script setup >
import { ref } from 'vue'

let isStatusMode = ref('insert');
let formData = ref({
  fname: "",
  lname: "",
  father_name: "",
  education: "",
  email: "",
  address: "",
  _id: "",
});

const userStore = useUserStore();

onMounted(() => {
  userStore.getAll();
});

const submitForm = (async (event) => {
  event.preventDefault();
  if (isStatusMode.value == "insert")
    await userStore.create(formData.value)
  else
    await userStore.update(formData.value._id, formData.value)

  clear()
})

const updateUser = (async (id) => {
  formData.value = await userStore.getById(id)
  isStatusMode.value = "update"
});

const clear = (() => {
  formData.value = {
    fname: '',
    lname: '',
    father_name: '',
    email: '',
    address: '',
    _id: ''
  };
  isStatusMode.value = "insert"

});

const deleteUser = (async (id) => {
  await userStore.remove(id)
})
</script>
