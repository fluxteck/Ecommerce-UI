// hooks/useMessageWithInsets.js
"use client";
import { useContext } from "react";
import { MessageContext } from "../providers/messageContext";
import { close, open } from "../components/functions/message";

const useMessage = () => {
  //   const [messageApi, contextHolder] = useMessage();
  const { messageApi } = useContext(MessageContext);

  const openMessage = (content) => {
    open(messageApi, content);
  };

  const closeMessage = (msg, type, duration) => {
    close(messageApi, msg, type, duration);
  };

  return { openMessage, closeMessage, messageApi };
};

export default useMessage;
