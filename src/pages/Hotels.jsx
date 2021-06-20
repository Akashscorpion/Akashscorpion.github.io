import React,{useState} from 'react';
import Header from './Head'
import '../styles/HotelStyle.css'
import data from '../data/data.json'
import RestaurantCard from '../components/RestaurantCard'
function Hotels() {
  

    const [list, setState] = useState({list: data})
    const sortMenu=(e)=>{
        if (e.target.value === 'rating'){
            this.setState({
                list: data.sort(function(a,b){return b.rating - a.rating})
            })
            
        }
        else if (e.target.value === 'review'){
            this.setState({
                list: data.sort(function(a,b){return b.reviews - a.reviews})
            })
            
        }
        else if (e.target.value === 'name'){
            function compareName  (a, b)  {
                // case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();
              
                return (a < b) ? -1 : (a > b) ? 1 : 0;
              }
            this.setState({
                list: data.sort(function(a,b){return compareName(a.name, b.name)})
            })
            
        }
        
    }

        return(
          
        <div>
            
            
            <div className="maincart">

          <Header/>
          <div id="menubar">
                <p id ="sort">  Sort by &nbsp; &nbsp;
                    <select id="sort-metrics" defaultValue={"none"} onChange={(e) => sortMenu(e)}>
                        <option value="none" disabled hidden>None</option>
                        <option class="sort-option" value="name">Name</option>
                        <option class="sort-option" value="rating">Ratings</option>
                        <option class="sort-option" value="review">Reviews</option>
                    </select>
                </p>
            </div>
            {list.list.map(
                x => 
                    <RestaurantCard thumbnail_image={x.thumbnail_image} name = {x.name} cuisines = {x.cuisines} rating = {x.rating} reviews = {x.reviews}/>
                    
            )}

        
            
            </div>
        </div>
        )
    };

export default Hotels;