import FuseDialog from '@fuse/core/FuseDialog';
import { styled } from '@mui/material/styles';
import FuseMessage from '@fuse/core/FuseMessage';
import FuseSuspense from '@fuse/core/FuseSuspense';
import clsx from 'clsx';
import { memo, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import AppContext from 'app/AppContext';
import { selectFuseCurrentLayoutConfig } from 'app/store/fuse/settingsSlice';
import FooterLayout1 from './components/FooterLayout1';
import ToolbarLayout1 from './components/ToolbarLayout1';
import SettingsPanel from '../shared-components/SettingsPanel';
import NavbarWrapperLayout1 from './components/NavbarWrapperLayout1';
import { Hidden } from '@mui/material';

const Root = styled('div')(({ theme, config }) => ({
  ...(config.mode === 'boxed' && {
    clipPath: 'inset(0)',
    maxWidth: `${config.containerWidth}px`,
    margin: '0 auto',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  }),
  ...(config.mode === 'fullwidth' && {
    '& .container': {
      maxWidth: `${config.containerWidth}px`,
      width: '100%',
      margin: '0 auto',
    },
  }),
}));

function Layout1(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const appContext = useContext(AppContext);
  const { routes } = appContext;
  return (
    <Root id="fuse-layout" className="w-full flex" config={config}>

      <div className="flex flex-col flex-auto min-w-0">

        <main id="fuse-main" className="flex flex-col flex-auto min-h-full min-w-0 relative">
          
          {config.navbar.display && (
            <NavbarWrapperLayout1
              className={clsx(config.navbar.style === 'fixed' && 'sticky top-0 z-50')}
            />
          )}
          <Hidden lgUp>
            {config.toolbar.display && (
              <ToolbarLayout1
                className={clsx(
                  config.toolbar.style === 'fixed' && 'sticky top-0',
                  config.toolbar.position === 'above' && 'order-first z-40'
                )}
              />
            )}
          </Hidden>

          <div className="flex flex-col flex-auto min-h-0 relative z-10">
            <FuseDialog />

            <FuseSuspense>{useRoutes(routes)}</FuseSuspense>

            {props.children}
          </div>

          {config.footer.display && (
            <FooterLayout1 className={config.footer.style === 'fixed' && 'sticky bottom-0'} />
          )}
        </main>
      </div>
      <FuseMessage />
    </Root>
  );
}

export default memo(Layout1);