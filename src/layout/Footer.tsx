function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='text-onSecondary-light dark:text-onSecondary-dark  p-3 py-4 text-center'>
      &copy; Copyright {currentYear} - Ibrahima Sylla
    </div>
  )
}

export default Footer
