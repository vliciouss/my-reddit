import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import React from "react";

export const Comment = ({ comment }) => {
    return <Box sx={{
        marginBottom: 1
    }}>
        <Typography component="p" variant="body1" mb={1} fontWeight={700}>
            {comment.author}
        </Typography>
        <Typography component="p" variant="body2" >
            {comment.body}
        </Typography>
        </Box>
}