import Link from 'next/link'

const NavigationGlobal = () => (
    <header className="global-nav">
        <div className="wrapper">
            <nav className="navigation">
                <ul>
                    <li className="start"><Link href="https://www.uwe-barthel.net/portfolio"><a>Portfolio</a></Link></li>
                    <li><Link href="https://www.uwe-barthel.net/ueber"><a>Über Mich</a></Link></li>
                    <li><Link href="https://blog.uwe-barthel.net"><a>Blog</a></Link></li>
                    <li className="end"><Link href="https://www.uwe-barthel.net/projekte"><a>Projekte</a></Link></li>
                </ul>
            </nav>
            <Link href="https://www.uwe-barthel.net" className="logo-global"><a className="logo-global"></a></Link>
        </div>
    </header>
)

export default NavigationGlobal