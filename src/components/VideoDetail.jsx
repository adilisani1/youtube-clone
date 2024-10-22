
import { CheckCircle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const VideoDetail = () => {

    const [videoDetail, setVideoDetail] = useState(null);
    const [video, setVideo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideo(data.items));
    }, [id])


    if (!videoDetail) return 'Loading...';

    const { snippet: { title, channelId, channelTitle }, statistics: {
        viewCount,
        likeCount
    } } = videoDetail;

    return (

        <Box minHeight="95vh">
            <Stack direction={{ xs: 'column', md: "row" }}>
                <Box flex={1}>
                    <Box sx={{
                        width: '100%',
                        position: 'sticky',
                        top: '86px'
                    }}>
                        <ReactPlayer className="react-player" url={
                            `https://www.youtube.com/watch?v=${id}`
                        } controls />

                        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typography>

                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{
                                color: "#fff"
                            }}
                            py={1} px={2}>

                            <Link to={`/channel/${channelId}`}>
                                <Typography
                                    fontWeight="bold"
                                    color="#fff" >
                                    {channelTitle}
                                </Typography>

                                <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />

                            </Link>

                            <Stack direction="row"
                                gap="20px"
                                alignItems="center">

                                <Typography variant="body1"
                                    sx={{
                                        opacity: 0.7
                                    }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>

                                <Typography variant="body1"
                                    sx={{
                                        opacity: 0.7
                                    }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>

                            </Stack>

                        </Stack>


                    </Box>
                </Box>

                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
                    <Videos videos={video} direction="column" />
                </Box>

            </Stack>
        </Box>

    )
}

export default VideoDetail;