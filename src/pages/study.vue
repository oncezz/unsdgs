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
        <div class="col q-px-md font18 textWhite">
          Trade and the sustainable development goals (SDGs)
        </div>
        <div
          class="textWhite"
          @click="goToProfile()"
          align="center"
          style="width: 70px"
        >
          <img
            class=""
            src="../../public/image/profilePic.svg"
            alt=""
            height="18px"
          />
          <div class="font14">
            {{ userName }}
          </div>
        </div>
        <div
          class="col-1"
          align="center"
          @click="signOut()"
          style="width: 70px"
        >
          <img src="../../public/image/signOut.svg" height="18px" alt="" />
          <div class="font14 textWhite">sign out</div>
        </div>
      </div>
      <div class="q-pa-md" style="height: 60px"></div>
      <!-- end header  -->
      <div class="row">
        <div class="leftMenuTablet">
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
      style="max-width: 1600px; width: 100%; margin: auto; position: relative"
    >
      <!-- *********Header********* -->
      <div class="headerPC row items-center">
        <div
          class="col-2 cursor-pointer"
          align="center"
          style="width: 400px"
          @click="goToHome()"
        >
          <img
            class="picHeadPC"
            src="../../public/image/logoMobile.svg"
            alt=""
            style=""
          />
        </div>
        <div class="linePC"></div>
        <div class="col q-pl-lg q-ma-md" style="color: white">
          <div class="font20">
            Trade and the sustainable development goals (SDGs)
          </div>
        </div>
        <div
          class="textWhite cursor-pointer"
          style="width: 90px"
          align="center"
          @click="goToProfile()"
        >
          <img
            class=""
            src="../../public/image/profilePic.svg"
            alt=""
            style="height: 30px"
          />
          <div class="font14 textWhite" style="">
            {{ userName }}
          </div>
        </div>
        <div
          class="col-1 q-ma-md cursor-pointer"
          align="center"
          style="width: 90px"
          @click="signOut()"
        >
          <img
            src="../../public/image/signOut.svg"
            style="height: 30px"
            alt=""
          />
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
              @click="menuPick1(indexMenu1, indexMenu2)"
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
              @click="
                menuPick2(lessonData[indexMenu1].section[indexMenu2].narrative)
              "
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
            <div v-show="menu == 1" class="font14 modulPC">
              <q-list v-for="(item, index) in lessonData" :key="index">
                <q-expansion-item
                  dark
                  expand-separator
                  header-class="font14"
                  group="somegroup"
                  :label="item.module"
                  :header-style="indexMenu1 == index ? 'color: #5AADFF;' : ''"
                  :default-opened="index == indexMenu1"
                >
                  <ul>
                    <li
                      v-for="(item2, index2) in item.section"
                      :key="index2"
                      class="q-py-sm cursor-pointer"
                      :style="
                        indexMenu1 == index && indexMenu2 == index2
                          ? 'color: #5AADFF;'
                          : ''
                      "
                      @click="setIndex(index, index2)"
                    >
                      {{ item2.lesson }}
                    </li>
                  </ul>
                </q-expansion-item>
              </q-list>
            </div>
            <!-- narrative  -->
            <div
              class="q-pa-sm q-pt-lg"
              v-show="menu == 2"
              v-html="narrativeText"
            ></div>
          </div>
        </div>
        <div class="col font64" align="center" v-if="selectContent == 'Quiz'">
          Quiz
          <!-- end bar  -->
        </div>
        <div
          class="col font64"
          align="center"
          v-else-if="selectContent == 'Exam'"
        >
          Exam
        </div>
        <div class="col font64" align="center" v-else>
          {{ lessonData[indexMenu1].section[indexMenu2].vdo }}
        </div>
      </div>

      <div
        class="endBarPC font18 textWhite absolute-bottom-right"
        align="center"
      >
        {{ selectContent }}
      </div>

      <!-- ----  -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import lessonJson from "../../public/lesson.json";

export default {
  data() {
    return {
      lessonData: [],
      selectContent: "",
      userName: "ASrhdgsugh",
      menu: 1, // 1=menu , 2=narrative
      nameLeeson: [],
      indexMenu1: 0,
      indexMenu2: 0,
      narrativeText: "",
    };
  },
  methods: {
    setIndex(index1, index2) {
      this.indexMenu1 = index1;
      this.indexMenu2 = index2;
      this.selectContent = this.lessonData[index1].section[index2].lesson;
    },
    goToHome() {
      this.$router.push("/");
    },
    goToProfile() {
      this.$router.push("/profile");
    },
    signOut() {
      this.$q.localStorage.clear();
      this.$router.push("/syllabus");
    },
    menuPick1(index1, index2) {
      this.menu = 1;
    },
    // narative
    async menuPick2(textName) {
      let data = {
        lesson: textName,
      };
      let url = this.serverpath + "fe_study_loadtextnarative.php";
      let res = await axios.post(url, JSON.stringify(data));
      this.narrativeText = res.data;
      this.menu = 2;
    },
    lessonPick(lesson) {
      this.selectContent = this.nameLeeson[lesson];
    },
    loadUserData() {
      if (this.$q.localStorage.getItem("username") == null) {
        this.$router.push("/syllabus");
      }
      this.userName = this.$q.localStorage.getItem("username");
    },
  },
  mounted() {
    this.loadUserData();
    this.lessonData = lessonJson;
    this.setIndex(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.leftMenuPC {
  color: white;
  background: #1f2b35;
  width: 400px;
}
.modulPC {
  height: calc(100vh - 170px);
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
  max-width: 1200px;
  line-height: 50px;
  height: 50px;
  width: calc(100vw - 400px);
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
.listColor {
  color: #5aadff;
}
</style>
