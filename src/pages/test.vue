<template>
  <div>
    <!-- headertop  -->
    <div class="row items-center headertop">
      <div class="col-4 q-pl-md q-pt-sm">
        <img src="../../public/image/logomobile.svg" @click="goHome()" alt="" />
      </div>
      <div class="lineHeader"></div>
      <div class="col textWhite q-px-md">
        Trade and the sustainable development goals (SDGs)
      </div>
    </div>
    <!-- headerMid -->
    <div class="headerMid textWhite q-pa-md">
      <div class="font18 fontB">
        Trade and the sustainable development goals (SDGs)
      </div>
      <div class="font14 q-py-sm">
        Learn about how to make trade works for all and environment
      </div>
      <div class="font24 fontB">Sign up</div>
      <div class="font18 fontU">back to course content page</div>
    </div>
    <!-- middle -->
    <div class="q-pl-xl">
      <div class="" style="">
        <q-input
          style="width: 253px"
          v-model="userData.username"
          label="Username"
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="userData.password"
          label="Password"
          hint="The password must have at least 6 characters."
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="userData.email"
          label="Email address"
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="confirmEmail"
          label="Confirm email address"
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="userData.firstName"
          label="First name"
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="userData.surName"
          label="Sur name"
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="userData.city"
          label="City/Town"
        />
      </div>
      <div>
        <q-select
          style="width: 253px"
          v-model="userData.country"
          :options="countryOptions"
          label="Country"
        />
      </div>
      <div>
        <q-select
          style="width: 253px"
          v-model="userData.gender"
          :options="genderOptions"
          label="Gender"
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="userData.jobTitle"
          label="Job title"
        />
      </div>
      <div>
        <q-input
          style="width: 253px"
          v-model="userData.jobTitle"
          label="Organization"
        />
      </div>
    </div>
    <!-- bottom  -->
    <div class="q-py-lg row justify-evenly">
      <div class="cancelBtmMobile" align="center" @click="cancel()">Cancel</div>
      <div class="saveBtmMobile" align="center" @click="signUp()">Sign up</div>
    </div>
    <!-- underbars  -->
    <div class="underbars row q-pl-md q-pt-sm">
      <div class="col-4">
        <img src="../../public/image/logomobile.svg" width="107px" alt="" />
      </div>
      <div class="col"></div>
      <div class="row justify-around" style="width: 110px">
        <q-icon class="fab fa-facebook-square iconM"></q-icon>
        <q-icon class="fab fa-twitter-square iconM"></q-icon>
        <q-icon class="fab fa-instagram-square iconM"></q-icon>
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
        username: "",
        password: "",
        email: "",
        firstName: "",
        surName: "",
        city: "",
        country: "",
        gender: "",
        jobTitle: "",
        organization: "",
        exam: 0, // 0 not pass, 1 pass exam
      },
      confirmEmail: "",
      countryOptions: [],
      genderOptions: ["Female", "Male", "Undefined"],
    };
  },
  methods: {
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
    signUp() {
      if (this.userData.username == "") {
        this.$q.notify({
          position: "top",
          type: "negative",
          message: `Plese fill username`,
        });
        return;
      }
      this.$q.notify({
        position: "top",
        type: "positive",
        message: `Sign Up complete.`,
      });
    },
    cancel() {
      this.userData.username = "";
    },
    goHome() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.getCountryList();
  },
};
</script>

<style lang="scss" scoped>
.headertop {
  width: 100%;
  height: 50px;
  background: #1f2b35;
}
.lineHeader {
  width: 2px;
  height: 37px;
  background: #ffffff;
}
.headerMid {
  width: 100%;
  height: 203px;
  background: #33383d;
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
.underbars {
  width: 100%;
  height: 45px;
  background: #1f2b35;
}
.iconM {
  font-size: 28px;
  color: #b5b5b5;
}
</style>
