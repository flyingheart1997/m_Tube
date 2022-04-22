import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import './_categoriesBar.scss'

const keyword=[
  "All",
  "Sunday suspance",
  "Movies",
  "South Movies",
  "Tamil Movies",
  "Bollywood Movies",
  "Hollywood Movies",
  "Gaming",
  'Sports',
  "Comedy",
  'Autos & Vehicles',
  'Blogs',
  "Cartoon",
  "React js",
  'Entertainment',
  'Shows',
  "Music",
  'Horror',
  'Thriller',
  'Travel & Events',
  'Family',
  'Drama',
  "React Native",
  'Action',
  'Classics',
  'Adventure',
  'Documentary',
  'Trailers',
  'Pets & Animals',
  "Angular js",
  'Animation',
  'Grapgics',
  'Android',
  "Use of Api",
  "Redux",
  "C++",
  'Science & Technology',
  "Java",
  'Education',
  "Python",
  "Ruby",
  "Git",
  "News",
  "Politics",
  "Git Hub",
  "View js",
  "Next js",
  "Flutter",
  "Kotlin",
  "Html",
  "Css",
  "Sass",
  "Bootstrap",
  "Material Design",
  "Ui/Ux Design",
  "Wordpress"
]

const CategoriesBar = () => {
  const [activeEliment, setActiveElement]= useState('All')

  const dispatch = useDispatch()
  const handleClick = (value)=>{
    setActiveElement(value)
    if(value === 'All'){
      dispatch(getPopularVideos());
    }
    else{
      dispatch(getVideosByCategory(value));
      
    }
  }


  return (
    <div className='CategoriesBar'>
      {
        keyword.map((value,i) => (
          <span onClick={() => handleClick(value)} key={i}
            className={activeEliment === value ? 'active' : ''}
          >
            {value}
          </span>
          ))}
    </div>
  )
}

export default CategoriesBar