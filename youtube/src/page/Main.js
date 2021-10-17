import React from 'react';
import { Contents } from '../components/Contents';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { Grid } from './style';

export const Main = () => {
    return (
        <div>
            <Header />
            <Grid>
                <SideMenu />
                <Contents />
            </Grid>
        </div>
    )
}
