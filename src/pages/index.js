import React, { Component } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Fade from 'react-reveal/Fade'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'

import dreamImg from '../images/dream.png'
import elateImg from '../images/robot.png'
import rejdaImg from '../images/lukasrejda.png'

class IndexPage extends Component {

    state = {
        step: 1,
        whatever: null,
        whateverVisible: false,
        whatever1Visible: false,
        whatever2Visible: false,
        whatever3Visible: false
    }

    componentDidMount = () => {
        window.fullpage_api.setAllowScrolling(false)
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

    getWhateverSuffix = () => {
        const { whatever } = this.state

        switch(whatever) {
            case 'wish':
                return 'é'

            default:
                return 'ý'
        }
    }

    handleClick = (whatever) => {
        this.setState({
            step: 2,
            whatever,
            whateverVisible: false
        }, () => {
            setTimeout(() => window.fullpage_api.setAllowScrolling(true), 2500)
        })
    }

    render = () => {
        const { step, whatever, whateverVisible, whatever1Visible, whatever2Visible, whatever3Visible } = this.state

        return (
            <Layout>
                {/*<SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>*/}
                <Helmet title="Elate" />

                <ReactFullpage
                    onLeave={console.log}
                    licenseKey={`PW%.tHBlBI[>'jK[3iFFLQchzobkcD!wMh+O>9l(W[2RUJ 7Y 4KfUomCv-lf964o9Q-YyUbRFz2-_3rBRfnb x\`lIcP>&;F|fm73p,)t.)KG\\-m$UbM.C@fI!IV%e] =6TF313fX*zY)KNI[:~F|*;rO'nfSgP3i(Xb{0 6V2&av5:XL'b!],_U[b;?a_G.*DYo2VC2E}==Hl4A]z-0 |EFr3rwHP>x$C!)[cSI*C/_ adt}\`|K-fIVF[%Pm&w 44H|LC)W[VPBIst\`(6>lStaew9Jw|d|1nB\\t~fD\`,a!x]Kcg9gspTWJab%!GA^Kc(_W"wI\`)hk]7T\\:%51kOX`}
                    render={({ state, fullpageApi }) => (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <p className="sm m2050">I mal{this.getWhateverSuffix()}</p>

                                <div
                                    onMouseEnter={() => this.setState({whateverVisible: true})}
                                    onMouseLeave={() => this.setState({whateverVisible: false})}
                                >
                                    <span className="pulse" onClick={() => this.setState({whateverVisible: true, whatever1Visible: true, whatever2Visible: true, whatever3Visible: true})}></span>

                                    <div className={(whatever || whateverVisible) ? 'select' : 'select hidden'}>
                                        <div
                                            className="option"
                                            onClick={() => this.handleClick('destination')}
                                            onMouseEnter={() => this.setState({whatever1Visible: true})}
                                            onMouseLeave={() => this.setState({whatever1Visible: false})}
                                        >
                                            <div className={(whatever === 'destination' || whateverVisible) ? 'label' : 'label hidden'}>Cíl</div>
                                            <div className={whatever1Visible ? 'desc' : 'desc hidden'}>Cíl může být: nějaká meta, stav, uspořádání, objekt, kterého má být v reálném čase dosaženo</div>
                                            <div className={whatever1Visible ? 'choose' : 'choose hidden'}>Vybrat</div>
                                        </div>
                                        <div
                                            className="option"
                                            onClick={() => this.handleClick('dream')}
                                            onMouseEnter={() => this.setState({whatever2Visible: true})}
                                            onMouseLeave={() => this.setState({whatever2Visible: false})}
                                        >
                                            <div className={(whatever === 'dream' || whateverVisible) ? 'label' : 'label hidden'}>Sen</div>
                                            <div className={whatever2Visible ? 'desc' : 'desc hidden'}>Sny často ukazují události, které jsou ve skutečnosti nemožné nebo nepravděpodobné</div>
                                            <div className={whatever2Visible ? 'choose' : 'choose hidden'}>Vybrat</div>
                                        </div>
                                        <div
                                            className="option"
                                            onClick={() => this.handleClick('wish')}
                                            onMouseEnter={() => this.setState({whatever3Visible: true})}
                                            onMouseLeave={() => this.setState({whatever3Visible: false})}
                                        >
                                            <div className={(whatever === 'wish' || whateverVisible) ? 'label' : 'label hidden'}>Přání</div>
                                            <div className={whatever3Visible ? 'desc' : 'desc hidden'}>Něco, co byste ač už tajně či veřejně chtěli dostat nebo dát</div>
                                            <div className={whatever3Visible ? 'choose' : 'choose hidden'}>Vybrat</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={whatever ? 'joy' : 'joy hidden'}>
                                    <p className="sm" style={{margin: '10px 0 20px'}}>Ti udělá</p>
                                    <p className="big upper" style={{marginBottom: '50px'}}>radost</p>
                                    <div className="scroll-downs">
                                        <div className="mousey">
                                            <div className="scroller"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {step > 1 &&
                                <div className="section">
                                    <p className="sm" style={{marginBottom: '50px'}}>Na {this.getWhateverPrep()}</p>

                                    <Fade right>
                                        <div className="scroll" style={{width: '92px', marginBottom: '20px'}}><img src={dreamImg} /></div>
                                        <p className="blue upper" style={{fontSize: '1.1em', textAlign: 'center', marginBottom: '50px'}}>{this.getWhatever()}</p>
                                    </Fade>

                                    <p className="sm" style={{margin: '10px 0 20px'}}>přece nikdy není</p>
                                    <p className="big upper" style={{marginBottom: '50px'}}>pozdě</p>
                                    <div className="scroll-downs">
                                        <div className="mousey">
                                            <div className="scroller"></div>
                                        </div>
                                    </div>
                                </div>
                            }

                            {step > 1 &&
                                <div className="section">
                                    <p className="sm" style={{marginBottom: '30px'}}>Jmenuju se</p>

                                    <Fade right>
                                        <p className="blue upper" style={{fontSize: '2em', textAlign: 'center', marginBottom: '20px'}}>Elate</p>
                                        <div className="scroll" style={{width: '130px', marginBottom: '30px'}}><img src={elateImg} /></div>
                                    </Fade>

                                    <Fade bottom>
                                        <p className="sm" style={{margin: '10px 0 20px'}}>a pomůžu</p>
                                    </Fade>

                                    <Fade bottom>
                                        <p className="sm" style={{margin: '10px 0 50px'}}>Ti tvůj <b className="blue upper">sen</b> splnit</p>
                                    </Fade>

                                    <Fade bottom>
                                        <button className="full">Vyzkoušet</button>
                                    </Fade>
                                </div>
                            }

                            {step > 1 &&
                                <div className="section">
                                    <Fade top>
                                        <p className="big upper blue" style={{marginBottom: '30px'}}>Děkuji</p>
                                    </Fade>

                                    <p className="sm" style={{marginBottom: '15px'}}>Momentálně mi pomoháš splnit můj sen.</p>

                                    <div className="progress">
                                        <div className="fill" stye={{width: '33%'}}></div>
                                    </div>

                                    <p className="sm" style={{marginBottom: '30px', fontSize: '.85em'}}>Aspoň sis dokázal, jak důležitá je asistence při plnění snu.</p>

                                    <Fade right>
                                        <div className="scroll" style={{width: '150px', marginBottom: '30px'}}><img src={rejdaImg} /></div>
                                    </Fade>

                                    <p className="sm" style={{marginBottom: '30px'}}>Zanech mi kontakt a buď u toho, bude to velké!</p>

                                    <Fade bottom>
                                        <div className="btns">
                                            <button>Tel.</button>
                                            <button>E-mail</button>
                                        </div>
                                    </Fade>
                                </div>
                            }
                        </ReactFullpage.Wrapper>
                    )}
                />
            </Layout>
        )
    }

}

export default IndexPage
