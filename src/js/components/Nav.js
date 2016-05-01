import React from "react";

const NavItem = ({ item }) =>
  <li className="nav__item">
    <a href={ item.url }>{ item.name }</a>
  </li>;

const navItem = (item, idx) => {
  return (<NavItem key={ idx } item={ item } />);
};

const Nav = ({ items }) =>
  <nav className="nav">
    <ul className="nav__items">
      { items.map(navItem) }
    </ul>
  </nav>;

const navItemPropType = React.PropTypes.shape({
  name: React.PropTypes.string,
  url: React.PropTypes.string
});

NavItem.propTypes = { item: navItemPropType.isRequired };
Nav.propTypes = { items: React.PropTypes.arrayOf(navItemPropType).isRequired };

export default Nav;
