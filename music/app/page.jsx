import Feed from '@components/Feed';
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center ">Discover new music with Music World
            
        </h1>
        <p className="desc text-center">
            music world is a free music site
        </p>
        <Feed/>
    </section>
  )
}

export default Home