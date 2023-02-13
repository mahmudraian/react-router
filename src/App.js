
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Components/Layout/Main';
import Friends from './Components/Friends/Friends';
import Frienddetails from './Components/Frienddetails/Frienddetails';
import Posts from './Components/Posts/Posts';
import Postdetails from './Components/Postdetails/Postdetails';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
      {path:'/', element:<div>This is Default page</div>},
      {path: '/home',element:<Home></Home>},
      {path: '/about',element:<About></About>},
      {path: '/products', element:<Products></Products>},
      {path: '/friends',
      loader: async () => {
        return fetch('https://jsonplaceholder.typicode.com/users');
      },
      
      element:<Friends></Friends>},
      {path:'/friend/:friendid',

      loader : async({params})=>{
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendid}`)
      },
      element:<Frienddetails></Frienddetails>},

      {path: '/posts',
      loader: async()=>{
       return fetch('https://jsonplaceholder.typicode.com/posts')
      },element:<Posts></Posts>},
      {path:'/post/:postid',
        loader: async({params})=>{
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
        },
      
      element:<Postdetails></Postdetails>}
    ]},
    {path:'*',element:'Error 404!'},
   
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
