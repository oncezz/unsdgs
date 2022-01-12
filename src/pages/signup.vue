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
      <div class="q-px-xl">
        <div class="q-pt-md">
          <div class="q-gutter-md" style="">
            <q-input class="" v-model="userData.username" label="Username" />
          </div>
        </div>
        <div class="q-pt-md">
          <div class="q-gutter-y-md column">
            <q-input
              v-model="userData.password"
              label="Password"
              :type="isPwd ? 'password' : 'text'"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div
            v-show="userData.password != '' && !isUserPassword()"
            class="font12"
            style="color: #e75427"
          >
            The password must have 6-12 characters.
          </div>
          <div
            v-show="userData.password == ''"
            class="font12"
            style="color: #868686"
          >
            The password must have 6-12 characters.
          </div>
          <div
            v-show="userData.password != '' && isUserPassword()"
            class="font12"
            style="color: #e75427"
          >
            &nbsp;
          </div>
        </div>
        <div class="q-pt-sm">
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
            label="Country"
            v-model="userData.country"
            :options="countryOptions"
          />
        </div>
        <div>
          <q-select
            class="q-pt-md"
            label="Gender"
            v-model="userData.gender"
            :options="genderOptions"
          />
        </div>
        <div class="q-pt-md">
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
          <div class="signupBtnMobile" align="center" @click="createAccount()">
            Sign up
          </div>
        </div>
      </div>

      <!-- bottom -->
      <div class="endMobile q-mt-lg row items-center">
        <div class="col-4" align="center">
          <img
            src="../../public/image/logoMobile.svg"
            alt=""
            style="width: 107px; padding-top: 6px"
          />
        </div>
        <div class="col"></div>
        <div class="col-1" style="width: 35px">
          <q-icon class="fab fa-facebook-square socialIconMobile"></q-icon>
        </div>
        <div class="col-1" style="width: 35px">
          <q-icon class="fab fa-twitter-square socialIconMobile"></q-icon>
        </div>
        <div class="col-1" style="width: 35px">
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
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  /> </template
              ></q-input>
              <div
                v-show="userData.password != '' && !isUserPassword()"
                class="font14"
                style="color: #e75427"
              >
                The password must have 6-12 characters.
              </div>
              <div
                v-show="userData.password == ''"
                class="font14"
                style="color: #868686"
              >
                The password must have 6-12 characters.
              </div>
              <div
                v-show="userData.password != '' && isUserPassword()"
                class="font14"
                style="color: #e75427"
              >
                &nbsp;
              </div>
            </div>
          </div>
          <div class="row q-pt-sm">
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

        <div class="col-2"></div>
      </div>
      <div align="center">
        <div class="font18 q-py-xl row justify-center">
          <div class="cancelBtmPc font24" @click="goBack()">Cancel</div>
          <div class="q-pa-md"></div>
          <div
            class="createAccountBtnPc text-white font24"
            @click="createAccount()"
          >
            Create my new account
          </div>
        </div>
      </div>

      <!-- <div class="row q-py-xl">
        <div class="col-2 brx"></div>

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

        <div class="col-2 brx"></div>
      </div> -->
      <div class="endTablet q-mt-lg row items-center">
        <div class="col-3 q-pl-lg" align="left">
          <img
            src="../../public/image/logoMobile.svg"
            alt=""
            style="width: 160px; padding-top: 6px"
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
              <q-input
                class="inputBox"
                ref="passwordIncorect"
                outlined
                v-model="userData.password"
                :type="isPwd ? 'password' : 'text'"
                ><template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  /> </template
              ></q-input>

              <div
                v-show="userData.password != '' && !isUserPassword()"
                class="font14"
                style="color: #e75427"
              >
                The password must have 6-12 characters.
              </div>
              <div
                v-show="userData.password == ''"
                class="font14"
                style="color: #868686"
              >
                The password must have 6-12 characters.
              </div>
              <div
                v-show="userData.password != '' && isUserPassword()"
                class="font14"
                style="color: #e75427"
              >
                &nbsp;
              </div>
            </div>
          </div>

          <div class="row q-pt-sm">
            <div class="col-4">Email address</div>
            <div class="col">
              <q-input class="inputBox" outlined v-model="userData.email" />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Confirm email address</div>
            <div class="col">
              <q-input
                ref="confirmEmailInput"
                class="inputBox"
                outlined
                v-model="confirmEmail"
              />
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
            <div class="col">
              <q-select
                class="inputBox"
                outlined
                v-model="userData.country"
                :options="countryOptions"
              />
            </div>
          </div>
          <div class="row padBox">
            <div class="col-4">Gender</div>
            <div class="col">
              <q-select
                class="inputBox"
                outlined
                v-model="userData.gender"
                :options="genderOptions"
              />
            </div>
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
      <div class="row q-pt-xl">
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
      <div class="q-pt-md"></div>
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
import axios from "axios";
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
        country: "Afghanistan",
        gender: "Unspecified",
        jobTitle: "",
        organization: "",
      },
      confirmEmail: "",
      countryOptions: [],
      genderOptions: ["Female", "Male", "Unspecified"],
      isPwd: true,
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
        // let data = {
        //   label: element.name,
        //   code: element.code,
        // };
        let data = element.name;
        tempOptions.push(data);
      });
      this.countryOptions = tempOptions;
    },
    // ปุ่มสร้าง account ใหม่
    async createAccount() {
      //Check ว่ามีการใส่ input ทุกช่อง
      if (
        this.userData.username.trim().length == 0 ||
        this.userData.password.trim().length == 0 ||
        this.userData.email.trim().length == 0 ||
        this.userData.firstName.trim().length == 0 ||
        this.userData.surName.trim().length == 0 ||
        this.userData.city.trim().length == 0 ||
        this.userData.organization.trim().length == 0
      ) {
        this.redNotify("Need all field to input");
        return;
      }
      if (!this.isUserPassword()) {
        this.$refs.passwordIncorect.$el.focus();
        return;
      }
      //Check email กับ confirm email ว่าถูกต้อง
      if (this.userData.email != this.confirmEmail) {
        this.$refs.confirmEmailInput.$el.focus();

        this.redNotify("Email and confirm email do not match.");
        return;
      }
      //ทำการ ลงทะเบียน
      let url = this.serverpath + "fe_signup_registeruser.php";
      let res = await axios.post(url, JSON.stringify(this.userData));

      if (res.data == "username exists") {
        this.redNotify("Username exists");
        return;
      } else if (res.data == "email exists") {
        this.redNotify("Email exist");
        return;
      } else {
        this.greenNotify("Save complete");
        this.$router.push("/syllabus");
      }
    },
    // เช็คพาสเวิดให้มี 6-12 หลัก
    isUserPassword() {
      return (
        this.userData.password.length > 5 && this.userData.password.length < 13
      );
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
  padding-top: 42px;
  line-height: 50px;
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
.cancelBtmPc {
  width: 175px;
  height: 50px;
  line-height: 50px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
}
.createAccountBtnPc {
  width: 323px;
  height: 50px;
  line-height: 50px;
  background: #1976d2;
  border-radius: 10px;
}
</style>
