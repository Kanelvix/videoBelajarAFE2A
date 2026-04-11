import React, { useEffect, useState } from 'react'
import Hero from '../components/organisms/Hero'
import DescriptionBox from '../components/molecules/DescriptionBox'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../services/courses';
import { setCourses } from '../store/redux/courseSlice';
import PricingCard from '../components/organisms/PricingCard';
import ReviewsSection from '../components/organisms/ReviewsSection';
import TutorSection from '../components/organisms/TutorSection';

function ProductDetails() {
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.courses.items);
  const dispatch = useDispatch();

  const fetchCourses = () => {
    getCourses()
    .then((response) => {
      dispatch(setCourses(response.data));
    }).catch((error) => {
      console.log("error", error);
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const params = useParams().id;

  const product = data.find(item => item.id === params);

  return (
    <main className='py-16'>
      {loading === true ? 
        <p className='font-bold text-3xl text-center'>Loading...</p>
        :
        <div className='flex mx-auto max-w-[75rem] flex-col gap-9 px-5'>
          <Hero 
            title={product.title}
            desc={'Belajar bersama tutor profesional di Video Course. Kapanpun, di manapun.'}
            rating={product.rating}
            totalReview={product.totalReview}
          />
          <div className='flex gap-6 md:gap-9 flex-col-reverse md:flex-row'>
            <div className='w-full flex flex-col gap-6 md:gap-9'>
              <DescriptionBox descText={product.desc} />
              <TutorSection />
              <ReviewsSection />
            </div>
            <PricingCard title={product.title} price={product.price} />
          </div>
        </div>
      }
    </main>
  )
}

export default ProductDetails