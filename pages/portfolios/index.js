import BaseLayout from '@/components/layouts/BaseLayout'
import BasePage from '@/components/layouts/BasePage'
import Link from 'next/link'
import { useGetPosts } from '@/actions'



const Portfolios = () => {

  const {data, error, loadding} = useGetPosts('/api/v1/posts' )

  const rendetPosts = (posts) => {
    return posts.map( post =>       
      <li key={post.id}>
        <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
          <a>{post.title}</a>
        </Link>
      </li>
   )
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1>Im in the Portfolios page</h1>
        
        { data &&
          <ul>
            { rendetPosts( data ) }
          </ul>
        }
        { error &&
          <div><h3>{error.message}</h3></div>
        }
        { loadding &&
          <div><h3>loading ...</h3></div>
        }
      </BasePage>
    </BaseLayout>
  )
}

export default Portfolios; 