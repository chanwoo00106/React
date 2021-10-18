import React from 'react';
import { Category } from '../components/Category';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { Grid, Contents } from './style';

export const Quest = () => {
    return (
        <div>
            <Header />
            <Grid>
                <SideMenu />
                <Contents>
                    <Category />
                </Contents>
            </Grid>
        </div>
    )
}
