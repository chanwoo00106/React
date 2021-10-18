import React from 'react';
import { Contents } from '../components/RowContents';
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
