import Image from "next/image";

export default function Loader({ isLoaded }: { isLoaded: boolean }) {
  if (isLoaded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50 animate-fade-out">
        <div className="text-center text-white animate-bounce">
          <div className="text-2xl font-bold mb-4">
            ¡Listo para despegar! 🚀
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="preloader">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      <div className="preloader-logo">
        <div className="pulse-circle"></div>
        <Image
          src="/favicon.ico"
          width={200}
          height={200}
          alt="Cargando CHESS..."
          className="preloader-image"
        />
      </div>
    </div>
  );
}
