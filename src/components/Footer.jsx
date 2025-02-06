const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-8 mb-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold">MyCompany</h3>
          <p>123 Main St, City, Country</p>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <p>Email: info@mycompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
