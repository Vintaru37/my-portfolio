//styles
import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
        <p className='copyright-text'>Copyright &copy; {new Date().getFullYear()} Bartosz Gortych</p>
    </footer>
  )
}