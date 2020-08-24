git地址：[react-chat-bubble-date]( https://github.com/yaoyuanshou/react-chat-bubble-date )

## 安装

```
npm install --save react-chat-bubble-date
```

## 使用

你可以使用import 或 export将此组件导入到你所需要的地方

案例:

```js
import ChatBubble from 'react-chat-bubble';

class App extends Component {
  render() {
      <ChatBubble messages = {this.state.messages} />
  }
}
export default App;
```

数据格式：
```json
this.state.messages =
  [{
	    "type" : 0,
	    "image": "cat.jpg",
	    "text": "Hello! Good Morning!",
      	"time": 1545816450000,
      	"nikename": "Alice"
	}, {
	    "type": 1,
	    "image": "dog.jpg",
	    "text": "Hello! Good Afternoon!",
        "time": 1545816450000,
      	"nikename": "Jack"
	}];

```
```
数据格式说明：
type为0的时候代表自己所发送的信息，为1的时候代表其他人所发送的信息(数字)
image:头像，图片路径(字符串)
text:所发送的文本消息(字符串)
time：消息发送时间，如果为当天发送所发送的消息，页面只显示时和分，历史消息会显示完整的日期(字符串)
nikename:聊天昵称(字符串)
```

## 组件更改

如果你觉得该组件不能满足开发需求，可以自行更改并上传至自己的npm账号上

你可以打开src->conponents下的ChatBubble.js文件，进行一些页面结构，逻辑等的修改

你可以打开src->conponents下的ChatBubble.css文件，进项页面样式的修改，让你的页面看起来更符合自己的审美

不过，我们建议你可以直接将css文件进行复制到你自己的项目目录中，然后再从自己项目入口的html文件中将复制后的css文件进行引入，修改样式也是建议修改复制后的文件，而不是源码中的css文件(之所以这样做，是因为该组件在进行编译的时候出现了bug，后期会对这个bug进行修复).

组件更改完毕后

你可以打开package.json文件，在scripts部分有build和transpile两个命令，你需要进行npm run build和npm run transpile将你自己的代码再次进行编译，编译后的输出文件在lib下的ChatBubble.js，当然，你也可以直接在编译后的文件中去进行代码更改，不过不建议这么做，这么做会导致你的项目出现一些莫名其妙的bug

命令执行完毕后，你可以使用npm publish将更改后的组件进行上传(请注意修改package.json的version版本号)



