import FullBleed from '@/components/FullBleed'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import Link from 'next/link'

const Footer = () => {
  return (
    <FullBleed className="full-bleed bg-gray-100 mt-16">
      <Container>
        <footer className="py-16 text-gray-800 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Logo />
            <div className="leading-relaxed text-lg -mt-1">
              <ul>
                <li>
                  <Link href="https://github.com/mattiel">
                    <a>Github</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/jsmattly/">
                    <a>LinkedIn</a>
                  </Link>
                </li>
              </ul>
            </div>
            <a className="">
              hello@mattiel.dev
            </a>
          </div>
        </footer>
      </Container>
    </FullBleed>
  );
};

export default Footer;