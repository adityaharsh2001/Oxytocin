
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../home.css'

//components
import Post from './Post';

const Posts = () => {
    const count = [1,2,3,4,5,6,7,8,9];
    return (
        <>
            {
                count.map(post => (
                    <Grid item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to='details'>
                        <div class="wrapper">
  <div class="card">
	<h3 class="card-title">CARD TITLE</h3>
		<p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
		<button class="card-btn">READ MORE</button>
	</div>
</div>
                        </Link>
                    </Grid>
                ))
            }
        </>
    )
}

export default Posts;