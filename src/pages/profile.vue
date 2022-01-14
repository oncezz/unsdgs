<template>
  <div>
    <!-- mobile -->
    <div class="mobile-only lt-sm">
      <div class="headerMobile row items-center" style="z-index: 999">
        <div class="col-4" align="center" style="" @click="goHome()">
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
      <div class="row selectPageMobile">
        <div
          class="col"
          v-show="selectPage != 'Info'"
          align="center"
          @click="pageInfo()"
        >
          Info
        </div>
        <div
          class="col"
          v-show="selectPage == 'Info'"
          align="center"
          @click="pageInfo()"
          style="color: #5aadff; border-bottom: 5px solid #5aadff"
        >
          Info
        </div>
        <div
          class="col"
          align="center"
          v-show="selectPage != 'Password'"
          @click="pagePassword()"
        >
          Password
        </div>
        <div
          class="col"
          align="center"
          v-show="selectPage == 'Password'"
          @click="pagePassword()"
          style="color: #5aadff; border-bottom: 5px solid #5aadff"
        >
          Password
        </div>
        <div
          class="col"
          v-show="selectPage != 'Certificate'"
          align="center"
          @click="pageCertificate()"
        >
          Certificate
        </div>
        <div
          class="col"
          v-show="selectPage == 'Certificate'"
          align="center"
          @click="pageCertificate()"
          style="color: #5aadff; border-bottom: 5px solid #5aadff"
        >
          Certificate
        </div>
        <div class="col-3 q-pr-md q-pt-sm" align="right">
          <img src="../../public/image/signOut.svg" alt="" />
        </div>
      </div>
      <!-- content  -->
      <!-- info  -->
      <div v-show="selectPage == 'Info'" class="font12">
        <div class="padInputMobile q-pt-md">
          <q-input
            style="width: 201px"
            v-model="userData.username"
            readonly
            label="Username"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="userData.email"
            readonly
            label="Email address"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="userData.firstName"
            label="First name"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="userData.surName"
            label="Surname"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="userData.city"
            label="City/Town"
          />
        </div>
        <div class="padInputMobile">
          <q-select
            style="width: 201px"
            v-model="userData.country"
            :options="countryOptions"
          />
        </div>
        <div class="padInputMobile">
          <q-select
            style="width: 201px"
            v-model="userData.gender"
            label="Gender"
            :options="genderOptions"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="userData.jobTitle"
            label="Job title"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="userData.organization"
            label="Organization"
          />
        </div>
        <div class="row q-pa-md justify-evenly q-mt-md">
          <div class="cancelBtmMobile" align="center">Cancel</div>
          <div class="saveBtmMobile" align="center" @click="saveInfo()">
            Save
          </div>
        </div>
      </div>
      <!-- password  -->
      <div v-show="selectPage == 'Password'">
        <div class="padInputMobile q-pt-md">
          <q-input
            style="width: 201px"
            v-model="userData.username"
            input-style="color:#898989"
            readonly
            label="Username"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="userData.email"
            input-style="color:#898989"
            readonly
            label="Email address"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="changePassword.oldPassword"
            label="Old password"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="changePassword.newPassword"
            label="New password"
          />
        </div>
        <div class="padInputMobile">
          <q-input
            style="width: 201px"
            v-model="changePassword.confirmPassword"
            label="Confirm new password"
          />
        </div>
        <div class="row q-pa-md justify-evenly q-mt-md">
          <div class="cancelBtmMobile" align="center">Cancel</div>
          <div class="saveBtmMobile" align="center" @click="saveNewPassword()">
            Save
          </div>
        </div>
      </div>
      <!-- caertificate  -->
      <div v-show="selectPage == 'Certificate'" align="center" class="font18">
        <div class="padTop">
          Sorry! You must pass
          <span class="fontU" style="color: blue" @click="goToExam"
            >the exam.</span
          >
        </div>
        <div>
          <img
            class="picBottomMobile"
            src="../../public/image/mustPassExam.svg"
            alt=""
          />
        </div>
      </div>
      <!-- ------------  -->
    </div>
    <!-- tablet  -->
    <div class="mobile-only gt-xs orientation-portrait">หมุนหน้าจอ</div>
    <div class="mobile-only gt-xs orientation-landscape">
      <div class="headerTablet row items-center" style="z-index: 999">
        <div class="col-3" align="center" style="" @click="goHome()">
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
        <div class="col-1" align="center" @click="signOut()">
          <img
            style="margin-top: 8px"
            src="../../public/image/signOut.svg"
            alt=""
          />
          <div class="font14 textWhite" style="margin-top: -8px">sign out</div>
        </div>
      </div>
      <div class="q-pa-md" style="height: 60px"></div>
      <!-- end header  -->
      <div class="row font18" align="center">
        <div
          class="q-pa-md"
          style="width: 160px"
          v-show="selectPage != 'Info'"
          @click="pageInfo()"
        >
          Info
        </div>
        <div class="selectPage q-pa-md" v-show="selectPage == 'Info'">Info</div>
        <div
          class="q-pa-md"
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
          class="q-pa-md"
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
      <div class="" v-show="selectPage == 'Info'" style="">
        <div class="row font18">
          <div class="col-2"></div>
          <div class="col">
            <div class="row padBoxTablet">
              <div class="col-5">Username</div>
              <div class="col q-pl-md">
                {{ userData.username }}
              </div>
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">Email address</div>
              <div class="col q-pl-md">
                {{ userData.email }}
              </div>
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">First name</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="editUser.firstName"
                />
              </div>
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">Surname</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="editUser.surName"
                />
              </div>
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">City/Town</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="editUser.city"
                />
              </div>
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">Country</div>
              <q-select
                dense
                class="inputBoxTablet"
                outlined
                v-model="editUser.country"
                :options="countryOptions"
              />
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">Gender</div>
              <q-select
                dense
                class="inputBoxTablet"
                outlined
                v-model="editUser.gender"
                :options="genderOptions"
              />
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">Job title</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="editUser.jobTitle"
                />
              </div>
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">Organization</div>
              <div class="col">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="editUser.organization"
                />
              </div>
            </div>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row q-pt-xl">
          <div class="col-4"></div>
          <div
            class="font24"
            style="
              width: 175px;
              height: 50px;
              border-radius: 10px;
              border: 1px solid #000000;
              line-height: 50px;
            "
            align="center"
            @click="goToExam()"
          >
            Back
          </div>
          <div class="col-1"></div>
          <div
            class="font24 textWhite"
            style="
              width: 175px;
              height: 50px;
              border-radius: 10px;
              background: #1976d2;
              line-height: 50px;
            "
            align="center"
            @click="saveInfo()"
          >
            Save
          </div>
          <div class="col"></div>
        </div>
      </div>
      <!-- password  -->
      <div class="fixPagePC" v-show="selectPage == 'Password'">
        <div class="row font18">
          <div class="col-2"></div>
          <div class="col">
            <div class="row padBoxTablet">
              <div class="col-5">Username</div>
              <div class="col q-pl-md">
                {{ userData.username }}
              </div>
            </div>
            <div class="row padBoxTablet">
              <div class="col-5">Email address</div>
              <div class="col q-pl-md">
                {{ userData.email }}
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-5 padBoxTablet">Old password</div>
              <div class="col q-pt-md">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="changePassword.oldPassword"
                />
                <div class="font14 q-pt-sm">
                  The password must have at least 6 characters.
                </div>
              </div>
            </div>
            <div class="row q-pt-md">
              <div class="col-5 padBoxTablet">New password</div>
              <div class="col q-pt-md">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="changePassword.newPassword"
                />
                <div class="font14 q-pt-sm">
                  The password must have at least 6 characters.
                </div>
              </div>
            </div>

            <div class="row q-pt-md">
              <div class="col-5 padBoxTablet">Confirm new password</div>
              <div class="col q-pt-md">
                <q-input
                  dense
                  class="inputBoxTablet"
                  outlined
                  v-model="changePassword.confirmPassword"
                />
                <div class="font14 q-pt-sm">
                  The password must have at least 6 characters.
                </div>
              </div>
            </div>
          </div>
          <div class="col-3"></div>
        </div>
        <div class="row q-py-xl q-mt-lg">
          <div class="col-4"></div>
          <div
            class="font24"
            style="
              width: 175px;
              height: 50px;
              border-radius: 10px;
              border: 1px solid #000000;
              line-height: 50px;
            "
            align="center"
            @click="goToExam()"
          >
            Back
          </div>
          <div class="col-1"></div>
          <div
            class="font24 textWhite"
            style="
              width: 175px;
              height: 50px;
              border-radius: 10px;
              background: #1976d2;
              line-height: 50px;
            "
            align="center"
            @click="saveNewPassword()"
          >
            Save
          </div>
          <div class="col"></div>
        </div>
      </div>
      <!-- Certificate  -->
      <div class="fixPC" v-show="selectPage == 'Certificate'" align="center">
        <div class="font48 q-pt-lg" align="center" v-show="userData.exam == 0">
          <div class="q-py-lg"></div>
          Sorry! You must pass
          <span class="toExam" @click="goToExam()">the exam.</span>

          <div
            class=""
            style="position: absolute; bottom: 0px; left: calc(50vw - 100px)"
          >
            <img src="../../public/image/mustPassExam.svg" alt="" style="" />
          </div>
        </div>
        <div class="" align="center" v-show="userData.exam == 1">
          <div class="">
            <img
              src="../../public/image/certi.jpg"
              alt=""
              width="870px"
              style=""
            />
          </div>
        </div>
      </div>
      <!-- ------ end tablet ------ -->
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
        <div class="col q-px-lg" style="color: white">
          <div class="font20">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font16">{{ selectPage }}</div>
        </div>
        <div
          class="col-1 q-ma-md cursor-pointer"
          align="center"
          @click="signOut()"
        >
          <img src="../../public/image/signOut.svg" alt="" />
          <div class="font14 textWhite">sign out</div>
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
      <div class="fixPagePC" v-show="selectPage == 'Info'" style="">
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
                  v-model.trim="editUser.firstname"
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
                  v-model.trim="editUser.lastname"
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
                  v-model.trim="editUser.city"
                />
              </div>
            </div>
            <div class="row padBox">
              <div class="col-4">Country</div>
              <q-select
                dense
                class="inputBox"
                outlined
                v-model="editUser.country"
                :options="countryOptions"
              />
            </div>
            <div class="row padBox">
              <div class="col-4">Gender</div>
              <q-select
                dense
                class="inputBox"
                outlined
                v-model="editUser.gender"
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
                  v-model.trim="editUser.jobtitle"
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
                  v-model.trim="editUser.organization"
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
            @click="goToExam()"
          >
            Back
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
            @click="saveInfo()"
          >
            Save
          </div>
          <div class="col"></div>
        </div>
      </div>
      <!-- password  -->
      <div class="fixPagePC" v-show="selectPage == 'Password'">
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
                  v-model.trim="changePassword.oldPassword"
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
                  v-model.trim="changePassword.newPassword"
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
                  v-model.trim="changePassword.confirmPassword"
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
            @click="goToExam()"
          >
            Back
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
            @click="saveNewPassword()"
          >
            Save
          </div>
          <div class="col"></div>
        </div>
      </div>
      <!-- Certificate  -->
      <div
        class="fixPagePC"
        v-show="selectPage == 'Certificate'"
        align="center"
      >
        <div
          class="font48 q-pt-xl"
          align="center"
          v-show="userData.complete == 0"
        >
          <div class="q-py-lg"></div>
          Sorry! You must pass
          <span class="toExam" @click="goToExam()">the exam.</span>

          <div
            style="position: absolute; bottom: 0px; left: calc(50vw - 100px)"
          >
            <img src="../../public/image/mustPassExam.svg" alt="" style="" />
          </div>
        </div>
        <div class="" align="center" v-show="userData.complete == 1">
          <div class="q-pt-lg">
            <img src="../../public/image/certi.jpg" alt="" style="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import countryJson from "../../public/country_list.json";
