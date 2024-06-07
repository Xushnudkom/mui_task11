import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import CommentIcon from '@mui/icons-material/Comment';
import CollectionsIcon from '@mui/icons-material/Collections';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
const Routes = [
    {
        path: "/main/Cars",
        content: "Cars",
        icon: <TimeToLeaveIcon />
    },
    {
        path: "/main/posts",
        content: "Posts",
        icon: <MarkunreadMailboxIcon />
    },
    {
        path: "/main/comments",
        content: "Comments",
        icon: <CommentIcon />
    },
    {
        path: "/main/albums",
        content: "Albums",
        icon: <CollectionsIcon />
    },
    {
        path: "/main/photos",
        content: "Photos",
        icon: <PhotoSizeSelectActualIcon />
    },
    {
        path: "/main/todos",
        content: "Todos",
        icon: <ListAltIcon />
    },
    {
        path: "/main/users",
        content: "Users",
        icon: <PeopleIcon />
    },
]
export default Routes