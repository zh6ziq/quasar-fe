<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary">
      <q-toolbar>
        <q-toolbar-title>Meow Meow</q-toolbar-title>

        <div>
          <!-- <q-tabs shrink>
            <q-route-tab name="register" label="Register" to="/" />
            <q-route-tab name="login" label="Login" to="/contact" />
          </q-tabs> -->
          <q-btn to="/get-started" label="Get Started" flat rounded />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />

      <q-footer>
        <q-card square class="bg-dark">
          <q-card-section class="flex flex-center">
            <q-item-label>This is footer</q-item-label>
          </q-card-section>
        </q-card>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
    };
  },
};
</script>

<style></style>
