import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon' ;
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import GetAppIcon from '@material-ui/icons/GetApp';
import { IconButton } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
   
   
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders" style={{color:'white'}}>
      <Divider/>
      <ListItem button>
          <ListItemIcon>
              <IconButton style={{color:'white'}}>
                  <GetAppIcon/>
              </IconButton>
          </ListItemIcon>
        <ListItemText primary="My Downloads" />
        <ListItemSecondaryAction>
            <IconButton style={{color:'white'}}>
                <NavigateNextIcon/>
            </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider/>
      <ListItem button >
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Available for Download" />
      </ListItem>
    
      <ListItem button>
        <ListItemText primary="Netflix Originals" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="TV Shows" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Action & Adventure" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Anime" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Comedes" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Documentaries" />
      </ListItem>
     
      
    </List>
  );
}