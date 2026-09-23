const Map = () => {
  return (
    <div className="w-full h-[350px] rounded-2xl overflow-hidden mt-6">
      <iframe
        src="https://www.google.com/maps?q=Naya%20Thimi%2C%20Bhaktapur%2C%20Nepal&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="MOMO HUB Location"
      ></iframe>
    </div>
  );
};

export default Map;