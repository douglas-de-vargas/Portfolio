'use client'

// NextJs
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// React-icons
import { ImHome3 } from 'react-icons/im'
import { GoMoon, GoSun } from 'react-icons/go'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

// Context
import { useTheme } from '@/hooks/useTheme'

/***/
export default function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  return (
    <>
      <header>
        <div id='header-bar'>
          <div id='header-bar_links'>
            <Link
              id='classLinks'
              className={pathname === '/' ? 'active' : ''}
              href='/'
              passHref>
              <ImHome3 /> Douglas
            </Link>
          </div>

          <div id='header-bar_links'>
            <div id='ico'>
              <BsGithub />

              <BsLinkedin />

              {theme === 'light' ? (
                <div onClick={() => setTheme('dark')}>
                  <GoSun />
                </div>
              ) : (
                <div onClick={() => setTheme('light')}>
                  <GoMoon />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
