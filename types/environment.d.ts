namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_GITHUB_CLIENT_ID: string
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET: string
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: string
    NEXT_PUBLIC_GOOGLE_CLIENT_SECRET: string
    NEXT_PUBLIC_SECRET: string
  }
}
