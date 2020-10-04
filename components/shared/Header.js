
import React from "react"

import WALink from '@/components/shared/WALink'

class Header extends React.Component{

  render(){
    return (
      <React.Fragment>
        <nav>
          <WALink href="/" title='Home' />
          <WALink href="/about" title='Abount' />
          <WALink href="/portfolios" title='Portfolios' />
          <WALink href="/cv" title='CV' />
          <WALink href="/logout" title='Logout' className='float-right' />
          <WALink href="/login" title='Login' className='float-right' />
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