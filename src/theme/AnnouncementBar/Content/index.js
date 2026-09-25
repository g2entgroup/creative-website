import React from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

const SMS_PAGE_ANNOUNCEMENT = 'Creative Platform for creators, fans and brands.';

function isSmsOptInPath(pathname) {
  return pathname === '/sms' || pathname === '/sms/';
}

export default function AnnouncementBarContent(props) {
  const {pathname} = useLocation();
  const {announcementBar} = useThemeConfig();
  const {content} = announcementBar ?? {content: ''};

  if (isSmsOptInPath(pathname)) {
    return (
      <div {...props} className={clsx(styles.content, props.className)}>
        {SMS_PAGE_ANNOUNCEMENT}
      </div>
    );
  }

  return (
    <div
      {...props}
      className={clsx(styles.content, props.className)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: content}}
    />
  );
}
