// src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_APP_API_URL: string;
  VITE_APP_FIREBASE_API: string;
  VITE_APP_FIREBASE_AUTH_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
