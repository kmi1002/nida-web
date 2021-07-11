import React from 'react';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { NavigationProps } from './Navigation.type';
import * as S from './Navigation.style';

const Navigation = ({ direction, items }: NavigationProps) => {
  const category = (items: any) => {
    return (
      <div>
        {items.map((item, index) => (
          <div>
            <Link href={item.url}>
              <Typography variant="inherit" noWrap>
                {item.title}
              </Typography>
            </Link>
            {item.items && category(item.items)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <S.Container direction={direction}>
      {items.map((item, index) => (
        <div>
          <Typography style={{ fontWeight: 'bold' }}>{item.title}</Typography>
          {item.items && item.items.length > 0 && category(item.items)}
        </div>
      ))}
    </S.Container>
  );
};

export default Navigation;
