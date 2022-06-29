
import {Grid, makeStyles } from '@material-ui/core';

//components
import Categories from './Categories';
import Notes from './post/Posts';

const useStyle = makeStyles({
    component: {
        // marginTop: 50
    },
    leftContainer: {
        // width: '20%'
    },
    rightContainer: {

    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <>

            <Grid container className={classes.component}>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Notes />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;