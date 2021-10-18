import React from 'react';
import { Category } from '../components/Category';
import { Header } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { Grid, Contents } from './style';
import {useParams} from 'react-router-dom';

export const Quest = () => {
    const { category } = useParams();
    
    return (
        <div>
            <Header />
            <Grid>
                <SideMenu />
                <Contents>
                    {category ? (
                        <Category category={category} />
                    ) : (
                        <Category />
                    )}
                </Contents>
            </Grid>
        </div>
    )
}
