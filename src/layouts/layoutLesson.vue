<template style="max-width: 1600px; width: 100%; margin: auto">
  <q-layout view="hHh LpR lFf" class="maxWidth">
    <q-header class="text-white desktop-only baseColor">
      <q-toolbar> </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="menu" label="Menu" no-caps />
          <q-tab name="narative" label="Narative" no-caps />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="menu">
            <div class="text-h6">Menu</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="narative">
            <div class="text-h6">narative</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="textWhite font18 baseColor">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="left = !left" /> -->
        <q-toolbar-title align="center">
          Introduction to Sustain Development Goals (SDGs)</q-toolbar-title
        >
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      left: false,
      tab: "menu",
    };
  },
};
</script>
<style scoped>
.maxWidth {
  margin: auto;
  max-width: 1200px;
}
.baseColor {
  background: #1f2b35;
}
</style>
