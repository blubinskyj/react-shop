function Header() {
  return (
    <nav className={"deep-purple darken-1"}>
      <div className="nav-wrapper">
        <span className="brand-logo">React Shop</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/blubinskyj/movies-project">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
