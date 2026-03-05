export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    author: "Zara C.",
    rating: 5,
    text: "Living in a high rise it's so rare that my windows get cleaned. I had to take it upon myself because the streaks were driving me crazy. I found Cali Cleanerz and let me tell you they didn't disappoint! Calvin, the owner is responsive, honest, and very professional. Proudly I can show off my apartment and I already have a second appointment booked!! So glad I found this team!",
    date: "1 year ago",
  },
  {
    author: "Shayne M.",
    rating: 5,
    text: "Calvin is one of the most skilled window cleaners I've ever worked with, your glass will be spotless. More importantly though, he's dependable and communicates well. Your experience with Cali Cleanerz will be top notch.",
    date: "1 year ago",
  },
  {
    author: "Carlo B.",
    rating: 5,
    text: "Definitely can recommend Cali Cleanerz, Calvin was very detail oriented and great to work with. I didn't realize how dirty my windows were until he showed me how clean they could be!",
    date: "1 year ago",
  },
];