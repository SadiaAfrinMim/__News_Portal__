
 export interface NewsItem{
    _id: string;
    others_info: {
      is_todays_pick: boolean;
      is_trending: boolean;
    };
    category_id: string;
    rating: {
      number: number;
      badge: string;
    };
    total_view: number;
    title: string;
    author: {
      name: string;
      published_date: string;
      img: string;
    };
    thumbnail_url: string;
    image_url: string;
    details: string;
  };


  export interface NewsCardProps {
    item: NewsItem;
  };




  
  