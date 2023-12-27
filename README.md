This react-native project corresponds to a [Pluralsight course on React Native Fundamentals by Reggie Dawson](https://www.pluralsight.com/courses/fundamentals-react-native) 

>Course Description : React Native is a powerful framework that allows you to build mobile apps using JavaScript. This course will teach you to build a complete mobile app using the tools available in React Native.

# Components in this project and their features

## Register.js & Login.js

1. Use of async storage
2. Basic Login and Register functionality
3. Flex styling
4. Add styling to touchableHilight instead of <Text> inside

## Header.js HomeScreen.js Hero.js Menu.js

1. Custom Header
2. Dynamic Header
3. image as background
4. bottom button cluster
5. multiple components in home screen

## Blog.js BlogDetails.js

1. API fetch
2. Complex Parent - child component structure
3. condition based render
4. passing props/properties/paramters via navigation
5. Flatlist
6. useEffect
7. render html

```javascript
const dimention = useWindowDimensions();
console.log(dimention.width);

//same as

const {width} = useWindowDimensions();
console.log(width);
```

```javascript
{
   blogList.map((x) => (
            <Text>{x.ID}</Text>
   ))
}

// check the difference in the internal variable

<FlatList
   data={blogList}
   renderItem={({ item }) => (
     <Text>{item.ID}</Text>
   )}
 />

```

```javascript
const Blog = ({navigation})=>{
   const blogId=7;
   navigation.navigate("BlogDetail",{blogID:blogId})
}

// next component

const BlogDetail = ({route,navigation})=>{
   const {blogID} = route.props
   //or
   //const blogId = route.params.blogId;
}

```



