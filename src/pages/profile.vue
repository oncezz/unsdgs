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
        <div class="col q-px-lg" style="color: white">
          <div class="font20">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font16">{{ selectPage }}</div>
        </div>
      </div>
      <div class="q-pa-md" style="height: 86px"></div>
      <!-- end header  -->
      <div class="row font18" align="center">
        <div
          class="q-pa-md cursor-pointer"
          style="width: 160px"
          v-show="selectPage != 'Info'"
          @click="pageInfo()"
        >
          Info
        </div>
        <div class="selectPage q-pa-md" v-show="selectPage == 'Info'">Info</div>
        <div
          class="q-pa-md cursor-pointer"
          style="width: 160px"
          v-show="selectPage != 'Password'"
          @click="pagePassword()"
        >
          Password
        </div>
        <div class="selectPage q-pa-md" v-show="selectPage == 'Password'">
          Password
        </div>
        <div
          class="q-pa-md cursor-pointer"
          style="width: 160px"
          v-show="selectPage != 'Certificate'"
          @click="pageCertificate()"
        >
          Certificate
        </div>
        <div class="selectPage q-pa-md" v-show="selectPage == 'Certificate'">
          Certificate
        </div>
      </div>
      <hr style="margin-top: -1px" />
      <!-- end pick page  -->
      <!-- info  -->
      <div class="fixPage" v-show="selectPage == 'Info'" style="">
        <div class="row font18">
          <div class="col-3"></div>
          <div class="col">
            <div class="row padBox">
              <div class="col-4">Username</div>
              <div class="col q-pl-md">
                {{ userData.username }}
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">Email address</div>
              <div class="col q-pl-md">
                {{ userData.email }}
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">First name</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="userData.firstName"
                />
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">Surname</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="userData.surName"
                />
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">City/Town</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="userData.city"
                />
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">Country</div>
              <q-select
                dense
                class="inputBox"
                outlined
                v-model="userData.country"
                :options="countryOptions"
              />
            </div>
            <div class="row padBox">
              <div class="col-4">Gender</div>
              <q-select
                dense
                class="inputBox"
                outlined
                v-model="userData.gender"
                :options="genderOptions"
              />
            </div>
            <div class="row padBox">
              <div class="col-4">Job title</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="userData.jobTitle"
                />
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">Organization</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="userData.organization"
                />
              </div>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
        <div class="row q-py-lg q-mt-lg">
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
            @click=""
          >
            Cancel
          </div>
          <div class="col-1"></div>
          <div
            class="cursor-pointer font24 textWhite"
            style="
              width: 175px;
              height: 50px;
              border-radius: 10px;
              background: #1976d2;
              line-height: 50px;
            "
            align="center"
            @click="svaeInfo()"
          >
            Save
          </div>
          <div class="col"></div>
        </div>
      </div>
      <!-- password  -->
      <div class="fixPage" v-show="selectPage == 'Password'">
        <div class="row font18">
          <div class="col-3"></div>
          <div class="col">
            <div class="row padBox">
              <div class="col-4">Username</div>
              <div class="col q-pl-md">
                {{ userData.username }}
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">Email address</div>
              <div class="col q-pl-md">
                {{ userData.email }}
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">Old password</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="changePassword.oldPassword"
                />
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">New password</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="changePassword.newPassword"
                />
              </div>
            </div>

            <div class="row padBox">
              <div class="col-4">Confirm new password</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBox"
                  outlined
                  v-model="changePassword.confirmPassword"
                />
              </div>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
        <div class="row q-py-xl q-mt-lg">
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
            @click=""
          >
            Cancel
          </div>
          <div class="col-1"></div>
          <div
            class="cursor-pointer font24 textWhite"
            style="
              width: 175px;
              height: 50px;
              border-radius: 10px;
              background: #1976d2;
              line-height: 50px;
            "
            align="center"
            @click="svaeInfo()"
          >
            Save
          </div>
          <div class="col"></div>
        </div>
      </div>
      <!-- Certificate  -->
      <div class="fixPage" v-show="selectPage == 'Certificate'" align="center">
        <div class="font48 q-pt-xl" align="center" v-show="userData.exam == 0">
          <div class="q-py-lg"></div>
          Sorry! You must pass
          <span class="toExam" @click="goToExam()">the exam.</span>

          <div
            style="position: absolute; bottom: 0px; left: calc(50vw - 100px)"
          >
            <img src="../../public/image/mustPassExam.svg" alt="" style="" />
          </div>
        </div>
        <div class="" align="center" v-show="userData.exam == 1">
          <div class="q-pt-lg">
            <img src="../../public/image/certi.jpg" alt="" style="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryJson from "../../public/country_list.json";
export default {
  data() {
    return {
      userData: {
        username: "Aunny",
        password: "",
        email: "Aunny@gmail.com",
        firstName: "Aunny",
        surName: "Sandee",
        city: "Bangkok",
        country: "Thailand",
        gender: "Male",
        jobTitle: "Teacher",
        organization: "Suankularb Wittayalai",
        exam: 0, // 0 not pass, 1 pass exam
      },
      changePassword: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      countryOptions: [],
      genderOptions: ["Female", "Male", "Undefined"],
      selectPage: "Info",
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goToExam() {
      this.$router.push("/exam");
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
    pageInfo() {
      this.selectPage = "Info";
    },
    pagePassword() {
      this.selectPage = "Password";
    },
    pageCertificate() {
      this.selectPage = "Certificate";
    },
    svaeInfo() {
      this.$q.notify({
        position: "top",
        type: "positive",
        message: `Edit account complete.`,
      });
    },
  },
  mounted() {
    this.getCountryList();
  },
};
</script>

<style lang="scss" scoped>
.selectPage {
  color: #5aadff;
  width: 160px;
  border-bottom: 5px solid #5aadff;
}
.padBox {
  padding-top: 30px;
  line-height: 40px;
}
.inputBox {
  height: 40px;
  width: 360px;
}
.fixPage {
  min-height: calc(100vh - 160px);
}
.toExam {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>
