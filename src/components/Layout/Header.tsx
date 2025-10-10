'use client'
import Link from 'next/link'
import { ImHome3 } from 'react-icons/im'
import { GoMoon, GoSun } from 'react-icons/go'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { useTheme } from '@/hooks/useTheme'
import { gitHubLink, linkedInLink } from '@/data/projects'

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
              <ImHome3 /> Douglas de Vargas
            </Link>
          </div>

          <div id='header-bar_links'>
            <div id='ico'>
              <Link
                href={gitHubLink}
                target='_blank'>
                <BsGithub />
              </Link>
              <Link
                href={linkedInLink}
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
