'use client'
import { ThemeProvider } from 'next-themes';
import { Side } from './components/side';
import { Nav } from './components/nav';
import { Container } from './components/container';

const styles = {
  container: `flex min-h-screen items-center justify-between`,
  side: `w-1/4 h-screen p-5 bg-black/[.1] dark:bg-t`,
  content: `w-3/4 h-screen  dark:bg-white/[.1]  p-5`
};
export default function Home() {
  return (
    <ThemeProvider attribute='class' themes={['light', 'dark']}>
      <div className={styles.container}>
        <div className={styles.side}>
          <Side />
        </div>
        <div className={styles.content}>
          <Nav />
          <Container />
        </div>
      </div>
    </ThemeProvider>

  )
}
