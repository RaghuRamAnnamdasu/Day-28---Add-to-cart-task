import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { AppBar, Toolbar } from '@mui/material';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

var data=[
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "no",
    name : "Fancy Product",
    rating : 0,
    prevCost : "",
    currentCost : "$40.00 - $80.00",
    button : "view options"
  },
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "yes",
    name : "Special Item",
    rating : 5,
    prevCost : "$20.00",
    currentCost : "18.00",
    button : "Add to Cart"
  },
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "yes",
    name : "Sale Item",
    rating : 0,
    prevCost : "$50.00",
    currentCost : "$25.00",
    button : "Add to Cart"
  },
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "no",
    name : "Popular Item",
    rating : 5,
    prevCost : "",
    currentCost : "$40.00",
    button : "Add to Cart"
  },
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "yes",
    name : "Sale Item",
    rating : 0,
    prevCost : "$50.00",
    currentCost : "$25.00",
    button : "Add to Cart"
  },
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "no",
    name : "Fancy Product",
    rating : 0,
    prevCost : "",
    currentCost : "$120.00 - $280.00",
    button : "view options"
  },
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "yes",
    name : "Special Item",
    rating : 5,
    prevCost : "$20.00",
    currentCost : "$18.00",
    button : "Add to Cart"
  },
  {
    poster : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    sale : "no",
    name : "Popular Item",
    rating : 5,
    prevCost : "",
    currentCost : "$40.00",
    button : "Add to Cart"
  } 
];

function App() {
  const[count,setCount] = useState(0);
  return (
    <div className="App">
      <AppBar />
      <NavBar count={count}/>
      <Header />
      <div className="ItemsContainer">
        {data.map((value,index)=>{
          // console.log(value);
          return(
            <ItemCard  cardContent={value} id={index} count={count} setCount={setCount}/>
          )
        } 
        )}
      </div>
      <Footer />
    </div>
  );
}

function NavBar({count}){
  const navigate = useNavigate();
  const[state,setState] = useState(false); 
  return(
    <AppBar position="static" className = "navBarEnclosure">
      <Toolbar className = "navBarSubEnclosure"> 
        <div className = "title">
          <a href="#">Start Bootstrap</a>
        </div>
        <div className = "section1">
          <Button color="inherit" onClick = {()=> navigate("/")}>Home</Button>
          <Button color="inherit" onClick = {()=> navigate("/")}>About</Button>
          <Button color="inherit" className = "shopButton" onClick = {()=> {
              setState(!state);
              navigate("/");
            }}>Shop&nbsp;<ArrowDropDownIcon />
            { state ? <div className="dropDownList"><ul >
            <li className = "dropDownItem"><a href = "#">All Products</a></li>
            <li ><hr className = "breakItem"></hr></li>
            <li className = "dropDownItem"><a href = "#">Popular Items</a></li>
            <li className = "dropDownItem"><a href = "#">New Arrivals</a></li>
          </ul> </div>: null }
          </Button>
          
        </div>
        <div className = "section2">
          <Button color="inherit" variant = "outlined" onClick = {()=> navigate("/")}>
            <div className = "cartIcon">
              <ShoppingCartIcon fontSize='small'/>
            </div>
            <div className = "cartDescription">
              Cart
            </div>
            <div className = "cartCount">
              {count}
            </div>
          </Button>
        </div>
       
      </Toolbar>
    </AppBar>
  );
}

function Header(){
  return(
    <div className="header">
      <div className="heading">
        <h1 className="heading-text">Shop in style</h1>
        <p className = "suffix-text">With this shop homepage template</p>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <div className="footer">
      <div>Copyright © Your Website 2022</div>
    </div>
  )
}

function ItemCard({cardContent,id,count,setCount}) {
  console.log(cardContent,cardContent.poster,cardContent.sale,cardContent.name,cardContent.rating,cardContent.prevCost,cardContent.currentCost,cardContent.button);
  var output="";
  if(cardContent.rating>0){
    for(var i=0;i<cardContent.rating;i++) {
      output=output+"⭐";
    }
  }
  return(
    <Card className = "card">
      <div className = "imageWrapper">
        <img className = {`image image-internal${id}`} src = {cardContent.poster} alt = {cardContent.name} />
        {cardContent.sale==="yes" ? <span className={`sale${id}`}>Sale</span> : <span></span>}
      </div>
      <CardContent className = "cardContent">
        <div className = "name">{cardContent.name}</div>
        {cardContent.rating>0 ? <div className = "rating">{output}</div> : ""}
        {cardContent.prevCost==="" ? <div className='cost'>{cardContent.currentCost}</div> : <div className='cost'><strike>{cardContent.prevCost}</strike> {cardContent.currentCost}</div>}
        <Button className = {cardContent.button === "Add to Cart" || cardContent.button === "view options" ? "addToCartButton" : "removeButton"} 
          variant="outlined" onClick={()=>{
            if(cardContent.button==="Add to Cart"){
              var temp = count;
              setCount(temp+1);
              cardContent.button = "Remove"
            } else if(cardContent.button==="Remove"){
              var temp = count;
              setCount(temp-1);
              cardContent.button = "Add to Cart"
            }
          }}>{cardContent.button}
        </Button>
      </CardContent>
    </Card>
  );
}


export default App;
