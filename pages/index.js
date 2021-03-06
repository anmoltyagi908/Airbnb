import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import Smallcard from '../components/Smallcard';

export default function Home({ exploreData, cardData }) {
  // props.exploreData
  return (
    <div className="">
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Lets build Airbnb</h1> */}
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {exploreData?.map(({img, distance, location}) => (
          <Smallcard
          key = {img}
          img={img} 
          distance={distance}
           location={location} />
       ))}
      </div>
      </section>

      <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-8">Live Anywhere</h2>
      
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3-ml-3">
        {cardData?.map(({img,title})=> (
          <MediumCard
           key = {img} 
          img={img}
           title={title}
          />
        ))}
      </div>
      </section>

    <LargeCard 
    img="https://links.papareact.com/4cj" 
    title="The Greatest Outdoors"
    description="Wishlists curated by Airbnb."
    buttonText="Get Inspired"
    />


      {/* <h2>how are you</h2> */}
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps(){
  const exploreData = await await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

   const cardData = await await fetch('https://links.papareact.com/zp1').
   then((res) =>
   res.json()
   );
  return {
    props: {
      exploreData,
      cardData
    }
  }
}