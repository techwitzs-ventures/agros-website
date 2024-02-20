import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import Logo from 'app/theme-layouts/shared-components/Logo';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import RocketIcon from '@mui/icons-material/Rocket';

const Root = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
}));

function NavbarLayout1(props) {
    return (
        <Root className={clsx('w-full h-64 min-h-64 max-h-64 shadow-md', props.className)}>
            <div className="flex flex-auto items-center w-full h-full px-16 lg:px-24">
                <div className="flex justify-between w-full h-full items-center">
                    <div className={clsx('flex shrink-0 items-center')}>
                        <Logo />
                    </div>

                    <div className="flex items-center px-8 md:px-0 h-full overflow-x-auto">
                        <Stack direction="row" spacing={2}>
                            <Button variant="outlined" endIcon={<LoginIcon/>}>
                               Login
                            </Button>
                            <Button variant='outlined' endIcon={<RocketIcon/>}>
                               Get Started
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </Root>
    );
}

export default memo(NavbarLayout1);
