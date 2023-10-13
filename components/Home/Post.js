import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const Post = ({ post }) => {
  return (
    <>
      <View style={styles.postContainer}>
        <PostHeader post={post} />
        <PostImage post={post} />
        <PostFooter post={post} />
      </View>
      <View
        style={{
          borderBottomColor: "lightgrey",
          borderBottomWidth: 0.2,
        }}
      />
    </>
  );
};
const PostHeader = ({ post }) => {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://instagram.fktm10-1.fna.fbcdn.net/v/t51.2885-19/348316050_1024199228564266_5289744828806785661_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fktm10-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=JlLtkiunoesAX9iVAYD&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCKpMCPg2ETp6COWhw1i8QB5Cu0NZwIEPvxv6VvQGVSGA&oe=652E05C2&_nc_sid=8b3546",
          }}
        />
        <Text style={{ color: "black", paddingLeft: 10, fontWeight: "600" }}>
          subhashishjungshah
        </Text>
      </View>
      <TouchableOpacity>
        <Image
          style={{
            width: 30,
            height: 30,
            marginRight: 5,
            backgroundColor: "white",
          }}
          source={{
            uri: "https://static.thenounproject.com/png/4068451-200.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View>
      <Image
        style={styles.postImage}
        source={{
          uri: "https://media.licdn.com/dms/image/C4E03AQEA5Uum6wjlcA/profile-displayphoto-shrink_400_400/0/1641916848146?e=2147483647&v=beta&t=3ODSl4ZxMf1SnQT0RzW9aiW6aeCGHiMmmGfVt84c9SU",
        }}
      />
    </View>
  );
};
const PostFooter = ({ post }) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.footerContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* left icons */}
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              style={styles.icons}
              source={{
                uri: "https://img.icons8.com/ios/24/null/hearts--v1.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 25,
                height: 25,
                marginRight: 15,
                backgroundColor: "white",
                borderRadius: 10,
              }}
              source={{
                uri: "https://img.icons8.com/ios/24/null/speech-bubble--v1.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{
                width: 20,
                height: 20,
                marginRight: 15,
                backgroundColor: "white",
              }}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/5728/5728145.png",
              }}
            />
          </TouchableOpacity>
        </View>
        {/* save icon */}
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={{
              uri: "https://img.icons8.com/material/24/null/bookmark-outline.png",
            }}
          />
        </TouchableOpacity>
      </View>

      {/* likes */}
      <View>
        <View style={{ marginVertical: 5 }}>
          <Text style={{ color: "black", fontSize: 12 }}>10 likes</Text>
        </View>
        {/* caption */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "black",
              fontWeight: "600",
            }}
          >
            {"subhashishjungshah" + " "}
            <Text
              style={{
                color: "grey",
                fontSize: 12,
              }}
            >
              Hello everyone
            </Text>
          </Text>
        </View>
      </View>
      {/* comments
      <View>
        {post.comments && post.comments.length > 0 ? (
          <TouchableOpacity onPress={() => setOpen(!open)}>
            <Text style={{ color: "white", marginVertical: 5 }}>
              {!open ? "Show All comments" : "Hide Comments"}
            </Text>
          </TouchableOpacity>
        ) : null}
        <View style={{ display: !open ? "none" : "flex" }}>
          {post &&
            post.comments.map((comment, index) => {
              return (
                <View key={index}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      margin: 3,
                    }}
                  >
                    <Image
                      style={{
                        height: 30,
                        width: 30,
                        borderColor: "lightblue",
                        borderWidth: 1,
                        borderRadius: 50,
                      }}
                      source={{
                        uri: comment.image,
                      }}
                    />
                    <Text
                      style={{
                        color: "white",
                        paddingLeft: 10,
                      }}
                    >
                      {comment.user}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "grey",
                      fontSize: 12,
                      marginLeft: 45,
                    }}
                  >
                    {comment.comment}
                  </Text>
                </View>
              );
            })}
        </View>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  headerImage: {
    height: 50,
    width: 50,
    borderColor: "black",
    borderWidth: 0.2,
    borderRadius: 50,
  },
  postImage: {
    height: 400,
    resizeMode: "cover",
  },
  postContainer: {
    padding: 2,
  },
  postHeaderContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerContainer: {
    padding: 5,
    margin: 5,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    width: 30,
    height: 30,
    marginRight: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default Post;
