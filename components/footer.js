import Link from 'next/link'

const FooterGlobal = () => (
    <footer class="global-footer">
        <section class="social-nav">
            <div class="wrapper">
                <nav>
                    <ul>
                        <li><a href="https://github.com/1uweb" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://medium.com/uwe-barthel" target="_blank"><i class="fab fa-medium"></i></a></li>
                        <li><a href="https://behance.net/uwe-barthel" target="_blank"><i class="fab fa-behance"></i></a></li>
                        <li><a href="https://dribbble.com/1uweb" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                    </ul>
                </nav>
            </div>
        </section>
        <section class="legal-nav">
            <div class="wrapper">
                <div class="copyright">©2018 Uwe Barthel</div>
                <nav>
                    <ul>
                        <li><a href="/rechtliches">Impressum</a></li>
                        <li><a href="/rechtliches">Datenschutz</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </footer>
)

export default FooterGlobal