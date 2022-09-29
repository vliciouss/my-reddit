import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CommentIcon from '@mui/icons-material/Comment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';

import { Comments } from "../Comments/Comments";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const Post = ({ post }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item sx={{width: 1}}> 
            <Card >
                <CardHeader
                    title={post.title}
                />
                {post.is_video && <CardMedia 
                    component="video"
                    height="200"
                    autoPlay
                    controls
                    image={post.media.reddit_video.fallback_url}
                    title={post.title}
                />}
                <CardMedia
                    component="img"
                    height="auto"
                    image={post.url}
                    title={post.title}
                    alt=""
                />
                <CardActions disableSpacing>
                        <Typography size="small" variant="subtitle1" style={{ flex: 1 }}>{`Posted by ${post.author}`}</Typography>
                            {post.num_comments}
                            <CommentIcon align="right"/>
                            {post.body}
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Comments post={post}/>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
};

export default Post;