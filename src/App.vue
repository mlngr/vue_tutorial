<template>
  <v-app>
    <v-navigation-drawer
      persistent
      enable-resize-watcher
      fixed
      app
      temporary v-model="sideNav">
          <v-list>
            <v-list-tile
              v-for="item in menuItems"
              :key="item.title"
              router
              :to="item.link">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>{{ item.title }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar dark class="primary">
          <v-toolbar-side-icon
            @click.stop="sideNav = !sideNav"
            class="hidden-sm-and-up "></v-toolbar-side-icon>
          <v-toolbar-title>
            <router-link to="/" tag="span" style="cursor: pointer">KOPLESH</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn
              flat
              v-for="item in menuItems"
              :key="item.title"
              router
              :to="item.link">
              <v-icon left dark>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <main>
          <router-view></router-view>
        </main>
      </v-app>
    </template>

    <script>
      export default {
        data () {
          return {
            sideNav: false,
            menuItems: [
              { icon: 'supervisor_account', title: 'Concerts', link: '/concerts' },
              { icon: 'room', title: 'Proposer un concert', link: '/concert/new' },
              { icon: 'person', title: 'Mon compte', link: '/profile' },
              { icon: 'face', title: 'Se connecter', link: '/signup' },
              { icon: 'lock_open', title: 'Inscription', link: '/signin' }
            ]
          }
        }
      }
    </script>
