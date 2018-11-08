import Link from 'next/link'
import "../static/style/main.sass"
import NavigationSite from './../components/header';
import NavigationGlobal from './../components/header-global';
import HeadTag from './../components/head'
import FooterGlobal from '../components/footer';

const Index = () => (
    <div className="next-container">
        <HeadTag></HeadTag>
        <NavigationGlobal></NavigationGlobal>
        <NavigationSite></NavigationSite>
        <div className="next-root">
            <main className="content">
                <section className="hero-start content-container-img">
                    <div className="gradient"></div>
                    <div className="img-hero-home"></div>
                    <div className="text-hero">
                        <div className="wrapper">
                            <div class="t-hero">Projekt</div>
                            <hr></hr>
                            <h1 class="h-hero">Schülerwettbewerb der BpB (GK Projekt)</h1>
                            <div class="s-hero">Projektseite</div>
                        </div>
                    </div>
                </section>
                <section className="info-text content-container">
                    <div className="wrapper">
                        <h1>Chemnitz ist anders!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit consectetur rhoncus. Donec nec risus vitae mauris feugiat lobortis. Cras ut viverra sem. In eget dolor sed ante pellentesque ultrices non in lacus. Cras at mi eleifend, sagittis quam vel, commodo neque. Mauris tempus dolor venenatis erat sodales blandit. Donec tempor ex sed nisl efficitur, quis vehicula purus gravida. Aliquam tincidunt metus et lorem maximus efficitur. Curabitur neque arcu, fermentum vitae dui a, sagittis dictum leo. Morbi sagittis purus id orci ultricies dapibus. Morbi condimentum nunc id scelerisque dapibus. Sed non ipsum sed risus lacinia bibendum a a lorem. Integer rutrum nunc ac magna elementum, vitae semper sapien rhoncus. Cras bibendum tristique orci, eu placerat eros elementum eget. </p>
                    </div>
                </section>
                <section className="video-frame content-container" id="video">
                    <div className="vid">
                        <div className="wrapper">
                            <h1>Das Video zum Projekt</h1>
                            <video controls>
                                <source src="https://cdn.uwe-barthel.net/koeprojekt/video/koe/breath_ctrl%20(loop).mp4" type="video/webm"></source>
                                <source src="https://cdn.uwe-barthel.net/koeprojekt/video/koe/breath_ctrl%20(loop).mp4" type="video/mp4"></source>
                            </video>
                            <p>Dieses Video ist im Rahmen des Projekts entstanden</p>
                        </div>
                    </div>
                </section>
                <section className="weiter-text content-container">
                    <div className="wrapper">
                        <h1>Interresse geweckt?</h1>
                        <p>Wenn sie mehr über das Projekt & den Wettbewerb erfahren wollen? Unterhalb finden sie eine Liste mit nützlichen Links:</p>
                        <ul>
                            <li><Link href="https://www.bpb.de/lernen/schuelerwettbewerb/"><a>Schülerwettbewerb zur politischen Bildung | bpb</a></Link></li>
                            <li><Link href="https://www.bpb.de/system/files/dokument_pdf/bpb_SW_Aufgabenheft_Web_26-09-2018.pdf"><a>Aufgabenheft bpb Schülerwettbewerb 2018/2019</a></Link></li>
                        </ul>
                        <Link href="/infos"><a><button>mehr Erfahren</button></a></Link>
                    </div>
                </section>
            </main>
        </div>
        <FooterGlobal></FooterGlobal>
    </div>
)

export default Index