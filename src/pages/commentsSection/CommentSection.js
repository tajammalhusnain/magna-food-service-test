import React from 'react'

import { Typography } from '@material-ui/core'

import Comment from '../../components/comment/Comment';

//styles
import useStyles from "./styles";

function CommentSection() {

    const comments = [
        {
            userName: 'User Name',
            commentText: 'Non quam lacus suspendisse faucibus. Metus vulputate eu scelerisque felis imperdiet proin. Sagittis vitae et leo duis ut diam quam. Blandit volutpat maecenas volutpat blandit'
        },
        {
            userName: 'User Name 2',
            commentText: 'Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Senectus et netus et malesuada fames. Nunc faucibus a pellentesque sit amet.',
            replies: [
                {
                    userName: 'User Name 3',
                    commentText: 'Amet est placerat in egestas erat imperdiet sed euismod nisi. Elementum integer enim neque volutpat ac tincidunt. Nec ultrices dui sapien eget mi proin sed libero enim.'
                },
                {
                    userName: 'User Name 4',
                    commentText: 'Sodales ut eu sem integer vitae justo eget magna fermentum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. '
                },
            ]
        },
        {
            userName: 'User Name 5',
            commentText: 'Quisque sagittis purus sit amet. Aliquam ut porttitor leo a diam sollicitudin. Sit amet luctus venenatis lectus magna fringilla'
        },
    ]

    var classes = useStyles();

    return (
        <div className={classes.commentsWrapper}>
            <Typography>Comments</Typography>
            {
                comments.map((comment, index) => {
                    return <>
                        <Comment
                            userName={comment.userName}
                            comment={comment.commentText} />
                        {comment.replies?.map((reply) => {
                            return <div className={classes.replySection}>
                                <Comment
                                    userName={comment.userName}
                                    comment={comment.commentText} />
                            </div>
                        })}
                    </>
                })
            }

        </div>
    )
}

export default CommentSection