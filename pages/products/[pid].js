import {Fragment} from 'react';
import fs from 'fs/promises';
import path from 'path';

function ProductDetialPage(props) {

  // if (!props.loadedProducts) {
  //   return <p>loading .....</p>
  // }

  return <Fragment>
    <h1>{props.loadedProducts.title}</h1>
    <p>{props.loadedProducts.description}</p>
  </Fragment>
};

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const {params} = context;
  const productId = params.pid

  const data = await getData();

const product = data.products.find(product => product.id === productId);

if (!product) {
  return {notFound: true}
};


return {
  props: {
    loadedProducts: product
  }
}
}

export async function getStaticPaths() {

  const data = await getData();
  const ids = data.products.map(product=>product.id)

  return {
    paths: ids.map(id=>({params: {pid: id}})),
    fallback: false
  }
}

export default ProductDetialPage;