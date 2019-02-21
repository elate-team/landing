import React, { Component } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'
import axios from 'axios'

import Layout from '../components/layout'
import SEO from '../components/seo'

import dreamImg from '../images/dream.png'
import elateImg from '../images/robot.png'
import rejdaImg from '../images/lukasrejda.png'

class IndexPage extends Component {

    state = {
        step: 1,
        whatever: null,
        mobileSelectVisible: false,
        phone: '',
        email: '',
        error: '',
        success: false
    }

    componentDidMount = () => {
        window.fullpage_api.setAllowScrolling(false)

        ReactGA.initialize('UA-134679279-1');
        ReactGA.pageview(window.location.pathname);
    }

    getWhatever = () => {
        const { whatever } = this.state

        switch(whatever) {
            case 'destination':
                return 'Cíl'

            case 'dream':
                return 'Sen'

            case 'wish':
                return 'Přání'
        }
    }

    getWhateverPrep = () => {
        const { whatever } = this.state

        switch(whatever) {
            case 'wish':
                return 'tvoje'

            default:
                return 'tvůj'
        }
    }

    handleCTAClick = () => {
        ReactGA.event({
            category: 'User',
            action: `Wants to try it!`
        })

        window.fullpage_api.moveSectionDown()
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { phone, email } = this.state

        if(!email.length || !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) return this.setState({error: 'E-mail není ve správném formátu'})
        if(!phone.length || !/(^$|^(\+)?[0-9\ ]{4,16}$)/.test(phone)) return this.setState({error: 'Telefon není ve správném formátu'})

        this.setState({error: ''})

        // const headers = {
        //     'Access-Control-Request-Method': 'POST'
        // }

        axios.post('https://api.elate.cz/leads', {phone, email})
            .then(() => this.setState({success: true}))
            .catch(console.error)
    }

    handleClick = (whatever) => {
        ReactGA.event({
            category: 'User',
            action: `Selected ${whatever}`
        })

        this.setState({whatever}, () => {
            setTimeout(() => window.fullpage_api.setAllowScrolling(true), 2500)
        })
    }

    slideCheck = (from, to) => {
        if(to.index === 2) window.fullpage_api.setAllowScrolling(false)
        if(this.state.step !== to.index + 1) this.setState({step: to.index + 1})
    }

