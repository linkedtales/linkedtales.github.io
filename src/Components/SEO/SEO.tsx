import React from 'react';
import { Helmet } from 'react-helmet';

interface Share {
  url: string;
  title: string;
  description: string;
  keywords: string;
  image: string;
}

interface Props {
  share: Share;
}

const SEO : React.FC<Props>  = ({ share }: Props) =>
  <Helmet>
    <title>{share.title}</title>
    <meta name="title" content={share.title} />
    <meta name="description" content={share.description} />
    <meta name="keywords" content={share.keywords} />

    <meta property="og:url" content={share.url} />
    <meta property="og:title" content={share.title} />
    <meta property="og:description" content={share.description} />
    <meta property="og:image" content={share.image} />

    <meta property="twitter:url" content={share.url} />
    <meta property="twitter:title" content={share.title} />
    <meta property="twitter:description" content={share.description} />
    <meta property="twitter:image" content={share.image} />
  </Helmet>
  
export default SEO;
