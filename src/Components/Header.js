import React, { useEffect } from 'react'


const Header = () => {
  useEffect(() => {
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return; 
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; 
      n.push = n; 
      n.loaded = !0; 
      n.version = '2.0';
      n.queue = []; 
      t = b.createElement(e); 
      t.async = !0;
      t.src = v; 
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    if (window.fbq) {
      window.fbq('init', '1211799346681320');
      window.fbq('track', 'PageView');
    }
  }, []);

  const handleClick = () => {
    if (window.fbq) {
      window.fbq("track", "Purchase");
      window.fbq("track", "SubmitApplication");
    }
    window.location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
  }

  return (
    <div className='py-4 bg-white border-b border-gray-200 xl:px-0 lg:px-6 px-4'>
      <div className=' max-w-[1100px] mx-auto'>
        <div className='flex items-center justify-between'>
          <h1 className='text-blue-600 font-bold tracking-wide lg:text-4xl md:text-3xl text-2xl'>
            CryptoApex
          </h1>
          <button onClick={handleClick} className='lg:px-5 lg:py-2.5 md:px-4 md:py-2.5 px-3 py-1.5 rounded-full bg-blue-600 font-semibold text-white'>
            Join Group Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header