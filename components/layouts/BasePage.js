
const BasePage = props => {

  const { className = '', children} = props;
  
  return (
    <React.Fragment>
      <div className={`wa-base-page ${className}`}>
          {children}
      </div>
      <style jsx>
        {`
          .wa-base-page {
            width: 100%;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default BasePage;