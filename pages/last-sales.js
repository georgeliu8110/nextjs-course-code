import {useEffect, useState} from 'react'
import useSWR from 'swr';

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.totalSales);
  // const [isLoading, setIsLoading] = useState(false);

  const {data, error} = useSWR('https://nextjsdb-170f1-default-rtdb.firebaseio.com/sales.json', (url)=>
    fetch(url).then(res=>res.json()));

  console.log('data', data)

  useEffect(()=>{
    if(data) {
      const transformedSales = []
        for (let key in data) {
          let item = {id: key, username:data[key]['username'], volume: data[key]['volume'] };
          transformedSales.push(item)
        };
      setSales(transformedSales);
      }
  }, [data])

  // useEffect(()=>{
  //   setIsLoading(true)
  //   fetch('https://nextjsdb-170f1-default-rtdb.firebaseio.com/sales.json')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log('data', data)
  //     const transformedSales = []

  //     for (let key in data) {
  //        let item = {id: key, username:data[key]['username'], volume: data[key]['volume'] };
  //        transformedSales.push(item)
  //     };

  //     setSales(transformedSales);
  //     setIsLoading(false)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // }, []);

  if(error) {
    return <h2>Failed to fetch data!</h2>
  }

  if (!sales) {
    return <h2>Loading ....</h2>
  };

  return <ul>
    {sales.map(sale=><li key={sale.id}>
      {sale.username}, ${sale.volume}
    </li>)}
  </ul>
}


export async function getStaticProps(context) {

  const response = await fetch('https://nextjsdb-170f1-default-rtdb.firebaseio.com/sales.json')
  const data = await response.json();
  const transformedSales = []
      for (let key in data) {
         let item = {id: key, username:data[key]['username'], volume: data[key]['volume'] };
         transformedSales.push(item)
      };

  return {
    props: {
      totalSales:transformedSales
    }
  }
}
export default LastSalesPage;