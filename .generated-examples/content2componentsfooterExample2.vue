<template>
  <gv-footer>
  <template #navigation>
    <gv-footer-navigation 
      title="Two column list" 
      width="two-thirds" 
      :columns="2"
    >
      <gv-footer-navigation-item v-for="index in 6" :key="index" href="#">
        Navigation item {{ index }}
      </gv-footer-navigation-item>
    </gv-footer-navigation>
    <gv-footer-navigation 
      title="Single column list" 
      width="one-third"
    >
      <gv-footer-navigation-item v-for="index in 3" :key="index" href="#">
        Navigation item {{ index }}
      </gv-footer-navigation-item>
    </gv-footer-navigation>
  </template>
</gv-footer>
</template>