import Link from 'next/link'
import React from 'react'

function FilterOption() {

  return (
    <div>
        <div className='row mt-5'>
            <div className='col-12 pt-3'>
                <Link href={'/Category/Electronics/cat_A12JwrPX85Pjnk'} className='category-link ps-2'>
                    Electronics
                </Link>
            </div>
            <div className='col-12 pt-3'>
                <Link href={'/Category/Fashion/cat_4OANwRVRqwvYL8'} className='category-link ps-2'>
                    Fashion
                </Link>
            </div>
            <div className='col-12 pt-3'>
                <Link href={'/Category/Home&Living/cat_yA6nldAr7wEWbz'} className='category-link ps-2'>
                    Home&Living
                </Link>
            </div>
            <div className='col-12 pt-3'>
                <Link href={'/Category/Cosmetics/cat_VPvL5zAXMoAQkX'} className='category-link ps-2'>
                    Cosmetics
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FilterOption