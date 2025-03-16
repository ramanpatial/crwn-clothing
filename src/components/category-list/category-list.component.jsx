
import CategoryItem  from "../category-item/category-item.component";
import './category-list.styles.scss';

const CategoryList = (props)=>
{
const {categories}=props;

      return (
       <div className="categories-container">
        {categories.map((cat)=>
        
        <CategoryItem key={cat.id} category={cat} ></CategoryItem>
                )}
      </div>
      );
}

export default CategoryList;