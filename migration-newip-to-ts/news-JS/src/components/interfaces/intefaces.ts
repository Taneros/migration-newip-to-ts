interface IData {
  status?: string,
  sources?: [
      {
          id: string,
          name: string,
          description: string,
          url: string,
          category: string,
          language: string,
          country: string
      },]
}


interface IDataArt {
  status: string,
  totalResults: number,
  articles: [
      {
          source: {
              id: string,
              name: string
          },
          author: string,
          title: string,
          description: string,
          url: string,
          urlToImage: string,
          publishedAt: string,
          content: string
      }]
}

interface Options {
  [key: string] : string;
  // sources : string;
}

// interface Data {
//     status?: string,
//     sources?: Array<Options>
// }

interface INews {
  source: {
    name: string,
    id: string
  },
  title: string,
  url: string,
  description: string,
  author: string,
  urlToImage: string,
  publishedAt: string
}

interface IChannel {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}


export {IData, IDataArt, Options, INews, IChannel}