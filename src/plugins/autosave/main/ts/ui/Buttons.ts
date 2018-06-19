/**
 * Buttons.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2017 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import Storage from '../core/Storage';

const postRender = function (editor) {
  return function (e) {
    const ctrl = e.control;

    ctrl.disabled(!Storage.hasDraft(editor));

    editor.on('StoreDraft RestoreDraft RemoveDraft', function () {
      ctrl.disabled(!Storage.hasDraft(editor));
    });
  };
};

const register = function (editor) {
  editor.addButton('restoredraft', {
    title: 'Restore last draft',
    onclick () {
      Storage.restoreLastDraft(editor);
    },
    onPostRender: postRender(editor)
  });

  editor.addMenuItem('restoredraft', {
    text: 'Restore last draft',
    onclick () {
      Storage.restoreLastDraft(editor);
    },
    onPostRender: postRender(editor),
    context: 'file'
  });
};

export default {
  register
};