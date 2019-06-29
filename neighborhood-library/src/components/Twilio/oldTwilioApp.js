import React, { Component } from "react";
import Chat from "twilio-chat";
import { Chat as ChatUI } from '@progress/kendo-react-conversational-ui';
import axios from "axios"

class TwilioApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      messages: ['welcome to chat!'],
      data:{}
    };  
    //  end of state object
  }   
// end of constructor
componentDidMount = async () => {
  const authToken = localStorage.getItem("jwt");
  const endpoint = 'http://localhost:4000/api/twilio/token';
try{
axios
      .post(
        endpoint,{},
        {headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'authorization': authToken
      }},
      )
      // .then(res => res.json())
      .then(data => Chat.create(data.token))
      .then(this.setupChatClient,console.log('now its here'))
    }catch(error){
      this.handleError();
    }   
  }
  
handleError(error){
console.error(error);
this.setState({
  error: 'Could not load chat.'
});
}
  
  
    
 
  setupChatClient(client) {
    
    this.client = client;
    this.client
      .getChannelByUniqueName('general')
      .then(channel => channel)
      .catch(error => {
        if (error.body.code === 50300) {
          return this.client.createChannel({ uniqueName: 'general' });
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
        this.channel.on('messageAdded', this.messageAdded);
      })
      .catch(this.handleError);
   }


   

  twilioMessageToKendoMessage(message) {
    return {
      text: message.body,
      author: { id: message.author, name: message.author },
      timestamp: message.timestamp
    };
  }

  messagesLoaded(messagePage) {
    this.setState({
      messages: messagePage.items.map(this.twilioMessageToKendoMessage)
    });
  }

  messageAdded(message) {
    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        this.twilioMessageToKendoMessage(message)
      ]
    }));
  }

  sendMessage(event) {
    this.channel.sendMessage(event.message.text);
  }

  componentWillUnmount() {
    // this.client.shutdown();
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.isLoading) {
      return <p>Loading chat...</p>;
    }
  return (
      <>

      <h1>twillio coming soon</h1>
      <ChatUI
        user={this.state.data.name}
        messages={this.state.messages}
        onMessageSend={this.sendMessage}
        width={500}
      />
      </>
    );
    }
}


export default TwilioApp;