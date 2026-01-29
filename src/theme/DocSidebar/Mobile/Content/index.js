import React from 'react';
import Content from '@theme-original/DocSidebar/Mobile/Content';
import {
  useActivePlugin,
  useVersions,
  useActiveDocContext,
  useDocsPreferredVersion,
} from '@docusaurus/plugin-content-docs/client';
import {useHistorySelector} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function getVersionTargetDoc(version, activeDocContext) {
  const alternateDoc = activeDocContext.alternateDocVersions[version.name];
  if (alternateDoc) {
    return alternateDoc;
  }
  const mainDoc = version.docs.find((doc) => doc.id === version.mainDocId);
  return mainDoc;
}

function VersionDropdown({pluginId}) {
  const versions = useVersions(pluginId);
  const activeDocContext = useActiveDocContext(pluginId);
  const {savePreferredVersionName} = useDocsPreferredVersion(pluginId);
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  if (!versions || versions.length <= 1 || !activeDocContext) {
    return null;
  }

  const currentVersion = activeDocContext?.activeVersion?.name ?? 'current';

  const handleVersionChange = (e) => {
    const selectedVersionName = e.target.value;
    if (selectedVersionName === currentVersion) return;

    const selectedVersion = versions.find((v) => v.name === selectedVersionName);
    if (!selectedVersion) return;

    const targetDoc = getVersionTargetDoc(selectedVersion, activeDocContext);
    if (!targetDoc) return;

    savePreferredVersionName(selectedVersionName);
    window.location.href = `${targetDoc.path}${search}${hash}`;
  };

  return (
    <div className={styles.versionDropdown}>
      <label className={styles.versionLabel} htmlFor="version-select-mobile">
        Version:
      </label>
      <select
        id="version-select-mobile"
        className={styles.versionSelect}
        value={currentVersion}
        onChange={handleVersionChange}
        aria-label="Select documentation version"
      >
        {versions.map((version) => (
          <option key={version.name} value={version.name}>
            {version.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function ContentWrapper(props) {
  const activePlugin = useActivePlugin();

  return (
    <>
      {activePlugin && (
        <VersionDropdown pluginId={activePlugin.pluginId} />
      )}
      <Content {...props} />
    </>
  );
}
