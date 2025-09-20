// ChatScreen.jsx
import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function ChatScreen() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);

  // Bot responses
  const botResponses = {
    "Hello there": "hi Kent Joseph, nice to meet you",
    "How are you": "I’m doing great, thanks for asking!",
    "gwapo si james": "Ooh gwapo jud kaayo",
    "Hi": "hello my friend.",
    bye: "Goodbye! Have a nice day.",
  };

  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      text: message,
      sender: "me",
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");

    // Bot reply only if recognized
    const lower = message.toLowerCase();
    if (botResponses[lower]) {
      setTimeout(() => {
        const botMessage = {
          id: (Date.now() + 1).toString(),
          text: botResponses[lower],
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 500);
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sender === "me" ? styles.myMessage : styles.botMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* ✅ Messages begin from the top */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatContainer}
        inverted={false} // show from top → bottom
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingTop: 40 },
  chatContainer: { padding: 10 },
  messageBubble: {
    maxWidth: "70%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 15,
  },
  myMessage: {
    backgroundColor: "#0084ff",
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },
  botMessage: {
    backgroundColor: "#ddd",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
  messageText: { fontSize: 16, color: "#000" },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 10,
    justifyContent: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});