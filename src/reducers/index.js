import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: "Up", duration: "1:33" },
    { title: "holy", duration: "2:44" },
    { title: "blinding lights", duration: "3:44" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
