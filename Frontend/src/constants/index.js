import { facebook, instagram, twitter } from "../assets/icons";
import { fpic1, fpic2, fpic3, fpic4, fpic5, random1, random2, random3, random4, random5 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#discussion", label: "Discussion" },
    { href: "#contact-us", label: "Contact Us" },
];



export const footerLinks = [
    {
        title: "About",
        links: [
            { name: "About Agrimate", link: "/" },
            { name: "Our Team", link: "/" },
            { name: "How It Works", link: "/" },
            { name: "Media & News", link: "/" },
           
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@agrimate.com", link: "mailto:customer@agrimate.com" },
            { name: "+9189xxxxxx95", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const blogPosts = [ 
    {
        title: 'Sustainable Farming: Best Practices for a Greener Future',
        excerpt: 'Learn about sustainable farming methods that can help you increase yield while protecting the environment. From crop rotation to organic fertilizers, explore practices that benefit both your farm and the planet.',
        imageUrl: fpic1,
      },
      {
        title: 'The Impact of Technology on Modern Agriculture',
        excerpt: 'Discover how technological advancements are revolutionizing farming. From precision agriculture to AI-powered tools, see how you can leverage technology to enhance productivity and efficiency.',
        imageUrl: fpic2,
      },
      {
        title: 'Expert Tips for Pest Management',
        excerpt: 'Struggling with pests? Our agricultural experts share their top strategies for effective pest management. Learn how to identify, prevent, and control pests to protect your crops.',
        imageUrl: fpic3,
    },
];