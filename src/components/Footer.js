import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com/v_mcnett" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                     <li><a href="https://github.com/v-mcnett/" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2019</li>
                </ul>
            </section>
        )
    }
}

export default Footer
