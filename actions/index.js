import { useEffect, useState } from 'react'


export const useGetData = (url) => {

  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loadding, setLoadding] = useState(true)

  useEffect( () => {
    async function fetchData(){
      const res = await fetch(url);
      const result = await res.json();

      if (res.status !== 200){
        setError(result)
      } else {
        setData(result)
      }

      setLoadding(false)
    }

    url && fetchData();
  }, [])
  return {data, error, loadding}
}
