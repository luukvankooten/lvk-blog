import Card from '@lvk-blog/components/Card';
import Outlet from '@lvk-blog/components/Outlet';
import type { NextPage } from 'next';
import Head from 'next/head';

import profilePicture from '../public/DSCF0733.jpeg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My personal blog - lvk</title>
        <meta name="description" content="My personal blog" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Outlet>
        <Card image={profilePicture} swap={true}>
          <p>Als eerst welkom op mijn blog en leuk dat je interesse in mij hebt en de tijd neemt om dit te lezen. Ik ben Luuk een 23 jarige uit Zeeland ik volg de opleiding ICT op het Avans Breda en daarvoor heb ik een MBO opleiding applicatie ontwikkelaar afgerond aan het Hoornbeeck Rotterdam. De ICT is een zeer breed vakgebied met veel verschillende takken van sport zoals het beheren en onderhouden van computer systemen of het ontwerpen van computer programma’s  maar ook het bouwen van computer programma’s. Het ontwerpen en bouwen van computer programma’s is wat ik het leukst vind om te doen.</p>
        </Card>
      </Outlet>
    </>
  );
};

export default Home;
