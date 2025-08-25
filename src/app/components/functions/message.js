const open = (messageApi, content) => {
  messageApi.open({
    key: "updatable",
    type: "loading",
    duration: 0,
    content: content,
  });
};
function close(messageApi, msg, type, duration = 3) {
  messageApi.open({
    key: "updatable",
    type: type,
    content: msg,
    duration: duration,
  });
}

export { open, close };
