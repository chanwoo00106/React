import React from 'react';
import Responsive from '../components/common/Responsive';
import WriteActionButtonsContainer from '../components/write/WriteActionButtonsContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

export default function WritePage() {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButtonsContainer />
    </Responsive>
  );
}
