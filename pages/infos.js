import Link from 'next/link'
import "../static/style/main.sass"
import NavigationSite from '../components/header';
import NavigationGlobal from '../components/header-global';
import Head from '../components/head'
import FooterGlobal from '../components/footer';

const Index = () => (
    <div>
        <Head></Head>
        <NavigationGlobal></NavigationGlobal>
        <NavigationSite></NavigationSite>
        <main className="root content">
            <section className="hero-start content-container-img">
                <div className="gradient"></div>
                <div className="img-hero-info"></div>
                <div className="text-hero">
                    <div className="wrapper">
                        <div class="t-hero">Projekt</div>
                        <hr></hr>
                        <h1 class="h-hero">Projekt Documentation</h1>
                        <div class="s-hero">Alle Infos & Quellen!</div>
                    </div>
                </div>
            </section>
            <section className="text-infos">
                <div className="wrapper">
                    <h1>Übersicht</h1>
                    <ul>
                        <li><Link href="#schueler"><a>Auflistung Schüler</a></Link></li>
                        <li><Link href="#themen"><a>Themen</a></Link></li>
                        <li><Link href="#texte"><a>Texte</a></Link></li>
                        <li><Link href="#quellen"><a>Quellen</a></Link></li>
                        <li><Link href="#credits"><a>Credits</a></Link></li>
                    </ul>
                    <h2 id="#schueler">Auflistung Schüler</h2>
                    <ul>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                        <li>Vorname Name</li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante tortor, feugiat ac elementum id, hendrerit vitae est. Vivamus sit amet massa lorem. Aenean tempus sodales quam, a rutrum justo. Nullam fringilla finibus orci. Vivamus ornare lorem in auctor venenatis. Aenean ac mi at lorem eleifend commodo sed quis neque. Ut imperdiet efficitur sodales. Fusce malesuada libero quis rhoncus tincidunt. Nam feugiat lacinia enim. Sed finibus interdum purus nec mattis. Quisque faucibus, metus non fermentum vestibulum, tellus nunc consequat eros, nec sagittis metus urna at metus. Aenean eleifend sapien ut convallis egestas. </p>
                    <h2 id="#themen">Themen</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante tortor, feugiat ac elementum id, hendrerit vitae est. Vivamus sit amet massa lorem. Aenean tempus sodales quam, a rutrum justo. Nullam fringilla finibus orci. Vivamus ornare lorem in auctor venenatis. Aenean ac mi at lorem eleifend commodo sed quis neque. Ut imperdiet efficitur sodales. Fusce malesuada libero quis rhoncus tincidunt. Nam feugiat lacinia enim. Sed finibus interdum purus nec mattis. Quisque faucibus, metus non fermentum vestibulum, tellus nunc consequat eros, nec sagittis metus urna at metus. Aenean eleifend sapien ut convallis egestas. </p>
                    <p>Morbi aliquam dui eget euismod dapibus. Aenean molestie ut quam id mattis. Vestibulum at leo maximus, pellentesque eros quis, venenatis ligula. Phasellus vestibulum metus sit amet odio molestie rutrum. Phasellus lobortis malesuada enim. Sed et imperdiet erat. Nam sit amet lacus orci. Vivamus sed egestas nisl. </p>
                    <p>Etiam hendrerit velit ornare, malesuada urna vitae, lacinia quam. Vivamus rutrum sagittis luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam in nunc enim. Praesent in dui at enim efficitur cursus varius ac dui. Quisque blandit arcu id sem feugiat congue. Donec justo risus, commodo sit amet justo vitae, pellentesque pulvinar diam. Ut convallis tortor nec urna iaculis, a pellentesque leo luctus. Nullam et aliquet ex. Aenean massa justo, sodales eget nunc ac, sodales ultricies lacus. </p>
                    <p>Sed eget tellus ac lectus rutrum consectetur. Mauris turpis lacus, vehicula ut egestas sed, aliquet a dui. Nunc ut luctus quam. Suspendisse potenti. Fusce iaculis sit amet turpis id pulvinar. Nunc vestibulum faucibus varius. Aliquam massa ante, ornare quis leo a, posuere mollis mauris. Sed ac tincidunt mi. Vivamus mattis aliquet purus id varius. Donec consectetur sollicitudin ultricies. Aliquam at porttitor justo. Sed a commodo odio, tristique accumsan dui. Suspendisse scelerisque ut magna a imperdiet. Aenean finibus erat sed maximus gravida. Mauris tristique mollis lacinia. </p>
                    <p>Curabitur consectetur diam eu nibh auctor mattis. Etiam cursus elit felis, sit amet blandit mauris suscipit ac. Proin rhoncus enim in nisl posuere rutrum. Vestibulum eu eros placerat, auctor eros eget, fringilla ipsum. Quisque ultricies, augue et dignissim consectetur, diam metus iaculis dui, et efficitur nulla nibh in ante. Sed condimentum nunc id magna auctor, vel commodo nulla commodo. Nam imperdiet arcu eu dui rutrum, sit amet euismod ipsum malesuada. </p>
                    <h2 id="#texte">Texte</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante tortor, feugiat ac elementum id, hendrerit vitae est. Vivamus sit amet massa lorem. Aenean tempus sodales quam, a rutrum justo. Nullam fringilla finibus orci. Vivamus ornare lorem in auctor venenatis. Aenean ac mi at lorem eleifend commodo sed quis neque. Ut imperdiet efficitur sodales. Fusce malesuada libero quis rhoncus tincidunt. Nam feugiat lacinia enim. Sed finibus interdum purus nec mattis. Quisque faucibus, metus non fermentum vestibulum, tellus nunc consequat eros, nec sagittis metus urna at metus. Aenean eleifend sapien ut convallis egestas. </p>
                    <p>Morbi aliquam dui eget euismod dapibus. Aenean molestie ut quam id mattis. Vestibulum at leo maximus, pellentesque eros quis, venenatis ligula. Phasellus vestibulum metus sit amet odio molestie rutrum. Phasellus lobortis malesuada enim. Sed et imperdiet erat. Nam sit amet lacus orci. Vivamus sed egestas nisl. </p>
                    <p>Etiam hendrerit velit ornare, malesuada urna vitae, lacinia quam. Vivamus rutrum sagittis luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam in nunc enim. Praesent in dui at enim efficitur cursus varius ac dui. Quisque blandit arcu id sem feugiat congue. Donec justo risus, commodo sit amet justo vitae, pellentesque pulvinar diam. Ut convallis tortor nec urna iaculis, a pellentesque leo luctus. Nullam et aliquet ex. Aenean massa justo, sodales eget nunc ac, sodales ultricies lacus. </p>
                    <p>Sed eget tellus ac lectus rutrum consectetur. Mauris turpis lacus, vehicula ut egestas sed, aliquet a dui. Nunc ut luctus quam. Suspendisse potenti. Fusce iaculis sit amet turpis id pulvinar. Nunc vestibulum faucibus varius. Aliquam massa ante, ornare quis leo a, posuere mollis mauris. Sed ac tincidunt mi. Vivamus mattis aliquet purus id varius. Donec consectetur sollicitudin ultricies. Aliquam at porttitor justo. Sed a commodo odio, tristique accumsan dui. Suspendisse scelerisque ut magna a imperdiet. Aenean finibus erat sed maximus gravida. Mauris tristique mollis lacinia. </p>
                    <p>Curabitur consectetur diam eu nibh auctor mattis. Etiam cursus elit felis, sit amet blandit mauris suscipit ac. Proin rhoncus enim in nisl posuere rutrum. Vestibulum eu eros placerat, auctor eros eget, fringilla ipsum. Quisque ultricies, augue et dignissim consectetur, diam metus iaculis dui, et efficitur nulla nibh in ante. Sed condimentum nunc id magna auctor, vel commodo nulla commodo. Nam imperdiet arcu eu dui rutrum, sit amet euismod ipsum malesuada. </p>
                    <h2 id="#quellen">Quellen</h2>
                    <ul>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                        <li><Link href="#"><a>Quelle</a></Link></li>
                    </ul>
                    <h2 id="#credits">Credits</h2>
                    <p>Diese Website wurde von <Link href="https://uwe-barthel.net"><a>Uwe Barthel</a></Link> erstellt und wird mit den JavaScript Framework NextJS betrieben.</p>
                </div>
            </section>
        </main>
        <FooterGlobal></FooterGlobal>
    </div>
)

export default Index