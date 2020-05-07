import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Menu.css";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#c62828",
    },
  },
});
// const styles = (theme) => ({
//   button: {
//     margin: theme.spacing.unit,
//     color: "#c62828",
//     fontFamily: "Big Caslon FB",

//     position: "absolute",
//     right: "0",
//     top: "33%",
//   },
// });

const thumbsContainer = {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   marginTop: 16,
};

const thumb = {
  //   display: "inline-flex",
  //   borderRadius: 2,
  //   border: "1px solid #eaeaea",
  //   marginBottom: 8,
  //   marginRight: 8,
  //   width: 100,
  //   height: 100,
  //   padding: 4,
  //   boxSizing: "border-box",
};

const thumbInner = {
  //   display: "flex",
  //   minWidth: 0,
  //   overflow: "hidden",
};

const img = {
  height: "44%",
  width: "100%",
  display: "flex",

  position: "absolute",
  justifyContent: "center",
  transform: "translate(0%, 0%)",
};

function Dropzone(props) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  //const { classes } = this.props;
  return (
    <MuiThemeProvider theme={theme}>
      <GridListTileBar
        style={{
          backgroundColor: "transparent",
        }}
        titlePosition="top"
        actionIcon={
          <IconButton style={{ top: "40" }}>
            <ArrowBackIcon color="Primary" />
          </IconButton>
        }
        actionPosition="left"
      />
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p
            style={{
              //margin: theme.spacing.unit,
              color: "#c62828",
              fontFamily: "Big Caslon FB",

              position: "absolute",
              right: "4%",
              top: "33%",
            }}
          >
            edit
          </p>
        </div>

        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
    </MuiThemeProvider>
  );
}

// Dropzone.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
// export default withStyles(styles)(Dropzone);
export default Dropzone;
