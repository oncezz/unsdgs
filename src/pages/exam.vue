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
      <div class="headerPC row">
        <div class="row q-pt-md textWhite" style="width: 400px">
          <img
            class="q-pl-md"
            src="../../public/image/profilePic.svg"
            alt=""
            style="height: 52px"
          />
          <div
            class="font18 q-pl-lg cursor-pointer"
            style="line-height: 52px; text-decoration: underline"
            @click="goToProfile()"
          >
            {{ userName }}
          </div>
        </div>

        <div
          class="col-2 cursor-pointer q-ma-md"
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
        <div class="linePC q-ma-md"></div>
        <div class="col q-px-lg q-ma-md" style="color: white">
          <div class="font20">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font16">{{ selectContent }}</div>
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
      <!-- end header  -->
      <div style="height: 86px"></div>
      <div class="row">
        <div class="leftMenuPC">
          <div class="lineMenu"></div>
          <div class="row">
            <div
              class="selectMenuPC text-center cursor-pointer"
              @click="menuPick1()"
              :style="
                menu % 2 == 1
                  ? 'color: #5aadff;border-bottom: 5px solid #5aadff;'
                  : ''
              "
            >
              Menu
            </div>
            <div
              class="selectMenuPC text-center cursor-pointer"
              @click="menuPick2()"
              :style="
                menu % 2 == 0
                  ? 'color: #5aadff;border-bottom: 5px solid #5aadff;'
                  : ''
              "
            >
              Narrative
            </div>
          </div>
          <div class="lineMenu"></div>
          <div class="contentPC q-pa-sm" style="">
            <!-- menu  -->
            <div v-show="menu == 1">content</div>
            <!-- narrative  -->
            <div v-show="menu == 2">narrative</div>
          </div>
        </div>
        <div class="col">content & vdo</div>
      </div>
      <div class="endBarPC row">
        <div style="width: 400px"></div>
        <div class="col font18 textWhite" align="center">
          Introduction to Sustain Development Goals (SDGs)
        </div>
      </div>
      <!-- ----  -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    signOut() {
      this.$router.push("/syllabus");
    },
    menuPick1() {
      this.menu = 1;
      this.selectContent = "exam";
    },
    menuPick2() {
      this.menu = 2;
      this.selectContent = "narrative";
    },
  },
  data() {
    return {
      selectContent: "exam",
      userName: "AUNNY",
      menu: 1, // 1=menu , 2=narrative
    };
  },
};
</script>

<style lang="scss" scoped>
.leftMenuPC {
  color: white;
  background: #1f2b35;
  width: 400px;
}
.selectMenuPC {
  height: 48px;
  line-height: 48px;
  width: 100px;
}
.lineMenu {
  margin: auto;
  width: 98%;
  border-bottom: 1px solid #374d60;
}
.contentPC {
  height: calc(100vh - 134px);
}
.endBarPC {
  position: absolute;
  max-width: 1600px;
  bottom: 0px;
  line-height: 50px;
  height: 50px;
  width: 100%;
  background: #1f2b35;
}
</style>
