// // import { SectionProps } from '../types/common';

// // export function ContactForm({ title, children }: SectionProps) {
// //   return (
// //     <section className="py-12 bg-gray-100">
// //       <div className="container mx-auto">
// //         <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
// //         <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
// //           <form>
// //             <div className="mb-4">
// //               <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
// //               <input type="text" id="name" className="w-full px-3 py-2 border rounded" />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
// //               <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
// //               <input type="tel" id="phone" className="w-full px-3 py-2 border rounded" />
// //             </div>
// //             <div className="mb-4">
// //               <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
// //               <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded"></textarea>
// //             </div>
// //             <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //         {children}
// //       </div>
// //     </section>
// //   );
// // }



// "use client"

// import { useState } from "react"
// import { MapPin, Phone, Mail, Twitter, Instagram, Youtube } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Textarea } from "@/components/ui/textarea"

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     subject: "general-inquiry",
//     message: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }

//   return (
//     <div className="grid lg:grid-cols-[400px_1fr] min-h-screen">
//       {/* Sidebar */}
//       <div className="bg-black p-8 relative overflow-hidden">
//         <div className="relative z-10">
//           <h2 className="text-orange-500 text-2xl font-bold mb-4">Contact Information</h2>
//           <p className="text-gray-400 mb-8">Say something to start a live chat!</p>

//           <div className="space-y-6">
//             <div className="flex items-center text-white">
//               <Phone className="w-5 h-5 mr-4" />
//               <span>+1012 3456 789</span>
//             </div>
//             <div className="flex items-center text-white">
//               <Mail className="w-5 h-5 mr-4" />
//               <span>demo@gmail.com</span>
//             </div>
//             <div className="flex items-center text-white">
//               <MapPin className="w-5 h-5 mr-4" />
//               <span>company location</span>
//             </div>
//           </div>

//           <div className="absolute bottom-8 flex space-x-4">
//             <a href="#" className="text-white hover:text-orange-500">
//               <Twitter className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-white hover:text-orange-500">
//               <Instagram className="w-5 h-5" />
//             </a>
//             <a href="#" className="text-white hover:text-orange-500">
//               <Youtube className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* Decorative elements */}
//         <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-500 rounded-full translate-x-16 translate-y-16" />
//         <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-full translate-y-8" />
//       </div>

//       {/* Form */}
//       <div className="p-8 lg:p-12">
//         <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="firstName" className="text-orange-500">First Name</Label>
//               <Input
//                 id="firstName"
//                 value={formData.firstName}
//                 onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="lastName" className="text-orange-500">Last Name</Label>
//               <Input
//                 id="lastName"
//                 value={formData.lastName}
//                 onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="email" className="text-orange-500">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="phoneNumber" className="text-orange-500">Phone Number</Label>
//               <Input
//                 id="phoneNumber"
//                 type="tel"
//                 value={formData.phoneNumber}
//                 onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//                 required
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label className="text-orange-500">Select Subject?</Label>
//             <RadioGroup
//               value={formData.subject}
//               onValueChange={(value) => setFormData({ ...formData, subject: value })}
//               className="flex flex-wrap gap-4"
//             >
//               {Array.from({ length: 4 }).map((_, i) => (
//                 <div key={i} className="flex items-center space-x-2">
//                   <RadioGroupItem value={`general-inquiry-${i + 1}`} id={`subject-${i + 1}`} />
//                   <Label htmlFor={`subject-${i + 1}`}>General Inquiry</Label>
//                 </div>
//               ))}
//             </RadioGroup>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="message" className="text-orange-500">Message</Label>
//             <Textarea
//               id="message"
//               placeholder="Write your message.."
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//               className="min-h-[120px]"
//               required
//             />
//           </div>

//           <Button 
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-8"
//           >
//             Send Message
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

