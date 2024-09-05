<template>
  <q-page class="flex flex-center column">
    <div
      class="row bg-blue-grey-4"
      style="min-height: 500px; width: 80%; padding: 24px"
    >
      <div
        id="getstartcontainer"
        class="full-width row justify-around items-start content-start"
        style="overflow: hidden"
      >
        <div class="col-6" style="overflow: auto">
          <q-card class="no-border-radius bg-red">
            <q-card-section>
              <p>Let's get started!</p>
              <p>
                We make it easier for you. Answer few questions and we get the
                report ready. Hassle free!
              </p>
              <li>Fast</li>
              <li>Efficient</li>
              <li>Reliable</li>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-5" style="overflow: auto">
          <q-card class="no-border-radius bg-pink">
            <q-card-section>
              <q-form @submit="submitRegisterForm" @reset="resetRegisterForm">
                <q-input
                  v-model="registerData.register_ssm_no"
                  label="ssm no"
                  type="text"
                  required
                />
                <q-input
                  v-model="registerData.register_company_name"
                  label="company name"
                  type="text"
                  required
                />
                <q-input
                  v-model="registerData.register_company_email"
                  label="company email"
                  type="email"
                  required
                />
                <q-input
                  v-model="registerData.register_phoneno"
                  label="phone number"
                  type="text"
                  required
                />
                <q-input
                  v-model="registerData.register_password"
                  label="password"
                  type="password"
                  required
                />

                <div class="q-mt-lg column content-stretch justify-center">
                  <q-btn
                    type="submit"
                    label="Sign Up"
                    color="primary"
                    rounded
                  />
                  <p
                    style="text-align: center; padding-top: 10px; color: beige"
                  >
                    or
                  </p>
                  <q-btn
                    label="Sign In"
                    color="secondary"
                    rounded
                    @click="showDialog = true"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <q-dialog v-model="showDialog">
      <q-card style="min-width: 40vw; min-height: 40vh; text-align: center">
        <q-card-section>
          <div class="text-h6">Sign In</div>
        </q-card-section>

        <q-card-section>
          <q-form @submit="submitLoginForm" @reset="resetLoginForm">
            <q-input
              v-model="loginForm.login_ssm_no"
              label="ssm no"
              type="text"
              required
            />
            <q-input
              v-model="loginForm.login_company_email"
              label="company email"
              type="email"
              required
            />
            <q-input
              v-model="loginForm.login_password"
              label="password"
              type="password"
              required
            />

            <div class="q-mt-md column">
              <q-btn type="submit" label="Login" color="primary" rounded />
              <q-btn
                type="reset"
                label="Reset"
                color="secondary"
                rounded
                flat
              />
            </div>
          </q-form>
        </q-card-section>

        <!-- <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" v-close-popup />
          </q-card-actions> -->
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script async setup>
import { api } from "src/boot/axios";

defineOptions({
  name: "StartPage",

  data() {
    return {
      showDialog: false,
      registerData: {
        register_ssm_no: "",
        register_company_name: "",
        register_company_email: "",
        register_phoneno: "",
        register_password: "",
      },
      loginForm: {
        login_ssm_no: "",
        login_company_email: "",
        login_password: "",
      },
      loginResp: null,
    };
  },

  methods: {
    async submitRegisterForm() {
      console.log("Form submitted:", this.registerData);
      this.showDialog = false;
      this.resetRegisterForm();
      this.$router.push({
        path: "/dashboard",
        // query: { key: value }
      });
    },
    resetRegisterForm() {
      this.registerData = {
        register_ssm_no: "",
        register_company_name: "",
        register_company_email: "",
        register_phoneno: "",
        register_password: "",
      };
    },

    async submitLoginForm() {
      console.log("Form submitted:", this.loginForm);
      this.showDialog = false;

      await api
        .post("/auth/login", {
          company_email: this.loginForm.login_company_email,
          password: this.loginForm.login_password,
        })
        .then((resp) => {
          this.loginResp = resp.data;
          console.log(this.loginResp);
          this.$router.push({
            path: "/dashboard",
            // query: { key: value }
          });
        })
        .catch((err) => {
          console.log(err, "-axios-err");
        });
      this.resetLoginForm();
    },
    resetLoginForm() {
      this.loginForm = {
        login_ssm_no: "",
        login_company_email: "",
        login_password: "",
      };
    },
  },
});
</script>
