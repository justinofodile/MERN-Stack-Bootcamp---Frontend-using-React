// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import ConditionalRenderingComponent from "./components/ConditionalRenderingComponent";
import SubComponent from "./components/SubComponent";
import List from "./components/List";
import CounterAppComponent from "./components/CounterAppComponent";
import Form from "./components/Form";
import RegistrationForm from "./components/RegistrationForm";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ComponentOne from "./components/ComponentOne";
import CourseContext from "./components/context/courseContext";
import UseEffectCom from "./components/UseEffectCom";
import Timer from "./components/Timer";
import Posts from "./components/Posts";
import UseReducerComp from "./components/useReducerComp";
import ComplexCounter from "./components/ComplexCounter";
import PostListWithoutReducer from "./components/PostListWithoutReducer";
import PostListWithReducer from "./components/PostListWithReducer";
import PostListWithCustomHook from "./components/PostListWithCustomHook";
import CssStyle from "./components/CssStyle";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/Navbar";
import OrderComfirmation from "./components/pages/OrderCOmfirmation";
import NotFound from "./components/pages/NotFound";
import PostList from "./components/pages/PostList";
import PostDetail from "./components/pages/PostDetail";
import HotPosts from "./components/pages/HotPosts";
import ProductList from "./components/pages/ProductList";
import FeaturedProducts from "./components/pages/FeaturedProducts";
import NewProducts from "./components/pages/NewProducts";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      {/* <p>Hello from App Component</p> */}
      {/* <SubComponent>The children property</SubComponent> */}

      {/* <ConditionalRenderingComponent /> */}
      {/* <List /> */}
      {/* <CounterAppComponent /> */}
      {/* <Form /> */}
      {/* <RegistrationForm /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <CourseContext.Provider
        value={{ course: "react", data: "Component two data" }}
      >
        <ComponentOne />
      </CourseContext.Provider> */}

      {/* <UseEffectCom /> */}
      {/* <Timer /> */}
      {/* <Posts /> */}
      {/* <UseReducerComp /> */}
      {/* <ComplexCounter /> */}
      {/* <PostListWithoutReducer /> */}
      {/* <PostListWithReducer /> */}

      {/* <PostListWithCustomHook /> */}
      {/* <CssStyle /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="posts" element={<PostList />} />
        <Route path="posts/:postId" element={<PostDetail />} />
        <Route path="posts/hot" element={<HotPosts />} />
        <Route path="products" element={<ProductList />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="order-confirmation" element={<OrderComfirmation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
