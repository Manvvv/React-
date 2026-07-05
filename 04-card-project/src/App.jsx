import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/card'
const App = () => {
  const jobs = [
{
  brandLogo: "https://static.vecteezy.com/system/resources/previews/011/598/471/original/google-logo-icon-illustration-free-vector.jpg",
  company: "Google",
  posted: "5 days ago",
  post: "Senior UI/UX Designer",
  tag1: "Full-Time",
  tag2: "Senior Level",
  pay: "$120/hr",
  location: "Mumbai, India"
},

{
  brandLogo: "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
  company: "Apple",
  posted: "2 weeks ago",
  post: "Frontend Developer",
  tag1: "Full-Time",
  tag2: "Mid Level",
  pay: "$110/hr",
  location: "Bangalore, India"
},

{
  brandLogo: "https://pngimg.com/uploads/meta/meta_PNG4.png",
  company: "Meta",
  posted: "1 week ago",
  post: "Product Designer",
  tag1: "Part-Time",
  tag2: "Senior Level",
  pay: "$130/hr",
  location: "Hyderabad, India"
},

{
  brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
  company: "Amazon",
  posted: "5 days ago",
  post: "UI/UX Designer",
  tag1: "Full-Time",
  tag2: "Junior Level",
  pay: "$95/hr",
  location: "Delhi, India"
},

{
  brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/571/original/netflix-logo-on-transparent-background-free-vector.jpg",
  company: "Netflix",
  posted: "3 weeks ago",
  post: "Visual Designer",
  tag1: "Remote",
  tag2: "Senior Level",
  pay: "$145/hr",
  location: "Pune, India"
},

{
  brandLogo: "https://static.vecteezy.com/system/resources/previews/028/339/965/original/microsoft-icon-logo-symbol-free-png.png",
  company: "Microsoft",
  posted: "4 days ago",
  post: "React Developer",
  tag1: "Full-Time",
  tag2: "Mid Level",
  pay: "$115/hr",
  location: "Noida, India"
},

{
  brandLogo: "https://static.vecteezy.com/system/resources/previews/024/039/095/original/nvidia-logo-transparent-free-png.png",
  company: "NVIDIA",
  posted: "10 days ago",
  post: "AI Product Designer",
  tag1: "Contract",
  tag2: "Senior Level",
  pay: "$160/hr",
  location: "Gurgaon, India"
},

{
  brandLogo: "https://static.vecteezy.com/system/resources/previews/024/558/801/non_2x/openai-chatgpt-logo-icon-free-png.png",
  company: "OpenAI",
  posted: "2 days ago",
  post: "Design Engineer",
  tag1: "Remote",
  tag2: "Senior Level",
  pay: "$180/hr",
  location: "Remote"
},

{
  brandLogo: "https://cdn.branch.io/branch-assets/1586032766114-og_image.png",
  company: "Uber",
  posted: "8 days ago",
  post: "Product Designer",
  tag1: "Full-Time",
  tag2: "Mid Level",
  pay: "$125/hr",
  location: "Mumbai, India"
},

{
  brandLogo: "https://tse1.mm.bing.net/th/id/OIP.ZztV5ULkLdX0NlWLA8j4YgHaFj?r=0&cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
  company: "Adobe",
  posted: "6 weeks ago",
  post: "UX Researcher",
  tag1: "Part-Time",
  tag2: "Junior Level",
  pay: "$90/hr",
  location: "Chennai, India"
}
];
console.log(jobs);
  return (
    <div className='Parent'>
      {jobs.map((elem, index) => (
        <Card
          key={index}
          company={elem.company}
          posted={elem.posted}
          post={elem.post}
          tag1={elem.tag1}
          tag2={elem.tag2}
          pay={elem.pay}
          location={elem.location}
          brandLogo={elem.brandLogo}
        />
      ))}
    </div>
  )
}

export default App
