'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBubble = function (_Component) {
  _inherits(ChatBubble, _Component);

  function ChatBubble(props) {
    _classCallCheck(this, ChatBubble);

    var _this = _possibleConstructorReturn(this, (ChatBubble.__proto__ || Object.getPrototypeOf(ChatBubble)).call(this, props));

    _this.testref = _react2.default.createRef();
    _this.parentref = _react2.default.createRef();
    return _this;
  }

  _createClass(ChatBubble, [{
    key: 'timestampToTime',
    value: function timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + " ";
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      var curY = new Date().getFullYear() + '-';
      var curM = (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1) + '-';
      var curD = new Date().getDate() < 10 ? '0' + new Date().getDate() + ' ' : new Date().getDate() + " ";
      if (Y + M + D == curY + curM + curD) {
        return h + m;
      } else {
        return Y + M + D + h + m;
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('组件props发生了变化', this.parentref);
      this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
      this.parentref.current.style.height += 300;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 进入组件
      console.log("组件进入", this.testref);
      this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
    }
  }, {
    key: 'componentUpdateMount',
    value: function componentUpdateMount() {
      // 刷新组件
      console.log("组件更新", this.parentref);
      this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
      this.parentref.current.style.height += 300;
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      console.log("组件重新渲染", this.parentref);
      this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
      this.parentref.current.style.height += 300;

      return true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      console.log("组件重新渲染diad", this.parentref);
      console.log("conupadatyndkaslmdmasdkaskl", this.testref);
      this.testref.current.scrollTop = this.testref.current.scrollHeight + 297;
      this.parentref.current.style.height += 300;
    }
  }, {
    key: 'getConversations',
    value: function getConversations(messages) {
      var _this2 = this;

      if (messages == undefined) {
        return;
      }

      var listItems = messages.map(function (message, index) {
        var bubbleClass = 'me';
        var bubbleDirection = '';
        var timeboxs = "mebox";

        if (message.type === 0) {
          timeboxs = "youbox";
          bubbleClass = 'you';
          bubbleDirection = "bubble-direction-reverse";
        }
        return _react2.default.createElement(
          'div',
          { className: 'bubble-container ' + bubbleDirection, key: index },
          _react2.default.createElement(
            'div',
            { className: 'imgbox', style: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } },
            _react2.default.createElement('img', { className: 'img-circle', src: message.image })
          ),
          _react2.default.createElement(
            'div',
            { className: 'contentbox' },
            _react2.default.createElement(
              'div',
              { className: 'timebox ' + timeboxs },
              _react2.default.createElement(
                'p',
                { className: 'name', style: { fontSize: '2px', color: "#000", marginTop: "3px" } },
                message.nikename
              ),
              _react2.default.createElement(
                'p',
                { className: 'time', style: { display: "flex", marginLeft: "5px", fontSize: "2px", color: "#000" } },
                _this2.timestampToTime(message.time)
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bubble ' + bubbleClass },
              message.text
            )
          )
        );
      });
      return listItems;
    }
  }, {
    key: 'render',
    value: function render() {
      var messages = this.props.messages;
      // const {state: {newMessage, message}} = this;

      var chatList = this.getConversations(messages);

      return _react2.default.createElement(
        'div',
        { className: 'chats', ref: this.parentref },
        _react2.default.createElement(
          'div',
          { className: 'chat-list', id: 'chat', ref: this.testref },
          chatList
        )
      );
    }
  }]);

  return ChatBubble;
}(_react.Component);

ChatBubble.propTypes = {
  messages: _propTypes2.default.array.isRequired
};

exports.default = ChatBubble;
