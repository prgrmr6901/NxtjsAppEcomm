import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryHeader = () => {
  return (
   
    
    <div className="container-fluid bg-light">
      <div className="d-flex flex-column align-items-center">
        <span className="fs-4 fw-bold text-primary mb-4"></span>
        <div className="row w-100">
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Electronics/cat_A12JwrPX85Pjnk'}  className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/electronics.jpg'} width={100} height={50} className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Electronics</span>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Fashion/cat_4OANwRVRqwvYL8'}className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/fash.jpg'} width={100} height={50} className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Fashion</span>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Home&Living/cat_yA6nldAr7wEWbz'} className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/furnit.jpeg'} width={100} height={50} className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Home&Living</span>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3 mb-4 customLink">
            <Link href={'/Category/Cosmetics/cat_VPvL5zAXMoAQkX'} className={`category-link`}>
              <div className="text-center">
                <Image alt="category" src={'/cosm.jpg'} width={100} height={50}className="rounded mb-2" />
                <span className="d-block" style={{ fontSize: 'medium' }}>Cosmetics</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
