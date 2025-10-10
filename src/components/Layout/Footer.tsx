import { linkedInLink } from '@/data/projects'

export default function Footer() {
  return (
    <>
      <footer>
        <div id='footer-bar'>
          <p>
            &copy; 2023{' '}
            <a
              href={linkedInLink}
              target='_blank'
              rel='noreferrer'>
              {' '}
              Douglas de Vargas
            </a>
            , full stack developer.
          </p>
        </div>
      </footer>
    </>
  )
}
