import React from 'react';
import axios from 'axios';
  
import Link from 'next/link'
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

const Detail = ({user})=>(
  <div>
    <Head>
      <title>Detail {user.login}</title>
    </Head>
    <img src={user.avatar_url} width="200" />
    <h1>{user.login}</h1>
    <Link href="/users"><a>Usuários</a></Link>
  </div>
)

Detail.getInitialProps = async({query})=>{
  const response = axios.get(`https://api.github.com/users/${query.user}`);
  return {user:response.data}
}

export default withAnalytics()(Detail);