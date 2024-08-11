import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white py-8 shadow border-t border-gray-200'>
      <div className='max-w-[1100px] mx-auto py-4 xl:px-0 lg:px-6 px-4'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4'>
            <div className=' space-y-3'>
              <h1 className='text-blue-600 font-semibold text-lg'>
                Home Solutions
              </h1>
              <ul className=' space-y-1 text-sm'>
                <li>Kaspersky Standard</li>
                <li>Kaspersky Plus</li>
                <li>Kaspersky Premium</li>
                <li>Kaspersky Safe Kids</li>
                <li>Kaspersky Password Manager</li>
                <li>All Solutions</li>
              </ul>
            </div>
            
            <div className=' space-y-3'>
              <h1 className='text-blue-600 font-semibold text-lg'>
                Device Specific Solutions
              </h1>
              <ul className=' space-y-1 text-sm'>
                <li>Android Antivirus</li>
                <li>Mac Antivirus</li>
                <li>Mobile Security</li>
                <li>VPN for Windows</li>
                <li>VPN for Android</li>
                <li>VPN for iPhone</li>
                <li>VPN for Mac</li>
                <li>VPN for Routers</li>
              </ul>
            </div>
            
            <div className=' space-y-3'>
              <h1 className='text-blue-600 font-semibold text-lg'>
                Small & Medium Business
              </h1>
              <ul className=' space-y-1 text-sm'>
                <li>Kaspersky Small Office Security</li>
                <li>Kaspersky Next EDR Foundations</li>
                <li>Kaspersky Next EDR Optimum</li>
                <li>All Products</li>
              </ul>
            </div>
            
            <div className=' space-y-3'>
              <h1 className='text-blue-600 font-semibold text-lg'>
                Enterprise Solutions
              </h1>
              <ul className=' space-y-1 text-sm'>
                <li>Kaspersky Next</li>
                <li>Cybersecurity Services</li>
                <li>Kaspersky MDR</li>
                <li>Endpoint Security</li>
                <li>Hybrid Cloud Security</li>
                <li>All Solutions</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
