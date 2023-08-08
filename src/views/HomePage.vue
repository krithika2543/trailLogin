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
      <ion-icon src="google" style="font-size: 24px;"></ion-icon>
      <ion-item>
        <ion-label position="floating">Password</ion-label>
        <ion-input type="password" v-model="password"></ion-input>
      </ion-item>
      <ion-text class="text-center-container">
        <ion-router-link :to="{ name: 'forgot-password' }" style="font-size: smaller;">
          <div>
            <p>Forgot Password?</p>
          </div>
        </ion-router-link>
      </ion-text>
      <ion-button expand="full" @click="login()">Login</ion-button>

      <div class="divider-container" style="padding: 2ch;">
        <div class="divider-line"></div>
        <span class="divider-text">or</span>
        <div class="divider-line"></div>
      </div>

      <ion-text class="text-center-container">
        <div class="h-px flex-grow bg-gray-400"></div>
        <p>Login using</p>
      </ion-text>

        <ion-button expand="full" class="googlebutton" >
          Google
      </ion-button>

      <ion-button expand="full" class="text-center-container">
          Mobile number
      </ion-button>
      <ion-text class="text-center-container">
        <span>New user?</span>
        <ion-router-link>sign in</ion-router-link>
      </ion-text>
    </ion-content>
  </ion-page>
</template>
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Custom CSS for the line divider with "or" text */
.divider-container {
  display: flex;
  align-items: center;
}

.divider-line {
  flex: 1;
  height: 1px;
  background-color: #ccc;
}

.divider-text {
  padding: 0 1rem;
  color: #999;
  font-size: 0.9rem;
}

.text-center-container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 5vh; /* Center vertically within the page if needed */
}
.text-center-container span {
  margin-right: 0.5rem; /* Add spacing between the text and link */
}

.googlebutton{
  color: #ffffff;
}

</style>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton, IonContent, IonHeader, IonInput, IonIcon,IonImg, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import google from '/google.png'

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
    IonIcon
  },
});
</script>