    render = () => {
        const { step, whatever, phone, email, error, success, mobileSelectVisible } = this.state

        return (
            <Layout>
                {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>*/}
                <Helmet title="Elate" />

                <ReactFullpage
                    onLeave={this.slideCheck}
                    licenseKey={`PW%.tHBlBI[>'jK[3iFFLQchzobkcD!wMh+O>9l(W[2RUJ 7Y 4KfUomCv-lf964o9Q-YyUbRFz2-_3rBRfnb x\`lIcP>&;F|fm73p,)t.)KG\\-m$UbM.C@fI!IV%e] =6TF313fX*zY)KNI[:~F|*;rO'nfSgP3i(Xb{0 6V2&av5:XL'b!],_U[b;?a_G.*DYo2VC2E}==Hl4A]z-0 |EFr3rwHP>x$C!)[cSI*C/_ adt}\`|K-fIVF[%Pm&w 44H|LC)W[VPBIst\`(6>lStaew9Jw|d|1nB\\t~fD\`,a!x]Kcg9gspTWJab%!GA^Kc(_W"wI\`)hk]7T\\:%51kOX`}
                    render={({ state, fullpageApi }) => (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <p className="sm m2050">Splnit si i nejmenší</p>

                                <div className="hoverable">
                                    <span className="pulse" onClick={() => this.setState({mobileSelectVisible: true})}></span>

                                    <div className={(mobileSelectVisible && !whatever) ? 'select mobile' : 'select mobile hidden'}>
                                        <div className="option" onClick={() => this.handleClick('destination')}>
                                            <div className="label">Cíl</div>
                                            <div className="desc">…je výhra, zisk a důvod, proč jít dál. Vidíš ho před sebou? Tak se mu přibliž, jak jen to jde, chyť ho a nepusť…</div>
                                            <div className="choose">Vybrat</div>
                                        </div>
                                        <div className="option" onClick={() => this.handleClick('dream')}>
                                            <div className="label">Sen</div>
                                            <div className="desc">…dokáže probudit tvá pravé já, odhalit vize i skutečnou touhu po tom, kým chceš být. Přiměje tě otevřít oči a vydat se dál…</div>
                                            <div className="choose">Vybrat</div>
                                        </div>
                                        <div className="option" onClick={() => this.handleClick('wish')}>
                                            <div className="label">Přání</div>
                                            <div className="desc">…získat i dávat, přijímat i nabídnout. Jen ty rozhoduješ, komu dnes rozzáří tvář úsměv. Jen ty máš dnes možnost stát se vítězem…</div>
                                            <div className="choose">Vybrat</div>
                                        </div>
                                    </div>

                                    <div className={!whatever ? 'select tablet' : 'select tablet hidden'}>
                                        <div className="option" onClick={() => this.handleClick('destination')}>
                                            <div className="label">Cíl</div>
                                            <div className="desc">…je výhra, zisk a důvod, proč jít dál. Vidíš ho před sebou? Tak se mu přibliž, jak jen to jde, chyť ho a nepusť…</div>
                                            <div className="choose">Vybrat</div>
                                        </div>
                                        <div className="option" onClick={() => this.handleClick('dream')}>
                                            <div className="label">Sen</div>
                                            <div className="desc">…dokáže probudit tvá pravé já, odhalit vize i skutečnou touhu po tom, kým chceš být. Přiměje tě otevřít oči a vydat se dál…</div>
                                            <div className="choose">Vybrat</div>
                                        </div>
                                        <div className="option" onClick={() => this.handleClick('wish')}>
                                            <div className="label">Přání</div>
                                            <div className="desc">…získat i dávat, přijímat i nabídnout. Jen ty rozhoduješ, komu dnes rozzáří tvář úsměv. Jen ty máš dnes možnost stát se vítězem…</div>
                                            <div className="choose">Vybrat</div>
                                        </div>
                                    </div>

                                </div>

                                <div className={!!whatever ? 'animated active' : 'animated'}>
                                    <p className="big blue" style={{margin: '10px 0 20px'}}>{this.getWhatever()}</p>
                                </div>

                                <div className={!!whatever ? 'animated active' : 'animated'} style={{transitionDelay: '.5s'}}>
                                    <p className="sm" style={{margin: '10px 0 20px'}}>Ti udělá</p>
                                </div>

                                <div className={!!whatever ? 'animated active' : 'animated'} style={{transitionDelay: '1s'}}>
                                    <p className="big upper" style={{marginBottom: '50px'}}>radost</p>
                                </div>

                                <div className={!!whatever ? 'animated active' : 'animated'} style={{transitionDelay: '1.5s'}}>
                                    <div className="scroll-downs">
                                        <div className="mousey">
                                            <div className="scroller"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="section">
                                <p className="sm" style={{marginBottom: '50px'}}>Na {this.getWhateverPrep()}</p>

                                <div className={step === 2 ? 'animated active' : 'animated'}>
                                    <div className="scroll" style={{width: '92px', marginBottom: '20px'}}><img src={dreamImg} /></div>
                                    <p className="blue upper" style={{fontSize: '1.1em', textAlign: 'center', marginBottom: '50px'}}>{this.getWhatever()}</p>
                                </div>

                                <div className={step === 2 ? 'animated active' : 'animated'} style={{transitionDelay: '.5s'}}>
                                    <p className="sm" style={{margin: '10px 0 20px'}}>přece nikdy není</p>
                                </div>

                                <div className={step === 2 ? 'animated active' : 'animated'} style={{transitionDelay: '1s'}}>
                                    <p className="big upper" style={{marginBottom: '50px'}}>pozdě</p>
                                </div>

                                <div className={step === 2 ? 'animated active' : 'animated'} style={{transitionDelay: '1.5s'}}>
                                    <div className="scroll-downs">
                                        <div className="mousey">
                                            <div className="scroller"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section">
                                <p className="sm" style={{marginBottom: '30px'}}>Jmenuju se</p>

                                <div className={step === 3 ? 'animated active' : 'animated'}>
                                    <p className="blue upper" style={{fontSize: '2em', textAlign: 'center', marginBottom: '20px'}}>Elate</p>
                                    <div className="scroll" style={{width: '130px', marginBottom: '30px'}}><img src={elateImg} /></div>
                                </div>

                                <div className={step === 3 ? 'animated active' : 'animated'} style={{transitionDelay: '.5s'}}>
                                    <p className="sm" style={{margin: '10px 0 20px'}}>a pomůžu</p>
                                </div>

                                <div className={step === 3 ? 'animated active' : 'animated'} style={{transitionDelay: '1s'}}>
                                    <p className="sm" style={{margin: '10px 0 50px'}}>Ti tvůj <b className="blue upper">sen</b> splnit</p>
                                </div>

                                <div className={step === 3 ? 'animated active' : 'animated'} style={{transitionDelay: '1.5s'}}>
                                    <button className="full" onClick={this.handleCTAClick}>Vyzkoušet</button>
                                </div>
                            </div>

                            <div className="section">
                                <div className={step === 4 ? 'animated active' : 'animated'}>
                                    <p className="big upper blue" style={{marginBottom: '30px'}}>Děkuji</p>
                                </div>

                                <div className={step === 4 ? 'animated active' : 'animated'} style={{transitionDelay: '.5s'}}>
                                    <p className="sm" style={{marginBottom: '15px'}}>Momentálně mi pomoháš splnit můj sen.</p>
                                </div>

                                {/*<div className={step === 4 ? 'animated active' : 'animated'} style={{transitionDelay: '1s'}}>
                                    <div className="progress">
                                        <div className="fill" stye={{width: '33%'}}></div>
                                    </div>
                                </div>*/}

                                <div className={step === 4 ? 'animated active' : 'animated'} style={{transitionDelay: '1s'}}>
                                    <p className="sm" style={{marginBottom: '30px', fontSize: '.85em'}}>Aspoň sis dokázal, jak důležitá je asistence při plnění snu.</p>
                                </div>

                                <div className={step === 4 ? 'animated active' : 'animated'} style={{transitionDelay: '1.5s'}}>
                                    <div className="scroll lukin" style={{marginBottom: '20px'}}><img src={rejdaImg} /></div>
                                </div>

                                <div className={step === 4 ? 'animated active' : 'animated'} style={{transitionDelay: '2s'}}>
                                    <p className="sm" style={{marginBottom: '30px'}}>Zanech mi kontakt a buď u toho, bude to velké!</p>
                                </div>

                                <div className={step === 4 ? 'animated active' : 'animated'} style={{transitionDelay: '2.5s'}}>
                                    <form onSubmit={this.handleSubmit}>
                                        {!success ?
                                            <div>
                                                <input type="text" value={phone} onChange={e => this.setState({phone: e.target.value})} placeholder="Tel." />
                                                <input type="text" value={email} onChange={e => this.setState({email: e.target.value})} placeholder="E-mail" />
                                                <button>Odeslat</button>
                                            </div> :
                                            <div className="thanks">Děkujeme!</div>
                                        }
                                    </form>
                                </div>
                            </div>
                        </ReactFullpage.Wrapper>
                    )}
                />
            </Layout>
        )
    }

}

export default IndexPage
