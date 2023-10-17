
import {Swiper, SwiperSlide} from 'swiper/react'
import {  Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import { useNavigate, createSearchParams } from 'react-router-dom';


const CarouselCatgory = () => {

    const navigate = useNavigate()

    const searchCatgory = (category)=>{
        navigate({
            pathname: "search",
            search: `${ createSearchParams({
                category: `${category}`
            })}`
        })

    }




  return (
    <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>Shop by Category</div>
        <Swiper
           slidesPerView={5}
           spaceBetween={10}
           navigation={true}
           modules={[Navigation]}

        >
            <SwiperSlide onClick={() => searchCatgory("Deals")} className='cursor-pointer'>
                <img src={"../images/category_0.jpg"} />
            </SwiperSlide>
            <SwiperSlide onClick={() => searchCatgory("Amazon")} className='cursor-pointer'> 
                 <img src={"../images/category_1.jpg"} />
            </SwiperSlide>
            <SwiperSlide onClick={() => searchCatgory("Fashion") } className='cursor-pointer'>
                 <img src={"../images/category_2.jpg"} />
            </SwiperSlide>
            <SwiperSlide onClick={() => searchCatgory("Computers " )} className='cursor-pointer'>
                <img src={"../images/category_3.jpg"} />
            </SwiperSlide>
            <SwiperSlide onClick={() => searchCatgory("Home")} className='cursor-pointer'>
                   <img src={"../images/category_4.jpg"} />
         
            </SwiperSlide>
            <SwiperSlide onClick={() => searchCatgory("Mobiles") } className='cursor-pointer'>
                 <img src={"../images/category_5.jpg"} />
            </SwiperSlide>
 

        </Swiper>
    </div>
  )
}

export default CarouselCatgory