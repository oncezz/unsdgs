<template>
  <div>
    <!-- mobile -->
    <div class="mobile-only lt-sm">
      <!-- header  -->

      <div class="headerMobile row items-center" style="z-index: 999">
        <div
          class="col-4 cursor-pointer"
          align="center"
          style=""
          @click="goHome()"
        >
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
      <div style="height: 50px"></div>
      <!-- end header  -->
      <div class="topBar row textWhite">
        <div class="col q-pt-sm q-pl-md">
          <div class="font18">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font14 textWhite">
            Learn about how to make trade works for all and environment<br />
          </div>
          <div class="font24 q-pt-md">Sign up</div>
          <div class="font18 fontU q-pt-sm" @click="goBack()">
            back to course content page
          </div>
        </div>
      </div>
      <!-- content  -->
      <div>
        <div class="q-pt-md" style="padding-left: 46px; padding-right: 61px">
          <div class="q-gutter-md" style="">
            <q-input class="" v-model="userData.username" label="Username" />
          </div>
        </div>
        <div class="q-pt-md" style="padding-left: 46px; padding-right: 61px">
          <div class="q-gutter-y-md column">
            <q-input
              v-model="userData.password"
              label="Password"
              hint="The password must have at least 6 characters."
            >
            </q-input>
          </div>
        </div>
        <div class="q-pt-md" style="padding-left: 46px; padding-right: 61px">
          <div class="q-gutter-md" style="">
            <q-input class="" v-model="userData.email" label="Email address" />
          </div>
          <div class="q-gutter-md" style="">
            <q-input
              class=""
              v-model="confirmEmail"
              label="Confirm email address"
            />
          </div>
          <div class="q-gutter-md" style="">
            <q-input class="" v-model="userData.firstName" label="First name" />
          </div>
          <div class="q-gutter-md" style="">
            <q-input class="" v-model="userData.surName" label="Surname" />
          </div>
          <div class="q-gutter-md" style="">
            <q-input class="" v-model="userData.city" label="City/Town" />
          </div>
          <div class=""></div>
        </div>
        <div>
          <q-select
            class="q-pt-md"
            style="padding-left: 46px; padding-right: 61px"
            label="Country"
            v-model="userData.country"
            :options="countryOptions"
          />
        </div>
        <div>
          <q-select
            class="q-pt-md"
            style="padding-left: 46px; padding-right: 61px"
            label="Gender"
            v-model="userData.gender"
            :options="genderOptions"
          />
        </div>
        <div class="q-pt-md" style="padding-left: 46px; padding-right: 61px">
          <div class="q-gutter-md" style="">
            <q-input class="" v-model="userData.jobTitle" label="Job title" />
          </div>
          <div>
            <div class="q-gutter-md" style="">
              <q-input
                class=""
                v-model="userData.organization"
                label="Organization"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- end content  -->
      <!-- button  -->
      <div>
        <div class="row q-pa-md justify-evenly q-mt-md">
          <div class="cancelBtmMobile" align="center">Cancel</div>
          <div class="signupBtnMobile" align="center">Sign up</div>
        </div>
      </div>

      <!-- bottom -->
      <div class="endMobile q-mt-lg row items-center">
        <div class="col-4" align="center">
          <img
            src="../../public/image/logoMobile.svg"
            alt=""
            style="width: 94px; padding-top: 6px"
          />
        </div>
        <div class="col"></div>
        <div class="col-1" style="width: 50px">
          <q-icon class="fab fa-facebook-square socialIconMobile"></q-icon>
        </div>
        <div class="col-1" style="width: 50px">
          <q-icon class="fab fa-twitter-square socialIconMobile"></q-icon>
        </div>
        <div class="col-1" style="width: 50px">
          <q-icon class="fab fa-instagram-square socialIconMobile"></q-icon>
        </div>
      </div>
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs orientation-portrait">หมุนหน้าจอ</div>
    <div class="mobile-only gt-xs orientation-landscape">
      <div class="headerTablet row items-center" style="z-index: 999">
        <div
          class="col-3 cursor-pointer"
          align="center"
          style=""
          @click="goHome()"
        >
          <img
            class="picHeadTablet"
            src="../../public/image/logoMobile.svg"
            alt=""
            style=""
          />
        </div>
        <div class="lineTablet"></div>
        <div class="col q-px-md font18" style="color: white">
          Trade and the sustainable development goals (SDGs)
        </div>
      </div>
      <div class="q-pa-md" style="height: 60px"></div>
      <!-- end header  -->
      <div class="topBar row textWhite">
        <div class="col q-pt-md q-pl-xl">
          <div class="font30">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font18 textWhite">
            Learn about how to make trade works for all and environment<br />
          </div>
          <div class="font24 fontB q-pt-md">Sign up</div>
          <div class="font18 fontU q-pt-sm" @click="goBack()">
            back to course content page
          </div>
        </div>
      </div>
      <!-- content  -->
      <div class="row font18 q-pt-lg">
        <div class="col-2"></div>
        <div class="col">
          <div class="row padBox">
            <div class="col-4 textB4input">Username</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.username"
              />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Password</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.password"
              />
              <div class="font14 q-pt-sm">
                The password must have at least 6 characters.
              </div>
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Email address</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.email"
              />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Confirm email address</div>
            <div class="col">
              <q-input class="inputBoxTablet" outlined v-model="confirmEmail" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">First name</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.firstName"
              />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Surname</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.surName"
              />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">City/Town</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.city"
              />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Country</div>
            <q-select
              class="inputBoxTablet"
              outlined
              v-model="userData.country"
              :options="countryOptions"
            />
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Gender</div>
            <q-select
              class="inputBoxTablet"
              outlined
              v-model="userData.gender"
              :options="genderOptions"
            />
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Job title</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.jobTitle"
              />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4 textB4input">Organization</div>
            <div class="col">
              <q-input
                class="inputBoxTablet"
                outlined
                v-model="userData.organization"
              />
            </div>
          </div>
        </div>

        <div class="col-1"></div>
      </div>
      <div class="row q-py-xl">
        <div class="col-2"></div>
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
      <div class="endTablet q-mt-lg row items-center">
        <div class="col-3" align="center">
          <img
            src="../../public/image/logoMobile.svg"
            alt=""
            style="width: 120px; padding-top: 6px"
          />
        </div>
        <div class="col"></div>
        <div class="col-1" style="width: 70px">
          <q-icon class="fab fa-facebook-square socialIconMobile"></q-icon>
        </div>
        <div class="col-1" style="width: 70px">
          <q-icon class="fab fa-twitter-square socialIconMobile"></q-icon>
        </div>
        <div class="col-1" style="width: 70px">
          <q-icon class="fab fa-instagram-square socialIconMobile"></q-icon>
        </div>
      </div>
    </div>
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
.inputBoxTablet {
  height: 50px;
  width: 400px;
}
.textB4input {
  line-height: 50px;
}
.inputBoxMobile {
  width: 257px;
  height: 0px;
}
.textMinput {
  line-height: 16px;
}
.cancelBtmMobile {
  width: 130px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
}
.signupBtnMobile {
  width: 130px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  background: #1976d2;
  color: white;
  border-radius: 5px;
}
</style>
