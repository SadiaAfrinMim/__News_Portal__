import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import NewsLetter from "@/components/shared/NewsLetter";
import { NewsItem } from "@/types/news";


const Home = async()=> {
  const data = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-server-module-60/main/data/news.json');
  const news = await data.json();
  console.log(news);
  
  return (
    <>
    <div className="py-12">
      <Banner></Banner>
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            news.slice(0,6).map((item:NewsItem)=>(
              <NewsCard key={item._id} item={item}></NewsCard>
            ))
          }
        </div>

      </div>
      <NewsLetter></NewsLetter>
      
      </div>
    
    </>
  );
}

export default Home;
