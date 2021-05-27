import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Footer = () => (
	<footer id={style.footer}>
    <div class="container">
      <div>
        <p>This website was made for the Data Visualisation course at <Link href="https://www.epfl.ch" class={style.link}>EPFL</Link>.</p>
      </div>
      <div>
        <p><Link href="https://github.com/com-480-data-visualization/data-visualization-project-2021-itv" title="Github repo" class={style.link}>Check the code!</Link></p>
      </div>
    </div>
  </footer>
);

export default Footer;
