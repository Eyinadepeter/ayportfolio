export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-green-900">
              Mide<span className="text-destructive">Philips</span>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-black">
              © {currentYear} midephilips. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
