import React from "react";

const BlogPost = ({ title, body }) => {
  return (
    <div style={styles.container}>
      <img
        src={
          "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
        }
        alt="Random"
        style={styles.image}
      />
      <h1 style={styles.title}>{title}</h1>

      <p style={styles.body}>{body}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "20px",
    borderRadius: "8px",
  },
  title: {
    fontSize: "2em",
    marginBottom: "10px",
    color: "#333",
  },
  body: {
    fontSize: "1.2em",
    lineHeight: "1.6",
    color: "#666",
  },
};

export default BlogPost;
