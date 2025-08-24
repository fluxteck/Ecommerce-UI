"use client";
import React, { createContext } from "react";
// import BackdropComponent from "./components/ui/backdrop";
import { message } from "antd";

// Create the context
const MessageContext = createContext();

// Create a provider component
const MessageProvider = ({ children }) => {
  //   const [backDropOpen, setBackDropOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <MessageContext.Provider
      value={{
        messageApi,
      }}
    >
      {contextHolder} {children}
      {/* <BackdropComponent
        open={backDropOpen}
        showProgress={showProgress}
        progress={progress}
      /> */}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
