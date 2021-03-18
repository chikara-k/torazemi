import React from 'react';
import Article from "./Article";
import * as FooBar from "./components/FooBar";
import Hoge from './components/Hoge';

// Class Componentの書き方
// stateの設定方法　constructor()内で宣言する　オブジェクト型で記述
// class Blog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPublished: false,
//       count: 0
//     }
//   }
const Blog = () => {

  // componentDidMount() {
  //   // ボタンがクリックされたらいいねをカウントアップする
  //   document.getElementById('counter').addEventListener('click', this.countUp)
  // }

  // componentDidUpdate(){
  //   if (this.state.count >= 10) {
  //       this.setState({count: 0})
  //   }
  // }

  // componentWillUnmount() {
  //   document.getElementById('counter').removeEventListener('click', this.countUp)
  // }

  // 公開状態を反転させる関数　　setState()で値を変更する 関数にラップするのが一般的
  // setState()内に記述されたstateのみを変更
  // togglePublished = () => {
  //   this.setState({
  //     isPublished: !this.state.isPublished
  //   })
  // };

  // countUp = () => {
  //   this.setState({ count: this.state.count + 1 })
  // };

  // renderの中で値の変更してはいけない
　// stateの取得　同コンポーネント内ならthis.state.key名で取得　　子コンポーネントで参照したい場合はpropsとして渡す
  // render() {
    return (
      <>
        <Article 
            title="Reactの使い方" 
            // isPublished={this.state.isPublished} 
            // toggle={() => this.togglePublished()}
            // count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    )
}

export default Blog