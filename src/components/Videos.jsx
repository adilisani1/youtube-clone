import { Box, Stack } from "@mui/material"
import { VideoCard, ChannelCard } from "./"
const Videos = ({ videos }) => {
    return (
        <Stack direction="row" flexWrap="wrap"
            justifyContent="space-between"
            gap={2}
            alignItems="start"

        >

            {videos.map((item, index) => (
                <Box key={index} >
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos