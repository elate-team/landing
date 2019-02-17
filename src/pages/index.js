import React, { Component } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Fade from 'react-reveal/Fade';

import Layout from '../components/layout'
import SEO from '../components/seo'

import mouseImg from '../images/mouse.png'
import elateImg from '../images/robot.png'
import rejdaImg from '../images/lukasrejda.png'

class IndexPage extends Component {

    state = {
        step: 1
    }

    componentDidMount = () => {
        window.fullpage_api.destroy()
    }

    handleClick = () => {
        this.setState({step: 2}, () => {
            window.fullpage_api.reBuild()
            window.fullpage_api.moveSectionDown()
        })
    }

    render = () => {
        const { step } = this.state

        return (
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

                <ReactFullpage
                    render={({ state, fullpageApi }) => (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <p className="sm">I malý</p>

                                <span className="pulse"></span>

                                <div className="select">
                                    <div className="option" onClick={this.handleClick}>
                                        <div className="label">Cíl</div>
                                        <div className="desc">Cíl může být: nějaká meta, stav, uspořádání, objekt, kterého má být v reálném čase dosaženo</div>
                                    </div>
                                    <div className="option" onClick={this.handleClick}>
                                        <div className="label">Sen</div>
                                        <div className="desc">Sny často ukazují události, které jsou ve skutečnosti nemožné nebo nepravděpodobné</div>
                                    </div>
                                    <div className="option" onClick={this.handleClick}>
                                        <div className="label">Přání</div>
                                        <div className="desc">Něco, co byste ač už tajně či veřejně chtěli dostat nebo dát</div>
                                    </div>
                                </div>

                                <p className="sm">Ti udělá</p>
                                <p className="big upper">radost</p>
                                <div className="scroll"><img src={mouseImg} /></div>
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
