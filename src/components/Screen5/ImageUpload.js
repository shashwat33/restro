import React, { Component } from "react";
import { storage, docRefmenu, db, auth } from "../Firebase";
import firebase from "../Firebase";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      Urlpic: "",
      progress: 0,
      Urlpic: "",
    };
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
    const { image } = this.state;
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
            firebase.auth().onAuthStateChanged((user) => {
              // const { Urlpic } = this.state;
              docRefmenu.doc().set({
                PhotoUrl: this.state.Urlpic,
                Name: "komaaal",
                //  uid: user.uid,
              });
              console.log("ssw4edrtfgyuhijokp");
              //console.log("Document data:", doc.data());
            });
          });
      }
    );
  };
  //correct
  // componentWillUnmount = () => {
  //   // firebase.auth().onAuthStateChanged((user) => {
  //   //   // const { Urlpic } = this.state;
  //   //   docRefmenu.doc().set({
  //   //     PhotoUrl: this.state.Urlpic,
  //   //     Name: "komaaal",
  //   //     //  uid: user.uid,
  //   //   });
  //   //   console.log("ssw4edrtfgyuhijokp");
  //   //   //console.log("Document data:", doc.data());
  //   // });
  // };

  //meeee
  // componentDidMount = () => {
  //   auth.onAuthStateChanged((user) => {
  //     docRefmenu.then(function (doc) {
  //       const { url } = this.state.url;
  //       docRefmenu.doc().set({
  //         picUrl: { url },
  //         foodname: "helloooDishiii",
  //         // price: "121",
  //       });
  //       console.log("dishiiiiiiiiiiiiiiiiiiiiiiii");
  //     });
  //   });
  // };
  render() {
    return (
      <div>
        <div>
          <progress
            value={this.state.progress}
            max="100"
            className="progress"
          />
        </div>
        {/* <br />
        <br />
        <br /> */}
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          {/* <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div> */}
        </div>
        {/* <button
          onClick={this.handleUpload}
          className="waves-effect waves-light btn"
        >
          Upload
        </button>
        <br />
        <br /> */}
        {/* {/* <img
          src={this.state.url || "https://via.placeholder.com/400x300"}
          alt="Uploaded Images"
          height="300"
          width="400"
        /> */}
      </div>
    );
  }
}

export default ImageUpload;
