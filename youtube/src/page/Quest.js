import React from 'react';
import { Category } from '../components/Category';
import { ColumnContents } from '../components/ColumnContents';
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
                    <ColumnContents />
                </Contents>
            </Grid>
        </div>
    )
}
