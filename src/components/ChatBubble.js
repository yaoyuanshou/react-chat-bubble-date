import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ChatBubble extends Component {
constructor(props) {
  super(props)
  this.testref = React.createRef()
  this.parentref = React.createRef()
}

  timestampToTime(timestamp){
    var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + " ";
    var h = (date.getHours() < 10 ? '0'+(date.getHours()) : date.getHours()) + ':' ;
    var m = (date.getMinutes() < 10 ? '0'+(date.getMinutes()) : date.getMinutes()) ;
    var s = (date.getSeconds() < 10 ? '0'+(date.getSeconds()) : date.getSeconds());
    var curY = new Date().getFullYear() + '-'
    var curM = (new Date().getMonth()+1 < 10 ? '0'+(new Date().getMonth()+1) : new Date().getMonth()+1) + '-';
    var curD = new Date().getDate() < 10 ? '0' + new Date().getDate() + ' ' : new Date().getDate() + " ";
    if (Y+M+D == curY+curM+curD) {
        return h+m
    } else {
        return Y+M+D+h+m;
    }
}

componentWillReceiveProps(nextProps) {
  console.log('组件props发生了变化', this.parentref)
  this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
  this.parentref.current.style.height += 300
}

componentDidMount() {   // 进入组件
  console.log("组件进入",this.testref)
  this.testref.current.scrollTop = this.testref.current.scrollHeight + 297 ;

}

componentUpdateMount() {  // 刷新组件
  console.log("组件更新", this.parentref)
 this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
 this.parentref.current.style.height += 300

}

shouldComponentUpdate() {
  console.log("组件重新渲染", this.parentref)
  this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
  this.parentref.current.style.height += 300

  return true
}

componentDidUpdate() {
  console.log("组件重新渲染diad", this.parentref)
  console.log("conupadatyndkaslmdmasdkaskl", this.testref)
  this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
  this.parentref.current.style.height += 300
}

  getConversations(messages){
    if(messages == undefined){
      return;
    }

    const listItems = messages.map((message, index) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';
      let timeboxs = "mebox"

      if(message.type === 0){
        timeboxs = "youbox"
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";
      }
      return (
              <div className={`bubble-container ${bubbleDirection}`} key={index}>
                <div className="imgbox" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                  <img className={`img-circle`} src={message.image} />
                </div>
                <div className="contentbox">
                   <div className={`timebox ${timeboxs}`}>
                  <p className="name" style={{fontSize: '2px', color: "#000", marginTop: "3px"}}>{message.nikename}</p>
                  <p className="time" style={{display: "flex", marginLeft: "5px", fontSize: "2px", color: "#000"}}>{this.timestampToTime(message.time)}</p>
                </div>
                <div className={`bubble ${bubbleClass}`}>{message.text}</div>
                </div>
               
              </div>
          );
    });
    return listItems;
  }


  render() {
    const {props: {messages}} = this;
    // const {state: {newMessage, message}} = this;
    const chatList = this.getConversations(messages);

    return (
      <div className="chats" ref={this.parentref}>
        <div className="chat-list" id="chat" ref={this.testref}>
          {chatList}
        </div>
      </div>
    );
  }
}

ChatBubble.propTypes = {
  messages: PropTypes.array.isRequired
};

export default ChatBubble;
