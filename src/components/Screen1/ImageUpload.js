import React, { Component } from "react";
import { storage } from "../firebase";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
    };
  }
  handleUpdate = (e) => {
    e.preventDefault();
    let image = "";
    if (e.target.files[0]) {
      image = e.target.files[0];
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // complete function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
            console.log(url);
            // const { Urlpic } = this.state;
            this.setState({ Urlpic: url });
            console.log("jhsgc");
          });
      }
    );
  };

  // handleUpload = () => {
  //   const { image } = this.state;
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       // progress function ...
  //       const progress = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       this.setState({ progress });
  //     },
  //     (error) => {
  //       // Error function ...
  //       console.log(error);
  //     },
  //     () => {
  //       // complete function ...
  //       storage
  //         .ref("images")
  //         .child(image.name)
  //         .getDownloadURL()
  //         .then((url) => {
  //           this.setState({ url });
  //         });
  //     }
  //   );
  // };
  render() {
    return (
      <div className="center">
        <div className="file-field input-field">
          <div className="btn">
            {/* <span>File</span> */}
            <input type="file" onChange={this.handleUpdate} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        {/* <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button> */}
        <br />
        <br />
        <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        />
      </div>
    );
  }
}

export default ImageUpload;
