<template>
  <div>
    <p>This is a profile page</p>
    <edit-profile />
    <delete-profile />
    <logout-user />
  </div>
</template>

<script>
import EditProfile from "../components/EditProfile.vue";
import DeleteProfile from "../components/DeleteProfile.vue";
import LogoutUser from "../components/Logout.vue";

export default {
  name: "profile-page",

  components: {
    EditProfile,
    DeleteProfile,
    LogoutUser
  }
};
</script>

<style scoped></style>
