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
      <div style="height: 50px"></div>
      <!-- header  -->
      <div class="topBarMobile q-pl-md q-pt-sm" style="color: white">
        <div class="font18">
          Trade and the sustainable development goals (SDGs)
        </div>
        <div class="font14">
          Learn about how to make trade works for all and environment
        </div>
        <div class="q-pt-md">
          Created by UNESCAP &nbsp;&nbsp;&nbsp; Last updated {{ lastUpdate }}
        </div>
        <div class="q-py-sm row">
          <div class="loginBtnMobile">
            <div class="font18" align="center" @click="loginMobileBtn()">
              Log in
            </div>
          </div>
          <div class="signUpBtnMobile q-ml-md">
            <div
              class="font18"
              style="color: black"
              align="center "
              @click="goTosignup()"
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
      <!-- endTopbar  -->
      <!-- Content  -->
      <div class="q-px-md">
        <div class="font18 fontB q-pt-md" style="color=black">Goal:</div>
        <div class="font14 q-pt-xs">
          Develop a positive, aware, as well as critical attitude toward trade,
          trade liberalization, and globalization in contributing to sustainable
          development
        </div>
        <div class="font18 fontB q-pt-sm">What you’ll learn</div>
        <div class="font14">
          <ul class="ulMobile">
            <li>
              Understand the potential role of trade that can contribute to
              developing countries’ acheivement of the SDGs.
            </li>

            <li>
              Identify factors that inhibits effective use of trade as a means
              of implementation.
            </li>
            <li>
              Aware about cross-cutting issues that challenge the effectiveness
              of trade as an instrument toward the SDGs
            </li>
            <li>
              Recognize the importance of holistic policy approach as being
              crucial for ensuring trade is a powerful engine for inclusive
              growth and sustainable development.
            </li>
          </ul>
        </div>
        <div class="font18 fontB">Requirement</div>
        <div class="font14">
          <ul class="ulMobile">
            <li>
              This course is open to anyone interested in trade, globalization,
              and sustainable development.
            </li>
            <li>No prerequisites</li>
          </ul>
        </div>
        <div class="font18 fontB">Descrition</div>
        <div class="font14">
          <ul class="ulMobile">
            <li>
              This course uses a non-technical approach to provide essential
              knowledge to understand how trade and globalization can bring
              opportunity and challenges toward sustainable development.
            </li>
            <li>
              Participants that work, study, or interest in public policy and
              development will find the course particularly relevant.
            </li>
            <li>
              The total of 13 modules (4 introductory-level modules and 9
              intermediate-level modules). Approximately, 15-20 minutes per
              modules. Participants can learn at your own schedule.
            </li>
            <li>
              Participants will earn a shareable certificate after the
              completion of the following steps: 1) completion of all modules,
              2) achieve over 70% of the end-course quiz, and 3) submit the
              e-survey for feedbacks about the course
            </li>
          </ul>
        </div>
        <div class="font18 fontB">Contributors to the course</div>
        <div class="font14 q-pt-xs">
          This course is developed by the Trade Policy and Facilitation Section
          (TPFS) of Trade, Investment and Innovation Division (TIID), the United
          Nations Economic and Social Commission for Asia and the Pacific
          (UNESCAP).
          <br /><br />
          Course coordinator: Witada Anukoonwattaka, Economic Affairs Officer,
          TPFS, ESCAP
          <br />
          Course principal: Ian Coxhead, Professor of Agricultural and Applied
          Economics, University of Madison

          <br /><br />
          The course is benefit from comments and inputs from the course
          advisory board and ARTNeT advisors:
        </div>
      </div>
      <!-- endcontent  -->
      <!-- NameAndPosition          -->
      <div class="q-pt-sm q-px-md">
        <div class="font14">Yann Duval</div>
        <div class="font12Grey">Chief TPFS, TIID, ESCAP</div>
        <div class="font14 q-pt-sm">Mia Mikic</div>
        <div class="font12Grey">
          Advisor at Large, Asia-Pacific Research and Training Network on Trade
          (ARTNeT)
        </div>
        <div class="font14 q-pt-sm">Premachandra Athukorala</div>
        <div class="font12Grey">
          Professor of Economics, Australian National University
        </div>
        <div class="font14 q-pt-sm">Prabir De</div>
        <div class="font12Grey">
          Professor, and Head, ASEAN-India Centre (AIC), Research and
          Information System for Developing Countries (RIS), New Delhi
        </div>
        <div class="font14 q-pt-sm">Evelyn S. Devadason</div>
        <div class="font12Grey">
          Professor, Department of Economics, University of Malaysia
        </div>
        <div class="font14 q-pt-sm">Matthias C. Helble</div>
        <div class="font12Grey">
          Scientist, Evidence to Policy & Impact, Department of Research for
          Health, World Health Organization
        </div>
        <div class="font14 q-pt-sm">Jiansuo Pei</div>
        <div class="font12Grey">
          Associate Professor of Economics, Renmin University of China
        </div>
        <div class="font14 q-pt-sm">Alberto Posso</div>
        <div class="font12Grey">
          Professor of Economics, the International Development & Trade Research
          Group, Royal Melbourne Institute of Technology (RMIT)
        </div>
        <div class="font14 q-pt-sm">Wisarn Pupphavesa</div>
        <div class="font12Grey">
          Senior Advisor, Thailand Development Research Institute (TDRI)
        </div>
        <div class="font14 q-pt-sm">Chayodom Sabhasri</div>
        <div class="font12Grey">
          Associate Professor, Former Dean, Faculty of Economics, Chulalongkorn
          University
        </div>
        <div class="font14 q-pt-sm">Supachai Srisuchart</div>
        <div class="font12Grey">
          Assistant Professor, Dean, Faculty of Economics, Thammasat University
        </div>
        <div class="font14 q-pt-sm">Sasatra Sudsawasd</div>
        <div class="font12Grey">
          Associate Professor, National Institute of Development Administration
          (NIDA)
        </div>
        <div class="font14 q-pt-sm">Andrew Kam Jia Yi</div>
        <div class="font12Grey">
          Associate Professor, Senior Fellow, Institute of Malaysian and
          International Studies, National University of Malaysia
        </div>
        <div class="font14 q-pt-sm">Pasakorn Thammachote</div>
        <div class="font12Grey">
          Faculty of economics, Kasetsart University, Thailand
        </div>
        <!-- endNameAndPosition  -->
        <!-- Course content  -->
        <!-- Part A  -->
        <div class="font18 fontB q-pt-md">Course content</div>
        <div class="font14 fontB">Part A: Introductory modules</div>
        <div>
          <q-list bordered>
            <q-expansion-item
              group="somegroup"
              label="Module A.1: Trade and the Sustainable Development Goals, a general overview"
              default-opened
            >
              <q-card>
                <q-card-section>
                  This module will introduce the course by conceptually mapping
                  the nexus between trade and the sustainable development goals
                  (SDGs). The module will discuss the mechanisms by which trade
                  can potentially influence some SDGs and the mechanisms by
                  which achieving the SDGs can influence trade patterns. The
                  module will also highlight that while some SDGs may not
                  directly link to trade or trade policy, unregulated trade may
                  indirectly deteriorate and impact their achievement. This
                  module will focus on all the SDGs.
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />

            <q-expansion-item
              group="somegroup"
              label="Module A.2: Trade and development: tools and trends
