import React from 'react';
import styles from './index.less';
import SettingDrawer from '@/components/SettingDrawer';

//const SettingDrawer = React.lazy(() => import('@/components/SettingDrawer'));

function BasicLayout(props: { children: React.ReactNode; }) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      { props.children }
      <SettingDrawer/>
    </div>
  );
}

export default BasicLayout;
