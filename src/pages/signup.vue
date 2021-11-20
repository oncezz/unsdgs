<template>
  <div>
    <!-- mobile -->
    <div class="mobile-only lt-sm">
      <div class="headerMobile row items-center" style="z-index: 999">
        <div class="col-4" align="center" style="">
          <img
            class=""
            src="../../public/image/logoMobile.svg"
            alt=""
            style="width: 94px; padding-top: 6px"
          />
        </div>
        <div class="lineMobile"></div>
        <div class="col q-px-sm font14" style="color: white">
          Trade and the sustainable development goals (SDGs)
        </div>
      </div>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs orientation-portrait">หมุนหน้าจอ</div>
    <div class="mobile-only gt-xs orientation-landscape">Tablet</div>
    <!-- PC  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <div class="headerPC row items-center" style="z-index: 999">
        <div
          class="col-2 cursor-pointer"
          align="center"
          style=""
          @click="goHome()"
        >
          <img
            class="picHeadPC"
            src="../../public/image/logoMobile.svg"
            alt=""
            style=""
          />
        </div>
        <div class="linePC"></div>
        <div class="col q-px-lg font42" style="color: white">
          Trade and the sustainable development goals (SDGs)
        </div>
      </div>
      <div class="q-pa-md" style="height: 86px"></div>
      <!-- end header  -->

      <div class="topBar textWhite row">
        <div class="col q-pt-md q-pl-xl">
          <div class="font36">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font18 textWhite">
            Learn about how to make trade works for all and environment<br />
          </div>
          <div class="font24 q-pt-md">Sign up</div>
          <div class="font18 q-pt-xs cursor-pointer" @click="goBack()">
            <u>back to course content page</u>
          </div>
        </div>
        <div><img src="../../public/image/watermask.svg" alt="" /></div>
      </div>
      <!-- end top bar  -->
      <div class="row font18 q-pt-lg">
        <div class="col-3"></div>
        <div class="col">
          <div class="row padBox">
            <div class="col-4">Username</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.username" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Password</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.password" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Email address</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.email" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Confirm email address</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="confirmEmail" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">First name</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.firstName" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Surname</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.surName" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">City/Town</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.city" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Country</div>
            <q-select
              class="inputBox"
              outlined
              v-model="userData.country"
              :options="countryOptions"
            />
          </div>
          <div class="row padBox">
            <div class="col-4">Gender</div>
            <q-select
              class="inputBox"
              outlined
              v-model="userData.gender"
              :options="genderOptions"
            />
          </div>
          <div class="row padBox">
            <div class="col-4">Job title</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.jobTitle" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Organization</div>
            <div class="col">
              <q-input
                class="inputBox"
                outlined
                v-model="userData.organization"
              />
            </div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
      <div class="row q-py-xl">
        <div class="col-4"></div>
        <div
          class="cursor-pointer font24"
          style="
            width: 175px;
            height: 50px;
            border-radius: 10px;
            border: 1px solid #000000;
            line-height: 50px;
          "
          align="center"
          @click="goBack()"
        >
          Cancel
        </div>
        <div class="col-1"></div>
        <div
          class="cursor-pointer font24 textWhite"
          style="
            width: 320px;
            height: 50px;
            border-radius: 10px;
            background: #1976d2;
            line-height: 50px;
          "
          align="center"
          @click="createAccount()"
        >
          Create my new account
        </div>
        <div class="col"></div>
      </div>
      <div class="endPC q-mt-lg row items-center">
        <div class="col-2" align="center">
          <img
            src="../../public/image/logoMobile.svg"
            alt=""
            style="width: 170px; padding-top: 6px"
          />
        </div>
        <div class="col joinEnd" align="right">Join the conversation</div>
        <div class="col-1" style="width: 220px">
          <q-icon class="fab fa-facebook-square socialIconPC"></q-icon>
          <q-icon class="fab fa-twitter-square socialIconPC"></q-icon>
          <q-icon class="fab fa-instagram-square socialIconPC"></q-icon>
        </div>
      </div>
      <!-- ------- -->
    </div>
  </div>
</template>

<script>
import countryJson from "../../public/country_list.json";
export default {
  data() {
    return {
      userData: {
        username: "",
        password: "",
        email: "",
        firstName: "",
        surName: "",
        city: "",
        country: "",
        gender: "Undefined",
        jobTitle: "",
        organization: "",
      },
      confirmEmail: "",
      countryOptions: [],
      genderOptions: ["Female", "Male", "Undefined"],
    };
  },

  methods: {
    goBack() {
      this.$router.push("/syllabus");
    },
    goHome() {
      this.$router.push("/");
    },
    getCountryList() {
      let tempOptions = [];

      countryJson.forEach((element) => {
        let data = {
          label: element.name,
          code: element.code,
        };
        tempOptions.push(data);
      });
      this.countryOptions = tempOptions;
    },
    createAccount() {
      this.$q.notify({
        type: "positive",
        message: `Create new account complete.`,
      });
    },
  },
  mounted() {
    this.getCountryList();
  },
};
</script>

<style lang="scss" scoped>
.topBar {
  background-color: #33383d;
  width: 100%;
  height: 204px;
}
.padBox {
  padding-top: 30px;
}
.inputBox {
  height: 40px;
  width: 520px;
}
</style>
