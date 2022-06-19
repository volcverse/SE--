import React from "react";
import * as antd from "antd";
 
const { Upload, Button, Icon, message } = antd;
 
class Wrapper extends React.Component {
  state = {};
 
  // 新打开界面
  componentDidMount() {}
 
  onChange = ({ file }) => {
    if (file.status === "done") {
      message.success(`${file.name} file uploaded successfully`);
      console.log(file);
      const {
        response: { code, msg, data }
      } = file;
 
      this.props.onOk({ code, msg, data });
    } else if (file.status === "error") {
      message.error(`${file.name} file upload failed.`);
    }
  };
 
  // 渲染
  render() {
    const { url } = this.props;
    const props = {
      name: "file",
      action: url,
      showUploadList: false,
      headers: {
        authorization: "authorization-text"
      },
      onChange: this.onChange
    };
 
    return (
      <Upload {...props}>
        <Button
          style={{ marginLeft: 20 }}
          onClick={() => {
            console.log("hhhh");
          }}
        >
          <Icon type="upload" />
          从文件导入
        </Button>
      </Upload>
    );
  }
}
 
export default Wrapper;