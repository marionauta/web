import { h } from 'preact';
import { link } from './styles.scss';

type Props = h.JSX.HTMLAttributes;

const Link = (props: Props) => <a className={link} {...props} />;

export default Link;
