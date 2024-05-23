import AppBar from '@mui/material/AppBar';
import { ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFooterTheme } from 'app/store/fuse/settingsSlice';
import PurchaseButton from '../../shared-components/PurchaseButton';
import DocumentationButton from '../../shared-components/DocumentationButton';
import PoweredByLinks from '../../shared-components/PoweredByLinks';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Typography } from '@mui/material';

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
            @ Copyright agroshub
            {/* <PurchaseButton className="mx-4" />
            <DocumentationButton className="mx-4" /> */}
          </div>

          <div className="flex grow shrink-0 px-12 justify-end">
            {/* <PoweredByLinks /> */}
            <motion.div variants={container} initial="hidden" animate="show" className="flex items-center">
              <Link
                className="mx-4 px-4 flex"
                to="/apps/about-us"
                component={motion.a}
                target="_self"
                style={{ color: "#fff" }}
                rel="noreferrer noopener"
              >
                <FuseSvgIcon color="action">
                  heroicons-outline:users
                </FuseSvgIcon>
                <Typography className='px-4'>
                  About us
                </Typography>
              </Link>
              <Link
                className="mx-4 px-4 flex"
                to="/apps/contact-us"
                component={motion.a}
                target="_self"
                style={{ color: "#fff" }}
                rel="noreferrer noopener"
              >
                <FuseSvgIcon color="action">
                  material-outline:perm_phone_msg
                </FuseSvgIcon>
                <Typography className='px-4'>
                  Contact us
                </Typography>
              </Link>
            </motion.div>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(FooterLayout2);
