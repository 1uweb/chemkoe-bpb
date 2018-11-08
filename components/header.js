import Link from 'next/link'

const NavigationSite = () => (
    <header className="site-nav" id="nav-site">
        <div className="wrapper">
            <Link href="/" className="text-site"><a className="text-site">Chemnitz Projekt</a></Link>
            <nav>
                <ul>
                    <li className="start"><Link href="/"><a>Start</a></Link></li>
                    <li><Link href="/infos"><a>Informationen</a></Link></li>
                    <li><Link href="/rechtliches"><a>Rechtliches</a></Link></li>
                    <li className="end"><Link href="https://blog.uwe-barthel.net/special"><a target="_blank">Updates</a></Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default NavigationSite