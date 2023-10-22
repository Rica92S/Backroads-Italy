import tourl1 from './assets/images/tour-1.jpg'
import tourl2 from './assets/images/tour-2.jpg'
import tourl3 from './assets/images/tour-3.jpg'
import tourl4 from './assets/images/tour-4.jpg'


export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://it-it.facebook.com/",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://it-it.facebook.com/",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tourl1,
    date: "august 26th, 2023",
    title: "Naples Adventure",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location:'Campania',
    duration:6,
    price:2100
    },
    {
      id: 2,
      image: tourl2,
      date: "october 1th, 2023",
      title: "best of Florence",
      info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
      location:'Tuscany',
      duration:11,
      price:1400
      },
      {
        id: 3,
        image: tourl3,
        date: "september 15th, 2023",
        title: "explore 'Cinque Terre'",
        info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        location:'Tuscany',
        duration:8,
        price:5000
        },
        {
          id: 4,
          image: tourl4,
          date: 'december 5th, 2023',
          title: "Sicily highlights",
          info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
          location:'Sicily',
          duration:20,
          price:3300
          },
];
