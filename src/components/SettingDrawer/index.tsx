import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {Button, Drawer, Icon} from 'antd';
import { formatMessage } from 'umi/locale';
import styles from './index.less';
import ThemeColor from './ThemeColor';

interface Props {
  children: React.ReactNode;
  title: string;
  style: object;
}

const Body = (props: Props) => (
  <div
  style={{...props.style, marginBottom: 24}}>
    <h3 className={styles.title}>{props.title}</h3>
    {props.children}
  </div>
);

const mapStateToProps = (state: any) => ({
  setting: state.setting
})

@connect(mapStateToProps)
export default class extends PureComponent {
  state = {collapse: false};
  toggleContent = () => {
    this.setState({collapse: !this.state.collapse});
  }
  changeSetting = (parameters: { key: any, value: any }) => {
    let {key, value} = parameters;
    const {setting, dispatch}: Readonly<{ children?: React.ReactNode }> & Readonly<any> = this.props;
    const nextState = {...setting};
    nextState[key] = value;
    this.setState(nextState, () => {
      dispatch({
        type: 'setting/changeSetting',
        payload: this.state
      });
    });
  }
  render () {
    const {dispatch, setting}: Readonly<{ children?: React.ReactNode }> & Readonly<any> = this.props;
    const {primaryColor} = setting;
    const {collapse} = this.state;
    console.log(formatMessage({id: 'app.setting.themecolor'}))
    return (
      <Drawer
        visible={collapse}
        width={300}
        onClose={this.toggleContent}
        handler={
          <div className={styles.handle}>
            <Icon
            type={collapse ? 'close' : 'setting'}
            style={{color: '#fff', fontSize: 20}}/>
          </div>
        }
        onHandleClick={this.toggleContent}
        style={{zIndex: 999}}
      >
        <div className={styles.content}>
          <ThemeColor
          title={formatMessage({id: 'app.setting.themecolor'})}
          value={primaryColor}
          onChange={color => this.changeSetting({key: 'primaryColor', value: color})}/>
        </div>
      </Drawer>
  )
  }
}
