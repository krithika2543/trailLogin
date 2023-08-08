<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="floating">Username</ion-label>
          <ion-input v-model="username"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password" v-model="password"></ion-input>
        </ion-item>
        <ion-item class="center-link">
          <ion-router-link :to="{ name: 'forgot-password' }" style="font-size: smaller;">
            Forgot Password?
          </ion-router-link>
        </ion-item>
        <ion-button expand="full" @click="login()">Login</ion-button>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'App',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // Add your login logic here
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        // Example: You can perform login validation, API calls, etc.
      },
    },
    components: {
      IonButton,
      IonContent,
      IonHeader,
      IonInput,
      IonItem,
      IonLabel,
      IonPage,
      IonTitle,
      IonToolbar,
    },
  });
  </script>
  