import React from "react";
import io from "socket.io-client";
import LoggedinNavbar from "../components/LoggedinNavbar";
import Footer from "../components/Footer";
import "./Chat.css";

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:4001');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
        
    }
    render(){
        return (
            <div>
                <LoggedinNavbar />
                    <h1>Chat Room</h1>
                    <hr/>
                    <div className="chat-body">
                        <div className="messages">
                        {this.state.messages.map(message => {
                            return (
                                <div>{message.author}: {message.message}</div>
                            )
                        })}
                        </div>
                        <div className="chat-container">
                            <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                            <br/>
                            <div class="button-container">
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-chat-control">Send</button>
                            </div>
                        </div>
                    </div>
                <Footer />
             </div>
        );
    }
}

export default Chat;