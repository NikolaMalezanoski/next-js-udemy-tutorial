import useSWR from 'swr'

const fetcher = (url) => 
  fetch(url).then(async res=> {
    const result = await res.json()
    if (res.status !== 200){
      return Promise. reject(result)
    } else {
      return result;
    }
  })


  export const useGetPosts = () => {
  const {data, error, ...rest} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher )
  return {data , error, loadding: !data && !error, ...rest}
}

export const useGetPostsByID = (id) => {
  const {data, error, ...rest} = useSWR(id ? `https://jsonplaceholder.typicode.com/posts/${id}`: null, fetcher )
  return {data , error, loadding: !data && !error, ...rest}
}
