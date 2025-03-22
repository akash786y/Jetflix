// import React from "react";

// function Footer() {
//     return (
//         <>
//             <div>
//                 <div className="flex text-white mt-10 justify-around">
//                     <div>
//                         <h3 className="font-bold">Company</h3>
//                         <div className="mt-4">
//                             <h2>About Us</h2>
//                             <h2>Carrers</h2>
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="font-bold">View Website in</h3>
//                         <div className="mt-4">
//                             <h2>English</h2>
//                             <h2>Hindi</h2>
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="font-bold">Need Help?</h3>
//                         <div className="mt-4">
//                             <h2>Visite Hep Center</h2>
//                             <h2>Share Feedback</h2>
//                         </div>
//                     </div>
//                     <div>
//                         <h3 className="font-bold">Connect with Us</h3>
//                         <div className="mt-4">
//                             <h2>English</h2>
//                             <h2>Hindi</h2>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex text-white">
//                     <div>
//                         <p className="mt-4">© 2025 STAR. All Rights Reserved.</p>
//                         <div>
//                             <ul className="flex justify-around">
//                                 <li>
//                                     Terms of Use
//                                 </li>
//                                 <li>
//                                     Privacy Policy
//                                 </li>
//                                 <li>
//                                     FAQ
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Footer;





import React from "react";

function Footer() {
  return (
    <footer className="text-gray-400 py-4 pt-24">
      {/* Footer Links */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left px-6">
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">View Website in</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">English</li>
            <li className="hover:text-white cursor-pointer">Hindi</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Need Help?</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Visit Help Center</li>
            <li className="hover:text-white cursor-pointer">Share Feedback</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Connect with Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Twitter</li>
          </ul>
        </div>
      </div>

      <div className="border-gray-700 mt-6 pt-4 text-center px-6">
        <p>© 2025 STAR. All Rights Reserved.</p>
        <ul className="flex justify-center space-x-6 mt-3">
          <li className="hover:text-white cursor-pointer">Terms of Use</li>
          <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer">FAQ</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;