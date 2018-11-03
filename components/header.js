import Link from 'next/link'

const NavigationSite = () => (
    <header className="site-nav" id="nav-site">
        <div className="wrapper">
            <Link href="/" className="text-site"><a className="text-site">Chemnitz Projekt</a></Link>
            <nav>
                <ul>
                    <li className="start"><Link href="/"><a>Start</a></Link></li>
                    <li><Link href="#video"><a>Video</a></Link></li>
                    <li><Link href="/bilder"><a>Bilder</a></Link></li>
                    <li className="end"><Link href="/klasse"><a>Die Klasse</a></Link></li>
                </ul>
            </nav>
        </div>
    </header>
)

export default NavigationSite