import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import { motion } from 'framer-motion';
import config from '../../../../appConfig';


function FooterLayout2(props) {
  const footerTheme = useSelector(selectFooterTheme);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className={clsx('relative z-20 shadow-md', props.className)}
        color="default"
        style={{ backgroundColor: footerTheme.palette.background.paper }}
      >
        <Toolbar className="min-h-48 md:min-h-64 px-8 sm:px-12 lg:px-20 py-0 flex items-center overflow-x-auto">
          <div className="flex grow shrink-0">
            @ Copyright {config.application_name}
          </div>

          <div className="flex grow shrink-0 px-12 justify-end">
            <motion.div variants={container} initial="hidden" animate="show" className="flex items-center">

            </motion.div>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout2);
