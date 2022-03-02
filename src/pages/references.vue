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
      <!-- endHeader  -->
      <div class="topBar row textWhite">
        <div class="col q-pt-sm q-pl-md">
          <div class="font18">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font14 textWhite">
            Learn about how to make trade works for all and environment<br />
          </div>
          <div class="font24 q-pt-md">References and reading list</div>
          <div class="font18 fontU q-pt-sm" @click="goBack()">
            back to course content page
          </div>
        </div>
      </div>
      <!-- References  -->
      <div>
        <div class="font18 fontB q-pl-md q-pt-sm">
          References and reading list
        </div>
        <div class="q-pl-md q-pt-sm">
          Contains references cited in the modules as well as some suggestions
          for further reading.
        </div>
        <div class="q-pl-md q-pt-md">
          <span class="fontB"> I. “Big picture” readings </span>
        </div>
        <div class="q-pl-md">
          (less technical, or at least more accessible by general readers)
        </div>
        <div class="q-pl-md q-pt-sm">
          Baldwin, R.E., 2016. The Great Convergence: Information Technology and
          the New Globalization. Cambridge, MA: Belknap Press. Especially Part
          III: Understanding globalization’s changes.
        </div>
        <div class="sortText q-pl-md q-pt-sm">
          Helble, M., and B. Shepherd, eds. 2017.
          <a
            target="blank"
            href="https://www.adb.org/sites/default/files/publication/327451/adbi-win-win-how-international-trade-can-help-meet-sdgs.pdf"
            >Win-Win: How International Trade Can Help Meet the Sustainable
            Development Goals.</a
          >
          Tokyo: Asian Development Bank Institute.
        </div>
        <div class="q-pl-md q-pt-md">
          <span class="fontB">
            II. Readings and references specific to modules
          </span>
        </div>
        <div class="q-pl-md">
          (more technical papers focused on formal arguments and statistical
          evidence)
        </div>
      </div>
      <!-- module Box  -->
      <div class="font14 q-pa-md">
        <q-list bordered>
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module A.1"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Estevadeordal, A., and A.M. Taylor (2013).
                  <a
                    target="blank"
                    href="http://www.aae.wisc.edu/coxhead/courses/readings/Estevadeordal%20and%20Taylor%20Washington%20Consensus%20RES%202013.pdf"
                    >Is the Washington Consensus dead? Growth, openness, and the
                    great liberalization, 1970s-2000s.</a
                  >
                  Rev. Econ. Stat. 95(5): 1669-1690.
                </div>
                <div class="sortText">
                  United Nations, 2015.<a
                    target="blank"
                    href="https://www.un.org/ga/search/view_doc.asp?symbol=A/RES/70/1&Lang=E"
                  >
                    Transforming our World: the 2030 Agenda for Sustainable
                    Development.</a
                  >
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module A.2"
          >
            <q-card>
              <q-card-section>
                <div>
                  Frank, R.H., and B. Bernanke, 2010.
                  <a target="blank" href="https://b-ok.asia/book/5482837/3e1ecb"
                    >Principles of Economics, Brief Edition.</a
                  >
                  McGraw-Hill Higher Education.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module A.3"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  FAO, 2020.
                  <a
                    target="blank"
                    href="http://www.fao.org/state-of-forests/en"
                    >State of the World’s Forests 2020.</a
                  >
                  (Webpage with downloadable report)
                </div>

                <div class="sortText">
                  Indonesia-Investments, 2017.
                  <a
                    target="blank"
                    href="https://www.indonesia-investments.com/business/commodities/palm-oil/item166"
                    >Palm Oil</a
                  >
                  (webpage).
                </div>

                <div class="sortText">
                  IPCC, 2014.
                  <a target="blank" href="https://www.ipcc.ch/report/ar5/syr/"
                    >Climate Change 2014: Synthesis Report. Contribution of
                    Working Groups I, II and III to the Fifth Assessment Report
                    of the Intergovernmental Panel on Climate Change</a
                  >
                  [Core Writing Team, R.K. Pachauri and L.A. Meyer (eds.)].
                  IPCC, Geneva, Switzerland.
                </div>

                <div class="sortText">
                  Roberts, D., 2017.
                  <a
                    target="blank"
                    href="https://www.vox.com/energy-and-environment/2017/5/15/15634538/china-coal-cleaner"
                    >By 2020, every Chinese coal plant will be more efficient
                    than every US coal plant.</a
                  >
                  Vox (webpage).
                </div>

                <div class="sortText">
                  World Trade Organization (WTO).
                  <a
                    target="blank"
                    href="https://www.wto.org/english/tratop_e/envir_e/climate_impact_e.htm"
                    >The impact of trade opening on climate change</a
                  >
                  (webpage).
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module A.4"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Harrison, G.W.; T.F. Rutherford, D.G. Tarr, and A. Gurgel,
                  2004.
                  <a
                    target="blank"
                    href="https://elibrary.worldbank.org/doi/abs/10.1093/wber/lhh043"
                    >Trade policy and poverty reduction in Brazil.</a
                  >
                  World Bank Economic Review, 18(3): 289-317.
                </div>

                <div class="sortText">
                  Winters, A., 2002.
                  <a
                    target="blank"
                    href="https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-9701.00495"
                    >Trade liberalization and poverty: what are the links?</a
                  >
                  The World Economy 25(9): 1339-1367.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.1.1"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Dreze, J., and A.K. Sen, 1991.
                  <a
                    target="blank"
                    href="https://global.oup.com/academic/product/hunger-and-public-action-9780198283652?cc=fi&lang=en&"
                    >Hunger and Public Action.</a
                  >
                  Oxford: Clarendon Press.
                </div>
                <div class="sortText">
                  Hale, G., and M. Xu, 2016:
                  <a
                    target="blank"
                    href="https://www.frbsf.org/economic-research/files/wp2016-25.pdf"
                    >FDI effects on the labor markets of host countries.</a
                  >
                  Federal Reserve Bank of San Francisco Working Paper 2016-25.
                </div>
                <div class="sortText">
                  F. Sjoholm and R. Lipsey, 2006:
                  <a target="blank" href="https://doi.org/10.1086/505723"
                    >Foreign firms and Indonesian manufacturing wages: an
                    analysis with panel data.</a
                  >
                  Economic Development and Cultural Change 55(1).
                </div>
                <div class="sortText">
                  S. Karlsson et al 2008.
                  <a
                    target="blank"
                    href="https://doi.org/10.1111/j.1467-9701.2009.01162.x"
                    >Foreign firms and Chinese employment.</a
                  >
                  World Economy 32(1).
                </div>
                <div class="sortText">
                  A. Hijzen, P.S. Martins, T. Schank, and R. Upward, 2013:
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.euroecorev.2013.02.001"
                    >Foreign-owned firms around the world: A comparative
                    analysis of wages and employment at the micro-level.</a
                  >
                  European Economic Review 60: 170-188.
                </div>
                <div class="sortText">
                  Topalova, P., 2010.
                  <a target="blank" href="https://www.jstor.org/stable/25760231"
                    >Factor immobility and regional impacts of trade
                    liberalization: evidence on poverty from India,</a
                  >” American Economic Journal: Applied Economics. 2(4): 1–41.
                </div>
                <div class="sortText">
                  McCaig, B., 2011.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.jinteco.2011.05.007"
                    >Exporting out of poverty: provincial poverty in Vietnam and
                    U.S. market access.</a
                  >
                  Journal of International Economics 85(1): 102-113.
                </div>
                <div class="sortText">
                  Coxhead, I.; N.V. Cuong, and V.H. Linh, 2015.
                  <a
                    target="blank"
                    href="https://openknowledge.worldbank.org/handle/10986/23597"
                    >Migration in Vietnam: new evidence from recent surveys.</a
                  >
                  World Bank Vietnam Country Office, Vietnam Development
                  Economics Discussion Paper No. 2.
                </div>

                <div class="sortText">
                  World Bank, 2018:
                  <a
                    target="blank"
                    href="http://documents1.worldbank.org/curated/en/206981522843253122/pdf/124916-WP-PULIC-P161323-VietnamPovertyUpdateReportENG.pdf"
                    >Climbing the Ladder: Poverty reduction and shared
                    prosperity in Vietnam.</a
                  >
                  Washington, DC: World Bank.
                </div>
                <div class="sortText">
                  Coxhead, I. and R. Shrestha, 2017.
                  <a
                    target="blank"
                    href="https://uwmadison.box.com/s/nse13nwil2hcbtsb7n167la2lm4ujwpv"
                    >Globalization and school-work choices in an emerging
                    economy</a
                  >
                  Vietnam. Asian Economic Papers 16(2): 1-18.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.1.2"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  FAO, 2008:
                  <a
                    target="blank"
                    href="http://www.fao.org/3/al936e/al936e00.pdf"
                    >An Introduction to the Basic Concepts of Food Security.</a
                  >
                  Online resource.
                </div>
                <div class="sortText">
                  Ivanic, M., and W. Martin, 2014.
                  <a
                    target="blank"
                    href="https://openknowledge.worldbank.org/bitstream/handle/10986/20350/WPS7011.pdf;sequence=1"
                    >Short- and long-run impacts of food price increases on
                    poverty.</a
                  >
                  World Bank Staff Working Papers No. WPS7011.
                </div>
                <div class="sortText">
                  Martin, W., 2017. Agricultural trade and hunger. In M. Helble
                  and B. Shepherd,
                  <a
                    target="blank"
                    href="https://www.adb.org/sites/default/files/publication/327451/adbi-win-win-how-international-trade-can-help-meet-sdgs.pdf"
                    >Win-win: How International Trade Can Help Meet the
                    Sustainable Development Goals</a
                  >
                  (Tokyo: ADBI).
                </div>
                <div class="sortText">
                  Warr, P., 2011.
                  <a
                    target="blank"
                    href="https://dev.crawford.anu.edu.au/acde/publications/publish/papers/wp2011/wp_econ_2011_04.pdf"
                    >Food security vs. food self‐sufficiency: the Indonesian
                    case</a
                  >,. The Indonesian Quarterly 39: 56–71.
                </div>
                <div class="sortText">
                  Fane, G., and P.G. Warr, 2008.
                  <a
                    target="blank"
                    href="https://ideas.repec.org/a/taf/bindes/v44y2008i1p133-150.html"
                    >Agricultural protection in Indonesia.</a
                  >
                  Bulletin of Indonesian Economic Studies 44(1): 133-150.
                </div>
                <div class="sortText">
                  Warr, P.G., and A.A. Yusuf, 2013.
                  <a
                    target="blank"
                    href="https://doi.org/10.1111/1467-8489.12015"
                    >World food prices and poverty in Indonesia.</a
                  >
                  Aust. J. Agr. Res. Econ. 58: 1-21.
                </div>
                <div class="sortText">
                  Coxhead, I. and G.E. Shively, 1998. Some economic and
                  environmental implications of technical progress in Philippine
                  corn agriculture: an economy-wide perspective. Journal of
                  Agricultural Development and Economics XXVI (1/2), July:
                  60-90.
                </div>
                <div class="sortText">
                  Coxhead, I., 2000.
                  <a
                    target="blank"
                    href="http://www.sciencedirect.com/science/article/pii/S0305750X99001175"
                    >The consequences of a food security strategy for economic
                    welfare, income distribution and agricultural land
                    degradation: the Philippine case.</a
                  >
                  World Development 28(1): 111-128.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.1.3"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Frankel, J. A., & Romer, D. H., 1999.
                  <a
                    target="blank"
                    href="https://eml.berkeley.edu/~dromer/papers/AER_June99.pdf"
                    >Does trade cause growth?</a
                  >
                  American Economic Review 89(3): 379-399.
                </div>
                <div class="sortText">
                  Alcalá, F., & Ciccone, A., 2004.
                  <a
                    target="blank"
                    href="https://www.jstor.org/stable/pdf/25098695.pdf"
                    >Trade and productivity.</a
                  >
                  Quarterly Journal of Economics 119(2): 613-646.
                </div>
                <div class="sortText">
                  Pavcnik, N., 2002.
                  <a
                    target="blank"
                    href="https://www.jstor.org/stable/pdf/2695960.pdf"
                    >Trade liberalization, exit, and productivity improvements:
                    Evidence from Chilean plants.</a
                  >
                  Review of Economic Studies 69(1): 245-276.
                </div>
                <div class="sortText">
                  Amiti, M., and J. Konings, 2007. Trade liberalization,
                  intermediate inputs, and productivity: evidence from
                  Indonesia. American Economic Review 97(5): 1611-1638.
                </div>
                <div class="sortText">
                  Bresnahan, L.; I. Coxhead, J. Foltz and T. Mogues, 2016.
                  <a
                    target="blank"
                    href="http://www.aae.wisc.edu/pubs/sps/pdf/stpap583.pdf"
                    >Does freer trade really lead to productivity growth?
                    Evidence from sub-Saharan Africa.</a
                  >
                  World Development 86(1): 18-29.
                </div>
                <div class="sortText">
                  Ahmed, A..,n.d.
                  <a
                    target="blank"
                    href="https://www.unescap.org/sites/default/files/7.1The%20economic%20and%20social%20impact%20of%20liberalisation%20in%20Bangladesh%20on%20garment%20and%20leather%20sectors.pdf"
                    >The economic and social impact of liberalisation through
                    preferential trade agreements – the case of the ready-made
                    garments and the leather & leathergoods sectors. A country
                    study on Bangladesh.</a
                  >
                  Presentation: UN ESCAP.
                </div>
                <div class="sortText">
                  Heath, R. and Mobarak, A.M., 2015.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.jdeveco.2015.01.006"
                    >Manufacturing growth and the lives of Bangladeshi women.</a
                  >
                  Journal of Development Economics 115: 1-15.
                </div>
                <div class="sortText">
                  Robertson, R.; D. Kokas, D. Cardozo, and G. Lopez-Acevedo,
                  2020.
                  <a
                    target="blank"
                    href="https://openknowledge.worldbank.org/bitstream/handle/10986/33425/Short-and-Long-Run-Labor-Market-Effects-of-Developing-Country-Exports-Evidence-from-Bangladesh.pdf?sequence=1&isAllowed=y"
                    >Short and long-run labor market effects of
                    developing-country exports: evidence from Bangladesh.</a
                  >
                  World Bank Policy Research Working Papers No. 9176.
                </div>
                <div class="sortText">
                  B. Hoekman, 2016:
                  <a
                    target="blank"
                    href="https://www.oecd-ilibrary.org/docserver/5jm0m93sf036-en.pdf?expires=1609116040&id=id&accname=guest&checksum=D72CFA96AC4B550B527B2BA0A5BCBAA8"
                    >Trade and the SDGs: making ‘means of implementation’ a
                    reality.</a
                  >
                  OECD.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.2.1"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  World Resources Institute:
                  <a
                    target="blank"
                    href="https://www.wri.org/blog/2020/12/interactive-chart-top-emitters"
                    >This Interactive Chart Shows Changes in the World's Top 10
                    Emitters.</a
                  >
                  Webpage.
                </div>
                <div class="sortText">
                  Schenker 2013: Exchanging goods and damages: the role of trade
                  on the distribution of climate change costs. Envir. Res. Econ.
                  54: 261-282.
                </div>
                <div class="sortText">
                  Tol 2009: The economic impacts of climate change, J. Econ.
                  Persp. 23(2): 29-51.
                </div>
                <div class="sortText">
                  N. Traore and J. Foltz, 2017.
                  <a
                    target="blank"
                    href="https://poder.cepr.org/sites/default/files/JMP_Traore.pdf"
                    >Temperatures, Productivity, and Firm Competitiveness in
                    Developing Countries: Evidence from Africa.</a
                  >
                  Working paper.
                </div>
                <div class="sortText">
                  Yusuf, A.A., and B. Reosudarmo, 2015. On the distributional
                  impact of a carbon tax in developing countries: the case of
                  Indonesia. Envir. Econ. Pol. Stud. 17, 2015.
                </div>
                <div class="sortText">
                  UN ESCAP:
                  <a
                    target="blank"
                    href="https://www.unescap.org/sites/default/files/Ch4%20-%20Rethinking%20trade%20and%20investment%20policies%20for%20sustainable%20development_16Nov17.pdf"
                    >Rethinking trade and investment policies for sustainable
                    development.</a
                  >
                  Chapter 4 in ESCAP: Asia-Pacific Trade and Investment Report
                  2017.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.2.2"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Robertson, R.; D. Kokas, D. Cardozo, and G. Lopez-Acevedo,
                  2020.
                  <a
                    target="blank"
                    href="https://openknowledge.worldbank.org/bitstream/handle/10986/33425/Short-and-Long-Run-Labor-Market-Effects-of-Developing-Country-Exports-Evidence-from-Bangladesh.pdf?sequence=1&isAllowed=y"
                    >Short and long-run labor market effects of
                    developing-country exports: evidence from Bangladesh.</a
                  >
                  World Bank Policy Research Working Papers No. 9176.
                </div>
                <div class="sortText">
                  Atkin, D., 2016.
                  <a
                    target="blank"
                    href="https://www.aeaweb.org/articles?id=10.1257/aer.20120901"
                    >Endogenous skill acquisition and export manufacturing in
                    Mexico.</a
                  >
                  American Economic Review 106(8): 2046-85.
                </div>
                <div class="sortText">
                  Coxhead, I. and R. Shrestha, 2017.
                  <a
                    target="blank"
                    href="https://uwmadison.box.com/s/nse13nwil2hcbtsb7n167la2lm4ujwpv"
                    >Globalization and school-work choices in an emerging
                    economy: Vietnam.</a
                  >
                  Asian Economic Papers 16(2): 1-18.
                </div>
                <div class="sortText">
                  Phan, D. and I. Coxhead, 2013.
                  <a
                    target="blank"
                    href="http://dx.doi.org/10.1016/j.jce.2013.04.001"
                    >Long-run costs of piecemeal reform: wage inequality and
                    returns to education in Vietnam.</a
                  >
                  Journal of Comparative Economics 41(4): 1106-1122.
                </div>
                <div class="sortText">
                  Fox, L.; F. Torche, and J. Waldfogel, 2016:
                  <a
                    target="blank"
                    href="https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780199914050.001.0001/oxfordhb-9780199914050-e-24"
                    >Intergenerational Mobility.</a
                  >
                  in D. Brady and L.M. Burton, eds. Oxford Handbook of the
                  Social Science of Poverty. Online resource.
                </div>
                <div class="sortText">
                  M.N. Asadullah, 2006.
                  <a
                    target="blank"
                    href="https://www.researchgate.net/profile/Mohammad_Asadullah2/publication/228675658_Intergenerational_economic_mobility_in_rural_Bangladesh/links/0deec528c371e2fb1c000000/Intergenerational-economic-mobility-in-rural-Bangladesh.pdf"
                    >Intergenerational economic mobility in rural Bangladesh.</a
                  >
                  Paper prepared for presentation at the Royal Economic Society
                  (RES) Annual Conference, University of Nottingham, 2006.
                </div>
                <div class="sortText">
                  C. Dunn, 2003:
                  <a
                    target="blank"
                    href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.548.7920&rep=rep1&type=pdf"
                    >Intergenerational earnings mobility in Brazil.</a
                  >
                  Manuscript, Univ. of Michigan.
                </div>
                <div class="sortText">
                  Ahsan, R.N., and A. Chatterjee, 2017.
                  <a
                    target="blank"
                    href="https://www.sciencedirect.com/science/article/pii/S0022199617301149?casa_token=jSfBeGr52hYAAAAA:U0wQ75GM9qqeD2cuq0-gg45qRzPAUeqzgTFNeqly1TIABMmXInTcRhYlQGSjwZZfMx5RF3wqHhk"
                    >Trade liberalization and intergenerational occupational
                    mobility in urban India.</a
                  >
                  Journal of International Economics 109: 138-152.
                </div>
                <div class="sortText">
                  Gollin, D.; L D. Lagakos and M.E. Waugh, 2013.
                  <a target="blank" href="https://doi.org/10.1093/qje/qjt056"
                    >The agricultural productivity gap</a
                  >, Quarterly Journal of Economics 129(2): 939-993.
                </div>
                <div class="sortText">
                  Miguel, E., and J. Hamory, 2009.
                  <a
                    target="blank"
                    href="https://mpra.ub.uni-muenchen.de/19228/"
                    >Individual ability and selection into migration in
                    Kenya.</a
                  >
                  MPRA Paper No. 19228.
                </div>
                <div class="sortText">
                  Bryan, G.; S. Chowdhury and A. Mobarak, 2013.
                  <a
                    target="blank"
                    href="https://www.tcd.ie/Economics/assets/pdf/Gharad%20Bryan%20Presentation.pdf"
                    >Escaping famine through seasonal migration.</a
                  >
                  Manuscript.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.3.1"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Berik, G. and Rodgers, Y.V.D.M., 2010.
                  <a target="blank" href="https://doi.org/10.1002/jid.1534"
                    >Options for enforcing labour standards: Lessons from
                    Bangladesh and Cambodia.</a
                  >
                  Journal of International Development: The Journal of the
                  Development Studies Association, 22(1), pp.56-85.
                </div>
                <div class="sortText">
                  Bonnal, M., 2010.
                  <a
                    target="blank"
                    href="https://doi.org/10.1007/s12122-009-9075-4"
                    >Export performance, labor standards and institutions:
                    evidence from a dynamic panel data model.</a
                  >
                  Journal of Labor Research, 31(1), pp.53-66.
                </div>
                <div class="sortText">
                  Edmonds, E.V. and Pavcnik, N., 2005.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.jinteco.2004.04.001"
                    >The effect of trade liberalization on child labor.</a
                  >
                  Journal of international Economics, 65(2), pp.401-419.
                </div>
                <div class="sortText">
                  Edmonds, E.V., Pavcnik, N. and Topalova, P., 2010.
                  <a
                    target="blank"
                    href="https://www.nber.org/system/files/working_papers/w12884/w12884.pdf"
                    >Trade adjustment and human capital investments: Evidence
                    from Indian tariff reform.</a
                  >
                  American Economic Journal: Applied Economics, 2(4), pp.42-75.
                </div>
                <div class="sortText">
                  Flanagan, R.J., 2003.
                  <a
                    target="blank"
                    href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.499.3937&rep=rep1&type=pdf"
                    >Labor standards and international competitive advantage.</a
                  >
                  International Labor Standards: Globalization, Trade, and
                  Public Policy, 47.
                </div>
                <div class="sortText">
                  Kucera, D. and Sarna, R., 2006.
                  <a
                    target="blank"
                    href="https://doi.org/10.1111/j.1467-9396.2006.00627.x"
                    >Trade union rights, democracy, and exports: A gravity model
                    approach.</a
                  >
                  Review of International Economics, 14(5), pp.859-882.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.3.2"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Shu, P., and C. Steinwender, 2019.
                  <a
                    target="blank"
                    href="https://ideas.repec.org/a/ucp/ipolec/doi10.1086-699932.html"
                    >The impact of trade liberalization on productivity and
                    innovation.</a
                  >
                  In J. Lerner and S. Stern, eds: Innovation Policy and the
                  Economy, Vol.19. NBER.
                </div>
                <div class="sortText">
                  Collins, S.M., and B. P. Bosworth, 1996.
                  <a
                    target="blank"
                    href="https://www.brookings.edu/wp-content/uploads/1997/06/1996b_bpea_collins_bosworth_rodrik.pdf"
                    >Economic growth in East Asia: accumulation versus
                    assimilation.</a
                  >
                  Brookings Papers in Economic Activity 2:1996.
                </div>
                <div class="sortText">
                  Tinakorn, P., and C. Sussungkarn, 1998. Total factor
                  productivity growth in Thailand: 1980- 95, Macroeconomic
                  Policy Program, Thailand Development Research Institute
                  (TDRI).
                </div>
                <div class="sortText">
                  Warr, P., 2009.
                  <a
                    target="blank"
                    href="https://crawford.anu.edu.au/acde/publications/publish/papers/wp2009/wp_econ_2009_10.pdf"
                    >Aggregate and sectoral productivity growth in Thailand and
                    Indonesia.</a
                  >
                  Australian National University: Working papers in Trade and
                  Development.
                </div>
                <div class="sortText">
                  Diao, X.; J. Rattsø, and H.E. Stokke, 2005.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.jdeveco.2003.12.018"
                    >International spillovers, productivity growth and openness
                    in Thailand: an intertemporal general equilibrium
                    analysis.</a
                  >
                  Journal of Development Economics 76(2).
                </div>
                <div class="sortText">
                  Bøler, E.A.; A. Moxnes, and K.H. Ulltveit-Moe, 2015.
                  <a
                    target="blank"
                    href="http://dx.doi.org/10.1257/aer.20121530"
                    >R&D, International Sourcing, and the Joint Impact on Firm
                    Performance.</a
                  >
                  American Economic Review 105(12): 3704-3739.
                </div>
                <div class="sortText">
                  R.E. Baldwin, 2011.
                  <a target="blank" href="http://www.nber.org/papers/w17716"
                    >Trade and industrialisation after globalisation’s 2nd
                    unbundling: how building and joining a supply chain are
                    different and why it matters.</a
                  >
                  NBER Working Papers No. 17716.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.3.3"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Arimura, T.H., Darnall, N. and Katayama, H., 2011.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.jeem.2010.11.003"
                    >Is ISO 14001 a gateway to more advanced voluntary action?
                    The case of green supply chain management.</a
                  >
                  Journal of environmental economics and management, 61(2),
                  pp.170-182.
                </div>
                <div class="sortText">
                  De Backer, K. and Miroudot, S., 2013.
                  <a
                    target="blank"
                    href="https://www.oecd-ilibrary.org/trade/mapping-global-value-chains_5k3v1trgnbr4-en"
                    >Mapping Global Value Chains. OECD Trade Policy Papers</a
                  >, No. 159, OECD Publishing, Paris.
                </div>
                <div class="sortText">
                  Galarraga, I. and Markandya, A., 2004.
                  <a
                    target="blank"
                    href="https://ageconsearch.umn.edu/record/28732"
                    >Economic techniques to estimate the demand for sustainable
                    products: a case study for fair trade and organic coffee in
                    the United Kingdom.</a
                  >
                  Economía Agraria y Recursos Naturales-Agricultural and
                  Resource Economics, 4(7), pp.109-134.
                </div>
                <div class="sortText">
                  Hiscox, M.J. and Smyth, N.F., 2006.
                  <a
                    target="blank"
                    href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.408.7706&rep=rep1&type=pdf"
                    >Is there consumer demand for improved labor standards?
                    Evidence from field experiments in social labeling.</a
                  >
                  Department of Government, Harvard University.
                </div>
                <div class="sortText">
                  Honda, K. and Otsuki, T., 2017.
                  <a
                    target="blank"
                    href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_10"
                    >Effects of Chemical Safety Standards on Export Performance
                    in Malaysia and Vietnam.</a
                  >
                  In Regulations and International Trade (pp. 223-250). Palgrave
                  Macmillan, Cham.
                </div>
                <div class="sortText">
                  Iguchi, H. and Arimura, T.H., 2017.
                  <a
                    target="blank"
                    href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_11"
                    >Diffusion of Quality and Environmental Management Systems
                    Through Global Value Chains: Cases of Malaysia and
                    Vietnam.</a
                  >
                  In Regulations and International Trade (pp. 251-274). Palgrave
                  Macmillan, Cham.
                </div>
                <div class="sortText">
                  Kaltenegger, O., Löschel, A. and Pothen, F., 2017.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.eneco.2018.01.008"
                    >The effect of globalisation on energy footprints:
                    disentangling the links of global value chains.</a
                  >
                  Energy Economics, 68, pp.148-168.
                </div>
                <div class="sortText">
                  Michida, E. and Nabeshima, K., 2017.
                  <a
                    target="blank"
                    href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_5"
                    >Diffusion of Private Food Standards from the European Union
                    to Asia.</a
                  >
                  In Regulations and International Trade (pp. 107-129). Palgrave
                  Macmillan, Cham.
                </div>
                <div class="sortText">
                  Ramungul, N., 2017.
                  <a
                    target="blank"
                    href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_12"
                    >Challenges of EU Chemical Regulations: The Case of Thai
                    Firms.</a
                  >
                  In Regulations and International Trade (pp. 275-316). Palgrave
                  Macmillan, Cham.
                </div>
                <div class="sortText">
                  Roheim, C.A., Asche, F. and Santos, J.I., 2011.
                  <a
                    target="blank"
                    href="https://doi.org/10.1111/j.1477-9552.2011.00299.x"
                    >The elusive price premium for ecolabelled products:
                    evidence from seafood in the UK market.</a
                  >
                  Journal of Agricultural Economics, 62(3), pp.655-668.
                </div>
                <div class="sortText">
                  Ueki, Y., Michida, E. and Nabeshima, K., 2017.
                  <a
                    target="blank"
                    href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_8"
                    >Transmission channels of requirements for chemicals in
                    products to firms in Vietnam.</a
                  >
                  In Regulations and International Trade (pp. 179-199). Palgrave
                  Macmillan, Cham.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item
            group="somegroup"
            expand-separator
            label="Module B.4.1"
          >
            <q-card>
              <q-card-section>
                <div class="">
                  Bown, C.P. and Keynes, S., 2020.
                  <a
                    target="blank"
                    href="https://www.piie.com/system/files/documents/wp20-4.pdf"
                    >Why Trump shot the Sheriffs: The end of WTO dispute
                    settlement 1.0.</a
                  >
                  Peterson Institute for International Economics Working Paper,
                  (20-4).
                </div>
                <div class="sortText">
                  Cali, M. and Te Velde, D.W., 2011.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.worlddev.2010.09.018"
                    >Does aid for trade really improve trade performance?.</a
                  >
                  World development, 39(5), pp.725-740.
                </div>
                <div class="sortText">
                  Dollar, D., Hallward-Driemeier, M. and Mengistae, T., 2006.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/j.worlddev.2006.05.001"
                    >Investment climate and international integration.</a
                  >
                  World development, 34(9), pp.1498-1516.
                </div>
                <div class="sortText">
                  Dollar, D. and Kraay, A., 2003.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/S0304-3932(02)00206-4"
                    >Institutions, trade, and growth.</a
                  >
                  Journal of monetary economics, 50(1), pp.133-162.
                </div>
                <div class="sortText">
                  Eichengreen, B. and Leblang, D., 2008.
                  <a
                    target="blank"
                    href="https://doi.org/10.1111/j.1468-0343.2007.00329.x"
                    >Democracy and globalization.</a
                  >
                  Economics & Politics, 20(3), pp.289-334.
                </div>
                <div class="sortText">
                  Hofmann, C., Osnago, A. and Ruta, M., 2019.
                  <a
                    target="blank"
                    href="https://doi.org/10.1017/S1474745618000071"
                    >The content of preferential trade agreements.</a
                  >
                  World Trade Review, 18(3), pp.365-398.
                </div>
                <div class="sortText">
                  Jha, S., 2013.
                  <a target="blank" href="https://www.jstor.org/stable/43654035"
                    >Trade, institutions, and ethnic tolerance: Evidence from
                    South Asia.</a
                  >
                  American political Science review, pp.806-832.
                </div>
                <div class="sortText">
                  Laget, E., Osnago, A., Rocha, N. and Ruta, M., 2019.
                  <a
                    target="blank"
                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3489075"
                    >Deep Trade Agreements and Global Value Chains.</a
                  >
                  Robert Schuman Centre for Advanced Studies Research Paper No.
                  RSCAS, 86.
                </div>
                <div class="sortText">
                  Mattoo, A. and Staiger, R.W., 2019.
                  <a
                    target="blank"
                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3376278"
                    >Trade Wars: What do they mean? Why are they happening now?
                    What are the costs?.</a
                  >
                  Economic Policy.
                </div>
                <div class="sortText">
                  Staiger, R.W., 1995.
                  <a
                    target="blank"
                    href="https://doi.org/10.1016/S1573-4404(05)80009-7"
                    >International rules and institutions for trade policy.</a
                  >
                  Handbook of international economics, 3, pp.1495-1551.
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
      <!-- endModuleBox  -->

      <!-- endMobile  -->
      <div class="endMobile q-mt-sm row items-center">
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
    <div class="mobile-only gt-xs">
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
          <div class="font24 q-pt-md">References and reading list</div>
          <div class="font18 fontU q-pt-sm" @click="goBack()">
            back to course content page
          </div>
        </div>
      </div>
      <!-- reference  -->
      <div class="q-pa-lg font18">
        <div class="row">
          <img
            src="../../public/image/references.svg"
            alt=""
            style="width: 24px"
          />
          <div class="font24 fontB q-pl-md">References and reading list</div>
        </div>
        <div class="q-pt-md">
          Contains references cited in the modules as well as some suggestions
          for further reading.
        </div>
        <div class="fontB q-pt-lg">I. “Big picture” readings</div>
        <div>
          (less technical, or at least more accessible by general readers)
        </div>
        <div class="sortText">
          Baldwin, R.E., 2016. The Great Convergence: Information Technology and
          the New Globalization. Cambridge, MA: Belknap Press. Especially Part
          III: Understanding globalization’s changes.
        </div>
        <div class="sortText">
          Helble, M., and B. Shepherd, eds. 2017.
          <a
            target="blank"
            href="https://www.adb.org/sites/default/files/publication/327451/adbi-win-win-how-international-trade-can-help-meet-sdgs.pdf"
            >Win-Win: How International Trade Can Help Meet the Sustainable
            Development Goals.</a
          >
          Tokyo: Asian Development Bank Institute.
        </div>
        <div class="fontB q-pt-md">
          II. Readings and references specific to modules
        </div>
        <div class="">
          (more technical papers focused on formal arguments and statistical
          evidence)
        </div>
        <!-- module Box  -->
        <div class="font18 q-mt-md">
          <q-list bordered>
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module A.1"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Estevadeordal, A., and A.M. Taylor (2013).
                    <a
                      target="blank"
                      href="http://www.aae.wisc.edu/coxhead/courses/readings/Estevadeordal%20and%20Taylor%20Washington%20Consensus%20RES%202013.pdf"
                      >Is the Washington Consensus dead? Growth, openness, and
                      the great liberalization, 1970s-2000s.</a
                    >
                    Rev. Econ. Stat. 95(5): 1669-1690.
                  </div>
                  <div class="sortText">
                    United Nations, 2015.<a
                      target="blank"
                      href="https://www.un.org/ga/search/view_doc.asp?symbol=A/RES/70/1&Lang=E"
                    >
                      Transforming our World: the 2030 Agenda for Sustainable
                      Development.</a
                    >
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module A.2"
            >
              <q-card>
                <q-card-section>
                  <div>
                    Frank, R.H., and B. Bernanke, 2010.
                    <a
                      target="blank"
                      href="https://b-ok.asia/book/5482837/3e1ecb"
                      >Principles of Economics, Brief Edition.</a
                    >
                    McGraw-Hill Higher Education.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module A.3"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    FAO, 2020.
                    <a
                      target="blank"
                      href="http://www.fao.org/state-of-forests/en"
                      >State of the World’s Forests 2020.</a
                    >
                    (Webpage with downloadable report)
                  </div>

                  <div class="sortText">
                    Indonesia-Investments, 2017.
                    <a
                      target="blank"
                      href="https://www.indonesia-investments.com/business/commodities/palm-oil/item166"
                      >Palm Oil</a
                    >
                    (webpage).
                  </div>

                  <div class="sortText">
                    IPCC, 2014.
                    <a target="blank" href="https://www.ipcc.ch/report/ar5/syr/"
                      >Climate Change 2014: Synthesis Report. Contribution of
                      Working Groups I, II and III to the Fifth Assessment
                      Report of the Intergovernmental Panel on Climate Change</a
                    >
                    [Core Writing Team, R.K. Pachauri and L.A. Meyer (eds.)].
                    IPCC, Geneva, Switzerland.
                  </div>

                  <div class="sortText">
                    Roberts, D., 2017.
                    <a
                      target="blank"
                      href="https://www.vox.com/energy-and-environment/2017/5/15/15634538/china-coal-cleaner"
                      >By 2020, every Chinese coal plant will be more efficient
                      than every US coal plant.</a
                    >
                    Vox (webpage).
                  </div>

                  <div class="sortText">
                    World Trade Organization (WTO).
                    <a
                      target="blank"
                      href="https://www.wto.org/english/tratop_e/envir_e/climate_impact_e.htm"
                      >The impact of trade opening on climate change</a
                    >
                    (webpage).
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module A.4"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Harrison, G.W.; T.F. Rutherford, D.G. Tarr, and A. Gurgel,
                    2004.
                    <a
                      target="blank"
                      href="https://elibrary.worldbank.org/doi/abs/10.1093/wber/lhh043"
                      >Trade policy and poverty reduction in Brazil.</a
                    >
                    World Bank Economic Review, 18(3): 289-317.
                  </div>

                  <div class="sortText">
                    Winters, A., 2002.
                    <a
                      target="blank"
                      href="https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-9701.00495"
                      >Trade liberalization and poverty: what are the links?</a
                    >
                    The World Economy 25(9): 1339-1367.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.1.1"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Dreze, J., and A.K. Sen, 1991.
                    <a
                      target="blank"
                      href="https://global.oup.com/academic/product/hunger-and-public-action-9780198283652?cc=fi&lang=en&"
                      >Hunger and Public Action.</a
                    >
                    Oxford: Clarendon Press.
                  </div>
                  <div class="sortText">
                    Hale, G., and M. Xu, 2016:
                    <a
                      target="blank"
                      href="https://www.frbsf.org/economic-research/files/wp2016-25.pdf"
                      >FDI effects on the labor markets of host countries.</a
                    >
                    Federal Reserve Bank of San Francisco Working Paper 2016-25.
                  </div>
                  <div class="sortText">
                    F. Sjoholm and R. Lipsey, 2006:
                    <a target="blank" href="https://doi.org/10.1086/505723"
                      >Foreign firms and Indonesian manufacturing wages: an
                      analysis with panel data.</a
                    >
                    Economic Development and Cultural Change 55(1).
                  </div>
                  <div class="sortText">
                    S. Karlsson et al 2008.
                    <a
                      target="blank"
                      href="https://doi.org/10.1111/j.1467-9701.2009.01162.x"
                      >Foreign firms and Chinese employment.</a
                    >
                    World Economy 32(1).
                  </div>
                  <div class="sortText">
                    A. Hijzen, P.S. Martins, T. Schank, and R. Upward, 2013:
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.euroecorev.2013.02.001"
                      >Foreign-owned firms around the world: A comparative
                      analysis of wages and employment at the micro-level.</a
                    >
                    European Economic Review 60: 170-188.
                  </div>
                  <div class="sortText">
                    Topalova, P., 2010.
                    <a
                      target="blank"
                      href="https://www.jstor.org/stable/25760231"
                      >Factor immobility and regional impacts of trade
                      liberalization: evidence on poverty from India,</a
                    >” American Economic Journal: Applied Economics. 2(4): 1–41.
                  </div>
                  <div class="sortText">
                    McCaig, B., 2011.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.jinteco.2011.05.007"
                      >Exporting out of poverty: provincial poverty in Vietnam
                      and U.S. market access.</a
                    >
                    Journal of International Economics 85(1): 102-113.
                  </div>
                  <div class="sortText">
                    Coxhead, I.; N.V. Cuong, and V.H. Linh, 2015.
                    <a
                      target="blank"
                      href="https://openknowledge.worldbank.org/handle/10986/23597"
                      >Migration in Vietnam: new evidence from recent
                      surveys.</a
                    >
                    World Bank Vietnam Country Office, Vietnam Development
                    Economics Discussion Paper No. 2.
                  </div>

                  <div class="sortText">
                    World Bank, 2018:
                    <a
                      target="blank"
                      href="http://documents1.worldbank.org/curated/en/206981522843253122/pdf/124916-WP-PULIC-P161323-VietnamPovertyUpdateReportENG.pdf"
                      >Climbing the Ladder: Poverty reduction and shared
                      prosperity in Vietnam.</a
                    >
                    Washington, DC: World Bank.
                  </div>
                  <div class="sortText">
                    Coxhead, I. and R. Shrestha, 2017.
                    <a
                      target="blank"
                      href="https://uwmadison.box.com/s/nse13nwil2hcbtsb7n167la2lm4ujwpv"
                      >Globalization and school-work choices in an emerging
                      economy</a
                    >
                    Vietnam. Asian Economic Papers 16(2): 1-18.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.1.2"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    FAO, 2008:
                    <a
                      target="blank"
                      href="http://www.fao.org/3/al936e/al936e00.pdf"
                      >An Introduction to the Basic Concepts of Food
                      Security.</a
                    >
                    Online resource.
                  </div>
                  <div class="sortText">
                    Ivanic, M., and W. Martin, 2014.
                    <a
                      target="blank"
                      href="https://openknowledge.worldbank.org/bitstream/handle/10986/20350/WPS7011.pdf;sequence=1"
                      >Short- and long-run impacts of food price increases on
                      poverty.</a
                    >
                    World Bank Staff Working Papers No. WPS7011.
                  </div>
                  <div class="sortText">
                    Martin, W., 2017. Agricultural trade and hunger. In M.
                    Helble and B. Shepherd,
                    <a
                      target="blank"
                      href="https://www.adb.org/sites/default/files/publication/327451/adbi-win-win-how-international-trade-can-help-meet-sdgs.pdf"
                      >Win-win: How International Trade Can Help Meet the
                      Sustainable Development Goals</a
                    >
                    (Tokyo: ADBI).
                  </div>
                  <div class="sortText">
                    Warr, P., 2011.
                    <a
                      target="blank"
                      href="https://dev.crawford.anu.edu.au/acde/publications/publish/papers/wp2011/wp_econ_2011_04.pdf"
                      >Food security vs. food self‐sufficiency: the Indonesian
                      case</a
                    >,. The Indonesian Quarterly 39: 56–71.
                  </div>
                  <div class="sortText">
                    Fane, G., and P.G. Warr, 2008.
                    <a
                      target="blank"
                      href="https://ideas.repec.org/a/taf/bindes/v44y2008i1p133-150.html"
                      >Agricultural protection in Indonesia.</a
                    >
                    Bulletin of Indonesian Economic Studies 44(1): 133-150.
                  </div>
                  <div class="sortText">
                    Warr, P.G., and A.A. Yusuf, 2013.
                    <a
                      target="blank"
                      href="https://doi.org/10.1111/1467-8489.12015"
                      >World food prices and poverty in Indonesia.</a
                    >
                    Aust. J. Agr. Res. Econ. 58: 1-21.
                  </div>
                  <div class="sortText">
                    Coxhead, I. and G.E. Shively, 1998. Some economic and
                    environmental implications of technical progress in
                    Philippine corn agriculture: an economy-wide perspective.
                    Journal of Agricultural Development and Economics XXVI
                    (1/2), July: 60-90.
                  </div>
                  <div class="sortText">
                    Coxhead, I., 2000.
                    <a
                      target="blank"
                      href="http://www.sciencedirect.com/science/article/pii/S0305750X99001175"
                      >The consequences of a food security strategy for economic
                      welfare, income distribution and agricultural land
                      degradation: the Philippine case.</a
                    >
                    World Development 28(1): 111-128.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.1.3"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Frankel, J. A., & Romer, D. H., 1999.
                    <a
                      target="blank"
                      href="https://eml.berkeley.edu/~dromer/papers/AER_June99.pdf"
                      >Does trade cause growth?</a
                    >
                    American Economic Review 89(3): 379-399.
                  </div>
                  <div class="sortText">
                    Alcalá, F., & Ciccone, A., 2004.
                    <a
                      target="blank"
                      href="https://www.jstor.org/stable/pdf/25098695.pdf"
                      >Trade and productivity.</a
                    >
                    Quarterly Journal of Economics 119(2): 613-646.
                  </div>
                  <div class="sortText">
                    Pavcnik, N., 2002.
                    <a
                      target="blank"
                      href="https://www.jstor.org/stable/pdf/2695960.pdf"
                      >Trade liberalization, exit, and productivity
                      improvements: Evidence from Chilean plants.</a
                    >
                    Review of Economic Studies 69(1): 245-276.
                  </div>
                  <div class="sortText">
                    Amiti, M., and J. Konings, 2007. Trade liberalization,
                    intermediate inputs, and productivity: evidence from
                    Indonesia. American Economic Review 97(5): 1611-1638.
                  </div>
                  <div class="sortText">
                    Bresnahan, L.; I. Coxhead, J. Foltz and T. Mogues, 2016.
                    <a
                      target="blank"
                      href="http://www.aae.wisc.edu/pubs/sps/pdf/stpap583.pdf"
                      >Does freer trade really lead to productivity growth?
                      Evidence from sub-Saharan Africa.</a
                    >
                    World Development 86(1): 18-29.
                  </div>
                  <div class="sortText">
                    Ahmed, A..,n.d.
                    <a
                      target="blank"
                      href="https://www.unescap.org/sites/default/files/7.1The%20economic%20and%20social%20impact%20of%20liberalisation%20in%20Bangladesh%20on%20garment%20and%20leather%20sectors.pdf"
                      >The economic and social impact of liberalisation through
                      preferential trade agreements – the case of the ready-made
                      garments and the leather & leathergoods sectors. A country
                      study on Bangladesh.</a
                    >
                    Presentation: UN ESCAP.
                  </div>
                  <div class="sortText">
                    Heath, R. and Mobarak, A.M., 2015.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.jdeveco.2015.01.006"
                      >Manufacturing growth and the lives of Bangladeshi
                      women.</a
                    >
                    Journal of Development Economics 115: 1-15.
                  </div>
                  <div class="sortText">
                    Robertson, R.; D. Kokas, D. Cardozo, and G. Lopez-Acevedo,
                    2020.
                    <a
                      target="blank"
                      href="https://openknowledge.worldbank.org/bitstream/handle/10986/33425/Short-and-Long-Run-Labor-Market-Effects-of-Developing-Country-Exports-Evidence-from-Bangladesh.pdf?sequence=1&isAllowed=y"
                      >Short and long-run labor market effects of
                      developing-country exports: evidence from Bangladesh.</a
                    >
                    World Bank Policy Research Working Papers No. 9176.
                  </div>
                  <div class="sortText">
                    B. Hoekman, 2016:
                    <a
                      target="blank"
                      href="https://www.oecd-ilibrary.org/docserver/5jm0m93sf036-en.pdf?expires=1609116040&id=id&accname=guest&checksum=D72CFA96AC4B550B527B2BA0A5BCBAA8"
                      >Trade and the SDGs: making ‘means of implementation’ a
                      reality.</a
                    >
                    OECD.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.2.1"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    World Resources Institute:
                    <a
                      target="blank"
                      href="https://www.wri.org/blog/2020/12/interactive-chart-top-emitters"
                      >This Interactive Chart Shows Changes in the World's Top
                      10 Emitters.</a
                    >
                    Webpage.
                  </div>
                  <div class="sortText">
                    Schenker 2013: Exchanging goods and damages: the role of
                    trade on the distribution of climate change costs. Envir.
                    Res. Econ. 54: 261-282.
                  </div>
                  <div class="sortText">
                    Tol 2009: The economic impacts of climate change, J. Econ.
                    Persp. 23(2): 29-51.
                  </div>
                  <div class="sortText">
                    N. Traore and J. Foltz, 2017.
                    <a
                      target="blank"
                      href="https://poder.cepr.org/sites/default/files/JMP_Traore.pdf"
                      >Temperatures, Productivity, and Firm Competitiveness in
                      Developing Countries: Evidence from Africa.</a
                    >
                    Working paper.
                  </div>
                  <div class="sortText">
                    Yusuf, A.A., and B. Reosudarmo, 2015. On the distributional
                    impact of a carbon tax in developing countries: the case of
                    Indonesia. Envir. Econ. Pol. Stud. 17, 2015.
                  </div>
                  <div class="sortText">
                    UN ESCAP:
                    <a
                      target="blank"
                      href="https://www.unescap.org/sites/default/files/Ch4%20-%20Rethinking%20trade%20and%20investment%20policies%20for%20sustainable%20development_16Nov17.pdf"
                      >Rethinking trade and investment policies for sustainable
                      development.</a
                    >
                    Chapter 4 in ESCAP: Asia-Pacific Trade and Investment Report
                    2017.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.2.2"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Robertson, R.; D. Kokas, D. Cardozo, and G. Lopez-Acevedo,
                    2020.
                    <a
                      target="blank"
                      href="https://openknowledge.worldbank.org/bitstream/handle/10986/33425/Short-and-Long-Run-Labor-Market-Effects-of-Developing-Country-Exports-Evidence-from-Bangladesh.pdf?sequence=1&isAllowed=y"
                      >Short and long-run labor market effects of
                      developing-country exports: evidence from Bangladesh.</a
                    >
                    World Bank Policy Research Working Papers No. 9176.
                  </div>
                  <div class="sortText">
                    Atkin, D., 2016.
                    <a
                      target="blank"
                      href="https://www.aeaweb.org/articles?id=10.1257/aer.20120901"
                      >Endogenous skill acquisition and export manufacturing in
                      Mexico.</a
                    >
                    American Economic Review 106(8): 2046-85.
                  </div>
                  <div class="sortText">
                    Coxhead, I. and R. Shrestha, 2017.
                    <a
                      target="blank"
                      href="https://uwmadison.box.com/s/nse13nwil2hcbtsb7n167la2lm4ujwpv"
                      >Globalization and school-work choices in an emerging
                      economy: Vietnam.</a
                    >
                    Asian Economic Papers 16(2): 1-18.
                  </div>
                  <div class="sortText">
                    Phan, D. and I. Coxhead, 2013.
                    <a
                      target="blank"
                      href="http://dx.doi.org/10.1016/j.jce.2013.04.001"
                      >Long-run costs of piecemeal reform: wage inequality and
                      returns to education in Vietnam.</a
                    >
                    Journal of Comparative Economics 41(4): 1106-1122.
                  </div>
                  <div class="sortText">
                    Fox, L.; F. Torche, and J. Waldfogel, 2016:
                    <a
                      target="blank"
                      href="https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780199914050.001.0001/oxfordhb-9780199914050-e-24"
                      >Intergenerational Mobility.</a
                    >
                    in D. Brady and L.M. Burton, eds. Oxford Handbook of the
                    Social Science of Poverty. Online resource.
                  </div>
                  <div class="sortText">
                    M.N. Asadullah, 2006.
                    <a
                      target="blank"
                      href="https://www.researchgate.net/profile/Mohammad_Asadullah2/publication/228675658_Intergenerational_economic_mobility_in_rural_Bangladesh/links/0deec528c371e2fb1c000000/Intergenerational-economic-mobility-in-rural-Bangladesh.pdf"
                      >Intergenerational economic mobility in rural
                      Bangladesh.</a
                    >
                    Paper prepared for presentation at the Royal Economic
                    Society (RES) Annual Conference, University of Nottingham,
                    2006.
                  </div>
                  <div class="sortText">
                    C. Dunn, 2003:
                    <a
                      target="blank"
                      href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.548.7920&rep=rep1&type=pdf"
                      >Intergenerational earnings mobility in Brazil.</a
                    >
                    Manuscript, Univ. of Michigan.
                  </div>
                  <div class="sortText">
                    Ahsan, R.N., and A. Chatterjee, 2017.
                    <a
                      target="blank"
                      href="https://www.sciencedirect.com/science/article/pii/S0022199617301149?casa_token=jSfBeGr52hYAAAAA:U0wQ75GM9qqeD2cuq0-gg45qRzPAUeqzgTFNeqly1TIABMmXInTcRhYlQGSjwZZfMx5RF3wqHhk"
                      >Trade liberalization and intergenerational occupational
                      mobility in urban India.</a
                    >
                    Journal of International Economics 109: 138-152.
                  </div>
                  <div class="sortText">
                    Gollin, D.; L D. Lagakos and M.E. Waugh, 2013.
                    <a target="blank" href="https://doi.org/10.1093/qje/qjt056"
                      >The agricultural productivity gap</a
                    >, Quarterly Journal of Economics 129(2): 939-993.
                  </div>
                  <div class="sortText">
                    Miguel, E., and J. Hamory, 2009.
                    <a
                      target="blank"
                      href="https://mpra.ub.uni-muenchen.de/19228/"
                      >Individual ability and selection into migration in
                      Kenya.</a
                    >
                    MPRA Paper No. 19228.
                  </div>
                  <div class="sortText">
                    Bryan, G.; S. Chowdhury and A. Mobarak, 2013.
                    <a
                      target="blank"
                      href="https://www.tcd.ie/Economics/assets/pdf/Gharad%20Bryan%20Presentation.pdf"
                      >Escaping famine through seasonal migration.</a
                    >
                    Manuscript.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.3.1"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Berik, G. and Rodgers, Y.V.D.M., 2010.
                    <a target="blank" href="https://doi.org/10.1002/jid.1534"
                      >Options for enforcing labour standards: Lessons from
                      Bangladesh and Cambodia.</a
                    >
                    Journal of International Development: The Journal of the
                    Development Studies Association, 22(1), pp.56-85.
                  </div>
                  <div class="sortText">
                    Bonnal, M., 2010.
                    <a
                      target="blank"
                      href="https://doi.org/10.1007/s12122-009-9075-4"
                      >Export performance, labor standards and institutions:
                      evidence from a dynamic panel data model.</a
                    >
                    Journal of Labor Research, 31(1), pp.53-66.
                  </div>
                  <div class="sortText">
                    Edmonds, E.V. and Pavcnik, N., 2005.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.jinteco.2004.04.001"
                      >The effect of trade liberalization on child labor.</a
                    >
                    Journal of international Economics, 65(2), pp.401-419.
                  </div>
                  <div class="sortText">
                    Edmonds, E.V., Pavcnik, N. and Topalova, P., 2010.
                    <a
                      target="blank"
                      href="https://www.nber.org/system/files/working_papers/w12884/w12884.pdf"
                      >Trade adjustment and human capital investments: Evidence
                      from Indian tariff reform.</a
                    >
                    American Economic Journal: Applied Economics, 2(4),
                    pp.42-75.
                  </div>
                  <div class="sortText">
                    Flanagan, R.J., 2003.
                    <a
                      target="blank"
                      href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.499.3937&rep=rep1&type=pdf"
                      >Labor standards and international competitive
                      advantage.</a
                    >
                    International Labor Standards: Globalization, Trade, and
                    Public Policy, 47.
                  </div>
                  <div class="sortText">
                    Kucera, D. and Sarna, R., 2006.
                    <a
                      target="blank"
                      href="https://doi.org/10.1111/j.1467-9396.2006.00627.x"
                      >Trade union rights, democracy, and exports: A gravity
                      model approach.</a
                    >
                    Review of International Economics, 14(5), pp.859-882.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.3.2"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Shu, P., and C. Steinwender, 2019.
                    <a
                      target="blank"
                      href="https://ideas.repec.org/a/ucp/ipolec/doi10.1086-699932.html"
                      >The impact of trade liberalization on productivity and
                      innovation.</a
                    >
                    In J. Lerner and S. Stern, eds: Innovation Policy and the
                    Economy, Vol.19. NBER.
                  </div>
                  <div class="sortText">
                    Collins, S.M., and B. P. Bosworth, 1996.
                    <a
                      target="blank"
                      href="https://www.brookings.edu/wp-content/uploads/1997/06/1996b_bpea_collins_bosworth_rodrik.pdf"
                      >Economic growth in East Asia: accumulation versus
                      assimilation.</a
                    >
                    Brookings Papers in Economic Activity 2:1996.
                  </div>
                  <div class="sortText">
                    Tinakorn, P., and C. Sussungkarn, 1998. Total factor
                    productivity growth in Thailand: 1980- 95, Macroeconomic
                    Policy Program, Thailand Development Research Institute
                    (TDRI).
                  </div>
                  <div class="sortText">
                    Warr, P., 2009.
                    <a
                      target="blank"
                      href="https://crawford.anu.edu.au/acde/publications/publish/papers/wp2009/wp_econ_2009_10.pdf"
                      >Aggregate and sectoral productivity growth in Thailand
                      and Indonesia.</a
                    >
                    Australian National University: Working papers in Trade and
                    Development.
                  </div>
                  <div class="sortText">
                    Diao, X.; J. Rattsø, and H.E. Stokke, 2005.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.jdeveco.2003.12.018"
                      >International spillovers, productivity growth and
                      openness in Thailand: an intertemporal general equilibrium
                      analysis.</a
                    >
                    Journal of Development Economics 76(2).
                  </div>
                  <div class="sortText">
                    Bøler, E.A.; A. Moxnes, and K.H. Ulltveit-Moe, 2015.
                    <a
                      target="blank"
                      href="http://dx.doi.org/10.1257/aer.20121530"
                      >R&D, International Sourcing, and the Joint Impact on Firm
                      Performance.</a
                    >
                    American Economic Review 105(12): 3704-3739.
                  </div>
                  <div class="sortText">
                    R.E. Baldwin, 2011.
                    <a target="blank" href="http://www.nber.org/papers/w17716"
                      >Trade and industrialisation after globalisation’s 2nd
                      unbundling: how building and joining a supply chain are
                      different and why it matters.</a
                    >
                    NBER Working Papers No. 17716.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.3.3"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Arimura, T.H., Darnall, N. and Katayama, H., 2011.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.jeem.2010.11.003"
                      >Is ISO 14001 a gateway to more advanced voluntary action?
                      The case of green supply chain management.</a
                    >
                    Journal of environmental economics and management, 61(2),
                    pp.170-182.
                  </div>
                  <div class="sortText">
                    De Backer, K. and Miroudot, S., 2013.
                    <a
                      target="blank"
                      href="https://www.oecd-ilibrary.org/trade/mapping-global-value-chains_5k3v1trgnbr4-en"
                      >Mapping Global Value Chains. OECD Trade Policy Papers</a
                    >, No. 159, OECD Publishing, Paris.
                  </div>
                  <div class="sortText">
                    Galarraga, I. and Markandya, A., 2004.
                    <a
                      target="blank"
                      href="https://ageconsearch.umn.edu/record/28732"
                      >Economic techniques to estimate the demand for
                      sustainable products: a case study for fair trade and
                      organic coffee in the United Kingdom.</a
                    >
                    Economía Agraria y Recursos Naturales-Agricultural and
                    Resource Economics, 4(7), pp.109-134.
                  </div>
                  <div class="sortText">
                    Hiscox, M.J. and Smyth, N.F., 2006.
                    <a
                      target="blank"
                      href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.408.7706&rep=rep1&type=pdf"
                      >Is there consumer demand for improved labor standards?
                      Evidence from field experiments in social labeling.</a
                    >
                    Department of Government, Harvard University.
                  </div>
                  <div class="sortText">
                    Honda, K. and Otsuki, T., 2017.
                    <a
                      target="blank"
                      href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_10"
                      >Effects of Chemical Safety Standards on Export
                      Performance in Malaysia and Vietnam.</a
                    >
                    In Regulations and International Trade (pp. 223-250).
                    Palgrave Macmillan, Cham.
                  </div>
                  <div class="sortText">
                    Iguchi, H. and Arimura, T.H., 2017.
                    <a
                      target="blank"
                      href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_11"
                      >Diffusion of Quality and Environmental Management Systems
                      Through Global Value Chains: Cases of Malaysia and
                      Vietnam.</a
                    >
                    In Regulations and International Trade (pp. 251-274).
                    Palgrave Macmillan, Cham.
                  </div>
                  <div class="sortText">
                    Kaltenegger, O., Löschel, A. and Pothen, F., 2017.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.eneco.2018.01.008"
                      >The effect of globalisation on energy footprints:
                      disentangling the links of global value chains.</a
                    >
                    Energy Economics, 68, pp.148-168.
                  </div>
                  <div class="sortText">
                    Michida, E. and Nabeshima, K., 2017.
                    <a
                      target="blank"
                      href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_5"
                      >Diffusion of Private Food Standards from the European
                      Union to Asia.</a
                    >
                    In Regulations and International Trade (pp. 107-129).
                    Palgrave Macmillan, Cham.
                  </div>
                  <div class="sortText">
                    Ramungul, N., 2017.
                    <a
                      target="blank"
                      href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_12"
                      >Challenges of EU Chemical Regulations: The Case of Thai
                      Firms.</a
                    >
                    In Regulations and International Trade (pp. 275-316).
                    Palgrave Macmillan, Cham.
                  </div>
                  <div class="sortText">
                    Roheim, C.A., Asche, F. and Santos, J.I., 2011.
                    <a
                      target="blank"
                      href="https://doi.org/10.1111/j.1477-9552.2011.00299.x"
                      >The elusive price premium for ecolabelled products:
                      evidence from seafood in the UK market.</a
                    >
                    Journal of Agricultural Economics, 62(3), pp.655-668.
                  </div>
                  <div class="sortText">
                    Ueki, Y., Michida, E. and Nabeshima, K., 2017.
                    <a
                      target="blank"
                      href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_8"
                      >Transmission channels of requirements for chemicals in
                      products to firms in Vietnam.</a
                    >
                    In Regulations and International Trade (pp. 179-199).
                    Palgrave Macmillan, Cham.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
            <q-separator />
            <q-expansion-item
              group="somegroup"
              expand-separator
              label="Module B.4.1"
            >
              <q-card>
                <q-card-section>
                  <div class="">
                    Bown, C.P. and Keynes, S., 2020.
                    <a
                      target="blank"
                      href="https://www.piie.com/system/files/documents/wp20-4.pdf"
                      >Why Trump shot the Sheriffs: The end of WTO dispute
                      settlement 1.0.</a
                    >
                    Peterson Institute for International Economics Working
                    Paper, (20-4).
                  </div>
                  <div class="sortText">
                    Cali, M. and Te Velde, D.W., 2011.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.worlddev.2010.09.018"
                      >Does aid for trade really improve trade performance?.</a
                    >
                    World development, 39(5), pp.725-740.
                  </div>
                  <div class="sortText">
                    Dollar, D., Hallward-Driemeier, M. and Mengistae, T., 2006.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/j.worlddev.2006.05.001"
                      >Investment climate and international integration.</a
                    >
                    World development, 34(9), pp.1498-1516.
                  </div>
                  <div class="sortText">
                    Dollar, D. and Kraay, A., 2003.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/S0304-3932(02)00206-4"
                      >Institutions, trade, and growth.</a
                    >
                    Journal of monetary economics, 50(1), pp.133-162.
                  </div>
                  <div class="sortText">
                    Eichengreen, B. and Leblang, D., 2008.
                    <a
                      target="blank"
                      href="https://doi.org/10.1111/j.1468-0343.2007.00329.x"
                      >Democracy and globalization.</a
                    >
                    Economics & Politics, 20(3), pp.289-334.
                  </div>
                  <div class="sortText">
                    Hofmann, C., Osnago, A. and Ruta, M., 2019.
                    <a
                      target="blank"
                      href="https://doi.org/10.1017/S1474745618000071"
                      >The content of preferential trade agreements.</a
                    >
                    World Trade Review, 18(3), pp.365-398.
                  </div>
                  <div class="sortText">
                    Jha, S., 2013.
                    <a
                      target="blank"
                      href="https://www.jstor.org/stable/43654035"
                      >Trade, institutions, and ethnic tolerance: Evidence from
                      South Asia.</a
                    >
                    American political Science review, pp.806-832.
                  </div>
                  <div class="sortText">
                    Laget, E., Osnago, A., Rocha, N. and Ruta, M., 2019.
                    <a
                      target="blank"
                      href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3489075"
                      >Deep Trade Agreements and Global Value Chains.</a
                    >
                    Robert Schuman Centre for Advanced Studies Research Paper
                    No. RSCAS, 86.
                  </div>
                  <div class="sortText">
                    Mattoo, A. and Staiger, R.W., 2019.
                    <a
                      target="blank"
                      href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3376278"
                      >Trade Wars: What do they mean? Why are they happening
                      now? What are the costs?.</a
                    >
                    Economic Policy.
                  </div>
                  <div class="sortText">
                    Staiger, R.W., 1995.
                    <a
                      target="blank"
                      href="https://doi.org/10.1016/S1573-4404(05)80009-7"
                      >International rules and institutions for trade policy.</a
                    >
                    Handbook of international economics, 3, pp.1495-1551.
                  </div>
                  <div class="sortText">
                    UN ESCAP, 2022.
                    <a
                      target="blank"
                      href="https://www.unescap.org/kp/2022/e-learning-course-sustainable-development-provisions-free-trade-agreements"
                      >E-learning course on Sustainable Development Provisions
                      in Regional Trade Agreements.</a
                    >
                    22 February 2022.
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
        <!-- end module Box  -->
      </div>
      <!-- end bar -->
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
      <div class="loginBar textWhite row">
        <div class="col q-pt-md q-pl-xl">
          <div class="font36">
            Trade and the sustainable development goals (SDGs)
          </div>
          <div class="font18">
            Learn about how to make trade works for all and environment
          </div>
          <div class="font24 q-pt-md">References and reading list</div>
          <div class="font18 q-pt-xs cursor-pointer" @click="goBack()">
            <u>back to course content page</u>
          </div>
        </div>
        <div><img src="../../public/image/watermask.svg" alt="" /></div>
      </div>
      <div class="q-ma-md q-pl-lg" style="">
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
        <!-------------- text ------------->
        <div class="contentText q-pt-sm">
          <div class="sortText">
            Contains references cited in the modules as well as some suggestions
            for further reading.
          </div>
          <br />
          <div class="fontB">I. “Big picture” readings</div>
          <div class="sortText">
            (less technical, or at least more accessible by general readers)
          </div>
          <div class="sortText">
            Baldwin, R.E., 2016. The Great Convergence: Information Technology
            and the New Globalization. Cambridge, MA: Belknap Press. Especially
            Part III: Understanding globalization’s changes.
          </div>
          <div class="sortText">
            Helble, M., and B. Shepherd, eds. 2017.
            <a
              target="blank"
              href="https://www.adb.org/sites/default/files/publication/327451/adbi-win-win-how-international-trade-can-help-meet-sdgs.pdf"
              >Win-Win: How International Trade Can Help Meet the Sustainable
              Development Goals.</a
            >
            Tokyo: Asian Development Bank Institute.
          </div>
          <br />
          <div class="fontB">
            II. Readings and references specific to modules
          </div>
          <div class="sortText">
            (more technical papers focused on formal arguments and statistical
            evidence)
          </div>
          <br />
          <div class="fontB">Module A.1</div>
          <div class="sortText">
            Estevadeordal, A., and A.M. Taylor (2013).
            <a
              target="blank"
              href="http://www.aae.wisc.edu/coxhead/courses/readings/Estevadeordal%20and%20Taylor%20Washington%20Consensus%20RES%202013.pdf"
              >Is the Washington Consensus dead? Growth, openness, and the great
              liberalization, 1970s-2000s.</a
            >
            Rev. Econ. Stat. 95(5): 1669-1690.
          </div>
          <div class="sortText">
            United Nations, 2015.<a
              target="blank"
              href="https://www.un.org/ga/search/view_doc.asp?symbol=A/RES/70/1&Lang=E"
            >
              Transforming our World: the 2030 Agenda for Sustainable
              Development.</a
            >
          </div>
          <br />
          <div class="fontB">Module A.2</div>
          <div>
            Frank, R.H., and B. Bernanke, 2010.
            <a target="blank" href="https://b-ok.asia/book/5482837/3e1ecb"
              >Principles of Economics, Brief Edition.</a
            >
            McGraw-Hill Higher Education.
          </div>
          <br />
          <div class="fontB">Module A.3</div>
          <div class="sortText">
            FAO, 2020.
            <a target="blank" href="http://www.fao.org/state-of-forests/en"
              >State of the World’s Forests 2020.</a
            >
            (Webpage with downloadable report)
          </div>

          <div class="sortText">
            Indonesia-Investments, 2017.
            <a
              target="blank"
              href="https://www.indonesia-investments.com/business/commodities/palm-oil/item166"
              >Palm Oil</a
            >
            (webpage).
          </div>

          <div class="sortText">
            IPCC, 2014.
            <a target="blank" href="https://www.ipcc.ch/report/ar5/syr/"
              >Climate Change 2014: Synthesis Report. Contribution of Working
              Groups I, II and III to the Fifth Assessment Report of the
              Intergovernmental Panel on Climate Change</a
            >
            [Core Writing Team, R.K. Pachauri and L.A. Meyer (eds.)]. IPCC,
            Geneva, Switzerland.
          </div>

          <div class="sortText">
            Roberts, D., 2017.
            <a
              target="blank"
              href="https://www.vox.com/energy-and-environment/2017/5/15/15634538/china-coal-cleaner"
              >By 2020, every Chinese coal plant will be more efficient than
              every US coal plant.</a
            >
            Vox (webpage).
          </div>

          <div class="sortText">
            World Trade Organization (WTO).
            <a
              target="blank"
              href="https://www.wto.org/english/tratop_e/envir_e/climate_impact_e.htm"
              >The impact of trade opening on climate change</a
            >
            (webpage).
          </div>
          <br />
          <div class="fontB">Module A.4</div>
          <div class="sortText">
            Harrison, G.W.; T.F. Rutherford, D.G. Tarr, and A. Gurgel, 2004.
            <a
              target="blank"
              href="https://elibrary.worldbank.org/doi/abs/10.1093/wber/lhh043"
              >Trade policy and poverty reduction in Brazil.</a
            >
            World Bank Economic Review, 18(3): 289-317.
          </div>

          <div class="sortText">
            Winters, A., 2002.
            <a
              target="blank"
              href="https://onlinelibrary.wiley.com/doi/abs/10.1111/1467-9701.00495"
              >Trade liberalization and poverty: what are the links?</a
            >
            The World Economy 25(9): 1339-1367.
          </div>
          <br />
          <div class="fontB">Module B.1.1</div>
          <div class="sortText">
            Dreze, J., and A.K. Sen, 1991.
            <a
              target="blank"
              href="https://global.oup.com/academic/product/hunger-and-public-action-9780198283652?cc=fi&lang=en&"
              >Hunger and Public Action.</a
            >
            Oxford: Clarendon Press.
          </div>
          <div class="sortText">
            Hale, G., and M. Xu, 2016:
            <a
              target="blank"
              href="https://www.frbsf.org/economic-research/files/wp2016-25.pdf"
              >FDI effects on the labor markets of host countries.</a
            >
            Federal Reserve Bank of San Francisco Working Paper 2016-25.
          </div>
          <div class="sortText">
            F. Sjoholm and R. Lipsey, 2006:
            <a target="blank" href="https://doi.org/10.1086/505723"
              >Foreign firms and Indonesian manufacturing wages: an analysis
              with panel data.</a
            >
            Economic Development and Cultural Change 55(1).
          </div>
          <div class="sortText">
            S. Karlsson et al 2008.
            <a
              target="blank"
              href="https://doi.org/10.1111/j.1467-9701.2009.01162.x"
              >Foreign firms and Chinese employment.</a
            >
            World Economy 32(1).
          </div>
          <div class="sortText">
            A. Hijzen, P.S. Martins, T. Schank, and R. Upward, 2013:
            <a
              target="blank"
              href="https://doi.org/10.1016/j.euroecorev.2013.02.001"
              >Foreign-owned firms around the world: A comparative analysis of
              wages and employment at the micro-level.</a
            >
            European Economic Review 60: 170-188.
          </div>
          <div class="sortText">
            Topalova, P., 2010.
            <a target="blank" href="https://www.jstor.org/stable/25760231"
              >Factor immobility and regional impacts of trade liberalization:
              evidence on poverty from India,</a
            >” American Economic Journal: Applied Economics. 2(4): 1–41.
          </div>
          <div class="sortText">
            McCaig, B., 2011.
            <a
              target="blank"
              href="https://doi.org/10.1016/j.jinteco.2011.05.007"
              >Exporting out of poverty: provincial poverty in Vietnam and U.S.
              market access.</a
            >
            Journal of International Economics 85(1): 102-113.
          </div>
          <div class="sortText">
            Coxhead, I.; N.V. Cuong, and V.H. Linh, 2015.
            <a
              target="blank"
              href="https://openknowledge.worldbank.org/handle/10986/23597"
              >Migration in Vietnam: new evidence from recent surveys.</a
            >
            World Bank Vietnam Country Office, Vietnam Development Economics
            Discussion Paper No. 2.
          </div>

          <div class="sortText">
            World Bank, 2018:
            <a
              target="blank"
              href="http://documents1.worldbank.org/curated/en/206981522843253122/pdf/124916-WP-PULIC-P161323-VietnamPovertyUpdateReportENG.pdf"
              >Climbing the Ladder: Poverty reduction and shared prosperity in
              Vietnam.</a
            >
            Washington, DC: World Bank.
          </div>
          <div class="sortText">
            Coxhead, I. and R. Shrestha, 2017.
            <a
              target="blank"
              href="https://uwmadison.box.com/s/nse13nwil2hcbtsb7n167la2lm4ujwpv"
              >Globalization and school-work choices in an emerging economy</a
            >
            Vietnam. Asian Economic Papers 16(2): 1-18.
          </div>
          <br />
          <div class="fontB">Module B.1.2</div>
          <div class="sortText">
            FAO, 2008:
            <a target="blank" href="http://www.fao.org/3/al936e/al936e00.pdf"
              >An Introduction to the Basic Concepts of Food Security.</a
            >
            Online resource.
          </div>
          <div class="sortText">
            Ivanic, M., and W. Martin, 2014.
            <a
              target="blank"
              href="https://openknowledge.worldbank.org/bitstream/handle/10986/20350/WPS7011.pdf;sequence=1"
              >Short- and long-run impacts of food price increases on
              poverty.</a
            >
            World Bank Staff Working Papers No. WPS7011.
          </div>
          <div class="sortText">
            Martin, W., 2017. Agricultural trade and hunger. In M. Helble and B.
            Shepherd,
            <a
              target="blank"
              href="https://www.adb.org/sites/default/files/publication/327451/adbi-win-win-how-international-trade-can-help-meet-sdgs.pdf"
              >Win-win: How International Trade Can Help Meet the Sustainable
              Development Goals</a
            >
            (Tokyo: ADBI).
          </div>
          <div class="sortText">
            Warr, P., 2011.
            <a
              target="blank"
              href="https://dev.crawford.anu.edu.au/acde/publications/publish/papers/wp2011/wp_econ_2011_04.pdf"
              >Food security vs. food self‐sufficiency: the Indonesian case</a
            >,. The Indonesian Quarterly 39: 56–71.
          </div>
          <div class="sortText">
            Fane, G., and P.G. Warr, 2008.
            <a
              target="blank"
              href="https://ideas.repec.org/a/taf/bindes/v44y2008i1p133-150.html"
              >Agricultural protection in Indonesia.</a
            >
            Bulletin of Indonesian Economic Studies 44(1): 133-150.
          </div>
          <div class="sortText">
            Warr, P.G., and A.A. Yusuf, 2013.
            <a target="blank" href="https://doi.org/10.1111/1467-8489.12015"
              >World food prices and poverty in Indonesia.</a
            >
            Aust. J. Agr. Res. Econ. 58: 1-21.
          </div>
          <div class="sortText">
            Coxhead, I. and G.E. Shively, 1998. Some economic and environmental
            implications of technical progress in Philippine corn agriculture:
            an economy-wide perspective. Journal of Agricultural Development and
            Economics XXVI (1/2), July: 60-90.
          </div>
          <div class="sortText">
            Coxhead, I., 2000.
            <a
              target="blank"
              href="http://www.sciencedirect.com/science/article/pii/S0305750X99001175"
              >The consequences of a food security strategy for economic
              welfare, income distribution and agricultural land degradation:
              the Philippine case.</a
            >
            World Development 28(1): 111-128.
          </div>
          <br />
          <div class="fontB">Module B.1.3</div>
          <div class="sortText">
            Frankel, J. A., & Romer, D. H., 1999.
            <a
              target="blank"
              href="https://eml.berkeley.edu/~dromer/papers/AER_June99.pdf"
              >Does trade cause growth?</a
            >
            American Economic Review 89(3): 379-399.
          </div>
          <div class="sortText">
            Alcalá, F., & Ciccone, A., 2004.
            <a
              target="blank"
              href="https://www.jstor.org/stable/pdf/25098695.pdf"
              >Trade and productivity.</a
            >
            Quarterly Journal of Economics 119(2): 613-646.
          </div>
          <div class="sortText">
            Pavcnik, N., 2002.
            <a
              target="blank"
              href="https://www.jstor.org/stable/pdf/2695960.pdf"
              >Trade liberalization, exit, and productivity improvements:
              Evidence from Chilean plants.</a
            >
            Review of Economic Studies 69(1): 245-276.
          </div>
          <div class="sortText">
            Amiti, M., and J. Konings, 2007. Trade liberalization, intermediate
            inputs, and productivity: evidence from Indonesia. American Economic
            Review 97(5): 1611-1638.
          </div>
          <div class="sortText">
            Bresnahan, L.; I. Coxhead, J. Foltz and T. Mogues, 2016.
            <a
              target="blank"
              href="http://www.aae.wisc.edu/pubs/sps/pdf/stpap583.pdf"
              >Does freer trade really lead to productivity growth? Evidence
              from sub-Saharan Africa.</a
            >
            World Development 86(1): 18-29.
          </div>
          <div class="sortText">
            Ahmed, A..,n.d.
            <a
              target="blank"
              href="https://www.unescap.org/sites/default/files/7.1The%20economic%20and%20social%20impact%20of%20liberalisation%20in%20Bangladesh%20on%20garment%20and%20leather%20sectors.pdf"
              >The economic and social impact of liberalisation through
              preferential trade agreements – the case of the ready-made
              garments and the leather & leathergoods sectors. A country study
              on Bangladesh.</a
            >
            Presentation: UN ESCAP.
          </div>
          <div class="sortText">
            Heath, R. and Mobarak, A.M., 2015.
            <a
              target="blank"
              href="https://doi.org/10.1016/j.jdeveco.2015.01.006"
              >Manufacturing growth and the lives of Bangladeshi women.</a
            >
            Journal of Development Economics 115: 1-15.
          </div>
          <div class="sortText">
            Robertson, R.; D. Kokas, D. Cardozo, and G. Lopez-Acevedo, 2020.
            <a
              target="blank"
              href="https://openknowledge.worldbank.org/bitstream/handle/10986/33425/Short-and-Long-Run-Labor-Market-Effects-of-Developing-Country-Exports-Evidence-from-Bangladesh.pdf?sequence=1&isAllowed=y"
              >Short and long-run labor market effects of developing-country
              exports: evidence from Bangladesh.</a
            >
            World Bank Policy Research Working Papers No. 9176.
          </div>
          <div class="sortText">
            B. Hoekman, 2016:
            <a
              target="blank"
              href="https://www.oecd-ilibrary.org/docserver/5jm0m93sf036-en.pdf?expires=1609116040&id=id&accname=guest&checksum=D72CFA96AC4B550B527B2BA0A5BCBAA8"
              >Trade and the SDGs: making ‘means of implementation’ a
              reality.</a
            >
            OECD.
          </div>
          <br />
          <div class="fontB">Module B.2.1</div>
          <div class="sortText">
            World Resources Institute:
            <a
              target="blank"
              href="https://www.wri.org/blog/2020/12/interactive-chart-top-emitters"
              >This Interactive Chart Shows Changes in the World's Top 10
              Emitters.</a
            >
            Webpage.
          </div>
          <div class="sortText">
            Schenker 2013: Exchanging goods and damages: the role of trade on
            the distribution of climate change costs. Envir. Res. Econ. 54:
            261-282.
          </div>
          <div class="sortText">
            Tol 2009: The economic impacts of climate change, J. Econ. Persp.
            23(2): 29-51.
          </div>
          <div class="sortText">
            N. Traore and J. Foltz, 2017.
            <a
              target="blank"
              href="https://poder.cepr.org/sites/default/files/JMP_Traore.pdf"
              >Temperatures, Productivity, and Firm Competitiveness in
              Developing Countries: Evidence from Africa.</a
            >
            Working paper.
          </div>
          <div class="sortText">
            Yusuf, A.A., and B. Reosudarmo, 2015. On the distributional impact
            of a carbon tax in developing countries: the case of Indonesia.
            Envir. Econ. Pol. Stud. 17, 2015.
          </div>
          <div class="sortText">
            UN ESCAP:
            <a
              target="blank"
              href="https://www.unescap.org/sites/default/files/Ch4%20-%20Rethinking%20trade%20and%20investment%20policies%20for%20sustainable%20development_16Nov17.pdf"
              >Rethinking trade and investment policies for sustainable
              development.</a
            >
            Chapter 4 in ESCAP: Asia-Pacific Trade and Investment Report 2017.
          </div>
          <br />
          <div class="fontB">Module B.2.2</div>
          <div class="sortText">
            Robertson, R.; D. Kokas, D. Cardozo, and G. Lopez-Acevedo, 2020.
            <a
              target="blank"
              href="https://openknowledge.worldbank.org/bitstream/handle/10986/33425/Short-and-Long-Run-Labor-Market-Effects-of-Developing-Country-Exports-Evidence-from-Bangladesh.pdf?sequence=1&isAllowed=y"
              >Short and long-run labor market effects of developing-country
              exports: evidence from Bangladesh.</a
            >
            World Bank Policy Research Working Papers No. 9176.
          </div>
          <div class="sortText">
            Atkin, D., 2016.
            <a
              target="blank"
              href="https://www.aeaweb.org/articles?id=10.1257/aer.20120901"
              >Endogenous skill acquisition and export manufacturing in
              Mexico.</a
            >
            American Economic Review 106(8): 2046-85.
          </div>
          <div class="sortText">
            Coxhead, I. and R. Shrestha, 2017.
            <a
              target="blank"
              href="https://uwmadison.box.com/s/nse13nwil2hcbtsb7n167la2lm4ujwpv"
              >Globalization and school-work choices in an emerging economy:
              Vietnam.</a
            >
            Asian Economic Papers 16(2): 1-18.
          </div>
          <div class="sortText">
            Phan, D. and I. Coxhead, 2013.
            <a target="blank" href="http://dx.doi.org/10.1016/j.jce.2013.04.001"
              >Long-run costs of piecemeal reform: wage inequality and returns
              to education in Vietnam.</a
            >
            Journal of Comparative Economics 41(4): 1106-1122.
          </div>
          <div class="sortText">
            Fox, L.; F. Torche, and J. Waldfogel, 2016:
            <a
              target="blank"
              href="https://www.oxfordhandbooks.com/view/10.1093/oxfordhb/9780199914050.001.0001/oxfordhb-9780199914050-e-24"
              >Intergenerational Mobility.</a
            >
            in D. Brady and L.M. Burton, eds. Oxford Handbook of the Social
            Science of Poverty. Online resource.
          </div>
          <div class="sortText">
            M.N. Asadullah, 2006.
            <a
              target="blank"
              href="https://www.researchgate.net/profile/Mohammad_Asadullah2/publication/228675658_Intergenerational_economic_mobility_in_rural_Bangladesh/links/0deec528c371e2fb1c000000/Intergenerational-economic-mobility-in-rural-Bangladesh.pdf"
              >Intergenerational economic mobility in rural Bangladesh.</a
            >
            Paper prepared for presentation at the Royal Economic Society (RES)
            Annual Conference, University of Nottingham, 2006.
          </div>
          <div class="sortText">
            C. Dunn, 2003:
            <a
              target="blank"
              href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.548.7920&rep=rep1&type=pdf"
              >Intergenerational earnings mobility in Brazil.</a
            >
            Manuscript, Univ. of Michigan.
          </div>
          <div class="sortText">
            Ahsan, R.N., and A. Chatterjee, 2017.
            <a
              target="blank"
              href="https://www.sciencedirect.com/science/article/pii/S0022199617301149?casa_token=jSfBeGr52hYAAAAA:U0wQ75GM9qqeD2cuq0-gg45qRzPAUeqzgTFNeqly1TIABMmXInTcRhYlQGSjwZZfMx5RF3wqHhk"
              >Trade liberalization and intergenerational occupational mobility
              in urban India.</a
            >
            Journal of International Economics 109: 138-152.
          </div>
          <div class="sortText">
            Gollin, D.; L D. Lagakos and M.E. Waugh, 2013.
            <a target="blank" href="https://doi.org/10.1093/qje/qjt056"
              >The agricultural productivity gap</a
            >, Quarterly Journal of Economics 129(2): 939-993.
          </div>
          <div class="sortText">
            Miguel, E., and J. Hamory, 2009.
            <a target="blank" href="https://mpra.ub.uni-muenchen.de/19228/"
              >Individual ability and selection into migration in Kenya.</a
            >
            MPRA Paper No. 19228.
          </div>
          <div class="sortText">
            Bryan, G.; S. Chowdhury and A. Mobarak, 2013.
            <a
              target="blank"
              href="https://www.tcd.ie/Economics/assets/pdf/Gharad%20Bryan%20Presentation.pdf"
              >Escaping famine through seasonal migration.</a
            >
            Manuscript.
          </div>
          <br />
          <div class="fontB">Module B.3.1</div>
          <div class="sortText">
            Berik, G. and Rodgers, Y.V.D.M., 2010.
            <a target="blank" href="https://doi.org/10.1002/jid.1534"
              >Options for enforcing labour standards: Lessons from Bangladesh
              and Cambodia.</a
            >
            Journal of International Development: The Journal of the Development
            Studies Association, 22(1), pp.56-85.
          </div>
          <div class="sortText">
            Bonnal, M., 2010.
            <a target="blank" href="https://doi.org/10.1007/s12122-009-9075-4"
              >Export performance, labor standards and institutions: evidence
              from a dynamic panel data model.</a
            >
            Journal of Labor Research, 31(1), pp.53-66.
          </div>
          <div class="sortText">
            Edmonds, E.V. and Pavcnik, N., 2005.
            <a
              target="blank"
              href="https://doi.org/10.1016/j.jinteco.2004.04.001"
              >The effect of trade liberalization on child labor.</a
            >
            Journal of international Economics, 65(2), pp.401-419.
          </div>
          <div class="sortText">
            Edmonds, E.V., Pavcnik, N. and Topalova, P., 2010.
            <a
              target="blank"
              href="https://www.nber.org/system/files/working_papers/w12884/w12884.pdf"
              >Trade adjustment and human capital investments: Evidence from
              Indian tariff reform.</a
            >
            American Economic Journal: Applied Economics, 2(4), pp.42-75.
          </div>
          <div class="sortText">
            Flanagan, R.J., 2003.
            <a
              target="blank"
              href="https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.499.3937&rep=rep1&type=pdf"
              >Labor standards and international competitive advantage.</a
            >
            International Labor Standards: Globalization, Trade, and Public
            Policy, 47.
          </div>
          <div class="sortText">
            Kucera, D. and Sarna, R., 2006.
            <a
              target="blank"
              href="https://doi.org/10.1111/j.1467-9396.2006.00627.x"
              >Trade union rights, democracy, and exports: A gravity model
              approach.</a
            >
            Review of International Economics, 14(5), pp.859-882.
          </div>
          <div class="fontB">Module B.3.2</div>
          <div class="sortText">
            Shu, P., and C. Steinwender, 2019.
            <a
              target="blank"
              href="https://ideas.repec.org/a/ucp/ipolec/doi10.1086-699932.html"
              >The impact of trade liberalization on productivity and
              innovation.</a
            >
            In J. Lerner and S. Stern, eds: Innovation Policy and the Economy,
            Vol.19. NBER.
          </div>
          <div class="sortText">
            Collins, S.M., and B. P. Bosworth, 1996.
            <a
              target="blank"
              href="https://www.brookings.edu/wp-content/uploads/1997/06/1996b_bpea_collins_bosworth_rodrik.pdf"
              >Economic growth in East Asia: accumulation versus
              assimilation.</a
            >
            Brookings Papers in Economic Activity 2:1996.
          </div>
          <div class="sortText">
            Tinakorn, P., and C. Sussungkarn, 1998. Total factor productivity
            growth in Thailand: 1980- 95, Macroeconomic Policy Program, Thailand
            Development Research Institute (TDRI).
          </div>
          <div class="sortText">
            Warr, P., 2009.
            <a
              target="blank"
              href="https://crawford.anu.edu.au/acde/publications/publish/papers/wp2009/wp_econ_2009_10.pdf"
              >Aggregate and sectoral productivity growth in Thailand and
              Indonesia.</a
            >
            Australian National University: Working papers in Trade and
            Development.
          </div>
          <div class="sortText">
            Diao, X.; J. Rattsø, and H.E. Stokke, 2005.
            <a
              target="blank"
              href="https://doi.org/10.1016/j.jdeveco.2003.12.018"
              >International spillovers, productivity growth and openness in
              Thailand: an intertemporal general equilibrium analysis.</a
            >
            Journal of Development Economics 76(2).
          </div>
          <div class="sortText">
            Bøler, E.A.; A. Moxnes, and K.H. Ulltveit-Moe, 2015.
            <a target="blank" href="http://dx.doi.org/10.1257/aer.20121530"
              >R&D, International Sourcing, and the Joint Impact on Firm
              Performance.</a
            >
            American Economic Review 105(12): 3704-3739.
          </div>
          <div class="sortText">
            R.E. Baldwin, 2011.
            <a target="blank" href="http://www.nber.org/papers/w17716"
              >Trade and industrialisation after globalisation’s 2nd unbundling:
              how building and joining a supply chain are different and why it
              matters.</a
            >
            NBER Working Papers No. 17716.
          </div>
          <br />
          <div class="fontB">Module B.3.3</div>
          <div class="sortText">
            Arimura, T.H., Darnall, N. and Katayama, H., 2011.
            <a target="blank" href="https://doi.org/10.1016/j.jeem.2010.11.003"
              >Is ISO 14001 a gateway to more advanced voluntary action? The
              case of green supply chain management.</a
            >
            Journal of environmental economics and management, 61(2),
            pp.170-182.
          </div>
          <div class="sortText">
            De Backer, K. and Miroudot, S., 2013.
            <a
              target="blank"
              href="https://www.oecd-ilibrary.org/trade/mapping-global-value-chains_5k3v1trgnbr4-en"
              >Mapping Global Value Chains. OECD Trade Policy Papers</a
            >, No. 159, OECD Publishing, Paris.
          </div>
          <div class="sortText">
            Galarraga, I. and Markandya, A., 2004.
            <a target="blank" href="https://ageconsearch.umn.edu/record/28732"
              >Economic techniques to estimate the demand for sustainable
              products: a case study for fair trade and organic coffee in the
              United Kingdom.</a
            >
            Economía Agraria y Recursos Naturales-Agricultural and Resource
            Economics, 4(7), pp.109-134.
          </div>
          <div class="sortText">
            Hiscox, M.J. and Smyth, N.F., 2006.
            <a
              target="blank"
              href="http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.408.7706&rep=rep1&type=pdf"
              >Is there consumer demand for improved labor standards? Evidence
              from field experiments in social labeling.</a
            >
            Department of Government, Harvard University.
          </div>
          <div class="sortText">
            Honda, K. and Otsuki, T., 2017.
            <a
              target="blank"
              href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_10"
              >Effects of Chemical Safety Standards on Export Performance in
              Malaysia and Vietnam.</a
            >
            In Regulations and International Trade (pp. 223-250). Palgrave
            Macmillan, Cham.
          </div>
          <div class="sortText">
            Iguchi, H. and Arimura, T.H., 2017.
            <a
              target="blank"
              href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_11"
              >Diffusion of Quality and Environmental Management Systems Through
              Global Value Chains: Cases of Malaysia and Vietnam.</a
            >
            In Regulations and International Trade (pp. 251-274). Palgrave
            Macmillan, Cham.
          </div>
          <div class="sortText">
            Kaltenegger, O., Löschel, A. and Pothen, F., 2017.
            <a target="blank" href="https://doi.org/10.1016/j.eneco.2018.01.008"
              >The effect of globalisation on energy footprints: disentangling
              the links of global value chains.</a
            >
            Energy Economics, 68, pp.148-168.
          </div>
          <div class="sortText">
            Michida, E. and Nabeshima, K., 2017.
            <a
              target="blank"
              href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_5"
              >Diffusion of Private Food Standards from the European Union to
              Asia.</a
            >
            In Regulations and International Trade (pp. 107-129). Palgrave
            Macmillan, Cham.
          </div>
          <div class="sortText">
            Ramungul, N., 2017.
            <a
              target="blank"
              href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_12"
              >Challenges of EU Chemical Regulations: The Case of Thai Firms.</a
            >
            In Regulations and International Trade (pp. 275-316). Palgrave
            Macmillan, Cham.
          </div>
          <div class="sortText">
            Roheim, C.A., Asche, F. and Santos, J.I., 2011.
            <a
              target="blank"
              href="https://doi.org/10.1111/j.1477-9552.2011.00299.x"
              >The elusive price premium for ecolabelled products: evidence from
              seafood in the UK market.</a
            >
            Journal of Agricultural Economics, 62(3), pp.655-668.
          </div>
          <div class="sortText">
            Ueki, Y., Michida, E. and Nabeshima, K., 2017.
            <a
              target="blank"
              href="https://link.springer.com/chapter/10.1007/978-3-319-55041-1_8"
              >Transmission channels of requirements for chemicals in products
              to firms in Vietnam.</a
            >
            In Regulations and International Trade (pp. 179-199). Palgrave
            Macmillan, Cham.
          </div>
          <br />
          <div class="fontB">Module B.4.1</div>
          <div class="sortText">
            Bown, C.P. and Keynes, S., 2020.
            <a
              target="blank"
              href="https://www.piie.com/system/files/documents/wp20-4.pdf"
              >Why Trump shot the Sheriffs: The end of WTO dispute settlement
              1.0.</a
            >
            Peterson Institute for International Economics Working Paper,
            (20-4).
          </div>
          <div class="sortText">
            Cali, M. and Te Velde, D.W., 2011.
            <a
              target="blank"
              href="https://doi.org/10.1016/j.worlddev.2010.09.018"
              >Does aid for trade really improve trade performance?.</a
            >
            World development, 39(5), pp.725-740.
          </div>
          <div class="sortText">
            Dollar, D., Hallward-Driemeier, M. and Mengistae, T., 2006.
            <a
              target="blank"
              href="https://doi.org/10.1016/j.worlddev.2006.05.001"
              >Investment climate and international integration.</a
            >
            World development, 34(9), pp.1498-1516.
          </div>
          <div class="sortText">
            Dollar, D. and Kraay, A., 2003.
            <a
              target="blank"
              href="https://doi.org/10.1016/S0304-3932(02)00206-4"
              >Institutions, trade, and growth.</a
            >
            Journal of monetary economics, 50(1), pp.133-162.
          </div>
          <div class="sortText">
            Eichengreen, B. and Leblang, D., 2008.
            <a
              target="blank"
              href="https://doi.org/10.1111/j.1468-0343.2007.00329.x"
              >Democracy and globalization.</a
            >
            Economics & Politics, 20(3), pp.289-334.
          </div>
          <div class="sortText">
            Hofmann, C., Osnago, A. and Ruta, M., 2019.
            <a target="blank" href="https://doi.org/10.1017/S1474745618000071"
              >The content of preferential trade agreements.</a
            >
            World Trade Review, 18(3), pp.365-398.
          </div>
          <div class="sortText">
            Jha, S., 2013.
            <a target="blank" href="https://www.jstor.org/stable/43654035"
              >Trade, institutions, and ethnic tolerance: Evidence from South
              Asia.</a
            >
            American political Science review, pp.806-832.
          </div>
          <div class="sortText">
            Laget, E., Osnago, A., Rocha, N. and Ruta, M., 2019.
            <a
              target="blank"
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3489075"
              >Deep Trade Agreements and Global Value Chains.</a
            >
            Robert Schuman Centre for Advanced Studies Research Paper No. RSCAS,
            86.
          </div>
          <div class="sortText">
            Mattoo, A. and Staiger, R.W., 2019.
            <a
              target="blank"
              href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3376278"
              >Trade Wars: What do they mean? Why are they happening now? What
              are the costs?.</a
            >
            Economic Policy.
          </div>
          <div class="sortText">
            Staiger, R.W., 1995.
            <a
              target="blank"
              href="https://doi.org/10.1016/S1573-4404(05)80009-7"
              >International rules and institutions for trade policy.</a
            >
            Handbook of international economics, 3, pp.1495-1551.
          </div>
          <div class="sortText">
            UN ESCAP, 2022.
            <a
              target="blank"
              href="https://www.unescap.org/kp/2022/e-learning-course-sustainable-development-provisions-free-trade-agreements"
              >E-learning course on Sustainable Development Provisions in
              Regional Trade Agreements.</a
            >
            22 February 2022.
          </div>
          <div class="q-pa-lg"></div>
        </div>
      </div>

      <!-- end bar  -->
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
      <!----->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push("/syllabus");
    },
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.loginBar {
  background-color: #33383d;
  width: 100%;
  height: 204px;
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
.sortText {
  padding-top: 7px;
}
.topBar {
  background-color: #33383d;
  width: 100%;
  height: 204px;
}
.moduleBoxTablet {
  border: 1px solid black;
}
</style>
