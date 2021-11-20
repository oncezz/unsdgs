<template>
  <div>
    <!-- mobile -->
    <div class="mobile-only lt-sm">
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
      <!-- end header  -->
      <div class="picHeaderMobile">
        <div class="q-pa-sm textPicMobile">
          Making trade an effective means of implemention to achieve the SDGs
        </div>
      </div>
      <div class="q-pa-lg"></div>
      <div class="q-pa-md text-weight-bold font18" style="">
        Does international trade promote sustainable development?
      </div>
      <div class="q-px-md font14" style="text-indent: 20px">
        In September 2015, the United Nations adopted the 2030 Agenda for
        Sustainable Development, in which the Sustainable Development Goals
        (SDGs) are the key component. The SDGs, comprising 17 goals and 169
        targets, were meant to stimulate action and to be used as a development
        roadmap for member countries over the following 15 years. As stated in
        paragraph 68 of the 2030 Agenda for Sustainable Development report,
        ‘International trade is an engine for inclusive economic growth and
        poverty reduction and contributes to the promotion of sustainable
        development.’ A key question is whether international trade can function
        as an effective means of implementation for the achievement of the SDGs.
      </div>
      <div class="q-pt-md" align="center">
        <img
          src="../../public/image/courseMobile.svg"
          alt=""
          style="width: 95%"
        />
      </div>
      <div class="q-pa-md text-weight-bold font14" style="">
        <span class="font18"> About the course </span><br />13 Modules (Average
        15-20 minutes per modules)
      </div>
      <div class="q-px-md font14" style="text-indent: 20px">
        This course employs a non-technical approach to build basic knowledge,
        mindsets, general capacities of policymakers and a broad range of
        stakeholders to understand the roles and limitations of trade and trade
        policy in promote a country's achievement of the SDGs. The course
        consists of 4 basic- and 9 intermediate levels modules. Each module
        provides multi-media lecture that include an overview of conceptual
        linkages, cases and examples, and a guide to supplementary readings.
        Upon completing all modules, participants will learn about the linkages
        between trade and sustainable development, especially in the context of
        SDGs. Participants will understand the roles of trade in helping a
        country to achieve SDGs and aware about issues that influence their
        effectiveness, and important points for consideration when designing and
        implementing trade policy for achieving sustainable development.
      </div>
      <div class="q-pt-md"></div>
      <div class="joinBtnMobile" align="center" @click="gotoSyllabus()">
        join our class
      </div>
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
      <!-- end header  -->
      <div class="picTablet">
        <div class="q-pa-lg textPicTablet">
          Making trade an effective means of implemention to achieve the SDGs
        </div>
      </div>
      <div class="q-pa-lg text-weight-bold font24" style="">
        Does international trade promote sustainable development?
      </div>
      <div class="q-px-lg font18" style="text-indent: 40px">
        In September 2015, the United Nations adopted the 2030 Agenda for
        Sustainable Development, in which the Sustainable Development Goals
        (SDGs) are the key component. The SDGs, comprising 17 goals and 169
        targets, were meant to stimulate action and to be used as a development
        roadmap for member countries over the following 15 years. As stated in
        paragraph 68 of the 2030 Agenda for Sustainable Development report,
        ‘International trade is an engine for inclusive economic growth and
        poverty reduction and contributes to the promotion of sustainable
        development.’ A key question is whether international trade can function
        as an effective means of implementation for the achievement of the SDGs.
      </div>
      <div class="q-pt-lg" align="center">
        <img
          src="../../public/image/courseMobile.svg"
          alt=""
          style="width: 95%"
        />
      </div>
      <div class="q-pa-lg text-weight-bold font18" style="">
        <span class="font24"> About the course </span><br />13 Modules (Average
        15-20 minutes per modules)
      </div>
      <div class="q-px-lg font18" style="text-indent: 40px">
        This course employs a non-technical approach to build basic knowledge,
        mindsets, general capacities of policymakers and a broad range of
        stakeholders to understand the roles and limitations of trade and trade
        policy in promote a country's achievement of the SDGs. The course
        consists of 4 basic- and 9 intermediate levels modules. Each module
        provides multi-media lecture that include an overview of conceptual
        linkages, cases and examples, and a guide to supplementary readings.
        Upon completing all modules, participants will learn about the linkages
        between trade and sustainable development, especially in the context of
        SDGs. Participants will understand the roles of trade in helping a
        country to achieve SDGs and aware about issues that influence their
        effectiveness, and important points for consideration when designing and
        implementing trade policy for achieving sustainable development.
      </div>
      <div class="q-pt-md"></div>
      <div class="joinBtnTablet" align="center" @click="gotoSyllabus()">
        join our class
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
      <!-- end header  -->
      <div class="picPC">
        <div class="q-pa-lg textPicPC">
          Making trade an effective means of <br />implemention to achieve the
          SDGs
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="q-pa-lg text-weight-bold font24" style="">
            Does international trade promote sustainable development?
          </div>
          <div class="q-px-lg font18" style="text-indent: 40px">
            In September 2015, the United Nations adopted the 2030 Agenda for
            Sustainable Development, in which the Sustainable Development Goals
            (SDGs) are the key component. The SDGs, comprising 17 goals and 169
            targets, were meant to stimulate action and to be used as a
            development roadmap for member countries over the following 15
            years. As stated in paragraph 68 of the 2030 Agenda for Sustainable
            Development report, ‘International trade is an engine for inclusive
            economic growth and poverty reduction and contributes to the
            promotion of sustainable development.’ A key question is whether
            international trade can function as an effective means of
            implementation for the achievement of the SDGs.
          </div>
          <div class="q-pt-lg" align="center">
            <img
              src="../../public/image/courseMobile.svg"
              alt=""
              style="width: 95%"
            />
          </div>
        </div>
        <div class="col">
          <div class="q-pa-lg text-weight-bold font18" style="">
            <span class="font24"> About the course </span><br />13 Modules
            (Average 15-20 minutes per modules)
          </div>
          <div class="q-px-lg font18" style="text-indent: 40px">
            This course employs a non-technical approach to build basic
            knowledge, mindsets, general capacities of policymakers and a broad
            range of stakeholders to understand the roles and limitations of
            trade and trade policy in promote a country's achievement of the
            SDGs. The course consists of 4 basic- and 9 intermediate levels
            modules. Each module provides multi-media lecture that include an
            overview of conceptual linkages, cases and examples, and a guide to
            supplementary readings. Upon completing all modules, participants
            will learn about the linkages between trade and sustainable
            development, especially in the context of SDGs. Participants will
            understand the roles of trade in helping a country to achieve SDGs
            and aware about issues that influence their effectiveness, and
            important points for consideration when designing and implementing
            trade policy for achieving sustainable development.
          </div>
          <div class="q-pt-xl"></div>
          <div class="joinBtnPC" align="center" @click="gotoSyllabus()">
            join our class
          </div>
        </div>
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
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoSyllabus() {
      this.$router.push("/syllabus");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
.picHeaderMobile {
  background: url("../../public/image/headerMobile.jpg");
  -webkit-background-size: cover;
  height: 175px;
  width: 100%;
  position: relative;
  top: 50px;
}
.textPicMobile {
  color: white;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  top: 100px;
}
.joinBtnMobile {
  margin: auto;
  cursor: pointer;
  background-color: #1976d2;
  width: 270px;
  height: 70px;
  border-radius: 10px;
  font-size: 30px;
  line-height: 70px;
  color: #ffffff;
}

.picTablet {
  background: url("../../public/image/headerTablet.jpg");
  -webkit-background-size: cover;
  height: 526px;
  width: 100%;
  position: relative;
  top: 0px;
}
.textPicTablet {
  color: white;
  font-size: 36px;
  font-weight: bold;
  position: relative;
  top: 380px;
}
.joinBtnTablet {
  margin: auto;
  cursor: pointer;
  background-color: #1976d2;
  width: 325px;
  height: 86px;
  border-radius: 10px;
  font-size: 30px;
  line-height: 86px;
  color: #ffffff;
}
.picPC {
  background: url("../../public/image/headerPC.jpg");
  -webkit-background-size: cover;
  height: 700px;
  width: 100%;
  position: relative;
  top: 0px;
}
.textPicPC {
  color: white;
  font-size: 64px;
  font-weight: bold;
  position: relative;
  top: 440px;
}
.joinBtnPC {
  margin: auto;
  cursor: pointer;
  background-color: #1976d2;
  width: 325px;
  height: 86px;
  border-radius: 10px;
  font-size: 30px;
  line-height: 86px;
  color: #ffffff;
}
</style>
