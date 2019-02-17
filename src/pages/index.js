import React, { Component } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import SEO from '../components/seo'

import mouseImg from '../images/mouse.png'
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
        window.fullpage_api.destroy()
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

    handleClick = (whatever) => {
        this.setState({
            step: 2,
            whatever,
            whateverVisible: false
        }, () => {
            setTimeout(() => {
                window.fullpage_api.reBuild()
                window.fullpage_api.moveSectionDown()
            }, 2500)
        })
    }

    render = () => {
        const { step, whatever, whateverVisible, whatever1Visible, whatever2Visible, whatever3Visible } = this.state

        return (
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

                <ReactFullpage
                    render={({ state, fullpageApi }) => (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <p className="sm" style={{marginBottom: '50px'}}>I malý</p>

                                <div
                                    onMouseEnter={() => this.setState({whateverVisible: true})}
                                    onMouseLeave={() => this.setState({whateverVisible: false})}
                                >
                                    <span className="pulse"></span>

                                    <div className={(whatever || whateverVisible) ? 'select' : 'select hidden'}>
                                        <div
                                            className="option"
                                            onClick={() => this.handleClick('destination')}
                                            onMouseEnter={() => this.setState({whatever1Visible: true})}
                                            onMouseLeave={() => this.setState({whatever1Visible: false})}
                                        >
                                            <div className="label">Cíl</div>
                                            <div className={whatever1Visible ? 'desc' : 'desc hidden'}>Cíl může být: nějaká meta, stav, uspořádání, objekt, kterého má být v reálném čase dosaženo</div>
                                            <div className={whatever1Visible ? 'choose' : 'choose hidden'}>Vybrat</div>
                                        </div>
                                        <div
                                            className="option"
                                            onClick={() => this.handleClick('dream')}
                                            onMouseEnter={() => this.setState({whatever2Visible: true})}
                                            onMouseLeave={() => this.setState({whatever2Visible: false})}
                                        >
                                            <div className="label">Sen</div>
                                            <div className={whatever2Visible ? 'desc' : 'desc hidden'}>Sny často ukazují události, které jsou ve skutečnosti nemožné nebo nepravděpodobné</div>
                                            <div className={whatever2Visible ? 'choose' : 'choose hidden'}>Vybrat</div>
                                        </div>
                                        <div
                                            className="option"
                                            onClick={() => this.handleClick('wish')}
                                            onMouseEnter={() => this.setState({whatever3Visible: true})}
                                            onMouseLeave={() => this.setState({whatever3Visible: false})}
                                        >
                                            <div className="label">Přání</div>
                                            <div className={whatever3Visible ? 'desc' : 'desc hidden'}>Něco, co byste ač už tajně či veřejně chtěli dostat nebo dát</div>
                                            <div className={whatever3Visible ? 'choose' : 'choose hidden'}>Vybrat</div>
                                        </div>
                                    </div>
                                </div>

                                <div className={whatever ? 'joy' : 'joy hidden'}>
                                    <p className="sm">Ti udělá</p>
                                    <p className="big upper" style={{marginBottom: '50px'}}>radost</p>
                                    <div className="scroll"><img src={mouseImg} /></div>
                                </div>
                            </div>

                            {step > 1 &&
                                <div className="section">
                                    <p className="sm">Na tvůj</p>
                                    <p>whatever</p>
                                    <p className="sm">přece nikdy není</p>
                                    <p className="big">pozdě</p>

                                    <div className="scroll"><img src={mouseImg} /></div>
                                </div>
                            }

                            {step > 1 &&
                                <div className="section">
                                    <p className="sm">Jmenuju se</p>
                                    <p className="big">Elate</p>
                                    <img src={elateImg} />
                                    <p className="sm">a pomůžu</p>
                                    <p className="sm">ti tvůj <b>sen</b> splnit</p>

                                    <button>Vyzkoušet</button>
                                </div>
                            }

                            {step > 1 &&
                                <div className="section">
                                    <p className="sm">Na tvůj</p>
                                    <p>whatever</p>
                                    <p className="sm">přece nikdy není</p>
                                    <p className="big">pozdě</p>
                                    <img src={rejdaImg} />
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
