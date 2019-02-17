import React from 'react'
import { Link } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

        <ReactFullpage
            render={({ state, fullpageApi }) => (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <Link to="/page-2/">Go to page 2</Link>
                        <button onClick={() => fullpageApi.moveSectionDown()}>
                            Click me to move down
                        </button>
                    </div>
                    <div className="section">
                    </div>
                    <div className="section">
                    </div>
                    <div className="section">
                    </div>
                </ReactFullpage.Wrapper>
            )}
        />
    </Layout>
)

export default IndexPage
