<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-blue">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          VIDI WEBSITE
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <q-item clickable active-class="active" axact v-ripple :to="{name: 'dashboard'}">
        <q-item-section avatar>
        <q-icon name="home" />
        </q-item-section>

        <q-item-section>
        HOME
        </q-item-section>
        </q-item>
         <q-item clickable active-class="active" axact v-ripple :to="{name: 'beli'}">
        <q-item-section avatar>
        <q-icon name="input" />
        </q-item-section>

        <q-item-section>
        PEMBELIAN TIKET
        </q-item-section>
        </q-item>
         <q-item clickable active-class="active" axact v-ripple :to="{name: 'pemesanan'}">
        <q-item-section avatar>
        <q-icon name="input" />
        </q-item-section>

        <q-item-section>
        PEMESANAN TIKET
        </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-3">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
