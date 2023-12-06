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
        ${props.id}
        ${props.excerpt}
    </a>
    `,
  };
  7;

  return (
    <View style={{ borderBottomWidth: 2, borderBottomColor: "#000000", borderStyle: "solid" }}>
      <RenderHTML source={blogItems} renderersProps={renderersProps} contentWidth={width} />
    </View>
  );
};

const Blog = ({ navigation }) => {
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [blogList, setBlogList] = useState();

  const getPost = async () => {
    try {
      const response = await fetch("https://public-api.wordpress.com/rest/v1.1/sites/martinmelodev.wordpress.com/posts");
      const globo = await response.json();
      setBlogList(Array.from(globo.posts));
      console.log(typeof blogList);
    } catch (error) {
      console.error(error);
    } finally {
      setBlogLoaded(true);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  //navigation
  const chooseBlog = (blogID) => {
    navigation.navigate("BlogDetail", { blogId: blogID });
  };

  //we are getting the data here from api
  //data is in Array
  //flatlist on this array
  //BlogItem is the component being rendered
  //we have a funtional component for navigation, we will be passing that to BlogItem
  //as BlogItem is a not a default componenet and so it wont have navigation in it (Blog is main and has navigation)
  //the final list renderd should have a button that would navigate to seperate page

  // a functional componenet for navigation (chooseBlog) defined in the Parent component (Blog) is passes to a child component (BlogItem) as a prop, so that when the items are rendered with the structure defined in BlogItem containing a button (which will give more info about Blog), this button could use the navigation prop (from stack navigator) of parent component and navigate to BlogDetail
  return (
    <View>
      {blogLoaded && (
        <View>
          <FlatList
            data={blogList}
            keyExtractor={(item) => item.ID.toString()}
            renderItem={({ item }) => (
              <BlogItem
                id={item.ID}
                title={item.title} //
                imageSrc={item.featured_image}
                excerpt={item.excerpt}
                choosePost={chooseBlog}
              />
            )}
          />
          <Text>asef</Text>
          {/* {blogList.map((x) => (
            <Text>{x.ID}</Text>
          ))} */}
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
