'use client'
import { ThemeProvider } from 'next-themes';
import { Side } from './components/side';
import { Nav } from './components/nav';
import { Container } from './components/container';
import { Dial } from './components/dial';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const styles = {
  container: `flex items-start justify-between`,
  side: `hidden lg:flex items-center justify-center lg:sticky top-0 z-[999] h-screen w-1/4 p-5 bg-black/[.1] dark:bg-t pb-4 pr-4 `,
  content: `w-full lg:w-3/4 min-h-screen dark:bg-white/[.1] p-5`
};
export default function Home() {
  return (
    <ThemeProvider attribute='class' themes={['light', 'dark']}>
      <GoogleReCaptchaProvider reCaptchaKey='6LfG76YoAAAAAJkauXE_6wwanpWvi2UBELJuz_vZ'>
        <div className={styles.container}>
          <div className={styles.side}>
            <Side />
          </div>
          <div className={styles.content}>
            <Nav />
            <Container />
          </div>
        </div>
      </GoogleReCaptchaProvider>
      <Dial />
    </ThemeProvider>
  )
}
