import { styled } from '@mui/material/styles';
import config from 'src/appConfig';

const Root = styled('div')(({ theme }) => ({
  '& > .logo-icon': {
    transition: theme.transitions.create(['width', 'height'], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  '& > .badge': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

function Logo() {
  return (
    <Root className="flex items-center">
      {/* <img className="logo-icon w-32 h-32" src="assets/images/logo/logo.svg" alt="logo" /> */}

      <div className="badge flex items-center py-4 px-8 mx-8 rounded">
        <span className="text-2xl font-semibold mx-4">{config.application_name}</span>
      </div>
    </Root>
  );
}

export default Logo;
