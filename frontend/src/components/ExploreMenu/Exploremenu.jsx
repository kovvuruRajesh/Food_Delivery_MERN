import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Dive into our diverse menu, crafted with passion and precision to cater to every palate. From sumptuous appetizers to delightful desserts, our selection promises to excite your taste buds and satisfy your culinary cravings. Click on any category to discover the unique flavors we offer.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu
