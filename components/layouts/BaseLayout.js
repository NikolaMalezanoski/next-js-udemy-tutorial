import Header from '@/components/shared/Header'


const BaseLayout = props => {

  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default BaseLayout