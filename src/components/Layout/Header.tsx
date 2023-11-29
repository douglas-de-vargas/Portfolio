"use client"
// NextJs
import Link from 'next/link'

// React-icons
import { ImHome3 } from 'react-icons/im'
import { GoMoon, GoSun } from 'react-icons/go'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

// Context
import { useTheme } from '@/hooks/useTheme'

/***/
export default function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <header>
        <div id='header-bar'>
          <div id='header-bar_links'>
            <Link
              id='classLinks'
              href='/'
              passHref>
              <ImHome3 /> Douglas
            </Link>
          </div>

          <div id='header-bar_links'>
            <div id='ico'>
              <Link
                href='https://github.com/S1NS3RO?tab=repositories'
                target='_blank'>
                <BsGithub />
              </Link>
              <Link
                href='https://br.linkedin.com/in/douglas-vargas-a517b2288'
                target='_blank'>
                <BsLinkedin />
              </Link>
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
