import React from 'react';
import List from '@/components/atoms/List';
import ListItem, { ListItemProps } from '@/components/atoms/ListItem';
import { useLocation, useHistory } from 'react-router-dom';

type MenuLinkItemProps = ListItemProps & {
  to: string;
  target?: '_blank' | '_self';
  text: string;
};

export type MenuListProps = {
  items: MenuLinkItemProps[];
};

const MenuList = (props: MenuListProps) => {
  const { items = [] } = props;
  const location = useLocation();
  const history = useHistory();

  const handleClick = (item: MenuLinkItemProps) => {
    const { to, target = '_self' } = item;
    if (location.pathname !== to) {
      if (target === '_blank' && typeof globalThis.window !== 'undefined') {
        window.open(to);
      } else {
        history.push(to);
      }
    }
  };

  return (
    <List>
      {items.map((item) => {
        const { to, children, text } = item;
        const { pathname } = location;
        let selected = false;

        if (to === '/') {
          selected = pathname === to;
        } else {
          selected = pathname.includes(to);
        }

        return (
          <ListItem
            key={to}
            ContainerComponent="div"
            selected={selected}
            button
            onClick={() => handleClick(item)}
          >
            {children || text}
          </ListItem>
        );
      })}
    </List>
  );
};

export default MenuList;
