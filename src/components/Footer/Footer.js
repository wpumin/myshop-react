import React from "react";

const Footer = ({ data }) => {
  return (
    <footer class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p class="mb-1">
          MyShop is &copy; Bootstrap, and the purpouse of project for only
          practice
        </p>
        <p class="mb-0">
          Contact me{" "}
          <a href="https://pumin-wongsiri.netlify.com">
            pumin-wong.netlify.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
