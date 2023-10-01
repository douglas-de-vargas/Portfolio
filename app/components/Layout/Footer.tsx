function Footer() {
  return (
    <>
      <footer className='w-full py-2 bg-primary'>
        <div className='flex justify-center mx-auto w-full max-w-maxwidth text-sm'>
          <p>
            &copy; 2023{' '}
            <a
              href='https://www.linkedin.com/in/douglas-vargas-a517b2288'
              target='_blank'
              rel='noreferrer'>
              {' '}
              Douglas
            </a>
            , front-end developer.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
