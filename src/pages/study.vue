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
      <div class="row">
        <div class="leftMenuTablet">
          <div class="row q-pl-lg items-center textWhite" style="height: 50px">
            <img
              class="q-pl-md"
              src="../../public/image/profilePic.svg"
              alt=""
              style="height: 34px"
            />
            <div
              class="font18 q-pl-lg cursor-pointer"
              style="line-height: 52px; text-decoration: underline"
              @click="goToProfile()"
            >
              {{ userName }}
            </div>
          </div>
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
          <div class="q-pa-sm" style="">
            <!-- menu  -->
            <div v-show="menu == 1">
              <q-list>
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[1]"
                  @show="lessonPick(1)"
                >
                  <q-card>
                    <q-card-section class="cardStyle">
                      <ul>
                        <li>
                          Introduction to Sustain Development Goals (SDGs)
                        </li>
                        <li>SDGs and Trade</li>
                        <li>Trade and sustainable development</li>
                        <li>Summing up</li>
                      </ul>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[2]"
                  @show="lessonPick(2)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[3]"
                  @show="lessonPick(3)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[4]"
                  @show="lessonPick(4)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[5]"
                  @show="lessonPick(5)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[6]"
                  @show="lessonPick(6)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[7]"
                  @show="lessonPick(7)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[8]"
                  @show="lessonPick(8)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[9]"
                  @show="lessonPick(9)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[10]"
                  @show="lessonPick(10)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[11]"
                  @show="lessonPick(11)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
                <q-separator />
                <q-expansion-item
                  class="font18"
                  group="somegroup"
                  :label="nameLeeson[12]"
                  @show="lessonPick(12)"
                >
                  <q-card>
                    <q-card-section class="cardStyle"> </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
            <!-- narrative  -->
            <div v-show="menu == 2">narrative</div>
          </div>
        </div>
        <div class="col">
          content & vdo
          <!-- end bar  -->
          <div class="endBarTablet row">
            <div class="col font18 textWhite" align="center">
              Introduction to Sustain Development Goals (SDGs)
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- PC  -->
    <div
      class="desktop-only shadow-6"
      style="max-width: 1600px; width: 100%; margin: auto"
    >
      <!-- *********Header********* -->
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
          @click="goToHome()"
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
          <div class="row font16">
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
            <div v-show="menu == 1" class="font14">
              <q-list v-for="(item, index) in lessonData" :key="index">
                <q-expansion-item
                  dark
                  expand-separator
                  header-class="font14"
                  group="somegroup"
                  :label="item.module"
                >
                  <ul>
                    <li
                      v-for="(item2, index2) in item.section"
                      :key="index2"
                      class="q-py-sm cursor-pointer"
                    >
                      {{ item2.lesson }}
                    </li>
                  </ul>
                </q-expansion-item>
              </q-list>
            </div>
            <!-- narrative  -->
            <div v-show="menu == 2">narrative</div>
          </div>
        </div>
        <div class="col">
          content & vdo
          <!-- end bar  -->
          <div class="endBarPC row">
            <div class="col font18 textWhite" align="center">
              Introduction to Sustain Development Goals (SDGs)
            </div>
          </div>
        </div>
      </div>
      <!-- ----  -->
    </div>
  </div>
</template>

<script>
import lessonJson from "../../public/lesson.json";
export default {
  data() {
    return {
      lessonData: [],
      selectContent: "Module A-1: An overview",
      userName: "AUNNY",
      menu: 1, // 1=menu , 2=narrative
      nameLeeson: [
        "",
        "Module A.1: An overview",
        "Module A.2: Trade and development: tools and trends",
        "Module A.3: Trade and environmental issues",
        "Module A.4: Trade policy reforms and the SDGs",
        "Module B.1.1:  How does trade affect poverty and inequality?",
        "Module B.1.2:  Should we use trade restrictions to achieve zero hunger?",
        "Module B.1.3:  Does international trade cause (inclusive) growth?",
        "Module B.2.1:  Trade and sustainability 1: climate change and environment",
        "Module B.2.2:  Trade and sustainability 2: education and intergenerational mobility",
        "Module B.3.1:  Does trade lead to a race to the bottom in labour standards?",
        "Module B.3.2: How does trade influence productivity and innovation?",
        "Module B.3.3: Trade and responsible consumption/production",
        "test sub 1",
        "test sub 2",
        "test sub 3",
      ],
    };
  },
  methods: {
    goToHome() {
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
    },
    lessonPick(lesson) {
      this.selectContent = this.nameLeeson[lesson];
    },
  },
  mounted() {
    this.lessonData = lessonJson;
  },
};
</script>

<style lang="scss" scoped>
.leftMenuPC {
  color: white;
  background: #1f2b35;
  width: 400px;
}
.leftMenuTablet {
  color: white;
  background: #1f2b35;
  width: 320px;
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
  height: calc(100vh - 136px);
  overflow-y: auto;
}
.endBarPC {
  position: absolute;
  max-width: 1200px;
  bottom: 0px;
  line-height: 50px;
  height: 50px;
  width: 100%;
  background: #1f2b35;
}
.endBarTablet {
  position: absolute;
  bottom: 0px;
  line-height: 50px;
  height: 50px;
  width: 100%;
  background: #1f2b35;
}
.cardStyle {
  background-color: #1f2b35;
}
</style>
