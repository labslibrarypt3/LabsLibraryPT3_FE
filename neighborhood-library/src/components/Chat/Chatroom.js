import React, { Component } from "react";
import Chat from "twilio-chat";
import { Chat as ChatUI } from "@progress/kendo-react-conversational-ui";
import "@progress/kendo-theme-default/dist/all.css";
import { isFlowBaseAnnotation } from "@babel/types";
import axios from "axios";

class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeChat: true,
      error: null,
      isLoading: true,
      messages: [],
      buttonName: "Book Loaned",
      confirmTransaction: false
    };

    this.user = {
      id: props.dataBuild.userData.userId,
      username: props.dataBuild.userData.name
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/twilio/token", {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: `identity=${encodeURIComponent(this.props.dataBuild.userData.name)}`
    })
      .then(res => res.json())
      .then(data => Chat.create(data.token))
      .then(this.setupChatClient)
      .catch(this.handleError);
  }

  handleError = error => {
    console.error(error);
    this.setState({
      error: "Could not load chat."
    });
  };

  setupChatClient = client => {
    this.client = client;
    this.client
      .getChannelByUniqueName(this.props.roomTitle)
      .then(channel => channel)
      .catch(error => {
        if (error.body.code === 50300) {
          return this.client.createChannel({
            uniqueName: this.props.roomTitle
          });
        } else {
          this.handleError(error);
        }
      })
      .then(channel => {
        this.channel = channel;
        return this.channel.join().catch(() => {});
      })
      .then(() => {
        this.setState({ isLoading: false });
        this.channel.getMessages().then(this.messagesLoaded);
        this.channel.on("messageAdded", this.messageAdded);
      })
      .catch(this.handleError);
  };

  twilioMessageToKendoMessage(message) {
    return {
      text: message.body,
      author: { id: message.author, name: message.author },
      timestamp: message.timestamp
    };
  }

  messagesLoaded = messagePage => {
    this.setState({
      messages: messagePage.items.map(this.twilioMessageToKendoMessage)
    });
  };

  messageAdded = message => {
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        this.twilioMessageToKendoMessage(message)
      ]
    }));
  };

  sendMessage = event => {
    this.channel.sendMessage(event.message.text);
  };

  componentWillUnmount() {
    this.client.shutdown();
  }

  // updateTransaction = () =>{
  //   const authToken = localStorage.getItem("jwt");
  //   const endpoint = "http://localhost:4000/trans/update";
  //   await axios
  //     .put(endpoint,{
  //       transId:,
  //       is_checked_out:

  //     } {
  //       headers: { authorization: authToken }
  //     })
  //     .then(res => {
  //       this.dataBuild.userData = res.data;
  //       this.getLentBooks();
  //     })
  //     .catch(err => console.log(err));
  // };

  buttonHandler = e => {
    this.state.buttonName === "Book Loaned"
      ? this.setState({
          buttonName: "Book Returned",
          confirmTransaction: "false"
        })
      : this.setState({
          buttonName: "Book Loaned",
          confirmTransaction: "true"
        });
    this.updateTransaction();
  };

  // updateTransaction = () => {
  //   const authToken = localStorage.getItem("jwt");
  //   const endpoint = "http://localhost:4000/api/trans/update";
  //   axios
  //     .put(endpoint, {
  //       body: { confirmTransaction },
  //       headers: { authorization: authToken }
  //     })
  //     .then(res => {
  //       this.dataBuild.userData = res.data;
  //       this.getLentBooks();
  //     })
  //     .catch(err => console.log(err));
  // };

  buttonHandler = e => {
    this.state.buttonName === "Book Loaned"
      ? this.setState({ buttonName: "Book Returned" })
      : this.setState({ buttonName: "Book Loaned" });
  };

  toggleOpenCloseDrawer = () => {
    this.state.closeChat
      ? this.setState({
          closeChat: false
        })
      : this.setState({
          closeChat: true
        });
  };

  render() {
    console.log(this.props, "props in twillio");
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.isLoading) {
      return <p>Loading chat...</p>;
    } else {
      return this.state.closeChat ? (
        <div>
          <div onClick={this.toggleOpenCloseDrawer}>{this.props.title}</div>
        </div>
      ) : (
        <div>
          <div onClick={this.toggleOpenCloseDrawer}>{this.props.title}</div>
          <button onClick={this.buttonHandler}>{this.state.buttonName}</button>
          <ChatUI
            user={this.user}
            messages={this.state.messages}
            onMessageSend={this.sendMessage}
            width={500}
          />
        </div>
      );
    }
  }
}

export default Chatroom;
