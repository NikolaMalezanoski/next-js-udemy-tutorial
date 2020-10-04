

import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/layouts/BasePage'

import { withRouter, useRouter } from 'next/router'
import { useGetPostsByID } from '@/actions'

const Portfolio = () => {

  const router = useRouter()

  const { data: portfolio, error, loadding } =  useGetPostsByID(router.query.id)

  return (
    <BaseLayout>
      <BasePage>
        {error &&
          <div><h3>{error.message}</h3></div>
        }
        {loadding &&
          <div><h3>loading ...</h3></div>
        }
        {portfolio &&
          <>
            <h1>Im in the Portfolio page</h1>
            <h2>{portfolio.title}</h2>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        }
       
      </BasePage>
    </BaseLayout>
  )
}

export default withRouter(Portfolio)