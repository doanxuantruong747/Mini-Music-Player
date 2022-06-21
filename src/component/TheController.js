import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import { WallPaper } from './WallPaper'
import { Widget } from './Widget'


import useMusicPlayer from '../hook/usePlayerProvider'
import TheTracklist from './TheTracklist';
import { Skeleton } from '@mui/material';

export default function TheController() {

    const { currentTrackName, isPlaying, togglePlay,
        playPreviousTrack, playNextTrack } = useMusicPlayer()
    const theme = useTheme();
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

    return (
        <Box sx={{ width: '100%', overflow: 'hidden', marginTop: 10, fontWeight: 500 }}>
            <Widget>
                <Box sx={{ height: 50, mb: 2, mt: 1, textAlign: "center" }}>
                    <Typography> {currentTrackName}</Typography>  <Skeleton />
                </Box>
                <Box>
                    <TheTracklist />
                </Box>

                <Box sx={{ height: 50 }} />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: -1, }}  >

                    <IconButton aria-label="previous song"
                        onClick={() => playPreviousTrack()}>
                        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                    <IconButton
                        onClick={() => togglePlay()} >

                        {isPlaying ? (
                            <PlayArrowRounded
                                sx={{ fontSize: '3rem' }}
                                htmlColor={mainIconColor}
                            />
                        ) : (
                            <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                    <IconButton aria-label="next song"
                        onClick={() => playNextTrack()}>
                        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                </Box>
            </Widget >
            <WallPaper />
        </Box >
    );
}
