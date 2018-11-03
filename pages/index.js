import Link from 'next/link'
import "../static/style/main.sass"
import NavigationSite from './../components/header';
import NavigationGlobal from './../components/header-global';
import HeadTag from './../components/head'
import FooterGlobal from '../components/footer';

const Index = () => (
    <div>
        <HeadTag></HeadTag>
        <NavigationGlobal></NavigationGlobal>
        <NavigationSite></NavigationSite>
        <div className="root">
            <main className="content">
                <section className="hero-start">
                    <div className="gradient"></div>
                    <div className="img-hero-home"></div>
                    <div className="text-content"></div>
                </section>
            </main>
        </div>
        <FooterGlobal></FooterGlobal>
    </div>
)

export default Index