export default {
  data() {
    return {
      userData: {
        id: "",
      },
      editUser: {
        id: "",
        firstname: "",
        lastname: "",
        city: "",
        country: "",
        gender: "",
        jobtitle: "",
        organization: "",
      },
      changePassword: {
        id: "",
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
    goTosyllabus() {
      this.$router.push("/syllabus");
    },
    goHome() {
      this.$router.push("/");
    },
    goToExam() {
      this.$router.push("/study");
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
      this.loadUserData();
    },
    pagePassword() {
      this.selectPage = "Password";
    },
    pageCertificate() {
      this.selectPage = "Certificate";
    },
    async saveInfo() {
      if (
        this.editUser.firstname == this.userData.firstname &&
        this.editUser.lastname == this.userData.lastname &&
        this.editUser.city == this.userData.city &&
        this.editUser.country == this.userData.country &&
        this.editUser.jobtitle == this.userData.jobtitle &&
        this.editUser.gender == this.userData.gender &&
        this.editUser.organization == this.userData.organization
      ) {
        this.greenNotify("Datas don't change.");
        return;
      }

      let url = this.serverpath + "fe_profile_edituser.php";
      let res = await axios.post(url, JSON.stringify(this.editUser));

      if (res.data == "OK") {
        this.greenNotify("Edit account complete.");
      }
      this.loadUserData();
    },
    async saveNewPassword() {
      if (
        this.changePassword.confirmPassword != this.changePassword.newPassword
      ) {
        this.redNotify("New password and Confirm new password don't match.");
        return;
      }

      if (this.changePassword.oldPassword == this.changePassword.newPassword) {
        this.greenNotify("Password doesn't change.");
        return;
      }

      this.changePassword.id = this.userData.id;
      let url = this.serverpath + "fe_profile_changepassword.php";
      let res = await axios.post(url, JSON.stringify(this.changePassword));
      if (res.data == "password incorrect") {
        this.redNotify("Old password incorrect.");
        return;
      }
      this.greenNotify("Change password complete.");
    },
    signOut() {
      this.$router.push("/syllabus");
    },
    async loadUserData() {
      this.editUser.id = this.userData.id =
        this.$q.localStorage.getItem("userid");

      let url = this.serverpath + "fe_profile_loaduser.php";
      let res = await axios.post(url, JSON.stringify(this.userData));
      this.userData = res.data[0];

      this.editUser.firstname = this.userData.firstname;
      this.editUser.lastname = this.userData.lastname;
      this.editUser.city = this.userData.city;
      this.editUser.country = this.userData.country;
      this.editUser.jobtitle = this.userData.jobtitle;
      this.editUser.gender = this.userData.gender;
      this.editUser.organization = this.userData.organization;
    },
  },
  mounted() {
    this.loadUserData();
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
.fixPagePC {
  min-height: calc(100vh - 160px);
}
.toExam {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
.selectPageMobile {
  width: 100%;
  height: 47px;
  background-color: #1f2b35;
  font-size: 14px;
  color: white;
  line-height: 40px;
}
.padTop {
  padding-top: 107px;
}
.picBottomMobile {
  width: 158px;
  position: absolute;
  bottom: 0px;
  left: calc(50vw - 79px);
}
.cancelBtmMobile {
  width: 130px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
}
.saveBtmMobile {
  width: 130px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  background: #1976d2;
  color: white;
  border-radius: 5px;
}
.padInputMobile {
  padding-left: 62px;
}
.padBoxTablet {
  padding-top: 20px;
  line-height: 35px;
}
.inputBoxTablet {
  height: 35px;
  width: 360px;
}
</style>
