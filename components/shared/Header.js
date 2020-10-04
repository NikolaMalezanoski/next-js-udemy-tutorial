
import React from "react"

import WALink from '@/components/shared/WALink'
import auth0 from '@/services/auth0'

class Header extends React.Component{

  render(){
    return (
      <React.Fragment>
        <nav>
          <WALink href="/" title='Home' />
          <WALink href="/about" title='Abount' />
          <WALink href="/portfolios" title='Portfolios' />
          <WALink href="/cv" title='CV' />
          <WALink href="" title='Logout' className='float-right' onClick={auth0.logout} />
          <WALink href="" title='Login' className='float-right' onClick={auth0.login} />
        </nav>
        <style jsx>
          {`
            .wa-link {
              display: inline-block;
              margin: 20px
            }
          `}
        </style>
      </React.Fragment>
      )
  }

}

export default Header