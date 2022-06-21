import { Widget } from './Widget'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { useTheme } from '@mui/material/styles';
import useMusicPlayer from '../hook/usePlayerProvider'
import { IconButton, Typography, } from '@mui/material';
import PauseRounded from '@mui/icons-material/PauseRounded';



function TheTracklist() {
    const theme = useTheme();

    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

    const { trackList, isPlaying,
        currentTrackIndex, playTrack } = useMusicPlayer()

    const songs = trackList
    //console.log(currentTrackName)
    const handelPlay = (e) => {
        playTrack(e)
    }

    return (
        <div>
            {songs.map((song, index) => (
                <Widget key={index} sx={{
                    width: '60%', mb: 2,
                    display: 'flex', flexDirection: 'row',
                }}
                >
                    <IconButton
                        onClick={() => handelPlay(index)}
                    >
                        {index === currentTrackIndex && isPlaying ? (
                            <HeadphonesIcon
                                sx={{ fontSize: '1.5rem' }}
                                htmlColor={mainIconColor}
                            />
                        ) : (
                            <PauseRounded sx={{ fontSize: '1.5rem' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                    <Typography sx={{ ml: 2, mt: 1, fontWeight: 300, fontSize: 15 }}>{song.name}</Typography>

                </Widget>
            ))
            }



        </div >
    )
}

export default TheTracklist