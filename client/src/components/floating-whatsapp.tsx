export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/8801919201192" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-secondary text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}
