import React, {useState, useEffect} from 'react';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

// Versions list - this should match your versions.json
const VERSIONS = [
  '1.1.0',
  '1.0.9',
  '1.0.8',
  '1.0.7',
  '1.0.6',
  '1.0.5',
  '1.0.4',
  '1.0.3',
  '1.0.2'
];

export default function ContentWrapper(props) {
  const location = useLocation();
  const [currentVersion, setCurrentVersion] = useState('current');
  
  // Extract current version from path
  useEffect(() => {
    const pathMatch = location.pathname.match(/^\/docs\/([^/]+)/);
    if (pathMatch) {
      const versionFromPath = pathMatch[1];
      // Check if it's a versioned path
      if (versionFromPath === 'next') {
        setCurrentVersion('next');
      } else if (VERSIONS.includes(versionFromPath)) {
        setCurrentVersion(versionFromPath);
      } else {
        // If no version in path, it's the current/latest version
        setCurrentVersion('current');
      }
    } else {
      setCurrentVersion('current');
    }
  }, [location.pathname]);
  
  // Only show version dropdown on docs pages if there are multiple versions
  const showVersionDropdown = VERSIONS.length > 0 && location.pathname.startsWith('/docs');

  const handleVersionChange = (e) => {
    const selectedVersion = e.target.value;
    if (selectedVersion !== currentVersion) {
      // Get the current path without the version prefix
      const pathMatch = location.pathname.match(/^\/docs\/([^/]+)(\/.*)?$/);
      let pathWithoutVersion = '';
      
      if (pathMatch) {
        if (pathMatch[1] === 'next' || VERSIONS.includes(pathMatch[1])) {
          // Current path has a version, extract the rest
          pathWithoutVersion = pathMatch[2] || '/intro';
        } else {
          // Current path doesn't have a version, keep the full path
          pathWithoutVersion = location.pathname.replace(/^\/docs/, '') || '/intro';
        }
      } else {
        pathWithoutVersion = location.pathname.replace(/^\/docs/, '') || '/intro';
      }
      
      // Navigate to the selected version
      const newPath = selectedVersion === 'current' 
        ? `/docs${pathWithoutVersion}`
        : `/docs/${selectedVersion}${pathWithoutVersion}`;
      window.location.href = newPath;
    }
  };

  return (
    <>
      {showVersionDropdown && (
        <div className={styles.versionDropdown}>
          <label className={styles.versionLabel}>Version:</label>
          <select
            className={styles.versionSelect}
            value={currentVersion}
            onChange={handleVersionChange}
          >
            <option value="current">Current</option>
            <option value="next">Next</option>
            {VERSIONS.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      )}
      <Content {...props} />
    </>
  );
}
