import logo from './logo.svg';
import { Input, Menu, Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Search } = Input;
const onSearch = value => console.log(value);
function App() {
  return (
    <div className="App">
      <div id="header">
        <Row>
          <Col span={8}>
            <a id="logo">
              <img src={logo} className={logo}/>Ant Design
            </a>
          </Col>
          <Col span={3}>
            <div id="search-box">
              <Search placeholder="搜索" onSearch={onSearch} style={{ width: 200 }} />
            </div>
          </Col>
          <Col span={13}>
            <Menu>
              <Menu.Item key="design">
                <a href="https://ant.design/docs/spec/introduce-cn" target="_blank" rel="noopener noreferrer">
                  设计
                </a>
              </Menu.Item>
              <Menu.Item key="document">
                <a href="https://ant.design/docs/react/introduce-cn" target="_blank" rel="noopener noreferrer">
                  文档
                </a>
              </Menu.Item>
              <Menu.Item key="component">
                <a href="https://ant.design/docs/spec/introduce-cn" target="_blank" rel="noopener noreferrer">
                  组件
                </a>
              </Menu.Item>
              <Menu.Item key="resource">
                <a href="https://ant.design/docs/resources-cn" target="_blank" rel="noopener noreferrer">
                  资源
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
