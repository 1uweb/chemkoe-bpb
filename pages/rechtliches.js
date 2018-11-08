import Link from 'next/link'
import "../static/style/main.sass"
import NavigationSite from '../components/header';
import NavigationGlobal from '../components/header-global';
import Head from '../components/head'
import FooterGlobal from '../components/footer';
import Recht from '../components/recht';

const Index = () => (
    <div>
        <Head></Head>
        <NavigationGlobal></NavigationGlobal>
        <Recht></Recht>
        <NavigationSite></NavigationSite>
        <FooterGlobal></FooterGlobal>
    </div>
)

export default Index