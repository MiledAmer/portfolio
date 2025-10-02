export type Author = {
    _id: string;               
    _type: 'author';           
    name: string;              
    slug: {
      _type: 'slug';           
      current: string;         
    };
    image?: string;         
    bio?: Array<BlockContent>; 
  };
  
  export type BlockContent = {
    _key: string;               
    _type: 'block';             
    style?: 'normal';           
    children: Array<{
      _key: string;             
      _type: string;           
      text: string;             
      marks?: string[];         
    }>;
  };
  