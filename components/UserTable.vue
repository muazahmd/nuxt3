<template>
  <div class="overflow-auto">
      <table class="table">
        <thead>
          <tr>
            <!-- <th scope="col">Id</th> -->
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
            <!-- <th scope="row">{{ user._id }}</th> -->
            <td>{{ user.fname }}</td>
            <td>{{ user.lname }}</td>
            <td>{{ user.father_name }}</td>
            <td>{{ user.education }}</td>

            <td>{{ user.email }}</td>
            <td>{{ user.address }}</td>
            <td>
              <a class="btn" @click="editUser(user._id)">
                <Icon name="fa6-regular:pen-to-square" />
              </a>
              <a class="btn" @click="deleteUser(user._id)">

                <Icon name="fa6-regular:trash-can" />


              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
const userStore = useUserStore();

onMounted(() => {
  userStore.getAll();
});

const emit = defineEmits(['editUser', 'deleteUser']);

function deleteUser(id) {
  emit("deleteUser", id)
}
function editUser(id) {

  emit("editUser", id)
}
</script>