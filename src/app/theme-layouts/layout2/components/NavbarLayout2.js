import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import Logo from '../../shared-components/Logo';
import Navigation from '../../shared-components/Navigation';

const Root = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  position: "sticky",
  top: 0,
  zIndex: 50
}));

function NavbarLayout2(props) {
  return (
    <Root className={clsx('w-full h-64 min-h-64 max-h-64 shadow-md', props.className)}>
      <div className="flex flex-auto items-center w-full h-full px-16 lg:px-24">
        <div className="flex justify-between w-full h-full items-center">
          <div className="flex shrink-0 items-center px-8">
            <Logo />
          </div>

          <FuseScrollbars className="flex h-full items-center">
            <Navigation className="w-full" layout="horizontal" />
          </FuseScrollbars>
        </div>
      </div>
    </Root>
  );
}

export default memo(NavbarLayout2);