"
            >
              <q-card>
                <q-card-section>
                  This module will introduce the relationship between trade and
                  the economy of a developing country. It will present
                  conceptual mechanisms by which trade promotes economic growth
                  and employment and discuss the controversial relationship
                  between trade and inequality. It will summarise some stylized
                  facts about developing country trade volumes, growth and
                  patterns.
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              class="font14"
              group="somegroup"
              label="Module A.3: Trade and environmental issues"
            >
              <q-card>
                <q-card-section>
                  This module will introduce the relationship between trade and
                  the environment. It begins with the conceptual framework, and
                  illustrates this with some examples from trade and
                  environmental issues in the developing countries.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item
              group="somegroup"
              label="Module A.4: Trade policy reforms and the SDGs"
            >
              <q-card>
                <q-card-section>
                  This module reviews trade policy reforms and their
                  interactions with efforts to attain SDGs. It includes a
                  discussion of the effects of tariffs and tariffs reforms on
                  incomes and income distribution. It continues to a discussion
                  on how trade policy has shifted to address issues of
                  sustainability and inclusive growth. This module spans the
                  full range of SDGs.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <!-- end Part A  -->
        <!-- Part B  -->
        <!-- Part B.1  -->
        <div class="font14 fontB q-pt-sm">Part B: Intermediate mpdules</div>
        <div class="q-pb-sm">
          Part B.1: Trade, Poverty, Hunger and inclusive growth These modules
          focus on the following SDGs: 1, 2, 3, 4, 5, 8 and 10.
        </div>
        <div>
          <q-list bordered>
            <q-expansion-item
              group="somegroup"
              label="Module B.1.1:  How does trade affect poverty and inequality?"
            >
              <q-card>
                <q-card-section>
                  This module will conceptually discuss the conceptual
                  mechanisms by which trade affects poverty and inequality
                  before summarising the existing empirical evidence on the two.
                  It will touch on multinational corporations and outsourcing
                  and their potential effects on poverty and inequality. It will
                  discuss the role that complimentary policies may have in
                  allowing the growth-related effects of trade to be channelled
                  toward equitable growth. This module will focus on SDGs: 1, 2,
                  3, 4, 5, 8 and 10.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item
              group="somegroup"
              label="Module B.1.2:  Should we use trade restrictions to achieve zero hunger?"
            >
              <q-card>
                <q-card-section>
                  Should we use trade restrictions to achieve zero hunger? This
                  module will discuss issues surrounding food security and the
                  notion that some nations restrict trade to achieve this. It
                  will critically assess this notion conceptually before
                  highlighting that importing food is not (necessarily) a
                  problem. This module will focus on SDGs: 1 and 2.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item
              group="somegroup"
              label="Module B.1.3:  Does international trade cause (inclusive) growth?"
            >
              <q-card>
                <q-card-section>
                  This module will begin with an introduction of international
                  trade patterns across the world. It will use measures of
                  openness, tariffs and Non-tariff barriers to show correlations
                  between international trade and economic growth. It will then
                  provide a review of the existing literature on trade and
                  economic growth. It will highlight both potentially positive
                  and negative trade effects on growth and introduce the notion
                  of inclusive growth. This module will focus on SDGs: 1, 3, 4,
                  5, 8 and 10.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
          <!-- end Part B.1  -->
          <!-- Part B.2  -->
          <div class="q-pt-sm q-pb-sm">
            Part B.2: Trade, climate change and sustainable growth These modules
            focus on the following SDGs: 6,7, 11,13,14, and 15.
          </div>
          <q-list bordered>
            <q-expansion-item
              group="somegroup"
              label="Module B.2.1:  Trade and sustainability 1: climate change and environment"
            >
              <q-card>
                <q-card-section>
                  This module will conceptually discuss trade and the goal of
                  environmental sustainability. It will focus on whether trade
                  makes the task of dealing with CC effects and maintaining a
                  healthy environment easier or more difficult. The module will
                  also introduce concepts such as sustainable growth and
                  sustainable trade. It will investigate the pros and cons of
                  the nexus between trade and sustainable growth. It will
                  intuitively discuss how trade can be used as a channel to
                  achieve inclusive economic growth and poverty reduction. It
                  will then discuss evidence highlighting the circumstances that
                  facilitate and impede this process. This module will focus on
                  SDGs: 6,7,11,13,14, and 15.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator />

            <q-expansion-item
              group="somegroup"
              label="Module B.2.2:  Trade and sustainability 2: education and intergenerational mobility"
            >
              <q-card>
                <q-card-section>
                  The second module on sustainability turns attention to the
                  challenge of sustaining growth in the long run. This module
                  focuses on human capital accumulation and the transmission of
                  gains from growth and development to the next generation.
                  These are two essential elements in efforts to escape the
                  so-called “middle income trap.” This module will focus on
                  SDGs: 4, 8 and 11.
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <!-- end Part B.2  -->
        <!-- Part B.3  -->
        <div class="q-pt-sm q-pb-sm">
          Part B.3: Trade, decent work, innovation and responsible consumption
          and production. These modules focus on the following SDGs: 8, 9, and
          12.
        </div>
        <q-list bordered>
          <q-expansion-item
            group="somegroup"
            label="Module B.3.1:  Does trade lead to a race to the bottom in labour standards?"
          >
            <q-card>
              <q-card-section>
                This module has four components that will focus on trade and
                decent work. It begins with an introduction of decent work and
                labour standards. It then discusses labour market consequences
                of international trade. We examine how trade improves workers’
                quality of life through higher wages— and increases incentives
                for labor exploitation at the same time. We end our discussion
                by discussing the role of domestic and international
                institutions in mitigating the undesired effects of trade. This
                module will focus on SDGs: 8 and 9.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item
            group="somegroup"
            label="Module B.3.2: How does trade influence productivity and innovation?"
          >
            <q-card>
              <q-card-section>
                This module will conceptually discuss how trade can influence
                efficiency and innovation. It will discuss the
                productivity-enhancing effects of trade, and the
                complementarities between trade (and FDI) and efforts to reach
                critical SDGs. This module will focus on SDG 9.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item
            group="somegroup"
            label="Module B.3.3: Trade and responsible consumption/production"
          >
            <q-card>
              <q-card-section>
                This module will discuss gains from trade from a consumer
                perspective. It discusses consumer roles in creating more
                sustainable trade patterns and influencing how products are
                produced and supplied. It will touch on issues surrounding
                consumer activism and their potential effect. It will introduce
                issues associated with voluntary and forced trade standards
                applied to international supply chains. This module will focus
                on SDG 12.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        <!-- end Part B.3  -->
        <div class="font18 fontB q-pt-md">References and reading list</div>
        <div class="font14 q-pt-sm">
          Click
          <span class="goToRef" @click="goToReferences()"> here</span>
          to see the detail
        </div>
        <!-- bottom  -->
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
      <div class="q-pa-md" style="height: 60px"></div>
      <!-- end header  -->
      <div class="topBar row">
        <div class="col q-pt-md q-pl-xl">
          <div class="font30 textWhite">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font18 textWhite">
            Learn about how to make trade works for all and environment<br />
            Created by UNESCAP : Last updated {{ lastUpdate }}
          </div>
          <div class="row q-pt-sm">
            <div
              class="loginBtnPC textWhite"
              style="background-color: #1976d2"
              align="center"
              @click="loginBtn()"
            >
              Log in
            </div>
            <div
              class="loginBtnPC q-ml-xl"
              align="center"
              @click="goTosignup()"
            >
              Sign up
            </div>
          </div>
        </div>
        <!-- <div><img src="../../public/image/watermask.svg" alt="" /></div> -->
      </div>
      <div class="q-ma-md font18 q-pl-lg" style="">
        <!-- Goal  -->
        <div class="row">
          <img src="../../public/image/goal.svg" alt="" style="height: 30px" />
          <div class="headText q-px-md" style="line-height: 30px">Goal</div>
        </div>
        <div class="q-pt-md" style="text-indent: 40px">
          Develop a positive, aware, as well as critical attitude toward trade,
          trade liberalization, and globalization in contributing to sustainable
          development
        </div>
        <div class="row q-pt-md">
          <img
            src="../../public/image/thinking.svg"
            alt=""
            style="height: 30px"
          />
          <!-- What you'll learn  -->
          <div class="headText q-px-md" style="line-height: 30px">
            What you'll learn
          </div>
        </div>
        <div class="" style="margin-left: 30px">
          <ul>
            <li>
              Understand the potential role of trade that can contribute to
              developing countries’ acheivement of the SDGs.
            </li>

            <li>
              Identify factors that inhibits effective use of trade as a means
              of implementation.
            </li>
            <li>
              Aware about cross-cutting issues that challenge the effectiveness
              of trade as an instrument toward the SDGs
            </li>
            <li>
              Recognize the importance of holistic policy approach as being
              crucial for ensuring trade is a powerful engine for inclusive
              growth and sustainable development.
            </li>
          </ul>
        </div>
        <!-- Requirement  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/require.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Requirement
          </div>
        </div>
        <div class="" style="margin-left: 30px">
          <ul>
            <li>
              This course is open to anyone interested in trade, globalization,
              and sustainable development.
            </li>
            <li>No prerequisites</li>
          </ul>
        </div>
        <!-- Description  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/description.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Description
          </div>
        </div>
        <div class="" style="margin-left: 30px">
          <ul>
            <li>
              This course uses a non-technical approach to provide essential
              knowledge to understand how trade and globalization can bring
              opportunity and challenges toward sustainable development.
            </li>
            <li>
              Participants that work, study, or interest in public policy and
              development will find the course particularly relevant.
            </li>
            <li>
              The total of 13 modules (4 introductory-level modules and 9
              intermediate-level modules). Approximately, 15-20 minutes per
              modules. Participants can learn at your own schedule.
            </li>
            <li>
              Participants will earn a shareable certificate after the
              completion of the following steps: 1) completion of all modules,
              2) achieve over 70% of the end-course quiz, and 3) submit the
              e-survey for feedbacks about the course
            </li>
          </ul>
        </div>
        <!-- contributors  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/contributors.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Contributors to the course
          </div>
        </div>
        <div class="contentText q-pt-sm">
          This course is developed by the Trade Policy and Facilitation Section
          (TPFS) of Trade, Investment and Innovation Division (TIID), the United
          Nations Economic and Social Commission for Asia and the Pacific
          (UNESCAP).
          <br /><br />
          Course coordinator: Witada Anukoonwattaka, Economic Affairs Officer,
          TPFS, ESCAP
          <br />
          Course principal: Ian Coxhead, Professor of Agricultural and Applied
          Economics, University of Madison

          <br /><br />
          The course is benefit from comments and inputs from the course
          advisory board and ARTNeT advisors:
          <table class="font18">
            <tr>
              <td>Yann Duval</td>
              <td>Chief TPFS, TIID, ESCAP</td>
            </tr>
            <tr>
              <td>Mia Mikic</td>
              <td>
                Advisor at Large, Asia-Pacific Research and Training Network on
                Trade (ARTNeT)
              </td>
            </tr>
            <tr>
              <td>Premachandra Athukorala</td>
              <td>Professor of Economics, Australian National University</td>
            </tr>
            <tr>
              <td>Prabir De</td>
              <td>
                Professor, and Head, ASEAN-India Centre (AIC), Research and
                Information System for Developing Countries (RIS), New Delhi
              </td>
            </tr>
            <tr>
              <td>Evelyn S. Devadason</td>
              <td>
                Professor, Department of Economics, University of Malaysia
              </td>
            </tr>
            <tr>
              <td>Matthias C. Helble</td>
              <td>
                Scientist, Evidence to Policy & Impact, Department of Research
                for Health, World Health Organization
              </td>
            </tr>
            <tr>
              <td>Biswajit Nag</td>
              <td>
                Professor & Head, Economics Division, Indian Institute of
                Foreign Trade (IIFT)
              </td>
            </tr>
            <tr>
              <td>Jiansuo Pei</td>
              <td>
                Associate Professor of Economics, Renmin University of China
              </td>
            </tr>
            <tr>
              <td>Alberto Posso</td>
              <td>
                Professor of Economics, the International Development & Trade
                Research Group, Royal Melbourne Institute of Technology (RMIT)
              </td>
            </tr>
            <tr>
              <td>Wisarn Pupphavesa</td>
              <td>
                Senior Advisor, Thailand Development Research Institute (TDRI)
              </td>
            </tr>
            <tr>
              <td>Chayodom Sabhasri</td>
              <td>
                Associate Professor, Former Dean, Faculty of Economics,
                Chulalongkorn University
              </td>
            </tr>
            <tr>
              <td>Supachai Srisuchart</td>
              <td>
                Assistant Professor, Dean, Faculty of Economics, Thammasat
                University
              </td>
            </tr>
            <tr>
              <td>Sasatra Sudsawasd</td>
              <td>
                Associate Professor, National Institute of Development
                Administration (NIDA)
              </td>
            </tr>
            <tr>
              <td>Andrew Kam Jia Yi</td>
              <td>
                Associate Professor, Senior Fellow, Institute of Malaysian and
                International Studies, National University of Malaysia
              </td>
            </tr>
            <tr>
              <td>Pasakorn Thammachote</td>
              <td>Faculty of economics, Kasetsart University, Thailand</td>
            </tr>
          </table>
        </div>
        <!-- coursee content  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/content.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Course content
          </div>
        </div>
        <div class="contentText q-pt-sm">
          <b>Part A: Introductory modules</b><br /><br />
          <b
            >Module A.1: Trade and the Sustainable Development Goals, a general
            overview</b
          >
          <br />This module will introduce the course by conceptually mapping
          the nexus between trade and the sustainable development goals (SDGs).
          The module will discuss the mechanisms by which trade can potentially
          influence some SDGs and the mechanisms by which achieving the SDGs can
          influence trade patterns. The module will also highlight that while
          some SDGs may not directly link to trade or trade policy, unregulated
          trade may indirectly deteriorate and impact their achievement. This
          module will focus on all the SDGs.
          <br />
          <br /><b>Module A.2: Trade and development: tools and trends </b
          ><br />This module will introduce the relationship between trade and
          the economy of a developing country. It will present conceptual
          mechanisms by which trade promotes economic growth and employment and
          discuss the controversial relationship between trade and inequality.
          It will summarise some stylized facts about developing country trade
          volumes, growth and patterns.
          <br />
          <br /><b>Module A.3: Trade and environmental issues </b><br />This
          module will introduce the relationship between trade and the
          environment. It begins with the conceptual framework, and illustrates
          this with some examples from trade and environmental issues in the
          developing countries.
          <br />
          <br /><b>Module A.4: Trade policy reforms and the SDGs </b><br />This
          module reviews trade policy reforms and their interactions with
          efforts to attain SDGs. It includes a discussion of the effects of
          tariffs and tariffs reforms on incomes and income distribution. It
          continues to a discussion on how trade policy has shifted to address
          issues of sustainability and inclusive growth. This module spans the
          full range of SDGs.
          <br />

          <br /><br /><b>Part B: Intermediate modules</b><br />
          <br /><b>Part B.1: Trade, Poverty, Hunger and inclusive growth</b>
          <br />These modules focus on the following SDGs: 1, 2, 3, 4, 5, 8 and
          10.
          <br />
          <br /><b
            >Module B.1.1: How does trade affect poverty and inequality?</b
          >
          <br />This module will conceptually discuss the conceptual mechanisms
          by which trade affects poverty and inequality before summarising the
          existing empirical evidence on the two. It will touch on multinational
          corporations and outsourcing and their potential effects on poverty
          and inequality. It will discuss the role that complimentary policies
          may have in allowing the growth-related effects of trade to be
          channelled toward equitable growth. This module will focus on SDGs: 1,
          2, 3, 4, 5, 8 and 10.
          <br />
          <br /><b
            >Module B.1.2: Should we use trade restrictions to achieve zero
            hunger?</b
          >
          <br />This module will discuss issues surrounding food security and
          the notion that some nations restrict trade to achieve this. It will
          critically assess this notion conceptually before highlighting that
          importing food is not (necessarily) a problem. This module will focus
          on SDGs: 1 and 2.
          <br />
          <br /><b
            >Module B.1.3: Does international trade cause (inclusive) growth?</b
          >
          <br />This module will begin with an introduction of international
          trade patterns across the world. It will use measures of openness,
          tariffs and Non-tariff barriers to show correlations between
          international trade and economic growth. It will then provide a review
          of the existing literature on trade and economic growth. It will
          highlight both potentially positive and negative trade effects on
          growth and introduce the notion of inclusive growth. This module will
          focus on SDGs: 1, 3, 4, 5, 8 and 10.

          <br /><br /><b
            >Part B.2: Trade, climate change and sustainable growth</b
          >
          <br />These modules focus on the following SDGs: 6,7, 11,13,14, and
          15.
          <br />
          <br /><b
            >Module B.2.1: Trade and sustainability 1: climate change and
            environment </b
          ><br />This module will conceptually discuss trade and the goal of
          environmental sustainability. It will focus on whether trade makes the
          task of dealing with CC effects and maintaining a healthy environment
          easier or more difficult. <br />The module will also introduce
          concepts such as sustainable growth and sustainable trade. It will
          investigate the pros and cons of the nexus between trade and
          sustainable growth. It will intuitively discuss how trade can be used
          as a channel to achieve inclusive economic growth and poverty
          reduction. It will then discuss evidence highlighting the
          circumstances that facilitate and impede this process. This module
          will focus on SDGs: 6,7,11,13,14, and 15.
          <br />
          <br /><b
            >Module B.2.2: Trade and sustainability 2: education and
            intergenerational mobility </b
          ><br />The second module on sustainability turns attention to the
          challenge of sustaining growth in the long run. This module focuses on
          human capital accumulation and the transmission of gains from growth
          and development to the next generation. These are two essential
          elements in efforts to escape the so-called “middle income trap.” This
          module will focus on SDGs: 4, 8 and 11.
          <br />
          <br /><b
            >Part B.3: Trade, decent work, innovation and responsible
            consumption and production. </b
          ><br />These modules focus on the following SDGs: 8, 9, and 12.
          <br />
          <br /><b
            >Module B.3.1: Does trade lead to a race to the bottom in labour
            standards? </b
          ><br />This module has four components that will focus on trade and
          decent work. It begins with an introduction of decent work and labour
          standards. It then discusses labour market consequences of
          international trade. We examine how trade improves workers’ quality of
          life through higher wages— and increases incentives for labor
          exploitation at the same time. We end our discussion by discussing the
          role of domestic and international institutions in mitigating the
          undesired effects of trade. This module will focus on SDGs: 8 and 9.
          <br />
          <br /><b
            >Module B.3.2: How does trade influence productivity and innovation? </b
          ><br />This module will conceptually discuss how trade can influence
          efficiency and innovation. It will discuss the productivity-enhancing
          effects of trade, and the complementarities between trade (and FDI)
          and efforts to reach critical SDGs. This module will focus on SDG 9.
          <br />
          <br /><b
            >Module B.3.3: Trade and responsible consumption/production</b
          >
          <br />This module will discuss gains from trade from a consumer
          perspective. It discusses consumer roles in creating more sustainable
          trade patterns and influencing how products are produced and supplied.
          It will touch on issues surrounding consumer activism and their
          potential effect. It will introduce issues associated with voluntary
          and forced trade standards applied to international supply chains.
          This module will focus on SDG 12.
        </div>
        <!-- references  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/references.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            References and reading list
          </div>
        </div>
        <div class="contentText q-pt-sm">
          Click
          <u><span class="goToRef" @click="goToReferences()"> here</span></u>
          to see the detail
        </div>
      </div>
      <!-- ------- -->
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
      <div class="q-pa-md" style="height: 86px"></div>
      <div class="topBar row">
        <div class="col q-pt-md q-pl-xl">
          <div class="font36 textWhite">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font18 textWhite">
            Learn about how to make trade works for all and environment<br />
            Created by UNESCAP : Last updated {{ lastUpdate }}
          </div>
          <div class="row q-pt-sm">
            <div
              class="loginBtnPC textWhite"
              style="background-color: #1976d2"
              align="center"
              @click="loginBtn()"
            >
              Log in
            </div>
            <div
              class="loginBtnPC q-ml-xl"
              align="center"
              @click="goTosignup()"
            >
              Sign up
            </div>
          </div>
        </div>
        <div><img src="../../public/image/watermask.svg" alt="" /></div>
      </div>
      <!-- end top bar  -->
      <div class="q-ma-md font18 q-pl-lg" style="">
        <!-- Goal  -->
        <div class="row">
          <img src="../../public/image/goal.svg" alt="" style="height: 30px" />
          <div class="headText q-px-md" style="line-height: 30px">Goal</div>
        </div>
        <div class="q-pt-md" style="text-indent: 40px">
          Develop a positive, aware, as well as critical attitude toward trade,
          trade liberalization, and globalization in contributing to sustainable
          development
        </div>
        <div class="row q-pt-md">
          <img
            src="../../public/image/thinking.svg"
            alt=""
            style="height: 30px"
          />
          <!-- What you'll learn  -->
          <div class="headText q-px-md" style="line-height: 30px">
            What you'll learn
          </div>
        </div>
        <div class="" style="margin-left: 30px">
          <ul>
            <li>
              Understand the potential role of trade that can contribute to
              developing countries’ acheivement of the SDGs.
            </li>

            <li>
              Identify factors that inhibits effective use of trade as a means
              of implementation.
            </li>
            <li>
              Aware about cross-cutting issues that challenge the effectiveness
              of trade as an instrument toward the SDGs
            </li>
            <li>
              Recognize the importance of holistic policy approach as being
              crucial for ensuring trade is a powerful engine for inclusive
              growth and sustainable development.
            </li>
          </ul>
        </div>
        <!-- Requirement  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/require.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Requirement
          </div>
        </div>
        <div class="" style="margin-left: 30px">
          <ul>
            <li>
              This course is open to anyone interested in trade, globalization,
              and sustainable development.
            </li>
            <li>No prerequisites</li>
          </ul>
        </div>
        <!-- Description  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/description.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Description
          </div>
        </div>
        <div class="" style="margin-left: 30px">
          <ul>
            <li>
              This course uses a non-technical approach to provide essential
              knowledge to understand how trade and globalization can bring
              opportunity and challenges toward sustainable development.
            </li>
            <li>
              Participants that work, study, or interest in public policy and
              development will find the course particularly relevant.
            </li>
            <li>
              The total of 13 modules (4 introductory-level modules and 9
              intermediate-level modules). Approximately, 15-20 minutes per
              modules. Participants can learn at your own schedule.
            </li>
            <li>
              Participants will earn a shareable certificate after the
              completion of the following steps: 1) completion of all modules,
              2) achieve over 70% of the end-course quiz, and 3) submit the
              e-survey for feedbacks about the course
            </li>
          </ul>
        </div>
        <!-- contributors  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/contributors.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Contributors to the course
          </div>
        </div>
        <div class="contentText q-pt-sm">
          This course is developed by the Trade Policy and Facilitation Section
          (TPFS) of Trade, Investment and Innovation Division (TIID), the United
          Nations Economic and Social Commission for Asia and the Pacific
          (UNESCAP).
          <br /><br />
          Course coordinator: Witada Anukoonwattaka, Economic Affairs Officer,
          TPFS, ESCAP
          <br />
          Course principal: Ian Coxhead, Professor of Agricultural and Applied
          Economics, University of Madison

          <br /><br />
          The course is benefit from comments and inputs from the course
          advisory board and ARTNeT advisors:
          <table>
            <tr>
              <td>Yann Duval</td>
              <td>Chief TPFS, TIID, ESCAP</td>
            </tr>
            <tr>
              <td>Mia Mikic</td>
              <td>
                Advisor at Large, Asia-Pacific Research and Training Network on
                Trade (ARTNeT)
              </td>
            </tr>
            <tr>
              <td>Premachandra Athukorala</td>
              <td>Professor of Economics, Australian National University</td>
            </tr>
            <tr>
              <td>Prabir De</td>
              <td>
                Professor, and Head, ASEAN-India Centre (AIC), Research and
                Information System for Developing Countries (RIS), New Delhi
              </td>
            </tr>
            <tr>
              <td>Evelyn S. Devadason</td>
              <td>
                Professor, Department of Economics, University of Malaysia
              </td>
            </tr>
            <tr>
              <td>Matthias C. Helble</td>
              <td>
                Scientist, Evidence to Policy & Impact, Department of Research
                for Health, World Health Organization
              </td>
            </tr>
            <tr>
              <td>Biswajit Nag</td>
              <td>
                Professor & Head, Economics Division, Indian Institute of
                Foreign Trade (IIFT)
              </td>
            </tr>
            <tr>
              <td>Jiansuo Pei</td>
              <td>
                Associate Professor of Economics, Renmin University of China
              </td>
            </tr>
            <tr>
              <td>Alberto Posso</td>
              <td>
                Professor of Economics, the International Development & Trade
                Research Group, Royal Melbourne Institute of Technology (RMIT)
              </td>
            </tr>
            <tr>
              <td>Wisarn Pupphavesa</td>
              <td>
                Senior Advisor, Thailand Development Research Institute (TDRI)
              </td>
            </tr>
            <tr>
              <td>Chayodom Sabhasri</td>
              <td>
                Associate Professor, Former Dean, Faculty of Economics,
                Chulalongkorn University
              </td>
            </tr>
            <tr>
              <td>Supachai Srisuchart</td>
              <td>
                Assistant Professor, Dean, Faculty of Economics, Thammasat
                University
              </td>
            </tr>
            <tr>
              <td>Sasatra Sudsawasd</td>
              <td>
                Associate Professor, National Institute of Development
                Administration (NIDA)
              </td>
            </tr>
            <tr>
              <td>Andrew Kam Jia Yi</td>
              <td>
                Associate Professor, Senior Fellow, Institute of Malaysian and
                International Studies, National University of Malaysia
              </td>
            </tr>
            <tr>
              <td>Pasakorn Thammachote</td>
              <td>Faculty of economics, Kasetsart University, Thailand</td>
            </tr>
          </table>
        </div>
        <!-- coursee content  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/content.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            Course content
          </div>
        </div>
        <div class="contentText q-pt-sm">
          <b>Part A: Introductory modules</b><br /><br />
          <b
            >Module A.1: Trade and the Sustainable Development Goals, a general
            overview</b
          >
          <br />This module will introduce the course by conceptually mapping
          the nexus between trade and the sustainable development goals (SDGs).
          The module will discuss the mechanisms by which trade can potentially
          influence some SDGs and the mechanisms by which achieving the SDGs can
          influence trade patterns. The module will also highlight that while
          some SDGs may not directly link to trade or trade policy, unregulated
          trade may indirectly deteriorate and impact their achievement. This
          module will focus on all the SDGs.
          <br />
          <br /><b>Module A.2: Trade and development: tools and trends </b
          ><br />This module will introduce the relationship between trade and
          the economy of a developing country. It will present conceptual
          mechanisms by which trade promotes economic growth and employment and
          discuss the controversial relationship between trade and inequality.
          It will summarise some stylized facts about developing country trade
          volumes, growth and patterns.
          <br />
          <br /><b>Module A.3: Trade and environmental issues </b><br />This
          module will introduce the relationship between trade and the
          environment. It begins with the conceptual framework, and illustrates
          this with some examples from trade and environmental issues in the
          developing countries.
          <br />
          <br /><b>Module A.4: Trade policy reforms and the SDGs </b><br />This
          module reviews trade policy reforms and their interactions with
          efforts to attain SDGs. It includes a discussion of the effects of
          tariffs and tariffs reforms on incomes and income distribution. It
          continues to a discussion on how trade policy has shifted to address
          issues of sustainability and inclusive growth. This module spans the
          full range of SDGs.
          <br />

          <br /><br /><b>Part B: Intermediate modules</b><br />
          <br /><b>Part B.1: Trade, Poverty, Hunger and inclusive growth</b>
          <br />These modules focus on the following SDGs: 1, 2, 3, 4, 5, 8 and
          10.
          <br />
          <br /><b
            >Module B.1.1: How does trade affect poverty and inequality?</b
          >
          <br />This module will conceptually discuss the conceptual mechanisms
          by which trade affects poverty and inequality before summarising the
          existing empirical evidence on the two. It will touch on multinational
          corporations and outsourcing and their potential effects on poverty
          and inequality. It will discuss the role that complimentary policies
          may have in allowing the growth-related effects of trade to be
          channelled toward equitable growth. This module will focus on SDGs: 1,
          2, 3, 4, 5, 8 and 10.
          <br />
          <br /><b
            >Module B.1.2: Should we use trade restrictions to achieve zero
            hunger?</b
          >
          <br />This module will discuss issues surrounding food security and
          the notion that some nations restrict trade to achieve this. It will
          critically assess this notion conceptually before highlighting that
          importing food is not (necessarily) a problem. This module will focus
          on SDGs: 1 and 2.
          <br />
          <br /><b
            >Module B.1.3: Does international trade cause (inclusive) growth?</b
          >
          <br />This module will begin with an introduction of international
          trade patterns across the world. It will use measures of openness,
          tariffs and Non-tariff barriers to show correlations between
          international trade and economic growth. It will then provide a review
          of the existing literature on trade and economic growth. It will
          highlight both potentially positive and negative trade effects on
          growth and introduce the notion of inclusive growth. This module will
          focus on SDGs: 1, 3, 4, 5, 8 and 10.

          <br /><br /><b
            >Part B.2: Trade, climate change and sustainable growth</b
          >
          <br />These modules focus on the following SDGs: 6,7, 11,13,14, and
          15.
          <br />
          <br /><b
            >Module B.2.1: Trade and sustainability 1: climate change and
            environment </b
          ><br />This module will conceptually discuss trade and the goal of
          environmental sustainability. It will focus on whether trade makes the
          task of dealing with CC effects and maintaining a healthy environment
          easier or more difficult. <br />The module will also introduce
          concepts such as sustainable growth and sustainable trade. It will
          investigate the pros and cons of the nexus between trade and
          sustainable growth. It will intuitively discuss how trade can be used
          as a channel to achieve inclusive economic growth and poverty
          reduction. It will then discuss evidence highlighting the
          circumstances that facilitate and impede this process. This module
          will focus on SDGs: 6,7,11,13,14, and 15.
          <br />
          <br /><b
            >Module B.2.2: Trade and sustainability 2: education and
            intergenerational mobility </b
          ><br />The second module on sustainability turns attention to the
          challenge of sustaining growth in the long run. This module focuses on
          human capital accumulation and the transmission of gains from growth
          and development to the next generation. These are two essential
          elements in efforts to escape the so-called “middle income trap.” This
          module will focus on SDGs: 4, 8 and 11.
          <br />
          <br /><b
            >Part B.3: Trade, decent work, innovation and responsible
            consumption and production. </b
          ><br />These modules focus on the following SDGs: 8, 9, and 12.
          <br />
          <br /><b
            >Module B.3.1: Does trade lead to a race to the bottom in labour
            standards? </b
          ><br />This module has four components that will focus on trade and
          decent work. It begins with an introduction of decent work and labour
          standards. It then discusses labour market consequences of
          international trade. We examine how trade improves workers’ quality of
          life through higher wages— and increases incentives for labor
          exploitation at the same time. We end our discussion by discussing the
          role of domestic and international institutions in mitigating the
          undesired effects of trade. This module will focus on SDGs: 8 and 9.
          <br />
          <br /><b
            >Module B.3.2: How does trade influence productivity and innovation? </b
          ><br />This module will conceptually discuss how trade can influence
          efficiency and innovation. It will discuss the productivity-enhancing
          effects of trade, and the complementarities between trade (and FDI)
          and efforts to reach critical SDGs. This module will focus on SDG 9.
          <br />
          <br /><b
            >Module B.3.3: Trade and responsible consumption/production</b
          >
          <br />This module will discuss gains from trade from a consumer
          perspective. It discusses consumer roles in creating more sustainable
          trade patterns and influencing how products are produced and supplied.
          It will touch on issues surrounding consumer activism and their
          potential effect. It will introduce issues associated with voluntary
          and forced trade standards applied to international supply chains.
          This module will focus on SDG 12.
        </div>
        <!-- references  -->
        <div class="row q-pt-md">
          <img
            src="../../public/image/references.svg"
            alt=""
            style="height: 30px"
          />
          <div class="headText q-px-md" style="line-height: 30px">
            References and reading list
          </div>
        </div>
        <div class="contentText q-pt-sm">
          Click
          <span class="goToRef" @click="goToReferences()"> here</span>
          to see the detail
        </div>
        <!-- ------- -->
      </div>
      <!-- end text  -->
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
    <!-- bgDrop & dialog  -->
    <div class="fullscreen bgDrop" v-show="loginDia"></div>
    <q-dialog v-model="loginDia" persistent>
      <q-card class="loginDia">
        <div
          class="row items-center"
          style="background-color: #1f2b35; height: 60px"
        >
          <div class="col-4 q-pl-md">
            <img
              src="../../public/image/logoMobile.svg"
              style="width: 140px"
              alt=""
            />
          </div>
          <div class="lineDia q-ml-md"></div>
          <div class="col font18 textWhite q-pl-md">
            Trade and the sustainable development goals (SDGs)
          </div>
        </div>
        <!-- endheader -->
        <div v-show="!isForgetPassword">
          <div class="font18 q-pt-md" align="center">
            Please log in to join our class
          </div>
          <div class="row q-pt-md">
            <div class="col"></div>
            <div class="col-9">
              <div class="font18">Username</div>
              <div class="">
                <q-input class="" dense outlined v-model="userData.username" />
              </div>
              <div class="font18 q-pt-lg">Password</div>
              <div class="">
                <q-input
                  class=""
                  dense
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
              </div>
              <div
                @click="toggleForget()"
                class="font14 fontU cursor-pointer q-pt-sm"
                align="right"
              >
                Forget password?
              </div>
            </div>
            <div class="col"></div>
          </div>
          <div class="row q-pt-lg justify-evenly">
            <div class="diaBtn" align="center" @click="closeDia()">Cancel</div>
            <div
              class="diaBtn textWhite"
              align="center"
              style="background-color: #1976d2; border: none"
              @click="goToClass()"
            >
              Log in
            </div>
          </div>
          <div class="font14 q-pt-lg row justify-center">
            <div>Not a SDGs member?&nbsp;</div>
            <div
              class="text-blue cursor-pointer"
              style="text-decoration: underline"
              @click="goTosignup()"
            >
              Sign up for free account
            </div>
          </div>
        </div>
        <div v-show="isForgetPassword" align="center" class="q-pa-md">
          <div class="font18 q-pt-lg">Forget password</div>
          <div class="q-px-lg q-pt-xl">
            <div class="font18" align="left">Email</div>
            <div class="">
              <q-input class="" dense outlined v-model="userData.username" />
            </div>
            <div class="row q-pt-xl justify-evenly">
              <div class="diaBtn" @click="toggleForget()">Back to login</div>
              <div
                @click="submitEmail()"
                class="diaBtn text-white"
                style="background-color: #1976d2; border: none"
              >
                submit
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </q-dialog>
    <!-- dialog mobile  -->
    <!-- <q-dialog v-model="loginMobileDia">
      <q-card class="loginMobileDia" align="center">
        <div class="headerMobileDia row items-center">
          <div class="col-4 cursor-pointer" align="center">
            <img
              class=""
              src="../../public/image/logoMobile.svg"
              alt=""
              style="width: 94px; padding-top: 6px"
            />
          </div>
          <div class="lineMobile"></div>
          <div class="col q-px-sm font14 textWhite" align="left">
            Trade and the sustainable development goals (SDGs)
          </div>
        </div>
        <div class="font18 q-pt-sm" align="center">
          Please log in to join our class
        </div>
        <div class="q-pt-md q-px-lg" align="center">
          <div class="">
            <q-input dense label="Username" v-model="userData.username" />
          </div>
          <div class="">
            <q-input
              dense
              label="Password"
              v-model="userData.password"
              :type="isPwd ? 'password' : 'text'"
              ><template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                /> </template
            ></q-input>
          </div>
          <div class="font14 fontU cursor-pointer q-pt-sm" align="right">
            Forget password?
          </div>
          <div class="q-pt-md">
            <div
              class="diaBtn textWhite"
              align="center"
              style="
                background: rgba(25, 118, 210, 1);
                border: none;
                width: 100%;
              "
              @click="goToClass()"
            >
              Log in
            </div>
          </div>
        </div>

        <div class="font14 q-pt-md row justify-center">
          <div>Not a SDGs member?&nbsp;</div>
          <div
            class="text-blue cursor-pointer"
            style="text-decoration: underline"
            @click="goTosignup()"
          >
            Sign up for free account
          </div>
        </div>
      </q-card>
    </q-dialog> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      lastUpdate: "7 / 2021",
      isPwd: true,
      isForgetPassword: true,
      loginDia: true,
      userData: {
        username: "",
        password: "",
        useremail: "",
      },
    };
  },
  methods: {
    submitEmail() {
      this.greenNotify("Username and Password was sent to your email address");
    },
    toggleForget() {
      this.isForgetPassword = !this.isForgetPassword;
    },
    goToReferences() {
      this.$router.push("/references");
    },
    goTosignup() {
      this.$router.push("/signup");
    },
    goHome() {
      this.$router.push("/");
    },
    async goToClass() {
      if (this.userData.username == "" || this.userData.password == "") {
        this.redNotify("Username or Password incorrect");
        return;
      }

      let url = this.serverpath + "fe_syllabus_loginuser.php";
      let res = await axios.post(url, JSON.stringify(this.userData));

      if (res.data == "login fail") {
        this.redNotify("Username or Password incorrect");
        return;
      } else {
        this.$q.localStorage.set("userid", res.data[0].id);
        this.$q.localStorage.set("username", res.data[0].username);
        this.$router.push("/study");
      }
    },
    loginBtn() {
      this.loginDia = true;
    },
    loginMobileBtn() {
      this.loginMobileDia = true;
    },
    closeDia() {
      this.loginDia = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.topBar {
  background-color: #33383d;
  width: 100%;
  height: 204px;
}
.loginBtnPC {
  cursor: pointer;
  background-color: white;
  line-height: 50px;
  font-size: 24px;
  width: 175px;
  height: 50px;
  border-radius: 10px;
}
.headText {
  font-weight: bold;
  font-size: 24px;
  color: black;
}
.contentText {
  padding-left: 70px;
  font-size: 18px;
}
.goToRef {
  text-decoration: underline;
  cursor: pointer;
  color: blue;
}
td {
  padding-top: 10px;
  padding-right: 50px;
  padding-left: 20px;
  min-width: 280px;
}
.loginDia {
  width: 480px;
  height: 435px;
  border-radius: 5px;
}
.headerMobileDia {
  background-color: #1f2b35;
  height: 50px;
}
.loginMobileDia {
  height: 320px;
  border-radius: 5px;
}
.lineDia {
  width: 3px;
  height: 48px;
  background-color: white;
}
.bgDrop {
  background-color: rgba($color: #000000, $alpha: 0.7);
}
.diaBtn {
  cursor: pointer;
  border-radius: 5px;
  width: 140px;
  height: 42px;
  line-height: 42px;
  font-size: 16px;
  border: 1px solid black;
}
.loginBtnMobile {
  background: #1976d2;
  line-height: 40px;
  font-size: 18px;
  width: 130px;
  height: 40px;
  border-radius: 5px;
}
.signUpBtnMobile {
  background: #ffffff;
  line-height: 40px;
  font-size: 18px;
  width: 130px;
  height: 40px;
  border-radius: 5px;
}
.topBarMobile {
  background-color: #33383d;
  width: 100%;
  height: 204px;
}
.ulMobile {
  margin-left: -15px;
  margin-top: 10px;
}
.font12Grey {
  color: #898989;
  font-size: 12px;
}
</style>
