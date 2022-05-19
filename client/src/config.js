'use strict';
// import dotenv from 'dotenv';
// import assert from 'assert';

// dotenv.config();

const {
    // PORT,
    // HOST,
    // HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

// assert(PORT, 'PORT is required');
// assert(HOST, 'HOST is required');

// export const port = PORT;
// export const host = HOST;
// export const url = HOST_URL;
export const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};