import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { makeStyles, Theme } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import PersonIcon from "@material-ui/icons/Person"
import SearchIcon from "@material-ui/icons/Search"
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"

import { AuthContext } from "App"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit"
  },
  linkBtn: {
    textTransform: "none",
    marginLeft: theme.spacing(1)
  }
}))

const Header: React.FC = () => {
  const { loading, isSignedIn } = useContext(AuthContext)
  const classes = useStyles()

  //認証済みかどうかで表示ボタンを変更
  const AuthButtons = () => {
    // 認証完了後はサインアウト用のボタンを表示
    // 未認証時は認証用のボタンを表示
    if (!loading) {
      if (isSignedIn) {
        return (
          <>
            <IconButton
              color="inherit"
              className={classes.linkBtn}
              component={Link}
              to="/users"
              edge="start"
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              color="inherit"
              className={classes.linkBtn}
              component={Link}
              to="/chat_rooms"
              edge="start"
            >
              <ChatBubbleIcon />
            </IconButton>
            <IconButton
              color="inherit"
              className={classes.linkBtn}
              component={Link}
              to="/home"
              edge="start"
            >
              <PersonIcon />
            </IconButton>
          </>
        )
      } else {
        return (
          <>
            <IconButton
              component={Link}
              to="/signin"
              edge="start"
              color="inherit"
              className={classes.linkBtn}
            >
              <ExitToAppIcon />
            </IconButton>
          </>
        )
      }
    } else {
      return <></>
    }
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/users"
            variant="h6"
            className={classes.title}
          >
            Sample
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
