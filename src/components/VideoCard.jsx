import { Card, CardMedia } from '@mui/material'
import React from 'react'
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoUrl } from '../utils/constants'
import { Link } from 'react-router-dom'

const VideoCard = ({
    video: {
        id: {
            videoId
        },
        snippet
    }

}) => {
    // console.log(video.snippet)
    return (
        <Card>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }} />

            </Link>
        </Card>
    )
}

export default VideoCard