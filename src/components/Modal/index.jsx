import { Modal, Button } from 'antd';

export default class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(this.props);
    // this.props.onOk()
    this.setState({
      visible: false,
    });
  };

  handleClick = e => {
    console.log(this.props.tit);
    this.props.onOk()
    // this.setState({
    //   visible: false,
    // });
  };

  handleCancel = e => {
    console.log(e);
    this.props.onOk()
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div style= {{display:'inline'}}>
        <Button type={this.props.color} onClick={this.showModal}>
          {this.props.btn}
        </Button>
        <Modal
          title="提示"
          visible={this.state.visible}
          // onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={this.props.width || '520px'}
          okButtonProps={{onClick:this.handleClick}}
        >
          {/* <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p> */}
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

