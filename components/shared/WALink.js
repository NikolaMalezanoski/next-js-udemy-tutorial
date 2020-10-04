import React from 'react'
import Link from 'next/link'

const WALink = ({title, href, className }) => {
    return(
      <React.Fragment>
      <Link href={href}><a className={`wa-link ${className}`}>{title}</a></Link>
      <style jsx>
          {`
            .wa-link {
              display: inline-block;
              margin: 20px
            }
            .float-right{
              float:right
            }
          `}
        </style>
      </React.Fragment>
    )
  
}

export default WALink

