import { h } from 'preact';
import Link from '~components/link';
import { Article } from '~models/article';

type SingleProps = Article;

const Single = ({ title, link, abstract }: SingleProps) => (
  <li>
    <Link href={link}>{title}</Link>
    {abstract && <span> &mdash; {abstract}</span>}
  </li>
);

type Props = {
  articles: Article[];
};

const Articles = ({ articles }: Props) => (
  <ul>
    {articles.map(article => (
      <Single key={article.link} {...article} />
    ))}
  </ul>
);

export default Articles;
