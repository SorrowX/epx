'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');
var vue3 = require('@tiptap/vue-3');
var video = require('./video.js');

var Video = core.Node.create({
  name: "video",
  group: "inline",
  inline: true,
  addAttributes() {
    return {
      id: {
        default: ""
      },
      class: {
        default: ""
      },
      src: {
        default: ""
      },
      controls: {
        default: true
      },
      autoplay: {
        default: false
      },
      loop: {
        default: false
      },
      muted: {
        default: false
      },
      poster: {
        default: ""
      },
      width: {
        default: 200
      },
      height: {
        default: ""
      },
      preload: {
        default: "auto"
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "video"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["video", core.mergeAttributes(HTMLAttributes)];
  },
  addNodeView() {
    return vue3.VueNodeViewRenderer(video["default"]);
  }
});

exports["default"] = Video;
//# sourceMappingURL=index.js.map
