import { StyleSheet, Text, View, FlatList, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import RenderHTML from "react-native-render-html";

const BlogItem = (props) => {
  const { width } = useWindowDimensions();

  const renderersProps = {
    a: {
      onPress(event, url, htmlAttribs, target) {
        props.choosePost(props.id);
      },
    },
  };

  const blogItems = {
    html: `
    <a
        href=${props.id}
        style="
            text-decoration-line : none;
            color : #000000
            textAlign: center"
    >
        <img src=${props.imageSrc}/>
        <h1>${props.title}</h1>
        ${props.excerpt}
    </a>
    `,
  };

  return (
    <View style={{ borderBottomWidth: 2, borderBottomColor: "#000000", borderStyle: "solid" }}>
      <RenderHTML source={blogItems} renderers={renderersProps} contentWidth={width} />
    </View>
  );
};

const Blog = ({ navigation }) => {
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [blogList, setBlogList] = useState();

  const getPost = async () => {
    try {
      const response = await fetch('https"//public-api.wordpress');
      const globo = await response.json();
      setBlogList(Array.from(globo.posts));
    } catch (error) {
      console.error(error);
    } finally {
      setBlogLoaded(true);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const chooseBlog = (blogID) => {
    navigation.navigate("BlogDetail", { blogId: blogID });
  };

  return (
    <View>
      {blogLoaded && (
        <View>
          <FlatList
            data={blogList}
            keyExtractor={(item) => item.ID.toString()}
            renderItem={({ item }) => {
              <BlogItem id={item.ID} title={item.title} imageSrc={item.featured_image} excerpt={item.excerpt} choosePost={chooseBlog} />;
            }}
          />
        </View>
      )}
      {!blogLoaded && (
        <View>
          <Text>LOADIND</Text>
        </View>
      )}
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({});
