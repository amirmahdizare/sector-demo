import React from 'react'

import style from './HomePage.module.scss'

import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system';

import PersonIcon from '@mui/icons-material/Person';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MouseIcon from '@mui/icons-material/Mouse';

import logo from '../assets/logo.jpg'
import photo from '../assets/photo2.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#05c6c5',
            contrastText: 'white',
        },
        secondary: {
            main: '#d0d0d0',
            contrastText: '#272727'

        },
        action: {
            main: '#9d9d9d',
            contrastText: '#272727'
        }
    },
    typography: {
        fontFamily: 'lalezar'
    }
});

const CustomButton = styled(Button)(({ theme }) => ({
    borderRadius: '20px',
    padding: theme.spacing(0.5) + ' ' + theme.spacing(2),
    margin: theme.spacing(1) + ' ' + theme.spacing(0.5),
    '& span': {
        margin: theme.spacing(0) + ' ' + theme.spacing(0.5)
    }

}))


export const HomePage = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Container className={style.container} maxWidth='md'>

                {/* Entire Header Container */}
                <Box className={style.header}>

                    <Box className={style.headerShapes} display={{ xs: 'none', md: 'block' }} >

                        {/* Black Rectangle */}
                        <Box className={style.blackRectangle} >

                            <Box className={style.blackCircle} >
                                <ArrowDownwardIcon className={style.downloadIcon} />
                            </Box>

                        </Box>

                        {/* Arc And Rects */}
                        <Box className={style.shapesContainer}  >

                            <Box className={style.rectOne}></Box>

                            <Box className={style.rectTwo}> </Box>

                            <Box className={style.arcWrapper} >

                                <Box className={style.arcStart}></Box>
                                <Box className={style.arcEnd}></Box>
                            </Box>


                        </Box>


                    </Box>

                    <Box className={style.headerTitleContainer} >

                        {/* HeaderMenu */}

                        <Box className={style.headerMenu} sx={{ my: 2 }} flexWrap={{xs:'wrap',md:'nowrap'}}>

                            {/* Logo */}
                            <img src={logo} />

                            {/* Navbar */}
                            <Box sx={{ display: 'flex' }}>
                                <Button color='action'>سکتور چیست؟</Button>
                                <Button color='action'>سوالات متداول</Button>
                                <Button color='action'>قوانین و مقررات </Button>
                            </Box>

                            {/* Go to Account */}
                            <CustomButton variant='contained' startIcon={< PersonIcon />}>حساب کاربری</CustomButton>

                        </Box>

                        <Box className={style.description} sx={{ my: 2 }} >
                            <Box className={style.descriptionTexts} sx={{ mx: 2 }}>

                                {/* Description Title */}
                                <Typography variant='p'>
                                    <Typography color='primary' variant='h4' display={'inline'} >سکتور</Typography>
                                    &nbsp;
                                    <Typography variant='h4' display={'inline'} >سکوی پرتاب شماست..</Typography>
                                </Typography>

                                <Typography color='GrayText' variant='h5'>پلتفرم آنلاین و آگاهی رسانی امنیت سایبری</Typography>

                                {/* Description Buttons */}
                                <Box sx={{ mt: 2 }}>
                                    <CustomButton color='primary' variant='contained' endIcon={<ArrowBackIcon />} > آموزش ببین</CustomButton>
                                    <CustomButton color='secondary' variant='contained' className={style.customButton} endIcon={<MouseIcon />} >آموزش بساز</CustomButton>
                                </Box>

                            </Box>

                            {/* Photo */}
                            <Box  >
                                <img className={style.photo} src={photo} />
                            </Box>

                        </Box>


                    </Box>

                </Box >
            </Container>
        </ThemeProvider>
    )
}
