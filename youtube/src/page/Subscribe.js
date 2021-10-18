import React from 'react';
import { Header } from '../components/Header';
import { Contents } from '../components/RowContents';
import { SideMenu } from '../components/SideMenu';
import { Grid } from './style';

export const Subscribe = () => {
    return (
        <div>
            <Header />
            <Grid>
                <SideMenu />
                <Contents width="200px" />
            </Grid>
        </div>
    )
}
