import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
            dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                {/* <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span> */}
                <Link href="https://wa.me/9871965342" target={'_blank'} className='underline underline-offset-1'>Say hello</Link>
                <div className='flex items-center lg:py-2'>
                    Build With
                    <span className='text-primary dark:text-primaryDark text-2xl px-1'>
                        &#9825;
                    </span>
                    by&nbsp;
                    <Link href="https://www.linkedin.com/in/shhiivvaam" target={'_blank'} className='underline underline-offset-1'>shhiivvaam</Link>
                </div>
                <Link href="mailto:recipient@example.com?cc=life.shivam2394@gmail.com&subject=Hey%20Shivam" target={'_blank'} className='underline underline-offset-1'>connect</Link>
            </Layout>
        </footer>
    )
}

export default Footer;