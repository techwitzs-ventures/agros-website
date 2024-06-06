import BrowserRouter from '@fuse/core/BrowserRouter';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import { useSelector } from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import withAppProviders from './withAppProviders';
import axios from 'axios';
import awsmobile from 'src/aws-exports';

if (process.env.REACT_APP_ENV_NAME === 'dev' && process.env.REACT_APP_ENABLE_MOCK_API) {

  // import('@mock-api')

} else {

  axios.defaults.baseURL = awsmobile.aws_cloud_logic_custom[0].endpoint

  axios.defaults.headers.common['Content-Type'] = 'application/json';

}

const emotionCacheOptions = {
  rtl: {
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
  ltr: {
    key: 'muiltr',
    stylisPlugins: [],
    insertionPoint: document.getElementById('emotion-insertion-point'),
  },
};

function App() {
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  return (
    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <FuseTheme theme={mainTheme} direction={langDirection}>
        <BrowserRouter>
          <FuseLayout layouts={themeLayouts} />
        </BrowserRouter>
      </FuseTheme>
    </CacheProvider>
  );
}

export default withAppProviders(App)();
